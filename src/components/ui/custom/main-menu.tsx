import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "../sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";

// Menu items.
const items = [
  {
    group: "Basics",
    links: [
      {
        title: "Basics",
        url: "",
      },
    ],
  },
];

export const MainMenu = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-xl font-bold p-4 text-slate-800">DSA Simplified</h1>
      </SidebarHeader>
      <SidebarContent className="p-4 pt-0">
        {items.map((item) => (
          <SidebarMenu key={item.group}>
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center font-medium text-base">
                    {item.group}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.links.map((link) => (
                      <a href={link.url} key={link.title} className="text-base">
                        {link.title}
                      </a>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
