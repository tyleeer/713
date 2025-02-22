import type { Event, CreateEventDTO } from "../models/event";
// import * as repo from "../repository/eventRepository";
// import * as repo from "../repository/eventRepositoryDb";
import * as repo from "../repository/eventRepositoryPrisma";

export function getEventByCategory(category: string) {
  return repo.getEventByCategory(category);
}

export function getAllEvents() {
  return repo.getAllEventsWithOrganizer();
}

export function getEventById(id: number) {
  return repo.getEventById(id);
}

// export function addEvent(eventData: CreateEventDTO) {
//   return repo.addEvent(eventData);
// }

export function addEvent(eventData: Event) {
  return repo.addEvent(eventData);
}