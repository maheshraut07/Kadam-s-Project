import { ToastContainer } from "react-toastify";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./pages/Home";
import GrapesDetails from "./pages/GrapesDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { toast } from "./lib/utils";
import Kart from "./pages/Kart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <GrapesDetails />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/kart",
    element: <Kart />,
  },
]);

function App() {
  return (
    <div>
      <ToastContainer style={toast} />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
