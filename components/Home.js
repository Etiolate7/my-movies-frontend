import styles from '../styles/Home.module.css';
import "antd/dist/antd.css";
import { Button, Popover } from "antd";
import Movies from './Movies';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


function Home() {

  const [likedMovies, setLikedMovies] = useState([]);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
fetch('http://localhost:3000/movies')
.then(response => response.json())
.then(data => {
  const formattedData = data.movies.map((movie) => {
    const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    let overview = movie.overview;
    if (overview.length > 200) {
      overview = overview.substring(0, 200) + "...";
    }
    return {title: movie.title, poster, voteAverage: movie.vote_average, voteCount: movie.vote_count, overview,}
  })
  setMoviesData(formattedData)
})
  }, [])

  const updateLikedMovies = movieTitle => {

    const isLiked = likedMovies.find(movie => movie === movieTitle);

    if (isLiked) {
      setLikedMovies(likedMovies.filter(movie => movie !== movieTitle));
    } else {
      setLikedMovies([...likedMovies, movieTitle]);
    }
  }



  const movies = moviesData.map((data, i) => {

    const isLiked = likedMovies.find(movie => movie === data.title)

    return (
      <Movies key={i}
        title={data.title}
        overview={data.overview}
        poster={data.poster}
        voteCount={data.voteCount}
        voteAverage={data.voteAverage}
        updateLikedMovies={updateLikedMovies}
        isLiked={isLiked} />
    )
  });
  for (let i = 0; i < 10; i++) {
    movies.push(<Movies key={i} />)
  }


  const likedMoviesPopover = likedMovies.map((data, i) => {
    return (
      <div key={i} className={styles.likedMoviesContainer}>
        <span className='likedmovies'>{data}</span>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.crossIcon} onClick={() => updateLikedMovies(data)} />
      </div>
    )
  })
  const popoverContent = (
    <div className={styles.popoverContent}>
      {likedMoviesPopover}
    </div>
  )

  return (
    <div className={styles.main}>
      <div className={styles.toppart}>
        <img src='https://cdn.vectorstock.com/i/1000v/00/61/neon-cinema-night-logo-vector-21560061.jpg' alt="Logo" height='100px' width='100px' />
        <div className={styles.title}>MY <span className={styles.span}>MOVIES</span></div>
        <Popover
          title='Liked movies'
          trigger="click"
          content={popoverContent}
          className={styles.popover}>
          <Button>{likedMovies.length} movie(s)</Button>
        </Popover>
      </div>
      <div className={styles.annonce}>
        LATEST RELEASES !
        <div className={styles.movieContainer}>
          {movies}
        </div>
      </div>
    </div>
  );
}

export default Home;
