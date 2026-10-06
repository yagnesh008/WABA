"use client";

import Link from "next/link";
import {
  Swords,
  CalendarDays,
  Trophy,
  Clock3,
  CheckCircle2,
  ArrowRight,
  MapPin,
  User,
  Activity,
} from "lucide-react";

import styles from "./Matches.module.css";

const upcomingMatches = [
  {
    id: 1,
    opponent: "Rahul Reddy",
    competition: "WABA National Championship 2026",
    date: "28 Sep 2026",
    time: "10:30 AM",
    location: "Hyderabad",
    stage: "Quarter Final",
  },
  {
    id: 2,
    opponent: "Sanjay Kumar",
    competition: "South Zone Adaptive Boxing Championship",
    date: "05 Oct 2026",
    time: "11:00 AM",
    location: "Bengaluru",
    stage: "Semi Final",
  },
  {
    id: 3,
    opponent: "Vikram Singh",
    competition: "State Adaptive Boxing Championship",
    date: "18 Oct 2026",
    time: "02:00 PM",
    location: "Vijayawada",
    stage: "Round 1",
  },
];

const recentResults = [
  {
    id: 1,
    opponent: "Kiran Kumar",
    competition: "Telangana Adaptive Boxing Championship",
    date: "10 Sep 2026",
    result: "Won",
    score: "18 - 12",
  },
  {
    id: 2,
    opponent: "Ravi Teja",
    competition: "South Zone Boxing Championship",
    date: "22 Aug 2026",
    result: "Won",
    score: "15 - 11",
  },
  {
    id: 3,
    opponent: "Arun Kumar",
    competition: "WABA State Championship",
    date: "14 Jul 2026",
    result: "Lost",
    score: "10 - 13",
  },
];

export default function Matches() {
  return (
    <main className={styles.main}>
      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <div className={styles.pageHeader}>
        <div>
          <div className={styles.breadcrumb}>
            Athlete / <span>Matches</span>
          </div>

          <h1>Matches</h1>

          <p>
            View your upcoming matches, match schedule and previous results.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <Swords size={18} />
          Athlete Matches
        </div>
      </div>

      {/* =========================================
          STATS
      ========================================= */}

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Swords size={22} />
          </div>

          <div>
            <span>Total Matches</span>
            <strong>24</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <CalendarDays size={22} />
          </div>

          <div>
            <span>Upcoming</span>
            <strong>3</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Wins</span>
            <strong>19</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.red}`}>
            <Trophy size={22} />
          </div>

          <div>
            <span>Losses</span>
            <strong>5</strong>
          </div>
        </div>
      </div>

      {/* =========================================
          QUICK ACTIONS
      ========================================= */}

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>Match Management</h2>
          <p>Access your match schedule and results.</p>
        </div>

        <div className={styles.actionGrid}>
          {/* UPCOMING */}

          <Link
            href="/Athlete/upcomingMatchPage"
            className={styles.actionCard}
          >
            <div className={`${styles.actionIcon} ${styles.orangeBg}`}>
              <CalendarDays size={25} />
            </div>

            <div className={styles.actionContent}>
              <h3>Upcoming Matches</h3>

              <p>
                View your upcoming matches, opponents, timings and venues.
              </p>

              <span>
                View Upcoming
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* RESULTS */}

          <Link
            href="/Athlete/resultPage"
            className={styles.actionCard}
          >
            <div className={`${styles.actionIcon} ${styles.greenBg}`}>
              <Trophy size={25} />
            </div>

            <div className={styles.actionContent}>
              <h3>Match Results</h3>

              <p>
                View your previous matches, scores, results and performance.
              </p>

              <span>
                View Results
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================
          UPCOMING MATCHES
      ========================================= */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Upcoming Matches</h2>
            <p>Your next scheduled matches.</p>
          </div>

          <Link
            href="/Athlete/upcomingMatchPage"
            className={styles.viewAll}
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.matchesGrid}>
          {upcomingMatches.map((match) => (
            <div
              key={match.id}
              className={styles.matchCard}
            >
              <div className={styles.matchTop}>
                <div className={styles.matchIcon}>
                  <Swords size={22} />
                </div>

                <span className={styles.upcomingBadge}>
                  Upcoming
                </span>
              </div>

              <div className={styles.vsSection}>
                <div className={styles.player}>
                  <div className={styles.playerIcon}>
                    <User size={19} />
                  </div>

                  <span>You</span>
                </div>

                <strong>VS</strong>

                <div className={styles.player}>
                  <div className={styles.playerIcon}>
                    <User size={19} />
                  </div>

                  <span>{match.opponent}</span>
                </div>
              </div>

              <h3>{match.competition}</h3>

              <div className={styles.infoRow}>
                <CalendarDays size={16} />
                <span>{match.date}</span>
              </div>

              <div className={styles.infoRow}>
                <Clock3 size={16} />
                <span>{match.time}</span>
              </div>

              <div className={styles.infoRow}>
                <MapPin size={16} />
                <span>{match.location}</span>
              </div>

              <div className={styles.matchFooter}>
                <span>{match.stage}</span>

                <ArrowRight size={17} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          RECENT RESULTS
      ========================================= */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Recent Results</h2>
            <p>Your latest completed matches.</p>
          </div>

          <Link
            href="/Athlete/resultPage"
            className={styles.viewAll}
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.resultsCard}>
          {recentResults.map((result) => (
            <div
              key={result.id}
              className={styles.resultRow}
            >
              <div className={styles.resultIcon}>
                <Activity size={19} />
              </div>

              <div className={styles.resultMain}>
                <strong>{result.competition}</strong>

                <span>
                  vs {result.opponent} • {result.date}
                </span>
              </div>

              <div className={styles.score}>
                <small>Score</small>
                <strong>{result.score}</strong>
              </div>

              <span
                className={
                  result.result === "Won"
                    ? styles.winBadge
                    : styles.lossBadge
                }
              >
                {result.result}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}