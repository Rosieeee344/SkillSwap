export const MOCK_USER = {
  id: 'user-1',
  name: 'Alex Chen',
  email: 'alex@skillswap.dev',
  initials: 'AC',
  avatar: null,
  university: 'Stanford University',
  department: 'Computer Science',
  academicLevel: 'Senior',
  bio: 'Passionate computer science student with a love for teaching and learning.',
  location: 'California, USA',
  rating: 4.8,
  reviewCount: 24,
  sessionsCompleted: 32,
  skillPoints: 2750,
  verified: true,
  createdAt: '2025-03-01T00:00:00Z',
};

export const skillsOffered = ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Git'];

export const skillsWanted = ['Python', 'UI/UX Design', 'Node.js', 'GraphQL'];

export const reviews = [
  { id: 1, name: 'Sarah Kim', rating: 5, text: 'Alex is an amazing React tutor! Very patient and explains concepts clearly.', avatar: 'SK', date: '3 days ago' },
  { id: 2, name: 'David Wilson', rating: 5, text: 'Great session on TypeScript. Helped me understand generics.', avatar: 'DW', date: '1 week ago' },
  { id: 3, name: 'Maria Lopez', rating: 4, text: 'Good teaching style. Would recommend for JavaScript basics.', avatar: 'ML', date: '2 weeks ago' },
];

export const gamificationBadges = [
  { name: 'Quick Learner', icon: '⚡', earned: true },
  { name: 'Top Rated', icon: '⭐', earned: true },
  { name: 'Session Master', icon: '🏆', earned: true },
  { name: 'Streak Champion', icon: '🔥', earned: false },
  { name: 'Community Star', icon: '🌟', earned: false },
];
