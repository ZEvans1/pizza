//back end
var toppings = [];

function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}


//front end
$(document).ready(function() {
  $("#topping-button").click(function(event) {
    event.preventDefault();
    var selectedTopping = $("#toppings").val();
    toppings.push(selectedTopping);
    console.log(toppings);
  });
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("#sizes").val();
  });
});
