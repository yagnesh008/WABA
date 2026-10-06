import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <div className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={150}
                        height={70}
                    />
                </div>

                <nav className={styles.nav}>
                    <Link href="#Home">
                        <h3>Home</h3>
                    </Link>

                    <Link href="#About">
                        <h3>About</h3>
                    </Link>

                    <Link href="#Programs">
                        <h3>Programs</h3>
                    </Link>

                    <Link href="#Events">
                        <h3>Events</h3>
                    </Link>

                    <Link href="#Get Involved">
                        <h3>Get Involved</h3>
                    </Link>

                    <Link href="#contact">
                        <h3>Contact</h3>
                    </Link>
                </nav>

                <div className={styles.actions}>

                    <Link
                        href="/Signup"
                        className={styles.joinBtn}
                    >
                        Join WABA
                    </Link>

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