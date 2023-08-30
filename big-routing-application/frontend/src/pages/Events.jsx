import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
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
    throw new Error(`Could not fetch data: ${response.status}`);
  } else {
    return response;
  }
}
