import { Link } from "react-router-dom";
import "../../../styles/layout/footer.css";

export default function Footer({ footer }) {
  if (!footer) return null;

  return (
    <footer className="hm-footer text-center py-5">
      <Link to="/" className="hm-logo d-inline-flex flex-column mb-4">
        <span className="hm-logo__text hm-logo__text--light">
          {footer.logoTop} <strong>{footer.logoBottom}</strong>
        </span>
      </Link>

      <nav className="d-flex justify-content-center flex-wrap gap-4 mb-4">
        {footer.links.map((link) => (
          <Link key={link.href} to={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hm-footer__bottom d-flex justify-content-between flex-wrap container pt-3">
        <span>
          {footer.poweredByLabel}{" "}
          <a href={footer.poweredByHref}>{footer.poweredByName}</a>
        </span>
        <span>© {footer.copyright} HELMET</span>
      </div>
    </footer>
  );
}
