"use client";
import React, { useEffect, useState } from "react";
import SideNav from "@/app/dashboard/_components/SideNav";
import DashboardHeader from "@/app/dashboard/_components/DashboardHeader";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import withAuth from "@/utils/withAuth";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    console.log(result);
    if (result?.length == 0) {
      router.replace("/dashboard/budgets");
    }
  };
  return (
    <div>
      {isSidebarOpen && (
        <div
          className="bg-black opacity-50 fixed inset-0 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <div
        className={`fixed md:w-64 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40 transition-all`}
      >
        <SideNav setIsSidebarOpen={setIsSidebarOpen} />
      </div>
      <div className="md:ml-64">
        <DashboardHeader setIsSidebarOpen={setIsSidebarOpen} />
        {children}
      </div>
    </div>
  );
}

export default withAuth(DashboardLayout);
