export const matchTabs = [
  { key: 'pending', label: 'Pending' },
  { key: 'accepted', label: 'Accepted' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
  { key: 'cancelled', label: 'Cancelled' },
];

export const matches = {
  pending: [
    { id: 1, name: 'Emily Watson', skill: 'UI/UX Design', offeredSkill: 'JavaScript', avatar: 'EW', requestedAt: '2 days ago', matchScore: 92 },
    { id: 2, name: 'Marcus Rivera', skill: 'Python', offeredSkill: 'React', avatar: 'MR', requestedAt: '3 days ago', matchScore: 88 },
    { id: 3, name: 'Yuki Tanaka', skill: 'Node.js', offeredSkill: 'TypeScript', avatar: 'YT', requestedAt: '5 days ago', matchScore: 85 },
  ],
  accepted: [
    { id: 4, name: 'Sarah Kim', skill: 'React Fundamentals', offeredSkill: 'JavaScript', avatar: 'SK', acceptedAt: '1 day ago', matchScore: 95 },
    { id: 5, name: 'David Wilson', skill: 'TypeScript', offeredSkill: 'React', avatar: 'DW', acceptedAt: '2 days ago', matchScore: 91 },
  ],
  active: [
    { id: 6, name: 'James Chen', skill: 'UI/UX Design Basics', offeredSkill: 'HTML/CSS', avatar: 'JC', sessionsCompleted: 3, nextSession: 'Today, 3:00 PM', matchScore: 94 },
    { id: 7, name: 'Maria Lopez', skill: 'Python for Data Science', offeredSkill: 'Python', avatar: 'ML', sessionsCompleted: 5, nextSession: 'Tomorrow, 10:00 AM', matchScore: 89 },
  ],
  completed: [
    { id: 8, name: 'Tom Baker', skill: 'Git & Version Control', offeredSkill: 'React', avatar: 'TB', completedAt: '1 week ago', rating: 5, matchScore: 90 },
    { id: 9, name: 'Lisa Zhang', skill: 'CSS Grid & Flexbox', offeredSkill: 'JavaScript', avatar: 'LZ', completedAt: '2 weeks ago', rating: 4, matchScore: 87 },
    { id: 10, name: "Ryan O'Brien", skill: 'React Hooks', offeredSkill: 'TypeScript', avatar: 'RO', completedAt: '3 weeks ago', rating: 5, matchScore: 93 },
  ],
  cancelled: [
    { id: 11, name: 'Anna Schmidt', skill: 'Docker Basics', offeredSkill: 'Node.js', avatar: 'AS', cancelledAt: '4 days ago', reason: 'Schedule conflict' },
  ],
};
