"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Evelyn Duarte
   Date: 3/12/19  
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
// event handler that will run the init function
window.onload = init;
// The init function to define event listeners.
function init() {
      var stars = document.querySelectorAll("span#stars img");
      //for loop states is cursor is a pointer and adding an event listener with the mouseenter event. 
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      document.getElementById("comment").addEventListener("keyup", updateCount);
}
// in the lightStars function, the stars are lit up and the for loops are there to put in the images needed for the stars, the array has src to specify. The function also turned the event off when not on it by the events being used.
function lightStars(e) {
      var starNumber = e.target.alt;
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";

      }
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";

      }
      document.getElementById("rating").value = starNumber + " star(s)";
      stars[i].addEventListener("mouseleave", turnOffStars);

      stars[i].addEventListener("click",
            function () {
                  document.removeEventListener("mouseleave", turnOffStars);

            });
}
// The turnOffStars function has an object collection and a for loop that will place an image when conditions are met.
function turnOffStars(e) {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = "";
}
// Declared the commenttext by getting the element by the id of comment. The charcount has parameters of commentText. The loop states that when there are more than 1000 words, it is red. If not, if goes back to white.
function updateCount() {
      var commentText = document.getElementById("comment").value;
      var charCount = countCharacters(commentText);
      var wordCountBox = document.getElementById("wordCount");
      wordCountBox.value = charCount + "/1000";
      if (charCount > 1000) {
            wordCountBox.style.color = "white";
            wordCountBox.style.backgroundColor = "red";
      } else {
            wordCountBox.style.color = "black";
            wordCountBox.style.backgroundColor = "white";
      }
}


/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}