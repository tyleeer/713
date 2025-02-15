export interface Event {
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

export type CreateEventDTO = Omit<Event, "id">;

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

export {
  getEventByCategory,
  getAllEvents,
  getEventById,
  addEvent
}