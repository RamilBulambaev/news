import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { Page } from "@/pages/main";
import { NewsPage } from "@/pages/news";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Page />,
      },
      {
        path: "/news/:id",
        element: <NewsPage />,
      },
    ],
  },
]);
