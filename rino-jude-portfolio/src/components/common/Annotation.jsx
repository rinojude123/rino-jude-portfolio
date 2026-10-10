export function Annotation({ children, className = "", style }) {
  return (
    <p className={`annotation ${className}`.trim()} style={style}>
      {children}
    </p>
  );
}
