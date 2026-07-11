export const adminStats = {
  totalUsers: { value: '1,284', trend: '+12 this week' },
  verifiedUsers: { value: '892', trend: '+8 this week' },
  pendingVerifications: { value: '5', trend: null },
  activeMatches: { value: '143', trend: '+18%' },
  reportsAwaiting: { value: '4', trend: null },
  activeSessions: { value: '37', trend: null },
  eventsThisWeek: { value: '6', trend: null },
  growth: { value: '+24%', trend: '+5% vs last' },
};

export const recentVerifications = [
  { id: 1, name: 'Emily Watson', university: 'UCLA', avatar: 'EW', time: '2 hours ago' },
  { id: 2, name: 'Marcus Rivera', university: 'NYU', avatar: 'MR', time: '5 hours ago' },
  { id: 3, name: 'Yuki Tanaka', university: 'University of Tokyo', avatar: 'YT', time: '1 day ago' },
];

export const recentReports = [
  { id: 1, reporter: 'Sarah Kim', reported: 'John Doe', reason: 'Inappropriate Behavior', time: '1 hour ago', priority: 'high' },
  { id: 2, reporter: 'David Wilson', reported: 'Jane Smith', reason: 'Harassment', time: '3 hours ago', priority: 'critical' },
];

export const quickActions = [
  { label: 'Verification Queue', icon: 'UserCheck', path: '/admin/verification', color: 'bg-emerald-100 text-emerald-600' },
  { label: 'View Reports', icon: 'Flag', path: '/admin/reports', color: 'bg-amber-100 text-amber-600' },
  { label: 'User Management', icon: 'Users', path: '/admin/users', color: 'bg-primary-100 text-primary-600' },
  { label: 'Activity Log', icon: 'Activity', path: '/admin/activity', color: 'bg-purple-100 text-purple-600' },
];
