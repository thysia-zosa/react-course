import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

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
    return {
      isError: true,
      message: `Could not fetch data: ${response.status}`,
    };
  } else {
    return response;
  }
}
