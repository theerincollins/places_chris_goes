$(document).ready(function(){
  $("form#places-form").submit(function(event){
    event.preventDefault();


  var inputCity = $("input#input-city").val();
  var inputCountry = $("input#input-country").val();
  var inputYear = $("input#input-year").val();

  var newTrip = { country: inputCountry, city: inputCity, year: inputYear, memories: [] };

  $("ul#trip-list").append("<li><span class='trip'>" + newTrip.country + " " + newTrip.year + "</span></li>");






  $(".new-memory").each(function() {
    var inputDescription = $(this).find("input.input-description").val();
    var inputQuality = $(this).find("input.input-quality").val();
    var newMemory = { description: inputDescription, quality: inputQuality };
    newTrip.memories.push(newMemory);
  });



    $(".trip").last().click(function(){
      $("#show-trip").show();
      $(".country").text(newTrip.country);
      $(".city").text(newTrip.city);
      $(".year").text(newTrip.year);

      newTrip.memories.forEach(function(memory) {
        $("ul#memories").append("<li class = 'trip-details'>" + memory.description + " overall, it was pretty " + memory.quality + " </li>");
      });
    });
  });
});

$(document).ready(function(){
  $("#add-memory").click(function(){
    $("#new-memories").append('<div class="new-memory">' +
      '<div class="form-group">' +
      '<label for="input-description">Description</label>' +
      '<input type="text" class="form-control input-description">' +
      '</div>' +

      '<div class="form-group">' +
        '<label for="input-quality">Quality</label>' +
        '<input type="text" class="form-control input-quality">' +
      '</div>');
    });
  event.preventDefault();
});
