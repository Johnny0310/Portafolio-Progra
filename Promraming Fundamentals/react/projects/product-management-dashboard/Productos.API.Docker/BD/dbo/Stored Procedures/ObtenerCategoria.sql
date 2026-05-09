


CREATE PROCEDURE ObtenerCategoria
    @Id UNIQUEIDENTIFIER
AS
BEGIN
    SELECT
        Id,
        Nombre
    FROM Categorias
    WHERE Id = @Id
END