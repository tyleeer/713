import { Book, CreateBookDTO } from "../models/book";

const books: Book[] = [
    {
        id: 1,
        title: "The Shadow of the Wind",
        Author_name: "Carlos Ruiz Zafón",
        description:
            "A mystery novel set in post-war Barcelona, following a young boy who discovers a rare book in the Cemetery of Forgotten Books",
        groups: ["Mystery", "Historical Fiction", "Gothic Literature"],
    },
    {
        id: 2,
        title: "Cloud Atlas",
        Author_name: "David Mitchell",
        description:
            "Six nested stories that explore how the actions and consequences of individual lives impact one another throughout the past, present, and future",
        groups: ["Science Fiction", "Literary Fiction", "Historical Fiction"],
    },
    {
        id: 3,
        title: "The Name of the Wind",
        Author_name: "Patrick Rothfuss",
        description:
            "A young man grows to become the most notorious wizard his world has ever seen",
        groups: ["Fantasy", "Epic Fantasy", "Magic"],
    },
    {
        id: 4,
        title: "1Q84",
        Author_name: "Haruki Murakami",
        description:
            "A love story, a mystery, a fantasy, a novel of self-discovery, a dystopia to rival George Orwell's",
        groups: ["Literary Fiction", "Magical Realism", "Japanese Literature"],
    },
    {
        id: 5,
        title: "The Invisible Life of Addie LaRue",
        Author_name: "V.E. Schwab",
        description:
            "A woman who makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets",
        groups: ["Fantasy", "Historical Fiction", "Romance"],
    },
    {
        id: 6,
        title: "Dune",
        Author_name: "Frank Herbert",
        description:
            "Set on the desert planet Arrakis, this is the story of the boy Paul Atreides, who would become the mysterious Muad'Dib",
        groups: ["Science Fiction", "Space Opera", "Political Fiction"],
    },
    {
        id: 7,
        title: "The Seven Husbands of Evelyn Hugo",
        Author_name: "Taylor Jenkins Reid",
        description:
            "An aging Hollywood starlet recounts her scandalous life story to an unknown journalist",
        groups: ["Historical Fiction", "Romance", "LGBTQ+"],
    },
    {
        id: 8,
        title: "The Three-Body Problem",
        Author_name: "Cixin Liu",
        description:
            "China's Cultural Revolution collides with an alien invasion in this award-winning science fiction epic",
        groups: ["Science Fiction", "Hard Science Fiction", "Chinese Literature"],
    },
    {
        id: 9,
        title: "The Night Circus",
        Author_name: "Erin Morgenstern",
        description:
            "A competition between two young magicians becomes complicated when they fall in love",
        groups: ["Fantasy", "Magical Realism", "Romance"],
    },
    {
        id: 10,
        title: "Project Hail Mary",
        Author_name: "Andy Weir",
        description:
            "An astronaut wakes up alone on a spacecraft with no memory of how he got there",
        groups: ["Science Fiction", "Space Fiction", "Hard Science Fiction"],
    },
];

export function getBookByTitle(title: string): Promise<Book[]> {
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(title.toString().toLowerCase())
    );
    return Promise.resolve(filteredBooks);
}

export function getAllBooks(): Promise<Book[]> {
    return Promise.resolve(books);
}

export function getBookById(id: number): Promise<Book | undefined> {
    return Promise.resolve(books.find((event) => event.id === id));
}

export function updateBookById(id: number, bookData: CreateBookDTO): Promise<Book | undefined> {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
        const updatedBook: Book = {
            ...books[bookIndex],
            ...bookData,
        };

        books[bookIndex] = updatedBook;
        return Promise.resolve(updatedBook)
    } else return Promise.resolve(undefined);
}

export function addBook(eventData: CreateBookDTO): Promise<Book> {
    const newBook: Book = {
        id: books.length + 1,
        ...eventData,
    };
    books.push(newBook);
    return Promise.resolve(newBook);
}