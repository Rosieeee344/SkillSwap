import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare, TrendingUp, Search, Users, Heart,
  MessageCircle, Eye, Clock, Pin, BadgeCheck,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';
import { categories, discussions, popularTopics } from '../data/community';

const categoryIconMap = {
  all: MessageSquare,
  frontend: Code,
  backend: Code,
  design: Code,
  career: Code,
  general: MessageSquare,
};

function Code({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16,18 22,12 16,6" />
      <polyline points="8,6 2,12 8,18" />
    </svg>
  );
}

function DiscussionCard({ discussion }) {
  return (
    <Card hover className="flex gap-4 p-4">
      <div className="hidden sm:flex flex-col items-center gap-1 shrink-0">
        <button className="rounded-lg p-1 text-neutral-400 hover:text-primary-600 hover:bg-primary-50">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
        <span className="text-xs font-semibold text-neutral-700">{discussion.likes}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {discussion.pinned && <Pin className="h-3.5 w-3.5 text-amber-500" />}
          <h3 className="text-sm font-semibold text-neutral-900 truncate">{discussion.title}</h3>
        </div>
        <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2 mb-3">{discussion.content}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Avatar initials={discussion.avatar} size="sm" className="h-6 w-6 text-[10px]" />
            <span className={`font-medium ${discussion.isMe ? 'text-primary-600' : 'text-neutral-600'}`}>
              {discussion.author}
              {discussion.isMe && <span className="ml-1 font-normal text-primary-400">(You)</span>}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-3.5 w-3.5" />{discussion.replies}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />{discussion.views}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />{discussion.time}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 shrink-0">
        <Badge color={discussion.category === 'frontend' ? 'primary' : discussion.category === 'backend' ? 'success' : discussion.category === 'design' ? 'secondary' : discussion.category === 'career' ? 'warning' : 'neutral'} variant="outline">
          {discussion.category}
        </Badge>
        {discussion.solved && (
          <div className="flex items-center gap-1 text-xs font-medium text-emerald-600">
            <BadgeCheck className="h-3.5 w-3.5" />
            Solved
          </div>
        )}
      </div>
    </Card>
  );
}

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredDiscussions = discussions.filter((d) => {
    const matchesCategory = selectedCategory === 'all' || d.category === selectedCategory;
    const matchesSearch = !search || d.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 sm:px-6 lg:px-8 py-6 max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-4">
            <Card className="p-4">
              <h3 className="text-sm font-semibold text-neutral-900 mb-3">Categories</h3>
              <div className="space-y-1">
                {categories.map((cat) => {
                  const Icon = categoryIconMap[cat.id];
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-sm font-semibold text-neutral-900 mb-3">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {popularTopics.map((topic) => (
                  <div key={topic.label} className="flex items-center gap-1.5 rounded-lg bg-neutral-100 px-2.5 py-1.5 text-xs">
                    <span className="font-medium text-neutral-700">{topic.label}</span>
                    <span className="text-neutral-400">{topic.posts}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center gap-3">
            <SearchBar
              placeholder="Search discussions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
            />
            <Button variant="primary" icon={MessageSquare}>New Post</Button>
          </div>

          <div className="space-y-3">
            {filteredDiscussions.map((discussion) => (
              <DiscussionCard key={discussion.id} discussion={discussion} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
