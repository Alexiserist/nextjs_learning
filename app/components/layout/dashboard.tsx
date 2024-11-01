'use client'

import { ReactNode, useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Footer from './footer';
import { usePathname,useRouter  } from 'next/navigation';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const [open,setOpen] = useState(false);
    const toggleSidebar = (open:boolean) => () =>{
        setOpen(open);
    }

    const router = useRouter();
    const pathName = usePathname();
    
    useEffect(() => {
      if(pathName === '/app'){
        router.replace('/app/users')
      }
    },[router,pathName])

  return (
    <div className="dashboard-layout">
        <Navbar toggleSidebar={toggleSidebar}/>
      <div className="sidebar">
        <Sidebar open={open} toggleDrawer={toggleSidebar}/>
      </div>
      <div className="mx-2 ">{children}</div>
        <Footer />
    </div>
  );
}
