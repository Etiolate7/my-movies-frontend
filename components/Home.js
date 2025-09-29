import styles from '../styles/Home.module.css';
import "antd/dist/antd.css";
import { Button, Popover } from "antd";
import Movies from './Movies';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

 const moviesData = [
    {title: 'Forrest Gump', poster: 'https://static.wikia.nocookie.net/wikidoublage/images/a/a8/Forrest_Gump_-_Affiche_VOD.jpg/revision/latest/scale-to-width-down/2000?cb=20231122113919&path-prefix=fr', voteAverage:9.2, voteCount: 23_756, overview: "hsvhcjhdvjhv" },
    {title: '8 Mile', poster: 'https://m.media-amazon.com/images/M/MV5BMzFhZDhjMDAtZWJlZS00ZWUyLWFlZGMtYTcwZjFlODcyMGE2XkEyXkFqcGc@._V1_.jpg', voteAverage:9.2, voteCount: 23_756, overview: "hsvhcjhdvjhv" },
    {title: 'The Green Mile', poster: 'https://www.rogerebert.com/wp-content/uploads/2024/03/The-Green-Mile.jpg', voteAverage:9.2, voteCount: 23_756, overview: "hsvhcjhdvjhv" },
    {title: 'Princess Mononoke', poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Princess_Mononoke_Japanese_poster.png/250px-Princess_Mononoke_Japanese_poster.png', voteAverage:9.2, voteCount: 23_756, overview: "hsvhcjhdvjhv" },
    {title: 'Chihiro', poster: 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/00/02/36/71/chihiro.jpg', voteAverage:9.2, voteCount: 23_756, overview: "hsvhcjhdvjhv" }
  ]

function Home() {

const [likedMovies, setLikedMovies] = useState([]);

const updateLikedMovies = movieTitle => {

  const isLiked = likedMovies.find(movie => movie --- movieTitle);

  if (isLiked) {
    setLikedMovies(likedMovies.filter(movie => movie !== movieTitle));
  } else {
    setLikedMovies([...likedMovies, movieTitle]);
  }
}

  const movies = moviesData.map((data, i) => {

const isLiked = likedMovies.find(movie => movie === data.title)

    return(
      <Movies key={i}
      title={data.title}
      overview={data.overview}
      poster={data.poster}
      voteCount={data.voteCount}
      voteAverage={data.voteAverage}
      updateLikedMovies={updateLikedMovies}
      isLiked={isLiked}/>
    )
  });
  for (let i = 0; i < 10; i++) {
    movies.push(<Movies key={i}/>)
  }


  const likedMoviesPopover = likedMovies.map((data, i) => {
    return (
      <div key={i} className={styles.likedMoviesContainer}>
        <span className='likedmovies'>{data}</span>
        <FontAwesomeIcon icon={faCircleXmark} />
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
