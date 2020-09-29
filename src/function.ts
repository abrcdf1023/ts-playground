import { Cat, mycat } from './interface'

function catMeowForWhat(cat: Cat): string | null | undefined {
  if (cat.meow) {
    return cat.meowForWhat
  }
  return null
}

function actionAfterMeow(meowForWhat: string): void {
  if (meowForWhat === "Want to eat!") {
    console.log("Wait please, I'm preparing the food.")
  } else {
    console.log("I'm back to sleep.")
  }
}

// ERROR
// This'll error because catMeowForWhat may return string | null | undefined
// actionAfterMeow(catMeowForWhat(mycat))

// Instead of
const forWhat = catMeowForWhat(mycat)
if (forWhat) {
  actionAfterMeow(forWhat)
}