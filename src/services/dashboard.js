import { upcomingSessions, recentActivity, suggestedSkills, recentMessages, leaderboardPreview, notificationsPreview } from '../data/dashboard';

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getDashboardData() {
  await delay();
  return { upcomingSessions, recentActivity, suggestedSkills, recentMessages, leaderboardPreview, notificationsPreview };
}
