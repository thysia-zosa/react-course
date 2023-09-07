// Not for defining react component, but serverside code
// /api/new-meetup

const EVENTS = [
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

// name is up to you
async function handler(req, res) {
  console.log("handler started");
  if (req.method === "POST") {
    const data = req.body;
    const id =
      "m" +
      (Math.max(...EVENTS.map((event) => parseInt(event.id.substring(1)))) + 1);

    // const { title, image, address, description } = data;

    EVENTS.push(data);

    console.log(EVENTS.length);
    res.status(201).json({ message: "Meetup inserted!" });
  } else if (req.method === "GET") {
    res.status(200).json({ events: EVENTS });
  }
}

export default handler;
