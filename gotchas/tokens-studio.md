# Gotchas — tokens.json / Tokens Studio

## SoT Figma en `main`

`tokens.json` en `main` es el puente con **USS One — Fundamentos**. **No editarlo** fuera de Tokens Studio. Residual hex ≠ licencia para parchear en git.

## `main` vs `readme-guide`

`readme-guide` = code-first estacionado. Merge a `main` solo con decisión explícita de cambiar SoT.

## `tokens.json` no se lee entero

Grep por set (`Color/Light mode`, `_Base palettes`) o Read con offset. Nunca archivo entero al prompt. En `main`: Read sí, Write no.

## Paths nativos

Sets con `/`. Primitivos `_Base palettes` (espacio). Legacy `{_Base.Neutral...}` no aplica a `main`.

## PowerShell + `$`

`$themes` / `$metadata` se rompen en PowerShell. Preferir script `.js` o `fs.readFileSync`.

## Hex residuales

Ver `skills/native-reextract-inventory.md`. Acción: Figma/Studio, no StrReplace en el puente.

## Alpha / ghost

No `rgba({ref}, 0)` (DTCG). Nativo puede traer `#ffffff00` hasta que Figma cambie.

## Binding legacy

Plan/script = solo `readme-guide`. Ver `skills/scripts/README.md`.

## Space/Radius rem

Export nativo `dimension` en `rem`.
