"use client";

import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  Trophy,
  Medal,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

import styles from "./Ranking.module.css";

const rankingHistory = [
  {
    position: 12,
    period: "September 2026",
    category: "Senior",
    classification: "WAB-1",
    points: "1,245",
    change: "+3",
  },
  {
    position: 15,
    period: "August 2026",
    category: "Senior",
    classification: "WAB-1",
    points: "1,180",
    change: "+4",
  },
  {
    position: 19,
    period: "July 2026",
    category: "Senior",
    classification: "WAB-1",
    points: "1,095",
    change: "+6",
  },
  {
    position: 25,
    period: "June 2026",
    category: "Senior",
    classification: "WAB-1",
    points: "980",
    change: "+2",
  },
];

export default function Ranking() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <Link href="/Athlete/achievementPage" className={styles.backLink}>
            <ArrowLeft size={17} />
            Back to Achievements
          </Link>

          <h1>Ranking</h1>
          <p>Track your WABA national ranking and ranking history.</p>
        </div>

        <div className={styles.badge}>
          <TrendingUp size={18} />
          Athlete Ranking
        </div>
      </div>

      {/* Current Ranking */}
      <section className={styles.currentRanking}>
        <div className={styles.rankIcon}>
          <Trophy size={32} />
        </div>

        <div className={styles.currentInfo}>
          <span>CURRENT NATIONAL RANKING</span>
          <strong>#12</strong>
          <p>Senior · WAB-1 · September 2026</p>
        </div>

        <div className={styles.rankChange}>
          <TrendingUp size={18} />
          <div>
            <strong>+3</strong>
            <span>Positions improved</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <TrendingUp size={21} />
          </div>

          <div>
            <span>Current Rank</span>
            <strong>#12</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Trophy size={21} />
          </div>

          <div>
            <span>Ranking Points</span>
            <strong>1,245</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Medal size={21} />
          </div>

          <div>
            <span>Best Ranking</span>
            <strong>#12</strong>
          </div>
        </div>
      </div>

      {/* Ranking History */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Ranking History</h2>
            <p>Your ranking progress over recent months</p>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Period</th>
                <th>Rank</th>
                <th>Category</th>
                <th>Classification</th>
                <th>Points</th>
                <th>Change</th>
              </tr>
            </thead>

            <tbody>
              {rankingHistory.map((item) => (
                <tr key={item.period}>
                  <td>
                    <div className={styles.period}>
                      <CalendarDays size={15} />
                      {item.period}
                    </div>
                  </td>

                  <td>
                    <strong className={styles.rankNumber}>
                      #{item.position}
                    </strong>
                  </td>

                  <td>{item.category}</td>

                  <td>{item.classification}</td>

                  <td>
                    <strong>{item.points}</strong>
                  </td>

                  <td>
                    <span className={styles.change}>
                      {item.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ranking Information */}
      <div className={styles.infoBox}>
        <ShieldCheck size={22} />

        <div>
          <strong>WABA Ranking Record</strong>
          <p>
            Ranking points and positions shown here represent the athlete's
            competition performance record.
          </p>
        </div>
      </div>
    </main>
  );
}