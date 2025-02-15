import express, { Request, Response } from "express";
import { addBook, CreateBookDTO, getAllBooks, getBookById, getBookByTitle, updateBookById } from "./services/bookServices";
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/books", (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title as string;
    const filteredBooks = getBookByTitle(title as string);
    res.json(filteredBooks);
  } else {
    res.json(getAllBooks());
  }
});

app.get("/books/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = getBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

app.post("/books", (req: Request, res: Response) => {
  const bookData: CreateBookDTO = req.body;
  const newBook = addBook(bookData);
  res.status(201).json(newBook);
});

app.put("/books/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bookData: CreateBookDTO = req.body;
  const updatedBook = updateBookById(id, bookData);

  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.status(404).send("Book not found");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
