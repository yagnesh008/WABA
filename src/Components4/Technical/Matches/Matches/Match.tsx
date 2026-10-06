"use client";

import Link from "next/link";
import {
  Swords,
  CalendarDays,
  Radio,
  CheckCircle2,
  ArrowRight,
  Trophy,
} from "lucide-react";

import styles from "./Match.module.css";

const matchSections = [
  {
    title: "Upcoming Matches",
    description:
      "View your upcoming matches, assigned roles, venues and schedules.",
    count: 8,
    icon: CalendarDays,
    href: "/Technical/upcomingMatchPage",
    type: "upcoming",
  },
  {
    title: "Live Matches",
    description:
      "Monitor matches currently in progress and manage live officiating.",
    count: 2,
    icon: Radio,
    href: "/Technical/livePage",
    type: "live",
  },
  {
    title: "Completed Matches",
    description:
      "Review completed matches, results and officiating records.",
    count: 42,
    icon: CheckCircle2,
    href: "/Technical/completedPage",
    type: "completed",
  },
];

export default function Match() {
  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <Swords size={30} />
            Matches
          </h1>

          <p>
            Manage upcoming, live and completed boxing matches assigned to
            you.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <Trophy size={17} />
          Technical Matches
        </div>
      </div>

      {/* SUMMARY */}
      <section className={styles.summary}>
        <div className={styles.summaryIcon}>
          <Swords size={24} />
        </div>

        <div>
          <h2>Match Management</h2>
          <p>
            Track your match schedule, live assignments and completed match
            records from one place.
          </p>
        </div>
      </section>

      {/* MATCH CARDS */}
      <section className={styles.grid}>
        {matchSections.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              key={item.title}
              className={`${styles.card} ${styles[item.type]}`}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <Icon size={25} />
                </div>

                <span className={styles.count}>{item.count}</span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className={styles.cardFooter}>
                <span>View Matches</span>
                <ArrowRight size={18} />
              </div>
            </Link>
          );
        })}
      </section>

      {/* QUICK INFO */}
      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <CalendarDays size={20} />
          </div>

          <div>
            <strong>Upcoming</strong>
            <span>Matches scheduled for future competitions.</span>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Radio size={20} />
          </div>

          <div>
            <strong>Live</strong>
            <span>Matches currently in progress.</span>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <CheckCircle2 size={20} />
          </div>

          <div>
            <strong>Completed</strong>
            <span>Matches that have already finished.</span>
          </div>
        </div>
      </section>
    </main>
  );
}