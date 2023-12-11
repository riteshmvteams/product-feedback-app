import FeebackList from "../components/FeebackList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Homepage() {
  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col">
      <Sidebar />
      <div className="flex flex-col gap-4">
        <Header />
        <FeebackList />
      </div>
    </div>
  );
}
