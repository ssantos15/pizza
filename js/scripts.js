//frontendLogic
function Pizza (size, toppings) {
  this.size=size;
  this.toppings=toppings;
}
//backendLogic
$(document).ready(function() {
  $("#options").submit(function(event) {
    debugger;
    event.preventDefault();
    var size = $("#sizes").val();
    var toppings = [];
    $("input:checkbox[name=chooseToppings]:checked").each(function(){
      var chooseToppings = $(this).val();
      toppings.push(chooseToppings);
    });
    var newPizza = new Pizza(size, toppings);
    $(".output").append("<p>" + newPizza.size + ": " + newPizza. toppings + "</p>")
  });
});
