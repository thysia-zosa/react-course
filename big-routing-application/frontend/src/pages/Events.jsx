import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  const events = useLoaderData();

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
    // ...
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
}
