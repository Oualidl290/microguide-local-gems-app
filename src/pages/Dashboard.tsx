
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Edit, Map, Plus, Search, Trash2 } from "lucide-react";

// Demo data for guides
const demoGuides = [
  {
    id: 1,
    title: "Best Coffee Shops in Downtown",
    category: "Food & Drink",
    locations: 5,
    views: 1240,
    earnings: 85.20,
    createdAt: "2023-05-15T10:30:00Z",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
  {
    id: 2,
    title: "Hidden Art Galleries in Soho",
    category: "Arts & Culture",
    locations: 8,
    views: 930,
    earnings: 42.75,
    createdAt: "2023-06-22T14:15:00Z",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
  {
    id: 3,
    title: "Best Sunset Spots in Santa Monica",
    category: "Outdoors",
    locations: 4,
    views: 2150,
    earnings: 128.50,
    createdAt: "2023-07-10T09:45:00Z",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
  }
];

const chartData = [
  { name: "Mon", views: 450, earnings: 25 },
  { name: "Tue", views: 680, earnings: 35 },
  { name: "Wed", views: 590, earnings: 30 },
  { name: "Thu", views: 870, earnings: 45 },
  { name: "Fri", views: 1020, earnings: 55 },
  { name: "Sat", views: 1180, earnings: 62 },
  { name: "Sun", views: 980, earnings: 50 },
];

const Dashboard = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredGuides = demoGuides.filter(guide => 
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    guide.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    toast({
      title: "Not implemented",
      description: "Delete functionality requires Supabase integration",
    });
  };

  const totalViews = demoGuides.reduce((sum, guide) => sum + guide.views, 0);
  const totalEarnings = demoGuides.reduce((sum, guide) => sum + guide.earnings, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your guides and track performance
            </p>
          </div>
          <Link to="/create">
            <Button className="mt-4 md:mt-0">
              <Plus className="mr-2 h-4 w-4" />
              Create New Guide
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Guides
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{demoGuides.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalViews.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${totalEarnings.toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Analytics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Performance Analytics</CardTitle>
            <CardDescription>
              Guide views and earnings over the past 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#0066D6" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Bar
                    yAxisId="left"
                    dataKey="views"
                    fill="#0066D6"
                    radius={[4, 4, 0, 0]}
                    name="Views"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="earnings"
                    fill="#82ca9d"
                    radius={[4, 4, 0, 0]}
                    name="Earnings ($)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Guides Management */}
        <Card>
          <CardHeader>
            <CardTitle>Your Guides</CardTitle>
            <CardDescription>
              Manage and track your published guides
            </CardDescription>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search guides..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Guides</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="recent">Recently Created</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {filteredGuides.length > 0 ? (
                  filteredGuides.map((guide) => (
                    <div
                      key={guide.id}
                      className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="md:w-1/4">
                        <div className="relative h-32 w-full rounded-md overflow-hidden">
                          <img
                            src={guide.image}
                            alt={guide.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/4 flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">
                            <Link to={`/guide/${guide.id}`} className="hover:text-primary hover:underline">
                              {guide.title}
                            </Link>
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <span className="bg-muted px-2 py-0.5 rounded-full text-xs">
                              {guide.category}
                            </span>
                            <span className="mx-2">•</span>
                            <Map className="h-3 w-3 mr-1" />
                            <span>{guide.locations} locations</span>
                            <span className="mx-2">•</span>
                            <span>
                              Created {new Date(guide.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-4 mt-2 md:mt-0">
                          <Link to={`/guide/${guide.id}`} className="text-sm font-medium text-primary hover:underline">
                            View Guide <ArrowRight className="inline h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                      <div className="md:w-1/4 flex flex-col justify-between mt-2 md:mt-0">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <div className="text-sm text-muted-foreground">Views</div>
                            <div className="font-semibold">{guide.views.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Earnings</div>
                            <div className="font-semibold text-green-600">${guide.earnings.toFixed(2)}</div>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-2 md:mt-0 md:justify-end">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only md:not-sr-only md:ml-2">Edit</span>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(guide.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only md:not-sr-only md:ml-2">Delete</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-muted-foreground mb-4">No guides found</div>
                    <Link to="/create">
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Create Your First Guide
                      </Button>
                    </Link>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="popular" className="space-y-4">
                {filteredGuides.sort((a, b) => b.views - a.views).map((guide) => (
                  // Same guide card component as above
                  <div
                    key={guide.id}
                    className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    {/* Same content as in the "all" tab */}
                    <div className="md:w-1/4">
                      <div className="relative h-32 w-full rounded-md overflow-hidden">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/4 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          <Link to={`/guide/${guide.id}`} className="hover:text-primary hover:underline">
                            {guide.title}
                          </Link>
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span className="bg-muted px-2 py-0.5 rounded-full text-xs">
                            {guide.category}
                          </span>
                          <span className="mx-2">•</span>
                          <Map className="h-3 w-3 mr-1" />
                          <span>{guide.locations} locations</span>
                          <span className="mx-2">•</span>
                          <span>
                            Created {new Date(guide.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-4 mt-2 md:mt-0">
                        <Link to={`/guide/${guide.id}`} className="text-sm font-medium text-primary hover:underline">
                          View Guide <ArrowRight className="inline h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                    <div className="md:w-1/4 flex flex-col justify-between mt-2 md:mt-0">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <div className="text-sm text-muted-foreground">Views</div>
                          <div className="font-semibold">{guide.views.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Earnings</div>
                          <div className="font-semibold text-green-600">${guide.earnings.toFixed(2)}</div>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-2 md:mt-0 md:justify-end">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only md:not-sr-only md:ml-2">Edit</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(guide.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only md:not-sr-only md:ml-2">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="recent" className="space-y-4">
                {filteredGuides.sort((a, b) => 
                  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                ).map((guide) => (
                  // Same guide card component as above
                  <div
                    key={guide.id}
                    className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    {/* Same content as in the "all" tab */}
                    <div className="md:w-1/4">
                      <div className="relative h-32 w-full rounded-md overflow-hidden">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/4 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          <Link to={`/guide/${guide.id}`} className="hover:text-primary hover:underline">
                            {guide.title}
                          </Link>
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span className="bg-muted px-2 py-0.5 rounded-full text-xs">
                            {guide.category}
                          </span>
                          <span className="mx-2">•</span>
                          <Map className="h-3 w-3 mr-1" />
                          <span>{guide.locations} locations</span>
                          <span className="mx-2">•</span>
                          <span>
                            Created {new Date(guide.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-4 mt-2 md:mt-0">
                        <Link to={`/guide/${guide.id}`} className="text-sm font-medium text-primary hover:underline">
                          View Guide <ArrowRight className="inline h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                    <div className="md:w-1/4 flex flex-col justify-between mt-2 md:mt-0">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <div className="text-sm text-muted-foreground">Views</div>
                          <div className="font-semibold">{guide.views.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Earnings</div>
                          <div className="font-semibold text-green-600">${guide.earnings.toFixed(2)}</div>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-2 md:mt-0 md:justify-end">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only md:not-sr-only md:ml-2">Edit</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(guide.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only md:not-sr-only md:ml-2">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="border-t pt-6 flex justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {filteredGuides.length} of {demoGuides.length} guides
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
