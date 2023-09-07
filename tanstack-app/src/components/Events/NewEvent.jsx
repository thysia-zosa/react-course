import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { createEvent, queryClient } from "../../utils/http.jsx";

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      // invalidates all queries whose key contains 'event'
      queryClient.invalidateQueries({queryKey:['events'], /* exact: true */})
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
    // navigate('events')
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending ? (
          "Submitting..."
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={
            error.info?.message ??
            "Failed to create event. Please try again later."
          }
        />
      )}
    </Modal>
  );
}
