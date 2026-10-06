"use client";

import Link from "next/link";
import {
  Trophy,
  FilePenLine,
  Clock3,
  History,
  ChevronRight,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";

import styles from "./Results.module.css";

const resultSections = [
  {
    title: "Enter Results",
    description: "Enter and submit match results for completed matches.",
    icon: FilePenLine,
    href: "/Technical/enterResultPage",
    count: 8,
    label: "Matches Ready",
  },
  {
    title: "Pending",
    description: "Review results that are waiting for submission or approval.",
    icon: Clock3,
    href: "/Technical/pendingResultPage",
    count: 5,
    label: "Pending Results",
  },
  {
    title: "History",
    description: "View previously entered and completed match results.",
    icon: History,
    href: "/Technical/resultHistoryPage",
    count: 42,
    label: "Completed Results",
  },
];

export default function Results() {
  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <Trophy size={30} />
            Results
          </h1>

          <p>
            Manage match results, pending submissions and result history.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <ClipboardCheck size={17} />
          Results Management
        </div>
      </section>

      {/* SUMMARY */}
      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <FilePenLine size={21} />
          </div>

          <div>
            <strong>8</strong>
            <span>Ready to Enter</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Clock3 size={21} />
          </div>

          <div>
            <strong>5</strong>
            <span>Pending</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <strong>42</strong>
            <span>Completed</span>
          </div>
        </div>
      </section>

      {/* RESULT OPTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>RESULT MANAGEMENT</span>
            <h2>Manage Results</h2>
          </div>

          <span className={styles.sectionCount}>3 Sections</span>
        </div>

        <div className={styles.cards}>
          {resultSections.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                href={item.href}
                className={styles.card}
                key={item.title}
              >
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <Icon size={25} />
                  </div>

                  <ChevronRight
                    size={21}
                    className={styles.arrow}
                  />
                </div>

                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className={styles.cardBottom}>
                  <div>
                    <strong>{item.count}</strong>
                    <span>{item.label}</span>
                  </div>

                  <span className={styles.openText}>
                    Open
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* INFORMATION */}
      <section className={styles.infoCard}>
        <div className={styles.infoIcon}>
          <ClipboardCheck size={22} />
        </div>

        <div>
          <h3>Result Management</h3>
          <p>
            Enter accurate match results after competitions, review pending
            submissions and access previously completed results.
          </p>
        </div>
      </section>
    </main>
  );
}