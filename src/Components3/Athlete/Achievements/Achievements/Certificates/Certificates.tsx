"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Award,
  CalendarDays,
  Download,
  FileCheck2,
  Trophy,
  ShieldCheck,
} from "lucide-react";

import styles from "./Certificates.module.css";

const certificates = [
  {
    id: "CERT-2026-001",
    title: "Competition Participation Certificate",
    competition: "Telangana Adaptive Boxing Championship",
    date: "10 Sep 2026",
    category: "Senior",
    status: "Verified",
  },
  {
    id: "CERT-2026-002",
    title: "Winner Certificate",
    competition: "South Zone Adaptive Boxing Championship",
    date: "22 Aug 2026",
    category: "Senior",
    status: "Verified",
  },
  {
    id: "CERT-2026-003",
    title: "Gold Medal Achievement Certificate",
    competition: "WABA State Championship",
    date: "14 Jul 2026",
    category: "Senior",
    status: "Verified",
  },
  {
    id: "CERT-2025-001",
    title: "Competition Participation Certificate",
    competition: "Telangana State Boxing Championship",
    date: "18 Dec 2025",
    category: "Senior",
    status: "Verified",
  },
  {
    id: "CERT-2025-002",
    title: "Competition Achievement Certificate",
    competition: "South Zone Championship",
    date: "20 Oct 2025",
    category: "Senior",
    status: "Verified",
  },
  {
    id: "CERT-2025-003",
    title: "Participation Certificate",
    competition: "WABA National Championship",
    date: "15 Aug 2025",
    category: "Senior",
    status: "Verified",
  },
];

export default function Certificates() {
  const handleDownload = (title: string) => {
    alert(`Downloading: ${title}`);
  };

  return (
    <main className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <Link href="/Athlete/achievementPage" className={styles.backLink}>
            <ArrowLeft size={17} />
            Back to Achievements
          </Link>

          <h1>Certificates</h1>
          <p>View and download your WABA achievement certificates.</p>
        </div>

        <div className={styles.badge}>
          <Award size={18} />
          Achievement Certificates
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Award size={21} />
          </div>

          <div>
            <span>Total Certificates</span>
            <strong>6</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <FileCheck2 size={21} />
          </div>

          <div>
            <span>Verified</span>
            <strong>6</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Trophy size={21} />
          </div>

          <div>
            <span>Achievement</span>
            <strong>3</strong>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>My Certificates</h2>
            <p>Your WABA competition certificates</p>
          </div>
        </div>

        <div className={styles.certificateGrid}>
          {certificates.map((certificate) => (
            <div className={styles.certificateCard} key={certificate.id}>
              {/* Certificate Top */}
              <div className={styles.cardTop}>
                <div className={styles.certificateIcon}>
                  <Award size={25} />
                </div>

                <span className={styles.verified}>
                  <FileCheck2 size={13} />
                  {certificate.status}
                </span>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <span className={styles.certificateId}>
                  {certificate.id}
                </span>

                <h3>{certificate.title}</h3>

                <p>{certificate.competition}</p>
              </div>

              {/* Details */}
              <div className={styles.details}>
                <div>
                  <CalendarDays size={15} />
                  <span>{certificate.date}</span>
                </div>

                <div>
                  <Trophy size={15} />
                  <span>{certificate.category}</span>
                </div>
              </div>

              {/* Download */}
              <button
                className={styles.downloadButton}
                onClick={() => handleDownload(certificate.title)}
              >
                <Download size={16} />
                Download Certificate
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Information */}
      <div className={styles.infoBox}>
        <ShieldCheck size={22} />

        <div>
          <strong>Verified WABA Certificates</strong>
          <p>
            Certificates displayed here are part of your official athlete
            achievement record.
          </p>
        </div>
      </div>
    </main>
  );
}