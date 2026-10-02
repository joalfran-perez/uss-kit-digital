# Skill: Color token binding (LEGACY)

**LEGACY — solo rama `readme-guide`.**

En **`main`**: Figma es SoT; **no** ejecutar este procedimiento ni modificar `tokens.json`. Ver ADR `decisions/2026-10-01-native-reextract-source-of-truth.md`.

Vuelve a ser relevante para `main` **solo** si el equipo acuerda SoT code-first y empuja `readme-guide` → `main`.

Inventario nativo (lectura): [`native-reextract-inventory.md`](native-reextract-inventory.md).

---

Usar **solo** con pedido explícito de trabajar el archivo `readme-guide`.

## Procedimiento (legacy)

1. Checkout / contexto = taxonomía antigua.
2. Inventario hex vs `{` → match `{_Base...}` vía `color-token-binding-plan.md`.
3. Validar resolve.

Criterios DTCG (alias `{path}`; no `rgba({ref},0)`) siguen siendo guía de diseño, no autorización para mutar `main` hoy.
