"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Medal,
  Trophy,
  CalendarDays,
  MapPin,
  Award,
} from "lucide-react";

import styles from "./Medals.module.css";

const medals = [
  {
    id: "MED-2026-001",
    type: "Gold",
    competition: "Telangana Adaptive Boxing Championship",
    date: "10 Sep 2026",
    venue: "Hyderabad",
    category: "Senior",
    classification: "WAB-1",
    event: "Men's Boxing",
  },
  {
    id: "MED-2026-002",
    type: "Gold",
    competition: "South Zone Adaptive Boxing Championship",
    date: "22 Aug 2026",
    venue: "Bengaluru",
    category: "Senior",
    classification: "WAB-1",
    event: "Men's Boxing",
  },
  {
    id: "MED-2026-003",
    type: "Gold",
    competition: "WABA State Championship",
    date: "14 Jul 2026",
    venue: "Vijayawada",
    category: "Senior",
    classification: "WAB-1",
    event: "Men's Boxing",
  },
  {
    id: "MED-2025-001",
    type: "Silver",
    competition: "Telangana State Boxing Championship",
    date: "18 Dec 2025",
    venue: "Hyderabad",
    category: "Senior",
    classification: "WAB-1",
    event: "Men's Boxing",
  },
  {
    id: "MED-2025-002",
    type: "Silver",
    competition: "South Zone Championship",
    date: "20 Oct 2025",
    venue: "Chennai",
    category: "Senior",
    classification: "WAB-1",
    event: "Men's Boxing",
  },
  {
    id: "MED-2025-003",
    type: "Bronze",
    competition: "WABA National Championship",
    date: "15 Aug 2025",
    venue: "New Delhi",
    category: "Senior",
    classification: "WAB-1",
    event: "Men's Boxing",
  },
  {
    id: "MED-2024-001",
    type: "Bronze",
    competition: "State Adaptive Boxing Championship",
    date: "12 Nov 2024",
    venue: "Vijayawada",
    category: "Junior",
    classification: "WAB-1",
    event: "Men's Boxing",
  },
];

export default function Medals() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <Link href="/Athlete/achievementPage" className={styles.backLink}>
            <ArrowLeft size={17} />
            Back to Achievements
          </Link>

          <h1>Medals</h1>
          <p>View all medals earned throughout your WABA career.</p>
        </div>

        <div className={styles.badge}>
          <Medal size={18} />
          Medal History
        </div>
      </div>

      {/* Medal Summary */}
      <div className={styles.summaryGrid}>
        <div className={`${styles.summaryCard} ${styles.goldCard}`}>
          <div className={styles.medalIcon}>🥇</div>
          <div>
            <span>Gold Medals</span>
            <strong>3</strong>
          </div>
        </div>

        <div className={`${styles.summaryCard} ${styles.silverCard}`}>
          <div className={styles.medalIcon}>🥈</div>
          <div>
            <span>Silver Medals</span>
            <strong>2</strong>
          </div>
        </div>

        <div className={`${styles.summaryCard} ${styles.bronzeCard}`}>
          <div className={styles.medalIcon}>🥉</div>
          <div>
            <span>Bronze Medals</span>
            <strong>2</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.totalIcon}>
            <Trophy size={22} />
          </div>
          <div>
            <span>Total Medals</span>
            <strong>7</strong>
          </div>
        </div>
      </div>

      {/* Medal History */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Medal History</h2>
            <p>Your competition medal achievements</p>
          </div>
        </div>

        <div className={styles.medalList}>
          {medals.map((medal) => (
            <div className={styles.medalCard} key={medal.id}>
              <div
                className={`${styles.medalCircle} ${
                  medal.type === "Gold"
                    ? styles.gold
                    : medal.type === "Silver"
                    ? styles.silver
                    : styles.bronze
                }`}
              >
                <Medal size={24} />
              </div>

              <div className={styles.medalMain}>
                <div className={styles.medalTop}>
                  <div>
                    <span className={styles.medalId}>{medal.id}</span>
                    <h3>{medal.competition}</h3>
                  </div>

                  <span
                    className={`${styles.medalType} ${
                      medal.type === "Gold"
                        ? styles.goldText
                        : medal.type === "Silver"
                        ? styles.silverText
                        : styles.bronzeText
                    }`}
                  >
                    {medal.type} Medal
                  </span>
                </div>

                <div className={styles.details}>
                  <div>
                    <CalendarDays size={16} />
                    <span>{medal.date}</span>
                  </div>

                  <div>
                    <MapPin size={16} />
                    <span>{medal.venue}</span>
                  </div>

                  <div>
                    <Award size={16} />
                    <span>
                      {medal.category} · {medal.classification}
                    </span>
                  </div>

                  <div>
                    <Trophy size={16} />
                    <span>{medal.event}</span>
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