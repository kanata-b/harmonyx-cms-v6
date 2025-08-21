import { Button as ShadcnButton, buttonVariants } from "@/components/ui/button";
import { LucideIcon, ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps {
  id: string;
  label?: string | null;
  variant?: string | null | undefined; // Accept any string from Directus
  url?: string | null;
  type?: "page" | "post" | "url" | "submit" | null;
  page?: { permalink: string | null };
  post?: { slug: string | null };
  size?: "default" | "sm" | "lg" | "icon";
  icon?: "arrow" | "plus";
  customIcon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  block?: boolean;
}

const Button = ({
  id,
  label,
  variant,
  url,
  type,
  page,
  post,
  size = "default",
  icon,
  customIcon,
  iconPosition = "left",
  className,
  onClick,
  disabled = false,
  block = false,
}: ButtonProps) => {
  const icons: Record<string, LucideIcon> = {
    arrow: ArrowRight,
    plus: Plus,
  };

  const Icon = customIcon || (icon ? icons[icon] : null);

  const href = (() => {
    if (type === "page" && page?.permalink) return page.permalink;
    if (type === "post" && post?.slug) return `/blog/${post.slug}`;

    return url || undefined;
  })();

  // Convert string variant to valid button variant
  const validVariant = (() => {
    const validVariants = [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link",
    ];
    if (variant && validVariants.includes(variant)) {
      return variant as
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | "link";
    }
    return "default";
  })();

  const buttonClasses = cn(
    buttonVariants({ variant: validVariant, size }),
    className,
    disabled && "opacity-50 cursor-not-allowed",
    block && "w-full"
  );

  const content = (
    <span className="flex items-center space-x-2">
      {icon && iconPosition === "left" && Icon && (
        <Icon className="size-4 shrink-0" />
      )}
      {label && <span>{label}</span>}
      {icon && iconPosition === "right" && Icon && (
        <Icon className="size-4 shrink-0" />
      )}
    </span>
  );

  if (href) {
    return (
      <ShadcnButton
        id={id}
        asChild
        variant={validVariant}
        size={size}
        className={buttonClasses}
        disabled={disabled}
      >
        {href.startsWith("/") ? (
          <Link href={href}>{content}</Link>
        ) : (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        )}
      </ShadcnButton>
    );
  }

  return (
    <ShadcnButton
      id={id}
      variant={validVariant}
      size={size}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </ShadcnButton>
  );
};

export default Button;
