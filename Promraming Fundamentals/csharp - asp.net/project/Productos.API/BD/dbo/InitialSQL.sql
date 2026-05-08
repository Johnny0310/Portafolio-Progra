-- CATEGORIES

DECLARE @Electronics UNIQUEIDENTIFIER = NEWID();
DECLARE @Clothing UNIQUEIDENTIFIER = NEWID();
DECLARE @Home UNIQUEIDENTIFIER = NEWID();
DECLARE @Sports UNIQUEIDENTIFIER = NEWID();
DECLARE @Books UNIQUEIDENTIFIER = NEWID();

INSERT INTO dbo.Categorias (Id, Nombre)
VALUES
(@Electronics, 'Electronics'),
(@Clothing, 'Clothing'),
(@Home, 'Home'),
(@Sports, 'Sports'),
(@Books, 'Books');



-- SUBCATEGORIES

INSERT INTO dbo.SubCategorias (Id, IdCategoria, Nombre)
VALUES

-- Electronics
(NEWID(), @Electronics, 'Laptops'),
(NEWID(), @Electronics, 'Smartphones'),
(NEWID(), @Electronics, 'Accessories'),

-- Clothing
(NEWID(), @Clothing, 'Men Clothing'),
(NEWID(), @Clothing, 'Women Clothing'),
(NEWID(), @Clothing, 'Shoes'),

-- Home
(NEWID(), @Home, 'Kitchen'),
(NEWID(), @Home, 'Furniture'),
(NEWID(), @Home, 'Decoration'),

-- Sports
(NEWID(), @Sports, 'Gym Equipment'),
(NEWID(), @Sports, 'Outdoor'),
(NEWID(), @Sports, 'Cycling'),

-- Books
(NEWID(), @Books, 'Programming'),
(NEWID(), @Books, 'Science Fiction'),
(NEWID(), @Books, 'History');