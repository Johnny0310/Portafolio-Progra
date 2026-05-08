# 🌐 Paso 8: API Controllers (Exposición del sistema)

## 🧠 ¿Qué es un Controller?

Un Controller es el punto de entrada del sistema.

Se encarga de:

* Recibir solicitudes HTTP
* Validar inputs básicos
* Llamar al Flujo
* Retornar respuestas

---

## 🎯 Objetivo

Exponer endpoints para gestionar productos:

* Crear
* Editar
* Eliminar
* Consultar

---

## 📁 Ubicación

📁 `API/Controllers/ProductoController.cs`

---

## 💻 Implementación

```csharp
[Route("api/[controller]")]
[ApiController]
[Authorize]
public class ProductoController : ControllerBase, IProductoController
{
    private IProductoFlujo _productoFlujo;
    private ILogger<ProductoController> _logger;

    public ProductoController(IProductoFlujo productoFlujo, ILogger<ProductoController> logger)
    {
        _productoFlujo = productoFlujo;
        _logger = logger;
    }
}
```

---

## 🔐 Autorización

```csharp
[Authorize]
```

👉 Protege todos los endpoints del controller

---

### 🔹 Roles específicos

```csharp
[Authorize(Roles ="2")]
```

👉 Solo usuarios con rol 2 pueden modificar datos

```csharp
[Authorize(Roles ="1")]
```

👉 Usuarios con rol 1 pueden consultar

---

## 📌 Endpoint: Crear producto

```csharp
[HttpPost]
public async Task<IActionResult> Agregar([FromBody] ProductoRequest producto)
{
    var resultado = _productoFlujo.Agregar(producto);
    return CreatedAtAction(nameof(Obtener), new { Id = resultado });
}
```

👉 Usa `POST`
👉 Retorna `201 Created`

---

## 📌 Endpoint: Editar producto

```csharp
[HttpPut("{Id}")]
public async Task<IActionResult> Editar(Guid Id, ProductoRequest producto)
{
    if (!await VerificarProductoExiste(Id))
        return NotFound("El Producto ID no existe");

    var resultado = await _productoFlujo.Editar(Id, producto);
    return Ok(resultado);
}
```

👉 Valida existencia antes de editar

---

## 📌 Endpoint: Eliminar producto

```csharp
[HttpDelete("{Id}")]
public async Task<IActionResult> Eliminar(Guid Id)
{
    if (!await VerificarProductoExiste(Id))
        return NotFound();

    await _productoFlujo.Eliminar(Id);
    return NoContent();
}
```

👉 Retorna `204 No Content`

---

## 📌 Endpoint: Obtener todos

```csharp
[HttpGet]
public async Task<IActionResult> Obtener()
{
    var resultado = await _productoFlujo.Obtener();

    if (!resultado.Any())
        return NoContent();

    return Ok(resultado);
}
```

---

## 📌 Endpoint: Obtener por ID

```csharp
[HttpGet("{Id}")]
public async Task<IActionResult> Obtener(Guid Id)
{
    if (!await VerificarProductoExiste(Id))
        return NotFound();

    var resultado = await _productoFlujo.Obtener(Id);
    return Ok(resultado);
}
```

---

## 🧠 Método helper

```csharp
private async Task<bool> VerificarProductoExiste(Guid Id)
{
    var producto = await _productoFlujo.Obtener(Id);
    return producto != null;
}
```

👉 Reutiliza lógica de validación

---

## 🧠 Responsabilidad del Controller

* Recibir requests
* Validar inputs básicos
* Llamar al Flujo
* Manejar respuestas HTTP

---

## ⚠️ Importante

El Controller:

* ❌ No debe contener lógica de negocio
* ❌ No debe acceder a base de datos
* ✔️ Solo orquesta entrada/salida

---

## 🧠 Buenas prácticas

* Usar IActionResult
* Manejar códigos HTTP correctamente
* Validar antes de ejecutar acciones
* Usar autorización por roles

---

## 🚫 Errores comunes

* Meter lógica en Controllers
* No validar inputs
* Retornar siempre 200 OK

---

## 🔄 Flujo completo

Cliente → Controller → Flujo → DA / Reglas → Servicios / BD

---

## 🚀 Siguiente paso

👉 Configuración del sistema (Program.cs + appsettings.json)
