import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Select = forwardRef(({ label, error, helper, id, className = '', children, ...props }, ref) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${selectId}-error` : helper ? `${selectId}-helper` : undefined}
          className={`w-full appearance-none rounded-xl border bg-white px-3.5 py-2.5 pr-10 text-sm text-neutral-900 transition-colors focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
            error ? 'border-red-300 focus:border-red-400 focus:ring-red-50' : 'border-neutral-200'
          }`}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
      </div>
      {error && (
        <p id={`${selectId}-error`} className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
      {helper && !error && (
        <p id={`${selectId}-helper`} className="mt-1 text-xs text-neutral-400">
          {helper}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';
export default Select;
