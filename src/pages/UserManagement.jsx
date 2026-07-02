import { motion } from 'framer-motion';

export default function UserManagement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[60vh] items-center justify-center px-4"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900">User Management</h1>
        <p className="mt-2 text-sm text-neutral-500">Coming Soon</p>
      </div>
    </motion.div>
  );
}
