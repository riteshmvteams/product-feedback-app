import SingleFeedbackList from "./SingleFeedbackList";

export default function FeebackList() {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {Array.from({ length: 9 }).map((_, i) => {
          return <SingleFeedbackList key={i} />;
        })}
      </ul>
    </div>
  );
}
