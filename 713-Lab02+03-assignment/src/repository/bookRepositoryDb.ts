import type { Book, CreateBookDTO } from "../models/book";
import connection from "../db/db";

export async function getBookByTitle(title: string): Promise<Book[]> {
    const [rows] = await connection.execute('SELECT * FROM books WHERE title like CONCAT("%", ?, "%")', [title]);
    return rows as Book[];
}

export async function getBookByCategory(category: string): Promise<Book[]> {
    const [rows] = await connection.execute('SELECT * FROM books WHERE category like CONCAT("%", ?, "%")', [category]);
    return rows as Book[];
}

export async function getAllBooks(): Promise<Book[]> {
    const [rows] = await connection.execute('SELECT * FROM books');
    return rows as Book[];
}

export async function getBookById(id: number): Promise<Book | undefined> {
    const [rows] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);
    const books = (rows as any[]).map(book => ({
        ...book,
        category: book.category ? book.category.split(',') : []
    }));

    return books.length > 0 ? books[0] : undefined;
}

export async function updateBookById(id: number, bookData: CreateBookDTO): Promise<CreateBookDTO | undefined> {
    const { title, author_name, description, category } = bookData;
    const categoryString = category.join(',');

    const [result] = await connection.execute(
        'UPDATE books SET (title, author_name, description, category) = (?, ?, ?, ?) WHERE id = ?',
        [title, author_name, description, categoryString, id]
    );

    // Check if update was successful
    const updateResult = result as { affectedRows: number };
    if (updateResult.affectedRows === 0) {
        return undefined;
    }

    const [rows] = await connection.execute(
        'SELECT title, author_name, description, category FROM books WHERE id = ?',
        [id]
    );

    const books = (rows as any[]).map(book => ({
        ...book,
        category: book.category ? book.category.split(',') : []
    }));

    return books.length > 0 ? books[0] : undefined;
}

export async function addBook(newBook: CreateBookDTO): Promise<Book> {
    const { title, author_name, description, category } = newBook;
    const categoryString = category.join(',');

    const [result] = await connection.execute(
        'INSERT INTO books (title, author_name, description, category) VALUES (?, ?, ?, ?)',
        [title, author_name, description, categoryString]
    );
    const insertId = (result as any).insertId;
    return {
        id: insertId,
        ...newBook
    };
}
