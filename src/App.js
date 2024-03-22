import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import NewsPage from "./components/NewsItem/NewsPage";
import StoryPage from "./components/NewsItem/StoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <NewsPage />,
      },
      {
        path: "news/:id",
        element: <StoryPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
