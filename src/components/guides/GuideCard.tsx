
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Eye, MapPin, Edit, Trash, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface GuideCardProps {
  guide: {
    id: string;
    title: string;
    description?: string;
    imageUrl?: string;
    category?: string;
    location?: string;
    slug?: string;
    viewCount?: number;
    isPublished?: boolean;
  };
  author?: {
    name: string;
    avatarUrl?: string;
  };
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
  compact?: boolean;
}

export function GuideCard({ 
  guide, 
  author, 
  onEdit, 
  onDelete, 
  className, 
  compact = false 
}: GuideCardProps) {
  const viewUrl = `/guide/${guide.slug || guide.id}`;
  
  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-md", 
      compact ? "h-full" : "", 
      className
    )}>
      <div className="relative">
        {guide.imageUrl && (
          <AspectRatio ratio={16 / 9}>
            <img 
              src={guide.imageUrl || 'https://placehold.co/600x400/e2e8f0/a0aec0?text=No%20Image'} 
              alt={guide.title}
              className="object-cover w-full h-full rounded-t-lg"
            />
          </AspectRatio>
        )}
        {guide.isPublished !== undefined && (
          <div className="absolute top-2 right-2">
            <Badge variant={guide.isPublished ? "default" : "secondary"}>
              {guide.isPublished ? "Published" : "Draft"}
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className={cn(compact ? "p-4" : "")}>
        <div className="space-y-1">
          <CardTitle className={cn("line-clamp-1", compact ? "text-base" : "")}>
            {guide.title}
          </CardTitle>
          {guide.location && (
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              <span className="line-clamp-1">{guide.location}</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      {!compact && guide.description && (
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {guide.description}
          </p>
          
          {guide.category && (
            <div className="mt-3">
              <Badge variant="outline" className="text-xs">
                {guide.category}
              </Badge>
            </div>
          )}
        </CardContent>
      )}
      
      <CardFooter className={cn(
        "flex justify-between items-center border-t bg-muted/40", 
        compact ? "p-3" : "p-4"
      )}>
        {author ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={author.avatarUrl} />
              <AvatarFallback className="text-xs">
                {author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{author.name}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Eye className="h-3.5 w-3.5" />
            <span>{guide.viewCount || 0} views</span>
          </div>
        )}
        
        <div className="flex gap-1">
          {onDelete && (
            <Button variant="ghost" size="sm" onClick={onDelete} className="h-8 w-8 p-0">
              <Trash className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          )}
          {onEdit && (
            <Button variant="ghost" size="sm" onClick={onEdit} className="h-8 w-8 p-0">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
          )}
          <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
            <Link to={viewUrl}>
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">View</span>
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
