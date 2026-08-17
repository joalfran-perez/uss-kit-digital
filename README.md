# USS Kit Digital

Design tokens de Universidad San Sebastián para Ellucian Experience. Fuente: [`tokens.json`](tokens.json) (Tokens Studio). Sets: Color, Tipografia, Elevacion, Space, Radius.

Este README es la guía humana del repo: estructura, memoria del agente, qué hay en cada carpeta, qué decir al inicio de un chat y mejoras pendientes. El contrato del agente está en [`AGENTS.md`](AGENTS.md). El estado de trabajo está en [`state/current.md`](state/current.md).

---

## Qué decirle al agente

Al **inicio** de cada conversación, pega esto y añade la tarea:

```text
Lee AGENTS.md y state/current.md. Continúa el pendiente.
```

Ejemplos:

```text
Lee AGENTS.md y state/current.md. Continúa el pendiente.
Cierra Fase 0: _Base gana en Neutral 82/85/88.
```

```text
Lee AGENTS.md y state/current.md. Continúa el pendiente.
Ejecuta el binding de Color.
```

No adjuntar transcripts ni `tokens.json`. No hace falta pegar este README entero: Cursor ya lee `AGENTS.md` del root.

Al **cerrar** una sesión que cambie el kit:

```text
Actualiza state, decisiones y logs.
```

---

## 1. Estructura

```
uss-kit-digital/
├── AGENTS.md                          # Contrato del agente (leer siempre)
├── README.md                          # Esta guía (para humanos)
├── tokens.json                        # Tokens Studio — no leer entero
├── context/
│   ├── design.md                      # Arquitectura del kit
│   └── decisiones.md                  # Índice de ADRs
├── decisions/                         # ADRs fechados
├── state/
│   └── current.md                     # Hecho / pendiente / blockers
├── skills/
│   ├── color-token-binding.md         # Procedimiento
│   └── color-token-binding-plan.md    # Mapa de 153 aliases — solo al ejecutar binding
├── gotchas/
├── logs/                              # Resúmenes de sesión — local, no se pushea
└── .cursor/skills/design-system-manager/
    └── SKILL.md                       # Puntero Cursor (~40 líneas) → skills/
```

Hay dos carpetas `skills` a propósito:

| Path | Para quién |
|------|------------|
| `skills/` | Procedimientos y el Binding Plan (una sola copia) |
| `.cursor/skills/` | Lo que Cursor descubre; `SKILL.md` solo apunta, no duplica el plan |

---

## 2. Agents (`AGENTS.md`)

[`AGENTS.md`](AGENTS.md) es el archivo central de control (~100 líneas). El agente debe cargarlo al inicio; el humano no necesita memorizarlo.

**Identidad:** el agente es mantenedor del kit, no generador de UI. Rol por defecto en Color: Design System Manager.

**Reglas de oro**

- El context window es caro. La memoria real vive en archivos.
- Nunca cargar todo el historial ni todos los archivos.
- Cargar solo lo necesario para la tarea actual.
- Tras una sesión importante: actualizar `state/`, decisiones y `logs/`.
- Referenciar archivos; no pegar contenido largo.
- Procedimientos repetitivos → skills.
- Mantener `AGENTS.md` denso (máx. ~300 líneas).

**Invariantes del kit**

1. Hex absoluto solo en `Color._Base.*`.
2. Aliases semánticos (`Light mode`, `☾ Dark mode`, `bg`, `text`, `USS`, `elevacion`) usan `{path}`, nunca `#hex`.
3. Paths de Tokens Studio exactos (espacios, paréntesis, emoji).
4. Un trabajo de Color no toca Tipografia / Elevacion / Space / Radius salvo pedido explícito.
5. No editar `$themes` / `$metadata.tokenSetOrder` sin ADR.
6. No commit/push a menos que lo pidas.
7. Binding Color bloqueado hasta cerrar Fase 0 (ver `state/current.md`).

**Qué no debe cargar el agente por defecto:** `tokens.json` entero, el Binding Plan (330 líneas), transcripts, skills de Figma (salvo que pidas Figma).

**Orden de lectura del agente:** siempre `AGENTS.md` + `state/current.md`. Después, un solo extra según la tarea (`context/design.md`, `gotchas/`, etc.).

Detalle completo: [`AGENTS.md`](AGENTS.md).

---

## 3. Qué hay en cada carpeta

| Carpeta | Contenido |
|---------|-----------|
| `context/` | `design.md`: tres capas Color, sets, convención `{path}`. `decisiones.md`: índice + preguntas abiertas de Fase 0. |
| `decisions/` | ADRs. Color (propuesta, no ejecutada). Memoria persistente (aceptada). |
| `state/` | Dónde vamos. Binding Color **no ejecutado**. Blocker: Neutral 82/85/88, Background 3/4, ghost alpha. |
| `skills/` | Procedimiento (`color-token-binding.md`) + mapa de 153 aliases (`color-token-binding-plan.md`). |
| `gotchas/` | JSON enorme, paths con emoji, `$` en PowerShell, dos Neutral 88, Success vs Exito, `Color.elevacion` ≠ set Elevacion, alpha 8 dígitos. |
| `logs/` | Resúmenes cortos de sesiones (**locales**, no van al git). |

Fuente de tokens: `tokens.json` (~5640 líneas). Tipografia ya usa referencias `{path}`; Color todavía tiene hex crudo en aliases.

---

## 4. Cómo usarlo

1. Abre un chat nuevo en este repo.
2. Pega el arranque de la sección **Qué decirle al agente** + la tarea concreta.
3. El agente lee `AGENTS.md` y `state/current.md` (no el JSON entero).
4. Si la tarea es Color/binding, usará el skill Design System Manager y `skills/color-token-binding.md`. El plan largo (`skills/color-token-binding-plan.md`) solo se carga al editar.
5. Al terminar un cambio real del kit, pide actualizar `state/`, `decisions/` y `logs/`.

**No hace falta** adjuntar el Binding Plan, transcripts ni `tokens.json`. Si Fase 0 sigue abierta, el agente no debe reescribir Color.

Estado vivo: [`state/current.md`](state/current.md).

---

## Qué se sube al git (y qué no)

Regla Cursor: **instrucciones que guían al modelo = repo**. **Estado de la app y contexto generado = local.**

| Subir (equipo) | No subir |
|----------------|----------|
| `README.md`, `AGENTS.md`, `tokens.json` | `.cursor/settings.json` (plugins de esta máquina) |
| `context/`, `decisions/`, `gotchas/`, `skills/` | `logs/` (resúmenes de sesión) |
| `.cursor/skills/**/SKILL.md` | Transcripts de Cursor (viven fuera del repo) |
| `state/current.md` (tablero del kit, no estado de Cursor) | Cualquier `*.local.md` |

Detalle: [`.gitignore`](.gitignore).

---

## 5. Mejoras

1. ~~**Un solo Binding Plan.**~~ Hecho: vive en `skills/`; `.cursor/skills/.../SKILL.md` es puntero.
2. **Script de inventario** (`skills/scripts/color-inventory.js`) que liste hex vs `{refs}` — evita `node -e` en PowerShell (el `$` rompe el comando).
3. **Rule Cursor** `.cursor/rules/tokens.mdc` con glob `tokens.json`: no leer el archivo entero; seguir `AGENTS.md`.
4. **Temas:** hoy `$themes` está vacío. Light/dark viven como ramas dentro de Color. Registrar ADR antes de migrar a temas de Tokens Studio.
5. **Logs:** un archivo por sesión importante, ≤40 líneas. Si crece, archivar por mes. No mezclar con transcripts.
