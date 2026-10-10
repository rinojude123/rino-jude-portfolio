import { Link } from "react-router-dom";
import { Footer } from "../components/footer/Footer.jsx";
import { Navbar } from "../components/navigation/Navbar.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";
import { site } from "../data/site.js";

export function NotFound() {
  useDocumentTitle(`Page not found — ${site.name}`, site.metaDescription, `${site.siteUrl}/404`);

  return (
    <>
      <Navbar />
      <main id="main" className="not-found">
        <p className="technical-label">404 / SHEET MISSING</p>
        <h1>This page is not in the drawing set.</h1>
        <Link className="hand-button" to="/">
          RETURN HOME →
        </Link>
      </main>
      <Footer />
    </>
  );
}
