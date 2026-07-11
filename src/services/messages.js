import { conversations, sampleMessages } from '../data/messages';

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getConversations() {
  await delay();
  return conversations;
}

export async function getMessages(_conversationId) {
  await delay();
  return sampleMessages;
}

export async function sendMessage(_conversationId, text) {
  await delay(200);
  return { id: Date.now(), sender: 'Alex Chen', text, time: 'Just now', isMe: true };
}
