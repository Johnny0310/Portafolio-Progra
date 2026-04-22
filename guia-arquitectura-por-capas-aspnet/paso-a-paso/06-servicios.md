# 🌐 Paso 6: Servicios (Consumo de APIs externas)

## 🧠 ¿Qué es la capa de Servicios?

La capa de Servicios se encarga de consumir APIs externas.

---

## 🎯 Objetivo

Consumir un servicio externo para obtener el tipo de cambio del dólar.

---

## 📁 Ubicación

📁 `Servicios/TipoDeCambioServicio.cs`

---

## 💻 Implementación

```csharp id="w2n9pz"
public class TipoDeCambioServicio : ITipoDeCambioServicio
{
    private readonly IConfiguracion _configuracion;
    private readonly IHttpClientFactory _httpClient;

    public TipoDeCambioServicio(IConfiguracion configuracion, IHttpClientFactory httpClient)
    {
        _configuracion = configuracion;
        _httpClient = httpClient;
    }

    public async Task<TipoDeCambio> Obtener(string fecha)
    {
        var endPoint = _configuracion.ObtenerMetodo("ApiEndPointsTipoCambio", "ObtenerTipoDeCambio");

        var cliente = _httpClient.CreateClient("ServicioTipoDeCambio");

        var token = _configuracion.ObtenerToken("ApiEndPointsTipoCambio");

        cliente.DefaultRequestHeaders.Clear();
        cliente.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}");

        var respuesta = await cliente.GetAsync(string.Format(endPoint, fecha));

        respuesta.EnsureSuccessStatusCode();

        var resultado = await respuesta.Content.ReadAsStringAsync();

        var opciones = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

        return JsonSerializer.Deserialize<TipoDeCambio>(resultado, opciones);
    }
}
```

---

## 🔍 Explicación

### 🔹 IHttpClientFactory

👉 Permite manejar correctamente conexiones HTTP

---

### 🔹 Configuración dinámica

```csharp id="zz2l3k"
_configuracion.ObtenerMetodo(...)
```

👉 Evita hardcodear URLs

---

### 🔹 Autenticación

```csharp id="9lx0gm"
Authorization: Bearer token
```

👉 Manejo de seguridad para APIs externas

---

## 🧠 Buenas prácticas

* Usar IHttpClientFactory (no HttpClient directo)
* Manejar tokens desde configuración
* Validar respuestas HTTP

---

## 🚫 Errores comunes

* Crear HttpClient manualmente
* Hardcodear endpoints
* No validar respuestas

---

## 🔄 Flujo en el sistema

Flujo → Reglas → Servicios → API externa

---

## 🚀 Siguiente paso

👉 Implementar Flujo (orquestación completa)
