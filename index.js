// document.getElementById("count-el").innerText = 5

 //initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when button is clicked
//change thr count-el in the html to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
function increment() {
 count += 1
 countEl.textContent = count
 
}
function save() {
 let newp = count + " - " 
 saveEl.textContent += newp
 countEl.textContent = 0
 count = 0 
}
