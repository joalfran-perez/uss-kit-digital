# USS Kit Digital — AGENTS.md

Design tokens USS (Ellucian Experience). **`main`**: puente Figma (USS One — Fundamentos) vía Tokens Studio — `tokens.json` **intacto**. **`readme-guide`**: archivo code-first estacionado hasta acuerdo explícito de volver a `main`.

## Identidad

Agente = mantenedor de memoria/gobernanza del kit, no editor del export Figma. Prioridad: no mutar `tokens.json` en `main`; documentar; inventariar. Rol: **Design System Manager** (`.cursor/skills/design-system-manager/`).

## Reglas de oro (contexto)

- El context window es caro y volátil. La memoria real vive en archivos.
- Nunca cargar todo el historial ni todos los archivos del proyecto.
- Cargar solo lo estrictamente necesario para la tarea actual.
- Al final de cada sesión importante: actualizar `state/`, registrar decisiones. Comprimir lo valioso en `logs/` (local; no se pushea). Lo durable va a `decisions/` o `state/`.
- Preferir referenciar archivos antes que copiar contenido largo al prompt.
- Convertir procedimientos repetitivos en skills reutilizables.
- Mantener este `AGENTS.md` conciso (máx. ~300 líneas) y de alta densidad.

## Invariantes

1. **Figma manda en `main`.** `tokens.json` es el puente directo con USS One — Fundamentos. **No editar** `tokens.json` en `main` (ni binding, ni patches de hex). Cambios de tokens → Figma / Tokens Studio push.
2. **`readme-guide` no se mezcla con `main`** hasta decisión explícita de SoT code-first + push acordado.
3. Alias DTCG = `{path}` entero si se documenta o se trabaja legacy. Prohibido `rgba({ref}, n)`.
4. Paths nativos exactos: `_Base palettes` (espacio), sets con `/` (`Color/Light mode`).
5. Scope: un set o familia por tarea.
6. No editar `$themes` / `$metadata.tokenSetOrder` sin ADR (y sin mutar tokens salvo sync Figma).
7. No commitear ni pushear a menos que el usuario lo pida.
8. No ejecutar `bind-color-tokens.js` ni Binding Plan 153 sobre `main`.

## No cargar por defecto

| Recurso | Por qué | Cuándo sí |
|---------|---------|-----------|
| `tokens.json` | Denso; solo lectura en `main` | Grep/Read por set; nunca entero; **nunca Write** en `main` |
| `skills/color-token-binding-plan.md` | Legacy | Solo pedido explícito `readme-guide` |
| `agent-transcripts/` | Crudo | Nunca; usar `logs/` |
| Figma MCP | Solo sync Figma | Si el usuario pide Figma |

## Orden de lectura

Mínimo: este archivo + `state/current.md`.

| Tarea | Leer |
|-------|------|
| Arquitectura / SoT | `context/design.md` + ADR 2026-10-01 |
| Inventario nativo | `skills/native-reextract-inventory.md` |
| Decisión | `context/decisiones.md` → `decisions/` |
| Gotcha Studio | `gotchas/tokens-studio.md` |
| Legacy binding | `skills/color-token-binding.md` solo si piden `readme-guide` |

## Routing de skills

| Trigger | Skill |
|---------|-------|
| Color nativo, inventario, SoT | DSM + `context/design.md` + inventario (**sin editar tokens**) |
| Binding legacy / `readme-guide` | Pedido explícito → `skills/color-token-binding.md` |
| Cambiar variables de diseño | Figma / Tokens Studio — no el JSON a mano |
| Git commit / PR | Reglas de usuario |

## Punteros de memoria

| Path | Qué hay |
|------|---------|
| `context/design.md` | Taxonomía nativa + SoT Figma |
| `context/decisiones.md` | Índice ADRs |
| `decisions/` | Incluye ADR re-extract / SoT |
| `state/current.md` | Hecho / pendiente / blockers |
| `skills/` | Inventario nativo + legacy marcado |
| `gotchas/` | Fallos + regla read-only |
| `logs/` | Locales (gitignored) |

## Comportamiento

1. Abrir: `AGENTS.md` + `state/current.md`.
2. En `main`: **leer** `tokens.json`; no Write/StrReplace sobre él.
3. Hex residuales / gaps → documentar o pedir cambio en Figma; no parchear el puente.
4. Cierre de sesión: `state/` + ADR si cambió regla + `logs/` local.
5. Merge `readme-guide` → `main` solo si el usuario declara el cambio de SoT.

## Definition of Done

- [ ] No se modificó `tokens.json` en `main` (salvo que el usuario traiga un push de Tokens Studio y pida commit de ese sync)
- [ ] Docs/state actualizados si cambió gobernanza
- [ ] Sin script/plan legacy aplicado a `main`
- [ ] Paths documentados con taxonomía nativa

## Arranque de sesión (usuario)

```text
Lee AGENTS.md y state/current.md. Continúa el pendiente.
```
