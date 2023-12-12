import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  className,
  onClick,
  type = "button",
  as = "button",
  to,
}) {
  if (as === "link") {
    return (
      <Link
        to={to}
        className={`py-2.5 px-6 rounded-lg outlineChange hover:opacity-70 transition-all duration-300 ${className}`}
      >
        {children}
      </Link>
    );
  }

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
