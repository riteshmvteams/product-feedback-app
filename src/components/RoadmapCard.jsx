import commentIcon from "../assets/shared/icon-comments.svg";
import { useProductFeeback } from "../context/ProductFeedbackContext";
import { FeedbackDetails, UpvoteButton } from "./SingleFeedbackList";

export default function RoadmapCard({ feedback, color }) {
  const { dispatch } = useProductFeeback();
  return (
    <li
      className="bg-white px-4 xl:pr-8 py-6 rounded-lg flex gap-6 flex-col items-start border-t-4 "
      style={{
        borderTopColor: color,
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="block w-2 h-2 rounded-full"
          style={{
            background: color,
          }}
        ></span>
        <p className="text-clrText-secondary capitalize">{feedback.status}</p>
      </div>
      <FeedbackDetails feedback={feedback} />

      <div className="flex items-center justify-between w-full">
        <UpvoteButton dispatch={dispatch} feedback={feedback} horizontal />
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
