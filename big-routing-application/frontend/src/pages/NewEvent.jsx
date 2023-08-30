import { json, redirect } from "react-router-dom";
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

  return <EventForm />;
};

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();

  // const eventTitle = data.get('title');

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://192.168.1.199:8080/events", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events");
}
