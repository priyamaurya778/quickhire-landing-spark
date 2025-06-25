
import { UserPlus, FileText, Users, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account and complete your professional profile with relevant details.",
      step: "1"
    },
    {
      icon: FileText,
      title: "Browse & Apply",
      description: "Explore job opportunities and submit applications with our one-click system.",
      step: "2"
    },
    {
      icon: Users,
      title: "Connect",
      description: "Engage with employers through our messaging platform and schedule interviews.",
      step: "3"
    },
    {
      icon: CheckCircle,
      title: "Get Hired",
      description: "Successfully land your dream job and start your new career journey.",
      step: "4"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Process, Great Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes finding the right job or candidate easier than ever. 
            Follow these simple steps to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold z-20">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
