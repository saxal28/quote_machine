$(document).ready(function() {
 
  $(".next-quote").click(function() {
    var num = Math.floor(Math.random() * (8 - 0 + 1) + 0);
    $(".blockquote").empty();
    //json code to add quotes
    $(".blockquote").html(quotes[num].quote);
    $(".author").html("— "+ quotes[num].author);
      //end json code
    //twitter button functionality
    //end twitter button
  });
});

var quotes = [
  {
    "author":"Kevin Kruse",
    "quote":"Life isn’t about getting and having, it’s about giving and being."
  },
  {
    "author":"Napoleon Hill",
    "quote": "Whatever the mind of man can conceive and believe, it can achieve."
  },
   {
    "author":  "Albert Einstein",
    "quote": "Strive not to be a success, but rather to be of value."
  },
   {
    "author": "Robert Frost",
    "quote": "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference."
  },
   {
    "author": "Florence Nightingale",
    "quote": "I attribute my success to this: I never gave or took any excuse."
  },
   {
    "author":"Wayne Gretzky",
    "quote": "You miss 100% of the shots you don’t take."
  },
  {
    "author":"Jack Dempsey",
    "quote":  "A champion is someone who gets up when they can’t."  
  },
  {
    "author":"Mark Bell",
    "quote": "The road to nowhere is paved with excuses." 
  },
  {
    "author":" Mike Tyson",
    "quote": "Discipline is doing what you hate to do, but nonetheless doing it like you love it." 
  }
]
  /* 

  --to do list--
    [] add quote author support
    [] add tweet functionality
    [] add next quote functionality
    [] mayne add chane background support on each click
    [] leave signature at the end
    [] check this when its completed
    
  */