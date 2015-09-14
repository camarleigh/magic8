$(document).ready(function(){


  $("#submit").click(function(){
    inputVerify();
    getRandomImage(random_images_array)
    });

  function inputVerify(){
    // Retrieve the text from the input box
    console.log("puppies")
    var question = document.getElementById("input").value;
    // Verify the input is a valid question by presence of a ?
    var validTest = /\?/g;
    var qMark = question.match(validTest)
    console.log(qMark)
    // var verify;

    if (qMark[0] = "?"){
      // verify = console.log(question);
      $( "#qbox" ).toggle( "slow" );
      $("#meme").toggle("slow");
      
    } 
    // else if (validTest = false) { 
    //   verify = alert("Please use a question mark to ask your question");

    // }

    // document.write(verify)
    }
   

    // Reset the question input box
    // document.getElementById("input").value =""

}); 

var random_images_array = ["blanchememe1.jpg", "blanchememe10.jpg", "blanchememe2.jpg",
 "blanchememe3.jpg", "blanchememe4.jpg", "blanchememe5.jpg", "blanchememe6.jpg", 
"blanchememe7.jpg", "blanchememe8.jpg", "blanchememe9.jpg", "dorothymeme1.jpg",
 "dorothymeme2.jpg", "dorothymeme3.jpg", "dorothymeme4.jpg", "dorothymeme5.jpg",
  "dorothymeme6.jpg", "rosememe1.jpg", "rosememe2.jpg", "rosememe3.jpg",
   "rosememe4.gif", "sophiameme1.jpg", "sophiameme2.jpg", "sophiameme3.jpg",
    "sophiameme4.jpg", "sophiameme5.jpg", "sophiameme6.jpg", "sophiameme7.jpg", 
    "sophiameme8.jpg"];

function getRandomImage(imgAr, path) {
  path = path || 'app/assets/images/'; // default path here
  var num = Math.floor( Math.random() * imgAr.length );
  var img = imgAr[ num ];
  var imgStr = '<img src="' + path + img + '" alt = "">';
  document.write(imgStr); document.close();
}



// pseudo:

// ask a question - yes
// verify the presence of a question mark. - yes
// if not, ask for a question mark  - WIP
// if so grab input - yes
// disappear question box - yes
// answer with a meme 
// put question back on page so can remember it
// button to ask again. 
