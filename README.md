# USS Kit Digital

Design tokens USS (Ellucian Experience).

- **`main`**: puente directo con **USS One — Fundamentos** (Figma → Tokens Studio). [`tokens.json`](tokens.json) se mantiene **intacto** (Figma manda).
- **`readme-guide`**: definición code-first / binding **estacionada**. Solo vuelve a `main` con acuerdo explícito de cambiar la fuente de verdad.

Contrato del agente: [`AGENTS.md`](AGENTS.md). Estado: [`state/current.md`](state/current.md). ADR SoT: [`decisions/2026-10-01-native-reextract-source-of-truth.md`](decisions/2026-10-01-native-reextract-source-of-truth.md).

---

## Qué decirle al agente

Al **inicio**:

```text
Lee AGENTS.md y state/current.md. Continúa el pendiente.
```

Ejemplos:

```text
Lee AGENTS.md y state/current.md. Continúa el pendiente.
Smoke Tokens Studio sobre Color/Light mode.
```

```text
Lee AGENTS.md y state/current.md. Continúa el pendiente.
Inventario de hex semánticos residuales en Color/Dark mode.
```

No adjuntar transcripts ni `tokens.json`. Al **cerrar** una sesión que cambie el kit: `Actualiza state, decisiones y logs.`

---

## 1. Estructura

```
uss-kit-digital/
├── AGENTS.md
├── README.md
├── tokens.json                        # Puente Figma — intacto en main (solo lectura agente)
├── context/                           # design.md + decisiones.md
├── decisions/                         # ADRs (nativo 2026-10 + legacy 2026-08)
├── state/current.md
├── skills/
│   ├── native-reextract-inventory.md  # Hex/refs post re-extract
│   ├── color-token-binding.md         # LEGACY readme-guide
│   ├── color-token-binding-plan.md    # LEGACY
│   └── scripts/bind-color-tokens.js   # LEGACY — no usar en main
├── gotchas/
├── logs/                              # Local, gitignored
└── .cursor/skills/design-system-manager/SKILL.md
```

| Rama | Rol |
|------|-----|
| `main` | Tokens de producción = export Figma (no editar a mano) |
| `readme-guide` | Archivo code-first; push a `main` solo con acuerdo SoT |

---

## 2. Agents

Ver [`AGENTS.md`](AGENTS.md). Resumen: Figma manda en `main`; no mutar `tokens.json`; inventariar/documentar; `readme-guide` estacionado.

---

## 3. Carpetas

| Path | Contenido |
|------|-----------|
| `context/` | Design nativo + índice ADRs |
| `decisions/` | Incluye ADR re-extract 2026-10-01 |
| `state/` | Fuente = `main` @ re-extract; pendientes smoke/residuales |
| `skills/` | Inventario nativo + skills legacy marcados |
| `gotchas/` | Paths `_Base palettes`, ramas, rem, alpha |

---

## 4. Uso

1. Trabajar en `main` alineado con `origin/main`.
2. Arranque del agente con el prompt de arriba.
3. Binding/Fase 0 antigua: solo en `readme-guide`, y merge a `main` solo con decisión formal de SoT code-first.
4. Tras cambios: actualizar `state/` / decisiones / logs.

---

## Qué se sube al git

| Subir | No subir |
|-------|----------|
| `README`, `AGENTS`, `tokens.json`, `context/`, `decisions/`, `gotchas/`, `skills/` (incl. inventario), `state/`, `.cursor/skills/**/SKILL.md` | `.cursor/settings.json`, `logs/`, transcripts |

---

## Mejoras

1. Smoke Tokens Studio (sin editar JSON).
2. Residuales hex → cambio en Figma si se desea, luego re-export.
3. (Opcional) script solo-lectura de inventario.
