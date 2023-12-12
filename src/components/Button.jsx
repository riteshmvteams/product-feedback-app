import React from "react";

export default function Button({
  children,
  className,
  onClick,
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-2.5 px-6 rounded-lg outlineChange hover:opacity-70 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
