const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "orderDB"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});


// 🔹 Get Order History (JOIN)
app.get("/orders", (req, res) => {
    const sql = `
        SELECT c.name, p.product_name, o.quantity, p.price,
        (o.quantity * p.price) AS total, o.order_date
        FROM orders o
        JOIN customers c ON o.customer_id = c.id
        JOIN products p ON o.product_id = p.id
        ORDER BY o.order_date DESC
    `;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});


// 🔹 Highest Value Order (Subquery)
app.get("/highest-order", (req, res) => {
    const sql = `
        SELECT c.name, (o.quantity * p.price) AS total
        FROM orders o
        JOIN customers c ON o.customer_id = c.id
        JOIN products p ON o.product_id = p.id
        WHERE (o.quantity * p.price) = (
            SELECT MAX(o2.quantity * p2.price)
            FROM orders o2
            JOIN products p2 ON o2.product_id = p2.id
        )
    `;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});


// 🔹 Most Active Customer
app.get("/active-customer", (req, res) => {
    const sql = `
        SELECT c.name, COUNT(*) as total_orders
        FROM orders o
        JOIN customers c ON o.customer_id = c.id
        GROUP BY o.customer_id
        ORDER BY total_orders DESC
        LIMIT 1
    `;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});