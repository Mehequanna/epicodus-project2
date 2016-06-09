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
    if (landscape != sounds && landscape != nightlife && nightlife != sounds) {
      $("#result-indecisive").show();
    }

    // Results caulculations, beach = +6, city = +3, mountains = +1
    if (landscape === "beach") {
      locationScore += 6;
    } else if (landscape === "city") {
      locationScore += 3;
    } else if (landscape === "mountains") {
      locationScore += 1;
    }

    if (sounds === "beach") {
      locationScore += 6;
    } else if (sounds === "city") {
      locationScore += 3;
    } else if (sounds === "mountains") {
      locationScore += 1;
    }

    if (nightlife === "beach") {
      locationScore += 6;
    } else if (nightlife === "city") {
      locationScore += 3;
    } else if (nightlife === "mountains") {
      locationScore += 1;
    }

    console.log(locationScore);

    // $("#result-beach, #result-city").show();

    event.preventDefault();
  });
});
