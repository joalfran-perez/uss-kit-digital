# Design — USS Kit Digital

Tokens Studio → `tokens.json`. Un solo archivo, cinco sets. No hay temas (`$themes: []`).

## Sets (`$metadata.tokenSetOrder`)

| Set | Rol | Hex / refs |
|-----|-----|------------|
| **Color** | Primitivos `_Base` + escalas raíz + aliases light/dark + `bg`/`text`/`USS`/`elevacion` | Hex solo `_Base`. Resto `{path}` (aplicado 2026-08-18) |
| **Tipografia** | Primitivos (`fontFamilies`, `fontSize`, …) + compuestos Desktop/títulos | Ya usa `{fontFamilies.montserrat}` etc. **Patrón a copiar** |
| **Elevacion** | `boxShadow` con color hex embebido (`#283341…`) | Independiente de `Color.elevacion` (ese es fill, no sombra) |
| **Space** | `Espaciado.spacing-NN` numbers + scopes Figma | Primitivos |
| **Radius** | `Radius-1`…`Radius-6` numbers | Primitivos |

## Color — tres capas

```
Capa 0  Color._Base.*          ← única fuente de hex (Neutral, Primary, Secondary-Verde, Secondary azul, Facultad, Transparent, Info, Success, Warning, Error)
Capa 1  Color.{Neutral,Primary,Secondary,Info,Exito,Alerta,Error,Facultad,Tono-*}  ← aliasan _Base
Capa 2  Light mode | ☾ Dark mode | bg | text | USS | elevacion  ← `{path}` (facultad texto → Facultad.*)
```

Naming paralelo: `_Base.Success` ↔ `Exito`; `_Base.Warning` ↔ `Alerta`. `_Base.Secondary - Verde` (teal) ≠ `_Base.Secondary` (azul).

## Conteos Color (ago 2026, post-binding)

Semánticos y escalas raíz: `{path}`. Hex solo `_Base` (incl. Transparent, Facultad, Secondary azul). Unique unmatched de Fase 0: resueltos por decisión, no por match de hex.

## Convención de referencia

`{_Base.Primary.Primary 90}` (set Color). Alias = `{path}` entero (DTCG). No `rgba({path}, 0)`. Tokens Studio usa `value` / `type`, no `$value` / `$type`.

## Fuera de alcance de este archivo

Mapa alias→primitivo: `skills/color-token-binding-plan.md` (cargar solo al ejecutar binding).
