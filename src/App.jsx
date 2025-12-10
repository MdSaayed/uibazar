import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Index";
import Projects from "./pages/projects/Index";
import Articles from "./pages/articles/Index";
import BlogDetails from "./pages/blog-single/Index";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/articles", element: <Articles /> },
    { path: "/blog-details", element: <BlogDetails /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


