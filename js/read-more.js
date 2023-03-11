$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});
$(document).ready(function () {
    $("#toggleone").click(function () {
        var elem = $("#toggleone").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $("#toggleone").text("Read Less");
            $("#textone").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggleone").text("Read More");
            $("#textone").slideUp();
        }
    });
});