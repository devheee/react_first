import Nav from './Nav';
import Content from './Content';
import { useEffect, useState } from 'react';


const Main = () => {
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const 영화데이터 = await fetch('https://yts.mx/api/v2/list_movies.json?limit=50&page=450').then(d => d.json())
        console.log(영화데이터.data.movies);
        setMovie(영화데이터.data.movies)
        console.log(movie)
    }
    useEffect(() => {
        // 영화 데이터 가져오기
        // 영화 데이터를 jsx에 뿌리려고 state에 담기
        getMovie();
    }, [])

    return (
        <>
            <Content />
            {
                movie.map((it, idx) => {
                    return (
                        <figure key={it.id}>
                            <img src={it.large_cover_image} />
                        </figure>
                    )
                })
            }

        </>
    )
}

export default Main;