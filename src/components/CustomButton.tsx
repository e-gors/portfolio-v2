import React from "react";

type ButtonVariant = "contained" | "outlined" | "text";

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
    "group inline-flex items-center justify-center gap-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const variantStyles: Record<ButtonVariant, string> = {
    contained: "btn-accent",
    outlined: "btn-outline",
    text: "bg-transparent text-[var(--btn-accent)] cursor-pointer",
  };

  const iconStyles =
    "flex items-center transition-transform duration-200 ease-out group-hover:-translate-y-[2px]";

  return (
    <button
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {startIcon && (
        <span className={iconStyles}>{startIcon}</span>
      )}

      <span>{children}</span>

      {endIcon && (
        <span className={iconStyles}>{endIcon}</span>
      )}
    </button>
  );
}
