import express, { Request, Response } from "express";
import { addBook, getAllBooks, getBookById, getBookByTitle, updateBookById, getBookByCategory } from "../services/bookServices";
import { CreateBookDTO } from "../models/book";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    if (req.query.title) {
        const title = req.query.title as string;
        const filteredBooks = await getBookByTitle(title as string);
        res.json(filteredBooks);
    } else if (req.query.category) {
        const category = req.query.category as string;
        const filteredBooks = await getBookByCategory(category as string);
        res.json(filteredBooks);
    } else {
        res.json(await getAllBooks());
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = await getBookById(id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

router.post("/", async (req: Request, res: Response) => {
    const bookData: CreateBookDTO = req.body;
    const newBook = await addBook(bookData);
    res.status(201).json(newBook);
});

router.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bookData: CreateBookDTO = req.body;
    const updatedBook = await updateBookById(id, bookData);

    if (updatedBook) {
        res.json(updatedBook);
    } else {
        res.status(404).send("Book not found");
    }
});

export default router;