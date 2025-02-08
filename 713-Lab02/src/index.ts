let x: number | string = 10;
if (typeof x === "string") {
  console.log("x is a string");
} else if (typeof x === "number") {
  console.log("x is a number");
} else {
  console.log("x is neither a string nor a number");
}

// ผลลัพธ์ที่ได้คือ "x is a number" หรือ x มี type เป็น number
