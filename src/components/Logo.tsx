import logo from "@/assets/theseam-logo.png";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="THE SEAM. — Connecting Creatives and Brands"
      className={`${className} w-auto object-contain`}
      width={120}
      height={120}
    />
  );
}
