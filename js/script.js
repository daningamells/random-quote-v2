// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var selectedNumber;     //number from getRandomQuote function
var selectedQuote;      //quote to be displayed
var selectedSouce;      //source to be displayed
var selectedCitation;   //citation to be displayed
var selectedYear;       //year to be displayed
var genre;              //genre to be displayed
var finalQuote;         //html string
var previousNumber;     // identifier to stop same random number appearing twice
var selectedNumberList = []; //array to hold random number list
var newQuote;           //new quote to push into quotes array if user completes form
var quotes = [          //array holding quote information
  {
  quote: "It's been so lonely without you here, Like a bird without a song",
  source: "Prince",
  citation: "Nothing Compares 2 U",
  year: "2002",
  genre: "Rock",
},
  {
  quote: "I wanna glide down over Mulholland, I wanna write her name in the sky",
  source: "Tom Petty",
  citation: "Free Fallin",
  year: "1989",
  genre: "Rock",
},
  {
  quote: "You may say I'm a dreamer. But I'm not the only one",
  source: "John Lennon",
  citation: "Imagine",
  year: "1971",
  genre: "Rock",
},
];
// function to get a random number
function getRandomQuote() {
selectedNumber = Math.floor(Math.random() * Math.floor(quotes.length));
previousNumber = selectedNumberList.pop(); //save previousNumber and remove from array
selectedNumberList.push(selectedNumber);   //push random number into array
while (selectedNumber === previousNumber){
  selectedNumber = Math.floor(Math.random() * Math.floor(quotes.length));
  selectedNumberList.push(selectedNumber);
}

  selectedQuote = quotes[selectedNumber].quote; //setting variables for string
  selectedSouce = quotes[selectedNumber].source;
  selectedCitation = quotes[selectedNumber].citation;
  selectedYear = quotes[selectedNumber].year;
  genre = quotes[selectedNumber].genre;
};


function printQuote() {
  getRandomQuote();
  finalQuote = "<p class='quote'>" + selectedQuote + "</p> <p class='source'>" + selectedSouce +
  "<span class='citation'>" + selectedCitation + "</span> <span class='year'>" + selectedYear + "</span> <span class='genre'>" + genre +
  "</span> </p>";
  document.getElementById('quote-box').innerHTML = finalQuote;
};

printQuote();
// function to allow user to add own song to array
function addQuote() {
  var newQuote = document.getElementsByTagName("input")[0].value;
  var newSource = document.getElementsByTagName("input")[1].value;
  var newCitation = document.getElementsByTagName("input")[2].value;
  var newYear = document.getElementsByTagName("input")[3].value;
  var newGenre = document.getElementsByTagName("input")[4].value;
  quotes.push({
  quote: newQuote,
  source: newSource,
  citation: newCitation,
  year: newYear,
  genre: newGenre,
},);
document.getElementsByTagName("input")[0].value = ""; //empty form after submit
document.getElementsByTagName("input")[1].value = "";
document.getElementsByTagName("input")[2].value = "";
document.getElementsByTagName("input")[3].value = "";
document.getElementsByTagName("input")[4].value = "";
}

window.setInterval(printQuote, 10000);                //timer for quote change
window.setInterval(randomBgColor, 10000);             //timer for color change
//color change function
function randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    }
