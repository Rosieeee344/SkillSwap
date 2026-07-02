import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, ...props }) {
  const Component = hover ? motion.div : 'div';
  const motionProps = hover
    ? {
        whileHover: { y: -2, boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component
      className={`rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-soft ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}
