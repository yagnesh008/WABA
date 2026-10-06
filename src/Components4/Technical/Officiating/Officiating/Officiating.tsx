"use client";

import Link from "next/link";
import {
  ClipboardList,
  ShieldCheck,
  Scale,
  ArrowRight,
  Trophy,
} from "lucide-react";

import styles from "./Officiating.module.css";

const sections = [
  {
    title: "Assignments",
    description:
      "View and manage your competition, match and officiating assignments.",
    count: 8,
    icon: ClipboardList,
    href: "/Technical/assignmentsPage",
    type: "assignments",
  },
  {
    title: "Refereeing",
    description:
      "Manage referee duties, match responsibilities and referee records.",
    count: 5,
    icon: ShieldCheck,
    href: "/Technical/refereeingPage",
    type: "refereeing",
  },
  {
    title: "Judging",
    description:
      "Review judging assignments, scorecards and judging responsibilities.",
    count: 7,
    icon: Scale,
    href: "/Technical/judgingPage",
    type: "judging",
  },
];

export default function Officiating() {
  return (
    <main className={styles.page}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <ClipboardList size={30} />
            Officiating
          </h1>

          <p>
            Manage your assignments, refereeing duties and judging
            responsibilities.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <Trophy size={17} />
          Officiating
        </div>
      </div>

      {/* SUMMARY */}
      <section className={styles.summary}>
        <div className={styles.summaryIcon}>
          <ClipboardList size={24} />
        </div>

        <div>
          <h2>Officiating Management</h2>

          <p>
            Manage all your technical officiating responsibilities from one
            place.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className={styles.grid}>
        {sections.map((item) => {
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
                <span>View {item.title}</span>

                <ArrowRight size={18} />
              </div>
            </Link>
          );
        })}
      </section>

      {/* INFO */}
      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <ClipboardList size={20} />

          <div>
            <strong>Assignments</strong>
            <span>View all your assigned officiating duties.</span>
          </div>
        </div>

        <div className={styles.infoCard}>
          <ShieldCheck size={20} />

          <div>
            <strong>Refereeing</strong>
            <span>Manage referee duties and match responsibilities.</span>
          </div>
        </div>

        <div className={styles.infoCard}>
          <Scale size={20} />

          <div>
            <strong>Judging</strong>
            <span>Manage judging assignments and scorecards.</span>
          </div>
        </div>
      </section>
    </main>
  );
}