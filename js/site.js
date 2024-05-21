

$("#output").html('<div class="text2"><p>' + "UCSC" + '</p></div>');


// add a click listener to the all buttons and toggle special effect
$("#porter").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).toggleClass("special");
});