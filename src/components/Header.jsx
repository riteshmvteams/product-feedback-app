import Button from "./Button";
import suggestionIcon from "../assets/suggestions/icon-suggestions.svg";
import { sortedBy } from "../utils/static";

import DropDown from "./DropDown";

export default function Header() {
  return (
    <header className="bg-clrBlue-400 py-2 px-8 md:rounded-xl md:px-4 mt-20 md:mt-0">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <figure className="hidden md:block">
            <img className="" src={suggestionIcon} alt={suggestionIcon} />
          </figure>
          <div className="text-white">
            <h2 className="text-base sm:text-lg md:text-2xl font-bold">
              6 Suggestions
            </h2>
          </div>

          <div className="ml-4">
            <DropDown type="sort" options={sortedBy} />
          </div>
        </div>
        <Button className="bg-clrBtn-voilet text-white font-semibold">
          + Add Feedback
        </Button>
      </div>
    </header>
  );
}
