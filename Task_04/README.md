# 🛒 Task 4: Order Management using Joins

---

## 📋 Description
This project demonstrates **Order Management System** using:

- ✅ JOIN queries (Customers, Orders, Products)
- ✅ Subqueries (Highest value order)
- ✅ GROUP BY & ORDER BY (Most active customer)
- ✅ Simple frontend using HTML, CSS, JavaScript

---

## 🎯 Features

- 📦 View Customer Order History (JOIN)
- 💰 Find Highest Value Order (Subquery)
- 👤 Identify Most Active Customer
- 🌐 Display results in frontend

---

## 🗂️ Project Structure

Task-4-Order-Management/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
└── package-lock.json

---

## 🗄️ Database Setup

Run in MySQL:

```sql
CREATE DATABASE orderDB;
USE orderDB;

CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity INT,
    order_date DATE
);

INSERT INTO customers (name) VALUES ('Alice'), ('Bob');

INSERT INTO products (product_name, price) VALUES
('Laptop', 60000),
('Phone', 20000);

INSERT INTO orders (customer_id, product_id, quantity, order_date) VALUES
(1, 1, 1, '2026-03-01'),
(1, 2, 2, '2026-03-05'),
(2, 2, 1, '2026-03-06');