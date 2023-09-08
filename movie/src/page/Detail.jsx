import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function Detail() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const MovieDetails = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #999;
        min-width: ;
    `;

    // API 요청 https://yts.mx/api/v2/movie_details.json?movie_id=${id}
    const getInfo = async () => {
        const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
        console.log(url);

        const response = await (await fetch(url)).json();
        console.log(response);
        setLoading(false);

        setDetail(response.data.movie);
    };

    // 데이터를 response json 으로 맏아서

    // 내가 디테일 페이지에 넣고 싶은 내용을 찾아 렌더링
    useEffect(() => {
        getInfo();
    }, []);

    // 로딩

    if (loading) return <div>로딩</div>;
    else {
        return (
            <>
                <Link to={'/'}>홈으로</Link>
                <MovieDetails>
                    <img src={detail.large_cover_image} alt='' />
                    <div>
                        <h2>{detail.title_long}</h2>
                        <h3>출시연도 : {detail.year}</h3>
                        <p>평점 : {detail.rating}</p>
                    </div>
                </MovieDetails>
            </>
        );
    }
}

export default Detail;
