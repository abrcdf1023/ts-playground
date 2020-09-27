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
// Property 'name' is private and only accessible within class 'Greeter'.
// greeter.name