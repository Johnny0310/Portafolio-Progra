# 🏗️ Paso 1: Creación del Proyecto

## 🧠 Objetivo

Crear la base de una API en ASP.NET Core con una estructura preparada para implementar una arquitectura por capas.

---

## ⚙️ Creación de la solución

Primero se crea una solución que contendrá todos los proyectos:

```bash
dotnet new sln -n ArquitecturaCapas
```

---

## 📦 Creación de proyectos

Se crean los proyectos necesarios para separar responsabilidades:

```bash
dotnet new webapi -n API
dotnet new classlib -n Flujo
dotnet new classlib -n DA
dotnet new classlib -n Reglas
dotnet new classlib -n Abstracciones
```

---

## 📌 Explicación de cada proyecto

### API

* Punto de entrada del sistema
* Contiene Controllers
* Maneja requests y responses

---

### Flujo

* Orquesta la lógica del sistema
* Conecta reglas con acceso a datos

---

### DA (Data Access)

* Acceso a base de datos
* Uso de Dapper
* Ejecución de Stored Procedures

---

### Reglas

* Contiene lógica de negocio
* Validaciones
* Procesos internos

---

### Abstracciones

* Define interfaces
* Permite desacoplar implementaciones

---

## 🔗 Agregar proyectos a la solución

```bash
dotnet sln add API/API.csproj
dotnet sln add Flujo/Flujo.csproj
dotnet sln add DA/DA.csproj
dotnet sln add Reglas/Reglas.csproj
dotnet sln add Abstracciones/Abstracciones.csproj
```

---

## 🔄 Configuración de referencias

Se deben configurar las dependencias entre proyectos:

```bash
dotnet add Flujo reference Abstracciones
dotnet add DA reference Abstracciones
dotnet add Reglas reference Abstracciones
dotnet add API reference Flujo
```

---

## 🧠 Explicación de las referencias

* Flujo depende de Abstracciones → usa interfaces
* DA depende de Abstracciones → implementa interfaces
* Reglas depende de Abstracciones → implementa interfaces
* API depende de Flujo → punto de entrada

👉 Esto evita acoplamiento directo entre capas

---

## 📁 Estructura final

```plaintext
ArquitecturaCapas/
│
├── API/
├── Flujo/
├── DA/
├── Reglas/
├── Abstracciones/
└── ArquitecturaCapas.sln
```

---

## ✅ Buenas prácticas

* Separar cada responsabilidad en su propio proyecto
* Usar nombres claros
* Mantener dependencias en una sola dirección

---

## 🚫 Errores comunes

* Hacer todo en un solo proyecto
* No usar interfaces
* Permitir que API acceda directamente a DA

---

## 🚀 Siguiente paso

👉 Crear los modelos (entidades) del sistema
