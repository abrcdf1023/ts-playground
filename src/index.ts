const num1 = document.getElementById("num1") as HTMLInputElement
const num2 = document.getElementById("num2") as HTMLInputElement
const addBtn = document.getElementById('addBtn') as HTMLButtonElement

function add(a: number, b: number) {
  return a + b
}

addBtn.addEventListener("click", () => {
  console.log(add(+num1.value, +num2.value))
})

// You Should Not Passed!
// add("a", "b")