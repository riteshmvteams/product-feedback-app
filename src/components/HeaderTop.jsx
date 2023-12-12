import { useNavigate } from "react-router-dom";
import backIcon from "../assets/shared/back.svg";
import Button from "./Button";

export default function HeaderTop({ feedback, hidden = false }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <button
        className="flex items-center gap-2 group"
        onClick={() => navigate(-1)}
      >
        <figure>
          <img src={backIcon} alt="backIcon" />
        </figure>
        <span className="group-hover:underline text-clrText-secondary font-semibold text-sm ">
          Go back
        </span>
      </button>
      {!hidden && (
        <Button
          as="link"
          to={`/feedback/edit/${feedback?.id}`}
          className="bg-clrBtn-blue text-white font-bold text-sm"
        >
          Edit Feeback
        </Button>
      )}
    </div>
  );
}
