"use client";

import {
  Trophy,
  CalendarDays,
  ClipboardCheck,
  Clock3,
  Users,
  MapPin,
  ArrowRight,
  Award,
} from "lucide-react";

import styles from "./Competitions.module.css";

export default function Competitions() {
  return (
    <main className={styles.main}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.titleRow}>
            <div className={styles.titleIcon}>
              <Trophy size={25} />
            </div>

            <div>
              <h1>Competitions</h1>
              <p>
                Manage available competitions, registrations and upcoming
                events for your organisation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STAT CARDS */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Trophy size={23} />
          </div>

          <div>
            <span>Total Competitions</span>
            <strong>25</strong>
            <small>+4 this year</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <CalendarDays size={23} />
          </div>

          <div>
            <span>Available</span>
            <strong>12</strong>
            <small>Open for registration</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <ClipboardCheck size={23} />
          </div>

          <div>
            <span>Registered</span>
            <strong>8</strong>
            <small>Competition registrations</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <Clock3 size={23} />
          </div>

          <div>
            <span>Upcoming</span>
            <strong>8</strong>
            <small>Scheduled competitions</small>
          </div>
        </div>
      </section>

      {/* MANAGEMENT CARDS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Competition Management</h2>
            <p>Access and manage your organisation's competitions.</p>
          </div>
        </div>

        <div className={styles.managementGrid}>
          {/* AVAILABLE */}
          <a
            href="/Club/competitions/available"
            className={styles.managementCard}
          >
            <div className={`${styles.managementIcon} ${styles.available}`}>
              <Trophy size={28} />
            </div>

            <div className={styles.cardContent}>
              <h3>Available Competitions</h3>

              <p>
                View competitions currently open for registration and register
                your athletes.
              </p>

              <div className={styles.cardBottom}>
                <span>12 competitions</span>

                <div className={styles.arrow}>
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </a>

          {/* REGISTRATIONS */}
          <a
            href="/Club/competitions/registrations"
            className={styles.managementCard}
          >
            <div className={`${styles.managementIcon} ${styles.registration}`}>
              <ClipboardCheck size={28} />
            </div>

            <div className={styles.cardContent}>
              <h3>Registrations</h3>

              <p>
                Track athlete registrations, submitted entries and registration
                status.
              </p>

              <div className={styles.cardBottom}>
                <span>8 registrations</span>

                <div className={styles.arrow}>
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </a>

          {/* UPCOMING */}
          <a
            href="/Club/competitions/upcoming"
            className={styles.managementCard}
          >
            <div className={`${styles.managementIcon} ${styles.upcoming}`}>
              <CalendarDays size={28} />
            </div>

            <div className={styles.cardContent}>
              <h3>Upcoming Competitions</h3>

              <p>
                View registered competitions, dates, venues and upcoming event
                schedules.
              </p>

              <div className={styles.cardBottom}>
                <span>8 upcoming events</span>

                <div className={styles.arrow}>
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* UPCOMING COMPETITIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Upcoming Competitions</h2>
            <p>Recently scheduled competitions for your organisation.</p>
          </div>

          <a
            href="/Club/competitions/upcoming"
            className={styles.viewAll}
          >
            View All
            <ArrowRight size={16} />
          </a>
        </div>

        <div className={styles.competitionList}>
          {/* COMPETITION 1 */}
          <div className={styles.competitionCard}>
            <div className={styles.dateBox}>
              <span>20</span>
              <small>OCT</small>
            </div>

            <div className={styles.competitionInfo}>
              <div className={styles.competitionTitle}>
                <h3>National Adaptive Boxing Championship</h3>
                <span className={styles.confirmed}>Registered</span>
              </div>

              <div className={styles.details}>
                <span>
                  <MapPin size={15} />
                  Hyderabad
                </span>

                <span>
                  <Users size={15} />
                  6 Athletes
                </span>

                <span>
                  <Award size={15} />
                  National Level
                </span>
              </div>
            </div>

            <a
              href="/Club/competitions/upcoming"
              className={styles.detailsButton}
            >
              Details
              <ArrowRight size={16} />
            </a>
          </div>

          {/* COMPETITION 2 */}
          <div className={styles.competitionCard}>
            <div className={styles.dateBox}>
              <span>05</span>
              <small>NOV</small>
            </div>

            <div className={styles.competitionInfo}>
              <div className={styles.competitionTitle}>
                <h3>South Zone Boxing Championship</h3>
                <span className={styles.confirmed}>Registered</span>
              </div>

              <div className={styles.details}>
                <span>
                  <MapPin size={15} />
                  Bengaluru
                </span>

                <span>
                  <Users size={15} />
                  4 Athletes
                </span>

                <span>
                  <Award size={15} />
                  Zone Level
                </span>
              </div>
            </div>

            <a
              href="/Club/competitions/upcoming"
              className={styles.detailsButton}
            >
              Details
              <ArrowRight size={16} />
            </a>
          </div>

          {/* COMPETITION 3 */}
          <div className={styles.competitionCard}>
            <div className={styles.dateBox}>
              <span>18</span>
              <small>NOV</small>
            </div>

            <div className={styles.competitionInfo}>
              <div className={styles.competitionTitle}>
                <h3>State Adaptive Boxing Championship</h3>
                <span className={styles.confirmed}>Registered</span>
              </div>

              <div className={styles.details}>
                <span>
                  <MapPin size={15} />
                  Visakhapatnam
                </span>

                <span>
                  <Users size={15} />
                  5 Athletes
                </span>

                <span>
                  <Award size={15} />
                  State Level
                </span>
              </div>
            </div>

            <a
              href="/Club/competitions/upcoming"
              className={styles.detailsButton}
            >
              Details
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}