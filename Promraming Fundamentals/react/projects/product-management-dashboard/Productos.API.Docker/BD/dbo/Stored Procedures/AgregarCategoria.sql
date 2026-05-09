


CREATE PROCEDURE AgregarCategoria
    @Id UNIQUEIDENTIFIER,
    @Nombre VARCHAR(MAX)
AS
BEGIN
    INSERT INTO Categorias (
        Id,
        Nombre
    )
    VALUES (
        @Id,
        @Nombre
    )
END