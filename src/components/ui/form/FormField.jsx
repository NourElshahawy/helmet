export default function FormField({
  label,
  name,
  type = "text",
  as = "input",
  placeholder,
  value,
  onChange,
  error,
  fullWidth = false,
  options = [], // [{ value, label }] — بتستخدم بس لو as="select"
  ...rest
}) {
  return (
    <div className={`form-field ${fullWidth ? "form-field--full" : ""}`}>
      {label && (
        <label htmlFor={name} className="form-field__label">
          {label}
        </label>
      )}

      {as === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="form-field__input form-field__select"
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-field__input form-field__textarea"
          {...rest}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-field__input"
          {...rest}
        />
      )}

      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
}
