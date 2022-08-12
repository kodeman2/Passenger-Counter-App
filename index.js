// document.getElementById("count-el").innerText = 5

 //initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when button is clicked
//change thr count-el in the html to reflect the new count
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function increment() {
 count = count + 1
 countEl.innerText = count
 console.log(count)
}
function save() {
 console.log(count)
}
save()