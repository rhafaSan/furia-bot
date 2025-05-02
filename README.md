# 🤖 Bot da Torcida FURIA (Telegram)

![FURIA Logo](https://upload.wikimedia.org/wikipedia/pt/thumb/7/7e/FURIA_Esports_logo.png/320px-FURIA_Esports_logo.png)

Este projeto é um chatbot interativo no Telegram feito para os fãs da equipe de CS:GO da **FURIA**. O bot fornece uma experiência conversacional divertida e personalizada, permitindo que a torcida acompanhe o time de forma prática, diretamente pelo chat.

## 🚀 Funcionalidades

- ✅ Comando `/start` com menu interativo
- 🎮 Status ao vivo de jogos (a ser implementado)
- 🗓️ Consulta de próximos confrontos (em breve)
- 📊 Estatísticas do time (em construção)
- 🔥 Gritar com a FURIA (interação simulada com torcida)

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 📦 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/rhafaSan/furia-telegram-bot.git
cd furia-telegram-bot
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o arquivo `.env`:**

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BOT_TOKEN=123456789:ABCDefghIJKlmnoPQRstuvWXyz
```

4. **Inicie o bot localmente:**

```bash
npx tsx bot.ts
```

---

## 🧪 Teste Local

Você pode testar o bot diretamente no Telegram após iniciá-lo. Basta enviar `/start` para visualizar o menu com opções.

📌 **Dica:** O bot deve estar em execução para responder comandos. Use `console.log` para debug.

---

## 📁 Estrutura do Projeto

```
furia-telegram-bot/
├── bot.ts              # Lógica principal do bot
├── .env                # Token do Telegram (não versionado)
├── package.json
├── tsconfig.json
```

---

## 💡 Próximas Funcionalidades

- Integração com API de jogos da FURIA
- Estatísticas dos jogadores
- Simulação de torcida com áudio
- Versão Web/Mobile com interface visual

---

## 👤 Autor

Desenvolvido por [@rhafaSan](https://github.com/rhafaSan) 💻

---

## 🦁 FURIA É FÚRIA!

> “Não basta torcer. Aqui a gente ruge com o time.”
