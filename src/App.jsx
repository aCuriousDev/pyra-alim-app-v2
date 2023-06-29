import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./components/layout/MainLayout";

// pages
import LandingPage from "./pages/LandingPage";
import TestPage from "./pages/TestPage";
import Survey from "./pages/Survey";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "start",
        element: <TestPage />,
      },
      {
        path: "questionnaire",
        element: <Survey />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
