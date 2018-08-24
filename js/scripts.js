//backendLogic
function Pizza (size, toppings) {
  this.size=size;
  this.toppings=toppings;
}
//frontendLogic
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
    //backendLogic
    var toppingsPrice = (toppings.length * 0.50);
    var sizePrice = price;
     console.log(sizePrice);
    if(size==="Small") {
      var price = 8;
    } else if(size==="Medium") {
      var price = 10;
    } else if(size==="Large") {
      var price = 12
    } else if(size==="X-Large") {
      var price= 14;
    }else {
      alert("Sorry --Select-- is not an option, please use the drop down arrow to see your options.")
    }
    var newPizza = new Pizza(size, toppings);
    //frontendLogic
    $(".output").append("<p>" + newPizza.size + ": " + newPizza. toppings + "</p>")
  });
});
