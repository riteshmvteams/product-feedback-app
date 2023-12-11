import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
// Routes
import { router } from "./Routes/router";
// loader
import Loader from "./components/Loader";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-body h-screen w-full md:pt-20">
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}
