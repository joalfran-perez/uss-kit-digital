# Estado actual

Actualizado: 2026-10-02.

## Fuente de verdad

- **`main`**: Figma (USS One — Fundamentos) manda. `tokens.json` = puente Tokens Studio **intacto** (solo lectura para el agente). Sync: Figma → Studio → push.
- **`readme-guide`**: code-first / binding estacionado. **No** empujar a `main` hasta acuerdo explícito de cambiar SoT.

## Hecho

- Re-extract en `main` @ `777b798` + pull local.
- ADR SoT endurecido: [`decisions/2026-10-01-native-reextract-source-of-truth.md`](../decisions/2026-10-01-native-reextract-source-of-truth.md).
- Inventario residuales: [`skills/native-reextract-inventory.md`](../skills/native-reextract-inventory.md).
- Memoria: no mutar `tokens.json` en `main`; legacy marcado.

## Criterios vigentes

1. No editar `tokens.json` en `main` (binding, patches, “fixes”).
2. Hex residuales → corregir en Figma/Studio, no en git a mano.
3. Docs/AGENTS/skills sí se mantienen en el repo.
4. `readme-guide` → `main` solo con decisión formal de SoT code-first.

## Pendiente

1. Smoke Tokens Studio (resolve, rem, enabled sets) — sin editar JSON.
2. (Opcional) cambios de residuales **en Figma**, luego re-export a `main`.
3. (Opcional) script solo-lectura `inventory-native-color.js`.

## Blockers

Ninguno. Política: Figma SoT activa.

## Siguiente sesión

`Lee AGENTS.md y state/current.md. Continúa el pendiente.`
