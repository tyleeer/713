import express, { Request, Response } from "express";
const app = express();
const port = 3000;

// Book type definition
type Book = {
  title: string;
  Author_name: string;
  description: string;
  groups: string[];
};

// Sample book data
const books: Book[] = [
  {
    title: "The Shadow of the Wind",
    Author_name: "Carlos Ruiz Zafón",
    description:
      "A mystery novel set in post-war Barcelona, following a young boy who discovers a rare book in the Cemetery of Forgotten Books",
    groups: ["Mystery", "Historical Fiction", "Gothic Literature"],
  },
  {
    title: "Cloud Atlas",
    Author_name: "David Mitchell",
    description:
      "Six nested stories that explore how the actions and consequences of individual lives impact one another throughout the past, present, and future",
    groups: ["Science Fiction", "Literary Fiction", "Historical Fiction"],
  },
  {
    title: "The Name of the Wind",
    Author_name: "Patrick Rothfuss",
    description:
      "A young man grows to become the most notorious wizard his world has ever seen",
    groups: ["Fantasy", "Epic Fantasy", "Magic"],
  },
  {
    title: "1Q84",
    Author_name: "Haruki Murakami",
    description:
      "A love story, a mystery, a fantasy, a novel of self-discovery, a dystopia to rival George Orwell's",
    groups: ["Literary Fiction", "Magical Realism", "Japanese Literature"],
  },
  {
    title: "The Invisible Life of Addie LaRue",
    Author_name: "V.E. Schwab",
    description:
      "A woman who makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets",
    groups: ["Fantasy", "Historical Fiction", "Romance"],
  },
  {
    title: "Dune",
    Author_name: "Frank Herbert",
    description:
      "Set on the desert planet Arrakis, this is the story of the boy Paul Atreides, who would become the mysterious Muad'Dib",
    groups: ["Science Fiction", "Space Opera", "Political Fiction"],
  },
  {
    title: "The Seven Husbands of Evelyn Hugo",
    Author_name: "Taylor Jenkins Reid",
    description:
      "An aging Hollywood starlet recounts her scandalous life story to an unknown journalist",
    groups: ["Historical Fiction", "Romance", "LGBTQ+"],
  },
  {
    title: "The Three-Body Problem",
    Author_name: "Cixin Liu",
    description:
      "China's Cultural Revolution collides with an alien invasion in this award-winning science fiction epic",
    groups: ["Science Fiction", "Hard Science Fiction", "Chinese Literature"],
  },
  {
    title: "The Night Circus",
    Author_name: "Erin Morgenstern",
    description:
      "A competition between two young magicians becomes complicated when they fall in love",
    groups: ["Fantasy", "Magical Realism", "Romance"],
  },
  {
    title: "Project Hail Mary",
    Author_name: "Andy Weir",
    description:
      "An astronaut wakes up alone on a spacecraft with no memory of how he got there",
    groups: ["Science Fiction", "Space Fiction", "Hard Science Fiction"],
  },
];

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/books", (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title;
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(title.toString().toLowerCase())
    );
    res.json(filteredBooks);
  } else {
    res.json(books);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
