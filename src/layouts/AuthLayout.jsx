import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-lg font-bold text-white">
            S
          </div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900">SkillSwap</h1>
        </div>
        <div className="rounded-2xl border border-neutral-200/60 bg-white p-8 shadow-soft">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
