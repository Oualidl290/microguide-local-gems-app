
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

interface GuideCardSkeletonProps {
  className?: string;
  compact?: boolean;
}

export function GuideCardSkeleton({ className, compact = false }: GuideCardSkeletonProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <AspectRatio ratio={16 / 9}>
        <Skeleton className="h-full w-full rounded-t-lg" />
      </AspectRatio>
      
      <CardHeader className={cn(compact ? "p-4" : "")}>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </CardHeader>
      
      {!compact && (
        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-6 w-16 mt-4 rounded-full" />
        </CardContent>
      )}
      
      <CardFooter className={cn("border-t p-4", compact ? "p-3" : "p-4")}>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export function GuideCardSkeletonGrid({ count = 6, compact = false, className }: { count?: number, compact?: boolean, className?: string }) {
  return (
    <div className={cn("grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3", className)}>
      {Array(count).fill(0).map((_, i) => (
        <GuideCardSkeleton key={i} compact={compact} />
      ))}
    </div>
  );
}
