import styles from "./Footer.module.css";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaInstagram,
    FaFacebookF,
    FaTwitter,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.footerMain}>

                <div className={styles.footerColumn}>
                    <div className={styles.brandTitle}>
                        WABA
                    </div>

                    <h3>WHEELCHAIR ADAPTIVE BOXING ASSOCIATION</h3>

                    <p>
                        Empowering athletes through adaptive boxing,
                        building confidence, strength and opportunities
                        for people with disabilities.
                    </p>

                    <div className={styles.brandLine}></div>
                </div>


                <div className={styles.footerColumn}>
                    <h3>QUICK LINKS</h3>

                    <ul>
                        <li>
                            <a href="#Home">Home</a>
                        </li>

                        <li>
                            <a href="#About">About WABA</a>
                        </li>

                        <li>
                            <a href="#Programs">Programs</a>
                        </li>

                        <li>
                            <a href="#Events">Events</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h3>CONTACT</h3>

                    <div className={styles.contactItem}>
                        <div className={styles.contactIcon}>
                            <FaMapMarkerAlt />
                        </div>

                        <span>
                            Hyderabad, Telangana,
                            India
                        </span>
                    </div>

                    <div className={styles.contactItem}>
                        <div className={styles.contactIcon}>
                            <FaEnvelope />
                        </div>

                        <span>
                            info@waba.org
                        </span>
                    </div>

                    <div className={styles.contactItem}>
                        <div className={styles.contactIcon}>
                            <FaPhoneAlt />
                        </div>

                        <span>
                            +91 98765 43210
                        </span>
                    </div>
                </div>


                <div className={styles.footerColumn}>
                    <h3>FOLLOW US</h3>

                    <p className={styles.followText}>
                        Connect with WABA and stay updated
                        with our latest programs and events.
                    </p>

                    <div className={styles.socialIcons}>

                        <a
                            href="#"
                            className={`${styles.socialIcon} ${styles.instagram}`}
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className={`${styles.socialIcon} ${styles.facebook}`}
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className={`${styles.socialIcon} ${styles.twitter}`}
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>

                    </div>

                    <div className={styles.tagline}>
                        EMPOWER • ADAPT • FIGHT • INSPIRE
                    </div>
                </div>

            </div>

            <div className={styles.copyright}>

                <span>
                    © 2026 Wheelchair Adaptive Boxing Association
                </span>

                <span className={styles.copyrightLine}>
                    Empower • Adapt • Fight • Inspire
                </span>

            </div>

        </footer>
    );
}

export default Footer;