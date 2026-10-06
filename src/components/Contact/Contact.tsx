import styles from "./Contact.module.css";

import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaInstagram,
    FaFacebook,
    FaYoutube,
} from "react-icons/fa";



function Contact() {
    return (
        <section id="contact" className={styles.contactPage}>

            <div className={styles.contactContainer}>

                {/* =================================
                    LEFT SIDE - CONTACT INFORMATION
                ================================== */}

                <div className={styles.contactInfo}>

                    {/* Small Heading */}
                    <p className={styles.smallTitle}>
                        CONTACT US
                    </p>

                    {/* Main Heading */}
                    <h1>
                        GET IN TOUCH
                        <br />
                        WITH WABA
                    </h1>

                    {/* Description */}
                    <p className={styles.description}>
                        Have questions or want to know more about
                        Wheelchair Adaptive Boxing? Get in touch
                        with us. We would love to hear from you.
                    </p>
                    


                    {/* =================================
                        LOCATION
                    ================================== */}

                    <div className={styles.infoItem}>

                        <div className={styles.icon}>
                            <FaMapMarkerAlt />
                        </div>

                        <div className={styles.infoContent}>

                            <h3>
                                OUR LOCATION
                            </h3>

                            <p>
                                1-11-477/101-102/MUTHYALAMPADU ROAD/DAC
                                <br />
                                HEPALLI/DACHEPALLE/Palnadu/Andhra Pradesh/India/522414
                            </p>

                        </div>

                    </div>


                    {/* =================================
                        PHONE
                    ================================== */}

                    <div className={styles.infoItem}>

                        <div className={styles.icon}>
                            <FaPhoneAlt />
                        </div>

                        <div className={styles.infoContent}>

                            <h3>
                                PHONE NUMBER
                            </h3>

                            <p>
                                +91 XXXXX XXXXX
                            </p>

                        </div>

                    </div>


                    {/* =================================
                        EMAIL
                    ================================== */}

                    <div className={styles.infoItem}>

                        <div className={styles.icon}>
                            <FaEnvelope />
                        </div>

                        <div className={styles.infoContent}>

                            <h3>
                                EMAIL ADDRESS
                            </h3>

                            <p>
                                waba@gmail.com
                            </p>

                        </div>

                    </div>


                    {/* =================================
                        FOLLOW US
                    ================================== */}

                    <div className={styles.followUs}>

                        {/* Orange Circle Icon */}

                        <div className={styles.followIcon}>
                            <span>
                                <FaInstagram />
                            </span>
                        </div>

                        <div className={styles.followContent}>

                            <h3>
                                FOLLOW US
                            </h3>

                            <div className={styles.socialIcons}>

                                <div className={styles.socialIcon}>
                                    <FaInstagram />
                                </div>

                                <div className={styles.socialIcon}>
                                    <FaFacebook />
                                </div>

                                <div className={styles.socialIcon}>
                                    <FaYoutube />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================
                    RIGHT SIDE - CONTACT FORM
                ================================== */}

                <div className={styles.contactForm}>

                    <h2>
                        SEND US A MESSAGE
                    </h2>

                    <p>
                        Fill out the form below and we'll get
                        back to you shortly.
                    </p>


                    <form>

                        {/* Full Name */}

                        <input
                            type="text"
                            placeholder="Full Name *"
                        />


                        {/* Email */}

                        <input
                            type="email"
                            placeholder="Email Address"
                        />


                        {/* Phone */}

                        <input
                            type="tel"
                            placeholder="Phone Number"
                        />


                        {/* Role */}

                        <select defaultValue="">

                            <option
                                value=""
                                disabled
                            >
                                Select Role
                            </option>

                            <option value="athlete">
                                Athlete
                            </option>

                            <option value="coach">
                                Coach
                            </option>

                            <option value="referee">
                                Referee
                            </option>

                            <option value="judge">
                                Judge
                            </option>

                            <option value="official">
                                Official
                            </option>

                            <option value="volunteer">
                                Volunteer
                            </option>

                        </select>


                        {/* Message */}

                        <textarea
                            placeholder="Your message"
                        ></textarea>


                        {/* Submit */}

                        <button type="submit">

                            Send Message

                            <span>
                                →
                            </span>

                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contact;