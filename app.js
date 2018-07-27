
/* 0) SELECT ALL SQUARES
LOOP THROUGH THEM
AND THEN ASSIGN ONE COLOR FROM THE "COLORS" ARRAY TO EACH ONES BACKAGRAOUND */


/* 1) SELECT A RANDOM COLOR */


/* 2) ΕΠΕΙΤΑ ΘΕΛΩ ΤΟ ΧΡΩΜΑ ΠΟΥ ΘΕΛΩ ΝΑ ΜΑΝΤΕΨΕΙ Ο ΧΡΗΣΤΗΣ ΝΑ ΕΜΦΑΝΙΖΕΤΑΙ ΜΕΣΑ ΣΤΟ h2 -> span class ="color-display" */

/* 3) ΘΕΛΩ ΟΤΑΝ ΚΑΝΕΙ ΚΛΙΚ Ο ΧΡΗΣΤΗΣ ΣΕ ΕΝΑ SQUARE ΝΑ ΒΡΙΣΚΕΙ ΤΟ BACKGROUND COLOR ΤΟΥ ΚΑΙ ΝΑ
ΤΟ ΣΥΓΚΡΙΝΕΙ ΜΕ ΤΟ goalColor */

/* 4) ΘΕΛΩ ΣΕ ΕΝΑ ΣΗΜΕΙΟ ΤΗΣ ΣΕΛΙΔΑΣ ΝΑ ΦΑΙΝΕΤΑ ΕΝΑ ΜΗΝΥΜΑ ΑΝ ΕΙΝΑΙ ΣΩΣΤΟ Η ΛΑΘΟΣ */

/* 5) ΘΕΛΩ ΑΝ ΒΡΩ ΤΟ ΣΩΣΤΟ ΟΛΑ ΤΑ ΤΕΤΡΑΓΩΝΑ ΝΑ ΠΑΡΟΥΝ ΑΥΤΟ ΤΟ ΧΡΩΜΑ ΚΑΘΩΣ ΚΑΙ ΤΟ background του h1 & h2 */




                    // SOLUTION :


var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

/* 1)= */



function pickColor(){
  //pick a random number from 0 to 6

	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
    //use that number to access the color in the array and return it
}



/* 2)= */

var goalColor = pickColor()
var colorDisplay = document.getElementById("color-display");

colorDisplay.textContent = goalColor;

/* 4)= */

var messageDisplay = document.getElementById("message");




var squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++ ){
  // 0)= ΔΙΝΩ ΤΑ ΧΡΩΜΑΤΑ ΣΕ ΚΑΘΕ ΤΕΤΡΑΓΩΝΟ
   squares[i].style.backgroundColor = colors[i];
   // 3a) = add click listeners to each square
   squares[i].addEventListener('click',function(){
     // 3b) = grab color of clicked square
     var clickedColor = this.style.backgroundColor
     // 3c) = compare color to goalColor
     if (clickedColor === goalColor) {
        /* 4)= */
        messageDisplay.textContent = 'You Won'
        /* 5)= */
        changeColors(clickedColor)
     }else{

       this.style.backgroundColor = '#232323' //του βάζω το ίδιο χρωμα με το body για να εξαφανιζεται
      /* 4)= */
       messageDisplay.textContent = 'Try again'
     }
   })
}


/* 5)= */

function changeColors(color){
  //loop through all SQUARES

  for(var i = 0; i < squares.length; i++ ){
    //change each color to match given color (with clickedColor after the player's success)
    squares[i].style.backgroundColor = color;
  }
}
