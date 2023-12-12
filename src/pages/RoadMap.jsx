import Button from "../components/Button";
import HeaderTop from "../components/HeaderTop";

export default function RoadMap() {
  return (
    <div className="max-w-6xl mx-auto px-4 w-full">
      <RoadMapHeader />

      <main>Boards will be here</main>
    </div>
  );
}

const RoadMapHeader = () => {
  return (
    <div className="px-4 py-6 bg-clrBlue-400 rounded-lg flex items-center justify-between">
      <div className="flex flex-col flex-1">
        <HeaderTop hidden />
        <h2 className="text-white font-bold text-2xl">Roadmap</h2>
      </div>
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
