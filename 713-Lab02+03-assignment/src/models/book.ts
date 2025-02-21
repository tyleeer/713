export type Book = {
    id: number;
    title: string;
    author_name: string;
    description: string;
    category: string[];
};

export type CreateBookDTO = Omit<Book, "id">;