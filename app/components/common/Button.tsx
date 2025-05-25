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
    "relative inline-flex items-center gap-2 px-6 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ease-in-out overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-br from-indigo-600 to-blue-600 text-white"
      : "bg-white/5 text-white border border-white/20 hover:border-white/40";

  const hoverEffects =
    "hover:scale-[1.03] hover:brightness-110 hover:shadow-lg";

  const shimmerOverlay = `
    before:content-[''] before:absolute before:inset-0 before:-translate-x-full
    before:bg-gradient-to-r before:from-white/10 before:via-white/0 before:to-white/10
    before:transition-transform before:duration-500 before:rounded-xl
    group-hover:before:translate-x-0
  `;

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={`group ${base} ${styles} ${hoverEffects} ${shimmerOverlay} ${className}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
