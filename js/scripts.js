$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("#nameInput").val();
    var age = parseInt($("#ageInput").val());
    var landscape = $("input:checkbox[name=landscape]:checked");
    var sounds = $("input:checkbox[name=sounds]:checked");
    var nightlife = $("input:checkbox[name=nightlife]:checked");
    var locationScore = 0;

    event.preventDefault();
  });
});
