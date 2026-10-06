"use client";

import Link from "next/link";
import {
  Trophy,
  Swords,
  ClipboardCheck,
  Clock3,
  CalendarDays,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Activity,
  ShieldCheck,
} from "lucide-react";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <main className={styles.page}>

      {/* ==========================================
          WELCOME SECTION
      ========================================== */}

      <section className={styles.welcomeSection}>
        <div>
          <div className={styles.pageLabel}>
            TECHNICAL DASHBOARD
          </div>

          <h1>Welcome back, Technical Official</h1>

          <p>
            Manage your competitions, matches, officiating,
            results and athlete classification from one place.
          </p>
        </div>

        <div className={styles.dateBox}>
          <CalendarDays size={20} />
          <div>
            <span>Today</span>
            <strong>21 September 2026</strong>
          </div>
        </div>
      </section>


      {/* ==========================================
          PROFILE STATUS
      ========================================== */}

      <section className={styles.profileBanner}>

        <div className={styles.profileLeft}>

          <div className={styles.profileAvatar}>
            T
          </div>

          <div>
            <h3>Technical Official</h3>

            <p>
              Technical ID: <strong>TEC001</strong>
              <span className={styles.dot}>•</span>
              WABA Telangana
            </p>
          </div>

        </div>

        <div className={styles.profileStatus}>
          <span className={styles.statusDot}></span>
          Active Official
        </div>

      </section>


      {/* ==========================================
          STATISTICS
      ========================================== */}

      <section className={styles.statsGrid}>

        {/* Assigned Competitions */}

        <div className={`${styles.statCard} ${styles.orangeCard}`}>

          <div className={styles.statTop}>
            <div className={styles.statIcon}>
              <Trophy size={22} />
            </div>

            <span className={styles.statTrend}>
              +3
            </span>
          </div>

          <div className={styles.statNumber}>
            12
          </div>

          <div className={styles.statTitle}>
            Assigned Competitions
          </div>

          <p>
            Competitions assigned to you
          </p>

        </div>


        {/* Upcoming Matches */}

        <div className={styles.statCard}>

          <div className={styles.statTop}>
            <div className={styles.statIconBlue}>
              <Swords size={22} />
            </div>

            <span className={styles.statTrendBlue}>
              +2
            </span>
          </div>

          <div className={styles.statNumber}>
            8
          </div>

          <div className={styles.statTitle}>
            Upcoming Matches
          </div>

          <p>
            Matches requiring your attention
          </p>

        </div>


        {/* Pending Results */}

        <div className={styles.statCard}>

          <div className={styles.statTop}>
            <div className={styles.statIconPurple}>
              <ClipboardCheck size={22} />
            </div>

            <span className={styles.statTrendWarning}>
              3 Pending
            </span>
          </div>

          <div className={styles.statNumber}>
            5
          </div>

          <div className={styles.statTitle}>
            Results
          </div>

          <p>
            Results waiting for submission
          </p>

        </div>


        {/* Classification */}

        <div className={styles.statCard}>

          <div className={styles.statTop}>
            <div className={styles.statIconGreen}>
              <Users size={22} />
            </div>

            <span className={styles.statTrendGreen}>
              Active
            </span>
          </div>

          <div className={styles.statNumber}>
            16
          </div>

          <div className={styles.statTitle}>
            Classification Requests
          </div>

          <p>
            Athletes assigned for classification
          </p>

        </div>

      </section>


      {/* ==========================================
          MAIN GRID
      ========================================== */}

      <section className={styles.mainGrid}>

        {/* ========================================
            TODAY'S ASSIGNMENTS
        ======================================== */}

        <div className={styles.card}>

          <div className={styles.cardHeader}>

            <div>
              <h2>Today&apos;s Assignments</h2>
              <p>
                Your scheduled technical activities
              </p>
            </div>

            <Link
              href="/Technical/assignmentsPage"
              className={styles.viewLink}
            >
              View All
              <ArrowRight size={15} />
            </Link>

          </div>


          <div className={styles.assignmentList}>

            {/* Assignment 1 */}

            <div className={styles.assignmentItem}>

              <div className={styles.assignmentIcon}>
                <Trophy size={19} />
              </div>

              <div className={styles.assignmentContent}>

                <div className={styles.assignmentTitleRow}>
                  <h4>
                    WABA National Championship 2026
                  </h4>

                  <span className={styles.badgeOrange}>
                    Assigned
                  </span>
                </div>

                <p>
                  <CalendarDays size={14} />
                  21 Sep 2026
                  <span>•</span>
                  <MapPin size={14} />
                  Hyderabad
                </p>

              </div>

            </div>


            {/* Assignment 2 */}

            <div className={styles.assignmentItem}>

              <div className={styles.assignmentIconBlue}>
                <Swords size={19} />
              </div>

              <div className={styles.assignmentContent}>

                <div className={styles.assignmentTitleRow}>
                  <h4>
                    Match Officials Assignment
                  </h4>

                  <span className={styles.badgeBlue}>
                    Upcoming
                  </span>
                </div>

                <p>
                  <CalendarDays size={14} />
                  21 Sep 2026
                  <span>•</span>
                  <MapPin size={14} />
                  Ring A
                </p>

              </div>

            </div>


            {/* Assignment 3 */}

            <div className={styles.assignmentItem}>

              <div className={styles.assignmentIconGreen}>
                <Users size={19} />
              </div>

              <div className={styles.assignmentContent}>

                <div className={styles.assignmentTitleRow}>
                  <h4>
                    Athlete Classification Session
                  </h4>

                  <span className={styles.badgeGreen}>
                    Scheduled
                  </span>
                </div>

                <p>
                  <CalendarDays size={14} />
                  21 Sep 2026
                  <span>•</span>
                  <MapPin size={14} />
                  Classification Room
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ========================================
            QUICK ACTIONS
        ======================================== */}

        <div className={styles.card}>

          <div className={styles.cardHeader}>

            <div>
              <h2>Quick Actions</h2>
              <p>
                Frequently used technical operations
              </p>
            </div>

          </div>


          <div className={styles.quickActions}>

            <Link
              href="/Technical/enterResultPage"
              className={styles.actionItem}
            >
              <div className={styles.actionIconOrange}>
                <ClipboardCheck size={21} />
              </div>

              <div>
                <strong>Enter Results</strong>
                <span>
                  Submit match results
                </span>
              </div>

              <ArrowRight size={16} />
            </Link>


            <Link
              href="/Technical/upcomingMatchPage"
              className={styles.actionItem}
            >
              <div className={styles.actionIconBlue}>
                <Swords size={21} />
              </div>

              <div>
                <strong>View Matches</strong>
                <span>
                  Check upcoming matches
                </span>
              </div>

              <ArrowRight size={16} />
            </Link>


            <Link
              href="/Technical/pendingAthletesPage"
              className={styles.actionItem}
            >
              <div className={styles.actionIconGreen}>
                <Users size={21} />
              </div>

              <div>
                <strong>Classify Athletes</strong>
                <span>
                  Review pending athletes
                </span>
              </div>

              <ArrowRight size={16} />
            </Link>


            <Link
              href="/Technical/certificatePage"
              className={styles.actionItem}
            >
              <div className={styles.actionIconPurple}>
                <Award size={21} />
              </div>

              <div>
                <strong>Certificates</strong>
                <span>
                  Manage certificates
                </span>
              </div>

              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* ==========================================
          LOWER GRID
      ========================================== */}

      <section className={styles.lowerGrid}>

        {/* ========================================
            UPCOMING MATCHES
        ======================================== */}

        <div className={styles.card}>

          <div className={styles.cardHeader}>

            <div>
              <h2>Upcoming Matches</h2>
              <p>
                Your next assigned matches
              </p>
            </div>

            <Link
              href="/Technical/upcomingMatchPage"
              className={styles.viewLink}
            >
              View All
              <ArrowRight size={15} />
            </Link>

          </div>


          <div className={styles.matchList}>

            <div className={styles.matchItem}>

              <div className={styles.matchTime}>
                <strong>10:30</strong>
                <span>AM</span>
              </div>

              <div className={styles.matchInfo}>
                <strong>
                  WABA National Championship
                </strong>

                <span>
                  Rahul Reddy vs Sanjay Kumar
                </span>

                <small>
                  Ring A • Quarter Final
                </small>
              </div>

              <span className={styles.liveUpcoming}>
                Upcoming
              </span>

            </div>


            <div className={styles.matchItem}>

              <div className={styles.matchTime}>
                <strong>11:00</strong>
                <span>AM</span>
              </div>

              <div className={styles.matchInfo}>
                <strong>
                  South Zone Championship
                </strong>

                <span>
                  Vikram Singh vs Kiran Kumar
                </span>

                <small>
                  Ring B • Semi Final
                </small>
              </div>

              <span className={styles.liveUpcoming}>
                Upcoming
              </span>

            </div>


            <div className={styles.matchItem}>

              <div className={styles.matchTime}>
                <strong>02:00</strong>
                <span>PM</span>
              </div>

              <div className={styles.matchInfo}>
                <strong>
                  State Adaptive Championship
                </strong>

                <span>
                  Arun Kumar vs Ravi Teja
                </span>

                <small>
                  Ring A • Round 1
                </small>
              </div>

              <span className={styles.liveUpcoming}>
                Upcoming
              </span>

            </div>

          </div>

        </div>


        {/* ========================================
            ACTIVITY
        ======================================== */}

        <div className={styles.card}>

          <div className={styles.cardHeader}>

            <div>
              <h2>Recent Activity</h2>
              <p>
                Latest updates on your account
              </p>
            </div>

          </div>


          <div className={styles.activityList}>

            <div className={styles.activityItem}>

              <div className={styles.activityIconSuccess}>
                <CheckCircle2 size={17} />
              </div>

              <div>
                <strong>
                  Match result submitted
                </strong>

                <span>
                  National Championship • 20 Sep
                </span>
              </div>

            </div>


            <div className={styles.activityItem}>

              <div className={styles.activityIconBlue}>
                <Activity size={17} />
              </div>

              <div>
                <strong>
                  New competition assignment
                </strong>

                <span>
                  National Championship • 19 Sep
                </span>
              </div>

            </div>


            <div className={styles.activityItem}>

              <div className={styles.activityIconOrange}>
                <ShieldCheck size={17} />
              </div>

              <div>
                <strong>
                  Qualification verified
                </strong>

                <span>
                  Technical Official • 18 Sep
                </span>
              </div>

            </div>


            <div className={styles.activityItem}>

              <div className={styles.activityIconWarning}>
                <AlertCircle size={17} />
              </div>

              <div>
                <strong>
                  3 results awaiting submission
                </strong>

                <span>
                  Action required • 18 Sep
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          FOOTER STATUS
      ========================================== */}

      <section className={styles.systemStatus}>

        <div className={styles.systemLeft}>

          <span className={styles.systemDot}></span>

          <div>
            <strong>Technical Operations</strong>
            <span>
              All systems operational
            </span>
          </div>

        </div>

        <div className={styles.systemRight}>
          WABA Technical Portal
          <span>•</span>
          September 2026
        </div>

      </section>

    </main>
  );
}