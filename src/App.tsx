
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "./contexts/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";
import LoadingSpinner from "./components/LoadingSpinner";

// Optimize with lazy loading for route components
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const CreateGuide = lazy(() => import("./pages/CreateGuide"));
const ViewGuide = lazy(() => import("./pages/ViewGuide"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const DesignSystem = lazy(() => import("./pages/DesignSystemPage"));
const MicroGuideDesignSystem = lazy(() => import("./design-system/MicroGuideDesignSystem"));

// Lazy load admin pages
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminUsers = lazy(() => import("./pages/admin/Users"));
const AdminGuides = lazy(() => import("./pages/admin/Guides"));
const AdminAnalytics = lazy(() => import("./pages/admin/Analytics"));
const AdminSettings = lazy(() => import("./pages/admin/Settings"));

// Configure the query client with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (renamed from cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="microguide-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/design-system" element={<DesignSystem />} />
                <Route path="/microguide-design" element={<MicroGuideDesignSystem />} />
                
                {/* Protected user routes */}
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/create" 
                  element={
                    <ProtectedRoute>
                      <CreateGuide />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/guide/:id" element={<ViewGuide />} />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Admin routes */}
                <Route 
                  path="/admin" 
                  element={
                    <RoleBasedRoute requiredRole="admin">
                      <AdminDashboard />
                    </RoleBasedRoute>
                  } 
                />
                <Route 
                  path="/admin/users" 
                  element={
                    <RoleBasedRoute requiredRole="admin">
                      <AdminUsers />
                    </RoleBasedRoute>
                  } 
                />
                <Route 
                  path="/admin/guides" 
                  element={
                    <RoleBasedRoute requiredRole="admin">
                      <AdminGuides />
                    </RoleBasedRoute>
                  } 
                />
                <Route 
                  path="/admin/analytics" 
                  element={
                    <RoleBasedRoute requiredRole="admin">
                      <AdminAnalytics />
                    </RoleBasedRoute>
                  } 
                />
                <Route 
                  path="/admin/settings" 
                  element={
                    <RoleBasedRoute requiredRole="admin">
                      <AdminSettings />
                    </RoleBasedRoute>
                  } 
                />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
