
import { Search, Users, Zap, Shield, Target, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Job Matching",
      description: "AI-powered algorithm matches you with jobs that perfectly fit your skills and preferences.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Instant Applications",
      description: "Apply to multiple jobs with one click using your saved profile and resume.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Direct Communication",
      description: "Chat directly with hiring managers and get real-time updates on your applications.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Verified Companies",
      description: "All companies are verified to ensure legitimate job postings and safe applications.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Personalized Alerts",
      description: "Get notified immediately when jobs matching your criteria are posted.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Career Insights",
      description: "Access salary trends, skill demands, and career growth opportunities in your field.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Land Your Dream Job
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with human expertise to make job searching effortless and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
