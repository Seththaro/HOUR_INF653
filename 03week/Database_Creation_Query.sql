-- Create database
CREATE DATABASE my_guitar_shop2;
USE my_guitar_shop2;

-- Create customers table
CREATE TABLE customers (
    customerID INT AUTO_INCREMENT PRIMARY KEY,
    emailAddress VARCHAR(255) NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL
);

-- Create addresses table
CREATE TABLE addresses (
    addressID INT AUTO_INCREMENT PRIMARY KEY,
    customerID INT,
    line1 VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zipCode VARCHAR(20) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    FOREIGN KEY (customerID) REFERENCES customers(customerID) ON DELETE CASCADE
);

-- Insert customers
INSERT INTO customers (emailAddress, firstName, lastName) VALUES
('john.doe@email.com', 'John', 'Doe'),
('jane.smith@email.com', 'Jane', 'Smith'),
('michael.brown@email.com', 'Michael', 'Brown'),
('emily.johnson@email.com', 'Emily', 'Johnson'),
('chris.wilson@email.com', 'Chris', 'Wilson'),
('lisa.martin@email.com', 'Lisa', 'Martin'),
('daniel.thomas@email.com', 'Daniel', 'Thomas'),
('sarah.white@email.com', 'Sarah', 'White'),
('james.harris@email.com', 'James', 'Harris'),
('olivia.moore@email.com', 'Olivia', 'Moore');

-- Insert addresses
INSERT INTO addresses (customerID, line1, city, state, zipCode, phone) VALUES
(1, '123 Main St', 'New York', 'NY', '10001', '555-1234'),
(2, '456 Oak Ave', 'Los Angeles', 'CA', '90001', '555-5678'),
(3, '789 Pine Rd', 'Chicago', 'IL', '60601', '555-9101'),
(4, '101 Maple Dr', 'Houston', 'TX', '77001', '555-1122'),
(5, '202 Birch Ln', 'Phoenix', 'AZ', '85001', '555-3344'),
(6, '303 Cedar Blvd', 'Philadelphia', 'PA', '19101', '555-5566'),
(7, '404 Spruce St', 'San Antonio', 'TX', '78201', '555-7788'),
(8, '505 Walnut Ave', 'San Diego', 'CA', '92101', '555-9900'),
(9, '606 Cherry Ct', 'Dallas', 'TX', '75201', '555-2233'),
(10, '707 Elm Pl', 'San Jose', 'CA', '95101', '555-4455');