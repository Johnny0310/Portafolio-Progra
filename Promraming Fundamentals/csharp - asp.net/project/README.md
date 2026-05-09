# 🏗️ ASP.NET Core Layered Architecture Guide

A complete step-by-step guide for building a professional ASP.NET Core API using a layered architecture commonly used in enterprise environments.

---

# 🎯 Goal

This project demonstrates how to build a clean and scalable backend architecture using:

✅ Separation of concerns
✅ Interfaces and abstractions
✅ Business rules layer
✅ Data Access Layer (DA)
✅ Dapper integration
✅ SQL Server database
✅ REST API endpoints
✅ Validation with Data Annotations

---

# 📚 What You Will Learn

🔹 How to structure a real-world ASP.NET Core solution
🔹 How to organize projects using layers
🔹 How to avoid business logic inside controllers
🔹 How to implement Flow + Rules + DA architecture
🔹 How to connect SQL Server using Dapper
🔹 How to create maintainable APIs

---

# 🧱 Architecture Overview

This project follows a layered architecture:

```txt id="f8k2qp"
API
│
├── Flujo (Business Flow)
│
├── DA (Data Access)
│
├── Abstracciones (Interfaces & Models)
│
└── SQL Server Database
```

---

# ⚙️ Technologies Used

## 🚀 Backend

* ASP.NET Core
* C#
* REST API
* Swagger

## 🗄️ Database

* SQL Server
* Stored Procedures
* Dapper ORM

## 🧩 Architecture

* Layered Architecture
* Interfaces
* Dependency Injection

---

# 📖 Step-by-Step Guide

The guide is divided into multiple sections:

1️⃣ Project Creation
2️⃣ Models
3️⃣ Interfaces & Abstractions
4️⃣ Data Access Layer
5️⃣ Business Rules
6️⃣ Flow Layer
7️⃣ API Controllers
8️⃣ Configuration (Program.cs + appsettings.json)
9️⃣ Full Request Flow

---

# 🧪 API Testing

The API can be tested using:

✅ Swagger UI
✅ Postman

---

# 📂 Final Code

You can find the complete implementation inside:

```txt id="q4m7vx"
/Productos.API
```

---

# 💡 Recommendation

Follow the guide step-by-step to fully understand how requests travel across all layers of the system.

This project is focused on building a strong backend foundation using professional architecture practices.
