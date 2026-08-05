import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavbarEntrance } from "./navbarAnimation";
import "../../../styles/layout/navbar.css";
import MainBtn from "../../ui/MainBtn";

export default function Navbar({ nav }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  useNavbarEntrance(navRef);
  if (!nav) return null;
  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="group-btn">
          <MainBtn
            value={nav.contactLabel}
            className="mx-auto mt-5"
            data-nav-item
          />
          <MainBtn
            value={nav.langLabel}
            className="mx-auto mt-5"
            data-nav-item
          />
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
                <span className="navbar-drawer__link-shine" />
                {link.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}