import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  as: "button";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  as?: "link";
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 border-transparent focus:ring-primary/50",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90 border-transparent focus:ring-secondary/50",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    children,
    className = "",
  } = props;

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (props.as === "button") {
    return (
      <button
        type={props.type ?? "button"}
        onClick={props.onClick}
        disabled={props.disabled}
        className={combinedClassName}
      >
        {children}
      </button>
    );
  }

  const href = props.href;
  const isExternal = props.external ?? href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
