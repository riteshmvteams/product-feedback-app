import emptyImage from "../assets/suggestions/illustration-empty.svg";
import Button from "./Button";

export default function NoFeedbackListAvailable() {
  return (
    <div className="flex flex-col items-center py-20 gap-6">
      <figure>
        <img src={emptyImage} alt="emptyImage" />
      </figure>
      <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl text-clrText-primary font-bold tracking-normal mt-8">
        There is no feedback yet.
      </h2>

      <p className="text-clrText-secondary max-w-md text-center">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button className="bg-clrBtn-voilet hover:opacity-70 text-white font-semibold">
        + Add Feedback
      </Button>
    </div>
  );
}
