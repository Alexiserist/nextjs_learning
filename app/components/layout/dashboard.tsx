'use client';

import { ReactNode, useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Footer from './footer';
import { usePathname, useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggleSidebar = (open: boolean) => () => {
    setOpen(open);
  };

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === '/app') {
      router.replace('/app/users');
    }
  }, [router, pathName]);

  return (
    <div className="layout-content-wrapper">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="sidebar">
        <Sidebar open={open} toggleDrawer={toggleSidebar} />
      </div>
      <div className="layout-content mt-[5rem] overflow-auto">
        <div className="layout-main">{children}</div>
        <div className="flex-1">
          <Footer />
        </div>
      </div>
    </div>
  );
}
