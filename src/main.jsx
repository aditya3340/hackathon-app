import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubmissionForm from "./Pages/SubmissionForm.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import IndividualSubmission from "./Pages/IndividualSubmission.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/addSubmission",
    element: <SubmissionForm />,
  },
  {
    path: "/submission/:submissionId",
    element: <IndividualSubmission />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
