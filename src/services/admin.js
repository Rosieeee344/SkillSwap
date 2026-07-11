import { reports, priorityBadge, statusBadge } from '../data/reports';
import { users, userStatusBadge } from '../data/users';
import { pendingVerifications } from '../data/verifications';
import { activities } from '../data/activity';
import { adminStats, recentVerifications, recentReports, quickActions } from '../data/admin';

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getAdminStats() {
  await delay();
  return adminStats;
}

export async function getRecentVerifications() {
  await delay();
  return recentVerifications;
}

export async function getRecentReports() {
  await delay();
  return recentReports;
}

export async function getQuickActions() {
  await delay();
  return quickActions;
}

export async function getUsers() {
  await delay();
  return { users, statusBadge: userStatusBadge };
}

export async function getPendingVerifications() {
  await delay();
  return pendingVerifications;
}

export async function getReports() {
  await delay();
  return { reports, priorityBadge, statusBadge };
}

export async function getActivityLog() {
  await delay();
  return activities;
}

export async function approveVerification(id) {
  await delay(500);
  return { success: true, id };
}

export async function rejectVerification(id) {
  await delay(500);
  return { success: true, id };
}

export async function resolveReport(id, action) {
  await delay(500);
  return { success: true, id, action };
}

export async function updateUserStatus(id, status) {
  await delay(500);
  return { success: true, id, status };
}
