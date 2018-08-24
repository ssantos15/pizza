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
    $("#output").show();
    var size = $("#sizes").val();
    var toppings = [];
    $("input:checkbox[name=chooseToppings]:checked").each(function(){
      var chooseToppings = $(this).val();
      toppings.push(chooseToppings);
    });
    //backendLogic
    var toppingsPrice = (toppings.length * 0.50);
    if(size==="Small") {
      var totalPrice = 10 + toppingsPrice;
    } else if(size==="Medium") {
      var totalPrice = 12 + toppingsPrice;
    } else if(size==="Large") {
      var totalPrice = 14 + toppingsPrice;
    } else if(size==="X-Large") {
      var totalPrice= 16 + toppingsPrice;
    }else {
      alert("Sorry --Select-- is not an option, please use the drop down arrow to see your options.")
    }
    var newPizza = new Pizza(size, toppings);
  //frontendLogic
    $("#output span").append(newPizza.size)
    $("#output").last().click(function() {
      $("#order").toggle();
      $(".mainPage").toggle();
      $(".output1").text(newPizza.size);
      $(".oToppings").text(newPizza.toppings);
      $(".price").text(totalPrice);
    });
  });
});
