export const conversations = [
  { id: 1, name: 'Emily Parker', avatar: 'EP', lastMessage: 'Sure! Let me share my screen with the design...', time: '9:41 AM', unread: 2, online: true },
  { id: 2, name: 'David Wilson', avatar: 'DW', lastMessage: 'Thanks for the session today! Really helpful.', time: 'Yesterday', unread: 0, online: false },
  { id: 3, name: 'Lisa Zhang', avatar: 'LZ', lastMessage: 'Can we reschedule our session to Friday?', time: 'Yesterday', unread: 1, online: true },
  { id: 4, name: 'James Chen', avatar: 'JC', lastMessage: 'I sent you the Figma file for review.', time: 'Mon', unread: 0, online: false },
  { id: 5, name: 'Sarah Kim', avatar: 'SK', lastMessage: 'Looking forward to our React session!', time: 'Mon', unread: 0, online: true },
  { id: 6, name: 'Marcus Rivera', avatar: 'MR', lastMessage: 'Do you have experience with Redux?', time: 'Last week', unread: 0, online: false },
];

export const sampleMessages = [
  { id: 1, sender: 'Emily Parker', text: 'Hi Alex! Thanks for offering to help with JavaScript.', time: '9:30 AM', isMe: false },
  { id: 2, sender: 'Alex Chen', text: 'Of course! Happy to help. What specific topics are you struggling with?', time: '9:32 AM', isMe: true },
  { id: 3, sender: 'Emily Parker', text: 'I am having trouble understanding closures and async/await patterns.', time: '9:35 AM', isMe: false },
  { id: 4, sender: 'Alex Chen', text: 'Those are tricky concepts! Let me explain closures first with a simple example.', time: '9:38 AM', isMe: true },
  { id: 5, sender: 'Alex Chen', text: 'A closure is when a function remembers its outer scope even after the outer function has returned. Think of it like a backpack of variables the function carries around.', time: '9:38 AM', isMe: true },
  { id: 6, sender: 'Emily Parker', text: 'Oh, that backpack analogy actually makes a lot of sense!', time: '9:40 AM', isMe: false },
  { id: 7, sender: 'Emily Parker', text: 'Sure! Let me share my screen with the design prototype I am working on.', time: '9:41 AM', isMe: false },
];
