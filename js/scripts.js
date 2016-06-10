$(document).ready(function() {
  $("form").submit(function(event) {
    // Form input variables
    var name = $("#nameInput").val();
    var age = parseInt($("#ageInput").val());
    var landscape = $("input:radio[name=landscape]:checked").val();
    var sounds = $("input:radio[name=sounds]:checked").val();
    var nightlife = $("input:radio[name=nightlife]:checked").val();

    // This will add the name and age into hidden divs
    $(".name").text(name);
    $(".age").text(age);

    // Variable to determine result
    var locationScore = 0;

    // Results caulculations, beach = +6, city = +3, mountains = +1
    if (landscape === "beach") {
      locationScore += 5;
    } else if (landscape === "city") {
      locationScore += 3;
    } else if (landscape === "mountains") {
      locationScore += 1;
    }

    if (sounds === "beach") {
      locationScore += 5;
    } else if (sounds === "city") {
      locationScore += 3;
    } else if (sounds === "mountains") {
      locationScore += 1;
    }

    if (nightlife === "beach") {
      locationScore += 5;
    } else if (nightlife === "city") {
      locationScore += 3;
    } else if (nightlife === "mountains") {
      locationScore += 1;
    }

    // This will resolve the issue of overlapping scores. (For example, if I chose beach x2 and mountains x1 I'd get a score of 11 and it would show the beach result. If I chose city x2 and beach x1 I'd also get 11 and it would show the beach result. The second result would be incorrect based on the choices.)
    if (locationScore === 7 && nightlife === "beach" || locationScore === 7 && sounds === "beach" || locationScore === 7 && landscape === "beach" || locationScore === 11 && nightlife === "beach" && sounds === "city" && landscape === "city" || locationScore === 11 && sounds === "beach" && nightlife === "city" && landscape === "city" || locationScore === 11 && landscape === "beach" && sounds === "city" && nightlife === "city") {
      locationScore -= 1;
    }

    // Actions based on locationScore
    if (landscape != sounds && landscape != nightlife && nightlife != sounds) {
      $("#result-indecisive").show("slow");
      $("#result-mountains, #result-beach, #result-city").hide('slow');
    } else if (locationScore === 0) {
      alert("Please select some answers!");
    } else if (locationScore <= 6 ) {
      $("#result-mountains").show('slow');
      $("#result-city, #result-indecisive, #result-beach").hide('slow');
    } else if (locationScore <= 10) {
      $("#result-city").show('slow');
      $("#result-mountains, #result-indecisive, #result-beach").hide('slow');
    } else if (locationScore <= 15) {
      $("#result-beach").show('slow');
      $("#result-mountains, #result-indecisive, #result-city").hide('slow');
    }

    event.preventDefault();
  });
});
