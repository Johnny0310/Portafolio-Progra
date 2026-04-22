# 🔄 Paso 7: Flujo (Orquestación del sistema)

## 🧠 ¿Qué es el Flujo?

El flujo es la capa encargada de coordinar la ejecución del sistema.

No contiene acceso directo a base de datos ni lógica compleja, sino que decide:

* Cuándo usar Data Access
* Cuándo aplicar reglas
* Cómo combinar resultados

---

## 🎯 Objetivo

Implementar la clase `ProductoFlujo`, que conecta:

* DA (Base de datos)
* Reglas (Lógica de negocio)

---

## 📁 Ubicación

📁 `Flujo/ProductoFlujo.cs`

---

## 💻 Implementación

```csharp id="g8xkq1"
public class ProductoFlujo : IProductoFlujo
{
    private readonly IProductoDA _productoDA;
    private readonly ITipoDeCambioRegla _tipoDeCambioRegla;

    public ProductoFlujo(IProductoDA productoDA, ITipoDeCambioRegla tipoDeCambio)
    {
        _productoDA = productoDA;
        _tipoDeCambioRegla = tipoDeCambio;
    }

    public Task<Guid> Agregar(ProductoRequest producto)
    {
        return _productoDA.Agregar(producto);
    }

    public Task<Guid> Editar(Guid Id, ProductoRequest producto)
    {
        return _productoDA.Editar(Id, producto);
    }

    public Task<Guid> Eliminar(Guid Id)
    {
        return _productoDA.Eliminar(Id);
    }

    public Task<IEnumerable<ProductoResponse>> Obtener()
    {
        return _productoDA.Obtener();
    }

    public async Task<ProductoDetalle> Obtener(Guid Id)
    {
        var producto = await _productoDA.Obtener(Id);
        var fechaHoy = DateTime.Now.ToString("yyyy/MM/dd");

        if (producto == null)
            return null;

        try
        {
            var tipoCambio = await _tipoDeCambioRegla.ValorColones(fechaHoy);
            producto.PrecioEnDolar = producto.Precio / tipoCambio;
            producto.PrecioDolar = tipoCambio;
        }
        catch
        {
            producto.PrecioEnDolar = 0;
        }

        return producto;
    }
}
```

---

## 🔍 Explicación

### 🔹 Delegación directa

```csharp id="m3r1kz"
return _productoDA.Obtener();
```

👉 El flujo delega operaciones simples directamente a DA

---

### 🔹 Orquestación

```csharp id="c2k8bz"
var producto = await _productoDA.Obtener(Id);
```

👉 Primero obtiene datos desde base de datos

---

### 🔹 Aplicación de reglas

```csharp id="7v9xlp"
var tipoCambio = await _tipoDeCambioRegla.ValorColones(fechaHoy);
```

👉 Luego aplica lógica de negocio externa

---

### 🔹 Transformación final

```csharp id="9x0nqp"
producto.PrecioEnDolar = producto.Precio / tipoCambio;
```

👉 Combina datos internos + externos

---

### 🔹 Manejo de errores (fallback)

```csharp id="q2r7yt"
catch
{
    producto.PrecioEnDolar = 0;
}
```

👉 Evita que falle toda la operación si el servicio externo falla

---

## 🧠 Responsabilidad del Flujo

* Orquestar llamadas
* Coordinar capas
* Combinar resultados
* Aplicar reglas cuando sea necesario

---

## ⚠️ Importante

El flujo:

* ❌ No debe acceder directamente a base de datos (usa DA)
* ❌ No debe consumir APIs directamente (usa Servicios vía Reglas)
* ✔️ Solo coordina

---

## 🧠 Buenas prácticas

* Mantener métodos simples
* Delegar responsabilidades
* Manejar errores externos
* No mezclar lógica pesada

---

## 🚫 Errores comunes

* Meter lógica de negocio en Flujo
* Llamar APIs externas directamente
* Acoplar DA y Servicios sin reglas

---

## 🔄 Flujo completo

Controller → Flujo → DA / Reglas → Servicios / BD

---

## 🚀 Siguiente paso

👉 Crear API Controllers (exposición del sistema)
