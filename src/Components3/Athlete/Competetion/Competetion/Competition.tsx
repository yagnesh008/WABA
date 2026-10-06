"use client";

import Link from "next/link";
import {
  Trophy,
  CalendarDays,
  MapPin,
  Users,
  ArrowRight,
  CheckCircle2,
  Clock3,
  ClipboardList,
} from "lucide-react";

import styles from "./Competition.module.css";

const competitions = [
  {
    id: 1,
    name: "WABA National Championship 2026",
    date: "28 Sep 2026",
    location: "Hyderabad, Telangana",
    category: "Senior",
    status: "Registered",
  },
  {
    id: 2,
    name: "South Zone Adaptive Boxing Championship",
    date: "05 Oct 2026",
    location: "Bengaluru, Karnataka",
    category: "Senior",
    status: "Registered",
  },
  {
    id: 3,
    name: "State Adaptive Boxing Championship",
    date: "18 Oct 2026",
    location: "Vijayawada, Andhra Pradesh",
    category: "Senior",
    status: "Available",
  },
];

export default function Competition() {
  return (
    <main className={styles.main}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.breadcrumb}>
            Athlete / <span>Competitions</span>
          </div>

          <h1>Competitions</h1>

          <p>
            Explore competitions, manage registrations and view upcoming
            events.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <Trophy size={18} />
          Athlete Competitions
        </div>
      </div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Trophy size={22} />
          </div>

          <div>
            <span>Total Competitions</span>
            <strong>8</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Registered</span>
            <strong>5</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Clock3 size={22} />
          </div>

          <div>
            <span>Upcoming</span>
            <strong>3</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <ClipboardList size={22} />
          </div>

          <div>
            <span>Available</span>
            <strong>4</strong>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <div>
            <h2>Competition Management</h2>
            <p>Access your competition information quickly.</p>
          </div>
        </div>

        <div className={styles.actionGrid}>
          {/* AVAILABLE */}
          <Link
            href="/Athlete/availablePage"
            className={styles.actionCard}
          >
            <div className={`${styles.actionIcon} ${styles.orangeBg}`}>
              <Trophy size={24} />
            </div>

            <div className={styles.actionContent}>
              <h3>Available Competitions</h3>

              <p>
                View competitions available for registration and check
                eligibility.
              </p>

              <span>
                View Competitions
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* MY REGISTRATIONS */}
          <Link
            href="/Athlete/registrationPage"
            className={styles.actionCard}
          >
            <div className={`${styles.actionIcon} ${styles.greenBg}`}>
              <ClipboardList size={24} />
            </div>

            <div className={styles.actionContent}>
              <h3>My Registrations</h3>

              <p>
                Track your competition registrations and registration status.
              </p>

              <span>
                View Registrations
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* UPCOMING */}
          <Link
            href="/Athlete/upcomingPage"
            className={styles.actionCard}
          >
            <div className={`${styles.actionIcon} ${styles.blueBg}`}>
              <CalendarDays size={24} />
            </div>

            <div className={styles.actionContent}>
              <h3>Upcoming Competitions</h3>

              <p>
                View your upcoming competitions, dates and locations.
              </p>

              <span>
                View Upcoming
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* UPCOMING COMPETITIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Upcoming Competitions</h2>
            <p>Your latest competition schedule.</p>
          </div>

          <Link
            href="/Athlete/upcomingPage"
            className={styles.viewAll}
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.competitionGrid}>
          {competitions.map((competition) => (
            <div
              key={competition.id}
              className={styles.competitionCard}
            >
              <div className={styles.competitionTop}>
                <div className={styles.trophyIcon}>
                  <Trophy size={22} />
                </div>

                <span
                  className={
                    competition.status === "Registered"
                      ? styles.registered
                      : styles.available
                  }
                >
                  {competition.status}
                </span>
              </div>

              <h3>{competition.name}</h3>

              <div className={styles.infoRow}>
                <CalendarDays size={17} />
                <span>{competition.date}</span>
              </div>

              <div className={styles.infoRow}>
                <MapPin size={17} />
                <span>{competition.location}</span>
              </div>

              <div className={styles.infoRow}>
                <Users size={17} />
                <span>{competition.category}</span>
              </div>

              <div className={styles.cardBottom}>
                <span>Adaptive Boxing</span>

                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}