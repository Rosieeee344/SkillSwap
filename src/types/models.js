/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} initials
 * @property {string|null} avatar
 * @property {string} university
 * @property {string} department
 * @property {string} academicLevel
 * @property {string} bio
 * @property {string} location
 * @property {number} rating
 * @property {number} reviewCount
 * @property {number} sessionsCompleted
 * @property {number} skillPoints
 * @property {boolean} verified
 * @property {string} createdAt
 */

/**
 * @typedef {Object} Profile
 * @property {User} user
 * @property {string[]} skillsOffered
 * @property {string[]} skillsWanted
 * @property {Review[]} reviews
 * @property {Badge[]} badges
 */

/**
 * @typedef {Object} Review
 * @property {number} id
 * @property {string} name
 * @property {number} rating
 * @property {string} text
 * @property {string} avatar
 * @property {string} date
 */

/**
 * @typedef {Object} Badge
 * @property {string} name
 * @property {string} icon
 * @property {boolean} earned
 */

/**
 * @typedef {Object} Match
 * @property {number} id
 * @property {string} name
 * @property {string} skill
 * @property {string} offeredSkill
 * @property {string} avatar
 * @property {number} matchScore
 * @property {string} [requestedAt]
 * @property {string} [acceptedAt]
 * @property {number} [sessionsCompleted]
 * @property {string} [nextSession]
 * @property {string} [completedAt]
 * @property {number} [rating]
 * @property {string} [cancelledAt]
 * @property {string} [reason]
 */

/**
 * @typedef {Object} Conversation
 * @property {number} id
 * @property {string} name
 * @property {string} avatar
 * @property {string} lastMessage
 * @property {string} time
 * @property {number} unread
 * @property {boolean} online
 */

/**
 * @typedef {Object} Message
 * @property {number} id
 * @property {string} sender
 * @property {string} text
 * @property {string} time
 * @property {boolean} isMe
 */

/**
 * @typedef {Object} Notification
 * @property {number} id
 * @property {string} type
 * @property {string} title
 * @property {string} text
 * @property {string} time
 * @property {boolean} read
 */

/**
 * @typedef {Object} Session
 * @property {number} id
 * @property {string} partner
 * @property {string} skill
 * @property {string} date
 * @property {string} time
 * @property {string} duration
 * @property {string} avatar
 * @property {string} type
 */

/**
 * @typedef {Object} Report
 * @property {number} id
 * @property {string} reporter
 * @property {string} reported
 * @property {string} reason
 * @property {string} priority
 * @property {string} status
 * @property {string} date
 */

/**
 * @typedef {Object} AdminUser
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {string} university
 * @property {string} department
 * @property {string} role
 * @property {boolean} verified
 * @property {string} status
 * @property {string} avatar
 */

/**
 * @typedef {Object} ActivityEntry
 * @property {number} id
 * @property {string} action
 * @property {string} user
 * @property {string} admin
 * @property {string} time
 * @property {string} type
 */

/**
 * @typedef {Object} LearningPath
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 * @property {string} level
 * @property {string} duration
 * @property {number} lessons
 * @property {number} enrolled
 * @property {number} rating
 * @property {string[]} modules
 * @property {number} progress
 * @property {string} color
 */

/**
 * @typedef {Object} Event
 * @property {number} id
 * @property {string} title
 * @property {string} type
 * @property {string} icon
 * @property {string} date
 * @property {string} time
 * @property {string} location
 * @property {number} attendees
 * @property {number} maxAttendees
 * @property {string} host
 * @property {string} hostAvatar
 * @property {string} description
 * @property {string[]} tags
 */

/**
 * @typedef {Object} Discussion
 * @property {number} id
 * @property {string} title
 * @property {string} author
 * @property {string} avatar
 * @property {string} category
 * @property {string} content
 * @property {number} replies
 * @property {number} views
 * @property {number} likes
 * @property {string} time
 * @property {boolean} pinned
 * @property {boolean} solved
 * @property {boolean} [isMe]
 */

/**
 * @typedef {Object} LeaderboardEntry
 * @property {number} rank
 * @property {string} name
 * @property {string} [university]
 * @property {number} points
 * @property {number} level
 * @property {string} avatar
 * @property {string} [trend]
 * @property {number} [streak]
 * @property {boolean} [isMe]
 */
