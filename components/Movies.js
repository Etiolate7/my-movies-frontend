import React from 'react'
import styles from '../styles/Movies.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Movies(props) {

  const [watchCount, setWatchCount] = useState(0);
  const [like, setLike] = useState(false);
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
      style = { color: 'orange' };
    }

    personalStars.push(
      <FontAwesomeIcon key={i} icon={faStar} style={style} className='note' onClick={() => setNote(i + 1)} />
    );
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
        </div>
      </div>
    </div>
  )
}

export default Movies