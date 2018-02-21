// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var selectedNumber;
var selectedQuote;
var selectedSouce;
var selectedCitation;
var selectedYear;
var finalQuote;
var selectedNumberList = [];
var quotes = [
  {
  quote: "It's been so lonely without you here, Like a bird without a song",
  source: "Prince",
  citation: "Nothing Compares 2 U",
  year: "2002",
},
  {
  quote: "I wanna glide down over Mulholland, I wanna write her name in the sky",
  source: "Tom Petty",
  citation: "Free Fallin",
  year: "1989",
},
  {
  quote: "You may say I'm a dreamer. But I'm not the only one",
  source: "John Lennon",
  citation: "Imagine",
  year: "1971",
},
];

function getRandomQuote() {
selectedNumber = Math.floor(Math.random() * Math.floor(quotes.length));
selectedNumberList.push(selectedNumber);
console.log("before");
console.log(selectedNumber);
console.log(selectedNumberList.slice(-2)[0]);
console.log(selectedNumberList);
while (parseInt(selectedNumberList[selectedNumberList.slice(-2)[0]]) === selectedNumber){
  selectedNumber = Math.floor(Math.random() * Math.floor(quotes.length));
  selectedNumberList.push(selectedNumber);
  console.log("replace");
  console.log(selectedNumber);
  console.log(selectedNumberList.slice(-2)[0]);
  console.log(selectedNumberList);
  console.log("change number");
}

  selectedQuote = quotes[selectedNumber].quote;
  selectedSouce = quotes[selectedNumber].source;
  selectedCitation = quotes[selectedNumber].citation;
  selectedYear = quotes[selectedNumber].year;
  console.log("run");
  console.log(selectedNumber);
  console.log(selectedNumberList.slice(-2)[0]);
  console.log(selectedNumberList);
};


function printQuote() {
  getRandomQuote();
  finalQuote = "<p class='quote'>" + selectedQuote + "</p> <p class='source'>" + selectedSouce +
  "<span class='citation'>" + selectedCitation + "</span> <span class='year'>" + selectedYear + "</span> </p>";
  document.getElementById('quote-box').innerHTML = finalQuote;
};

printQuote();
