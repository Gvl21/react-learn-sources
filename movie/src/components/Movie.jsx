import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieItem from './MovieItem';

function Movie() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState(null);

    // API를 가져오는 함수
    const option = `minimum_rating=8&sort_by=year`;
    const getMovie = async () => {
        const url = `https://yts.mx/api/v2/list_movies.json?${option}`;
        // await : Promise로 리턴된 결과값을 변수에 저장한다.
        const response = await (await fetch(url)).json();
        // fetch(url).then(res => res.json()).then(json => console.log(json))
        setLoading(false);
        setMovies(response.data.movies);
    };

    // API를 마운트 시점에 한번만 실행
    useEffect(() => {
        getMovie();
    }, []);

    // if (loading) {
    //     return <div>로딩중</div>;
    // }

    // return movies.map((e) => <div key={e.id}>{e.title}</div>);

    // movies[i].title 이 렌더링이 되도록 JSX와 로딩화면을 만들어주세요
    return (
        <div>
            {loading ? (
                <div>로딩중입니다</div>
            ) : (
                <div>
                    {movies.map((e) => (
                        <MovieItem
                            key={e.id}
                            id={e.id}
                            title={e.title}
                            medium_cover_image={e.medium_cover_image}
                            summary={e.summary}
                            year={e.year}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Movie;
