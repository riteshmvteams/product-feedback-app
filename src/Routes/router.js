import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// lazy imported pages
const HomePage = lazy(() => import("../pages/Homepage"));
const SingleProductFeedbackPage = lazy(() =>
  import("../pages/SingleProductFeedbackPage")
);
const FeedbackAdd = lazy(() => import("../pages/FeedbackAdd"));
const FeedbackEdit = lazy(() => import("../pages/FeedbackEdit"));
const RoadMap = lazy(() => import("../pages/RoadMap"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/feedback/:feedbackid",
    element: <SingleProductFeedbackPage />,
  },
  {
    path: "/feedback/add",
    element: <FeedbackAdd />,
  },
  {
    path: "/feedback/edit/:id",
    element: <FeedbackEdit />,
  },
  {
    path: "/roadmap",
    element: <RoadMap />,
  },
]);
