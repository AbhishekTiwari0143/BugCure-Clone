import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Home,
  Blogs,
  Tips,
  Security,
  Importance,
  Terms,
  Status,
  Error,
} from "./Components";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>

      <Route path="blogs" element={<Blogs />}>
        <Route
          path="10-Proven-Tips-to-Build-an-Impressive-Website"
          element={<Tips />}
        />
      </Route>
      <Route
        path="/blogs/Importance-of-Website-In-Business:-Power-of-First-Impression"
        element={<Importance />}
      />
      <Route
        path="/blogs/Securing-Businesses:-Importance-Of-Cybersecurity"
        element={<Security />}
      />
      <Route path="terms" exact element={<Terms />}></Route>
      <Route path="status" exact element={<Status />}></Route>
      <Route path="" exact element={<Status />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
