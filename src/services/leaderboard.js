import { globalRankings, schoolRankings } from '../data/leaderboard';

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getGlobalRankings() {
  await delay();
  return globalRankings;
}

export async function getSchoolRankings() {
  await delay();
  return schoolRankings;
}
