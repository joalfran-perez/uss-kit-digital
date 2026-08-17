# 2026-08-17 — Memoria persistente en el repo

Status: **aceptada**.

## Qué

`AGENTS.md` + `context/` + `decisions/` + `state/` + `skills/` + `gotchas/` + `logs/` como memoria del agente. Skills Cursor siguen en `.cursor/skills/` (descubrimiento de Cursor).

## Por qué

El kit es un `tokens.json` enorme; el plan de Color y las decisiones de Fase 0 vivían solo en chat. Cada sesión recargaba el JSON o el transcript.

## Consecuencias

- Arranque = `AGENTS.md` + `state/current.md`, no transcripts.
- `tokens.json` y el Binding Plan no se cargan enteros por defecto.
- Cierre de sesión importante actualiza `state/`, ADRs y `logs/`.
