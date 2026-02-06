
import { useState } from "react";
import JobCard from "../components/careers/JobCard";
import ApplyForm from "../components/careers/ApplyForm";

const Careers = () => {
  const dummyJobs = [
    { _id: "65c1a2b3c4d5e6f7a8b9c0d1", title: "Frontend Developer", department: "Engineering", location: "Remote", experience: "0-2 Years", description: "Build UIs with React." },
    { _id: "65c1a2b3c4d5e6f7a8b9c0d2", title: "Backend Developer", department: "Engineering", location: "Bangalore", experience: "1-3 Years", description: "Node.js and MongoDB." },
    { _id: "65c1a2b3c4d5e6f7a8b9c0d3", title: "Full Stack Developer", department: "Product", location: "Hybrid", experience: "2-4 Years", description: "MERN Stack expert." },
    { _id: "65c1a2b3c4d5e6f7a8b9c0d4", title: "DevOps Engineer", department: "Infrastructure", location: "Remote", experience: "3-5 Years", description: "AWS and Docker." },
    { _id: "65c1a2b3c4d5e6f7a8b9c0d5", title: "UI/UX Designer", department: "Design", location: "Mumbai", experience: "1-3 Years", description: "Design intuitive interfaces." },
    { _id: "65c1a2b3c4d5e6f7a8b9c0d6", title: "Data Analyst", department: "Analytics", location: "Delhi", experience: "2-4 Years", description: "Data insights and reporting." }
  ];

  const [jobs] = useState(dummyJobs);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 min-h-screen px-10 py-20">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-12">
        Careers at NexTech Solutions
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} onApply={() => setSelectedJob(job)} />
        ))}
      </div>
      {selectedJob && (
        <ApplyForm job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default Careers;
