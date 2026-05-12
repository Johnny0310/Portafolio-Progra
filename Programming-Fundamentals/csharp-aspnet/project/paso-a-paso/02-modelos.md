# 📦 Paso 2: Modelos (Entidades del sistema)

## 🧠 ¿Qué es un modelo?

Un modelo representa una entidad del sistema.
Es la estructura de datos que se utiliza a lo largo de toda la aplicación.

---

## 🎯 Objetivo

Definir la entidad `Producto`, que será utilizada en:

* Flujo
* Reglas
* Data Access
* API

---

## 📁 Ubicación

Los modelos deben colocarse en un lugar accesible para todas las capas.

En este caso, se ubicarán en:

📁 `Abstracciones/Modelos/`

---

## 💻 Implementación

```csharp
namespace Abstracciones.Modelos
{
    public class Producto
    {
        public int IdProducto { get; set; }
        public string Nombre { get; set; }
        public decimal Precio { get; set; }
    }
}
```

---

## 🔍 Explicación

* `IdProducto` → Identificador único
* `Nombre` → Nombre del producto
* `Precio` → Valor del producto

Este modelo es simple, pero suficiente para demostrar el flujo completo del sistema.

---

## ⚠️ Importante

El modelo:

* ❌ No debe contener lógica de negocio
* ❌ No debe acceder a base de datos
* ✔️ Solo define estructura de datos

---

## 🧠 Buenas prácticas

* Usar nombres claros (`Producto`, no `Tbl_Prod`)
* Mantener modelos simples
* Evitar lógica dentro de entidades

---

## 🚫 Errores comunes

* Agregar validaciones aquí (deben ir en Reglas)
* Mezclar DTOs con modelos
* Hacer modelos dependientes de frameworks

---

## 🔄 Uso en el sistema

Este modelo será utilizado en:

* DA → para mapear datos de base de datos
* Flujo → para transportar información
* API → para retornar respuestas

---

## 🚀 Siguiente paso

👉 Crear las Abstracciones (Interfaces)
