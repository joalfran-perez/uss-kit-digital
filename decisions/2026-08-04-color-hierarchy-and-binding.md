# 2026-08-04 — Jerarquía Color y binding alias→primitivo

Status: **aceptada y aplicada** (Fase 0 2026-08-17/18; binding `tokens.json` 2026-08-18).

## Qué

Aliases Color usan `{path}` Tokens Studio / DTCG. Hex solo en `Color._Base.*`.

## Por qué

153 semánticos duplicaban hex; Tipografia ya heredaba. Drift Neutral 82/85/88. `rgba({ref}, 0)` no es `$type: color` válido ([DTCG Format](https://www.designtokens.org/tr/drafts/format/)).

## Arquitectura

```
hex → solo _Base
escalas raíz → {_Base...}  (o cadena Facultad)
semánticos → {_Base...}    (facultad texto → {Facultad.on-light.A})
```

Formato: `{_Base.Neutral.Neutral 20}`. Paths exactos (espacios, emoji, paréntesis).

## Fase 0 (aplicada)

**Neutral 82/85/88 — A.** Gana `_Base` (`#242f3c` / `#202a37` / `#1d2633`). Raíz → `{_Base.Neutral.Neutral N}`. `elevacion.on-dark.*` → `{_Base.Neutral.Neutral 88}` (deja `#121c27`).

**Background 3/4 — alternativa Secondary verde.** Light 3/4 → `{_Base.Secondary - Verde.Secondary 10|20}` (cambia `#d0dde6`/`#d9dced` → `#edf8f8`/`#d2e4e4`). Dark 3 → Verde 100 (igual). Dark 4 **creado** → Verde 90 `#114252`.

**Ghost — B.** `_Base.Transparent` `#00000000`. Light/Dark ghost-default → `{_Base.Transparent}`. No `rgba({path}, 0)`.

**Facultad — A.** `_Base.Facultad` on-light/on-dark A/B/C (hex). `Color.Facultad.*` → `{_Base.Facultad...}`. `text.facultad.on-light.primary` → `{Facultad.on-light.A}`. Secondary **azul** (raíz) copiada a `_Base.Secondary` (≠ Verde).

## Consecuencias

Script: `skills/scripts/bind-color-tokens.js`. 0 hex fuera de `_Base`. Sets no-Color intactos. Duplicado conocido: Facultad A/B/C vs Secondary azul 100/80/70/10/20/40 (colapsar opcional).
