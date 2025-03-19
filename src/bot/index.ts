
import { BOT_TOKEN, BOT_PREFIX } from '../config/botConfig';
import { Client, GatewayIntentBits } from 'discord.js';

// Initialize the Discord client with required intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ]
});

// Bot ready event
client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
  console.log(`Serving ${client.guilds.cache.size} servers`);
  console.log('Twix Bot is ready to play music!');
});

// Command handler
client.on('messageCreate', async (message) => {
  // Ignore messages from bots or messages that don't start with the prefix
  if (message.author.bot || !message.content.startsWith(BOT_PREFIX)) return;
  
  // Extract command and arguments
  const args = message.content.slice(BOT_PREFIX.length).trim().split(/ +/);
  const command = args.shift()?.toLowerCase();
  
  // Example command
  if (command === 'ping') {
    message.reply('Pong! 🎵');
  }
  
  // Add more music commands here
});

// Error handling
client.on('error', (error) => {
  console.error('Discord client error:', error);
});

// Start the bot
export const startBot = () => {
  if (!BOT_TOKEN || BOT_TOKEN === "YOUR_BOT_TOKEN_HERE") {
    console.error('No bot token provided! Please set your bot token in the configuration.');
    return;
  }
  
  // Login to Discord
  client.login(BOT_TOKEN)
    .then(() => console.log('Bot logged in successfully'))
    .catch(err => console.error('Failed to login:', err));
};

// Export the client for use in other files
export { client };
