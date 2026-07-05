import { categories, discussions, popularTopics } from '../data/community';

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getCategories() {
  await delay();
  return categories;
}

export async function getDiscussions() {
  await delay();
  return discussions;
}

export async function getPopularTopics() {
  await delay();
  return popularTopics;
}
