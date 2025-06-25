
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "Software Developer",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "JobConnect made my job search incredibly efficient. I found my current position within just 3 weeks!",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "HR Manager",
      company: "Global Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "As an employer, the quality of candidates we receive through JobConnect is outstanding. Highly recommended!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Marketing Specialist",
      company: "Creative Agency",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The platform is user-friendly and the matching algorithm is spot-on. Found the perfect role for my skills.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what professionals and companies 
            have to say about their experience with JobConnect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg relative">
              <Quote className="h-8 w-8 text-indigo-200 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.content}"</p>
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                  <p className="text-sm text-indigo-600">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
