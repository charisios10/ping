module.exports = {
  name: "ping",
  description: "Make the bot reply with pong!",
  options: [],
  run: async (client, interaction) => {
    interaction.reply("pong");
  },
};
