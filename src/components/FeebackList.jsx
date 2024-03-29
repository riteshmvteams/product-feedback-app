import { useProductFeeback } from "../context/ProductFeedbackContext";
import SingleFeedbackList from "./SingleFeedbackList";
import NoFeedbackListAvailable from "./NoFeedbackListAvailable";

export default function FeebackList() {
  const { state } = useProductFeeback();

  return (
    <div className="px-3 sm:px-6 md:px-0">
      <ul className="flex flex-col gap-4">
        {state?.filteredList?.length >= 1 ? (
          state?.filteredList?.map((feedback) => {
            return <SingleFeedbackList key={feedback.id} feedback={feedback} />;
          })
        ) : (
          <NoFeedbackListAvailable />
        )}
      </ul>
    </div>
  );
}
