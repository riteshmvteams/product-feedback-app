import { useState } from "react";
import Button from "./Button";
import TextArea from "./TextArea";
import { useProductFeeback } from "../context/ProductFeedbackContext";
import { productAction } from "../context/productReucer";

export default function AddComment({ id }) {
  const [error, setError] = useState(null);
  const [checkVal, setCheckVal] = useState(false);
  const { dispatch } = useProductFeeback();
  const [leftChar, setLeftChar] = useState(256);
  const { state } = useProductFeeback();
  const [commentDetails, setCommentDetails] = useState({
    content: "",
    id: crypto.randomUUID(),
    user: state.currentUser,
  });

  const checkValidation = (value) => {
    if (value === "") {
      setError("This Field is required");
      return true;
    } else {
      setError(null);
      return false;
    }
  };

  const changeHandler = (e) => {
    setCommentDetails((prev) => ({ ...prev, content: e.target.value }));
    if (checkVal) {
      checkValidation(e.target.value);
    }
  };

  const handleAddComment = () => {
    const error = checkValidation(commentDetails.content);
    setCheckVal(true);
    if (error) return;
    dispatch({
      type: productAction.addComment,
      payload: { comment: commentDetails, id: id },
    });

    setCommentDetails({
      content: "",
      id: crypto.randomUUID(),
      user: state.currentUser,
    });
  };

  return (
    <div className="bg-white px-6 py-4 rounded-xl">
      <h2 className="text-clrText-primary font-bold text-lg tracking-wide capitalize mb-4">
        Add Comment
      </h2>

      <form className="flex flex-col gap-3">
        <TextArea
          name="comment"
          placeholder="Type your comment here"
          value={commentDetails.content}
          setValue={changeHandler}
          leftChar={leftChar}
          setLeftChar={setLeftChar}
          error={error}
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-clrText-secondary tracking-normal font-medium">
            {leftChar} Characters left
          </span>
          <Button
            onClick={handleAddComment}
            className="bg-clrBtn-voilet text-white font-bold text-sm"
          >
            Add Comment
          </Button>
        </div>
      </form>
    </div>
  );
}
