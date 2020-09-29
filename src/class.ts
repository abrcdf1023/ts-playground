class Greeter {
  public greeting: string;
  private name: string

  constructor(message: string) {
    this.name = "Jerry"
    this.greeting = message;
  }

  greet() {
    return `I'm ${this.name} Hello,${this.greeting}`
  }
}

let greeter = new Greeter("world");

greeter.greet() // I'm Jerry Hello,world
greeter.greeting // "world"
// ERROR
// Property 'name' is private and only accessible within class 'Greeter'.
// greeter.name

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
howard.getElevatorPitch()
// ERROR
// howard.name