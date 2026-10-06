"use client";

import Link from "next/link";
import {
  Trophy,
  Medal,
  Award,
  TrendingUp,
  ArrowRight,
  Star,
  ShieldCheck,
} from "lucide-react";

import styles from "./Achievements.module.css";

export default function Achievements() {
  return (
    <main className={styles.page}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Achievements</h1>
          <p>
            View your medals, rankings and certificates earned in WABA
            competitions.
          </p>
        </div>

        <div className={styles.achievementBadge}>
          <Trophy size={18} />
          Athlete Achievements
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.gold}`}>
            <Medal size={22} />
          </div>

          <div>
            <span>Total Medals</span>
            <strong>7</strong>
            <small>3 Gold · 2 Silver · 2 Bronze</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <TrendingUp size={22} />
          </div>

          <div>
            <span>Current Ranking</span>
            <strong>#12</strong>
            <small>National Ranking</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Award size={22} />
          </div>

          <div>
            <span>Certificates</span>
            <strong>6</strong>
            <small>Achievement certificates</small>
          </div>
        </div>
      </div>

      {/* Achievement Overview */}
      <section className={styles.overview}>
        <div className={styles.overviewContent}>
          <div className={styles.trophyIcon}>
            <Trophy size={30} />
          </div>

          <div>
            <span className={styles.label}>ATHLETE ACHIEVEMENT</span>
            <h2>Keep Building Your Boxing Journey</h2>
            <p>
              Track your competition achievements, national ranking and
              certificates from one place.
            </p>
          </div>
        </div>

        <div className={styles.overviewStats}>
          <div>
            <strong>8</strong>
            <span>Competitions</span>
          </div>

          <div>
            <strong>24</strong>
            <span>Matches</span>
          </div>

          <div>
            <strong>78%</strong>
            <span>Win Rate</span>
          </div>
        </div>
      </section>

      {/* Management Cards */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Achievement Management</h2>
            <p>Explore your achievements</p>
          </div>
        </div>

        <div className={styles.managementGrid}>
          {/* Medals */}
          <Link href="/Athlete/medalsPage" className={styles.managementCard}>
            <div className={`${styles.cardIcon} ${styles.medalIcon}`}>
              <Medal size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>Medals</h3>
              <p>
                View all gold, silver and bronze medals earned in competitions.
              </p>

              <div className={styles.cardFooter}>
                <span>7 Medals</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>

          {/* Ranking */}
          <Link
            href="/Athlete/rankingPage"
            className={styles.managementCard}
          >
            <div className={`${styles.cardIcon} ${styles.rankingIcon}`}>
              <TrendingUp size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>Ranking</h3>
              <p>
                Check your current national ranking and ranking history.
              </p>

              <div className={styles.cardFooter}>
                <span>Current Rank #12</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>

          {/* Certificates */}
          <Link
            href="/Athlete/certificatePage"
            className={styles.managementCard}
          >
            <div className={`${styles.cardIcon} ${styles.certificateIcon}`}>
              <Award size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>Certificates</h3>
              <p>
                View and download certificates received from WABA events.
              </p>

              <div className={styles.cardFooter}>
                <span>6 Certificates</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Recent Achievements</h2>
            <p>Your latest accomplishments</p>
          </div>
        </div>

        <div className={styles.recentList}>
          <div className={styles.recentItem}>
            <div className={styles.recentIcon}>
              <Medal size={20} />
            </div>

            <div className={styles.recentContent}>
              <h3>Gold Medal</h3>
              <p>Telangana Adaptive Boxing Championship</p>
            </div>

            <span className={styles.date}>10 Sep 2026</span>
          </div>

          <div className={styles.recentItem}>
            <div className={styles.recentIcon}>
              <TrendingUp size={20} />
            </div>

            <div className={styles.recentContent}>
              <h3>National Ranking #12</h3>
              <p>WABA Senior · WAB-1</p>
            </div>

            <span className={styles.date}>01 Sep 2026</span>
          </div>

          <div className={styles.recentItem}>
            <div className={styles.recentIcon}>
              <Award size={20} />
            </div>

            <div className={styles.recentContent}>
              <h3>Competition Certificate</h3>
              <p>South Zone Adaptive Boxing Championship</p>
            </div>

            <span className={styles.date}>22 Aug 2026</span>
          </div>
        </div>
      </section>

      {/* Athlete Achievement Info */}
      <div className={styles.infoBox}>
        <ShieldCheck size={22} />

        <div>
          <strong>Official WABA Achievement Record</strong>
          <p>
            Your medals, rankings and certificates are maintained as part of
            your athlete achievement history.
          </p>
        </div>
      </div>
    </main>
  );
}