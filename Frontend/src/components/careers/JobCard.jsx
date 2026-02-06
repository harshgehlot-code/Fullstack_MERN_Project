/**
 * JobCard Component
 * Displays a single job posting card with details and apply button
 * @param {Object} job - Job object containing job details
 * @param {Function} onApply - Callback function triggered when Apply button is clicked
 */

const JobCard = ({ job, onApply }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/50 group transition-all duration-300 animate-fadeIn">
      {/* Job Title */}
      <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:from-purple-700 group-hover:to-blue-700 transition-all">
        {job.title}
      </h3>

      {/* Job Details */}
      <div className="space-y-2 mb-4 ">
        <p className="text-gray-700 font-medium flex items-center">
          <span className="text-purple-600 mr-2">📍</span>
          {job.department}
        </p>
        <p className="text-gray-600 flex items-center">
          <span className="text-blue-600 mr-2">🏢</span>
          {job.location}
        </p>
        <p className="text-gray-600 flex items-center">
          <span className="text-cyan-600 mr-2">💼</span>
          Experience: {job.experience}
        </p>
      </div>

      {/* Job Description (if available) */}
      {job.description && (
        <p className="text-gray-500 text-sm mb-4 line-clamp-3">
          {job.description}
        </p>
      )}

      {/* Apply Button */}
      <button
        onClick={onApply}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
