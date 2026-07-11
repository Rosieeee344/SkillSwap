export const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const calendarDays = [
  { day: 28, month: 'prev' }, { day: 29, month: 'prev' }, { day: 30, month: 'prev' },
  { day: 1, month: 'current' }, { day: 2, month: 'current' }, { day: 3, month: 'current' },
  { day: 4, month: 'current' }, { day: 5, month: 'current' }, { day: 6, month: 'current' },
  { day: 7, month: 'current' }, { day: 8, month: 'current' }, { day: 9, month: 'current' },
  { day: 10, month: 'current' }, { day: 11, month: 'current' }, { day: 12, month: 'current' },
  { day: 13, month: 'current' }, { day: 14, month: 'current', booked: true },
  { day: 15, month: 'current' }, { day: 16, month: 'current', booked: true },
  { day: 17, month: 'current' }, { day: 18, month: 'current' },
  { day: 19, month: 'current' }, { day: 20, month: 'current' },
  { day: 21, month: 'current' }, { day: 22, month: 'current' },
  { day: 23, month: 'current' }, { day: 24, month: 'current' },
  { day: 25, month: 'current' }, { day: 26, month: 'current' },
  { day: 27, month: 'current' }, { day: 28, month: 'current' },
  { day: 29, month: 'current' }, { day: 30, month: 'current' },
  { day: 31, month: 'current' }, { day: 1, month: 'next' }, { day: 2, month: 'next' },
];

export const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM',
];

export const upcomingSessions = [
  { id: 1, partner: 'Sarah Kim', skill: 'React Fundamentals', date: 'Jul 15, 2025', time: '3:00 PM', duration: '1 hour', avatar: 'SK', type: 'video' },
  { id: 2, partner: 'James Chen', skill: 'UI/UX Design Basics', date: 'Jul 18, 2025', time: '10:00 AM', duration: '1.5 hours', avatar: 'JC', type: 'video' },
];
