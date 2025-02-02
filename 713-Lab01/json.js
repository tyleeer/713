const object = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(object);
console.log(object.name);
const jsonStr = JSON.stringify(object);
console.log(jsonStr);

const JohnObj = {
  firstname: "Johny",
  lastname: "Payne",
  age: 22,
  GPA: 1.8,
};

const AdamObj = {
  firstname: "Adam",
  lastname: "Wasp",
  age: 40,
  GPA: 3.0,
};

function checkStudentStatus(studentObj) {
  if (studentObj.GPA > 2) return JSON.stringify(studentObj);
  else return `คุณ ${studentObj.firstname} ${studentObj.lastname} พ้นสภาพ`;
}

console.log(checkStudentStatus(JohnObj));
console.log(checkStudentStatus(AdamObj));
