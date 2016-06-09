$(document).ready(function() {
  $("form").submit(function(event) {
    // Form input variables
    var name = $("#nameInput").val();
    var age = parseInt($("#ageInput").val());
    var landscape = $("input:radio[name=landscape]:checked").val();
    var sounds = $("input:radio[name=sounds]:checked").val();
    var nightlife = $("input:radio[name=nightlife]:checked").val();

    // Variable to determine result
    var locationScore = 0;

    // Unique results

    // Results caulculations, beach = +6, city = +3, mountains = +1
    if (landscape === "landscapeBeach") {
      locationScore += 6;
    } else if (landscape === "landscapeCity") {
      locationScore += 3;
    } else if (landscape === "landscapeMountains") {
      locationScore += 1;
    }

    if (sounds === "soundsBeach") {
      locationScore += 6;
    } else if (sounds === "soundsCity") {
      locationScore += 3;
    } else if (sounds === "soundsMountains") {
      locationScore += 1;
    }

    if (nightlife === "nightlifeBeach") {
      locationScore += 6;
    } else if (nightlife === "nightlifeCity") {
      locationScore += 3;
    } else if (nightlife === "nightlifeMountains") {
      locationScore += 1;
    }

    console.log(locationScore);

    // $("#result-beach, #result-city").show();

    event.preventDefault();
  });
});
