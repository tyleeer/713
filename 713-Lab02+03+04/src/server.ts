import express, { Request, Response } from "express";
import multer from 'multer';
import { uploadFile } from './services/uploadFileService';
import dotenv from 'dotenv';
import eventRoute from './routes/eventRoute';
dotenv.config();

const app = express();
app.use(express.json());
app.use('/events', eventRoute);
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/test", (req: Request, res: Response) => {
  let returnObj = {
    name: "test",
    age: 20,
    address: "Thai",
  };
  res.send(returnObj);
});

app.get("/test/param", (req: Request, res: Response) => {
  const id = req.query.id;
  const output = `id: ${id}`;
  res.send(output);
});

const upload = multer({ storage: multer.memoryStorage() });
app.post('/upload', upload.single('file'), async (req: any, res: any) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    const bucket = process.env.SUPABASE_BUCKET_NAME;
    const filePath = process.env.UPLOAD_DIR;

    if (!bucket || !filePath) {
      return res.status(500).send('Bucket name or file path not configured.');
    }

    const ouputUrl = await uploadFile(bucket, filePath, file);
    res.status(200).send(ouputUrl);
  } catch (error) {
    res.status(500).send('Error uploading file.');
  }
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
