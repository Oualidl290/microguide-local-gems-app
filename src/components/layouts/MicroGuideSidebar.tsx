
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
  LogOut,
  LayoutDashboard,
  Users,
  Cog
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';

type SidebarProps = {
  isCollapsed: boolean;
  toggleSidebar: () => void;
};

export function MicroGuideSidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
  const { user, isAdmin, signOut } = useAuth();
  const role = isAdmin() ? 'admin' : 'user';
  
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
            {role === 'admin' ? (
              // Admin navigation
              <>
                <SidebarItem 
                  icon={LayoutDashboard} 
                  text="Admin Dashboard" 
                  to="/admin" 
                  isCollapsed={isCollapsed} 
                />
                <SidebarItem 
                  icon={Users} 
                  text="Users" 
                  to="/admin/users" 
                  isCollapsed={isCollapsed} 
                />
                <SidebarItem 
                  icon={Book} 
                  text="Guides" 
                  to="/admin/guides" 
                  isCollapsed={isCollapsed} 
                />
                <SidebarItem 
                  icon={BarChart} 
                  text="Analytics" 
                  to="/admin/analytics" 
                  isCollapsed={isCollapsed} 
                />
                <SidebarItem 
                  icon={Cog} 
                  text="Settings" 
                  to="/admin/settings" 
                  isCollapsed={isCollapsed} 
                />
                
                <div className={cn(
                  "h-px bg-sidebar-border my-3",
                  isCollapsed ? "mx-2" : "mx-4"
                )}></div>
                
                {/* Link to user dashboard */}
                <SidebarItem 
                  icon={Home} 
                  text="User Dashboard" 
                  to="/dashboard" 
                  isCollapsed={isCollapsed} 
                />
              </>
            ) : (
              // User navigation
              <>
                <SidebarItem 
                  icon={Home} 
                  text="Dashboard" 
                  to="/dashboard" 
                  isCollapsed={isCollapsed} 
                />
                <SidebarItem 
                  icon={Map} 
                  text="My Guides" 
                  to="/my-guides" 
                  isCollapsed={isCollapsed} 
                />
                <SidebarItem 
                  icon={BarChart} 
                  text="Earnings" 
                  to="/earnings" 
                  isCollapsed={isCollapsed} 
                />
                <SidebarItem 
                  icon={User} 
                  text="Profile" 
                  to="/profile" 
                  isCollapsed={isCollapsed} 
                />
              </>
            )}
          </div>
        </nav>
        
        <div className="mt-auto border-t border-sidebar-border p-2">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="h-8 w-8 shrink-0 rounded-full bg-sidebar-accent">
              {user?.profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
            </div>
            {!isCollapsed && (
              <div className="flex-1 truncate">
                <div className="text-sm font-medium">{user?.profile?.full_name || 'User'}</div>
                <div className="text-xs text-sidebar-foreground/70">{user?.email}</div>
              </div>
            )}
            {!isCollapsed && (
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => signOut()}>
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
  to: string;
  isCollapsed: boolean;
};

function SidebarItem({ icon: Icon, text, to, isCollapsed }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
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
