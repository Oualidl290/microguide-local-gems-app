
import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
};

export default LoadingSpinner;
