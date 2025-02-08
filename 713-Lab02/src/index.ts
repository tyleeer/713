// Define an interface
interface Person {
  name: string;
  age: number;
  greet(): string;
}

// Create a class that implements the interface
class User implements Person {
  constructor(public name: string, public age: number) {}

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create an instance of the class
const user = new User("John Doe", 25);

// Log the greeting message
console.log(user.greet());
