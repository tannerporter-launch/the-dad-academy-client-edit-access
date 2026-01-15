import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const MobileBottomCTA = () => {
  const location = useLocation();
  
  // Don't show on community or contact pages
  if (location.pathname === "/community" || location.pathname === "/contact") {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-t p-4 shadow-lg">
      <Button asChild size="lg" className="w-full gradient-cta text-white border-0">
        <a href="https://the-dad-academy.app.clientclub.net/" target="_blank" rel="noopener noreferrer">
          Join the Community
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};

export default MobileBottomCTA;
