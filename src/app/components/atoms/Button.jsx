import Link from "next/link";
export default function Button({ children, href }) {
  return (
    <Link href={href} className="hero-button">
      {children}
    </Link>
  );
}