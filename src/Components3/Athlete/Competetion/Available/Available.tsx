"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trophy,
  CalendarDays,
  MapPin,
  Users,
  Search,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  UserRound,
} from "lucide-react";

import styles from "./Available.module.css";

const competitions = [
  {
    id: 1,
    name: "State Adaptive Boxing Championship",
    date: "18 Oct 2026",
    lastDate: "10 Oct 2026",
    location: "Vijayawada, Andhra Pradesh",
    category: "Senior",
    classification: "WAB-1",
    participants: "120 Athletes",
    status: "Open",
  },
  {
    id: 2,
    name: "South India Adaptive Boxing Championship",
    date: "25 Oct 2026",
    lastDate: "15 Oct 2026",
    location: "Chennai, Tamil Nadu",
    category: "Senior",
    classification: "WAB-1",
    participants: "95 Athletes",
    status: "Open",
  },
  {
    id: 3,
    name: "Telangana Adaptive Boxing Championship",
    date: "02 Nov 2026",
    lastDate: "25 Oct 2026",
    location: "Hyderabad, Telangana",
    category: "Senior",
    classification: "WAB-1",
    participants: "80 Athletes",
    status: "Open",
  },
  {
    id: 4,
    name: "National Adaptive Boxing Open 2026",
    date: "15 Nov 2026",
    lastDate: "05 Nov 2026",
    location: "New Delhi",
    category: "Senior",
    classification: "WAB-1",
    participants: "200 Athletes",
    status: "Open",
  },
  {
    id: 5,
    name: "Andhra Pradesh State Boxing Meet",
    date: "22 Nov 2026",
    lastDate: "12 Nov 2026",
    location: "Visakhapatnam, Andhra Pradesh",
    category: "Senior",
    classification: "WAB-1",
    participants: "75 Athletes",
    status: "Open",
  },
  {
    id: 6,
    name: "South Zone Boxing Championship",
    date: "05 Dec 2026",
    lastDate: "25 Nov 2026",
    location: "Bengaluru, Karnataka",
    category: "Senior",
    classification: "WAB-1",
    participants: "150 Athletes",
    status: "Open",
  },
];

export default function Available() {
  const [search, setSearch] = useState("");

  const filteredCompetitions = competitions.filter((competition) =>
    `${competition.name} ${competition.location} ${competition.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className={styles.main}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.breadcrumb}>
            Athlete / Competitions / <span>Available</span>
          </div>

          <h1>Available Competitions</h1>

          <p>
            Explore competitions currently open for athlete registration.
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

      {/* SUMMARY CARDS */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Trophy size={22} />
          </div>

          <div>
            <span>Available</span>
            <strong>6</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Open for Registration</span>
            <strong>6</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <CalendarDays size={22} />
          </div>

          <div>
            <span>Upcoming Events</span>
            <strong>6</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <UserRound size={22} />
          </div>

          <div>
            <span>Eligible Category</span>
            <strong>Senior</strong>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search competitions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.resultCount}>
          {filteredCompetitions.length} competitions found
        </div>
      </div>

      {/* COMPETITION LIST */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Competitions Open for Registration</h2>
            <p>
              Register for competitions that match your athlete category.
            </p>
          </div>
        </div>

        <div className={styles.competitionGrid}>
          {filteredCompetitions.map((competition) => (
            <div
              key={competition.id}
              className={styles.competitionCard}
            >
              {/* TOP */}
              <div className={styles.cardTop}>
                <div className={styles.trophyIcon}>
                  <Trophy size={23} />
                </div>

                <span className={styles.openBadge}>
                  <span className={styles.dot}></span>
                  Registration Open
                </span>
              </div>

              {/* TITLE */}
              <h3>{competition.name}</h3>

              {/* DETAILS */}
              <div className={styles.details}>
                <div className={styles.detailRow}>
                  <CalendarDays size={17} />
                  <div>
                    <small>Competition Date</small>
                    <span>{competition.date}</span>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <Clock3 size={17} />
                  <div>
                    <small>Registration Closes</small>
                    <span>{competition.lastDate}</span>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <MapPin size={17} />
                  <div>
                    <small>Location</small>
                    <span>{competition.location}</span>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <Users size={17} />
                  <div>
                    <small>Expected Participants</small>
                    <span>{competition.participants}</span>
                  </div>
                </div>
              </div>

              {/* TAGS */}
              <div className={styles.tags}>
                <span>{competition.category}</span>
                <span>{competition.classification}</span>
                <span>Adaptive Boxing</span>
              </div>

              {/* FOOTER */}
              <div className={styles.cardFooter}>
                <div>
                  <small>Registration Status</small>
                  <strong>Eligible</strong>
                </div>

                <Link
                  href="/Athlete/registrationPage"
                  className={styles.registerButton}
                >
                  Register
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCompetitions.length === 0 && (
          <div className={styles.emptyState}>
            <Trophy size={42} />
            <h3>No competitions found</h3>
            <p>
              Try searching with a different competition name or location.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}