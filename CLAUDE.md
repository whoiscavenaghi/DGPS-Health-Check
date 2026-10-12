# DGPS Health Check

Ferramenta web de aferição de DGPS/GNSS a partir de log NMEA (GGA) ou ASCII; roda como site estático.

## Estrutura
- `CLAUDE.md`
- `LEIA-ME.txt`
- `README.md`
- `index.html`
- `lib/`

## Regras (definidas pelo usuário)
1. Sempre responder em português.
2. Ao alterar `index.html`, atualizar o GitHub (commit e push) e avisar.
3. Ao alterar o `CLAUDE.md`, fazer commit e push e avisar.

As regras acima valem só para `index.html` e `CLAUDE.md`. Em qualquer outro arquivo, não fazer commit nem push sem o usuário pedir.

## Como trabalhar aqui
- Ler o `README.md` antes de mexer.
- Comandos de shell passam pelo RTK; se a saída vier estranha, repetir com `rtk proxy <comando>`.
