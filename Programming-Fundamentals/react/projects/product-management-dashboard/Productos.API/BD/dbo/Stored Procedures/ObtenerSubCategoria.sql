


CREATE PROCEDURE ObtenerSubCategoria
    @Id UNIQUEIDENTIFIER
AS
BEGIN
    SELECT
        SC.Id,
        SC.IdCategoria,
        SC.Nombre,
        C.Nombre AS Categoria
    FROM SubCategorias SC
    INNER JOIN Categorias C
        ON SC.IdCategoria = C.Id
    WHERE SC.Id = @Id
END