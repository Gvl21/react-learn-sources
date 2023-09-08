import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const MovieItemBlock = styled.div`
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
    background-color: #777;
    padding: 10px;
    margin: 2rem;
    margin-top: 4rem;
    box-shadow: 5px 5px 5px 5px rgba(50, 50, 50, 0.25);

    img {
        position: relative;
        top: -40px;
        width: 100px;
        min-width: 150px;
        box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.25);
    }
    a {
        text-decoration: none;
        color: black;
    }
`;

function MovieItem(props) {
    return (
        <MovieItemBlock key={props.id}>
            <img src={props.medium_cover_image} alt='' />

            <div>
                <h2>
                    <Link to={`/detail/${props.id}`}>{props.title}</Link>
                </h2>

                <h3>{props.year}</h3>
                <p>{props.summary}</p>
            </div>
        </MovieItemBlock>
    );
}

export default MovieItem;
