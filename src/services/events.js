import { events, eventFilters } from '../data/events';

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getEvents() {
  await delay();
  return events;
}

export async function getEventFilters() {
  await delay();
  return eventFilters;
}
