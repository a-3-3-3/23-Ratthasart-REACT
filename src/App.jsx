import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <h1>404 - Page Not Found</h1>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // { path: "owner",
      // element: <Owner/> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
