import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Users, Video, Monitor,
  Coffee, Code, Palette, TrendingUp, Filter, Search,
  ChevronRight, Star,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import SearchBar from '../components/ui/SearchBar';
import { events, eventFilters as filters } from '../data/events';

const eventIconMap = { Code, Palette, TrendingUp, Coffee, Monitor };
const eventTypeColors = {
  workshop: 'bg-blue-100 text-blue-600',
  hackathon: 'bg-purple-100 text-purple-600',
  'study-group': 'bg-emerald-100 text-emerald-600',
  meetup: 'bg-amber-100 text-amber-600',
  competition: 'bg-red-100 text-red-600',
};

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredEvents = events.filter((e) => {
    const matchesFilter = activeFilter === 'all' || e.type === activeFilter;
    const matchesSearch = !search || e.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-lg font-bold tracking-tight text-neutral-900">Events</h1>
          <p className="text-sm text-neutral-500 mt-0.5">Discover workshops, meetups, and learning opportunities</p>
        </div>
        <SearchBar
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-1">
        {filters.map((f) => {
          const count = f.key === 'all' ? events.length : events.filter((e) => e.type === f.key).length;
          return (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                activeFilter === f.key
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {f.label}
              <span className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-xs font-semibold ${
                activeFilter === f.key ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filteredEvents.length === 0 ? (
        <Card>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Calendar className="h-10 w-10 text-neutral-300 mb-3" />
            <p className="text-sm font-medium text-neutral-500">No events found</p>
            <p className="text-xs text-neutral-400 mt-1">Try adjusting your search or filter</p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => {
            const Icon = eventIconMap[event.icon] || Code;
            const LocIcon = event.location === 'Online' ? Video : MapPin;
            const color = eventTypeColors[event.type] || 'bg-blue-100 text-blue-600';
            const spotsLeft = event.maxAttendees - event.attendees;
            const isAlmostFull = spotsLeft <= 5;

            return (
              <Card key={event.id} hover className="flex flex-col p-5">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${color} mb-4`}>
                  <Icon className="h-5 w-5" />
                </div>

                <Badge color="primary" variant="outline" className="w-fit mb-2">{event.type.replace('-', ' ')}</Badge>

                <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">{event.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed flex-1 mb-4">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Clock className="h-3.5 w-3.5 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <LocIcon className="h-3.5 w-3.5 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="h-3.5 w-3.5 shrink-0 text-neutral-500" />
                    <span className={`font-medium ${isAlmostFull ? 'text-amber-600' : 'text-emerald-600'}`}>
                      {spotsLeft} spots left
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {event.tags.map((tag) => (
                    <Badge key={tag} color="neutral" variant="solid" className="text-[10px]">{tag}</Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-100">
                  <div className="flex items-center gap-2">
                    <Avatar initials={event.hostAvatar} size="sm" className="h-6 w-6 text-[10px]" />
                    <span className="text-xs font-medium text-neutral-600">{event.host}</span>
                  </div>
                  <Button size="sm" icon={ChevronRight}>Join</Button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
