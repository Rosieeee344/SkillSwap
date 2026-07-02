import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
import Messages from '../pages/Messages';
import SkillDetail from '../pages/SkillDetail';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/skill/:id" element={<SkillDetail />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
