const colorMap = {
  primary: 'bg-primary-50 text-primary-700 ring-primary-600/20',
  success: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  warning: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  danger: 'bg-red-50 text-red-700 ring-red-600/20',
  neutral: 'bg-neutral-100 text-neutral-600 ring-neutral-500/20',
};

export default function Badge({ children, color = 'primary', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
