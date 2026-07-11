import { matchTabs, matches } from '../data/matches';

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getMatchTabs() {
  await delay();
  return matchTabs;
}

export async function getMatches() {
  await delay();
  return matches;
}

export async function acceptMatch(id) {
  await delay();
  return { success: true, id };
}

export async function declineMatch(id) {
  await delay();
  return { success: true, id };
}
