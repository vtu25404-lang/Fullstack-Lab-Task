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

USE orderDB;

SELECT * FROM customers;
SELECT * FROM products;
SELECT * FROM orders;

SELECT c.name, p.product_name, o.quantity
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN products p ON o.product_id = p.id;

SELECT MAX(o.quantity * p.price)
FROM orders o
JOIN products p ON o.product_id = p.id;

SELECT customer_id, COUNT(*)
FROM orders
GROUP BY customer_id
ORDER BY COUNT(*) DESC;