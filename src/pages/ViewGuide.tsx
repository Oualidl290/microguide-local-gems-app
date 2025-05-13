
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import {
  Calendar,
  ExternalLink,
  Link as LinkIcon,
  MapPin,
  Share2,
  Star,
  User,
} from "lucide-react";

// Demo data for a single guide
const demoGuide = {
  id: 1,
  title: "Best Coffee Shops in Downtown San Francisco",
  category: "Food & Drink",
  description: "Discover the best artisanal coffee spots in San Francisco's downtown area. From hidden gems to popular favorites, this guide covers unique cafes with outstanding brews and atmospheres.",
  author: {
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=12",
    verified: true,
  },
  createdAt: "2023-05-15T10:30:00Z",
  updatedAt: "2023-07-20T14:45:00Z",
  locations: [
    {
      id: 1,
      name: "Ritual Coffee Roasters",
      address: "432 Octavia St, San Francisco, CA 94102",
      lat: 37.7749,
      lng: -122.4194,
      description: "Known for their meticulously sourced beans and expert baristas, Ritual offers a refined coffee experience with a bright, minimalist space that's perfect for working or meeting friends.",
      tip: "Try their seasonal single-origin pour-over - always rotating and exceptional quality.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Blue Bottle Coffee",
      address: "66 Mint St, San Francisco, CA 94103",
      lat: 37.7749,
      lng: -122.4194,
      description: "A pioneer in the third-wave coffee movement, Blue Bottle offers expertly crafted espresso drinks in a modern, gallery-like space that highlights the art of coffee making.",
      tip: "Their New Orleans-style iced coffee is legendary - cold brewed with chicory and sweetened just right.",
      image: "https://images.unsplash.com/photo-1509042239860-f190d9c11e43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Sightglass Coffee",
      address: "270 7th St, San Francisco, CA 94103",
      lat: 37.7749,
      lng: -122.4194,
      description: "Housed in an industrial-chic two-story space, Sightglass offers freshly roasted beans and expertly prepared drinks with a direct view of their vintage roaster.",
      tip: "Check out their affogato - espresso poured over small-batch ice cream for a perfect afternoon treat.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      affiliateLink: "https://example.com/partner-link",
    },
    {
      id: 4,
      name: "Four Barrel Coffee",
      address: "375 Valencia St, San Francisco, CA 94103",
      lat: 37.7749,
      lng: -122.4194,
      description: "With vinyl records spinning and hip decor, Four Barrel offers carefully sourced and roasted coffee in a spacious, light-filled venue that epitomizes SF coffee culture.",
      tip: "Their filter coffee is always fresh and changes throughout the day - ask what's currently brewing.",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rating: 4.5,
    },
  ],
  sponsoredBy: {
    name: "SF Coffee Guild",
    website: "https://example.com/sf-coffee",
  },
  stats: {
    views: 1240,
    likes: 87,
    shares: 32,
  },
};

