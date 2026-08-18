# Skill: Color token binding

Usar cuando se reescriban aliases Color de hex a `{_Base...}`. Skill Cursor: `.cursor/skills/design-system-manager/`.

**No ejecutar** de nuevo salvo corrección. Fase 0 cerrada; binding aplicado 2026-08-18.

## Cargar

1. `state/current.md` + `context/design.md`
2. Este archivo
3. Solo al editar: `skills/color-token-binding-plan.md` (mapa). No `tokens.json` entero — grep por rama.

## Procedimiento

1. Confirmar Fase 0 cerrada (Neutral 82/85/88, BG 3/4, ghost alpha) y ADR actualizado.
2. Inventario: semánticos con hex vs `{`.
3. Match hex → path `_Base` (preferir `_Base` si también matchea escala raíz).
4. Unmatched: solo whitelist en state, o crear step en `_Base`.
5. Reescribir `value` a `{_Base....}`. Orden: `USS`/`bg`/`text` → Light → Dark → `elevacion`.
6. Escalas raíz → `{_Base...}`. Hex queda solo en `_Base`.
7. Validar: semánticos sin hex (salvo whitelist); resolve === hex original; sin ciclos; no tocar otros sets.

## Transformación

```json
"Surface strong - default": { "value": "{_Base.Primary.Primary 90}", "type": "color" }
```

Ghost: `{_Base.Transparent}` (`#00000000`). No `rgba({ref}, 0)` — alias DTCG es `{path}` entero, no embeber en funciones.
