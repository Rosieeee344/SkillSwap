/**
 * Placeholder service layer for future API integration.
 * All methods return Promises that resolve with mock data.
 * Replace the `import` sources with actual API calls when backend is ready.
 */

import { MOCK_USER, skillsOffered, skillsWanted, reviews, gamificationBadges } from '../data/profile';

export async function getProfile() {
  await delay();
  return { ...MOCK_USER, skillsOffered, skillsWanted, reviews, gamificationBadges };
}

export async function updateProfile(data) {
  await delay();
  return { ...MOCK_USER, ...data };
}

export async function getReviews() {
  await delay();
  return reviews;
}

function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
