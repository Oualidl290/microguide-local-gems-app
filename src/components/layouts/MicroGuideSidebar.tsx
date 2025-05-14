
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Home,
  Map,
  User,
  Book,
  BarChart,
  Settings,
  Menu,
  LogOut
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

type SidebarProps = {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  role: 'user' | 'admin';
};

export function MicroGuideSidebar({ isCollapsed, toggleSidebar, role = 'user' }: SidebarProps) {
  return (
    <div
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
        isCollapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b border-sidebar-border px-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-blue-500"></div>
            {!isCollapsed && <span className="font-semibold">MicroGuide</span>}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto" 
            onClick={toggleSidebar}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
        
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-2 space-y-1">
            <SidebarItem icon={Home} text="Dashboard" isCollapsed={isCollapsed} />
            <SidebarItem icon={Map} text="My Guides" isCollapsed={isCollapsed} />
            <SidebarItem icon={BarChart} text="Earnings" isCollapsed={isCollapsed} />
            <SidebarItem icon={User} text="Profile" isCollapsed={isCollapsed} />
            
            {role === 'admin' && (
              <>
                <div className={cn(
                  "h-px bg-sidebar-border my-3",
                  isCollapsed ? "mx-2" : "mx-4"
                )}></div>
                <div className={cn(
                  "mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50",
                  isCollapsed && "sr-only"
                )}>
                  Admin
                </div>
                <SidebarItem icon={Book} text="All Guides" isCollapsed={isCollapsed} />
                <SidebarItem icon={User} text="Users" isCollapsed={isCollapsed} />
                <SidebarItem icon={BarChart} text="Analytics" isCollapsed={isCollapsed} />
                <SidebarItem icon={Settings} text="Settings" isCollapsed={isCollapsed} />
              </>
            )}
          </div>
        </nav>
        
        <div className="mt-auto border-t border-sidebar-border p-2">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="h-8 w-8 shrink-0 rounded-full bg-sidebar-accent"></div>
            {!isCollapsed && (
              <div className="flex-1 truncate">
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-sidebar-foreground/70">john@example.com</div>
              </div>
            )}
            {!isCollapsed && (
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <LogOut className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type SidebarItemProps = {
  icon: React.ElementType;
  text: string;
  isCollapsed: boolean;
};

function SidebarItem({ icon: Icon, text, isCollapsed }: SidebarItemProps) {
  return (
    <NavLink
      to="#"
      className={({ isActive }) => cn(
        "flex items-center gap-3 rounded-md px-3 py-2",
        "transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground"
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {!isCollapsed && <span className="truncate">{text}</span>}
    </NavLink>
  );
}
