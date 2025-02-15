import type { Event, CreateEventDTO } from "../models/event";
import * as repo from "../repository/eventRepository";

export function getEventByCategory(category: string): Promise<Event[]> {
  return repo.getEventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
  return repo.getAllEvents();
}

export function getEventById(id: number): Promise<Event | undefined> {
  return repo.getEventById(id);
}

export function addEvent(eventData: CreateEventDTO): Promise<Event> {
  return repo.addEvent(eventData);
}