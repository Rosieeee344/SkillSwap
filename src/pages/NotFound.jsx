import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center"
    >
      <p className="text-6xl font-bold text-primary-600">404</p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-700 active:scale-[0.98]"
      >
        <HiOutlineArrowLeft size={16} />
        Back to Home
      </Link>
    </motion.div>
  );
}
