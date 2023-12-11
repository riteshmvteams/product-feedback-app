import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// lazy imported pages
const HomePage = lazy(() => import("../pages/Homepage"));
const SingleProductFeedbackPage = lazy(() =>
  import("../pages/SingleProductFeedbackPage")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/feedback/:feedbackid",
    element: <SingleProductFeedbackPage />,
  },
]);
