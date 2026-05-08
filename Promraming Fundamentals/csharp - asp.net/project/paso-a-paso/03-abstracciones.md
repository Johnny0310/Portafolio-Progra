# 🔌 Paso 3: Abstracciones (Interfaces)

## 🧠 ¿Qué son las abstracciones?

Las abstracciones definen contratos (interfaces) que permiten desacoplar las capas del sistema.

En lugar de depender de implementaciones concretas, las capas trabajan contra interfaces.

---

## 🎯 Objetivo

Definir las interfaces para:

* Data Access (DA)
* Flujo
* Reglas
* Servicios

---

## 📁 Estructura

Las interfaces se organizan por tipo:

```plaintext
Abstracciones/
└── Interfaces/
    ├── DA/
    ├── Flujo/
    ├── Reglas/
    └── Servicios/
```

---

## 💻 Ejemplo: Interface de Data Access

📄 `Interfaces/DA/IProductoDA.cs`

```csharp
public interface IProductoDA
{
    Task<List<Producto>> ObtenerProductos();
}
```

---

## 💻 Ejemplo: Interface de Reglas

📄 `Interfaces/Reglas/IProductoReglas.cs`

```csharp
public interface IProductoReglas
{
    void ValidarConsulta();
}
```

---

## 💻 Ejemplo: Interface de Flujo

📄 `Interfaces/Flujo/IProductoFlujo.cs`

```csharp
public interface IProductoFlujo
{
    Task<List<Producto>> ObtenerProductos();
}
```

---

## 🔍 Explicación

Cada capa define su contrato:

* DA → define acceso a datos
* Reglas → define lógica de negocio
* Flujo → define orquestación

Esto permite:

* Cambiar implementaciones sin afectar otras capas
* Facilitar pruebas
* Reducir acoplamiento

---

## 🧠 Principio aplicado

👉 Inversión de Dependencias (SOLID)

Las capas de alto nivel no dependen de las de bajo nivel, sino de abstracciones.

---

## ✅ Buenas prácticas

* Nombrar interfaces con prefijo `I`
* Separar interfaces por responsabilidad
* No mezclar lógica en interfaces

---

## 🚫 Errores comunes

* No usar interfaces (acoplamiento fuerte)
* Mezclar múltiples responsabilidades en una sola interface
* Hacer interfaces demasiado grandes

---

## 🔄 Uso en el sistema

Estas interfaces serán implementadas en:

* DA → implementa IProductoDA
* Reglas → implementa IProductoReglas
* Flujo → implementa IProductoFlujo

---

## 🚀 Siguiente paso

👉 Implementar Data Access (DA)
