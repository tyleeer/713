import type { Event, CreateEventDTO } from "../models/event"

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

export function getEventByCategory(category: string): Promise<Event[]> {
    const filteredEvents = events.filter((event) => event.category === category);
    return Promise.resolve(filteredEvents);
}

export function getAllEvents(): Promise<Event[]> {
    return Promise.resolve(events);
}

export function getEventById(id: number): Promise<Event | undefined> {
    return Promise.resolve(events.find((event) => event.id === id));
}

export function addEvent(eventData: CreateEventDTO): Promise<Event> {
    const newEvent: Event = {
        id: events.length + 1,
        ...eventData,
    };
    events.push(newEvent);
    return Promise.resolve(newEvent);
}