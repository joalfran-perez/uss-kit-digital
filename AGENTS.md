# USS Kit Digital — AGENTS.md

Design tokens de Universidad San Sebastián para Ellucian Experience. Fuente: `tokens.json` (Tokens Studio). Sets: Color, Tipografia, Elevacion, Space, Radius.

## Identidad

Agente = mantenedor del kit, no generador de UI. Prioridad: jerarquía de tokens, binding alias→primitivo, cero hex en semánticos, sync Figma/Tokens Studio.

Rol por defecto para Color/tokens: **Design System Manager** (`.cursor/skills/design-system-manager/`).

## Reglas de oro (contexto)

- El context window es caro y volátil. La memoria real vive en archivos.
- Nunca cargar todo el historial ni todos los archivos del proyecto.
- Cargar solo lo estrictamente necesario para la tarea actual.
- Al final de cada sesión importante: actualizar `state/`, registrar decisiones. Comprimir lo valioso en `logs/` (local; no se pushea). Lo durable va a `decisions/` o `state/`.
- Preferir referenciar archivos antes que copiar contenido largo al prompt.
- Convertir procedimientos repetitivos en skills reutilizables.
- Mantener este `AGENTS.md` conciso (máx. ~300 líneas) y de alta densidad.

## Invariantes

1. Hex absoluto solo en primitivos: `Color._Base.*`.
2. Aliases semánticos (`Light mode`, `☾ Dark mode`, `bg`, `text`, `USS`, `elevacion`) usan `{path}`, nunca `#hex`.
3. Paths de Tokens Studio son exactos: espacios, paréntesis, emoji (`Neutral 10 (blanco)`, `☾ Dark mode`).
4. Trabajo de Color no toca Tipografia / Elevacion / Space / Radius salvo pedido explícito.
5. No editar `$themes` / `$metadata.tokenSetOrder` sin decisión registrada.
6. No commitear ni pushear a menos que el usuario lo pida.
7. Binding Color: Fase 0 cerrada. Hex solo en `_Base` (+ Transparent, Facultad, Secondary azul).

## No cargar por defecto

| Recurso | Por qué | Cuándo sí |
|---------|---------|-----------|
| `tokens.json` (5640 líneas) | Denso, se come el contexto | Grep/Read por path; nunca el archivo entero |
| `skills/color-token-binding-plan.md` | Tabla de 153 bindings | Solo al ejecutar binding Color |
| `agent-transcripts/` | Historial crudo | Nunca; usar `logs/` |
| Figma MCP / skills de Figma | Irrelevante a tokens JSON | Solo si el usuario pide Figma |

## Orden de lectura

Mínimo (toda sesión): este archivo + `state/current.md`.

Según tarea, **uno** de:

| Tarea | Leer |
|-------|------|
| Color / aliases / binding | `context/design.md` → skill DSM → `skills/color-token-binding.md`. Plan completo solo al editar |
| Decisión de diseño | `context/decisiones.md` → ADR en `decisions/` |
| Bug / valor raro / Tokens Studio | `gotchas/tokens-studio.md` |
| Continuar trabajo | `state/current.md` → último archivo en `logs/` |
| Tipografia / Space / Radius / Elevacion | `context/design.md` (mapa de sets) + grep en `tokens.json` |

## Routing de skills

| Trigger | Skill / procedimiento |
|---------|----------------------|
| Color, `_Base`, aliases hex, binding, Design System Manager | `.cursor/skills/design-system-manager/` + `skills/color-token-binding.md` |
| Crear/editar skills Cursor | skill `create-skill` (no duplicar aquí) |
| Figma write / variables / Code Connect | skills Figma (`figma-use`, `figma-generate-library`, …) **después** de cargar el skill Figma correspondiente |
| Git commit / PR | reglas de usuario; no usar memoria de tokens |

Si no hay skill: procedimiento corto en `skills/` o, si se repetirá, crear skill y apuntarlo aquí.

## Punteros de memoria

| Path | Qué hay |
|------|---------|
| `context/design.md` | Arquitectura del kit (sets, capas Color, convenciones) |
| `context/decisiones.md` | Índice de decisiones de diseño |
| `decisions/` | ADRs fechados (qué / por qué / status) |
| `state/current.md` | Hecho / pendiente / blockers — única fuente de “dónde vamos” |
| `skills/` | Procedimientos del repo (no confundir con `.cursor/skills/`) |
| `gotchas/` | Fallos conocidos + fix |
| `logs/` | Resúmenes de sesión **locales** (gitignored). No transcripts. |

## Comportamiento

1. Abrir sesión: leer `AGENTS.md` + `state/current.md`. No releer transcripts.
2. Scope: una categoría de tokens por tarea. Preguntar si el pedido cruza Color + otro set.
3. Editar `tokens.json` con matching exacto; no reescribir el archivo entero.
4. Tras cambio de Color: no afirmar “binding hecho” si Fase 0 sigue abierta.
5. Cierre de sesión importante:
   - `state/current.md` (hecho / pendiente / blockers)
   - ADR nuevo en `decisions/` si cambió una regla
   - `logs/YYYY-MM-DD-<tema>.md` (local, ≤40 líneas). Hechos que el equipo debe recordar → `decisions/` o `state/`
6. Si un procedimiento se usa ≥2 veces → `skills/` (+ Cursor skill si debe auto-invocarse).

## Definition of Done

- [ ] Cambio acotado al set pedido
- [ ] Semánticos Color sin hex nuevo (salvo whitelist en `state/current.md`)
- [ ] Refs `{...}` con path exacto; resolve = hex previo si era binding
- [ ] Sin ciclos de alias
- [ ] `state/` actualizado; decisión nueva en `decisions/` si aplica
- [ ] No se tocó Tipografia/Elevacion/Space/Radius en un diff de Color

## Arranque de sesión (usuario)

Pegar: `Lee AGENTS.md y state/current.md. Continúa el pendiente.` + la tarea concreta.
