import { ReactNode } from 'react';
import DashboardLayout from '../components/layout/dashboard';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}