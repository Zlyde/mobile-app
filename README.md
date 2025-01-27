# mobile-app VTEAM ZOOMIES

Detta är mobil-applikationen för vårat elsparkcykel-system. Applikationen är byggd med React.js tillsammans med vite, där applikationens frontend komminucerar med backend via vårat REST API.

Systemet är en del av ett större system som hanteras via ett centralt repo, kallat vteam. I vteam repot finns instruktioner för att sätta upp hela systemet, inklusive backend, databas och webb-appplikationen (frontend-repot).

Man kan logga in som kund och se tillgängliga sparkcyklar samt städernas zoner med parkerings-samt laddstationer. Därefter kan man välja en sparkcykel, starta en resa och avsluta en resa, kundens konto och historik hittas i webb-gränssnittet i frontend-repot.

## Viktiga punkter

- Repot fokuserar på den mobilanpassade frontend-delen och hanteras med Docker som en del av systemet.
- För att systemet ska fungera korrekt behöver repon klonas i en specifik ordning.
- Testning sker med npm-skript:
```bash
npm test
```
- Testning sker även automatiskt med githubs actions vid en push/pull-request till main-branch.

## Installation och körning

Då detta är en del av ett större system så behöver vi göra enligt följande:
- Klona i rätt ordning för att säkerställa att alla tjänster startas korrekt med:
```bash
docker-compose up --build
```
- Lokal utveckling: Du kan även köra projektet lokalt för utveckling:
```bash
git clone https://github.com/Zlyde/mobile-app.git
cd mobile-app
npm install
npm run dev
```
Detta kommer starta applikatinen på http://localhost:5173
- För att bygga Sass:
```bash
npm run style
```

## Förutsättningar

Innan du startar projektet behöver du följande:
- Node.js
- npm eller yarn för att installera beroenden

Översikt av de vitkgiaste filerna och mapparna:
```bash
src/
├── assets/           # bildfiler
├── components/       # De olika komponenterna för att bygga/visa upp sidorna
├── config/           # Konfig-fil för att visa version av REST API:et
├── context/          # userContext
├── layout/           # Rendera huvud layouten
├── pages/            # Sidor
├── style/            # SCSS för projektet
├── utils/            # Hjälpfunktioner (API-anrop)
├── App.jsx           # Huvudkomponent
├── main.jsx          # Projektets ingångspunkt
├── socket.jsx        # Socket.io
├── .env              # Miljövariabler
```
