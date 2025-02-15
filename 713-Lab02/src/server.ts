import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
const port = 3000;

// notation
interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

type CreateEventDTO = Omit<Event, "id">;

const events: Event[] = [
  {
    id: 1,
    category: "Music",
    title: "Concert",
    description: "A live concert",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 2,
    category: "Sports",
    title: "Marathon",
    description: "A world class marathon",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 3,
    category: "Books",
    title: "Scientific books",
    description: "A scientific book",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 4,
    category: "Job fair",
    title: "New job oppotunities",
    description: "A job fair",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 5,
    category: "Music",
    title: "EDM Concert",
    description: "A live EDM concert",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 6,
    category: "Music",
    title: "Indie Concert",
    description: "A live Indie concert",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
];

function getEventByCategory(category: string): Event[] {
  const filteredEvents = events.filter((event) => event.category === category);
  return filteredEvents;
}

function getAllEvents(): Event[] {
  return events;
}

function getEventById(id: number): Event | undefined {
  return events.find((event) => event.id === id);
}

function addEvent(eventData: CreateEventDTO): Event {
  const newEvent: Event = {
    id: events.length + 1,
    ...eventData,
  };
  events.push(newEvent);
  return newEvent;
}

// routing

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/test", (req: Request, res: Response) => {
  let returnObj = {
    name: "test",
    age: 20,
    address: "Thai",
  };
  res.send(returnObj);
});

app.get("/test/param", (req: Request, res: Response) => {
  const id = req.query.id;
  const output = `id: ${id}`;
  res.send(output);
});

app.get("/events", (req, res) => {
  if (req.query.category) {
    const category = req.query.category as string;
    const filteredEvents = getEventByCategory(category as string);
    res.json(filteredEvents);
  } else {
    res.json(getAllEvents());
  }
});

app.get("/events/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const event = getEventById(id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});

app.post("/events", (req, res) => {
  const eventData: CreateEventDTO = req.body;
  const newEvent = addEvent(eventData);
  res.status(201).json(newEvent);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
