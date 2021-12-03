/*-----overlay---------*/

/*----tako overlay page--*/

   function openTako() {
    document.getElementById("overlay-tako").style.height = "100%";
    console.log('open')
   }

  function closeTako() {
    document.getElementById("overlay-tako").style.height = "0%";
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


/*-------------voice for sushi name------------------*/
document.querySelector(".sound").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById('player').play()
    document.querySelector(".sound").style.backgroundImage = "url('image/sound2.png')";
    setTimeout(function(){
        document.querySelector(".sound").style.backgroundImage = "url('image/sound.png')";
    }, 2000);
    }

  





