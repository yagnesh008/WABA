"use client";

import Link from "next/link";
import {
  Trophy,
  CalendarDays,
  MapPin,
  ArrowLeft,
  Clock3,
  Users,
  CheckCircle2,
} from "lucide-react";

import styles from "./Upcoming.module.css";

const upcomingCompetitions = [
  {
    id: 1,
    name: "WABA National Championship 2026",
    date: "28 Sep 2026",
    time: "09:00 AM",
    location: "Hyderabad, Telangana",
    category: "Senior",
    classification: "WAB-1",
    registration: "Registered",
    days: "7 Days",
  },
  {
    id: 2,
    name: "South Zone Adaptive Boxing Championship",
    date: "05 Oct 2026",
    time: "09:30 AM",
    location: "Bengaluru, Karnataka",
    category: "Senior",
    classification: "WAB-1",
    registration: "Registered",
    days: "14 Days",
  },
  {
    id: 3,
    name: "State Adaptive Boxing Championship",
    date: "18 Oct 2026",
    time: "10:00 AM",
    location: "Vijayawada, Andhra Pradesh",
    category: "Senior",
    classification: "WAB-1",
    registration: "Registered",
    days: "27 Days",
  },
  {
    id: 4,
    name: "Telangana Adaptive Boxing Championship",
    date: "02 Nov 2026",
    time: "09:00 AM",
    location: "Hyderabad, Telangana",
    category: "Senior",
    classification: "WAB-1",
    registration: "Registered",
    days: "42 Days",
  },
];

export default function Upcoming() {
  return (
    <main className={styles.main}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.breadcrumb}>
            Athlete / Competitions / <span>Upcoming</span>
          </div>

          <h1>Upcoming Competitions</h1>

          <p>
            View your upcoming competition schedule and event details.
          </p>
        </div>

        <Link
          href="/Athlete/competitionPage"
          className={styles.backButton}
        >
          <ArrowLeft size={17} />
          Back to Competitions
        </Link>
      </div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Trophy size={22} />
          </div>

          <div>
            <span>Upcoming Events</span>
            <strong>4</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Registered</span>
            <strong>4</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Clock3 size={22} />
          </div>

          <div>
            <span>Next Event</span>
            <strong>7 Days</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <Users size={22} />
          </div>

          <div>
            <span>Category</span>
            <strong>Senior</strong>
          </div>
        </div>
      </div>

      {/* EVENT TIMELINE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Your Upcoming Schedule</h2>
            <p>
              Keep track of your registered competitions.
            </p>
          </div>
        </div>

        <div className={styles.timeline}>
          {upcomingCompetitions.map((competition, index) => (
            <div
              key={competition.id}
              className={styles.timelineItem}
            >
              {/* DATE */}
              <div className={styles.dateBox}>
                <CalendarDays size={19} />

                <strong>{competition.date}</strong>

                <span>{competition.time}</span>
              </div>

              {/* LINE */}
              <div className={styles.timelineLine}>
                <div className={styles.timelineDot}></div>

                {index !== upcomingCompetitions.length - 1 && (
                  <div className={styles.line}></div>
                )}
              </div>

              {/* CONTENT */}
              <div className={styles.eventCard}>
                <div className={styles.eventTop}>
                  <div className={styles.eventTitle}>
                    <div className={styles.trophyIcon}>
                      <Trophy size={21} />
                    </div>

                    <div>
                      <h3>{competition.name}</h3>

                      <span>
                        {competition.category} •{" "}
                        {competition.classification}
                      </span>
                    </div>
                  </div>

                  <span className={styles.registeredBadge}>
                    <CheckCircle2 size={14} />
                    {competition.registration}
                  </span>
                </div>

                <div className={styles.eventDetails}>
                  <div>
                    <MapPin size={16} />
                    <span>{competition.location}</span>
                  </div>

                  <div>
                    <Clock3 size={16} />
                    <span>{competition.time}</span>
                  </div>

                  <div>
                    <CalendarDays size={16} />
                    <span>{competition.days} remaining</span>
                  </div>
                </div>

                <div className={styles.eventFooter}>
                  <span>Adaptive Boxing Championship</span>

                  <button className={styles.detailsButton}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}