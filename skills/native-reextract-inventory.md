# Inventario post re-extracción nativa

Fecha: 2026-10-02. Fuente: `tokens.json` en `main` @ `777b798`.

**Uso:** solo lectura / diagnóstico. **No** usar esta lista para parchear `tokens.json` en `main`. Correcciones de residuales → Figma (USS One — Fundamentos) → Tokens Studio.

## Sets (`$metadata.tokenSetOrder`)

`Color/Light mode` · `Color/Dark mode` · `Device/Mobile` · `Device/Tablet` · `Device/Desktop` · `Typography/Desktop` · `Typography/Mobile` · `Radius/Mode 1` · `Space/Mode 1`

`$themes`: vacío (modos = token sets).

## Conteos

| Set | Leaves | `{refs}` | `#hex` | Other |
|-----|--------|----------|--------|-------|
| Color/Light mode | 144 | 63 | 81 | 0 |
| Color/Dark mode | 144 | 65 | 79 | 0 |
| Typography/Desktop | 152 | 18 | 0 | 134 |
| Typography/Mobile | 152 | 18 | 0 | 134 |
| Space/Mode 1 | 19 | 0 | 0 | 19 (rem) |
| Radius/Mode 1 | 6 | 0 | 0 | 6 (rem) |
| Device/* | 1 c/u | 0 | 0 | text |

Hex en Color ≈ escalas `_Base palettes` + pocos semánticos crudos (abajo).

## Hex semánticos / branding (fuera de `_Base palettes`)

### Color/Light mode (6)

| Path | Valor |
|------|-------|
| Color Tokens.Background.Background 3 | `#d0dde6` |
| Color Tokens.Background.Background 4 | `#d9dced` |
| Color Tokens.Surface.Surface ghost - default | `#ffffff00` |
| Color Tokens.Dark mode elevation.☾ Elevation 1… | `#ffffff00` |
| Color Tokens.Dark mode elevation.☾ Elevation 2… | `#ffffff00` |
| Branding.Dorado | `#cfb47c` |

### Color/Dark mode (4)

| Path | Valor |
|------|-------|
| Color Tokens.Background.Background 3 | `#ffffff` |
| Color Tokens.Background.Background 4 | `#ffffff` |
| Color Tokens.Surface.Surface ghost - default | `#ffffff00` |
| Branding.Dorado | `#cfb47c` |

## Gaps vs legacy `readme-guide`

- No hay `Facultad` / `bg` / `text` / `USS` como ramas raíz del set Color monolítico.
- Alias path: `{_Base palettes.*}` no `{_Base.*}`.
- Dark BG 3/4 = blanco (no Secondary verde 100/90).
- Ghost default sigue 8 dígitos (no `_Base.Transparent`).
- Set Elevacion boxShadow ausente.
- Decisiones Fase 0 **no** reaplicar sin contraste Figma Core.

## Cómo regenerar

```bash
node -e "/* walk Color sets; filter hex not under _Base palettes */"
```

O adaptar un script futuro `skills/scripts/inventory-native-color.js` (aún no obligatorio).
