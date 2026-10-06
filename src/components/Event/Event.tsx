import styles from "./Event.module.css";

function Eventpage() {
  const events = [
    {
      id: 1,
      bgimg: "/images/event1.svg",
      title: "WABA NATIONAL CHAMPIONSHIP",
      description:
        "India's biggest adaptive boxing championship featuring athletes from across the country",
    },
    {
      id: 2,
      bgimg: "/images/event2.svg",
      title: "ADAPTIVE BOXING TRAINING",
      description:
        "A 5-day intensive training camp for athletes with disabilities, led by certified coaches.",
    },
    {
      id: 3,
      bgimg: "/images/event3.svg",
      title: "INCLUSIVE BOXING OPEN",
      description:
        "Open tournment for all skill levels,promoting inclusion and equal opportunity",
    },
    {
      id: 4,
      bgimg: "/images/event4.svg",
      title: "COMMUNITY WORKSHOP",
      description:
        "Interactive workshop on adaptive boxing fitness and awareness",
    },
  ];

  return (
    <div className={styles.eventPage} id="Events">
      <div className={styles.eventContent}>

        <div className={styles.eventHeading}>
          <span>EVENTS</span>

          <h1>
            UPCOMING
            <br />
            EVENTS
          </h1>

          <p>
            Be a part of our events, tournaments and community gatherings.
            <br />
            Witness the power of adaptive boxing and the incredible athletes
            who
            <br />
            inspire us all.
          </p>
        </div>

        <div className={styles.eventGrid}>
          {events.map((event) => (
            <div className={styles.eventCard} key={event.id}>

              {/* Image */}
              <div className={styles.eventImage}>
                <img
                  src={event.bgimg}
                  alt={event.title}
                />
              </div>

              {/* Subtitle + Information */}
              <div className={styles.eventInfo}>

                <h2>{event.title}</h2>

                {/* Information div below subtitle */}
                <div className={styles.eventDetails}>
                  <p>{event.description}</p>

                  <button className={styles.learnMore}>
                    LEARN MORE
                    <span>›</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Eventpage;