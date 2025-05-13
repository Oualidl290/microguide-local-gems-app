import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, MapPin, Star, User } from "lucide-react";

interface GuideCardProps {
  guide: {
    id: number;
    title: string;
    category: string;
    locations: number;
    image: string;
    rating?: number;
    author?: {
      name: string;
      avatar?: string;
    };
  };
  featured?: boolean;
}

const GuideCard = ({ guide, featured = false }: GuideCardProps) => {
  return (
    <Card className={`overflow-hidden card-hover transition-shadow ${featured ? 'border-primary' : ''}`}>
      <div className="relative h-44">
        <img
          src={guide.image}
          alt={guide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 text-gray-800">
            {guide.category}
          </span>
        </div>
        {guide.rating && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-xs">{guide.rating}</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          <Link to={`/guide/${guide.id}`} className="hover:text-primary">
            {guide.title}
          </Link>
        </h3>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{guide.locations} locations</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {guide.author ? (
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-muted overflow-hidden flex items-center justify-center">
              {guide.author.avatar ? (
                <img src={guide.author.avatar} alt={guide.author.name} />
              ) : (
                <User className="h-4 w-4" />
              )}
            </div>
            <span className="text-sm">{guide.author.name}</span>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">
            {featured ? "Featured Guide" : ""}
          </div>
        )}
        
        <Link to={`/guide/${guide.id}`}>
          <Button size="sm" variant="ghost">
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GuideCard;
