import { Spinner } from './Spinner';

export default function LoadingState({
  message = 'Loading...',
  size = 'lg',
  className = '',
}) {
  return (
    <div className={`flex min-h-[40vh] flex-col items-center justify-center gap-3 text-center ${className}`}>
      <Spinner size={size} />
      <p className="text-sm text-neutral-500">{message}</p>
    </div>
  );
}
