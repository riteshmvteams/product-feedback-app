import hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import iconClose from "../assets/shared/mobile/icon-close.svg";

export default function Sidebar() {
  return (
    <aside className="">
      <div className="py-6 bg-violet-400 px-8 flex items-center justify-between">
        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-white">Frontend Mentor</h4>
          <p className="text-sm opacity-70 text-white">Feedback Board</p>
        </div>
        <button className="cursor-pointer hover:opacity-70 transition-all duration-200 outlineChange p-2">
          <img src={hamburger} alt="hamburger" />
        </button>
      </div>
    </aside>
  );
}
