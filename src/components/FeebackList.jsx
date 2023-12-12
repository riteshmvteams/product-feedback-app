import { useProductFeeback } from "../context/ProductFeedbackContext";
import SingleFeedbackList from "./SingleFeedbackList";

export default function FeebackList() {
  const { state } = useProductFeeback();

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {state?.feedbackList?.map((feedback) => {
          return <SingleFeedbackList key={feedback.id} feedback={feedback} />;
        })}
      </ul>
    </div>
  );
}
