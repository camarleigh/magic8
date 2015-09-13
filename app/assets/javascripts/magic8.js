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
      answerQuestion
    } else  {
      alert( "These ladies are not exestentialists. Please use a question mark
        to ask your question.")
    }

    // if valid {
    //       alert("Proper grammar, please! Are you asking a question?
    //         Then you'll probably need a question mark. Thanks! ");
    //     }

    // // If it doesn't, mark it as a MISS
    // // Check if the guess matches one of our ships locations    // var i = guess; 
    // if (board[guess] == 1 ){ 
    //   board[guess] = "X"; 
    //   alert("HIT! You sank my Battleship!");
    // }
    // // If it does, mark is as a HIT
    // else if(board[guess] == 0){ 
    //   board[guess] = "_";
    //   alert("MISS! Try again!");
      
    // } 

    // guess = "";
    // Reset the question input box
    // document.getElementById("input").value =""


  }

});  