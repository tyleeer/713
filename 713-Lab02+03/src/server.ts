import express, { Request, Response } from "express";
import type { CreateEventDTO } from "./models/event";
import { getAllEvents, getEventByCategory, getEventById, addEvent } from "./services/eventService";
const app = express();
app.use(express.json());
const port = 3000;

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

app.get("/events", async (req, res) => {
  if (req.query.category) {
    const category = req.query.category as string;
    const filteredEvents = await getEventByCategory(category as string);
    res.json(filteredEvents);
  } else {
    res.json(await getAllEvents());
  }
});

app.get("/events/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const event = await getEventById(id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});

app.post("/events", async (req, res) => {
  const eventData: CreateEventDTO = req.body;
  const newEvent = await addEvent(eventData);
  res.status(201).json(newEvent);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
