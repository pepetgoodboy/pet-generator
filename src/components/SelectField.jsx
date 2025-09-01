export default function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  required,
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="font-semibold text-blue-600">{label}</label>
      <select
        name={name}
        id={name}
        className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Pilih {label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
