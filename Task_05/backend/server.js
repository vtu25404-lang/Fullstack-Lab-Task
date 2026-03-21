const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "paymentDB"
};

// Payment API with Transaction
app.post("/pay", async (req, res) => {
    const { senderId, receiverId, amount } = req.body;

    const conn = await mysql.createConnection(dbConfig);

    try {
        await conn.beginTransaction();

        // 1. Check sender balance
        const [rows] = await conn.query(
            "SELECT balance FROM accounts WHERE id = ?",
            [senderId]
        );

        if (rows.length === 0) {
            throw new Error("Sender not found");
        }

        if (rows[0].balance < amount) {
            throw new Error("Insufficient balance");
        }

        // 2. Deduct from sender
        await conn.query(
            "UPDATE accounts SET balance = balance - ? WHERE id = ?",
            [amount, senderId]
        );

        // 3. Add to receiver
        await conn.query(
            "UPDATE accounts SET balance = balance + ? WHERE id = ?",
            [amount, receiverId]
        );

        // 4. Commit
        await conn.commit();

        res.send("✅ Payment Successful");

    } catch (err) {
        await conn.rollback();
        res.send("❌ Payment Failed: " + err.message);
    } finally {
        conn.end();
    }
});


// Get all accounts
app.get("/accounts", async (req, res) => {
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.query("SELECT * FROM accounts");
    res.json(rows);
    conn.end();
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});