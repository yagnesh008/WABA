"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  User,
  Trophy,
  Swords,
} from "lucide-react";

import styles from "./Upcoming.module.css";

const upcomingMatches = [
  {
    id: "MAT-2026-001",
    opponent: "Rahul Reddy",
    competition: "WABA National Championship 2026",
    date: "28 Sep 2026",
    time: "10:30 AM",
    venue: "Hyderabad",
    category: "Senior",
    classification: "WAB-1",
    round: "Quarter Final",
    status: "Confirmed",
  },
  {
    id: "MAT-2026-002",
    opponent: "Sanjay Kumar",
    competition: "South Zone Adaptive Boxing Championship",
    date: "05 Oct 2026",
    time: "11:00 AM",
    venue: "Bengaluru",
    category: "Senior",
    classification: "WAB-1",
    round: "Semi Final",
    status: "Confirmed",
  },
  {
    id: "MAT-2026-003",
    opponent: "Vikram Singh",
    competition: "State Adaptive Boxing Championship",
    date: "18 Oct 2026",
    time: "02:00 PM",
    venue: "Vijayawada",
    category: "Senior",
    classification: "WAB-1",
    round: "Round 1",
    status: "Confirmed",
  },
];

export default function Upcoming() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <Link href="/Athlete/matchPage" className={styles.backLink}>
            <ArrowLeft size={17} />
            Back to Matches
          </Link>

          <h1>Upcoming Matches</h1>
          <p>View your upcoming boxing matches and match schedule.</p>
        </div>

        <div className={styles.matchBadge}>
          <Swords size={18} />
          Upcoming Matches
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Swords size={21} />
          </div>
          <div>
            <span>Total Upcoming</span>
            <strong>3</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <CalendarDays size={21} />
          </div>
          <div>
            <span>Next Match</span>
            <strong>28 Sep</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Trophy size={21} />
          </div>
          <div>
            <span>Competitions</span>
            <strong>3</strong>
          </div>
        </div>
      </div>

      {/* Match List */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Match Schedule</h2>
            <p>Your confirmed upcoming matches</p>
          </div>
        </div>

        <div className={styles.matchList}>
          {upcomingMatches.map((match) => (
            <div className={styles.matchCard} key={match.id}>
              {/* Top */}
              <div className={styles.cardTop}>
                <div>
                  <span className={styles.matchId}>{match.id}</span>
                  <h3>{match.competition}</h3>
                </div>

                <span className={styles.status}>
                  {match.status}
                </span>
              </div>

              {/* Opponent */}
              <div className={styles.opponentBox}>
                <div className={styles.opponentIcon}>
                  <User size={22} />
                </div>

                <div>
                  <span>Opponent</span>
                  <strong>{match.opponent}</strong>
                </div>

                <div className={styles.vs}>VS</div>

                <div className={styles.youBox}>
                  <span>Your Category</span>
                  <strong>
                    {match.category} · {match.classification}
                  </strong>
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
                  <Clock3 size={18} />
                  <div>
                    <span>Time</span>
                    <strong>{match.time}</strong>
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