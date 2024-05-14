

function generateQuote() {
    var author = ["Oscar Wilde", "Frank Zappa", "Albert Einstein", "Marcus Tullius Cicero","Wayne Gretzy","Frank Sinatra"];
    var quotes = [
        "“Be yourself; everyone else is already taken.”",
        "“So many books, so little time.”",
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "“A room without books is like a body without a soul.”",
        "“You miss 100% of the shots you don't take.”",
        "“The best revenge is massive success.”",
       
    ];

    var index = Math.floor(Math.random() * quotes.length);
    
    var randomQuote = quotes[index];
    var randomAuthor = author[index];

    document.getElementById("quoteOutput").innerHTML = randomQuote;
    document.getElementById("authorOutput").innerHTML = "--" + randomAuthor;
    document.getElementById("quoteOutput").style.display = "block";
    document.getElementById("authorOutput").style.display = "block";
}