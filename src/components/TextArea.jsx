export default function TextArea({
  placeholder,
  name,
  label,
  value,
  setValue,
  leftChar,
  setLeftChar,
}) {
  const handleChange = (e) => {
    if (leftChar < 0) return;
    if (leftChar) {
      setLeftChar(leftChar - e.target.value.length);
    }
    setValue(e.target.value);
  };
  return (
    <div className="flex flex-col gap-1 items-start">
      <label className="text-sm " htmlFor={name}>
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="bg-body rounded-lg px-4 py-2 h-28 w-full placeholder:text-slate-500 resize-none focus-visible:outline-clrBtn-voilet focus-visible:outline-dotted focus-visible:outline-2 transition-all duration-200"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
