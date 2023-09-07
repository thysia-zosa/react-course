import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image: "https://florencetips.nl/images/florencetips.jpg",
    address: "Something",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image: "https://florencetips.nl/images/florencetips.jpg",
    address: "Something else",
    description: "This is a second meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// prebuilding during build process
export async function getStaticProps() {
  // fetch data from an api
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 86400,
  };
}

export default HomePage;
