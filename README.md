# evaluaciones-api

Backend mínimo para el sistema de evaluaciones.

## Ejecutar localmente

```bash
npm install
npm start
```

Por defecto escucha en `PORT` o `8080`.

## Health check

```http
GET /health
```

Respuesta esperada:

```json
{
  "ok": true,
  "service": "evaluacion-api"
}
```
