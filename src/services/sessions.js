import { calendarDays, timeSlots, upcomingSessions } from '../data/sessions';

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getCalendar() {
  await delay();
  return { calendarDays, timeSlots };
}

export async function getSessions() {
  await delay();
  return upcomingSessions;
}

export async function createSession(data) {
  await delay();
  return { success: true, id: Date.now(), ...data };
}
