import React, {useState} from 'react';

const Quote = () => {

    const [quotes, setQuotes] = useState('');

    const generateQuote= () => {
        fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
            .then((response) => response.json())
            .then((data) => {
                let randomNumb = Math.floor(Math.random() * data.length);
                setQuotes(data[randomNumb]);
            });
    };

    return (
        <div className="quote__container">
            <h1 className="quote__current">{quotes.quote}</h1>
            <h4 className="quote__author">{quotes.author}</h4>
            <button className="quote__rnd" onClick={generateQuote}>Losuj cytat</button>
            <button className="quote__prev">Poprzedni cytat</button>
        </div>
    );
};


export default Quote;