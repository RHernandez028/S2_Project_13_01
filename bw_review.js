"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Gabriel Hernandez
   Date: 3/25/19  
   
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

window.onload = init;

//define event listners
function init() {
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }    
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

//color star when the user moves the pointer over star image
function lightStars(e) {
      var starNumber = e.target.alt;
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }

      // displays the number of starts the user selects
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";       
      } 
      document.getElementById("rating").value = starNumber + " stars";
     
      //unlights the star after the images pointer moves off the star image
      e.target.addEventListener("mouseleave", turnOffStars);
     
      //when star has been clicked then the event listener will be removed
      e. target.addEventListener("click", function() {
            e.target.removeEventListener("mouseleave", turnOffStars);
      });
}

// unlight the star when the user moves the mouse pointer off the star image
function turnOffStars() {
      var stars = document.querySelectorAll("span#stars img"); 
      
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";      
      }
      document.getElementById("rating").value = "";
}

//keeps a running total of the number of characters that the user has typed
function updateCount() {

      // gives the value of the text area box to the variable named comments box
      var commentText = document.getElementById("comment").value;

      var charCount = countCharacters(commentText);
      
      var wordCountBox = document.getElementById("wordCount");

      wordCountBox.value = charCount + "/1000";
      
      // displays the character count 
      if (charCount > 1000) {
            wordCount.style.color = "white";
            wordCount.style.backgroundColor = "red";
      } else {
            wordCount.style.color = "black";
            wordCount.style.backgroundColor = "white";
      }
}

function countCharacters(textStr) {

}
  


  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   