"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "../sidebar";
import { ChevronDown, ChevronRight, Home } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";
import Image from "next/image";

// Menu items.
const items = [
  {
    group: "Learn",
    sections: [
      {
        open: false,
        title: "Basics",
        links: [
          {
            title: "Time Complexity",
            url: "/learn/time-complexity",
            icon: Home,
          },
        ],
      },
    ],
  },
];

export const MainMenu = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex flex-row gap-2 items-center">
        <Image
          src="/images/dsa-simplified.svg"
          width={40}
          height={40}
          alt="DSA Simplified"
          className="rounded"
        />
        <h1 className="text-xl font-bold">DSA Simplified</h1>
      </SidebarHeader>
      <SidebarContent>
        {items.map((item) => (
          <SidebarGroup key={item.group}>
            <SidebarGroupLabel>{item.group}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.sections.map((section) => (
                  <Collapsible
                    key={section.title}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="flex items-center justify-between font-medium p-2">
                          {section.title}
                          {section.open ? <ChevronDown /> : <ChevronRight />}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {section.links.map((link) => (
                            <a href={link.url} key={link.title}>
                              {link.title}
                            </a>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
