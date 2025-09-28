import styles from '../styles/Home.module.css';
import "antd/dist/antd.css";
import { Button, Popover } from "antd";
import Movies from './Movies';

function Home() {

const popoverContent = (
  <div className={styles.popoverContent}>
    <span>Movie 1</span>
    <span>Movie 1</span>
    <span>Movie 1</span>
    <span>Movie 1</span>
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
        <Button>4 movie(s)</Button>
      </Popover>
      </div>
      <div className={styles.annonce}>
        LATEST RELEASES !
        <Movies/>
      </div>
    </div>
  );
}

export default Home;
