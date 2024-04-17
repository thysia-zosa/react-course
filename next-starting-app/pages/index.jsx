import MeetupList from "../components/meetups/MeetupList";
import Head from "../node_modules/next/head";

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
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highliy active React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
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
  const response = await fetch("http://localhost:3000/api/new-meetup");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      meetups: data.events,
    },
    revalidate: 86400,
  };
}

export default HomePage;
