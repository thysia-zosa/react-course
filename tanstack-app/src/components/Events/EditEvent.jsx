import { Link, useNavigate, useParams } from "react-router-dom";

import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../utils/http.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const key = ["events", { id: params.id }];

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      // executed as soon as mutating begins
      const newEvent = data.eventData;

      await queryClient.cancelQueries({ queryKey: key });
      const previousEvent = queryClient.getQueryData();
      queryClient.setQueryData(key, newEvent);
      return {
        previousEvent,
      };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(key, context.previousEvent);
    },
    onSettled: () => {
      // a 'finally' for mutation
      queryClient.invalidateQueries(key);
    },
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: key,
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, eventData: formData });
    handleClose();
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    console.log(isError, error);
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message ?? "Failed to fetch event."}
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
