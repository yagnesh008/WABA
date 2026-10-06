import Link from "next/link";
import {
  BarChart3,
  Trophy,
  Users,
  TrendingUp,
  Target,
  Award,
  Activity,
} from "lucide-react";

import styles from "./Performance.module.css";

export default function Performance() {
  return (
    <main className={styles.page}>
      {/* HEADER */}

      <div className={styles.pageHeader}>
        <div className={styles.titleRow}>
          <div className={styles.titleIcon}>
            <BarChart3 size={25} />
          </div>

          <div>
            <h1>Performance</h1>
            <p>
              Monitor athlete performance, rankings and competition results.
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Active Athletes</span>
            <strong>72</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <Trophy size={21} />
          </div>

          <div>
            <span>Competition Wins</span>
            <strong>38</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <TrendingUp size={21} />
          </div>

          <div>
            <span>Avg Performance</span>
            <strong>86%</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <Award size={21} />
          </div>

          <div>
            <span>Top Ranked</span>
            <strong>12</strong>
          </div>
        </div>
      </div>

      {/* MANAGEMENT CARDS */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Performance Management</h2>
            <p>Manage athlete performance and rankings.</p>
          </div>
        </div>

        <div className={styles.cardGrid}>
          <Link
            href="/Club/performance/athlete-performance"
            className={styles.managementCard}
          >
            <div className={`${styles.cardIcon} ${styles.performanceIcon}`}>
              <Activity size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>Athlete Performance</h3>
              <p>
                Track individual athlete performance, scores, wins and
                competition statistics.
              </p>

              <span className={styles.viewLink}>
                View Performance →
              </span>
            </div>
          </Link>

          <Link
            href="/Club/performance/rankings"
            className={styles.managementCard}
          >
            <div className={`${styles.cardIcon} ${styles.rankingIcon}`}>
              <Trophy size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>Rankings</h3>
              <p>
                View athlete rankings based on competition performance and
                results.
              </p>

              <span className={styles.viewLink}>
                View Rankings →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* TOP PERFORMERS */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Top Performers</h2>
            <p>Current high-performing athletes in your organisation.</p>
          </div>
        </div>

        <div className={styles.performerGrid}>
          <div className={styles.performerCard}>
            <div className={styles.rank}>01</div>

            <div className={styles.avatar}>RK</div>

            <div className={styles.performerInfo}>
              <h3>Rahul Kumar</h3>
              <span>Lightweight</span>
            </div>

            <div className={styles.performanceScore}>
              <strong>94%</strong>
              <span>Performance</span>
            </div>
          </div>

          <div className={styles.performerCard}>
            <div className={styles.rank}>02</div>

            <div className={styles.avatar}>PR</div>

            <div className={styles.performerInfo}>
              <h3>Priya Reddy</h3>
              <span>Flyweight</span>
            </div>

            <div className={styles.performanceScore}>
              <strong>91%</strong>
              <span>Performance</span>
            </div>
          </div>

          <div className={styles.performerCard}>
            <div className={styles.rank}>03</div>

            <div className={styles.avatar}>VS</div>

            <div className={styles.performerInfo}>
              <h3>Vikram Singh</h3>
              <span>Middleweight</span>
            </div>

            <div className={styles.performanceScore}>
              <strong>88%</strong>
              <span>Performance</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}