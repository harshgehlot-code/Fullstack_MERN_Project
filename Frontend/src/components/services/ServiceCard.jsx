/**
 * ServiceCard Component
 * Displays a single service card with details
 * @param {string} title - Service title
 * @param {string} description - Service description
 * @param {string} technologies - Technologies used for the service
 * @param {string} benefits - Business benefits of the service
 */

const ServiceCard = ({ title, description, technologies, benefits }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 group h-full">
      {/* Service Title */}
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-blue-700 transition-all">
        {title}
      </h3>

      {/* Service Description */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Technologies Section */}
      <div className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
        <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
          <span className="mr-2">🛠️</span>
          Technologies
        </h4>
        <p className="text-gray-700">{technologies}</p>
      </div>

      {/* Benefits Section */}
      <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
        <h4 className="font-semibold text-cyan-700 mb-2 flex items-center">
          <span className="mr-2">✨</span>
          Business Benefits
        </h4>
        <p className="text-gray-700">{benefits}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
