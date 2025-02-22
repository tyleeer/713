import { PrismaClient } from '@prisma/client';
import type { Event } from '../models/event';

const prisma = new PrismaClient();

export function getEventByCategory(category: string): Promise<Event[]> {
    return prisma.event.findMany({
        where: { category },
    });
}

export function getAllEvents(): Promise<Event[]> {
    return prisma.event.findMany();
}

export function getEventById(id: number): Promise<Event | null> {
    return prisma.event.findUnique({
        where: { id },
        include: { organizer: true },
    });
}

export function addEvent(event: Event): Promise<Event> {
    return prisma.event.create({
        data: {
            category: event.category,
            title: event.title,
            description: event.description,
            location: event.location,
            date: event.date,
            time: event.time,
            petsAllowed: event.petsAllowed,
        }
    });
}

export function getAllEventsWithOrganizer(): Promise<Event[]> {
    return prisma.event.findMany({
        include: { organizer: true },
    });
}