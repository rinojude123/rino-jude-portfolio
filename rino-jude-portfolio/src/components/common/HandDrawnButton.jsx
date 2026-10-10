import { Link } from "react-router-dom";

export function HandDrawnButton({ href, to, children, type = "button", onClick, disabled }) {
  const className = "hand-button";

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
