import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductFeeback } from "../context/ProductFeedbackContext";
import HeaderTop from "../components/HeaderTop";
import SingleFeedbackList from "../components/SingleFeedbackList";
import CommentListing from "../components/CommentListing";
import AddComment from "../components/AddComment";

export default function SingleProductFeedbackPage() {
  const { feedbackid } = useParams();
  const { state } = useProductFeeback();
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    const filteredFeedback = state?.feedbackList?.filter(
      (list) => list?.id === +feedbackid
    );
    if (filteredFeedback.length > 0) {
      setFeedback(filteredFeedback[0]);
    } else {
      setFeedback(null);
    }
  }, [feedbackid, state?.feedbackList]);

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full px-4 pt-8 md:pt-0">
      {feedback === null ? (
        <div>You have Entered the wrong id</div>
      ) : (
        <>
          <HeaderTop feedback={feedback} />
          <SingleFeedbackList feedback={feedback} />
          <CommentListing feedback={feedback} />
          <AddComment id={feedback?.id} />
        </>
      )}
    </div>
  );
}
