


CREATE PROCEDURE AgregarSubCategoria
    @Id UNIQUEIDENTIFIER,
    @IdCategoria UNIQUEIDENTIFIER,
    @Nombre VARCHAR(MAX)
AS
BEGIN
    INSERT INTO SubCategorias (
        Id,
        IdCategoria,
        Nombre
    )
    VALUES (
        @Id,
        @IdCategoria,
        @Nombre
    )
END