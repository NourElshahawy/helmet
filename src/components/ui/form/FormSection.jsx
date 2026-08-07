export default function FormSection({ title, children }) {
    return (
      <div className="form-section">
        <div className="head-title">
            <h2>{title}</h2>
        </div>
        <div className="form-section__body">{children}</div>
    </div>
  );
}