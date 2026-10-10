export function TechnicalLabel({ children, className = "" }) {
  return <p className={`technical-label ${className}`.trim()}>{children}</p>;
}
