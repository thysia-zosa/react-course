import { Fragment } from "react";

const MeetupDetailPage = (props) => {
  return (
    <Fragment>
      <img src={props.meetupData.image} alt={props.meetupData.title} />
      <h1>{props.meetupData.title}</h1>
      <p>{props.meetupData.description}</p>
      <address>{props.meetupData.address}</address>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/new-meetup");
  const data = await response.json();
  console.log(data)

  return {
    fallback: false, //contains all paths
    // fallback: 'blocking', //may contain ohter paths
    paths: data.events.map((event) => ({ params: { meetupId: event.id } })),
    // [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId); // only in server console
  const response = await fetch("http://localhost:3000/api/new-meetup");
  const data = await response.json();

  return {
    props: {
      meetupData: data.events.find((event) => event.id === meetupId),
      // {
      //   id: "m2",
      //   title: "A second Meetup",
      //   image: "https://florencetips.nl/images/florencetips.jpg",
      //   address: "Something else",
      //   description: "This is a second meetup!",
      // },
    },
  };
}

export default MeetupDetailPage;
