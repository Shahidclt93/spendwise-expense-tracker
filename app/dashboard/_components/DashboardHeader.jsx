import { UserButton } from "@clerk/nextjs";
import React from "react";
import { Menu } from "lucide-react";

function DashboardHeader({setIsSidebarOpen}) {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between">
      <div><Menu className="md:hidden block" size={26} onClick={()=> setIsSidebarOpen(true)}/></div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default DashboardHeader;
