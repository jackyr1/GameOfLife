
//ucsc big word title
$("#output").html('<div class="text2"><p>' + "UCSC" + '</p></div>');

//hides and makes info appear
$("#start").click(function(){
   // gets rid of first page
    $("#startpage").addClass("hidden");
    // brings in day1
    $("#day1").removeClass("hidden");
})  
