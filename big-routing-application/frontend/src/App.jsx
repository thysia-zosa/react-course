import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { action as manipulateEventAction } from "./components/EventForm";
import EventLayout from "./layouts/Event";
import RootLayout from "./layouts/Root";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  action as deleteEventAction,
  loader as eventDetailLoader,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import AuthenticationPage, { action as authAction } from "./pages/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "auth", element: <AuthenticationPage />, action: authAction },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
          {
            path: ":eventId",
            id: "eventDetail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
