"use client";

import {
  Users,
  UserCheck,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  UserPlus,
  Search,
  Trophy,
} from "lucide-react";

import styles from "./Athletes.module.css";

export default function Athletes() {
  return (
    <main className={styles.athletes}>
      {/* =================================
          PAGE HEADER
      ================================= */}

      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <Users size={24} />
          </div>

          <div>
            <h1>Athletes</h1>
            <p>
              Manage athletes, memberships and classification of your
              organisation.
            </p>
          </div>
        </div>

        <button type="button" className={styles.addButton}>
          <UserPlus size={17} />
          Add Athlete
        </button>
      </div>

      {/* =================================
          STAT CARDS
      ================================= */}

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Users size={22} />
          </div>

          <div>
            <span>Total Athletes</span>
            <strong>86</strong>
            <small>+8 this month</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <UserCheck size={22} />
          </div>

          <div>
            <span>Active Athletes</span>
            <strong>72</strong>
            <small>Currently active</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <CreditCard size={22} />
          </div>

          <div>
            <span>Active Memberships</span>
            <strong>68</strong>
            <small>6 renewed recently</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <ShieldCheck size={22} />
          </div>

          <div>
            <span>Classified Athletes</span>
            <strong>61</strong>
            <small>70.9% classified</small>
          </div>
        </div>
      </section>

      {/* =================================
          ATHLETE MANAGEMENT
      ================================= */}

      <section className={styles.managementSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Athlete Management</h2>
            <p>
              Select a section to manage your athletes.
            </p>
          </div>
        </div>

        <div className={styles.managementGrid}>
          {/* ALL ATHLETES */}

          <a
            href="/Club/athletes/all"
            className={styles.managementCard}
          >
            <div className={`${styles.cardIcon} ${styles.allIcon}`}>
              <Users size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>All Athletes</h3>

              <p>
                View and manage all athletes registered with your
                club or academy.
              </p>

              <div className={styles.cardBottom}>
                <span>86 Athletes</span>

                <ArrowRight size={17} />
              </div>
            </div>
          </a>

          {/* ACTIVE ATHLETES */}

          <a
            href="/Club/athletes/active"
            className={styles.managementCard}
          >
            <div
              className={`${styles.cardIcon} ${styles.activeIcon}`}
            >
              <UserCheck size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>Active Athletes</h3>

              <p>
                View athletes who are currently active in your
                organisation.
              </p>

              <div className={styles.cardBottom}>
                <span>72 Active</span>

                <ArrowRight size={17} />
              </div>
            </div>
          </a>

          {/* MEMBERSHIPS */}

          <a
            href="/Club/athletes/memberships"
            className={styles.managementCard}
          >
            <div
              className={`${styles.cardIcon} ${styles.membershipIcon}`}
            >
              <CreditCard size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>Memberships</h3>

              <p>
                Manage athlete memberships, renewals and membership
                status.
              </p>

              <div className={styles.cardBottom}>
                <span>68 Active</span>

                <ArrowRight size={17} />
              </div>
            </div>
          </a>

          {/* CLASSIFICATION */}

          <a
            href="/Club/athletes/classification"
            className={styles.managementCard}
          >
            <div
              className={`${styles.cardIcon} ${styles.classificationIcon}`}
            >
              <ShieldCheck size={25} />
            </div>

            <div className={styles.cardContent}>
              <h3>Classification</h3>

              <p>
                Manage athlete classification and classification
                status.
              </p>

              <div className={styles.cardBottom}>
                <span>61 Classified</span>

                <ArrowRight size={17} />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* =================================
          QUICK OVERVIEW
      ================================= */}

      <section className={styles.overviewCard}>
        <div className={styles.overviewHeader}>
          <div>
            <h2>Recent Athlete Activity</h2>
            <p>
              Latest athlete registrations and updates.
            </p>
          </div>

          <a href="/Club/athletes/all">
            View All
            <ArrowRight size={15} />
          </a>
        </div>

        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityAvatar}>
              RK
            </div>

            <div className={styles.activityInfo}>
              <strong>Rahul Kumar</strong>
              <span>New athlete registered</span>
            </div>

            <div className={styles.activityTime}>
              Today
            </div>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityAvatar}>
              PR
            </div>

            <div className={styles.activityInfo}>
              <strong>Priya Reddy</strong>
              <span>Membership renewed</span>
            </div>

            <div className={styles.activityTime}>
              Yesterday
            </div>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityAvatar}>
              SB
            </div>

            <div className={styles.activityInfo}>
              <strong>Suresh Babu</strong>
              <span>Classification updated</span>
            </div>

            <div className={styles.activityTime}>
              2 days ago
            </div>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityAvatar}>
              AR
            </div>

            <div className={styles.activityInfo}>
              <strong>Anjali Rao</strong>
              <span>Profile information updated</span>
            </div>

            <div className={styles.activityTime}>
              3 days ago
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}