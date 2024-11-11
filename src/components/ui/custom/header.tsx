import React from "react";
import { SidebarTrigger } from "../sidebar";

export const Header = () => {
  return (
    <header className="flex items-center gap-2 p-4 shadow">
      <SidebarTrigger />
      <h1 className="text-xl font-bold">DSA Simplified Ninja</h1>
    </header>
  );
};
