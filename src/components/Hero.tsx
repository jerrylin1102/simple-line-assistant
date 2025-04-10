
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-blue-50 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-radial from-green-50 to-transparent opacity-60"></div>
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
      </div>
      
      <div className="section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        {/* Text Content */}
        <div className="space-y-6 fade-in-element" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block glassmorphism py-1.5 px-3 rounded-full text-sm font-medium text-primary mb-2">
            No coding skills required
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            Build Your <span className="text-gradient">LINE Bot</span> Without Coding
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            Create powerful LINE bots with our drag-and-drop interface. Connect with your customers, automate responses, and grow your business.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/register">
              <Button size="lg" className="rounded-full bg-line hover:bg-line-dark shadow-lg hover:shadow-xl transition-all">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="#demo">
              <Button variant="outline" size="lg" className="rounded-full">
                See Demo
              </Button>
            </Link>
          </div>
          
          <div className="pt-8 flex items-center text-sm text-muted-foreground">
            <div className="flex -space-x-2 mr-3">
              <div className="w-8 h-8 rounded-full bg-gradient-blue"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-green"></div>
              <div className="w-8 h-8 rounded-full bg-blue-400"></div>
            </div>
            <p>
              Trusted by <span className="font-medium text-foreground">500+</span> businesses in Taiwan
            </p>
          </div>
        </div>
        
        {/* Hero Image/Illustration */}
        <div className="relative fade-in-element" style={{ animationDelay: '0.3s' }}>
          <div className="relative z-10 animate-float">
            <div className="glassmorphism p-4 rounded-2xl shadow-glass-lg">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="bg-white rounded-lg shadow-sm p-4 mx-4 mb-4">
                    <div className="h-6 bg-primary/20 rounded w-3/4 mb-3"></div>
                    <div className="flex space-x-3 mb-3">
                      <div className="h-10 w-10 rounded bg-line/20"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-8 w-24 rounded-full bg-line/20"></div>
                      <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mx-4">
                    <div className="flex-1 h-16 bg-white rounded-lg shadow-sm p-3">
                      <div className="h-4 w-2/3 bg-gray-100 rounded mb-2"></div>
                      <div className="h-4 w-1/3 bg-gray-100 rounded"></div>
                    </div>
                    <div className="flex-1 h-16 bg-white rounded-lg shadow-sm p-3">
                      <div className="h-4 w-1/2 bg-gray-100 rounded mb-2"></div>
                      <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 px-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-line"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
                <div className="text-xs text-muted-foreground">Bot Creator Interface</div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 -left-8 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-line/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
