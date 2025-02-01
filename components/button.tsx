import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  colors?: "add" | "edit" | "delete";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  colors = "add",
  className,
}) => {
  const baseStyles = "px-4 py-2 text-white rounded-lg disabled:bg-gray-400";
  const variantStyles = {
    add: "bg-green-500",
    edit: "bg-blue-500",
    delete: "bg-red-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[colors]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
