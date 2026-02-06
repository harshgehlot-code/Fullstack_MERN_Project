/**
 * Main App Component
 * Root component that sets up routing and layout structure
 */

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Page components
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ApplyJob from "./pages/ApplyJob";
import Services from "./pages/Services";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Register from "./pages/Register";

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation bar - appears on all pages */}
      <Navbar />

      {/* Main content area */}
      <main className="pt-0">
        {/* Route definitions */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      
      {/* Footer - appears on all pages */}
      <Footer />
    </div>
  );
}

export default App;
