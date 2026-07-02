import AppRoutes from './routes';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}
