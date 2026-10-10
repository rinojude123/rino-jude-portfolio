import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../data/navigation.js";
import { site } from "../../data/site.js";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  return (
    <header className="navbar">
      <Link className="brand" to="/#home">
        {site.name.toUpperCase()}
      </Link>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="nav-toggle-lines" aria-hidden="true" />
      </button>
      <nav id="site-nav" aria-label="Primary">
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={onHome && location.hash === `#${item.id}` ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
