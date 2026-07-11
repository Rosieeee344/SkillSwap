import { notificationGroups } from '../data/notifications';

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getNotifications() {
  await delay();
  return notificationGroups;
}

export async function markAllRead() {
  await delay();
  return { success: true };
}

export async function markAsRead(id) {
  await delay();
  return { success: true, id };
}
