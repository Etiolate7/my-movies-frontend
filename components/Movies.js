import React from 'react'
import styles from '../styles/Movies.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';


function Movies(props) {

const stars = [];

for (let i=0; i < 10; i++) {
  let style = {};
  if (i < props.voteAverage - 1){
    style= {color: 'orange'}
  }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style}/>)
}

  return (
    <div className={styles.movieCard}>
        <img className={styles.image} alt={props.title} src={props.poster}></img>
        <div className={styles.text}>
            <span className={styles.name}>{props.title}</span>
            <p className={styles.description}>{props.overview}</p>
            <span className={styles.vote}>{stars} ({props.voteCount})</span>
        </div>
    </div>
  )
}

export default Movies