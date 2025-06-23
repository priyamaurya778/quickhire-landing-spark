
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Find Your Next Opportunity?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join over 1 million job seekers who trust QuickHire to advance their careers. 
          Start your journey today and discover opportunities that match your ambitions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 group"
          >
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
          >
            Learn More
          </Button>
        </div>
        <p className="text-blue-100 text-sm mt-6">
          Free to join • No credit card required • Start in 2 minutes
        </p>
      </div>
    </section>
  );
};

export default CTA;
