/**
 * ServicesPreview Component
 * Displays a preview of available services on the home page
 * Shows a grid of service cards with brief descriptions
 */

// List of services to display
const services = [
  "Web Development",
  "Mobile App Development",
  "Full Stack Development",
  "Cloud Services",
  "AI / ML Solutions",
  "Data Analytics",
];

const ServicesPreview = () => {
  return (
    <section className="px-10 py-20 bg-gradient-to-b from-white to-purple-50/30">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-fadeIn">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mb-12 animate-fadeIn">Comprehensive solutions for your business needs</p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 animate-fadeIn group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
              {service}
            </h3>
            <p className="text-gray-600">
              Enterprise-grade solutions tailored for your business.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;
