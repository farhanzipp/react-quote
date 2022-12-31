import { useState ,useEffect } from 'react'
import axios from 'axios'

import React from 'react'

export default function Quotes() {

    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getQuote = async () => {
            try {
                const response = await axios.get('https://animechan.vercel.app/api/random');
                setQuote(response.data);
                setError(null);
                console.log(quote);
            } catch (err) {
                setError(err.message);
                setQuote(null);
            } finally {
                setLoading(false);
            }
        };
        getQuote();
    }, [loading])

  return (
    <div className='Quotes'>
        {loading && <p>Loading...</p>}
        {!loading && <p>{quote.quote}</p>}
    </div>
  )
}
