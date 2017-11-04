Drop DATABASE bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE Products (
    ItemId int(11) AUTO_INCREMENT NOT NULL,
    ProductName varchar(100) NOT NULL,
    DepartmentName varchar(100) NOT NULL,
    price DECIMAL NOT NULL,
    StockQuantity  int NOT NULL, 
    PRIMARY KEY (ItemId)
);

INSERT INTO Products (ItemId, ProductName, DepartmentName, Price, StockQuantity)
VALUES (1, 'Beats By Dre', 'Electronics', 199, 175);

INSERT INTO Products (ItemId, ProductName, DepartmentName, Price, StockQuantity)
VALUES (2, 'Iphone Charger', 'Electronics', 49, 80);

INSERT INTO Products (ItemId, ProductName, DepartmentName, Price, StockQuantity)
VALUES (3, 'Samsung Charger', 'Electronics', 39, 328);

INSERT INTO Products (ItemId, ProductName, DepartmentName, Price, StockQuantity)
VALUES (4 ,'Basketball', 'Sports', 21, 90);

INSERT INTO Products (ItemId, ProductName, DepartmentName, Price, StockQuantity)
VALUES (5, 'Football', 'Sports', 19, 55);

INSERT INTO Products (ItemId, ProductName, DepartmentName, Price, StockQuantity)
VALUES (6, 'Hair Brush', 'Personal Care', 7, 300);

INSERT INTO Products (ItemId, ProductName, DepartmentName, Price, StockQuantity)
VALUES (7, 'Printer Paper', 'Office Supplies', 7, 100);

INSERT INTO Products (ItemId, ProductName, DepartmentName, Price, StockQuantity)
VALUES (8, 'Air Filter', 'Home', 17, 120);

INSERT INTO Products (ItemId, ProductName, DepartmentName, Price, StockQuantity)
VALUES (9, 'Plate Set', 'Home', 59, 111);

INSERT INTO Products (ItemId, ProductName, DepartmentName, Price, StockQuantity)
VALUES (10, 'Air Hockey', 'Sports', 100, 30);
