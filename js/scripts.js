//back end------------------------------------------------

//ingredient definitions
var selectedToppings = [];
var peppers = { name: "Peppers", price: 0.50 };
var redOnions = { name: "Red onions", price: 0.25 };
var mushrooms = { name: "Mushrooms", price: 0.75 };
var extraCheese = { name: "Extra cheese", price: 0.25 };
var parmesan = { name: "Parmesan", price: 0.50 };
var mozzarella = { name: "Mozzarella", price: 0.50 };
var tomatoSauce = { name: "Tomaoto sauce", price: 0.25 };
var bbqSauce = { name: "BBQ sauce", price: 0.75 };
var pestoSauce = { name: "Pesto sauce", price: 1.00 };
var garlicSauce = { name: "Garlic sauce", price: 0.75 };

var small = { name: "Small", price: 4.99 };
var medium = { name: "Medium", price: 7.99 };
var large = { name: "Large", price: 9.99 };

//creates pizza object
function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaPrice = 0;
}

//determines price of order
Pizza.prototype.price = function() {
  var sizePrice = this.pizzaSize.price;
  var toppingsPrice = 0;

  for (i=0; i<=this.pizzaToppings.length-1; i++) {
    toppingsPrice = toppingsPrice + this.pizzaToppings[i].price;
  }
  this.pizzaPrice = sizePrice + toppingsPrice;
}

//front end------------------------------------------------
$(document).ready(function() {
  $("#topping-button").click(function(event) {
    event.preventDefault();
    var selectedTopping = eval($("#toppings").val());
    selectedToppings.push(selectedTopping);
    console.log(selectedToppings);
  });
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var selectedSize = eval($("#sizes").val());
    var newPizza = new Pizza(selectedSize, selectedToppings);
    console.log(newPizza);
    newPizza.price();
    $("#pizza-cost").text("$" + newPizza.pizzaPrice);
  });
});
