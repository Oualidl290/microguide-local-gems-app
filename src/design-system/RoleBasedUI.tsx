
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function RoleBasedUI() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-4">MicroGuide UI Flows</h2>
        <p className="text-muted-foreground mb-8">
          Role-based UI flows for the MicroGuide platform.
        </p>
      </div>
      
      <Tabs defaultValue="user">
        <TabsList className="mb-6">
          <TabsTrigger value="user">User Flows</TabsTrigger>
          <TabsTrigger value="admin">Admin Flows</TabsTrigger>
        </TabsList>
        
        <TabsContent value="user" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Landing Page</CardTitle>
              <CardDescription>Marketing page to attract new users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="h-20 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-medium">Hero Section</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-xs">Benefit 1</span>
                  </div>
                  <div className="h-16 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-xs">Benefit 2</span>
                  </div>
                  <div className="h-16 bg-muted/30 rounded-lg flex items-center justify-center">
                    <span className="text-xs">Benefit 3</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-10 w-36 bg-primary rounded-md flex items-center justify-center">
                    <span className="text-xs text-primary-foreground">Get Started CTA</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Auth Pages</CardTitle>
              <CardDescription>Login & Signup with Supabase</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4 space-y-3">
                  <h3 className="text-sm font-medium">Login</h3>
                  <div className="h-8 bg-muted/50 rounded-md w-full"></div>
                  <div className="h-8 bg-muted/50 rounded-md w-full"></div>
                  <div className="h-10 bg-primary rounded-md w-full flex items-center justify-center">
                    <span className="text-xs text-primary-foreground">Sign In</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-border"></div>
                    <span className="text-xs text-muted-foreground">or</span>
                    <div className="h-px flex-1 bg-border"></div>
                  </div>
                  <div className="h-10 bg-secondary rounded-md w-full flex items-center justify-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-muted"></div>
                    <span className="text-xs">Continue with Google</span>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 space-y-3">
                  <h3 className="text-sm font-medium">Signup</h3>
                  <div className="h-8 bg-muted/50 rounded-md w-full"></div>
                  <div className="h-8 bg-muted/50 rounded-md w-full"></div>
                  <div className="h-8 bg-muted/50 rounded-md w-full"></div>
                  <div className="h-10 bg-primary rounded-md w-full flex items-center justify-center">
                    <span className="text-xs text-primary-foreground">Create Account</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-border"></div>
                    <span className="text-xs text-muted-foreground">or</span>
                    <div className="h-px flex-1 bg-border"></div>
                  </div>
                  <div className="h-10 bg-secondary rounded-md w-full flex items-center justify-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-muted"></div>
                    <span className="text-xs">Sign up with Google</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>User Dashboard</CardTitle>
              <CardDescription>Main user control center</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-card shadow-sm rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Total Views</div>
                    <div className="text-2xl font-semibold mt-2">1,234</div>
                  </div>
                  <div className="h-24 bg-card shadow-sm rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Ad Clicks</div>
                    <div className="text-2xl font-semibold mt-2">342</div>
                  </div>
                  <div className="h-24 bg-card shadow-sm rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Earnings</div>
                    <div className="text-2xl font-semibold mt-2">$89.50</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">My Guides</h3>
                  <div className="h-9 px-3 bg-primary rounded-md flex items-center justify-center">
                    <span className="text-xs text-primary-foreground">Create New Guide</span>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  <div className="h-20 bg-card shadow-sm rounded-lg border p-3 flex justify-between items-center">
                    <div>
                      <div className="font-medium">Coffee Spots in SoHo</div>
                      <div className="text-xs text-muted-foreground">5 locations • 230 views</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-4 h-4 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-4 h-4 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-4 h-4 bg-muted rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-20 bg-card shadow-sm rounded-lg border p-3 flex justify-between items-center">
                    <div>
                      <div className="font-medium">Best Pizza in Brooklyn</div>
                      <div className="text-xs text-muted-foreground">8 locations • 412 views</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-4 h-4 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-4 h-4 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-4 h-4 bg-muted rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Guide Creation</CardTitle>
              <CardDescription>Create and edit guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="space-y-3">
                  <div className="h-10 bg-muted/50 rounded-md"></div>
                  <div className="h-10 bg-muted/50 rounded-md"></div>
                  <div className="h-20 bg-muted/50 rounded-md"></div>
                </div>
                
                <div className="h-40 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-sm text-muted-foreground">Interactive Map</div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Locations</h3>
                  
                  <div className="border rounded-lg p-3 space-y-2">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-medium">Location #1</h4>
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-8 bg-muted/50 rounded-md"></div>
                    <div className="h-16 bg-muted/50 rounded-md"></div>
                    <div className="flex gap-2">
                      <div className="h-24 w-24 bg-muted/30 rounded-md flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Photo</span>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-8 bg-muted/50 rounded-md"></div>
                        <div className="h-14 bg-muted/50 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-10 border border-dashed rounded-md flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">+ Add Another Location</span>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3">
                  <div className="h-9 px-3 bg-secondary rounded-md flex items-center justify-center">
                    <span className="text-xs">Save Draft</span>
                  </div>
                  <div className="h-9 px-3 bg-primary rounded-md flex items-center justify-center">
                    <span className="text-xs text-primary-foreground">Publish Guide</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Public Guide Page</CardTitle>
              <CardDescription>User-facing guide display</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="h-40 bg-muted/30 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Cover Image</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h1 className="text-lg font-bold text-white">Coffee Spots in SoHo</h1>
                    <div className="flex gap-2 mt-1">
                      <div className="text-xs bg-white/20 text-white px-2 py-0.5 rounded">Coffee</div>
                      <div className="text-xs bg-white/20 text-white px-2 py-0.5 rounded">NYC</div>
                    </div>
                  </div>
                </div>
                
                <div className="h-40 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-sm text-muted-foreground">Interactive Map</div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Locations</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-32 bg-muted/30 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Photo</span>
                      </div>
                      <div className="p-3 space-y-1">
                        <h4 className="font-medium">La Colombe</h4>
                        <p className="text-xs text-muted-foreground">270 Lafayette St</p>
                        <p className="text-xs mt-2">Great for working with strong WiFi and plenty of seating.</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-32 bg-muted/30 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Photo</span>
                      </div>
                      <div className="p-3 space-y-1">
                        <h4 className="font-medium">Maman</h4>
                        <p className="text-xs text-muted-foreground">239 Centre St</p>
                        <p className="text-xs mt-2">Cozy atmosphere with delicious pastries and good coffee.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="h-9 w-9 bg-secondary rounded-md flex items-center justify-center">
                      <div className="w-4 h-4 bg-muted rounded-full"></div>
                    </div>
                    <div className="h-9 w-9 bg-secondary rounded-md flex items-center justify-center">
                      <div className="w-4 h-4 bg-muted rounded-full"></div>
                    </div>
                    <div className="h-9 w-9 bg-secondary rounded-md flex items-center justify-center">
                      <div className="w-4 h-4 bg-muted rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center">
                    Created by @username • 2 days ago
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Earnings Page</CardTitle>
              <CardDescription>Track revenue from guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-card shadow-sm rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Total Earnings</div>
                    <div className="text-2xl font-semibold mt-2">$324.75</div>
                    <div className="text-xs text-green-500 mt-1">↑ 12% from last month</div>
                  </div>
                  <div className="h-24 bg-card shadow-sm rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Pending Payout</div>
                    <div className="text-2xl font-semibold mt-2">$42.30</div>
                    <div className="text-xs text-muted-foreground mt-1">Next payout: Jun 1</div>
                  </div>
                </div>
                
                <div className="h-60 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-sm text-muted-foreground">Earnings Chart</div>
                </div>
                
                <div className="border rounded-lg">
                  <div className="grid grid-cols-4 p-3 border-b bg-muted/30">
                    <div className="text-xs font-medium">Guide</div>
                    <div className="text-xs font-medium">Views</div>
                    <div className="text-xs font-medium">Clicks</div>
                    <div className="text-xs font-medium">Revenue</div>
                  </div>
                  <div className="grid grid-cols-4 p-3 border-b">
                    <div className="text-xs">Coffee Spots in SoHo</div>
                    <div className="text-xs">1,234</div>
                    <div className="text-xs">189</div>
                    <div className="text-xs">$47.25</div>
                  </div>
                  <div className="grid grid-cols-4 p-3 border-b">
                    <div className="text-xs">Best Pizza in Brooklyn</div>
                    <div className="text-xs">2,547</div>
                    <div className="text-xs">312</div>
                    <div className="text-xs">$78.00</div>
                  </div>
                  <div className="grid grid-cols-4 p-3">
                    <div className="text-xs">Hidden Bookstores</div>
                    <div className="text-xs">856</div>
                    <div className="text-xs">64</div>
                    <div className="text-xs">$16.00</div>
                  </div>
                </div>
                
                <div className="h-10 bg-secondary rounded-md flex items-center justify-center">
                  <span className="text-xs">Connect Stripe Account</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="admin" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Admin Dashboard</CardTitle>
              <CardDescription>Platform overview for administrators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="grid grid-cols-4 gap-4">
                  <div className="h-24 bg-card shadow-sm rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Total Users</div>
                    <div className="text-2xl font-semibold mt-2">3,451</div>
                    <div className="text-xs text-green-500 mt-1">↑ 8% this week</div>
                  </div>
                  <div className="h-24 bg-card shadow-sm rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Total Guides</div>
                    <div className="text-2xl font-semibold mt-2">12,547</div>
                    <div className="text-xs text-green-500 mt-1">↑ 12% this week</div>
                  </div>
                  <div className="h-24 bg-card shadow-sm rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Ad Revenue</div>
                    <div className="text-2xl font-semibold mt-2">$9,342</div>
                    <div className="text-xs text-green-500 mt-1">↑ 5% this week</div>
                  </div>
                  <div className="h-24 bg-card shadow-sm rounded-lg border p-3">
                    <div className="text-xs text-muted-foreground">Pending Approvals</div>
                    <div className="text-2xl font-semibold mt-2">24</div>
                    <div className="text-xs text-amber-500 mt-1">↑ 30% this week</div>
                  </div>
                </div>
                
                <div className="h-60 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-sm text-muted-foreground">Platform Analytics Chart</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Guide Management</CardTitle>
              <CardDescription>View and moderate all platform guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="h-9 bg-muted/50 rounded-md"></div>
                  </div>
                  <div className="w-40">
                    <div className="h-9 bg-muted/50 rounded-md"></div>
                  </div>
                  <div className="w-40">
                    <div className="h-9 bg-muted/50 rounded-md"></div>
                  </div>
                </div>
                
                <div className="border rounded-lg">
                  <div className="grid grid-cols-5 p-3 border-b bg-muted/30">
                    <div className="text-xs font-medium">Guide</div>
                    <div className="text-xs font-medium">Author</div>
                    <div className="text-xs font-medium">Status</div>
                    <div className="text-xs font-medium">Date</div>
                    <div className="text-xs font-medium">Actions</div>
                  </div>
                  <div className="grid grid-cols-5 p-3 border-b">
                    <div className="text-xs">Coffee Spots in SoHo</div>
                    <div className="text-xs">@marksmith</div>
                    <div className="text-xs">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-0.5 rounded">Published</span>
                    </div>
                    <div className="text-xs">May 12, 2023</div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 p-3 border-b">
                    <div className="text-xs">Best Bars Downtown</div>
                    <div className="text-xs">@sarahj</div>
                    <div className="text-xs">
                      <span className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 text-xs px-2 py-0.5 rounded">Flagged</span>
                    </div>
                    <div className="text-xs">May 10, 2023</div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 p-3">
                    <div className="text-xs">Hidden Gems of Chinatown</div>
                    <div className="text-xs">@davidw</div>
                    <div className="text-xs">
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-0.5 rounded">Draft</span>
                    </div>
                    <div className="text-xs">May 8, 2023</div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-xs text-muted-foreground">
                    Showing 1-3 of 12,547 guides
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                      <div className="w-3 h-3 bg-muted rounded-full"></div>
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">1</span>
                    </div>
                    <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                      <span className="text-xs">2</span>
                    </div>
                    <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                      <span className="text-xs">3</span>
                    </div>
                    <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                      <div className="w-3 h-3 bg-muted rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage platform users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="h-9 bg-muted/50 rounded-md"></div>
                  </div>
                  <div className="w-40">
                    <div className="h-9 bg-muted/50 rounded-md"></div>
                  </div>
                </div>
                
                <div className="border rounded-lg">
                  <div className="grid grid-cols-5 p-3 border-b bg-muted/30">
                    <div className="text-xs font-medium">User</div>
                    <div className="text-xs font-medium">Guides</div>
                    <div className="text-xs font-medium">Joined</div>
                    <div className="text-xs font-medium">Status</div>
                    <div className="text-xs font-medium">Actions</div>
                  </div>
                  <div className="grid grid-cols-5 p-3 border-b">
                    <div className="text-xs flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <span>Mark Smith</span>
                    </div>
                    <div className="text-xs">24</div>
                    <div className="text-xs">Jan 15, 2023</div>
                    <div className="text-xs">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-0.5 rounded">Active</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 p-3 border-b">
                    <div className="text-xs flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <span>Sarah Johnson</span>
                    </div>
                    <div className="text-xs">12</div>
                    <div className="text-xs">Mar 22, 2023</div>
                    <div className="text-xs">
                      <span className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 text-xs px-2 py-0.5 rounded">Warning</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 p-3">
                    <div className="text-xs flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <span>David Wilson</span>
                    </div>
                    <div className="text-xs">7</div>
                    <div className="text-xs">Apr 5, 2023</div>
                    <div className="text-xs">
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-0.5 rounded">Active</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                      <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Ad Management</CardTitle>
              <CardDescription>Approve and manage advertising links</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium">Pending Approval (24)</h3>
                  <div className="flex gap-2">
                    <div className="h-8 px-3 bg-destructive rounded-md flex items-center justify-center">
                      <span className="text-xs text-destructive-foreground">Reject All</span>
                    </div>
                    <div className="h-8 px-3 bg-primary rounded-md flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">Approve All</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="border rounded-lg p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">Coffee Bean Subscription</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Submitted by @marksmith • 2 days ago
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 px-3 bg-destructive rounded-md flex items-center justify-center">
                          <span className="text-xs text-destructive-foreground">Reject</span>
                        </div>
                        <div className="h-8 px-3 bg-primary rounded-md flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">Approve</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs mt-1">
                      <span className="font-medium">Link:</span>
                      <span className="text-blue-500 ml-1">https://coffeebean.example.com/ref=mg12345</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-medium">Guide:</span>
                      <span className="ml-1">Coffee Spots in SoHo</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-medium">Commission:</span>
                      <span className="ml-1">12% per sale</span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">Wine Tour Experience</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Submitted by @sarahj • 3 days ago
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 px-3 bg-destructive rounded-md flex items-center justify-center">
                          <span className="text-xs text-destructive-foreground">Reject</span>
                        </div>
                        <div className="h-8 px-3 bg-primary rounded-md flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">Approve</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs mt-1">
                      <span className="font-medium">Link:</span>
                      <span className="text-blue-500 ml-1">https://winetour.example.com/ref=mg54321</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-medium">Guide:</span>
                      <span className="ml-1">Best Wine Bars NYC</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-medium">Commission:</span>
                      <span className="ml-1">15% per booking</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
