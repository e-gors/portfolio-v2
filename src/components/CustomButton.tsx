import React from "react";

type ButtonVariant =
  | "contained"
  | "outlined"
  | "text"
  | "danger"
  | "warning";

interface CustomButtonProps {
  variant?: ButtonVariant;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  title?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  contained:
    "btn-accent focus-visible:ring-[var(--btn-accent)]",

  outlined:
    "btn-outline focus-visible:ring-[var(--btn-accent)]",

  text:
    "bg-transparent text-[var(--btn-accent)] hover:underline focus-visible:ring-[var(--btn-accent)]",

  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",

  warning:
    "bg-yellow-500 text-black hover:bg-yellow-600 focus-visible:ring-yellow-500",
};

export default function CustomButton({
  variant = "contained",
  startIcon,
  endIcon,
  title,
  disabled = false,
  className = "",
  onClick,
  children,
  type = "button",
}: CustomButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-colors " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer " +
    "disabled:opacity-60 disabled:cursor-not-allowed";

  const iconStyles =
    "flex items-center transition-transform duration-200 ease-out " +
    "group-hover:-translate-y-[2px]";

  return (
    <button
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={[
        baseStyles,
        VARIANT_STYLES[variant],
        className,
      ].join(" ")}
    >
      {startIcon && <span className={iconStyles}>{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className={iconStyles}>{endIcon}</span>}
    </button>
  );
}
