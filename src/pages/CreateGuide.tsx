
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Loader2, MapPin, Plus, Trash2 } from "lucide-react";

type FormStep = "details" | "locations" | "monetization" | "review";

interface Location {
  id: string;
  name: string;
  address: string;
  description: string;
  imageUrl?: string;
  affiliateLink?: string;
}

const generateId = () => Math.random().toString(36).substring(2, 10);

const categories = [
  "Food & Drink",
  "Arts & Culture",
  "Outdoors",
  "Shopping",
  "Family Friendly",
  "Nightlife",
  "Hidden Gems",
  "Photography Spots",
  "Wellness",
  "Entertainment",
];

const CreateGuide = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<FormStep>("details");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    locations: [] as Location[],
    monetizationOptions: {
      enableAds: false,
      affiliate: false,
      sponsored: false,
      adsenseCode: "",
      sponsorName: "",
      sponsorUrl: "",
    },
  });

  const addLocation = () => {
    const newLocation: Location = {
      id: generateId(),
      name: "",
      address: "",
      description: "",
    };
    setFormData({
      ...formData,
      locations: [...formData.locations, newLocation],
    });
  };

  const updateLocation = (id: string, field: keyof Location, value: string) => {
    setFormData({
      ...formData,
      locations: formData.locations.map((loc) =>
        loc.id === id ? { ...loc, [field]: value } : loc
      ),
    });
  };

  const removeLocation = (id: string) => {
    setFormData({
      ...formData,
      locations: formData.locations.filter((loc) => loc.id !== id),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real app, this would connect to Supabase to save data
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Guide created!",
        description: "Your guide has been successfully created.",
      });
      
      // Navigate to dashboard or guide view
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create guide. Please integrate Supabase and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateStep = (step: FormStep): boolean => {
    switch (step) {
      case "details":
        return !!formData.title && !!formData.category && !!formData.description;
      case "locations":
        return formData.locations.length > 0 && formData.locations.every(
          (loc) => !!loc.name && !!loc.address
        );
      case "monetization":
        return true; // Monetization is optional
      case "review":
        return true;
      default:
        return false;
    }
  };

  const renderStepIndicator = () => {
    const steps: FormStep[] = ["details", "locations", "monetization", "review"];
    
    return (
      <div className="flex justify-between items-center mb-8">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div 
              className={`h-8 w-8 rounded-full flex items-center justify-center 
                ${currentStep === step 
                  ? "bg-primary text-white" 
                  : steps.indexOf(currentStep) > index 
                    ? "bg-green-500 text-white" 
                    : "bg-muted text-muted-foreground"}`}
            >
              {steps.indexOf(currentStep) > index ? (
                "✓"
              ) : (
                index + 1
              )}
            </div>
            <div className="mt-2 text-xs font-medium hidden sm:block">
              {step.charAt(0).toUpperCase() + step.slice(1)}
            </div>
            {index < steps.length - 1 && (
              <div className="hidden sm:block absolute h-[2px] bg-muted" style={{
                width: `calc(100% / ${steps.length} - 2rem)`,
                left: `calc(${index * (100 / steps.length)}% + 1rem)`,
                top: "1.3rem",
                transform: "translateY(-50%)",
              }} />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderDetailsStep = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-base">Guide Title</Label>
        <Input
          id="title"
          placeholder="e.g., Best Coffee Shops in Downtown"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category" className="text-base">Category</Label>
        <Select
          value={formData.category}
          onValueChange={(value) => setFormData({ ...formData, category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description" className="text-base">Description</Label>
        <Textarea
          id="description"
          placeholder="Describe your guide in a few sentences..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="location" className="text-base">General Location</Label>
        <Input
          id="location"
          placeholder="e.g., San Francisco, CA"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
      </div>
    </div>
  );

  const renderLocationsStep = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Guide Locations</h3>
        <Button onClick={addLocation} type="button" variant="outline" size="sm">
          <Plus className="mr-1 h-4 w-4" /> Add Location
        </Button>
      </div>
      
      {formData.locations.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed rounded-lg">
          <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-medium text-lg mb-2">No locations added yet</h3>
          <p className="text-muted-foreground mb-4">
            Start building your guide by adding your first location
          </p>
          <Button onClick={addLocation} type="button">
            <Plus className="mr-2 h-4 w-4" /> Add Your First Location
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {formData.locations.map((location, index) => (
            <Card key={location.id} className="relative">
              <CardHeader className="pb-2">
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeLocation(location.id)}
                    className="h-8 w-8 p-0 text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-base">
                  Location {index + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`location-name-${index}`}>Name</Label>
                    <Input
                      id={`location-name-${index}`}
                      placeholder="e.g., Golden Gate Park"
                      value={location.name}
                      onChange={(e) =>
                        updateLocation(location.id, "name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`location-address-${index}`}>Address</Label>
                    <Input
                      id={`location-address-${index}`}
                      placeholder="e.g., 501 Stanyan St, San Francisco, CA"
                      value={location.address}
                      onChange={(e) =>
                        updateLocation(location.id, "address", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`location-description-${index}`}>Description</Label>
                  <Textarea
                    id={`location-description-${index}`}
                    placeholder="Share what's special about this place..."
                    value={location.description}
                    onChange={(e) =>
                      updateLocation(location.id, "description", e.target.value)
                    }
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`location-affiliate-${index}`}>
                    Affiliate or External Link (optional)
                  </Label>
                  <Input
                    id={`location-affiliate-${index}`}
                    placeholder="e.g., https://booking.com/hotel/..."
                    value={location.affiliateLink || ""}
                    onChange={(e) =>
                      updateLocation(
                        location.id,
                        "affiliateLink",
                        e.target.value
                      )
                    }
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {formData.locations.length > 0 && (
        <div className="text-center">
          <Button onClick={addLocation} type="button" variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Add Another Location
          </Button>
        </div>
      )}
    </div>
  );

  const renderMonetizationStep = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Monetization Options</h3>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Advertising Settings</CardTitle>
          <CardDescription>
            Configure how you want to monetize this guide
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="enable-ads"
              checked={formData.monetizationOptions.enableAds}
              onCheckedChange={(checked) =>
                setFormData({
                  ...formData,
                  monetizationOptions: {
                    ...formData.monetizationOptions,
                    enableAds: !!checked,
                  },
                })
              }
            />
            <Label htmlFor="enable-ads">
              Enable Google AdSense for this guide
            </Label>
          </div>
          
          {formData.monetizationOptions.enableAds && (
            <div className="space-y-2">
              <Label htmlFor="adsense-code">AdSense Code</Label>
              <Textarea
                id="adsense-code"
                placeholder="Paste your AdSense code here..."
                value={formData.monetizationOptions.adsenseCode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    monetizationOptions: {
                      ...formData.monetizationOptions,
                      adsenseCode: e.target.value,
                    },
                  })
                }
                rows={3}
              />
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Sponsorship</CardTitle>
          <CardDescription>
            Add a sponsor for this guide
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="enable-sponsored"
              checked={formData.monetizationOptions.sponsored}
              onCheckedChange={(checked) =>
                setFormData({
                  ...formData,
                  monetizationOptions: {
                    ...formData.monetizationOptions,
                    sponsored: !!checked,
                  },
                })
              }
            />
            <Label htmlFor="enable-sponsored">
              This guide is sponsored
            </Label>
          </div>
          
          {formData.monetizationOptions.sponsored && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sponsor-name">Sponsor Name</Label>
                <Input
                  id="sponsor-name"
                  placeholder="e.g., Local Coffee Co."
                  value={formData.monetizationOptions.sponsorName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      monetizationOptions: {
                        ...formData.monetizationOptions,
                        sponsorName: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sponsor-url">Sponsor URL</Label>
                <Input
                  id="sponsor-url"
                  placeholder="e.g., https://localcoffee.com"
                  value={formData.monetizationOptions.sponsorUrl}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      monetizationOptions: {
                        ...formData.monetizationOptions,
                        sponsorUrl: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Affiliate Links</CardTitle>
          <CardDescription>
            Add affiliate links to locations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="enable-affiliate"
              checked={formData.monetizationOptions.affiliate}
              onCheckedChange={(checked) =>
                setFormData({
                  ...formData,
                  monetizationOptions: {
                    ...formData.monetizationOptions,
                    affiliate: !!checked,
                  },
                })
              }
            />
            <div>
              <Label htmlFor="enable-affiliate" className="block">
                Use affiliate links in locations
              </Label>
              <p className="text-sm text-muted-foreground">
                You can add affiliate links to each location in the guide
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderReviewStep = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Review Your Guide</h3>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{formData.title || "Untitled Guide"}</CardTitle>
          <CardDescription>
            {formData.category} • {formData.location}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-1">
              Description
            </h4>
            <p>{formData.description}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              Locations ({formData.locations.length})
            </h4>
            <div className="space-y-3">
              {formData.locations.map((location, index) => (
                <div
                  key={location.id}
                  className="p-3 border rounded-lg bg-muted/30"
                >
                  <div className="font-medium">{location.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {location.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {(formData.monetizationOptions.enableAds ||
            formData.monetizationOptions.sponsored ||
            formData.monetizationOptions.affiliate) && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">
                Monetization
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {formData.monetizationOptions.enableAds && (
                  <li>Google AdSense enabled</li>
                )}
                {formData.monetizationOptions.sponsored && (
                  <li>
                    Sponsored by{" "}
                    {formData.monetizationOptions.sponsorName || "a sponsor"}
                  </li>
                )}
                {formData.monetizationOptions.affiliate && (
                  <li>Contains affiliate links</li>
                )}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="text-center text-muted-foreground">
        <p>
          By publishing this guide, you confirm that all content is accurate and complies with our{" "}
          <Link to="#" className="text-primary hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "details":
        return renderDetailsStep();
      case "locations":
        return renderLocationsStep();
      case "monetization":
        return renderMonetizationStep();
      case "review":
        return renderReviewStep();
      default:
        return null;
    }
  };

  const goToNextStep = () => {
    if (currentStep === "details") setCurrentStep("locations");
    else if (currentStep === "locations") setCurrentStep("monetization");
    else if (currentStep === "monetization") setCurrentStep("review");
  };

  const goToPrevStep = () => {
    if (currentStep === "locations") setCurrentStep("details");
    else if (currentStep === "monetization") setCurrentStep("locations");
    else if (currentStep === "review") setCurrentStep("monetization");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Create New Guide</h1>
            <p className="text-muted-foreground">
              Share your local expertise with the world
            </p>
          </div>
          <Link to="/dashboard">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>
          </Link>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle>Guide Creation Form</CardTitle>
            <CardDescription>
              Fill out the details for your new guide
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {renderStepIndicator()}
              
              {renderCurrentStep()}
              
              <div className="flex justify-between pt-6 border-t">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={goToPrevStep}
                  disabled={currentStep === "details"}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                
                {currentStep === "review" ? (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Publishing...
                      </>
                    ) : (
                      <>Publish Guide</>
                    )}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={goToNextStep}
                    disabled={!validateStep(currentStep)}
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CreateGuide;
