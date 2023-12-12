import { Link } from "react-router-dom";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import whiteArrowUp from "../assets/shared/white-arrowup.svg";
import commentIcon from "../assets/shared/icon-comments.svg";
import { useProductFeeback } from "../context/ProductFeedbackContext";
import { productAction } from "../context/productReucer";

export default function SingleFeedbackList({ feedback }) {
  const { dispatch } = useProductFeeback();
  return (
    <li className="bg-white px-4 xl:pr-8 py-6 rounded-lg flex gap-6 flex-col md:flex-row items-start">
      <div className="hidden md:block">
        <UpvoteButton dispatch={dispatch} feedback={feedback} />
      </div>
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
      <div className="md:ml-auto md:self-center flex justify-between w-full md:w-auto">
        <div className="md:hidden">
          <UpvoteButton dispatch={dispatch} feedback={feedback} horizontal />
        </div>
        <div className="flex gap-3 items-center select-none pointer-events-none">
          <figure>
            <img src={commentIcon} alt="commentIcon" />
          </figure>
          <span className="font-semibold text-clrText-secondary text-lg">
            {feedback?.comments?.length}
          </span>
        </div>
      </div>
    </li>
  );
}

const UpvoteButton = ({ dispatch, feedback, horizontal = false }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: productAction.toggleUpvote, payload: feedback.id })
      }
      className={`flex gap-2 items-center rounded-lg transition-all duration-200 ${
        feedback?.upvoted
          ? "bg-clrBlue-300 text-white"
          : "bg-clrBlue-100 hover:bg-clrBlue-200"
      } ${horizontal ? "flex-row px-4 py-2" : "flex-col w-14 py-4"}`}
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
