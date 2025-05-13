
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Map, Star, User } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-background dark:from-gray-900 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Create and Monetize <span className="text-primary">Hyperlocal Guides</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Share your local expertise with the world. Create comprehensive micro-guides for specific locations and earn from your knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/auth">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/guide/demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Demo Guide
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative animate-fade-in">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="meta-card relative p-6 backdrop-blur-sm animate-slide-up shadow-lg">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Best Coffee Shops in Downtown</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Map className="h-4 w-4 mr-1" />
                      <span>San Francisco, CA</span>
                      <span className="mx-2">•</span>
                      <span>5 locations</span>
                    </div>
                    <div className="bg-muted rounded-md p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">Ritual Coffee</div>
                          <div className="text-sm text-muted-foreground">Valencia St</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Create with MicroGuide?
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your local knowledge into valuable guides that help others and earn you money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* Feature 1 */}
            <Card className="meta-card border-0 card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <Map className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Create Hyperlocal Guides</h3>
                <p className="text-muted-foreground">
                  Share your insider knowledge about specific areas with easy-to-use tools to create beautiful, informative guides.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="meta-card border-0 card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Build Your Audience</h3>
                <p className="text-muted-foreground">
                  Connect with travelers and locals looking for authentic experiences. Grow your following with every guide you create.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="meta-card border-0 card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Monetize Your Knowledge</h3>
                <p className="text-muted-foreground">
                  Earn revenue through affiliate links, sponsored listings, and ad integrations while helping others discover hidden gems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How MicroGuide Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to create, share, and profit from your local knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mt-2">Create Your Guide</h3>
              <p className="text-muted-foreground">
                Use our intuitive tools to build a curated guide with your favorite spots, insider tips, and local recommendations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mt-2">Share with the World</h3>
              <p className="text-muted-foreground">
                Publish your guide and share it across social media, with friends, or embed it on your own website or blog.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mt-2">Earn Revenue</h3>
              <p className="text-muted-foreground">
                Make money from your guides through affiliate links, ads, and sponsorships while tracking performance in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:px-12 md:py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Share Your Local Expertise?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of local experts already creating and monetizing guides on MicroGuide.
              </p>
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="font-medium">
                  Create Your First Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
