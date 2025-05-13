
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// Mock user data for profile page
const userData = {
  id: "user-123",
  name: "Alex Johnson",
  email: "alex@example.com",
  bio: "Passionate coffee hunter and local guide. I love discovering hidden gems in San Francisco and sharing them with the world.",
  location: "San Francisco, CA",
  avatar: "https://i.pravatar.cc/150?img=12",
  joined: "2023-01-15T10:30:00Z",
  stats: {
    totalGuides: 5,
    totalViews: 4320,
    totalEarnings: 256.75,
  },
  monetization: {
    adsenseId: "pub-1234567890",
    paymentEmail: "alex@example.com",
    hasBankAccount: true,
  },
  preferences: {
    categories: ["Food & Drink", "Arts & Culture", "Outdoors"],
    notifications: {
      email: true,
      guide_views: true,
      earnings: true,
      comments: false,
    },
  },
};

const Profile = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    bio: userData.bio,
    location: userData.location,
    adsenseId: userData.monetization.adsenseId,
    paymentEmail: userData.monetization.paymentEmail,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, this would connect to Supabase to update user data
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please integrate Supabase and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateMonetization = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Monetization settings updated",
        description: "Your monetization information has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update monetization settings. Please integrate Supabase and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="h-24 w-24 rounded-full bg-muted overflow-hidden">
                      <img
                        src={userData.avatar}
                        alt={userData.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-card"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      <span className="sr-only">Edit</span>
                    </Button>
                  </div>
                  <h2 className="text-xl font-bold mb-1">{userData.name}</h2>
                  <p className="text-muted-foreground mb-4">{userData.location}</p>
                  <p className="text-sm">
                    Member since {new Date(userData.joined).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Guides</span>
                  <span className="font-medium">{userData.stats.totalGuides}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Views</span>
                  <span className="font-medium">{userData.stats.totalViews.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Earnings</span>
                  <span className="font-medium text-green-600">
                    ${userData.stats.totalEarnings.toFixed(2)}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link
                  to="/dashboard"
                  className="text-primary hover:underline block"
                >
                  Dashboard
                </Link>
                <Link
                  to="/create"
                  className="text-primary hover:underline block"
                >
                  Create New Guide
                </Link>
                <Button variant="outline" className="w-full mt-2">
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>

            <Tabs defaultValue="profile">
              <TabsList className="mb-6 w-full">
                <TabsTrigger value="profile" className="flex-1">Profile</TabsTrigger>
                <TabsTrigger value="monetization" className="flex-1">Monetization</TabsTrigger>
                <TabsTrigger value="security" className="flex-1">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <form onSubmit={handleUpdateProfile}>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Update your profile information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="City, State"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          placeholder="Tell others about yourself..."
                          value={formData.bio}
                          onChange={(e) =>
                            setFormData({ ...formData, bio: e.target.value })
                          }
                          rows={4}
                        />
                        <p className="text-sm text-muted-foreground">
                          Your bio will be visible on your public profile and guide pages.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-6">
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Saving..." : "Save Changes"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Interests and Preferences</CardTitle>
                    <CardDescription>
                      Select topics you're interested in
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Food & Drink",
                        "Arts & Culture",
                        "Outdoors",
                        "Shopping",
                        "Family Friendly",
                        "Nightlife",
                        "Hidden Gems",
                        "Photography",
                        "Wellness",
                      ].map((category) => (
                        <div
                          key={category}
                          className={`px-3 py-1 rounded-full text-sm ${
                            userData.preferences.categories.includes(category)
                              ? "bg-primary text-white"
                              : "bg-muted"
                          }`}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Categories functionality will be implemented with Supabase integration.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="monetization">
                <Card>
                  <form onSubmit={handleUpdateMonetization}>
                    <CardHeader>
                      <CardTitle>Monetization Settings</CardTitle>
                      <CardDescription>
                        Configure how you earn from your guides
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="adsense">Google AdSense ID</Label>
                        <Input
                          id="adsense"
                          placeholder="pub-xxxxxxxxxx"
                          value={formData.adsenseId}
                          onChange={(e) =>
                            setFormData({ ...formData, adsenseId: e.target.value })
                          }
                        />
                        <p className="text-sm text-muted-foreground">
                          Your AdSense ID allows you to monetize your guides with
                          targeted ads.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="payment-email">Payment Email</Label>
                        <Input
                          id="payment-email"
                          type="email"
                          placeholder="Your payment email address"
                          value={formData.paymentEmail}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              paymentEmail: e.target.value,
                            })
                          }
                        />
                        <p className="text-sm text-muted-foreground">
                          We'll send your earnings to this email address.
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Payment Methods</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Connect a payment method to receive your earnings
                        </p>
                        {userData.monetization.hasBankAccount ? (
                          <div className="flex items-center justify-between p-4 border rounded-md">
                            <div className="flex items-center">
                              <div className="h-8 w-8 bg-muted rounded-full flex items-center justify-center mr-3">
                                <svg
                                  className="h-4 w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <div className="font-medium">Bank Account</div>
                                <div className="text-sm text-muted-foreground">
                                  Connected
                                </div>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              Change
                            </Button>
                          </div>
                        ) : (
                          <Button>Connect Bank Account</Button>
                        )}
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Affiliate Settings</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Manage your affiliate marketing settings and links
                        </p>
                        <Button variant="outline">Manage Affiliates</Button>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-6">
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Saving..." : "Save Settings"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Earnings Overview</CardTitle>
                    <CardDescription>
                      Summary of your earnings from guides
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-muted-foreground">
                            Current Balance
                          </div>
                          <div className="text-2xl font-bold text-green-600">
                            $128.45
                          </div>
                        </div>
                        <Button>Withdraw</Button>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-medium mb-2">Recent Transactions</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                            <div>
                              <div className="font-medium">
                                Guide Earnings Payout
                              </div>
                              <div className="text-sm text-muted-foreground">
                                April 15, 2023
                              </div>
                            </div>
                            <div className="font-medium">$75.20</div>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                            <div>
                              <div className="font-medium">
                                Affiliate Commission
                              </div>
                              <div className="text-sm text-muted-foreground">
                                March 22, 2023
                              </div>
                            </div>
                            <div className="font-medium">$23.15</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage your account security and login information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-medium">Change Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">
                            Current Password
                          </Label>
                          <Input
                            id="current-password"
                            type="password"
                            placeholder="Enter your current password"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input
                            id="new-password"
                            type="password"
                            placeholder="Enter a new password"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">
                            Confirm New Password
                          </Label>
                          <Input
                            id="confirm-password"
                            type="password"
                            placeholder="Confirm your new password"
                          />
                        </div>
                        <Button>Update Password</Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Add an extra layer of security to your account
                      </p>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h3 className="font-medium">Connected Accounts</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 border rounded-md">
                          <div className="flex items-center">
                            <svg
                              className="h-5 w-5 mr-3"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#FFC107"
                                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                              />
                              <path
                                fill="#FF3D00"
                                d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                              />
                              <path
                                fill="#4CAF50"
                                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                              />
                              <path
                                fill="#1976D2"
                                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                              />
                            </svg>
                            <div>
                              <div className="font-medium">Google</div>
                              <div className="text-sm text-muted-foreground">
                                Connected
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Disconnect
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium text-destructive mb-2">
                        Danger Zone
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Once you delete your account, there is no going back.
                        Please be certain.
                      </p>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
