"use client";

import {
  Swords,
  CalendarDays,
  Trophy,
  Users,
  CheckCircle2,
  Clock3,
  ArrowRight,
} from "lucide-react";

import styles from "./Match.module.css";

export default function Match() {
  return (
    <main className={styles.main}>
      {/* HEADER */}

      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <Swords size={25} />
          </div>

          <div>
            <h1>Matches</h1>
            <p>
              Manage upcoming matches, match results and athlete
              performance.
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Swords size={22} />
          </div>

          <div>
            <span>Total Matches</span>
            <strong>48</strong>
            <small>All club matches</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <CalendarDays size={22} />
          </div>

          <div>
            <span>Upcoming Matches</span>
            <strong>12</strong>
            <small>Scheduled matches</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Completed</span>
            <strong>36</strong>
            <small>Completed matches</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <Trophy size={22} />
          </div>

          <div>
            <span>Wins</span>
            <strong>25</strong>
            <small>Club athlete wins</small>
          </div>
        </div>
      </section>

      {/* MANAGEMENT CARDS */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Match Management</h2>

          <p>
            View upcoming fixtures and completed match results.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {/* UPCOMING */}

          <a
            href="/Club/matches/upcoming"
            className={styles.managementCard}
          >
            <div className={styles.cardIconOrange}>
              <CalendarDays size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>Upcoming Matches</h3>

              <p>
                View scheduled matches, opponents, venues and match
                timings.
              </p>

              <div className={styles.cardFooter}>
                <span>12 Upcoming Matches</span>

                <ArrowRight size={18} />
              </div>
            </div>
          </a>

          {/* RESULTS */}

          <a
            href="/Club/matches/results"
            className={styles.managementCard}
          >
            <div className={styles.cardIconGreen}>
              <Trophy size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>Match Results</h3>

              <p>
                View completed matches, scores, winners and athlete
                performance.
              </p>

              <div className={styles.cardFooter}>
                <span>36 Completed Matches</span>

                <ArrowRight size={18} />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* RECENT MATCHES */}

      <section className={styles.recentSection}>
        <div className={styles.sectionHeader}>
          <h2>Recent Match Activity</h2>

          <p>Latest match updates from your organisation.</p>
        </div>

        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>
              <Trophy size={17} />
            </div>

            <div>
              <strong>Rahul Kumar</strong>
              <span>Won against Arjun Singh</span>
            </div>

            <small>Today</small>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>
              <Swords size={17} />
            </div>

            <div>
              <strong>Priya Reddy</strong>
              <span>Match scheduled for 22 Sep 2026</span>
            </div>

            <small>Yesterday</small>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>
              <CheckCircle2 size={17} />
            </div>

            <div>
              <strong>Suresh Babu</strong>
              <span>Match result updated</span>
            </div>

            <small>2 days ago</small>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>
              <Users size={17} />
            </div>

            <div>
              <strong>Vikram Singh</strong>
              <span>Added to upcoming match</span>
            </div>

            <small>3 days ago</small>
          </div>
        </div>
      </section>
    </main>
  );
}