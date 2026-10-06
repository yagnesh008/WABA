"use client";

import {
  Building2,
  Users,
  FileText,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import styles from "./Organisation.module.css";

export default function Organisation() {
  return (
    <main className={styles.organisation}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.titleRow}>
            <div className={styles.titleIcon}>
              <Building2 size={24} />
            </div>

            <div>
              <h1>My Organisation</h1>
              <p>
                Manage your club or academy profile, staff and documents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Organisation Overview */}
      <section className={styles.overviewCard}>
        <div className={styles.organisationLogo}>
          <Building2 size={36} />
        </div>

        <div className={styles.organisationInfo}>
          <h2>WABA Boxing Academy</h2>

          <p className={styles.location}>
            <MapPin size={16} />
            Hyderabad, Telangana, India
          </p>

          <div className={styles.contactInfo}>
            <span>
              <Mail size={15} />
              info@wabaacademy.org
            </span>

            <span>
              <Phone size={15} />
              +91 98765 43210
            </span>
          </div>
        </div>

        <div className={styles.status}>
          <span className={styles.statusDot}></span>
          Active
        </div>
      </section>

      {/* Management Cards */}
      <section className={styles.cardsGrid}>
        {/* Profile */}
        <a
          href="/Club/organisation/profile"
          className={styles.managementCard}
        >
          <div className={`${styles.cardIcon} ${styles.profileIcon}`}>
            <Building2 size={25} />
          </div>

          <div className={styles.cardContent}>
            <h3>Organisation Profile</h3>

            <p>
              View and manage your club or academy information, contact
              details and address.
            </p>

            <span className={styles.viewLink}>
              View Profile
              <ArrowRight size={17} />
            </span>
          </div>
        </a>

        {/* Staff */}
        <a
          href="/Club/organisation/staff"
          className={styles.managementCard}
        >
          <div className={`${styles.cardIcon} ${styles.staffIcon}`}>
            <Users size={25} />
          </div>

          <div className={styles.cardContent}>
            <h3>Staff</h3>

            <p>
              Manage coaches, assistant coaches and other staff members
              working with your organisation.
            </p>

            <span className={styles.viewLink}>
              Manage Staff
              <ArrowRight size={17} />
            </span>
          </div>
        </a>

        {/* Documents */}
        <a
          href="/Club/organisation/documents"
          className={styles.managementCard}
        >
          <div className={`${styles.cardIcon} ${styles.documentIcon}`}>
            <FileText size={25} />
          </div>

          <div className={styles.cardContent}>
            <h3>Documents</h3>

            <p>
              Upload and manage registration certificates, affiliation
              documents and other organisation records.
            </p>

            <span className={styles.viewLink}>
              View Documents
              <ArrowRight size={17} />
            </span>
          </div>
        </a>
      </section>
    </main>
  );
}