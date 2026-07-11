export const notificationGroups = [
  {
    date: 'Today',
    items: [
      { id: 1, type: 'reminder', title: 'Session Reminder', text: 'Your React Fundamentals session with Sarah Kim starts in 30 minutes.', time: '9:30 AM', read: false },
      { id: 2, type: 'match', title: 'New Match', text: 'You have a new match request from Emily Watson for UI/UX Design.', time: '8:15 AM', read: false },
      { id: 3, type: 'achievement', title: 'Achievement Unlocked', text: 'Congratulations! You earned the "Quick Learner" badge.', time: '7:00 AM', read: true },
    ],
  },
  {
    date: 'Yesterday',
    items: [
      { id: 4, type: 'session', title: 'Session Completed', text: 'Your TypeScript session with David Wilson has been marked as complete.', time: '4:30 PM', read: true },
      { id: 5, type: 'message', title: 'New Message', text: 'Emily Parker sent you a message: "Thanks for the great session!"', time: '2:00 PM', read: true },
      { id: 6, type: 'match', title: 'Match Accepted', text: 'James Chen accepted your match request for UI/UX Design Basics.', time: '11:00 AM', read: true },
    ],
  },
  {
    date: 'This Week',
    items: [
      { id: 7, type: 'achievement', title: 'Level Up', text: 'You reached Level 12! Keep learning to unlock more rewards.', time: 'Jul 1', read: true },
      { id: 8, type: 'system', title: 'System Update', text: 'SkillSwap has new features! Check out the updated learning paths.', time: 'Jun 30', read: true },
      { id: 9, type: 'reminder', title: 'Weekly Roundup', text: 'You completed 5 sessions this week. Great job keeping the streak!', time: 'Jun 29', read: true },
    ],
  },
];
