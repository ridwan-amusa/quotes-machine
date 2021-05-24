import React, {useState, useEffect } from 'react';
import './App.scss';
import COLORS_ARRAY from "./colorsArray.js";

let quotesDbUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";


function App() {
  const [quote, setQuote] = useState("Life isn’t about getting and having, it’s about giving and being.");
  const [index, setIndex] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);
  const [author, setAuthor] = useState("Kevin Kruse");
  const [bColor,setbColor] = useState('#FF1A66');

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json();
    setQuotesArray(parsedJSON.quotes)
  }

  useEffect(() => {
    fetchQuotes(quotesDbUrl)
  }, [])





  const getRandomQuote = () => {
    let number = Math.floor(Math.random() * quotesArray.length);
    let indexOfColor = Math.floor(Math.random() * COLORS_ARRAY.length);
    setIndex(number);
    setQuote(quotesArray[index].quote);
    setAuthor(quotesArray[index].author);
    setbColor(COLORS_ARRAY[indexOfColor])


  }

  return (
    <div className="App">
      <div className="App-body" style = {{backgroundColor: bColor, color: bColor}}>

        <div id="quote-box">
            <p id="text"  style ={{color: bColor}}> 
              "{quote}"
            </p>
            <p id="author" style ={{color: bColor}} >
            - {author}
            </p>
            <button style ={{backgroundColor: bColor}} id="new-quote" onClick={() => getRandomQuote()}>
              Change Quote
            </button>
            <a style ={{backgroundColor: bColor}} href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} - ${author}`)} id="tweet-quote">tweet</a> 

        </div>
        
        
      </div>
    </div>
  );
}

export default App;
