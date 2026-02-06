/**
 * About Page Component
 * Displays company information, mission, vision, and key differentiators
 */

const About = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 min-h-screen px-10 py-20 animate-fadeIn">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 animate-fadeIn">
        About NexTech Solutions
      </h1>
      <p className="text-center text-gray-600 mb-16 animate-fadeIn">Empowering businesses through innovation</p>

      {/* Company Overview */}
      <section className="max-w-5xl mx-auto mb-16 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-purple-100">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Company Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            NexTech Solutions is a modern IT services company focused on
            delivering high-quality software solutions to businesses worldwide.
            We specialize in full-stack development, cloud solutions, and
            emerging technologies that help organizations grow efficiently.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-purple-100 transform hover:scale-105 transition-all duration-300 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to empower businesses through innovative
            technology solutions that are scalable, secure, and reliable.
            We aim to deliver value-driven software with measurable impact.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-blue-100 transform hover:scale-105 transition-all duration-300 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to become a globally trusted technology partner
            by consistently delivering excellence and adopting the latest
            advancements in software engineering.
          </p>
        </div>
      </section>

      {/* Why Choose NexTech */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 animate-fadeIn">
          Why Choose NexTech
        </h2>

        <ul className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Experienced Team",
              description: "Skilled developers and engineers with real-world project experience.",
              delay: "0.1s"
            },
            {
              title: "Modern Technologies",
              description: "We use cutting-edge tools and frameworks to build future-ready solutions.",
              delay: "0.2s"
            },
            {
              title: "Client-Centric Approach",
              description: "Every solution is tailored to meet the specific needs of our clients.",
              delay: "0.3s"
            },
            {
              title: "Quality & Reliability",
              description: "We follow best practices to ensure high-quality and reliable software delivery.",
              delay: "0.4s"
            }
          ].map((item, index) => (
            <li 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 transform hover:scale-105 transition-all duration-300 animate-fadeIn group"
              style={{ animationDelay: item.delay }}
            >
              <h4 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-700">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