const ViewGuide = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  // In a real app, you would fetch this data from Supabase based on the guide ID
  const guide = id === "demo" ? demoGuide : demoGuide;

  const handleShare = (platform: string) => {
    toast({
      title: "Share functionality",
      description: `Share on ${platform} would be implemented with Supabase integration.`,
    });
  };

  const handleBookmark = () => {
    toast({
      title: "Bookmark functionality",
      description: "Bookmark functionality requires Supabase integration.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Guide Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                {guide.category}
              </div>
              <h1 className="text-3xl font-bold mb-2">{guide.title}</h1>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                  Created {new Date(guide.createdAt).toLocaleDateString()}
                </span>
                <span className="mx-2">•</span>
                <User className="h-4 w-4 mr-1" />
                <span>By {guide.author.name}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare("facebook")}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                      </svg>
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare("twitter")}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.9441 7.92638C19.9568 8.10403 19.9568 8.28173 19.9568 8.45938C19.9568 13.8782 15.8325 20.1218 8.29441 20.1218C5.97207 20.1218 3.81473 19.4492 2 18.2817C2.32996 18.3198 2.64719 18.332 2.98988 18.332C4.90607 18.332 6.67004 17.6845 8.07867 16.5803C6.27664 16.5422 4.76648 15.3747 4.24719 13.7563C4.5 13.7944 4.75277 13.8198 5.01828 13.8198C5.38832 13.8198 5.75836 13.7691 6.10104 13.693C4.22184 13.3122 2.81324 11.6558 2.81324 9.6843V9.63382C3.35785 9.93369 3.99239 10.1241 4.65228 10.1494C3.55078 9.41199 2.83832 8.19665 2.83832 6.82282C2.83832 6.06077 3.0533 5.36099 3.42334 4.75137C5.42639 7.21384 8.40873 8.80879 11.7563 8.98649C11.6954 8.68662 11.6598 8.3741 11.6598 8.06154C11.6598 5.81657 13.4746 4 15.7448 4C16.9218 4 17.9878 4.48173 18.7383 5.2565C19.6665 5.08041 20.5566 4.73537 21.3452 4.26642C21.0533 5.21904 20.4188 6.0607 19.5913 6.60019C20.3923 6.5117 21.1681 6.29654 21.8913 5.99662C21.3452 6.85098 20.6579 7.45238 19.9441 7.92638Z" />
                      </svg>
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare("link")}
                    >
                      <LinkIcon className="h-4 w-4" />
                      <span className="sr-only">Copy Link</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy Link</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button variant="default" onClick={handleBookmark}>
                Save
              </Button>
            </div>
          </div>

          <p className="text-lg">{guide.description}</p>
        </div>

        {/* Sponsor Banner (if applicable) */}
        {guide.sponsoredBy && (
          <Card className="mb-8 bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Sponsored by {guide.sponsoredBy.name}
                </span>
              </div>
              <a
                href={guide.sponsoredBy.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
              >
                Learn more <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </CardContent>
          </Card>
        )}

        {/* Map Placeholder */}
        <Card className="mb-8 overflow-hidden">
          <div className="bg-muted h-80 flex items-center justify-center relative">
            <div className="text-center px-4">
              <MapPin className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
              <h3 className="text-lg font-medium mb-1">Map View</h3>
              <p className="text-muted-foreground">
                Map integration would be implemented with Google Maps or Mapbox
              </p>
            </div>
          </div>
        </Card>

        {/* Locations Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Guide Locations</h2>
          
          <div className="space-y-8">
            {guide.locations.map((location, index) => (
              <Card key={location.id} className="overflow-hidden card-hover">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative h-48 md:h-auto">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 rounded-full px-2 py-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-xs">{location.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 md:col-span-2 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{location.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          Stop {index + 1}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{location.address}</span>
                      </div>
                      
                      <p className="mb-4">{location.description}</p>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="text-sm font-medium mb-1">Local Tip</div>
                        <p className="text-sm italic">{location.tip}</p>
                      </div>
                    </div>
                    
                    {location.affiliateLink && (
                      <div className="mt-auto pt-4 border-t">
                        <a
                          href={location.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                        <div className="text-xs text-muted-foreground mt-1">
                          Affiliate link - we may earn a commission
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="flex items-center justify-between py-4 border-t">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <div className="text-sm text-muted-foreground mr-2">Views</div>
              <div className="font-medium">{guide.stats.views}</div>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-muted-foreground mr-2">Likes</div>
              <div className="font-medium">{guide.stats.likes}</div>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-muted-foreground mr-2">Shares</div>
              <div className="font-medium">{guide.stats.shares}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => toast({ title: "Share", description: "Share functionality would be implemented with Supabase." })}
            >
              <Share2 className="mr-1 h-4 w-4" /> Share
            </Button>
          </div>
        </div>

        {/* Author section */}
        <div className="py-6 border-t">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-muted overflow-hidden flex items-center justify-center mr-3">
              {guide.author.avatar ? (
                <img src={guide.author.avatar} alt={guide.author.name} />
              ) : (
                <User className="h-6 w-6" />
              )}
            </div>
            <div>
              <div className="font-medium flex items-center">
                {guide.author.name}
                {guide.author.verified && (
                  <div className="ml-1 h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg
                      className="h-2.5 w-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                Local Guide
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ViewGuide;
