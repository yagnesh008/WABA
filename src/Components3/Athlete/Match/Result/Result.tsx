"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Trophy,
  Swords,
  User,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import styles from "./Result.module.css";

const results = [
  {
    id: "MAT-2026-101",
    opponent: "Kiran Kumar",
    competition: "Telangana Adaptive Boxing Championship",
    date: "10 Sep 2026",
    venue: "Hyderabad",
    round: "Quarter Final",
    score: "18 - 12",
    result: "Won",
  },
  {
    id: "MAT-2026-102",
    opponent: "Ravi Teja",
    competition: "South Zone Boxing Championship",
    date: "22 Aug 2026",
    venue: "Bengaluru",
    round: "Semi Final",
    score: "15 - 11",
    result: "Won",
  },
  {
    id: "MAT-2026-103",
    opponent: "Arun Kumar",
    competition: "WABA State Championship",
    date: "14 Jul 2026",
    venue: "Vijayawada",
    round: "Final",
    score: "10 - 13",
    result: "Lost",
  },
];

export default function Result() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <Link href="/Athlete/matchPage" className={styles.backLink}>
            <ArrowLeft size={17} />
            Back to Matches
          </Link>

          <h1>Match Results</h1>
          <p>View your completed matches and competition results.</p>
        </div>

        <div className={styles.resultBadge}>
          <Trophy size={18} />
          Match Results
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Swords size={21} />
          </div>

          <div>
            <span>Total Matches</span>
            <strong>24</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Wins</span>
            <strong>19</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.red}`}>
            <XCircle size={21} />
          </div>

          <div>
            <span>Losses</span>
            <strong>5</strong>
          </div>
        </div>
      </div>

      {/* Results */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Recent Results</h2>
            <p>Your latest completed matches</p>
          </div>
        </div>

        <div className={styles.resultList}>
          {results.map((match) => (
            <div className={styles.resultCard} key={match.id}>
              {/* Top */}
              <div className={styles.cardTop}>
                <div>
                  <span className={styles.matchId}>{match.id}</span>
                  <h3>{match.competition}</h3>
                </div>

                <div
                  className={
                    match.result === "Won"
                      ? styles.wonBadge
                      : styles.lostBadge
                  }
                >
                  {match.result === "Won" ? (
                    <CheckCircle2 size={15} />
                  ) : (
                    <XCircle size={15} />
                  )}

                  {match.result}
                </div>
              </div>

              {/* Match Information */}
              <div className={styles.matchInfo}>
                <div className={styles.player}>
                  <div className={styles.playerIcon}>
                    <User size={21} />
                  </div>

                  <div>
                    <span>Opponent</span>
                    <strong>{match.opponent}</strong>
                  </div>
                </div>

                <div className={styles.scoreBox}>
                  <span>Final Score</span>
                  <strong>{match.score}</strong>
                </div>
              </div>

              {/* Details */}
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <CalendarDays size={18} />

                  <div>
                    <span>Date</span>
                    <strong>{match.date}</strong>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <MapPin size={18} />

                  <div>
                    <span>Venue</span>
                    <strong>{match.venue}</strong>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <Trophy size={18} />

                  <div>
                    <span>Round</span>
                    <strong>{match.round}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}