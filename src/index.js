import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ProductFeedbackProvider from "./context/ProductFeedbackContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductFeedbackProvider>
      <App />
    </ProductFeedbackProvider>
  </React.StrictMode>
);
