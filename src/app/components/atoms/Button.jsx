export default function Button({ children, href }) {
  return (
    <a href={href} className="hero-button">
      {children}
    </a>
  );
}