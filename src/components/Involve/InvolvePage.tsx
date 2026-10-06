import styles from "./Inv.module.css";

function InvolvePage() {
    const subTitles = [
        {
            id: 1,
            bgimg: "/images/involved1.svg",
            title: "BECOMING A MEMBER",
            description:
                "Join WABA and be part of growing community of athletes, coaches and boxing enthusiasts",
        },
        {
            id: 2,
            bgimg: "/images/involved2.svg",
            title: "VOLUNTEER",
            description:
                "Give your time, skills and passion to help us create more opportunites for aspiribg boxers.",
        },
        {
            id: 3,
            bgimg: "/images/involved3.svg",
            title: "PARTNER WITH US",
            description:
                "Collaborate with WABA to support our programs, events and community initiative.",
        },
        {
            id: 4,
            bgimg: "/images/involved4.svg",
            title: "COACH WITH US",
            description:
                "Share your expertise and help shape the next generation of boxers",
        },
        {
            id: 5,
            bgimg: "/images/involved5.svg",
            title: "ATTEND EVENTS",
            description:
                "Be a part of our tournaments, workshops and community programs.",
        },
        {
            id: 6,
            bgimg: "/images/involved6.svg",
            title: "SUPPORT US",
            description:
                "Your contribution helps us provide better training, equipment and oppurtinites for underprivileged youth.",
        },
    ];

    return (
        <div className={styles.involve} id="Get Involved">
            <section className={styles.involvepage}>

                <div className={styles.mainHeading}>
                    <h3>GET INVOLVED</h3>
                    <h1>BE A PARTOF WABA</h1>


                    <p>
                        Be a part of our, tournaments and community gatherings.<br/>
                        Withness the power of adaptive boxing and the incredible athletes who <br/>
                        inspire us all
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

export default InvolvePage;