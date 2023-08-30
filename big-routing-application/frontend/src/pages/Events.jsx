import { Fragment } from "react";
import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();

  const events = data.events;

  return (
    <Fragment>
      <EventsList events={events} />
    </Fragment>
  );
};

export default EventsPage;

export async function loader() {
  // doesn't have to be this name
  const response = await fetch("http://192.168.1.199:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });

    // With this, no need for JSON.parse in Error.jsx
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
