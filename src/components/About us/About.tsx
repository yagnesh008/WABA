import styles from "./About.module.css";

function About() {
  const items = [
    {
      id: 1,
      bgimg: "/images/1.svg",
      title: "ADAPTIVE BOXING",
      description:
        "Professional training programs for athletes of all abilities.",
    },
    {
      id: 2,
      bgimg: "/images/2.svg",
      title: "YOUTH DEVELOPMENT",
      description:
        "Building confidence, discipline and a strong future.",
    },
    {
      id: 3,
      bgimg: "/images/3.svg",
      title: "COMMUNITY PROGRAMS",
      description:
        "Creating inclusive opportunities and stronger communities",
    },
    {
      id: 4,
      bgimg: "/images/4.svg",
      title: "AWARENESS INITIATIVES",
      description:
        "Spreading awareness and breaking barriers every day.",
    },
  ];

  return (
    <div className={styles.about} id="About">
      <section className={styles.aboutPage}>

        {/* =================================
            FOUR SUB-PARTS
        ================================= */}

        <div className={styles.subParts}>
          {items.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              style={{
                backgroundImage: `url(${item.bgimg})`,
              }}
            >

              {/* CARD TEXT */}
              <div className={styles.cardContent}>
                <h2>{item.title}</h2>

                <p>{item.description}</p>
              </div>

              {/* CARD ARROW
                  IMPORTANT:
                  This is outside cardContent
              */}
              <button className={styles.cardButton}>
                →
              </button>

            </div>
          ))}
        </div>


        {/* =================================
            ABOUT CONTENT
        ================================= */}

        <div className={styles.aboutContent}>

          <div className={styles.smallTitle}>
            ABOUT US
          </div>

          <h1 className={styles.mainTitle}>
            <span>WHO</span>
            <span>WE ARE</span>
          </h1>

          <div className={styles.tagline}>
            <span>MORE THAN A SPORT.</span>
            <span>A MOVEMENT.</span>
          </div>

          <p className={styles.description}>
            WABA is creating a platform where athletes can train, compete,
            grow inspire. We believe in inclusion, determination and the
            power of never giving up.
          </p>

          <button className={styles.storyButton}>
            <span>OUR STORY</span>
            <span className={styles.arrow}>→</span>
          </button>

        </div>

      </section>
    </div>
  );
}

export default About;