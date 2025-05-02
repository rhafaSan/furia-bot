import TelegramBot, { KeyboardButton } from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN!, { polling: true });

console.log("🤖 Bot FURIA iniciado e escutando mensagens...");

function sendMainMenu(chatId: number, messageId?: number) {
  const inlineKeyboard: TelegramBot.InlineKeyboardMarkup = {
    inline_keyboard: [
      [{ text: "🎮 Status do Jogo", callback_data: "opt1" }],
      [{ text: "🗓️ Próximos Confrontos", callback_data: "opt2" }],
      [{ text: "🔥 Gritar com a FURIA", callback_data: "opt3" }],
      [{ text: "📊 Estatísticas", callback_data: "opt4" }],
    ],
  };

  if (messageId) {
    bot.editMessageText("Menu principal  - Escolha uma opção:", {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: inlineKeyboard,
    });
  } else {
    bot.sendMessage(chatId, "🔥 Bem-vindo ao Chat da Torcida FURIA!", {
      reply_markup: inlineKeyboard,
    });
  }
}

bot.onText(/\/start/, (msg) => {
  sendMainMenu(msg.chat.id);
});

bot.on("callback_query", (callbackQuery) => {
  const message = callbackQuery.message;
  const chatId = message!.chat.id;
  const data = callbackQuery.data;

  bot.answerCallbackQuery(callbackQuery.id).then(() => {
    switch (data) {
      case "opt1":
        return bot
          .sendMessage(
            chatId,
            "🎯 FURIA vs NAVI — Placar atual: 13x10 (Mirage)"
          )
          .then(() => sendMainMenu(chatId));
      case "opt2":
        return bot
          .sendMessage(
            chatId,
            "📅 Próximo confronto: FURIA vs Vitality — 30/04 às 18h "
          )
          .then(() => sendMainMenu(chatId));
      case "opt3":
        return bot
          .sendMessage(chatId, "💥 VAAAAI FURIAAAA! 🔥🦁")
          .then(() => sendMainMenu(chatId));
      case "opt4":
        return bot
          .sendMessage(
            chatId,
            "📊 Estatísticas:\n- KSCERATO: 25 Kills\n- arT: 3 Entry Frags\n- Drop: 80% suporte"
          )
          .then(() => sendMainMenu(chatId));
    }
  });
});

bot.on("polling_error", (error) => {
  console.error("Erro no polling:", error);
});
