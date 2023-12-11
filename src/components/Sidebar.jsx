import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import iconClose from "../assets/shared/mobile/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

import { allCategories, roadmap } from "../utils/static";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <aside className="md:px-10 md:flex gap-4 xl:flex-col xl:px-0 xl:w-64">
      <div className="h-20 bg-gradient-to-tr from-clrBtn-voilet via-blue-600 to-green-400 px-8 flex items-center justify-between relative md:min-w-[250px] md:h-auto md:min-h-[200px] md:rounded-lg xl:min-w-max">
        <div className="flex flex-col md:mt-auto md:pb-4 ">
          <h4 className="text-xl font-semibold text-white">Frontend Mentor</h4>
          <p className="text-sm opacity-70 text-white">Feedback Board</p>
        </div>
        <button
          className="cursor-pointer hover:opacity-70 transition-all duration-200 outlineChange md:hidden p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <img
            src={menuOpen ? iconClose : hamburger}
            alt={`${menuOpen ? "iconClose" : "hamburger"}`}
          />
        </button>
        {/* mobile overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute top-full left-0 w-full h-[calc(100vh-80px)] md:hidden transition-all duration-300 ${
            menuOpen
              ? "bg-black/30 block opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }`}
        ></div>
        <div
          className={`max-w-sm w-full fixed h-[calc(100vh-80px)] bg-body px-8 py-10 top-20 md:hidden transition-all duration-300 ${
            menuOpen ? "right-0" : "right-[-24rem]"
          }`}
        >
          <div className="flex flex-col gap-8">
            <Category
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <Roadmap />
          </div>
        </div>
      </div>

      <div className="hidden md:flex gap-4 xl:flex-col">
        <Category
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Roadmap />
      </div>
    </aside>
  );
}

const Category = ({ activeCategory, setActiveCategory }) => {
  const handleCategory = (name) => {
    setActiveCategory(name);
  };
  return (
    <div className="bg-white p-4 rounded-lg">
      <ul className="flex flex-wrap items-start gap-x-4 gap-y-2 ">
        {allCategories?.map((category) => {
          return (
            <li key={category.id}>
              <button
                onClick={() => handleCategory(category?.name)}
                className={`px-3 py-2 transition-all duration-200 text-sm font-bold rounded-lg ${
                  activeCategory === category.name
                    ? "bg-clrBlue-300 text-white"
                    : "bg-clrBlue-100 hover:bg-clrBlue-200 text-clrBlue-300"
                }`}
              >
                {category.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Roadmap = () => {
  return (
    <div className="min-w-[250px] bg-white rounded-lg px-4 py-4 flex flex-col gap-4 xl:min-w-max">
      <div className="flex justify-between items-center">
        <h3 className="text-clrText-primary text-xl font-semibold">Roadmap</h3>
        <Link to="/boards" className="text-clrBtn-blue underline text-sm">
          view
        </Link>
      </div>

      <ul className="flex flex-col gap-2">
        {roadmap.map(({ name, id, color, number }) => {
          return (
            <li key={id} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div
                  style={{
                    background: color,
                  }}
                  className={`w-2 h-2 rounded-full`}
                ></div>
                <h5 className="text-clrText-primary">{name}</h5>
              </div>
              <h3>{number}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
