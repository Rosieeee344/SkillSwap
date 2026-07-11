export const users = [
  { id: 1, name: 'Alex Chen', email: 'alex@skillswap.dev', university: 'Stanford University', department: 'Computer Science', role: 'Student', verified: true, status: 'active', avatar: 'AC' },
  { id: 2, name: 'Sarah Kim', email: 'sarah@skillswap.dev', university: 'Carnegie Mellon', department: 'Design', role: 'Student', verified: true, status: 'active', avatar: 'SK' },
  { id: 3, name: 'Emily Watson', email: 'emily@uni.edu', university: 'UCLA', department: 'Engineering', role: 'Student', verified: false, status: 'pending', avatar: 'EW' },
  { id: 4, name: 'David Wilson', email: 'david@skillswap.dev', university: 'University of Washington', department: 'Computer Science', role: 'Student', verified: true, status: 'active', avatar: 'DW' },
  { id: 5, name: 'John Doe', email: 'john@uni.edu', university: 'Unknown', department: '—', role: 'Student', verified: false, status: 'suspended', avatar: 'JD' },
  { id: 6, name: 'Jane Smith', email: 'jane@uni.edu', university: 'Unknown', department: '—', role: 'Student', verified: false, status: 'banned', avatar: 'JS' },
  { id: 7, name: 'Lisa Zhang', email: 'lisa@skillswap.dev', university: 'NYU', department: 'Mathematics', role: 'Student', verified: true, status: 'active', avatar: 'LZ' },
  { id: 8, name: 'Marcus Rivera', email: 'marcus@uni.edu', university: 'NYU', department: 'Physics', role: 'Student', verified: false, status: 'pending', avatar: 'MR' },
];

export const userStatusBadge = {
  active: { color: 'success', label: 'Active' },
  pending: { color: 'warning', label: 'Pending' },
  suspended: { color: 'danger', label: 'Suspended' },
  banned: { color: 'danger', label: 'Banned' },
};
