


CREATE PROCEDURE EditarCategoria
    @Id UNIQUEIDENTIFIER,
    @Nombre VARCHAR(MAX)
AS
BEGIN
    UPDATE Categorias
    SET Nombre = @Nombre
    WHERE Id = @Id
END