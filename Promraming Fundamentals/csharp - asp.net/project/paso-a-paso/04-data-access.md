# 🗄️ Paso 4: Data Access (Dapper + Stored Procedures)

## 🧠 ¿Qué es Data Access?

La capa de acceso a datos (DA) es responsable de interactuar con la base de datos.

En este proyecto se utiliza:

* Dapper (micro ORM)
* Stored Procedures

---

## 🎯 Objetivo

Implementar la clase `ProductoDA` que permite:

* Agregar productos
* Editar productos
* Eliminar productos
* Obtener productos

---

## 📁 Ubicación

📁 `DA/ProductoDA.cs`

---

## 💻 Implementación

```csharp id="t3wqk8"
public class ProductoDA : IProductoDA
{
    private IRepositorioDapper _repositorioDapper;
    private SqlConnection _sqlConnection;

    public ProductoDA(IRepositorioDapper repositorioDapper)
    {
        _repositorioDapper = repositorioDapper;
        _sqlConnection = _repositorioDapper.ObetenerRepositorio();
    }
}
```

---

## 🔍 Explicación

* `IRepositorioDapper` → abstrae la conexión a base de datos
* `SqlConnection` → conexión directa
* Se evita acoplar directamente la configuración

---

## 🧠 Uso de Dapper

### 📌 Obtener datos

```csharp id="1q0vht"
public async Task<IEnumerable<ProductoResponse>> Obtener()
{
    string query = @"ObtenerProductos";
    var resultadoConsulta = await _sqlConnection.QueryAsync<ProductoResponse>(query);
    return resultadoConsulta;
}
```

👉 `QueryAsync` permite mapear automáticamente resultados a objetos

---

### 📌 Insertar datos

```csharp id="ffp8px"
public async Task<Guid> Agregar(ProductoRequest producto)
{
    string query = @"AgregarProducto";

    var resultado = await _sqlConnection.ExecuteScalarAsync<Guid>(query, new
    {
        Id = Guid.NewGuid(),
        IdSubCategoria = producto.IdSubCategoria,
        Nombre = producto.Nombre,
        Descripcion = producto.Descripcion,
        Precio = producto.Precio,
        Stock = producto.Stock,
        CodigoBarras = producto.CodigoBarras
    });

    return resultado;
}
```

👉 `ExecuteScalarAsync` devuelve el valor generado por el procedimiento

---

## 🧠 Stored Procedures

En lugar de queries directos, se utilizan procedimientos almacenados:

* `AgregarProducto`
* `EditarProducto`
* `EliminarProducto`
* `ObtenerProductos`
* `ObtenerProducto`

👉 Esto mejora:

* Seguridad
* Performance
* Control del acceso a datos

---

## ⚠️ Validación previa

```csharp id="g6b7bc"
private async Task verificarProductoExiste(Guid Id)
{
    var producto = await Obtener(Id);
    if (producto == null)
        throw new Exception("No se encontro el producto");
}
```

👉 Se valida antes de editar o eliminar

---

## 🧠 Buenas prácticas aplicadas

* Uso de async/await
* Separación mediante interfaces
* Uso de Dapper para eficiencia
* Validación antes de operaciones críticas

---

## 🚫 Errores comunes

* Usar Entity Framework para todo sin necesidad
* No validar existencia antes de modificar
* Acoplar directamente la conexión en la clase

---

## 🔄 Flujo en el sistema

Flujo → DA → Base de datos

---

## 🚀 Siguiente paso

👉 Implementar Reglas de negocio
