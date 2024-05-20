




// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // returns string
    return inputString;
  }
  

// click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // now let's sort it
    userNameSorted = sortString(userName);
    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });