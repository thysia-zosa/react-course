import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventLayout = () => {
  return (
    <Fragment>
      <EventsNavigation />
        <Outlet />
    </Fragment>
  );
};

export default EventLayout;
