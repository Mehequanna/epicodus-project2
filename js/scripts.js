$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("#nameInput").val();
    var age = parseInt($("#ageInput").val());
    var landscape = $("input:radio[name=landscape]:checked").val();
    var sounds = $("input:radio[name=sounds]:checked").val();
    var nightlife = $("input:radio[name=nightlife]:checked").val();
    var locationScore = 0;

    if (landscape === "landscapeBeach") {
      locationScore += 1;
    }
    console.log(locationScore);



    event.preventDefault();
  });
});
