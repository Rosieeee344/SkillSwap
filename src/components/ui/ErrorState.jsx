import { AlertTriangle, WifiOff, ShieldAlert, Ban } from 'lucide-react';
import Button from './Button';

const errorConfig = {
  network: {
    icon: WifiOff,
    title: 'Connection Error',
    description: 'Unable to connect to the server. Please check your internet connection and try again.',
  },
  server: {
    icon: AlertTriangle,
    title: 'Something Went Wrong',
    description: 'An unexpected error occurred. Please try again later.',
  },
  unauthorized: {
    icon: ShieldAlert,
    title: 'Access Denied',
    description: 'You do not have permission to view this content. Please sign in with an authorized account.',
  },
  forbidden: {
    icon: Ban,
    title: 'Forbidden',
    description: 'You do not have access to this resource.',
  },
  notFound: {
    icon: AlertTriangle,
    title: 'Not Found',
    description: 'The resource you are looking for could not be found.',
  },
};

export default function ErrorState({
  type = 'server',
  message,
  title,
  description,
  onRetry,
  className = '',
}) {
  const config = errorConfig[type] || errorConfig.server;

  return (
    <div className={`flex min-h-[40vh] flex-col items-center justify-center gap-3 text-center px-4 ${className}`}>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
        <config.icon className="h-6 w-6 text-red-500" />
      </div>
      <h3 className="text-sm font-semibold text-neutral-900">{title || config.title}</h3>
      <p className="max-w-sm text-sm text-neutral-500">{message || description || config.description}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry} className="mt-2">
          Try Again
        </Button>
      )}
    </div>
  );
}
