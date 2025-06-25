
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Gateway to
              <span className="text-indigo-600 block">Career Success</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect talented professionals with leading companies. 
              Discover your next opportunity or find the perfect candidate 
              with our innovative job matching platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4">
                Find Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
                Post a Job
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-indigo-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">50K+</span>
                </div>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Building className="h-8 w-8 text-indigo-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">1.2K+</span>
                </div>
                <p className="text-gray-600">Companies</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-8 w-8 text-indigo-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">25K+</span>
                </div>
                <p className="text-gray-600">Job Posts</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl transform rotate-3 opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
