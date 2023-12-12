import { useNavigate } from "react-router-dom";
import backIcon from "../assets/shared/back.svg";
import Button from "./Button";

export default function HeaderTop() {
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
        <span className="group-hover:underline text-clrText-secondary font-normal text-base ">
          back
        </span>
      </button>
      <Button className="bg-clrBtn-blue text-white font-bold text-sm">
        Edit Feeback
      </Button>
    </div>
  );
}
