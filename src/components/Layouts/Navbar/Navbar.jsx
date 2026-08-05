import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavbarEntrance } from "./navbarAnimation";
import "../../../styles/layout/navbar.css";

export default function Navbar({ nav }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  useNavbarEntrance(navRef);
  if (!nav) return null;
  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="group-btn">
          <button type="button" className="main-btn" data-nav-item>
            <i className="fa-solid fa-globe"></i>
            {nav.langLabel}
          </button>
          <Link to={nav.contactHref} className="main-btn" data-nav-item>
            <i className="fa-solid fa-chevron-left"></i>
            {nav.contactLabel}
          </Link>
        </div>

        <Link to="/" className="logo" data-nav-item>
          <img src="/assets/logo.png" alt="logo" />
        </Link>

        {nav.links?.length > 0 && (
          <button
            type="button"
            className={`navbar-menu-toggle ${isMenuOpen ? "is-open" : ""}`}
            aria-expanded={isMenuOpen}
            aria-label="فتح القائمة"
            onClick={() => setIsMenuOpen((open) => !open)}
            data-nav-item
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
                data-nav-item
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