
CREATE PROCEDURE ObtenerSubCategorias
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
END