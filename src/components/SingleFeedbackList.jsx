import { Link } from "react-router-dom";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import whiteArrowUp from "../assets/shared/white-arrowup.svg";
import commentIcon from "../assets/shared/icon-comments.svg";
import { useProductFeeback } from "../context/ProductFeedbackContext";
import { productAction } from "../context/productReucer";

export default function SingleFeedbackList({ feedback }) {
  const { dispatch } = useProductFeeback();
  return (
    <li className="bg-white px-4 xl:pr-8 py-6 rounded-lg flex gap-6 items-start">
      <UpvoteButton dispatch={dispatch} feedback={feedback} />
      <Link
        to={`/feedback/${feedback?.id}`}
        className="flex flex-col gap-2 group"
      >
        <h2 className="text-clrText-primary font-bold text-lg cursor-pointer group-hover:text-clrBlue-300 transition-all duration-300">
          {feedback?.title}
        </h2>
        <p className="text-clrText-secondary text-sm">
          {feedback?.description}
        </p>
        <span className="px-4 py-2 transition-all capitalize duration-200 w-max text-clrBlue-300 cursor-pointer text-sm font-semibold rounded-lg block bg-clrBlue-100 hover:bg-clrBlue-200">
          {feedback?.category}
        </span>
      </Link>
      <div className="flex gap-3 items-center ml-auto self-center select-none pointer-events-none">
        <figure>
          <img src={commentIcon} alt="commentIcon" />
        </figure>
        <span className="font-semibold text-clrText-secondary text-lg">
          {feedback?.comments?.length}
        </span>
      </div>
    </li>
  );
}

const UpvoteButton = ({ dispatch, feedback }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: productAction.toggleUpvote, payload: feedback.id })
      }
      className={`flex flex-col gap-2 w-14 py-4 items-center rounded-lg transition-all duration-200 ${
        feedback?.upvoted
          ? "bg-clrBlue-300 text-white"
          : "bg-clrBlue-100 hover:bg-clrBlue-200"
      }`}
    >
      <figure>
        <img src={feedback?.upvoted ? whiteArrowUp : arrowUp} alt="arrowUp" />
      </figure>
      <span
        className={`font-semibold  ${
          feedback?.upvoted ? " text-white" : " text-clrText-primary"
        }`}
      >
        {feedback?.upvotes}
      </span>
    </button>
  );
};
