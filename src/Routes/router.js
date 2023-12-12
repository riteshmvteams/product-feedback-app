import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import FeedbackAdd from "../pages/FeedbackAdd";
import FeedbackEdit from "../pages/FeedbackEdit";
import RoadMap from "../pages/RoadMap";

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
