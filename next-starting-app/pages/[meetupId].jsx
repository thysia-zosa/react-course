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
  return {
    fallback: false,//contains all paths
    // fallback: true, //may contain ohter paths
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId); // only in server console

  return {
    props: {
      meetupData: {
        id: "m2",
        title: "A second Meetup",
        image: "https://florencetips.nl/images/florencetips.jpg",
        address: "Something else",
        description: "This is a second meetup!",
      },
    },
  };
}

export default MeetupDetailPage;
