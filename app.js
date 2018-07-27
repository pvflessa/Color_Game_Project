
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];



/* 1) SELECT ALL SQUARES
LOOP THROUGH THEM
AND THEN ASSIGN ONE COLOR FROM THE "COLORS" ARRAY TO EACH ONES BACKAGRAOUND */

/* 2) ΕΠΕΙΤΑ ΘΕΛΩ ΤΟ ΧΡΩΜΑ ΠΟΥ ΘΕΛΩ ΝΑ ΜΑΝΤΕΨΕΙ Ο ΧΡΗΣΤΗΣ ΝΑ ΕΜΦΑΝΙΖΕΤΑΙ ΜΕΣΑ ΣΤΟ h2 -> span class ="color-display" */

/* 3) ΘΕΛΩ ΟΤΑΝ ΚΑΝΕΙ ΚΛΙΚ Ο ΧΡΗΣΤΗΣ ΣΕ ΕΝΑ SQUARE ΝΑ ΒΡΙΣΚΕΙ ΤΟ BACKGROUND COLOR ΤΟΥ ΚΑΙ ΝΑ
ΤΟ ΣΥΓΚΡΙΝΕΙ ΜΕ ΤΟ goalColor */

var squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++ ){
  // 1)= ΔΙΝΩ ΤΑ ΧΡΩΜΑΤΑ ΣΕ ΚΑΘΕ ΤΕΤΡΑΓΩΝΟ
   squares[i].style.backgroundColor = colors[i];
   // 3a) = add click listeners to each square
   squares[i].addEventListener('click',function(){
     // 3b) = grab color of clicked square
     var clickedColor = this.style.backgroundColor
     // 3c) = compare color to goalColor
     if (clickedColor === goalColor) {
        alert('You WON!!!')
     }else{

       this.style.backgroundColor = '#232323' //του βάζω το ίδιο χρωμα με το body για να εξαφανιζεται
     }
   })
}

/* 2)= */

var goalColor = colors[3];
var colorDisplay = document.getElementById("color-display");

colorDisplay.textContent = goalColor;
