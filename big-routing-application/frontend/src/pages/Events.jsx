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
