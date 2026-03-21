CREATE DATABASE paymentDB;
USE paymentDB;

CREATE TABLE accounts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    balance DECIMAL(10,2)
);

INSERT INTO accounts (name, balance) VALUES
('Alice', 10000),
('Bob', 5000),
('Charlie', 8000);

UPDATE accounts SET balance = 10000 WHERE id = 1;
UPDATE accounts SET balance = 5000 WHERE id = 2;
UPDATE accounts SET balance = 8000 WHERE id = 3;

SELECT * FROM accounts;

DESCRIBE accounts;
