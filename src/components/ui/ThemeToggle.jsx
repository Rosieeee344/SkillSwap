export default function ThemeToggle({ className = '' }) {
  return (
    <div
      className={`flex h-9 w-16 items-center rounded-full border border-neutral-200 bg-neutral-100 px-1 ${className}`}
      aria-label="Theme toggle (prepared, not implemented)"
    >
      <div className="h-6 w-6 rounded-full bg-white shadow-sm transition-all" />
    </div>
  );
}
