"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  User,
  CalendarDays,
  FileCheck2,
  MapPin,
  Award,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import styles from "./Classification.module.css";

const classificationHistory = [
  {
    id: "CLS-2026-001",
    classification: "WAB-1",
    date: "12 Sep 2026",
    location: "Hyderabad",
    panel: "WABA Classification Panel",
    status: "Confirmed",
  },
  {
    id: "CLS-2025-001",
    classification: "WAB-1",
    date: "15 Sep 2025",
    location: "Hyderabad",
    panel: "WABA Classification Panel",
    status: "Confirmed",
  },
];

export default function Classification() {
  return (
    <main className={styles.page}>
      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className={styles.pageHeader}>
        <div>
          <Link href="/Athlete/achievementPage" className={styles.backLink}>
            <ArrowLeft size={17} />
            Back
          </Link>

          <h1>Classification</h1>

          <p>
            View your WABA athlete classification and classification history.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <ShieldCheck size={18} />
          Athlete Classification
        </div>
      </div>

      {/* =========================
          STATUS BANNER
      ========================= */}

      <section className={styles.statusBanner}>
        <div className={styles.statusIcon}>
          <CheckCircle2 size={25} />
        </div>

        <div className={styles.statusContent}>
          <span>CLASSIFICATION STATUS</span>
          <h2>Confirmed</h2>
          <p>
            Your current WABA classification is active and confirmed.
          </p>
        </div>

        <div className={styles.classificationBadge}>
          WAB-1
        </div>
      </section>

      {/* =========================
          CURRENT CLASSIFICATION
      ========================= */}

      <section className={styles.mainCard}>
        <div className={styles.cardHeader}>
          <div>
            <h2>Current Classification</h2>
            <p>Your latest official classification details.</p>
          </div>

          <ShieldCheck size={23} className={styles.headerIcon} />
        </div>

        <div className={styles.classificationContent}>
          <div className={styles.classificationBox}>
            <span>CLASSIFICATION</span>
            <strong>WAB-1</strong>
            <small>Wheelchair Adaptive Boxing</small>
          </div>

          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <User size={19} />

              <div>
                <span>Athlete Name</span>
                <strong>Arjun Kumar</strong>
              </div>
            </div>

            <div className={styles.detailItem}>
              <Award size={19} />

              <div>
                <span>Athlete ID</span>
                <strong>ATH001</strong>
              </div>
            </div>

            <div className={styles.detailItem}>
              <CalendarDays size={19} />

              <div>
                <span>Classification Date</span>
                <strong>12 Sep 2026</strong>
              </div>
            </div>

            <div className={styles.detailItem}>
              <MapPin size={19} />

              <div>
                <span>Classification Location</span>
                <strong>Hyderabad</strong>
              </div>
            </div>

            <div className={styles.detailItem}>
              <FileCheck2 size={19} />

              <div>
                <span>Status</span>
                <strong className={styles.confirmed}>
                  Confirmed
                </strong>
              </div>
            </div>

            <div className={styles.detailItem}>
              <Clock3 size={19} />

              <div>
                <span>Review Status</span>
                <strong>Current</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CLASSIFICATION INFORMATION
      ========================= */}

      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <ShieldCheck size={21} />
          </div>

          <div>
            <h3>Classification Category</h3>
            <p>
              Your current classification is recorded as
              <strong> WAB-1</strong>.
            </p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <FileCheck2 size={21} />
          </div>

          <div>
            <h3>Classification Status</h3>
            <p>
              Your classification is currently
              <strong> confirmed</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          CLASSIFICATION HISTORY
      ========================= */}

      <section className={styles.historySection}>
        <div className={styles.cardHeader}>
          <div>
            <h2>Classification History</h2>
            <p>Previous classification records.</p>
          </div>
        </div>

        <div className={styles.historyList}>
          {classificationHistory.map((item) => (
            <div className={styles.historyCard} key={item.id}>
              <div className={styles.historyIcon}>
                <ShieldCheck size={21} />
              </div>

              <div className={styles.historyMain}>
                <span className={styles.historyId}>
                  {item.id}
                </span>

                <h3>{item.classification}</h3>

                <div className={styles.historyDetails}>
                  <span>
                    <CalendarDays size={14} />
                    {item.date}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {item.location}
                  </span>

                  <span>
                    <User size={14} />
                    {item.panel}
                  </span>
                </div>
              </div>

              <span className={styles.historyStatus}>
                <CheckCircle2 size={14} />
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          IMPORTANT NOTE
      ========================= */}

      <div className={styles.noteBox}>
        <AlertCircle size={21} />

        <div>
          <strong>Classification Information</strong>

          <p>
            Classification records should be updated only through the
            authorized WABA classification process. Contact the relevant
            classification authority if your classification details need
            to be reviewed or updated.
          </p>
        </div>
      </div>
    </main>
  );
}