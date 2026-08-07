import { useState } from "react";
import VideoModal from "./VideoModal";
import "../../styles/ui/video-modal.css";

export default function WarrantyVideoButton({ videoUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="video-trigger-btn"
        onClick={() => setIsOpen(true)}
      >
        <i className="fa-solid fa-circle-play"></i>
        مشاهدة شرح سريع
      </button>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl={videoUrl}
        title="شرح تفعيل الضمان"
      />
    </>
  );
}