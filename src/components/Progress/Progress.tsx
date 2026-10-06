import styles from "./Progress.module.css";

function Progress() {
    const subTitles = [
        {
            id: 1,
            bgimg: "/images/program1.svg",
            title: "ADAPTIVE BOXING TRAINING",
            description:
                "Personalized training sessions for individuals with physical, sensory or cognitive disabilities.",
        },
        {
            id: 2,
            bgimg: "/images/program2.svg",
            title: "YOUTH DEVELOPMENT",
            description:
                "Building confidence, discipline and leadership through structured boxing programs for young athletes.",
        },
        {
            id: 3,
            bgimg: "/images/program3.svg",
            title: "WOMEN EMPOWERMENT",
            description:
                "Creating safe spaces and opportunities for women to train, compete and lead.",
        },
        {
            id: 4,
            bgimg: "/images/program4.svg",
            title: "COMMUNITY PROGRAMS",
            description:
                "Inclusive sessions, workshops and outreach programs to bring people together through boxing.",
        },
        {
            id: 5,
            bgimg: "/images/program5.svg",
            title: "COMPETITION & EVENTS",
            description:
                "Local and national tournaments to showcase talent and create opportunities for growth.",
        },
        {
            id: 6,
            bgimg: "/images/program6.svg",
            title: "FITNESS & WELLNESS",
            description:
                "Improve physical health, mental well-being and overall quality of life.",
        },
    ];

    return (
        <div className={styles.Progress} id="Programs">
            <section className={styles.Progresspage}>

                <div className={styles.mainHeading}>
                    <h3>OUR PROGRESS</h3>
                    <h1>PROGRAM</h1>


                    <p>
                        At WABA, We offer a range of inclusive and adaptive boxing programs<br/>
                        designed to help every individual build confidence, fitness and a stronger<br/>
                        tomorrow.
                    </p>
                </div>

                <div className={styles.subParts}>
                    {subTitles.map((item) => (
                        <div
                            className={styles.subPart}
                            key={item.id}
                        >
                            <div className={styles.data1}>
                            <div className={styles.imagePart}>
                                <img
                                    src={item.bgimg}
                                    alt={item.title}
                                />
                            </div>

                            <div className={styles.dataPart}>
                                <span className={styles.number}>
                                    0{item.id}
                                </span>

                                <h2>{item.title}</h2>

                                <p>{item.description}</p>

                                <button>LEARN MORE</button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
}

export default Progress;