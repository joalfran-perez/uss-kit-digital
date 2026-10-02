# 2026-10-01 — Fuente canónica: re-extracción nativa Figma

Status: **aceptada y aplicada** (`origin/main` @ `777b798`; política endurecida 2026-10-02).

## Qué

Separar dos aproximaciones en ramas distintas:

| Rama | Rol |
|------|-----|
| **`main`** | Puente directo Figma ↔ repo. `tokens.json` = export Tokens Studio desde **USS One — Fundamentos de diseño** (variables nativas, sin presets). |
| **`readme-guide`** | Acuerdo estacionado code-first: binding `_Base`, Fase 0, scripts/plan. **No** se mezcla con `main` mientras Figma sea SoT. |

## Quién manda

La especificación de variables en Figma **manda**. En `main`, el formato y contenido de `tokens.json` se mantienen **intactos**:

- No binding local, no reescritura hex→alias, no “fixes” de taxonomía en git.
- Quien actualiza tokens en `main` es **Figma → Tokens Studio → push** (u otro sync acordado desde Figma).
- El agente puede leer/inventariar/documentar; **no modificar** `tokens.json` en `main`.

## Retorno de `readme-guide` a `main`

Solo cuando el equipo **decida explícitamente** cambiar la fuente de verdad (separarla de Figma / priorizar definición code-first). Entonces se usan las definiciones de `readme-guide` y se empujan a `main`. Hasta ese acuerdo: **cero** merge de tokens legacy hacia `main`.

## Por qué

Extracción inicial (plugin + presets) → inconsistencias vs Core. Re-extracción = fidelidad nativa. Binding en `readme-guide` = metodología estacionada, no verdad visual de producción.

## Consecuencias

- Paths nativos: `Color/Light|Dark mode`, `_Base palettes`, `Typography/*`, `Space/Mode 1`, `Radius/Mode 1`, `Device/*`.
- Alias: `{_Base palettes.Neutral.Neutral 20}`. Space/Radius en `rem`.
- Hex residuales (BG 3/4, ghost, etc.): corregir en **Figma/Studio**, no parchear el JSON en el repo.
- No ejecutar `bind-color-tokens.js` / Binding Plan 153 sobre `main`.
- ADRs Fase 0 = legacy `readme-guide` únicamente.
- Criterios DTCG siguen siendo guía de diseño si algún día se reactiva code-first; no autorizan mutar `main` hoy.

## Refs

- Commit re-extract: `777b798`
- Rama archivo: `origin/readme-guide`
- Inventario: `skills/native-reextract-inventory.md`
