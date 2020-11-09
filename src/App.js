import { useState } from "react";
import "./App.css";
import "./App.scss";
import QuoteBox from "./QuoteBox/QuoteBox";

const quotes = [
  {
    text:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    colour: "red",
  },
  {
    text: "We become what we think about.",
    author: "Earl Nightingale",
    colour: "pink",
  },
  {
    text: "Education costs money. But then so does ignorance.",
    author: "Sir Claus Moser",
    colour: "lightskyblue",
  },
  {
    text:
      "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
    author: "Erma Bombeck",
    colour: "green",
  },
  {
    text: "Nothing is impossible, the word itself says, “I’m possible!”",
    author: "Audrey Hepburn",
    colour: "red",
  },
  {
    text: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
    colour: "lightskyblue",
  },
  {
    text:
      "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama",
    colour: "green",
  },
];
function App() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[randomIndex]);
  const [colour, setColour] = useState("red");

  const handleClick = () => {
    // Durstenfeld shuffle
    for (let i = quotes.length - 1; i > 0; i--) {
      // pick next item in array
      const j = Math.floor(Math.random() * (i + 1));
      // swap the newly picked one with the current one
      let newQuote = ([quotes[i], quotes[j]] = [quotes[j], quotes[i]]);
      // set quote and colour to the value in the swapped arrays
      setQuote(newQuote[0]);
      setColour(newQuote[0].colour);
    }
  };

  return (
    <div className="App">
      <QuoteBox
        quotes={quote}
        clickQuote={() => handleClick()}
        changeColour={colour}
      />
    </div>
  );
}

export default App;
