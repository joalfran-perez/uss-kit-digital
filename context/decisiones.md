# Índice de decisiones de diseño

ADRs en `decisions/`. Este archivo es el índice; no duplicar el razonamiento largo.

| Fecha | ADR | Status | Una línea |
|-------|-----|--------|-----------|
| 2026-08-04 | [color-hierarchy-and-binding](../decisions/2026-08-04-color-hierarchy-and-binding.md) | aceptada + aplicada | Hex solo `_Base`; `{path}` DTCG; binding 2026-08-18 |
| 2026-08-17 | Neutral 82/85/88 | aceptada + aplicada | Gana `_Base`; raíz y `elevacion.on-dark` → Neutral 88 `#1d2633` |
| 2026-08-18 | Background 3/4 | aceptada + aplicada | Light → Verde 10/20; Dark → Verde 100/90 (BG4 creado) |
| 2026-08-18 | Ghost | aceptada + aplicada | `_Base.Transparent` `#00000000`. No `rgba({ref},0)` |
| 2026-08-18 | Facultad | aceptada + aplicada | `_Base.Facultad`; texto → `{Facultad.on-light.A}` |
| 2026-08-17 | [persistent-memory](../decisions/2026-08-17-persistent-memory.md) | aceptada | Memoria en repo; `logs/` local |

## Criterios (no reabrir sin ADR)

1. Alias = `{token.path}` completo. No embeber refs en `rgba()` / funciones (DTCG Format).
2. Hex absoluto solo en `_Base` (incl. Transparent, Facultad, Secondary azul, Secondary-Verde).
3. `_Base.Secondary - Verde` ≠ `_Base.Secondary` (azul). Facultad vive en `_Base.Facultad`, no en Verde.
4. Semánticos apuntan a `_Base`, excepto `text.facultad.*` que pasa por `Facultad.*`.

Abiertas: ninguna de Fase 0. Pendiente operativo: smoke Tokens Studio (`state/current.md`).
