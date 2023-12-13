import { useState } from "react";
import { useProductFeeback } from "../context/ProductFeedbackContext";
import TextArea from "./TextArea";
import Button from "./Button";
import { productAction } from "../context/productReucer";

export default function CommentListing({ feedback }) {
  return (
    <div className="bg-white px-6 py-4 rounded-xl">
      {feedback?.comments?.length < 1 ? (
        <div className="text-center font-bold text-clrText-secondary text-xl py-10">
          No Comments Available
        </div>
      ) : (
        <>
          <h2 className="text-lg font-bold text-clrText-primary">
            {feedback?.comments?.length} Comments
          </h2>

          <ul className="flex flex-col">
            {feedback?.comments?.map((comment, index) => {
              return (
                <div key={index} className={`relative`}>
                  <SingleComment
                    id={feedback?.id}
                    comment={comment}
                    commentId={comment.id}
                  />
                  {comment?.replies && (
                    <ul className="ml-16 ">
                      <div className="absolute top-24 left-[18px] w-[1px] rounded-xl h-[70%] bg-slate-100"></div>
                      {comment?.replies?.map((reply, index) => {
                        return (
                          <SingleComment
                            id={feedback?.id}
                            key={index}
                            comment={reply}
                            replyTo={reply.replyingTo}
                            commentId={comment.id}
                          />
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

const SingleComment = ({ comment, replyTo, id, commentId }) => {
  const [error, setError] = useState(null);
  const [checkVal, setCheckVal] = useState(false);
  const { state } = useProductFeeback();
  const [reply, setReply] = useState(false);
  const [replyDetails, setReplyDetails] = useState({});
  const { dispatch } = useProductFeeback();

  const checkValidation = (value) => {
    if (value === "") {
      setError("This Field is required");
      return true;
    } else {
      setError(null);
      return false;
    }
  };

  const initiateReply = (userName) => {
    setReply((prev) => !prev);
    setReplyDetails({
      content: "",
      replyingTo: userName,
      user: state.currentUser,
    });
  };

  const postReply = () => {
    const error = checkValidation(replyDetails.content);
    setCheckVal(true);
    if (error) return;
    dispatch({
      type: productAction.addReply,
      payload: { reply: replyDetails, id: id, commentId: commentId },
    });
    setReply(false);

    setReplyDetails({});
  };

  return (
    <>
      <li className="flex items-start gap-4 sm:gap-8 py-8 last-of-type:border-none">
        <figure className="rounded-full overflow-hidden w-10 h-10 select-none flex-shrink-0">
          <img
            src={comment?.user?.image}
            alt={comment?.user?.username}
            title={comment?.user?.name}
          />
        </figure>
        <div className="flex flex-col grow">
          <div className="flex mt-0.5 justify-between items-center">
            <div className="flex flex-col">
              <h4 className="font-semibold text-sm text-clrText-primary">
                {comment?.user?.name}
              </h4>
              <span className="text-sm text-clrText-secondary">
                @{comment?.user?.username}
              </span>
            </div>
            <button
              onClick={() => initiateReply(comment?.user?.username)}
              className="text-clrBtn-blue font-semibold text-sm hover:underline transition-all duration-300"
            >
              Reply
            </button>
          </div>
          <p className="mt-6 text-base text-clrText-secondary">
            {replyTo && (
              <span className="text-clrBtn-voilet font-semibold text-sm">
                @{replyTo}
              </span>
            )}{" "}
            {comment?.content}
          </p>

          <ReplyTextBox
            replyDetails={replyDetails}
            reply={reply}
            setReplyDetails={setReplyDetails}
            checkValidation={checkValidation}
            checkVal={checkVal}
            postReply={postReply}
            error={error}
          />
        </div>
      </li>
    </>
  );
};

const ReplyTextBox = ({
  reply,
  replyDetails,
  setReplyDetails,
  checkVal,
  checkValidation,
  postReply,
  error,
}) => {
  const handleChange = (e) => {
    if (checkVal) {
      checkValidation(e.target.value);
    }
    setReplyDetails((prev) => ({ ...prev, content: e.target.value }));
  };

  return (
    <div className={`gap-4 items-end ${reply ? "flex" : "hidden"}`}>
      <div className="grow">
        <TextArea
          placeholder="Enter Reply here"
          value={replyDetails?.content}
          setValue={handleChange}
          error={error}
        />
      </div>
      <Button
        onClick={postReply}
        className="bg-clrBtn-voilet font-bold text-white text-sm"
      >
        Post Reply
      </Button>
    </div>
  );
};
