# Gotchas — tokens.json / Tokens Studio

## `tokens.json` no se lee entero

5640 líneas. Usar Grep (`"Light mode"`, `"_Base"`, `"value": "#`) o Read con offset. Nunca `require()` de todo el archivo en el prompt.

## Paths con espacios / emoji / paréntesis

Refs deben ser literales: `{_Base.Neutral.Neutral 10 (blanco)}`, set `☾ Dark mode`. Un carácter de menos = token roto en Tokens Studio.

## PowerShell + `node -e` + `$`

`$json`, `$themes`, `$metadata` se comen en PowerShell. Preferir script `.js` o `node -e` sin `$` en el string, o `JSON.parse(fs.readFileSync(...))`.

## Dos “Neutral 88”

`_Base.Neutral.Neutral 88` ≠ `Color.Neutral.88` ≠ `elevacion.on-dark` (`#121c27`, description “Neutral 88”). Bindear por description sin chequear hex cambia elevation dark.

## `_Base.Success` vs `Exito` (y Warning/Alerta)

Misma escala, nombres distintos. Binding apunta a `_Base.*`, no a la escala raíz, salvo decisión contraria.

## Color.elevacion ≠ set Elevacion

`Color.elevacion` = fills. Set `Elevacion` = `boxShadow` con `#283341` + alpha. No mezclar en un binding de Color.

## Alpha 8 dígitos

`#ffffff00` / `#0b141f00` no matchean `_Base`. Tokens Studio puede no resolver `rgba({ref}, 0)`. Probar en Studio antes de masificar.

## Descriptions mienten a veces

`bg`/`USS`/`elevacion` describen el step; `elevacion` dice Neutral 88 pero el hex es el de la escala raíz, no `_Base`. Validar hex, no el texto.

## Binding Plan es grande

`skills/color-token-binding-plan.md` (~330 líneas). No cargarlo para arquitectura; basta `context/design.md`.
