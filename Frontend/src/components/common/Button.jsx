/**
 * Button Component
 * Reusable button component with different variants
 * @param {ReactNode} children - Button content
 * @param {string} variant - Button style variant ("primary" or "outline")
 * @param {Object} props - Additional button props
 */

const Button = ({ children, variant = "primary", ...props }) => {
  // Base styles applied to all buttons
  const base =
    "px-6 py-3 rounded-lg font-medium transition";

  // Variant-specific styles
  const styles = {
    primary: "bg-secondary text-white hover:bg-blue-700",
    outline:
      "border border-secondary text-secondary hover:bg-secondary hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
