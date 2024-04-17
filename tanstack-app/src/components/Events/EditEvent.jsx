import {
  Link,
  redirect,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from "react-router-dom";

import { /* useMutation, */ useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../utils/http.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const params = useParams();
  const key = ["events", { id: params.id }];
  const submit = useSubmit();

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     // executed as soon as mutating begins
  //     const newEvent = data.eventData;

  //     await queryClient.cancelQueries({ queryKey: key });
  //     const previousEvent = queryClient.getQueryData();
  //     queryClient.setQueryData(key, newEvent);
  //     return {
  //       previousEvent,
  //     };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(key, context.previousEvent);
  //   },
  //   onSettled: () => {
  //     // a 'finally' for mutation
  //     queryClient.invalidateQueries(key);
  //   },
  // });

  const { data, /* isPending, */ isError, error } = useQuery({
    queryKey: key,
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000,
  });

  function handleSubmit(formData) {
    submit(formData, { method: "PUT" });
    // mutate({ id: params.id, eventData: formData });
    // handleClose();
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  // if (isPending) {
  //   content = (
  //     <div className="center">
  //       <LoadingIndicator />
  //     </div>
  //   );
  // }

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
        {state === "submitting" ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", { id: params.id }],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}
