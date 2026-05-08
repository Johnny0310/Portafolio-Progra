# 🧠 Paso 5: Reglas de Negocio

## 🧠 ¿Qué son las reglas?

La capa de Reglas se encarga de validar, procesar y transformar la información antes de que sea utilizada por otras capas.

En este proyecto, también actúa como intermediario entre:

* Flujo
* Servicios externos

---

## 🎯 Objetivo

Implementar lógica para obtener el tipo de cambio del dólar, validando la información recibida desde un servicio externo.

---

## 📁 Ubicación

📁 `Reglas/TipoDeCambioRegla.cs`

---

## 💻 Implementación

```csharp id="v7y1lm"
public class TipoDeCambioRegla : ITipoDeCambioRegla
{
    private readonly ITipoDeCambioServicio _tipoDeCambioServicio;
    private readonly IConfiguracion _configuracion;

    public TipoDeCambioRegla(ITipoDeCambioServicio tipoCambioServicio, IConfiguracion configuracion)
    {
        _tipoDeCambioServicio = tipoCambioServicio;
        _configuracion = configuracion;
    }

    public async Task<decimal> ValorColones(string fecha)
    {
        var tipoCambio = await _tipoDeCambioServicio.Obtener(fecha);

        if (tipoCambio?.Datos == null || !tipoCambio.Datos.Any())
            throw new Exception("No se pudo obtener el tipo de cambio del dólar.");

        var indicador = tipoCambio.Datos[0].Indicadores.FirstOrDefault();

        if (indicador?.Series == null || !indicador.Series.Any())
            throw new Exception("No hay datos disponibles para el tipo de cambio.");

        var valor = indicador.Series.First().valorDatoPorPeriodo;

        return valor;
    }
}
```

---

## 🔍 Explicación

### 🔹 Consumo de servicio externo

```csharp id="t1w7y0"
var tipoCambio = await _tipoDeCambioServicio.Obtener(fecha);
```

👉 La regla NO llama directamente HTTP → usa una abstracción

---

### 🔹 Validaciones

```csharp id="6k3j1v"
if (tipoCambio?.Datos == null || !tipoCambio.Datos.Any())
```

👉 Se valida que la respuesta tenga datos válidos

---

### 🔹 Transformación de datos

```csharp id="3g8mzp"
var valor = indicador.Series.First().valorDatoPorPeriodo;
```

👉 Se extrae solo el dato necesario del objeto complejo

---

## 🧠 Responsabilidades de esta capa

* Validar datos
* Procesar información
* Transformar respuestas externas
* Centralizar lógica de negocio

---

## ⚠️ Importante

Esta capa:

* ❌ No debe hacer llamadas HTTP directamente
* ❌ No debe acceder a base de datos
* ✔️ Debe usar interfaces (Servicios o DA)

---

## 🧠 Buenas prácticas

* Validar siempre respuestas externas
* No confiar en datos de APIs
* Separar transformación de datos de servicios

---

## 🚫 Errores comunes

* Consumir APIs directamente desde Flujo
* No validar respuestas externas
* Mezclar lógica de negocio con acceso a datos

---

## 🔄 Flujo en el sistema

Flujo → Reglas → Servicios → API externa

---

## 🚀 Siguiente paso

👉 Implementar Servicios (consumo de APIs externas)
