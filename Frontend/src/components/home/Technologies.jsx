/**
 * Technologies Component
 * Displays technologies used by the company on the home page
 * Shows technology badges in a horizontal layout
 */

// List of technologies to display (as per assignment requirements)
const techs = ["React", "Node.js", "JavaScript", "MongoDB", "AWS", "Docker", "HTML",
  "CSS", "JavaScript", "TypeScript", "React", "Angular", "Vue.js", "Next.js", "Svelte", "Tailwind CSS", "Bootstrap", "Material UI", "Sass", "Redux", "Node.js", "Express.js", "Python", "Django", "Flask", "FastAPI", "Java", "Spring Boot", "C#", ".NET", "Go (Golang)", "Rust", "PHP", "Laravel", "Ruby", "Ruby on Rails", "PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "MariaDB", "Oracle Database", "Microsoft SQL Server", "Cassandra", "DynamoDB", "Amazon Web Services (AWS)", "Microsoft Azure",];

const Technologies = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 px-10 py-20">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fadeIn">
        Technologies We Use
      </h2>
      <p className="text-center text-gray-600 mb-12 animate-fadeIn">Cutting-edge tools and frameworks</p>

      {/* Technology Badges */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {techs.map((tech, index) => (
          <span
            key={tech}
            className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-purple-200 font-semibold text-gray-700 hover:text-purple-600 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
