import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
// Routes
import { router } from "./Routes/router";
// loader
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-body min-h-screen w-full md:pt-20 pb-20">
        <RouterProvider router={router} />
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </Suspense>
  );
}
