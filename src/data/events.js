export const events = [
  { id: 1, title: 'React Workshop: Advanced Patterns', type: 'workshop', icon: 'Code', date: 'Jul 15, 2025', time: '2:00 PM - 4:00 PM', location: 'Online', attendees: 34, maxAttendees: 50, host: 'Sarah Kim', hostAvatar: 'SK', description: 'Deep dive into React patterns including compound components, render props, and custom hooks.', tags: ['React', 'Advanced', 'Frontend'] },
  { id: 2, title: 'UI/UX Design Hackathon', type: 'hackathon', icon: 'Palette', date: 'Jul 18 - 19, 2025', time: '10:00 AM onwards', location: 'Design Lab, Bldg 3', attendees: 28, maxAttendees: 30, host: 'James Chen', hostAvatar: 'JC', description: '48-hour design hackathon. Redesign a campus service from scratch. Prizes for top 3 teams.', tags: ['Design', 'Hackathon', 'In-Person'] },
  { id: 3, title: 'Python for Data Science Study Group', type: 'study-group', icon: 'TrendingUp', date: 'Every Tuesday', time: '5:00 PM - 6:30 PM', location: 'Online', attendees: 56, maxAttendees: 100, host: 'Maria Lopez', hostAvatar: 'ML', description: 'Weekly study group covering pandas, numpy, and data visualization techniques.', tags: ['Python', 'Data Science', 'Recurring'] },
  { id: 4, title: 'Coffee & Code: JavaScript Edition', type: 'meetup', icon: 'Coffee', date: 'Jul 22, 2025', time: '11:00 AM - 1:00 PM', location: 'Campus Cafe', attendees: 15, maxAttendees: 20, host: 'David Wilson', hostAvatar: 'DW', description: 'Casual coding meetup. Bring your laptop, grab a coffee, and code together on JavaScript challenges.', tags: ['JavaScript', 'Networking', 'Beginner-Friendly'] },
  { id: 5, title: 'Cybersecurity Capture The Flag', type: 'competition', icon: 'Monitor', date: 'Jul 25, 2025', time: '1:00 PM - 5:00 PM', location: 'Online', attendees: 42, maxAttendees: 200, host: "Ryan O'Brien", hostAvatar: 'RO', description: 'Test your security skills in this CTF competition. Solve challenges across web, crypto, and forensics.', tags: ['Cybersecurity', 'Competition', 'All Levels'] },
  { id: 6, title: 'Building Your First Full-Stack App', type: 'workshop', icon: 'Code', date: 'Jul 28, 2025', time: '3:00 PM - 5:30 PM', location: 'Online', attendees: 67, maxAttendees: 100, host: 'Alex Chen', hostAvatar: 'AC', description: 'Hands-on workshop: build a full-stack app with React, Node.js, and PostgreSQL from scratch.', tags: ['Full-Stack', 'Workshop', 'Beginner'] },
];

export const eventFilters = [
  { key: 'all', label: 'All Events' },
  { key: 'workshop', label: 'Workshops' },
  { key: 'meetup', label: 'Meetups' },
  { key: 'hackathon', label: 'Hackathons' },
  { key: 'study-group', label: 'Study Groups' },
  { key: 'competition', label: 'Competitions' },
];
