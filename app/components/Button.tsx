"use client";
interface ButtonI {
  label: string;
  color: "blue" | "white" | string;
}

const Button: React.FC<ButtonI> = ({ label, color }) => {
  const getBackgroundColor = () => {
    switch (color) {
      case "blue":
        return "bg-[#1a8cd8]";
      case "white":
        return "bg-[#e6e6e6]";
      default:
        return color;
    }
  };

  return (
    <button
      className={`
      ${getBackgroundColor()}
      py-2 rounded-3xl px-16 text-sm font-medium
      `}
    >
      {label}
    </button>
  );
};

export default Button;
