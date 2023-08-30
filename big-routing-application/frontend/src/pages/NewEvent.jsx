import EventForm from "../components/EventForm";

const NewEventPage = () => {
  /**
   * for sending data to the backend, there are multiple options:
   * - add a function:
   *
   * function submitHandler(event) {
   *   event.preventDefault();
   *   extractDataFromForm()...
   *   loading/errorState...
   *   routing...
   * }
   *
   * - add actions to route (as done here)
   */

  return <EventForm method='post' />;
};

export default NewEventPage;

