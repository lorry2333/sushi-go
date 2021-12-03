/*-----overlay---------*/





 /*----Tamago overlay page--*/

 function openTamago() {
  document.getElementById("overlay-tamago").style.height = "100%";
 console.log('open')
}

function closeTamago() {
document.getElementById("overlay-tamago").style.height = "0%";
console.log('close')
}


/*----hirame overlay page--*/

    function openHirame() {
      document.getElementById("overlay-hirame").style.height = "100%";
     console.log('open')
    }
 
  function closeHirame() {
    document.getElementById("overlay-hirame").style.height = "0%";
    console.log('close')
  }

  /*----hamachi overlay page--*/

  function openHamachi() {
    document.getElementById("overlay-hamachi").style.height = "100%";
   console.log('open')
  }

function closeHamachi() {
  document.getElementById("overlay-hamachi").style.height = "0%";
  console.log('close')
}

  /*----Ebi overlay page--*/

  function openEbi() {
    document.getElementById("overlay-ebi").style.height = "100%";
   console.log('open')
  }

function closeEbi() {
  document.getElementById("overlay-ebi").style.height = "0%";
  console.log('close')
}

 /*----Hokkigai overlay page--*/

 function openHokkigai() {
  document.getElementById("overlay-hokkigai").style.height = "100%";
 console.log('open')
}

function closeHokkigai() {
document.getElementById("overlay-hokkigai").style.height = "0%";
console.log('close')
}

/*----tako overlay page--*/

function openTako() {
  document.getElementById("overlay-tako").style.height = "100%";
  console.log('open')
 }

function closeTako() {
  document.getElementById("overlay-tako").style.height = "0%";
  console.log('close')
}



 /*----Saba overlay page--*/

 function openSaba() {
  document.getElementById("overlay-saba").style.height = "100%";
 console.log('open')
}

function closeSaba() {
document.getElementById("overlay-saba").style.height = "0%";
console.log('close')
}



 /*----Kani overlay page--*/

 function openKani() {
  document.getElementById("overlay-kani").style.height = "100%";
 console.log('open')
}

function closeKani() {
document.getElementById("overlay-kani").style.height = "0%";
console.log('close')
}



 /*----Anago overlay page--*/

 function openAnago() {
  document.getElementById("overlay-anago").style.height = "100%";
 console.log('open')
}

function closeAnago() {
document.getElementById("overlay-anago").style.height = "0%";
console.log('close')
}


 /*----Ikura overlay page--*/

 function openIkura() {
  document.getElementById("overlay-ikura").style.height = "100%";
 console.log('open')
}

function closeIkura() {
document.getElementById("overlay-ikura").style.height = "0%";
console.log('close')
}



 /*----Futomaki overlay page--*/

 function openFutomaki() {
  document.getElementById("overlay-futomaki").style.height = "100%";
 console.log('open')
}

function closeFutomaki() {
document.getElementById("overlay-futomaki").style.height = "0%";
console.log('close')
}

 /*----Philadelphia overlay page--*/

 function openPhiladelphia() {
  document.getElementById("overlay-philadelphia").style.height = "100%";
 console.log('open')
}

function closePhiladelphia() {
document.getElementById("overlay-philadelphia").style.height = "0%";
console.log('close')
}






/*-------------voice for sushi name------------------*/
/*document.querySelector(".sound").addEventListener("click", myFunction);*/
var allSound = document.querySelectorAll(".sound");
for (var i = 0; i < allSound.length; i++) {
  allSound[i].addEventListener("click", (function(x){
    return function(){
        myFunction(x);
    }
})(i));
}

console.log("voice")

function myFunction(x) {
   console.log(x)
   document.getElementById('player'+x).play()
    document.getElementById("sound"+x).style.backgroundImage = "url('image/sound2.png')";
    setTimeout(function(){
        document.getElementById("sound"+x).style.backgroundImage = "url('image/sound.png')";
    }, 2000);
    }

  





