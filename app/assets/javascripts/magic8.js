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

    if (qMark == ["?"]){
      answerQuestion;
    } else  {
      alert("These ladies are not existentialists. Please use a question mark
        to ask your question.");
    }

        // Reset the question input box
    document.getElementById("input").value =""
  }

});  