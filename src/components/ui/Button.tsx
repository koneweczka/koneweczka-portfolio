import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  getButtonClasses,
  type ButtonSize,
  type ButtonVariant,
} from "./button-styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClasses({ variant, size, className })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
