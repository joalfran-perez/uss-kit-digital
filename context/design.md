# Design — USS Kit Digital

**SoT en `main` = Figma (USS One — Fundamentos de diseño).**  
`tokens.json` = puente Tokens Studio (export nativo, sin presets). **No editar** el JSON en el repo para “arreglar” tokens; cambiar en Figma y re-exportar.

**`readme-guide`** = definición code-first / binding **estacionada**. Solo se empuja a `main` si el equipo acuerda cambiar la fuente de verdad.

`$themes: []`. Modos = token sets separados.

## Sets (`$metadata.tokenSetOrder`)

| Set | Rol |
|-----|-----|
| **Color/Light mode** | `Color Tokens` + `_Base palettes` + `Branding` |
| **Color/Dark mode** | Misma forma (dark) |
| **Device/{Mobile,Tablet,Desktop}** | Flag dispositivo |
| **Typography/{Desktop,Mobile}** | Type + Font |
| **Space/Mode 1** | `rem` (`dimension`) |
| **Radius/Mode 1** | `rem` (`dimension`) |

## Color — forma nativa

```
Color/{Light|Dark} mode
  Color Tokens.*     ← semánticos
  _Base palettes.*   ← primitivos (hex del export)
  Branding.*
```

Alias típico: `{_Base palettes.Neutral.Neutral 20}`.

## Criterios

- En `main`: leer / inventariar / documentar. No Write sobre `tokens.json`.
- Residual hex (BG 3/4, ghost, …): lista en inventario → acción en Figma si se desea cambiar.
- Script/plan binding: solo `readme-guide` (legacy).

## Inventario

[`skills/native-reextract-inventory.md`](../skills/native-reextract-inventory.md)

## Legacy

Taxonomía antigua + Binding Plan 153: rama `readme-guide` / ADRs 2026-08-*.
