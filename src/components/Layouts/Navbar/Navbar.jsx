import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useNavbarEntrance } from "./navbarAnimation";
import MainBtn from "../../ui/MainBtn";
import { useHeaderContent } from "../../../hooks/useHeaderContent";
import menuIcon from "../../../assets/images/menu-icon.svg";

export default function Navbar({ nav }) {
  const { data: header } = useHeaderContent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  useNavbarEntrance(navRef);
  if (!nav) return null;

  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="group-btn">
          <MainBtn
            value={nav.langLabel}
            className="mx-auto mt-5"
            data-nav-item
            icon={<i className="fa-solid fa-globe" style={{ fontSize: "16px", paddingRight: "5px" }}></i>}
          />
          <MainBtn
            value={nav.contactLabel}
            className="mx-auto mt-5"
            data-nav-item
          />
        </div>

        <Link to="/" className="logo" data-nav-item>
          <img src={header?.logo} alt={header?.site_name ?? "logo"} />
        </Link>
      </div>

      {nav.links?.length > 0 &&
        createPortal(
          <>
            <button
              type="button"
              className={`navbar-menu-toggle ${isMenuOpen ? "is-open" : ""}`}
              aria-expanded={isMenuOpen}
              aria-label="فتح القائمة"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <img src={menuIcon} alt="menu-icon" className="menu-icon" />
            </button>

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

              <div className="group-btn-drawer">
                <MainBtn value={nav.contactLabel} data-nav-item />
                <MainBtn
                  value={nav.langLabel}
                  data-nav-item
                  icon={<i className="fa-solid fa-globe"></i>}
                />{" "}
              </div>
            </nav>
          </>,
          document.body,
        )}
    </header>
  );
}
