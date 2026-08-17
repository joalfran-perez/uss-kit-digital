# Índice de decisiones de diseño

ADRs en `decisions/`. Este archivo es el índice; no duplicar el razonamiento largo.

| Fecha | ADR | Status | Una línea |
|-------|-----|--------|-----------|
| 2026-08-04 | [color-hierarchy-and-binding](../decisions/2026-08-04-color-hierarchy-and-binding.md) | propuesta | Hex solo en `_Base`; semánticos y escalas raíz con `{path}` |
| 2026-08-17 | [persistent-memory](../decisions/2026-08-17-persistent-memory.md) | aceptada | Memoria en repo (`AGENTS.md`, `context/`, `state/`, …) |

## Abiertas (bloquean binding Color)

1. ¿`_Base` gana en Neutral 82/85/88? Hoy drift vs `Color.Neutral` y `elevacion.on-dark`.
2. Background 3/4 (`#d0dde6`, `#d9dced`): ¿nuevo step en `_Base` o excepción?
3. Ghost surfaces (`#ffffff00`, `#0b141f00`): ¿alpha compuesto, primitivo transparent, o whitelist?

Hasta cerrar → no reescribir `tokens.json` Color. Ver `state/current.md`.
