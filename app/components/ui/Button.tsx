"use client";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  variant = "primary",
  ariaLabel,
  children,
  className = "",
  disabled = false,
}) => {
  const base =
    "relative inline-flex items-center justify-center px-6 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ease-in-out group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-br from-indigo-600 to-blue-600 text-white"
      : "bg-white/5 text-white border border-white/20 hover:border-white/40";

  const hoverEffects = "hover:scale-[1.02] hover:shadow-md";

  const overlay =
    "before:content-[''] before:absolute before:inset-0 before:left-0 before:w-full before:bg-white/10 before:translate-x-[-100%] group-hover:before:translate-x-0 before:transition-transform before:duration-500 before:rounded-xl";

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`${base} ${styles} ${hoverEffects} ${overlay} ${className}`.trim()}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
