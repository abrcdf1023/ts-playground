enum Color {
  "black",
  "white",
  "grey",
  "oranage",
  "bicolors",
  "tricolors",
  "brown"
}

export type Dog = {
  name?: string;
  species?: string;
  color: Color;
  bark: boolean;
  shitVeryStinky: boolean;
}

export type Dogs = Dog[]

// extend type
export type AlienDog = Dog & {
  name: string;
  hasWeapon: boolean;
  canWalkWithTwoLeg: boolean;
}

const alienDog: AlienDog = {
  name: 'Dooogy',
  color: Color["black"],
  bark: false,
  shitVeryStinky: true,
  hasWeapon: true,
  canWalkWithTwoLeg: true,
}

// What's different between type and interface
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases