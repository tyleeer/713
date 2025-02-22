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
        select: {
            title: true,
            date: true,
            time: true,
            organizerId: true
        }
    });
}

export function addEvent(event: Event): Promise<Event> {
    return prisma.event.create({
        data: {
            title: event.title || '',
            description: event.description || '',
            location: event.location || '',
            date: event.date || '',
            time: event.time || '',
            petsAllowed: event.petsAllowed || false,
            category: event.category || '',
        }
    });
}

export function getAllEventsWithOrganizer(): Promise<Event[]> {
    return prisma.event.findMany({
        select: {
            id: true,
            category: true,
            organizerId: false,
            organizer: {
                select: {
                    name: true,
                },
            },
            participants: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    events: true,
                },
            },
        }
    });
}