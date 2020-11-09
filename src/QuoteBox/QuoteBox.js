function QuoteBox({ quotes, clickQuote, changeColour }) {
  return (
    <div className={`quote__box ${changeColour}`} id="quote-box">
      <h2 className="quote__text" id="text">
        {quotes.text}
      </h2>
      <p className="quote__author" id="author">
        {quotes.author}
      </p>

      <div>
        <a
          className="twitter-share-button"
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quotes.text}%20${quotes.author}`}
          title="Tweet this quote"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="tumblr-share-button"
          href="https://www.tumblr.com/share"
          title="Post this quote on Tumblr"
        >
          <i className="fab fa-tumblr-square"></i>
        </a>

        <button className="quote__button" id="new-quote" onClick={clickQuote}>
          New quote
        </button>
      </div>
    </div>
  );
}
export default QuoteBox;
