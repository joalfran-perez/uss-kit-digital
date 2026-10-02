# Índice de decisiones de diseño

ADRs en `decisions/`. Este archivo es el índice; no duplicar el razonamiento largo.

| Fecha | ADR | Status | Una línea |
|-------|-----|--------|-----------|
| 2026-10-01 | [native-reextract-source-of-truth](../decisions/2026-10-01-native-reextract-source-of-truth.md) | aceptada + aplicada | Figma manda en `main`; `tokens.json` intacto; `readme-guide` estacionado |
| 2026-08-04 | [color-hierarchy-and-binding](../decisions/2026-08-04-color-hierarchy-and-binding.md) | legacy (`readme-guide`) | Solo vuelve a `main` con acuerdo SoT code-first |
| 2026-08-17 | Neutral 82/85/88 | legacy | No aplicar a nativo vía git |
| 2026-08-18 | Background / Ghost / Facultad | legacy | Residual nativo se corrige en Figma si aplica |
| 2026-08-17 | [persistent-memory](../decisions/2026-08-17-persistent-memory.md) | aceptada | Memoria en repo; `logs/` local |

## Criterios vigentes en `main`

1. **SoT = Figma** (USS One — Fundamentos). `tokens.json` = puente; **no mutar** fuera de Tokens Studio.
2. Alias documentados: `{_Base palettes...}`. No `rgba({ref},0)`.
3. Inventario / docs OK; patches de tokens en repo **no**.
4. Merge `readme-guide` → `main` solo con decisión explícita de cambiar SoT.

Abiertas: smoke Studio; residuales vía Figma. Ver `state/current.md`.
