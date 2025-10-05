import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const handleRegisterClick = () => {
    const registerSection = document.getElementById('register');
    registerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Islamic School Students" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            PICC Weekend Islamic School
          </h1>
          
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Planting the seeds of faith, knowledge, and friendships—one weekend at a time
          </p>

          <div className="pt-8">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleRegisterClick}
              className="text-lg px-8 py-6 font-semibold shadow-strong hover:scale-105 transition-transform"
            >
              Register Today
            </Button>
          </div>

          <div className="pt-12 flex flex-col md:flex-row gap-6 justify-center items-center text-sm md:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>1217 Todds Lane, Hampton VA 23666</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Sundays 10:00 AM - 2:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" fill="hsl(var(--background))">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};
