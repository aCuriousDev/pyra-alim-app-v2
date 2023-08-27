import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./components/layout/MainLayout";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import LandingPage from "./pages/LandingPage";
import TestPage from "./pages/TestPage";
import Survey from "./pages/Survey";
import AdminPage from "./pages/AdminPage";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SignupPage";
import Account from "./pages/Account";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
]);

const App = () => {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <AnimatePresence mode="wait" initial={true}>
          <RouterProvider router={router} />
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
