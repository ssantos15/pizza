

$(document).ready(function() {
  $("#options").submit(function(event) {
    event.preventDefault();
    var size = $("#sizes").val();
    var iToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      iToppings.push(toppings);
  });
  
});
