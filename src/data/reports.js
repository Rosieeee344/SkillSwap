export const reports = [
  { id: 1, reporter: 'Sarah Kim', reported: 'John Doe', reason: 'Inappropriate Behavior', priority: 'high', status: 'open', date: '1 hour ago' },
  { id: 2, reporter: 'David Wilson', reported: 'Jane Smith', reason: 'Harassment', priority: 'critical', status: 'open', date: '3 hours ago' },
  { id: 3, reporter: 'Lisa Zhang', reported: 'Mike Brown', reason: 'Spam', priority: 'low', status: 'reviewing', date: '5 hours ago' },
  { id: 4, reporter: 'Maria Lopez', reported: 'Tom Baker', reason: 'Fake Profile', priority: 'medium', status: 'open', date: '1 day ago' },
  { id: 5, reporter: 'Alex Chen', reported: "Ryan O'Brien", reason: 'No-Shows', priority: 'low', status: 'resolved', date: '2 days ago' },
];

export const priorityBadge = { critical: 'danger', high: 'warning', medium: 'primary', low: 'neutral' };
export const statusBadge = { open: 'warning', reviewing: 'primary', resolved: 'success' };
