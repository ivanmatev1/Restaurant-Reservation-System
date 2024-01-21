SET SQL_SAFE_UPDATES=0;
DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE restaurant;
USE restaurant;

CREATE TABLE Customer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL, CONSTRAINT chk_phone_prefix CHECK (phone LIKE '+359%')
);

CREATE TABLE Staff (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    years_experience INT CHECK (years_experience >= 0) NOT NULL
);

CREATE TABLE RestaurantTable(
    id INT PRIMARY KEY AUTO_INCREMENT,
    status ENUM('Free', 'Reserved') NOT NULL
);

CREATE TABLE Reservation(
    id INT PRIMARY KEY AUTO_INCREMENT,
    status ENUM('Confirmed', 'Rejected', 'Pending') NOT NULL,
    guest_number INT CHECK (guest_number >= 1) NOT NULL,
    customer_id INT NOT NULL,
    table_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customer(id),
    FOREIGN KEY (table_id) REFERENCES RestaurantTable(id)
);

INSERT INTO Customer (name, phone) VALUES
    ('Martin', '+359892223333'),
    ('Petur', '+359880001111');
    
INSERT INTO Staff (name, years_experience) VALUES
    ('Diana', 1),
    ('Cvetelin', 6);
    
INSERT INTO RestaurantTable (status) VALUES
    ('Free'),
    ('Free');
    