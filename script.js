
var heart = document.getElementsByClassName("fa-heart");
var unclick = [false, false, false];
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", RedHeart);
  function RedHeart() {
    if (unclick[i] == false) {
      heart[i].style.color = "red";
      unclick[i] = true;
    } else {
      heart[i].style.color = "black";
      unclick[i] = false;
    }
  }
}

var plus = Array.from(document.getElementsByClassName("fa-plus-circle"));
var quantity = Array.from(document.getElementsByClassName("quantity"));
var moins = Array.from(document.getElementsByClassName("fa-minus-circle"));
var total = Number(document.getElementById("sum").innerHTML);
var unitPrice = Array.from(document.getElementsByClassName("price"));
var trash = Array.from(document.getElementsByClassName('fa-trash-alt'));
var card = Array.from(document.getElementsByClassName('card'));

for(let i=0; i< trash.length; i++) {
  trash[i].addEventListener('click', function() {
    card[i].remove();
    totalPrice()
  })
}

for(let i=0; i< trash.length; i++){
  plus[i].addEventListener("click", add);
  function add() {
    quantity[i].innerHTML++;
    totalPrice()
}}

for (let i=0; i< trash.length; i++) {
  moins[i].addEventListener("click", substruction);
    function substruction() {
      if (quantity[i].innerHTML >= 1) {
        quantity[i].innerHTML--;
        totalPrice()
      } else {
      return alert("invalid quantity");
}}}

function totalPrice () {
  var tot = 0 ;
  var quant = Array.from(document.getElementsByClassName("quantity"));
  var price = Array.from(document.getElementsByClassName("price"));
for (let j = 0; j < quant.length; j++) {
  console.log(quant[j].innerHTML, price[j].innerHTML)
  tot += (quant[j].innerHTML * price[j].innerHTML)
}
  document.getElementById("sum").innerHTML = tot;
}