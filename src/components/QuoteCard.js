import React from 'react';
import './QuoteCard.css';

function QuoteCard ({simpson}){
    return(
        <figure className="QuoteCard">
        <img
        src={simpson.image}
        alt={simpson.character}
        />
        <figcaption>
          <blockquote>
            {simpson.quote}
          </blockquote>
          <p>
          <cite>{simpson.character}</cite>
          </p>
        </figcaption>
      </figure>
    );
}

export default QuoteCard;