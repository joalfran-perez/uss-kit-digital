# Estado actual

Actualizado: 2026-08-18.

## Hecho

- Memoria persistente + skill DSM + Binding Plan en `skills/`.
- Fase 0 Color **cerrada** (4 decisiones). Binding **ejecutado** (`skills/scripts/bind-color-tokens.js`): 0 hex fuera de `_Base`.
- Creados en `_Base`: `Transparent`, `Facultad` (A/B/C), `Secondary` (azul 10–100). Dark Background 4 creado.
- Tipografia / set Elevacion / Space / Radius: sin cambio de contenido.

## Criterios vigentes (Color)

- Hex solo en `Color._Base.*`. Alias DTCG = `{path}` entero. Prohibido `rgba({path}, n)` en tokens `color`.
- Capa 1 (escalas raíz) y capa 2 (semánticos) → `{path}`.
- Dos Secondary: `_Base.Secondary - Verde` (teal) ≠ `_Base.Secondary` (azul / Facultad).
- Cadenas: `text.facultad.on-light.primary` → `{Facultad.on-light.A}` → `_Base.Facultad`; `elevacion.on-dark.*` → `{_Base.Neutral.Neutral 88}`.

## Pendiente

1. Smoke Tokens Studio (aliases, ghost `#00000000`, Dark BG4, elevation dark).
2. (Opcional) unificar hex duplicado Facultad A/B/C vs Secondary azul 100/80/70/10/20/40.
3. (Opcional) sync Figma Variables.

## Blockers

Ninguno para Color.

## Fuera de cola

Tipografia; set Elevacion (sombras `#283341…`); Space; Radius.

## Siguiente sesión

Validar en Tokens Studio. No re-bindear Color salvo corrección.
