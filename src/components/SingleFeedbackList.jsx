import arrowUp from "../assets/shared/icon-arrow-up.svg";
export default function SingleFeedbackList() {
  return (
    <li className="bg-white px-4 py-4 rounded-lg">
      <button className="flex flex-col gap-2 bg-clrBlue-100 px-4 hover:bg-clrBlue-200 py-4 items-center rounded-lg transition-all duration-200">
        <figure>
          <img src={arrowUp} alt="arrowUp" />
        </figure>
        <span className="font-semibold text-clrText-primary">52</span>
      </button>
    </li>
  );
}
