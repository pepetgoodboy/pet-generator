export default function InputField({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="font-semibold text-blue-600">{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        className="w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
