let color = ["red", "blue", "green", "yellow", "orange", "purple"];
for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
}

let people = ["John", "Thomas Young", "Alexandra", "Stephanie", "Tim"];
people.forEach((name) => {
  if (name.length >= 6) console.log(`สวัสดีคุณ ${name}`);
  else console.log(`Hello ${name}`);
});
