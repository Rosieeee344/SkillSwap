import { learningPaths } from '../data/learningPaths';

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getLearningPaths() {
  await delay();
  return learningPaths;
}
