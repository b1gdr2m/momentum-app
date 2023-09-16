const quotes = [
    {quote: "The way to get started is to quit talking and begin doing.", 
     author: "-Walt Disney"
}, {
    quote: "Life is either a daring adventure or nothing at all.", 
    author: "-Helen Keller"
}, {
    quote: "Never go on trips with anyone you do not love.", 
    author: "-Hemmingway"
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//이때 quote와 author은 quotes 안의 property?임 

