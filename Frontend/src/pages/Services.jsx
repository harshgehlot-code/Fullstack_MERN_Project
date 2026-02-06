/**
 * Services Page Component
 * Displays all available services offered by NexTech Solutions
 */

import ServiceCard from "../components/services/ServiceCard";

const Services = () => {
  // Array of service objects with details
  const services = [
    {
      title: "Web Development",
      description:
        "Custom, scalable, and secure web applications tailored to business needs.",
      technologies: "React, Node.js, MongoDB",
      benefits:
        "Improved online presence, faster performance, scalable architecture",
    },
    {
      title: "Mobile App Development",
      description:
        "High-performance mobile apps for Android and iOS platforms.",
      technologies: "React Native, Flutter",
      benefits:
        "Increased user engagement, cross-platform compatibility",
    },
    {
      title: "Full Stack Development",
      description:
        "End-to-end application development with modern technologies.",
      technologies: "MERN Stack",
      benefits:
        "Faster development, unified architecture, reduced costs",
    },
    {
      title: "Cloud Services",
      description:
        "Cloud infrastructure setup, migration, and optimization.",
      technologies: "AWS, Docker",
      benefits:
        "High availability, scalability, cost efficiency",
    },
    {
      title: "AI / ML Solutions",
      description:
        "Data-driven AI solutions to automate and optimize processes.",
      technologies: "Python, ML, AI Models",
      benefits:
        "Smarter decisions, automation, predictive insights",
    },
    {
      title: "Data Analytics",
      description:
        "Transform raw data into actionable business insights.",
      technologies: "Python, SQL, Power BI",
      benefits:
        "Better insights, improved strategy, data-driven growth",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 min-h-screen px-10 py-20 animate-fadeIn">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fadeIn">
        Our Services
      </h1>
      <p className="text-center text-gray-600 mb-14 animate-fadeIn">Comprehensive solutions tailored to your business needs</p>

      {/* Services Grid - displays all services as cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
