
import { useState } from "react";
// Ensure the filename in services is 'applicationService.js'
import { applyForJob } from "../../services/applicationService";

const ApplyForm = ({ job, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resumeUrl, setResume] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await applyForJob({
        jobId: job._id, 
        fullName,
        email,
        phone,
        resumeUrl,
      });
      alert("Application submitted successfully!");
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Server Error: check your backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
      <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 mx-4 animate-slideUp">
        <h2 className="text-2xl font-bold mb-4 text-white">Apply for {job?.title}</h2>
        {error && <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded border border-red-500/50">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-3 bg-white/10 border border-white/20 rounded text-white" type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <input className="w-full p-3 bg-white/10 border border-white/20 rounded text-white" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="w-full p-3 bg-white/10 border border-white/20 rounded text-white" type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input className="w-full p-3 bg-white/10 border border-white/20 rounded text-white" type="url" placeholder="Resume URL" value={resumeUrl} onChange={(e) => setResume(e.target.value)} required />
          
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-3 text-white bg-white/10 rounded">Cancel</button>
            <button type="submit" disabled={loading} className="flex-1 py-3 bg-blue-600 text-white rounded font-bold">
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
