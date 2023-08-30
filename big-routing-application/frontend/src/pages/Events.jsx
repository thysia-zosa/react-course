import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

  // const events = data.events;

  // return <EventsList events={events} />;
};

export default EventsPage;

async function loadEvents() {
  // doesn't have to be this name
  const response = await fetch("http://192.168.1.199:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });

    // With this, no need for JSON.parse in Error.jsx
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // return response; // not working for defer
    const responseData = await response.json();
    return responseData.events;
  }
}

export function loader() {
  return defer({
    events: /* key is up to you */ loadEvents(), // must return a promise! es geht ja darum zu "deferren"...
  });
}
