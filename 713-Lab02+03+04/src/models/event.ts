import { Organizer } from "./organizer";
import { Participant } from "./participant";

export interface Event {
    id?: number;
    category?: string;
    title?: string;
    description?: string;
    location?: string;
    date?: string;
    time?: string;
    petsAllowed?: boolean;
    organizerId?: number | null;
    organizer?: Organizer | null;
    participants?: Participant[];
}

export type CreateEventDTO = Omit<Event, "id">;