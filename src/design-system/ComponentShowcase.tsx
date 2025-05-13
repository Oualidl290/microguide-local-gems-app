
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';

// Icons
import {
  Bell,
  Check,
  ChevronDown,
  LogOut,
  Mail,
  Plus,
  Search,
  Settings,
  Trash,
  User
} from 'lucide-react';

export function ComponentShowcase() {
  return (
    <div className="container mx-auto py-10 space-y-12">
      <div>
        <h2 className="text-2xl font-semibold mb-4">MicroGuide Component Library</h2>
        <p className="text-muted-foreground">
          A showcase of UI components following the MicroGuide Design System.
        </p>
      </div>

      <Tabs defaultValue="buttons">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        
        <TabsContent value="buttons" className="mt-6 space-y-8">
          <section>
            <h3 className="text-lg font-medium mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-4">Button Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Plus className="h-4 w-4" /></Button>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-4">Button States</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
              <Button className="relative">
                <span className="animate-pulse absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full"></span>
                With Notification
              </Button>
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                With Icon
              </Button>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="inputs" className="mt-6 space-y-8">
          <section>
            <h3 className="text-lg font-medium mb-4">Text Inputs</h3>
            <div className="grid gap-6 max-w-md">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="search" type="search" placeholder="Search..." className="pl-8" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-4">Other Inputs</h3>
            <div className="grid gap-6 max-w-md">
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Type your message here." />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="cards" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Manage your account settings and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://i.pravatar.cc/150?u=microguide" />
                      <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Alex Johnson</p>
                      <p className="text-sm text-muted-foreground">Local Guide</p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm">
                      Email: alex@example.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Member since June 2023
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Coffee Tour in Soho</CardTitle>
                    <CardDescription>
                      Updated 3 days ago
                    </CardDescription>
                  </div>
                  <Badge>Published</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  A curated tour of the best coffee spots in Soho, with insider tips and favorite orders.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="outline">Coffee</Badge>
                  <Badge variant="outline">Soho</Badge>
                  <Badge variant="outline">Food & Drink</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path
                      fillRule="evenodd"
                      d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>2,134 views</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">
                    <Trash className="h-4 w-4 mr-1" /> Delete
                  </Button>
                  <Button size="sm">
                    <Check className="h-4 w-4 mr-1" /> Edit
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="other" className="mt-6 space-y-8">
          <section>
            <h3 className="text-lg font-medium mb-4">Badges</h3>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-4">Avatar</h3>
            <div className="flex flex-wrap gap-4">
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?u=user1" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/150?u=user2" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-4">Dropdown Menu</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Options <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-4">Toast Notifications</h3>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => toast('Profile updated successfully')}>
                Default Toast
              </Button>
              <Button 
                variant="outline"
                onClick={() => 
                  toast('Your guide has been published!', {
                    description: 'It is now visible to all users.',
                    action: {
                      label: 'View',
                      onClick: () => console.log('View clicked'),
                    },
                  })
                }
              >
                Toast with Action
              </Button>
              <Button 
                variant="destructive"
                onClick={() => 
                  toast('Something went wrong!', {
                    description: 'There was an error saving your changes.',
                  })
                }
              >
                Error Toast
              </Button>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ComponentShowcase;
