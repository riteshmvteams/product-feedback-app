import FeebackList from "../components/FeebackList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Homepage() {
  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col md:gap-4 xl:flex-row">
      <Sidebar />
      <div className="flex flex-col gap-4 md:px-10 xl:flex-grow xl:px-0">
        <Header />
        <FeebackList />
      </div>
    </div>
  );
}
