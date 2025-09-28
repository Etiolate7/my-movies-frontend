import React from 'react'
import styles from '../styles/Movies.module.css';


function Movies() {
  return (
    <div className={styles.movieCard}>
        <img className={styles.image} alt='poster' src='https://www.photosmurales.fr/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/import/api-v1.1-file-public-files-pim-assets-97-ad-84-62-6284ad972eff292d45ce1a2e-images-d6-63-ba-65-65ba63d65b4bee91324cbdfd-vd-046-p.jpg'></img>
        <div className={styles.text}>
            <span className={styles.name}>name</span>
            <p className={styles.description}>description</p>
            <span className={styles.vote}>vote</span>
        </div>
    </div>
  )
}

export default Movies