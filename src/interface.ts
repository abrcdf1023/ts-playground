enum Color {
  "black",
  "white",
  "grey",
  "oranage",
  "bicolors",
  "tricolors",
  "brown"
}
export interface Cat {
  name?: string;
  species?: string;
  color: Color;
  meow: boolean;
  meowForWhat?: string;
}

export interface Cat {
  interfaceCanBeEnhanceButIDontKnowWhenShouldDoThis?: string;
}

export const mycat: Cat = {
  name: 'flower',
  color: Color["brown"],
  meow: true,
  meowForWhat: "Want to eat!"
}

export interface AlienCat extends Cat {
  hasWeapon: boolean;
  canWalkWithTwoLeg: boolean;
}