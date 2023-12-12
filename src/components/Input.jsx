export default function Input({
  placeholder,
  name,
  label,
  value,
  setValue,
  leftChar,
  setLeftChar,
  subLabel,
}) {
  return (
    <div className="flex flex-col items-start">
      <label
        className="text-base font-semibold text-clrText-primary"
        htmlFor={name}
      >
        {label}
      </label>
      <p className="text-clrText-secondary text-sm mb-2">{subLabel}</p>
      <input
        name={name}
        id={name}
        className="bg-body rounded-lg px-4 py-4 text-sm w-full placeholder:text-slate-500 resize-none placeholder:text-base focus-visible:outline-clrBtn-voilet focus-visible:outline-dashed focus-visible:outline-1 transition-all duration-200"
        placeholder={placeholder}
      />
    </div>
  );
}
