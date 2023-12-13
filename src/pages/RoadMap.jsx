import Button from "../components/Button";
import HeaderTop from "../components/HeaderTop";
import RoadmapCard from "../components/RoadmapCard";
import { useProductFeeback } from "../context/ProductFeedbackContext";

export default function RoadMap() {
  const { state } = useProductFeeback();
  const plannedFeedbacks = state.feedbackList.filter(
    (feedback) => feedback.status === "planned"
  );
  const progressFeedbacks = state.feedbackList.filter(
    (feedback) => feedback.status === "in-progress"
  );
  const liveFeedbacks = state.feedbackList.filter(
    (feedback) => feedback.status === "live"
  );

  return (
    <div className="max-w-6xl mx-auto px-4 w-full">
      <RoadMapHeader />

      <main className="mt-10">
        <div className="grid grid-cols-3 gap-x-8">
          <div className="flex flex-col gap-6">
            <StatusHeader
              title="Planned"
              subTitle="Ideas prioritized for research"
              feedbackLength={plannedFeedbacks?.length}
            />

            <ul className="flex flex-col gap-6">
              {plannedFeedbacks?.map((feedback) => {
                return (
                  <RoadmapCard
                    key={feedback.id}
                    feedback={feedback}
                    color="#F49F85"
                  />
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <StatusHeader
              title="In-Progress"
              subTitle="Currently being developed"
              feedbackLength={progressFeedbacks?.length}
            />
            <ul className="flex flex-col gap-6">
              {progressFeedbacks?.map((feedback) => {
                return (
                  <RoadmapCard
                    key={feedback.id}
                    feedback={feedback}
                    color="#AD1FEA"
                  />
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <StatusHeader
              title="Live"
              subTitle="Released features"
              feedbackLength={liveFeedbacks?.length}
            />

            <ul className="flex flex-col gap-6">
              {liveFeedbacks?.map((feedback) => {
                return (
                  <RoadmapCard
                    key={feedback.id}
                    feedback={feedback}
                    color="#62BCFA"
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

const RoadMapHeader = () => {
  return (
    <div className="px-4 py-6 bg-clrBlue-400 rounded-lg flex items-center justify-between">
      <HeaderTop hidden />
      <h2 className="text-white font-bold text-3xl">Roadmap</h2>
      <Button
        className="bg-clrBtn-voilet text-white font-bold"
        as="link"
        to="/feedback/add"
      >
        Add Feedback
      </Button>
    </div>
  );
};

const StatusHeader = ({ title, subTitle, feedbackLength }) => {
  return (
    <div>
      <h2 className="text-clrText-primary font-bold text-lg">
        {title} ({feedbackLength})
      </h2>
      <p className="text-clrText-secondary text-sm">{subTitle}</p>
    </div>
  );
};
