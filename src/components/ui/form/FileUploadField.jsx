import { useRef, useState, useEffect } from "react";

export default function FileUploadField({
    label,
    name,
    setValue,
    error,
    fullWidth = false,
    multiple = false,
  }) {
    const inputRef = useRef(null);
    const [files, setFiles] = useState([]);
  
    useEffect(() => {
      return () => {
        files.forEach((f) => URL.revokeObjectURL(f.previewUrl));
      };
    }, [files]);
  
    const handleChange = (e) => {
      const selectedFiles = Array.from(e.target.files ?? []);
      if (selectedFiles.length === 0) return;
  
      const newFiles = selectedFiles.map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
      }));
  
      const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;
      setFiles(updatedFiles);
      setValue(name, multiple ? updatedFiles.map((f) => f.file) : updatedFiles[0].file);
      e.target.value = "";
    };
  
    const removeFile = (index) => {
      const updated = files.filter((_, i) => i !== index);
      setFiles(updated);
      setValue(name, multiple ? updated.map((f) => f.file) : updated[0]?.file ?? null);
    };
  
    return (
      <div className={`form-field ${fullWidth ? "form-field--full" : ""}`}>
        <label className="form-field__label">{label}</label>
  
        <div className="file-field">
          <button
            type="button"
            className="file-field__btn"
            onClick={() => inputRef.current?.click()}
          >
            ارفاق
          </button>
          <span className="file-field__name">
            {files.length > 0
              ? `${files.length} ${files.length === 1 ? "ملف" : "ملفات"} مختارة`
              : "لم يتم اختيار ملف"}
          </span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple={multiple}
            hidden
            onChange={handleChange}
          />
        </div>
  
        {files.length > 0 && (
          <div className="file-field__previews">
            {files.map((f, i) => (
              <div key={i} className="file-preview">
                <img src={f.previewUrl} alt={f.file.name} className="file-preview__img" />
                <button
                  type="button"
                  className="file-preview__remove"
                  onClick={() => removeFile(i)}
                  aria-label="إزالة الصورة"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
  
        {error && <span className="form-field__error">{error}</span>}
      </div>
    );
  }