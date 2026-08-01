import Link from "next/link";
import type { ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

type AngularButtonProps = LinkProps | ButtonProps;

export default function AngularButton(props: AngularButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const variantClass =
    variant === "primary" ? "btn-angular-primary" : "btn-angular-outline";
  const classes = `btn-angular ${variantClass} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = props as ButtonProps;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
