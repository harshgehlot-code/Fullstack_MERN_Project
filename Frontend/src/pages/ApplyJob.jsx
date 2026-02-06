
import { useParams, useNavigate } from "react-router-dom";
import ApplyForm from "../components/careers/ApplyForm";

const ApplyJob = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const dummyJobs = [
    { _id: "65c1a2b3c4d5e6f7a8b9c0d1", title: "Frontend Developer" },
    { _id: "65c1a2b3c4d5e6f7a8b9c0d2", title: "Backend Developer" },
    { _id: "65c1a2b3c4d5e6f7a8b9c0d3", title: "Full Stack Developer" },
    { _id: "65c1a2b3c4d5e6f7a8b9c0d4", title: "DevOps Engineer" },
    { _id: "65c1a2b3c4d5e6f7a8b9c0d5", title: "UI/UX Designer" },
    { _id: "65c1a2b3c4d5e6f7a8b9c0d6", title: "Data Analyst" }
  ];

  const job = dummyJobs.find((j) => j._id === jobId);

  return (
    <div className="bg-gradient-to-br from-purple-600 to-cyan-500 min-h-screen px-10 py-20">
      <div className="max-w-4xl mx-auto">
        {!job ? (
          <div className="text-center text-white p-10 bg-white/10 rounded-2xl">
            <p className="text-xl mb-4">Job not found.</p>
            <button onClick={() => navigate("/careers")} className="underline">Back to Careers</button>
          </div>
        ) : (
          <ApplyForm job={job} onClose={() => navigate("/careers")} />
        )}
      </div>
    </div>
  );
};

export default ApplyJob;
