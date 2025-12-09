import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Index";
import Projects from "./pages/projects/Index";
import Articles from "./pages/articles/Index";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/articles", element: <Articles /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


