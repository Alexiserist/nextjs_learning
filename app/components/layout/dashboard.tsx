'use client'

import { ReactNode, useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Footer from './footer';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const [open,setOpen] = useState(false);
    const toggleSidebar = (open:boolean) => () =>{
        setOpen(open);
    }

  return (
    <div className="dashboard-layout">
        <Navbar toggleSidebar={toggleSidebar}/>
      <div className="sidebar">
        <Sidebar open={open} toggleDrawer={toggleSidebar}/>
      </div>
      <div className="content-wrapper">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
