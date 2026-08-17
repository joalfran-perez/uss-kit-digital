# Estado actual

Actualizado: 2026-08-17.

## Hecho

- Repo = Tokens Studio dump: `tokens.json` + README guía de uso.
- Skill Cursor **design-system-manager** (puntero). Mapa Color: `skills/color-token-binding-plan.md`.
- Análisis Color: 153 semánticos hex, 0 refs; ~149 matchean `_Base`; 4–8 unmatched.
- Tipografia ya usa `{path}` (precedente).
- Memoria persistente (`AGENTS.md`, `context/`, `decisions/`, `state/`, `skills/`, `gotchas/`, `logs/`).

## Pendiente (orden)

1. **Fase 0 Color** — decidir: Neutral 82/85/88 canónico; Background 3/4; ghost alpha.
2. Script matching hex → `{_Base...}` y reescritura de semánticos.
3. Bindear escalas raíz (`Neutral`, `Primary`, …) a `_Base`.
4. Validar resolve = hex original; smoke Tokens Studio.
5. (Opcional) sync Figma Variables.

## Blockers

- Fase 0 abierta → **no editar Color en `tokens.json`** para binding.
- Drift Neutral: `_Base` 88/85/82 = `#1d2633` / `#202a37` / `#242f3c` vs raíz `#121c27` / `#192330` / `#212b38`. `elevacion.on-dark` usa raíz 88.

## Fuera de cola

Tipografia / Elevacion (sombras con hex propio) / Space / Radius — no hay plan activo.

## Siguiente sesión

Si el usuario cierra Fase 0 → ejecutar `skills/color-token-binding.md`. Si no → no tocar `tokens.json`.
