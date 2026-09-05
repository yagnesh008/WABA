import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <div className={styles.logo}>
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width={150}
                        height={70}
                    />
                </div>

                <nav className={styles.nav}>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Programs</h3>
                    <h3>Events</h3>
                    <h3>Get Involved</h3>
                    <h3>Contact</h3>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.joinBtn}>
                        Join WABA
                    </button>

                    <span className={styles.divider}></span>

                    <div className={styles.socials}>
                        <FaInstagram />
                        <FaFacebook />
                        <FaTwitter />
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;