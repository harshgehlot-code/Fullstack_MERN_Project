/**
 * Register Page Component
 * Alias for Signup page - redirects to signup
 */

import { Navigate } from "react-router-dom";

const Register = () => {
  return <Navigate to="/signup" replace />;
};

export default Register;

