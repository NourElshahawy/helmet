import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function VideoModal({ isOpen, onClose, videoUrl, title }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // منع سكرول الصفحة اللي وراء المودال وهو مفتوح
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="video-modal__close"
          onClick={onClose}
          aria-label="إغلاق"
        >
          ×
        </button>

        {title && <h3 className="video-modal__title">{title}</h3>}

        <div className="video-modal__player">
          <video src={videoUrl} controls autoPlay className="video-modal__video" />
        </div>
      </div>
    </div>,
    document.body
  );
}