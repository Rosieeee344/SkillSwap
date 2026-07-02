import { forwardRef } from 'react';

const Radio = forwardRef(({ label, error, helper, id, className = '', ...props }, ref) => {
  const radioId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={className}>
      <label htmlFor={radioId} className="flex items-start gap-3 cursor-pointer">
        <input
          ref={ref}
          type="radio"
          id={radioId}
          aria-invalid={error ? 'true' : undefined}
          className="mt-0.5 h-4 w-4 border-neutral-300 text-primary-600 focus:ring-primary-500"
          {...props}
        />
        <div>
          {label && <span className="text-sm font-medium text-neutral-700">{label}</span>}
          {error && (
            <p className="mt-0.5 text-xs text-red-600" role="alert">
              {error}
            </p>
          )}
          {helper && !error && <p className="mt-0.5 text-xs text-neutral-400">{helper}</p>}
        </div>
      </label>
    </div>
  );
});

Radio.displayName = 'Radio';
export default Radio;
