# ⚙️ Paso 9: Configuración del sistema (Program.cs + appsettings.json)

## 🧠 ¿Qué es la configuración?

La configuración permite definir:

* Conexiones a base de datos
* Tokens de seguridad
* Endpoints externos
* Registro de dependencias

---

## 🎯 Objetivo

Configurar correctamente:

* Dependency Injection
* Autenticación JWT
* HttpClient
* Conexiones a base de datos
* Servicios del sistema

---

# 🔧 Program.cs

## 🧠 Registro de servicios (Dependency Injection)

```csharp id="p4a7xm"
builder.Services.AddScoped<IProductoFlujo, ProductoFlujo>();
builder.Services.AddScoped<IProductoDA, ProductoDA>();
builder.Services.AddScoped<ITipoDeCambioRegla, TipoDeCambioRegla>();
builder.Services.AddScoped<ITipoDeCambioServicio, TipoDeCambioServicio>();
```

👉 Se registran las interfaces con sus implementaciones

---

## 🔁 Ciclo de vida: Scoped

```csharp id="8xz1rl"
AddScoped
```

👉 Se crea una instancia por cada request HTTP

---

## 🌐 HttpClient

```csharp id="y9xv3n"
builder.Services.AddHttpClient();
```

👉 Permite consumir APIs externas correctamente

---

## 🔐 Configuración de JWT

```csharp id="9r0wkp"
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
```

👉 Se configura autenticación basada en tokens

---

### 🔹 Parámetros importantes

```csharp id="p2m4yx"
ValidateIssuer = true
ValidateAudience = true
ValidateLifetime = true
ValidateIssuerSigningKey = true
```

👉 Validaciones de seguridad del token

---

### 🔹 Clave secreta

```csharp id="m3l7dz"
new SymmetricSecurityKey(
    Encoding.UTF8.GetBytes(tokenConfig.key))
```

👉 Se usa para firmar y validar tokens

---

## 🧠 Middleware personalizado

```csharp id="w7n2pa"
app.AutorizacionClaims();
```

👉 Middleware propio para manejo de claims

---

## 🚀 Pipeline HTTP

```csharp id="b5x8ku"
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
```

👉 Define cómo se procesan las solicitudes

---

# 📁 appsettings.json

## 🗄️ Connection Strings

```json id="x4n9rp"
"ConnectionStrings": {
  "BD": "...",
  "BDSeguridad": "..."
}
```

👉 Define conexiones a base de datos

---

## 🔐 Configuración de Token

```json id="c7v2lf"
"Token": {
  "key": "...",
  "Issuer": "localhost",
  "Audience": "localhost",
  "Expires": "120"
}
```

👉 Define parámetros de autenticación JWT

---

## 🌐 API Externa

```json id="k2z9qs"
"ApiEndPointsTipoCambio": {
  "UrlBase": "...",
  "Token": "...",
  "Metodos": [...]
}
```

👉 Configuración dinámica para servicios externos

---

## 🧠 Beneficios de usar appsettings

* Evita hardcodear valores
* Permite cambiar configuración sin recompilar
* Facilita despliegues

---

# ⚠️ Buenas prácticas

* No exponer tokens en producción
* Usar variables de entorno
* Separar configuración por ambiente

---

# 🚫 Errores comunes

* Hardcodear URLs
* No usar Dependency Injection
* Manejar configuración dentro del código

---

# 🔄 Flujo completo del sistema

Cliente → Controller → Flujo →
→ DA (Base de datos)
→ Reglas → Servicios (API externa)

---

# 🎯 Conclusión

Con esta configuración, el sistema queda completamente funcional, escalable y desacoplado.

---

## 🚀 Resultado final

Se ha construido una API completa con:

* Arquitectura por capas
* Acceso a base de datos con Dapper
* Consumo de APIs externas
* Autenticación JWT
* Separación de responsabilidades
