$(document).ready(function(){
  
  $(".reset").toggle("slow");

  $("#submit").click(function(){
    rePrintQuestion();
    inputVerify();
    getRandomImage(random_images_array);
    $(".reset").toggle("slow");
  });

  $(".reset").click(function(){
    $(".qgrab, #g_image").empty()

      $( "#qbox" ).toggle( "slow" );
      $( "#homepage" ).toggle( "slow" );
    $(".reset").toggle("slow");
 });


});


  function rePrintQuestion(){

    var question = document.getElementById("input").value;
    // document.write(question); document.close();
    $(".qgrab").append(question)
  }


  function inputVerify(){
    // Retrieve the text from the input box
    var question = document.getElementById("input").value;
    // Verify the input is a valid question by presence of a ?
    var validTest = /\?/g;
    var qMark = question.match(validTest)
    console.log(qMark)
      if (qMark[0] = "?"){

        $( "#qbox" ).toggle( "slow" );
        $( "#homepage" ).toggle( "slow" );
        // Reset the question input box
        document.getElementById("input").value ="";
      } 
    
    // else if (validTest = false) { 
    //   verify = alert("Please use a question mark to ask your question");

    // }

    // document.write(verify)
  }

  var random_images_array = ["blanchememe1.jpg", "blanchememe10.jpg", "blanchememe2.jpg",
    "blanchememe3.jpg", "blanchememe4.jpg", "blanchememe5.jpg", "blanchememe6.jpg", 
    "blanchememe7.jpg", "blanchememe8.jpg", "blanchememe9.jpg", "dorothymeme1.jpg",
    "dorothymeme2.jpg", "dorothymeme3.jpg", "dorothymeme4.jpg", "dorothymeme5.jpg",
    "dorothymeme6.jpg", "rosememe1.jpg", "rosememe2.jpg", "rosememe3.jpg",
    "rosememe4.gif", "sophiameme1.jpg", "sophiameme2.jpg", "sophiameme3.jpg",
    "sophiameme4.jpg", "sophiameme5.jpg", "sophiameme6.jpg", "sophiameme7.jpg", 
    "sophiameme8.jpg"
  ];

  function getRandomImage(imgAr, path) {
    path = path || 'app/assets/images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    // document.write(imgStr); document.close();

    $( "#g_image" ).append(imgStr);

  }
  

// how to clear image and question for redo

 // $("#submit").click(function(){
 //   $("#reprinted_question, #g_image").empty()
 //   rePrintQuestion();
 //   inputVerify();
 //   getRandomImage(random_images_array);
 // });


// pseudo:

// ask a question - yes
// verify the presence of a question mark. - yes
// if not, ask for a question mark  - WIP
// if so grab input - yes
// disappear question box - yes
// answer with a meme 
// put question back on page so can remember it
// button to ask again. 
