import styles from './index.module.css';
import trollFace from '../../img/troll-face.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.meme_image} alt='trollFace' src={trollFace} />
      <h2 className={styles.title}>Meme Generator</h2>
      <h4 className={styles.project}>React Course - Project 3</h4>
    </header>
  )
}

export default Header;