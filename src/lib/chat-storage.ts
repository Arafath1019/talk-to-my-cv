/**
 * Chat history persistence utilities using localStorage.
 */

export interface Message {
  id?: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
  status?: "sent" | "error";
  metadata?: {
    suggestedQuestions?: string[];
    [key: string]: unknown;
  };
}

const CHAT_HISTORY_KEY = "portfolio_chat_history";
const MAX_MESSAGES = 50;

/**
 * Saves chat history to localStorage, maintaining only the last MAX_MESSAGES.
 */
export const saveChatHistory = (messages: Message[]): void => {
  if (globalThis.window === undefined) return;

  try {
    // Keep only the last MAX_MESSAGES
    const historyToSave = messages.slice(-MAX_MESSAGES);
    localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(historyToSave));
  } catch (error) {
    console.error("Failed to save chat history:", error);
  }
};

/**
 * Loads chat history from localStorage.
 */
export const loadChatHistory = (): Message[] => {
  if (globalThis.window === undefined) return [];

  try {
    const stored = localStorage.getItem(CHAT_HISTORY_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as Message[];
  } catch (error) {
    console.error("Failed to load chat history:", error);
    return [];
  }
};

/**
 * Clears chat history from localStorage.
 */
export const clearChatHistory = (): void => {
  if (globalThis.window === undefined) return;
  localStorage.removeItem(CHAT_HISTORY_KEY);
};

/**
 * Exports chat history as a JSON file.
 */
export const exportChatHistory = (messages: Message[]): void => {
  if (globalThis.window === undefined) return;

  try {
    const dataStr = JSON.stringify(messages, null, 2);
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `chat_history_${new Date().toISOString()}.json`;
    
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  } catch (error) {
    console.error("Failed to export chat history:", error);
  }
};
