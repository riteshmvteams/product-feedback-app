export default function TextArea({
  placeholder,
  name,
  label,
  value,
  setValue,
  leftChar,
  setLeftChar,
  subLabel,
  error,
}) {
  const handleChange = (e) => {
    if (leftChar < 0) return;
    if (leftChar) {
      setLeftChar(256 - e.target.value.length);
    }
    setValue(e);
  };
  return (
    <div className="flex flex-col items-start">
      <label
        className="text-base font-semibold text-clrText-primary"
        htmlFor={name}
      >
        {label}
      </label>
      <p className="text-clrText-secondary text-sm mb-2">{subLabel}</p>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="bg-body rounded-lg px-4 py-2 h-24 text-sm w-full placeholder:text-slate-500 resize-none placeholder:text-base focus-visible:outline-clrBtn-voilet focus-visible:outline-dashed focus-visible:outline-1 transition-all duration-200"
        placeholder={placeholder}
      ></textarea>
      {error && (
        <p className="text-red-500 bg-red-50 px-4 rounded-md text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
