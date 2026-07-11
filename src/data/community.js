export const categories = [
  { id: 'all', label: 'All Topics' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'design', label: 'Design' },
  { id: 'career', label: 'Career' },
  { id: 'general', label: 'General' },
];

export const discussions = [
  { id: 1, title: 'Best practices for React state management in 2025?', author: 'Sarah Kim', avatar: 'SK', category: 'frontend', content: 'I am starting a new project and wondering what the current consensus is on state management.', replies: 24, views: 342, likes: 18, time: '2 hours ago', pinned: true, solved: true },
  { id: 2, title: 'Tips for first-time mentors: How to structure a good session', author: 'Alex Chen', avatar: 'AC', category: 'general', content: 'After running 30+ sessions, here are my top tips for creating effective peer-to-peer learning experiences.', replies: 56, views: 890, likes: 94, time: '5 hours ago', pinned: true, solved: false, isMe: true },
  { id: 3, title: 'CSS Grid vs Flexbox: When to use which?', author: 'David Wilson', avatar: 'DW', category: 'frontend', content: 'I keep mixing up when to use Grid and when to use Flexbox.', replies: 31, views: 567, likes: 42, time: '8 hours ago', pinned: false, solved: true },
  { id: 4, title: 'Transitioning from college projects to real-world codebases', author: 'Emily Watson', avatar: 'EW', category: 'career', content: 'I am about to start my first internship and I am nervous about working on a real codebase.', replies: 47, views: 723, likes: 65, time: '1 day ago', pinned: false, solved: false },
  { id: 5, title: 'Design systems: Building reusable components that scale', author: 'James Chen', avatar: 'JC', category: 'design', content: 'What are the key principles for building a design system that works across multiple products?', replies: 19, views: 234, likes: 28, time: '1 day ago', pinned: false, solved: false },
  { id: 6, title: 'Node.js authentication: JWT vs Session-based', author: 'Maria Lopez', avatar: 'ML', category: 'backend', content: 'I am building an API and trying to decide between JWT and session-based authentication.', replies: 33, views: 456, likes: 51, time: '2 days ago', pinned: false, solved: true },
];

export const popularTopics = [
  { label: 'React Hooks', posts: 128 },
  { label: 'TypeScript', posts: 95 },
  { label: 'Career Advice', posts: 82 },
  { label: 'Python', posts: 74 },
  { label: 'System Design', posts: 68 },
  { label: 'Git & GitHub', posts: 61 },
];
