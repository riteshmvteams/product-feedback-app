import { useState } from "react";
import checkIcon from "../assets/shared/icon-check.svg";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import arrowDown from "../assets/shared/icon-arrow-down.svg";
import { productAction } from "../context/productReucer";

export default function DropDown({
  type = "input",
  options,
  dispatch,
  label,
  subLabel,
}) {
  const [selected, setSelected] = useState(options[0].name);
  const [open, setOpen] = useState(false);

  const handleOption = (selectedOption) => {
    dispatch({ type: productAction.sort, payload: selectedOption });
    setSelected(selectedOption);
  };

  return (
    <div>
      {label && (
        <>
          <label className="text-base font-semibold text-clrText-primary">
            {label}
          </label>
          <p className="text-clrText-secondary text-sm mb-2">{subLabel}</p>
        </>
      )}

      <div className="relative">
        {type === "input" ? (
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="bg-body text-left flex justify-between items-center rounded-lg px-4 py-4 text-sm w-full placeholder:text-slate-500 resize-none placeholder:text-base hover:outline-clrBtn-voilet hover:outline-dashed hover:outline-1 focus-visible:outline-clrBtn-voilet focus-visible:outline-dashed focus-visible:outline-1 transition-all duration-200"
          >
            <span>{selected}</span>
            <figure>
              <img
                src={open ? arrowUp : arrowDown}
                alt="arrowDown"
                className="transition-all duration-300"
              />
            </figure>
          </button>
        ) : (
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 hover:opacity-70 transition-all duration-300 text-white"
          >
            <span className="text-sm">Sort By:</span>
            <span className="text-sm font-semibold">{selected}</span>
            <figure>
              <img
                src={open ? arrowUp : arrowDown}
                alt="arrowDown"
                className="transition-all duration-300"
              />
            </figure>
          </button>
        )}
        <div
          className={`absolute top-[110%] ${open ? "block" : "hidden"} ${
            type !== "input" ? "w-[150%]" : "w-full"
          }`}
        >
          <ul
            className={`bg-white rounded-lg overflow-hidden ${
              type === "input" ? "" : "shadow-lg shadow-blue-100"
            }`}
          >
            {options?.map((option) => {
              return (
                <li
                  key={option?.name}
                  className="border-b border-blue-100 group"
                >
                  <button
                    onClick={() => handleOption(option.name)}
                    className="py-3 px-4 w-full text-left hover:bg-clrBlue-100 text-sm text-slate-500 flex justify-between items-center"
                  >
                    <span className="group-hover:text-clrBtn-voilet">
                      {option.name}
                    </span>
                    {selected === option.name && (
                      <span>
                        <img src={checkIcon} alt="checkIcon" />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
