import { useState } from "react";
import Button from "./Button";
import TextArea from "./TextArea";

export default function AddComment() {
  const [comment, setComment] = useState("");
  const [leftChar, setLeftChar] = useState(256);

  return (
    <div className="bg-white px-6 py-4 rounded-xl">
      <h2 className="text-clrText-primary font-bold text-lg tracking-wide capitalize mb-4">
        Add Comment
      </h2>

      <form className="flex flex-col gap-3">
        <TextArea
          name="comment"
          placeholder="Type your comment here"
          value={comment}
          setValue={setComment}
          leftChar={leftChar}
          setLeftChar={setLeftChar}
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-clrText-secondary tracking-normal font-medium">
            {leftChar} Characters left
          </span>
          <Button className="bg-clrBtn-voilet text-white font-bold text-sm">
            Add Comment
          </Button>
        </div>
      </form>
    </div>
  );
}
