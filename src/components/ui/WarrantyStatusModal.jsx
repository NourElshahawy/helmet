import { createPortal } from "react-dom";
import { useEffect } from "react";
import { WARRANTY_STATUS_CONFIG } from "./warrantyStatusConfig";

export default function WarrantyStatusModal({ isOpen, onClose, status, data }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !status) return null;

  const config = WARRANTY_STATUS_CONFIG[status];
  if (!config) return null;

  return createPortal(
    <div className="warranty-status-overlay" onClick={onClose}>
      <div
        className={`warranty-status-modal warranty-status-modal--${config.iconColor}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="warranty-status-modal__close"
          onClick={onClose}
          aria-label="إغلاق"
        >
          ×
        </button>

        <div className="warranty-status-modal__image">
          <img src={config.image} alt={config.title} />
        </div>

        <h3 className="warranty-status-modal__title">{config.title}</h3>

        <p className="warranty-status-modal__desc">
          {config.getDescription(data)}
        </p>

        {config.fields.length > 0 && data && (
          <div className="warranty-status-modal__meta">
            {config.fields.map((field) => (
              <div
                key={field.key}
                className="warranty-status-modal__meta-item"
              >
                <span className="warranty-status-modal__meta-label">{field.label}</span>
                <span className="warranty-status-modal__meta-separator">:</span>
                <span className="warranty-status-modal__meta-value">{data[field.key]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
