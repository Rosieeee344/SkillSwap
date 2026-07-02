import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[60vh] items-center justify-center px-4"
    >
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
        Home
      </h1>
    </motion.div>
  );
}
