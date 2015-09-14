$(document).ready(function(){

  // var colors = ['EA9123','03AACC','50BD27','FFB90F','D23699','CEAEE8'];
  // $('body').css({'background': '' + colors[Math.floor(Math.random() *      colors.length)]});


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
    var imgStr = '<img src="' + path + img + '" alt = "" width = "500" height = "377">';
    // document.write(imgStr); document.close();

    $( "#g_image" ).append(imgStr);


    console.log(imgStr);      
  }



  // function getRandomColor () {
  // var hex = Math.floor(Math.random() * 0xFFFFFF);
  // return "#" + ("000000" + hex.toString(16)).substr(-6);
  // }

  // function ran_col() { //function name
  //   var color = '#'; // hexadecimal starting symbol
  //   var letters = ['EA9123','03AACC','50BD27','FFB90F','D23699','CEAEE8']; //Set your colors here
  //   color += letters[Math.floor(Math.random() * letters.length)];
  // }



// pseudo:

// ask a question - yes
// verify the presence of a question mark. - yes
// if not, ask for a question mark  - WIP
// if so grab input - yes
// disappear question box - yes
// answer with a meme - yes
// put question back on page so can remember it - yes
// button to ask again.  - yes
// reset img and question div - yes

