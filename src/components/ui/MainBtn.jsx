import { Link } from 'react-router-dom'

export default function MainBtn({
  value,
  href,
  onClick,
  showIcon = true,
  className = "",
  loading,
  icon,
}) {
  const displayIcon = icon ?? (showIcon && <i className="fa-solid fa-chevron-left"></i>);

  return href ? (
    <Link to={href} className={`main-btn ${className}`}>
      {value}
      {displayIcon}
      {loading && <i className="fa-solid fa-spinner fa-spin"></i>}
    </Link>
  ) : (
    <button onClick={onClick} className={`main-btn ${className}`}>
      {value}
      {displayIcon}
      {loading && <i className="fa-solid fa-spinner fa-spin"></i>}
    </button>
  );
}