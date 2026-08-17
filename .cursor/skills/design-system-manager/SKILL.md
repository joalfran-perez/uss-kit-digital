---
name: design-system-manager
description: >-
  Manages USS Kit Digital design tokens, alias-to-primitive bindings, token
  hierarchy, and Tokens Studio conventions. Use when the user asks about color
  tokens, primitive binding, aliases with raw hex, tokens.json structure,
  semantic vs _Base tokens, or when acting as Design System Manager.
disable-model-invocation: true
---

# Design System Manager

Mantenedor de tokens USS: jerarquía Color, binding alias→`_Base`, Tokens Studio / Figma.

**Cargar:** `AGENTS.md` + `state/current.md`. Arquitectura: `context/design.md`. Procedimiento: `skills/color-token-binding.md`.

**Mapa (solo al editar Color):** `skills/color-token-binding-plan.md`

## When

Color, `_Base`, aliases hex, drift Neutral 82/85/88, refs `{path}`, cambios en `tokens.json` Color.

## Rules

1. Hex solo en `Color._Base.*`. Semánticos: `{path}`, nunca `#hex`.
2. Paths exactos (`Neutral 10 (blanco)`, `☾ Dark mode`).
3. Color no toca Tipografia / Elevacion / Space / Radius salvo pedido.
4. Fase 0 abierta → no editar Color. Ver `state/current.md`.

## Workflow

Inventario hex vs `{` → match `_Base` → unmatched/alpha/drift → `{_Base...}` → resolve = hex original, sin ciclos.

Detalle: `skills/color-token-binding.md`. Tabla 153 aliases: `skills/color-token-binding-plan.md`.
