$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });

      console.log("Next, the non transport");

      $("input:checkbox[name=work-nontransportation]:checked").each(function(){
        var worknonTransportationMode = $(this).val();
        $('#work-responses').append(worknonTransportationMode + "<br>");
      });

  $("form#transportation_survey").hide();
  $("#work-responses").show();
});
});
