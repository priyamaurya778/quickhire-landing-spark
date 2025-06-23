
const Stats = () => {
  const stats = [
    { number: "2M+", label: "Jobs Posted", color: "from-blue-600 to-blue-700" },
    { number: "500K+", label: "Successful Hires", color: "from-purple-600 to-purple-700" },
    { number: "50K+", label: "Companies Trust Us", color: "from-green-600 to-green-700" },
    { number: "98%", label: "Satisfaction Rate", color: "from-orange-600 to-orange-700" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
