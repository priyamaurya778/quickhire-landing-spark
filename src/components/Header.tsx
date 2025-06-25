
import { Button } from "@/components/ui/button";
import { Menu, X, Briefcase } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">JobConnect</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#process" className="text-gray-700 hover:text-indigo-600 transition-colors">Process</a>
            <a href="#reviews" className="text-gray-700 hover:text-indigo-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Sign Up</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
              <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Process</a>
              <a href="#reviews" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Reviews</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full">Login</Button>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
