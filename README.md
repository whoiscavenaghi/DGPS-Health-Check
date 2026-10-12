# DGPS Health Check

Ferramenta web de aferição de DGPS/GNSS: carrega log NMEA (GGA) ou ASCII (X, Y), calcula a dispersão em relação ao marco geodésico (ou à média das leituras), mostra dispersão e série temporal, e gera relatório PDF (A4) e planilha Excel.

## Instalação (servidor NAS / web estático)
1. Copie esta pasta para a pasta web do servidor.
2. Baixe para `lib/`: `jspdf.umd.min.js` e `xlsx.full.min.js` (links em `lib/LEIA-ME.txt`). Opcional: `heic2any.min.js`.
3. Abra por `http://IP-DO-SERVIDOR/dgps-health-check/` (não abrir com duplo clique no arquivo).

Os dados ficam só no navegador; nada é enviado ao servidor.

Desenvolvido por Ernani Vilela - vilelaernani@gmail.com / © 2026 Ernani Vilela
