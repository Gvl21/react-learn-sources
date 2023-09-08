import { log } from 'console';
import React from 'react';

function Movie() {
    const getMovie = async () => {
        const url = 'https://yts.mx/api/v2/list_movies.json';
        const response = (await fetch(url)).json();
        console.log(response);
    };
    getMovie();
    return <div></div>;
}

export default Movie;
