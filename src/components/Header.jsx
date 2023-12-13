import Button from "./Button";
import suggestionIcon from "../assets/suggestions/icon-suggestions.svg";
import { sortedBy } from "../utils/static";

import DropDown from "./DropDown";
import { useProductFeeback } from "../context/ProductFeedbackContext";

export default function Header() {
  const { dispatch } = useProductFeeback();

  return (
    <header className="bg-clrBlue-400 py-4 px-2 sm:px-8 md:rounded-xl md:px-4 mt-20 md:mt-0">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <figure className="hidden md:block">
            <img className="" src={suggestionIcon} alt={suggestionIcon} />
          </figure>
          <div className="text-white hidden sm:block">
            <h2 className="text-base sm:text-lg md:text-2xl font-bold">
              6 Suggestions
            </h2>
          </div>

          <div className="sm:ml-4">
            <DropDown type="sort" options={sortedBy} dispatch={dispatch} />
          </div>
        </div>
        <Button
          as="link"
          to="/feedback/add"
          className="bg-clrBtn-voilet text-white font-semibold text-sm"
        >
          + Add Feedback
        </Button>
      </div>
    </header>
  );
}
