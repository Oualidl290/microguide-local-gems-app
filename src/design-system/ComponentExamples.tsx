
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, Plus, ExternalLink, User } from 'lucide-react';

export default function ComponentExamples() {
  return (
    <div className="space-y-8">
      {/* Buttons */}
      <Card id="buttons">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Action triggers with various styles.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="space-y-4">
              <p className="text-sm font-medium">Button Variants</p>
              <div className="flex flex-wrap items-center gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm font-medium">Button Sizes</p>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="lg">Large</Button>
                <Button>Default</Button>
                <Button size="sm">Small</Button>
                <Button size="icon"><Plus /></Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm font-medium">Button States</p>
              <div className="flex flex-wrap items-center gap-2">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
                <Button><Check className="mr-2 h-4 w-4" /> With Icon</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inputs */}
      <Card id="inputs">
        <CardHeader>
          <CardTitle>Inputs</CardTitle>
          <CardDescription>Form controls for data entry.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-medium">Text Inputs</p>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="standard">Standard input</Label>
                  <Input id="standard" placeholder="Enter text..." />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="disabled">Disabled input</Label>
                  <Input id="disabled" placeholder="Cannot edit..." disabled />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="with-icon">Input with icon</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="with-icon" className="pl-9" placeholder="Username" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm font-medium">Input Variations</p>
              <div className="space-y-3">
                <div className="flex items-end gap-2">
                  <div className="flex-1 space-y-1">
                    <Label htmlFor="with-button">Input with button</Label>
                    <div className="flex gap-2">
                      <Input id="with-button" placeholder="Email address..." />
                      <Button>Subscribe</Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="error">Error state</Label>
                  <Input id="error" className="border-red-500" placeholder="Invalid input..." />
                  <p className="text-xs text-red-500 mt-1">This field is required</p>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="success">Success state</Label>
                  <Input id="success" className="border-green-500" placeholder="Valid input..." />
                  <p className="text-xs text-green-500 mt-1">Looks good!</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cards */}
      <Card id="cards">
        <CardHeader>
          <CardTitle>Cards</CardTitle>
          <CardDescription>Containers for content and actions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Guide Preview Card</CardTitle>
                <CardDescription>A preview of a local guide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground text-sm">
                  Cover Image
                </div>
                <h3 className="font-medium">Best Pizza in Brooklyn</h3>
                <p className="text-sm text-muted-foreground">8 locations • Created by @davidw</p>
                <div className="flex gap-2">
                  <Badge>Pizza</Badge>
                  <Badge>New York</Badge>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="secondary">View</Button>
                  <Button size="sm">Explore</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Stats Card</CardTitle>
                <CardDescription>Performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1 border-r pr-4">
                    <div className="text-xs text-muted-foreground">Total Views</div>
                    <div className="text-2xl font-semibold">5,231</div>
                    <div className="text-xs text-green-500">↑ 12% from last month</div>
                  </div>
                  <div className="space-y-1 border-r pr-4">
                    <div className="text-xs text-muted-foreground">Ad Clicks</div>
                    <div className="text-2xl font-semibold">1,423</div>
                    <div className="text-xs text-green-500">↑ 8% from last month</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Revenue</div>
                    <div className="text-2xl font-semibold">$342</div>
                    <div className="text-xs text-green-500">↑ 15% from last month</div>
                  </div>
                </div>
                <div className="pt-2">
                  <Button size="sm" variant="outline" className="w-full">
                    View Details <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Card id="tabs">
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
          <CardDescription>Switch between different content views.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-4">
              <div className="space-y-2">
                <h4 className="font-medium">Account Settings</h4>
                <p className="text-sm text-muted-foreground">Manage your account preferences here.</p>
              </div>
            </TabsContent>
            <TabsContent value="guides" className="p-4">
              <div className="space-y-2">
                <h4 className="font-medium">Your Guides</h4>
                <p className="text-sm text-muted-foreground">View and manage your created guides.</p>
              </div>
            </TabsContent>
            <TabsContent value="earnings" className="p-4">
              <div className="space-y-2">
                <h4 className="font-medium">Earnings Dashboard</h4>
                <p className="text-sm text-muted-foreground">Track your revenue and analytics.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Avatars */}
      <Card id="avatars">
        <CardHeader>
          <CardTitle>Avatars</CardTitle>
          <CardDescription>User profile representations.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-end gap-8">
            <div className="space-y-3">
              <p className="text-sm font-medium">Avatar Sizes</p>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm font-medium">Avatar Fallbacks</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>DW</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium">With Status</p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                </div>
                <div className="relative">
                  <Avatar>
                    <AvatarFallback>DW</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-amber-500 ring-2 ring-background"></span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card id="badges">
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>Small status descriptors for UI elements.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-medium">Badge Variants</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium">Usage Examples</p>
              <div className="flex flex-wrap gap-2">
                <Badge>New</Badge>
                <Badge variant="secondary">Coffee</Badge>
                <Badge variant="outline">Pizza</Badge>
                <Badge variant="secondary">NYC</Badge>
                <Badge variant="outline">Brooklyn</Badge>
                <Badge variant="destructive">Flagged</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card id="alerts">
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
          <CardDescription>Contextual feedback messages for user actions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This is a standard alert with important information.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your changes were not saved due to an error.</AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Tables */}
      <Card id="tables">
        <CardHeader>
          <CardTitle>Tables</CardTitle>
          <CardDescription>Structured data display for admin panels.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Guide</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Coffee Spots in SoHo</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Published</Badge>
                </TableCell>
                <TableCell>1,234</TableCell>
                <TableCell className="text-right">$123.45</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Best Pizza in Brooklyn</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Draft</Badge>
                </TableCell>
                <TableCell>0</TableCell>
                <TableCell className="text-right">$0.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Hidden Bookstores</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Needs Review</Badge>
                </TableCell>
                <TableCell>521</TableCell>
                <TableCell className="text-right">$42.80</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
