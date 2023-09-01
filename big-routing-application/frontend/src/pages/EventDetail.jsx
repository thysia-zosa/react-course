import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";
import { getAuthToken } from "../utils/auth";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("eventDetail");

  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading event...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading events...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://192.168.1.199:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  }

  const responseData = await response.json();
  return responseData.event;
}

async function loadEvents() {
  const response = await fetch("http://192.168.1.199:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;
  return defer({ event: await loadEvent(id), events: loadEvents() });
}

// don't forget to add the loader to the router in App.jsx!

export async function action({ params, request }) {
  const eventId = params.eventId;
  const token = getAuthToken();
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
}
