export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.jpg"
      alt="蓝豆包 Logo"
      className={`h-20 w-auto ${className}`}
    />
  );
}
