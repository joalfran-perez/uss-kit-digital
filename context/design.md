# Design — USS Kit Digital

Tokens Studio → `tokens.json`. Un solo archivo, cinco sets. No hay temas (`$themes: []`).

## Sets (`$metadata.tokenSetOrder`)

| Set | Rol | Hex / refs |
|-----|-----|------------|
| **Color** | Primitivos `_Base` + escalas raíz + aliases light/dark + `bg`/`text`/`USS`/`elevacion` | Hoy: hex en todo. Meta: hex solo en `_Base`; resto `{path}` |
| **Tipografia** | Primitivos (`fontFamilies`, `fontSize`, …) + compuestos Desktop/títulos | Ya usa `{fontFamilies.montserrat}` etc. **Patrón a copiar** |
| **Elevacion** | `boxShadow` con color hex embebido (`#283341…`) | Independiente de `Color.elevacion` (ese es fill, no sombra) |
| **Space** | `Espaciado.spacing-NN` numbers + scopes Figma | Primitivos |
| **Radius** | `Radius-1`…`Radius-6` numbers | Primitivos |

## Color — tres capas

```
Capa 0  Color._Base.*          ← única fuente de hex (Neutral, Primary, Secondary-Verde, Info, Success, Warning, Error)
Capa 1  Color.{Neutral,Primary,Secondary,Info,Exito,Alerta,Error,Facultad,Tono-*}  ← escalas publicadas; deben aliasar _Base
Capa 2  Light mode | ☾ Dark mode | bg | text | USS | elevacion  ← semánticos; solo {path}
```

Naming paralelo (paths distintos, mismos hex): `_Base.Success` ↔ `Exito`; `_Base.Warning` ↔ `Alerta`.

## Conteos Color (ago 2026)

Semánticos: 153 tokens, 153 hex, 0 refs. `_Base`: 75. Escalas raíz: 97. Unique hex semánticos: 51. Unmatched: 4.

## Convención de referencia

Tokens Studio: `{_Base.Primary.Primary 90}` (set Color, path con puntos). No DTCG `$value`. Tipografia es el precedente.

## Fuera de alcance de este archivo

Mapa alias→primitivo: `skills/color-token-binding-plan.md` (cargar solo al ejecutar binding).
