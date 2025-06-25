
import { CheckCircle, Award, Clock, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Verified Opportunities",
      description: "All job postings are thoroughly verified to ensure authenticity and quality."
    },
    {
      icon: Award,
      title: "Top Talent Pool",
      description: "Access to pre-screened professionals across various industries and skill levels."
    },
    {
      icon: Clock,
      title: "Quick Matching",
      description: "Our advanced algorithm matches candidates with suitable positions in minutes."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security and privacy measures."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose JobConnect?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bridge the gap between exceptional talent and outstanding opportunities, 
            creating meaningful connections that drive career growth and business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
