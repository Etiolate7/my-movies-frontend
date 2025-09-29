import React from 'react'
import styles from '../styles/Movies.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faVideo } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Movies(props) {

  const [watchCount, setWatchCount] = useState(0);
  const [note, setNote] = useState(0);

  const stars = [];

  for (let i = 0; i < 10; i++) {
    let style = {};
    if (i < props.voteAverage - 1) {
      style = { color: 'orange' }
    }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />)
  }

  const personalStars = [];
  for (let i = 0; i < 10; i++) {
    let style = {}

    if (i < note) {
      style = { color: '#1E6AC7' };
    }

    personalStars.push(
      <FontAwesomeIcon key={i} icon={faStar} style={style} className='note' onClick={() => setNote(i + 1)} />
    );
  }

  const handleWatchedMovie = () => {
    setWatchCount(watchCount +1);
  }

  let videoIcon = {};
  if (watchCount > 0) {
    videoIcon = {color: 'red'}
  }

  const handleLikeMovie = () => {
    props.updateLikedMovies(props.title);
  }

  let heartIcon = {};
  if (props.isLiked) {
    heartIcon = {color: 'pink'}
  }

  return (
    <div className={styles.movieCard}>
      <img className={styles.image} alt={props.title} src={props.poster}></img>
      <div className={styles.text}>
        <div>
          <span className={styles.name}>{props.title}</span>
          <p className={styles.description}>{props.overview}</p>
        </div>
        <div className={styles.iconStars}>
          <span className={styles.vote}>{stars} ({props.voteCount})</span>
          <span>
            {personalStars} ({note})
          </span>
          <span>
            <FontAwesomeIcon
            icon={faVideo}
            className='watchCount'
            onClick={() => handleWatchedMovie()}
            style={videoIcon}/>
            ({watchCount})
          </span>
          <span>
            <FontAwesomeIcon
            icon={faHeart}
            className='like'
            onClick={() => handleLikeMovie()}
            style={heartIcon}/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Movies