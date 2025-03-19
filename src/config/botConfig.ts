// This file contains configuration settings for the Twix Bot

// Discord bot token - replace with your actual token when testing
// IMPORTANT: Never commit your actual token to a public repository
export const BOT_TOKEN = process.env.BOT_TOKEN || "YOUR_BOT_TOKEN_HERE";

// Other bot configuration settings can be added here
export const BOT_PREFIX = "!"; // Command prefix
export const DEFAULT_VOLUME = 50; // Default music volume (0-100)
export const MAX_QUEUE_SIZE = 100; // Maximum songs in queue
export const IDLE_DISCONNECT_TIME = 300000; // Disconnect after 5 minutes of inactivity
