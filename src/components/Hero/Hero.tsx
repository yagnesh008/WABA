import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="Home">
      <div className={styles.content}>
        <div className={styles.tagline}>
          <span>EMPOWER</span>
          <b>•</b>
          <span>ADAPT</span>
          <b>•</b>
          <span>FIGHT</span>
          <b>•</b>
          <span>INSPIRE</span>
        </div>
        <h1 className={styles.heading}>
          <span className={styles.whiteText}>FIGHT</span>
          <span className={styles.redText}>BEYOND</span>
          <span className={styles.whiteText}>LIMITS</span>
        </h1>
        <p className={styles.description}>
          Empowering athletes through adaptive boxing Building
          <br />
          strength. Building champions. Building future
        </p>
        <div className={styles.buttons}>
          <button className={styles.joinButton}>
            JOIN WABA
            <span>→</span>
          </button>

          <button className={styles.exploreButton}>
            EXPLORE PROGRAMS
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;