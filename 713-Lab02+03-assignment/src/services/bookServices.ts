import { Book, CreateBookDTO } from "../models/book";
import * as repo from "../repository/bookRepositoryDb"


export function getBookByTitle(title: string): Promise<Book[]> {
    return repo.getBookByTitle(title);
}

export function getBookByCategory(title: string): Promise<Book[]> {
    return repo.getBookByCategory(title);
}

export function getAllBooks(): Promise<Book[]> {
    return repo.getAllBooks();
}

export function getBookById(id: number): Promise<Book | undefined> {
    return repo.getBookById(id);
}

export function updateBookById(id: number, bookData: CreateBookDTO): Promise<CreateBookDTO | undefined> {
    return repo.updateBookById(id, bookData);
}

export function addBook(eventData: CreateBookDTO): Promise<Book> {
    return repo.addBook(eventData);
}