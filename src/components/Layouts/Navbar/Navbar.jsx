import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/layout/navbar.css";
// import logo from "../../../../public/assets/logo.png";
// import menuIcon from "../../../../public/assets/menu-icon.svg";

export default function Navbar({ nav }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!nav) return null;
console.log("nav object:", nav);
console.log("nav.links:", nav.links);
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="d-flex gap-2">
          <button type="button" className="main-btn">
            <i className="fa-solid fa-globe"></i>
            {nav.langLabel}
          </button>
          <Link to={nav.contactHref} className="main-btn">
            <i className="fa-solid fa-chevron-left"></i>
            {nav.contactLabel}
          </Link>
        </div>

        <Link to="/" className="logo">
          <img src="/assets/logo.png" alt="logo" />
        </Link>

        {nav.links?.length > 0 && (
          <button
            type="button"
            className={`navbar-menu-toggle ${isMenuOpen ? "is-open" : ""}`}
            aria-expanded={isMenuOpen}
            aria-label="فتح القائمة"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <img src="/assets/menu-icon.svg" alt="menu" className="menu-icon" />
          </button>
        )}
      </div>

      {nav.links?.length > 0 && (
        <>
          

          {/* القايمة المنزلقة نفسها */}
          <nav className={`navbar-drawer ${isMenuOpen ? "is-open" : ""}`}>
            {nav.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="navbar-drawer__link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}