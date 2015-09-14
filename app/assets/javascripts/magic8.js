$(document).ready(function(){


  $("#submit").click(function(){
    inputVerify();
    });

  function inputVerify(){
    // Retrieve the text from the input box
    console.log("puppies")
    var question = document.getElementById("input").value;
    // Verify the input is a valid question by presence of a ?
    var validTest = /\?/g;
    var qMark = question.match(validTest)
    console.log(qMark)
    var verify;

    if (qMark[0] = "?"){
      verify = console.log(question);
      $( "#qbox" ).toggle( "slow" );

    } 
    // else if (validTest = false) { 
    //   verify = alert("Please use a question mark to ask your question");

    // }

    // document.write(verify)
    }
   

    // Reset the question input box
    // document.getElementById("input").value =""

}); 


// pseudo:

// ask a question - yes
// verify the presence of a question mark. - yes
// if not, ask for a question mark  - WIP
// if so grab input - yes
// disappear question box - yes
// answer with a meme 
// put question back on page so can remember it
// button to ask again. 
