


CREATE PROCEDURE EditarSubCategoria
    @Id UNIQUEIDENTIFIER,
    @IdCategoria UNIQUEIDENTIFIER,
    @Nombre VARCHAR(MAX)
AS
BEGIN
    UPDATE SubCategorias
    SET
        IdCategoria = @IdCategoria,
        Nombre = @Nombre
    WHERE Id = @Id
END