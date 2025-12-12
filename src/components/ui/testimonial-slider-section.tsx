import { TestimonialSlider } from './TestimonialSlider';

export default function TestimonialSliderSection() {
  const testimonials = [
    {
      id: 1,
      name: "Adrian S.",
      content: "Great at identifying visitors, big step up from Leadfeeder.",
      rating: 5,
    },
    {
      id: 2,
      name: "Steven P.",
      role: "Mid-Market User",
      content: "Snitcher delivers instant ROI.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ellen D.",
      content: "High identification rate + HubSpot integration.",
      rating: 5,
    },
    {
      id: 4,
      name: "Basil M.",
      content: "Excellent tool: Great pricing & high accuracy.",
      rating: 5,
    },
    {
      id: 5,
      name: "Rik V.",
      content: "Snitcher has effectively tripled our ad budget's ROI.",
      rating: 5,
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What our customers are saying
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Discover why businesses trust our platform to identify and convert their website visitors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <TestimonialSlider 
            testimonials={testimonials.slice(0, 3)} 
            autoplaySpeed={4000} 
            className="h-full"
          />
          
          <TestimonialSlider 
            testimonials={testimonials.slice(2, 5)} 
            autoplaySpeed={5000} 
            className="h-full"
          />
          
          <TestimonialSlider 
            testimonials={[testimonials[0], testimonials[2], testimonials[4]]} 
            autoplaySpeed={4500} 
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
} 