
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/auth";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "./LoadingSpinner";

type RoleBasedRouteProps = {
  children: JSX.Element;
  requiredRole: "admin" | "user";
};

export default function RoleBasedRoute({ 
  children, 
  requiredRole 
}: RoleBasedRouteProps) {
  const { user, loading, role, isAdmin } = useAuth();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      toast({
        title: "Authentication required",
        description: "Please login to access this page",
        variant: "destructive",
      });
    } else if (!loading && user && requiredRole === 'admin' && !isAdmin()) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access this page",
        variant: "destructive",
      });
    }
  }, [loading, user, toast, requiredRole, isAdmin]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }

  if (requiredRole === 'admin' && !isAdmin()) {
    // Redirect to dashboard if not an admin
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
