import { Link } from "react-router-dom";
import HexPattern from "../../Home/HexPattern";
import { useIsMobile } from '../../../hooks/useIsMobile';
export default function Footer({ footer }) {
  const isMobile = useIsMobile();
  if (!footer) return null;
  return (
    <footer className="site-footer">
      <HexPattern hexWidth={isMobile ? 90 : 160} hexHeight={isMobile ? 130 : 230} cols={isMobile ? 8 : 8} rows={isMobile ? 8 : 3} />

      <div className="site-footer__content">
        <Link to="/" className="site-footer__logo">
          <img src="/assets/logo.png" alt="logo" />
        </Link>

        {footer.links?.length > 0 && (
          <nav className="site-footer__links">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="site-footer__link"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="site-footer__bottom">
          <span className="site-footer__copyright">
            <i className="fa-regular fa-copyright"></i> {footer.copyright}{" "}
          </span>
          <span className="site-footer__powered">
            {footer.poweredByLabel}{" "}
            <a href={footer.poweredByHref} target="_blank" rel="noreferrer">
              {footer.poweredByName}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
