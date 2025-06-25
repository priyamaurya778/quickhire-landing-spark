
import { Briefcase, UserCheck, TrendingUp, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Job Posting & Management",
      description: "Post jobs, manage applications, and track hiring progress with our comprehensive dashboard.",
      color: "bg-blue-500"
    },
    {
      icon: UserCheck,
      title: "Candidate Screening",
      description: "Advanced filtering and screening tools to find candidates that match your exact requirements.",
      color: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: "Career Development",
      description: "Resources and tools to help job seekers enhance their skills and advance their careers.",
      color: "bg-purple-500"
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Built-in messaging system for seamless communication between employers and candidates.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for both job seekers and employers, 
            designed to streamline the hiring process and maximize success rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
