import { ToastContainer } from "react-toastify";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { toast } from "./lib/utils";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
