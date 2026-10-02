---
name: design-system-manager
description: >-
  Manages USS Kit Digital governance on main (Figma SoT, tokens.json read-only)
  and legacy readme-guide. Use for inventory, docs, Tokens Studio sync guidance,
  or Design System Manager role — not for rewriting main tokens.json.
disable-model-invocation: true
---

# Design System Manager

**Por defecto = `main`, SoT Figma.** `tokens.json` es puente USS One — Fundamentos: **no modificar**.

**Cargar:** `AGENTS.md` + `state/current.md` → `context/design.md`. ADR: `decisions/2026-10-01-native-reextract-source-of-truth.md`. Inventario: `skills/native-reextract-inventory.md`.

## When

Inventario Color nativo, docs, SoT, sync Tokens Studio, o pedido explícito de **legacy** `readme-guide`.

## Rules (main)

1. **No Write** sobre `tokens.json`. Cambios de variables → Figma → Tokens Studio → push.
2. Paths: `Color/Light mode`, `_Base palettes` (espacio), `{_Base palettes...}`.
3. No `bind-color-tokens.js` / Binding Plan 153.
4. `readme-guide` → `main` solo con acuerdo explícito de SoT code-first.
5. Residuales hex: documentar; corregir en Figma si aplica.

## Workflow

Leer state → inventariar/docs → si hace falta cambio de diseño, indicarlo para Figma — no parchear el JSON.
