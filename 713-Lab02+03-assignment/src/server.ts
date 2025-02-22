import express, { Request, Response } from "express";
import { addBook, getAllBooks, getBookById, getBookByTitle, updateBookById, getBookByCategory } from "./services/bookServices";
import { CreateBookDTO } from "./models/book";
import multer from 'multer';
import { uploadFile } from './services/uploadFileService';

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/books", async (req: Request, res: Response) => {
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

app.get("/books/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = await getBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

app.post("/books", async (req: Request, res: Response) => {
  const bookData: CreateBookDTO = req.body;
  const newBook = await addBook(bookData);
  res.status(201).json(newBook);
});

app.put("/books/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bookData: CreateBookDTO = req.body;
  const updatedBook = await updateBookById(id, bookData);

  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.status(404).send("Book not found");
  }
});

const upload = multer({ storage: multer.memoryStorage() });
app.post('/upload', upload.single('file'), async (req: any, res: any) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    const bucket = 'images';
    const filePath = `books/${file.originalname}`;

    await uploadFile(bucket, filePath, file);

    res.status(200).send('File uploaded successfully.');
  } catch (error) {
    res.status(500).send('Error uploading file.');
  }
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
