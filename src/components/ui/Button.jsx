import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-primary-600 text-white shadow-sm hover:bg-primary-700 hover:shadow-md focus-visible:ring-primary-500',
  secondary:
    'bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 hover:shadow-md focus-visible:ring-neutral-500',
  outline:
    'border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 focus-visible:ring-primary-500',
  ghost:
    'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-primary-500',
  danger:
    'bg-red-600 text-white shadow-sm hover:bg-red-700 hover:shadow-md focus-visible:ring-red-500',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs rounded-lg',
  md: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-5 py-2.5 text-base rounded-xl',
};

const MotionButton = motion.create('button');

const Button = forwardRef(
  ({ children, variant = 'primary', size = 'md', className = '', disabled = false, ...props }, ref) => {
    return (
      <MotionButton
        ref={ref}
        whileTap={{ scale: 0.97 }}
        disabled={disabled}
        className={`inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';
export default Button;
