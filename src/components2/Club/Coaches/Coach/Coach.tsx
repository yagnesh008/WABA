"use client";

import Link from "next/link";
import {
  Dumbbell,
  Users,
  UserCog,
  CalendarDays,
  ArrowRight,
  Activity,
  Trophy,
} from "lucide-react";

import styles from "./Coach.module.css";

export default function Coach() {
  return (
    <main className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>
            <Dumbbell size={26} />
          </div>

          <div>
            <h1>Coaching</h1>
            <p>
              Manage coaches, athletes and training activities of your
              organisation.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.blue}`}>
          <div className={styles.statIcon}>
            <Users size={22} />
          </div>

          <div>
            <span>My Athletes</span>
            <strong>72</strong>
            <small>Currently assigned</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.green}`}>
          <div className={styles.statIcon}>
            <UserCog size={22} />
          </div>

          <div>
            <span>Assistant Coaches</span>
            <strong>5</strong>
            <small>Active coaches</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.orange}`}>
          <div className={styles.statIcon}>
            <CalendarDays size={22} />
          </div>

          <div>
            <span>Training Sessions</span>
            <strong>24</strong>
            <small>This month</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.purple}`}>
          <div className={styles.statIcon}>
            <Trophy size={22} />
          </div>

          <div>
            <span>Competition Athletes</span>
            <strong>18</strong>
            <small>Currently preparing</small>
          </div>
        </div>
      </div>

      {/* Management Cards */}
      <div className={styles.sectionHeader}>
        <div>
          <h2>Coaching Management</h2>
          <p>Manage your coaching activities</p>
        </div>
      </div>

      <div className={styles.managementGrid}>
        <Link href="/Club/coaching/my-athletes" className={styles.managementCard}>
          <div className={`${styles.cardIcon} ${styles.blueIcon}`}>
            <Users size={24} />
          </div>

          <div className={styles.cardContent}>
            <h3>My Athletes</h3>
            <p>
              View and manage athletes assigned to your coaching team.
            </p>
          </div>

          <ArrowRight size={20} className={styles.arrow} />
        </Link>

        <Link
          href="/Club/coaching/assistant-coaches"
          className={styles.managementCard}
        >
          <div className={`${styles.cardIcon} ${styles.greenIcon}`}>
            <UserCog size={24} />
          </div>

          <div className={styles.cardContent}>
            <h3>Assistant Coaches</h3>
            <p>
              Manage assistant coaches and their assigned athletes.
            </p>
          </div>

          <ArrowRight size={20} className={styles.arrow} />
        </Link>

        <Link
          href="/Club/coaching/training"
          className={styles.managementCard}
        >
          <div className={`${styles.cardIcon} ${styles.orangeIcon}`}>
            <CalendarDays size={24} />
          </div>

          <div className={styles.cardContent}>
            <h3>Training</h3>
            <p>
              Schedule and manage athlete training sessions.
            </p>
          </div>

          <ArrowRight size={20} className={styles.arrow} />
        </Link>
      </div>

      {/* Current Coaching Activity */}
      <div className={styles.activityCard}>
        <div className={styles.activityHeader}>
          <div>
            <h2>Recent Coaching Activity</h2>
            <p>Latest updates from your coaching team</p>
          </div>

          <Activity size={22} />
        </div>

        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityDot}></div>
            <div>
              <strong>Rahul Kumar</strong>
              <p>Assigned to Rajesh Kumar</p>
            </div>
            <span>Today</span>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityDot}></div>
            <div>
              <strong>Priya Reddy</strong>
              <p>Training session completed</p>
            </div>
            <span>Yesterday</span>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityDot}></div>
            <div>
              <strong>Suresh Babu</strong>
              <p>Training plan updated</p>
            </div>
            <span>2 days ago</span>
          </div>

          <div className={styles.activityItem}>
            <div className={styles.activityDot}></div>
            <div>
              <strong>Vikram Singh</strong>
              <p>Assigned to competition training</p>
            </div>
            <span>3 days ago</span>
          </div>
        </div>
      </div>
    </main>
  );
}