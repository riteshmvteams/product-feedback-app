import { useState } from "react";
import checkIcon from "../assets/shared/icon-check.svg";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import arrowDown from "../assets/shared/icon-arrow-down.svg";

export default function DropDown({ type = "input", options }) {
  const [selected, setSelected] = useState(options[0].name);
  const [open, setOpen] = useState(false);

  const handleOption = (selectedOption) => {
    setSelected(selectedOption);
  };

  return (
    <div className="relative">
      {type === "input" ? (
        <button>hello</button>
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
        className={`absolute top-10 ${open ? "block" : "hidden"} ${
          type !== "input" ? "w-[150%]" : "w-full"
        }`}
      >
        <ul className="bg-white shadow-lg rounded-lg overflow-hidden shadow-blue-100 ">
          {options?.map((option) => {
            return (
              <li key={option.id} className="border-b border-blue-100 group">
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
  );
}
