import { motion } from 'framer-motion';

export default function Signup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Sign Up</h1>
      <p className="mt-2 text-sm text-neutral-500">Coming Soon</p>
    </motion.div>
  );
}
