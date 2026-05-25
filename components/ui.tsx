import Link from "next/link";

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-content px-6 ${className}`}>
      {children}
    </section>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-600 transition-colors";
  const styles =
    variant === "primary"
      ? "bg-steel text-white hover:bg-steel-dark"
      : "border border-white/20 text-white hover:border-steel hover:text-steel-light";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-sm font-600 uppercase tracking-[0.2em] text-steel-light">
      {children}
    </p>
  );
}
