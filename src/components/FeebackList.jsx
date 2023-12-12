import { useProductFeeback } from "../context/ProductFeedbackContext";
import SingleFeedbackList from "./SingleFeedbackList";

export default function FeebackList() {
  const { state } = useProductFeeback();

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {state?.filteredList?.length >= 1 ? (
          state?.filteredList?.map((feedback) => {
            return <SingleFeedbackList key={feedback.id} feedback={feedback} />;
          })
        ) : (
          <div>No List Found</div>
        )}
      </ul>
    </div>
  );
}
