export default function Skeleton({ className = '', variant = 'text', count = 1 }) {
  const baseClasses = 'animate-pulse rounded-lg bg-neutral-200';

  const variantClasses = {
    text: 'h-4 w-full',
    title: 'h-6 w-3/4',
    avatar: 'h-10 w-10 rounded-full',
    card: 'h-48 w-full rounded-2xl',
    thumbnail: 'h-32 w-full rounded-xl',
  };

  return (
    <div className="space-y-3" role="status" aria-label="Loading">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
