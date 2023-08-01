import React from "react";
import "./quote.css";
import { Fade } from "react-slideshow-image";

const QuoteCard = ({ quote, author }) => {
  return (
    <div className="quote-card" name="about">
      <blockquote>
        {quote}
        <p className="author">- {author}</p>
      </blockquote>
    </div>
  );
};

const QuotesSection = () => {
  const quotesData = [
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote:
        "A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.",
      author: " Charles Baudelaire",
    },
    {
      quote:
        "Reading should not be presented to children as a chore, a duty. It should be offered as a gift.",
      author: "Kate DiCamillo",
    },
    {
      quote:
        "I think books are like people, in the sense that they’ll turn up in your life when you most need them.",
      author: " Emma Thompson",
    },
  ];
  return (
    <div className="quotes-section">
      <Fade>
        {quotesData.map((quoteObj, index) => (
          <QuoteCard
            key={index}
            quote={quoteObj.quote}
            author={quoteObj.author}
          />
        ))}
      </Fade>
    </div>
  );
};

export default QuotesSection;
