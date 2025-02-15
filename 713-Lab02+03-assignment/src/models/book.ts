export type Book = {
    id: number;
    title: string;
    Author_name: string;
    description: string;
    groups: string[];
};

export type CreateBookDTO = Omit<Book, "id">;