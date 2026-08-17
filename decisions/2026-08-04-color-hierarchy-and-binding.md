# 2026-08-04 — Jerarquía Color y binding alias→primitivo

Status: **propuesta** (plan aprobado como dirección; no ejecutado). Bloquea: Fase 0.

## Qué

Reemplazar hex en aliases semánticos de Color por refs Tokens Studio a `Color._Base.*`. Escalas raíz (`Color.Neutral`, `Color.Primary`, …) también aliasan `_Base` para una sola fuente de hex.

## Por qué

- 153 semánticos con hex duplicado; 0 refs. Tipografia ya hereda por `{path}`.
- Un cambio de primitivo no propaga a aliases → drift (ya ocurre en Neutral 82/85/88).
- Figma/Tokens Studio no puede tratar semánticos como variables ligadas.

## Decisión de arquitectura (aceptada como meta)

```
hex → solo _Base
escalas raíz → {_Base...}
semánticos (Light/Dark/bg/text/USS/elevacion) → {_Base...}
```

Formato: `{_Base.Neutral.Neutral 20}` (path exacto).

## No decidido

- Hex canónico Neutral 82/85/88 (`_Base` vs raíz vs `elevacion.on-dark` `#121c27`).
- Background 3/4 sin match.
- Ghost alpha (8 dígitos).

## Consecuencias

Ejecutar solo tras Fase 0. Procedimiento: `skills/color-token-binding.md`. Mapa: `skills/color-token-binding-plan.md`.
