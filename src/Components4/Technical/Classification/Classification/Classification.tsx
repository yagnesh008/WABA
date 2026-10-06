"use client";

import Link from "next/link";
import {
  ClipboardCheck,
  Users,
  CalendarDays,
  History as HistoryIcon,
  Clock3,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  FileCheck,
  Activity,
  MapPin,
} from "lucide-react";

import styles from "./Classification.module.css";

/* =========================================================
   CLASSIFICATION MODULE DATA
========================================================= */

const classificationSections = [
  {
    title: "Pending Athletes",
    description:
      "View athletes waiting for classification and manage pending classification requests.",
    count: 8,
    status: "Pending",
    icon: Users,
    href: "/Technical/pendingAthletesPage",
  },
  {
    title: "Sessions",
    description:
      "View scheduled classification sessions and manage upcoming athlete assessments.",
    count: 5,
    status: "Scheduled",
    icon: CalendarDays,
    href: "/Technical/sessionPage",
  },
  {
    title: "History",
    description:
      "View completed classification assessments and previously classified athletes.",
    count: 42,
    status: "Completed",
    icon: HistoryIcon,
    href: "/Technical/classificationHistoryPage",
  },
];

/* =========================================================
   RECENT CLASSIFICATION SESSIONS
========================================================= */

const recentSessions = [
  {
    id: 1,
    athlete: "Rahul Kumar",
    classification: "Initial Classification",
    date: "24 September 2026",
    time: "10:00 AM",
    venue: "Hyderabad Classification Centre",
    status: "Scheduled",
  },
  {
    id: 2,
    athlete: "Vijay Reddy",
    classification: "Review Classification",
    date: "26 September 2026",
    time: "11:30 AM",
    venue: "Telangana Sports Complex",
    status: "Scheduled",
  },
  {
    id: 3,
    athlete: "Suresh Babu",
    classification: "Initial Classification",
    date: "29 September 2026",
    time: "09:30 AM",
    venue: "WABA Classification Centre",
    status: "Pending",
  },
];

/* =========================================================
   CLASSIFICATION COMPONENT
========================================================= */

export default function Classification() {
  return (
    <main className={styles.page}>

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>
            TECHNICAL OFFICIAL
          </span>

          <h1>
            <ClipboardCheck size={30} />
            Classification
          </h1>

          <p>
            Manage athlete classification, assessment sessions,
            and classification records.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <Activity size={17} />
          <span>Classification Management</span>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW CARDS
      ===================================================== */}

      <section className={styles.overviewGrid}>

        {/* PENDING ATHLETES */}

        <div className={styles.overviewCard}>
          <div className={styles.overviewIcon}>
            <Users size={21} />
          </div>

          <div>
            <strong>8</strong>
            <span>Pending Athletes</span>
          </div>

          <div className={styles.overviewStatus}>
            Requires Action
          </div>
        </div>

        {/* UPCOMING SESSIONS */}

        <div className={styles.overviewCard}>
          <div className={styles.overviewIcon}>
            <CalendarDays size={21} />
          </div>

          <div>
            <strong>5</strong>
            <span>Upcoming Sessions</span>
          </div>

          <div className={styles.overviewStatus}>
            Scheduled
          </div>
        </div>

        {/* COMPLETED */}

        <div className={styles.overviewCard}>
          <div className={styles.overviewIcon}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <strong>42</strong>
            <span>Completed Classifications</span>
          </div>

          <div className={styles.overviewStatus}>
            Completed
          </div>
        </div>

      </section>

      {/* =====================================================
          CLASSIFICATION MODULES
      ===================================================== */}

      <section className={styles.section}>

        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>
              CLASSIFICATION MANAGEMENT
            </span>

            <h2>Classification Overview</h2>

            <p>
              Select a classification section to continue.
            </p>
          </div>
        </div>

        <div className={styles.moduleGrid}>

          {classificationSections.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className={styles.moduleCard}
                key={item.title}
              >

                {/* MODULE TOP */}

                <div className={styles.moduleTop}>

                  <div className={styles.moduleIcon}>
                    <Icon size={23} />
                  </div>

                  {item.status === "Pending" && (
                    <span className={styles.pendingBadge}>
                      Pending
                    </span>
                  )}

                  {item.status === "Scheduled" && (
                    <span className={styles.scheduledBadge}>
                      Scheduled
                    </span>
                  )}

                  {item.status === "Completed" && (
                    <span className={styles.completedBadge}>
                      Completed
                    </span>
                  )}

                </div>

                {/* MODULE CONTENT */}

                <div className={styles.moduleContent}>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

                {/* MODULE FOOTER */}

                <div className={styles.moduleFooter}>

                  <div className={styles.countBox}>

                    <strong>{item.count}</strong>

                    <span>
                      {item.status === "Completed"
                        ? "Records"
                        : item.status === "Scheduled"
                        ? "Sessions"
                        : "Athletes"}
                    </span>

                  </div>

                  <Link
                    href={item.href}
                    className={styles.viewButton}
                  >
                    <span>View</span>
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* =====================================================
          QUICK INFORMATION
      ===================================================== */}

      <section className={styles.infoGrid}>

        {/* ===================================================
            CLASSIFICATION WORKFLOW
        =================================================== */}

        <div className={styles.infoCard}>

          <div className={styles.infoHeader}>

            <div className={styles.infoIcon}>
              <ClipboardCheck size={20} />
            </div>

            <div>
              <span>CLASSIFICATION WORKFLOW</span>
              <h3>Assessment Process</h3>
            </div>

          </div>

          <div className={styles.workflow}>

            {/* STEP 1 */}

            <div className={styles.workflowItem}>

              <div className={styles.workflowNumber}>
                1
              </div>

              <div>
                <strong>Pending Athlete</strong>

                <span>
                  Athlete is waiting for classification.
                </span>
              </div>

            </div>

            <div className={styles.workflowLine} />

            {/* STEP 2 */}

            <div className={styles.workflowItem}>

              <div className={styles.workflowNumber}>
                2
              </div>

              <div>
                <strong>Classification Session</strong>

                <span>
                  Assessment is scheduled and conducted.
                </span>
              </div>

            </div>

            <div className={styles.workflowLine} />

            {/* STEP 3 */}

            <div className={styles.workflowItem}>

              <div className={styles.workflowNumber}>
                3
              </div>

              <div>
                <strong>Classification Completed</strong>

                <span>
                  Classification result is recorded.
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* ===================================================
            CLASSIFICATION STATUS
        =================================================== */}

        <div className={styles.infoCard}>

          <div className={styles.infoHeader}>

            <div className={styles.infoIcon}>
              <FileCheck size={20} />
            </div>

            <div>
              <span>CLASSIFICATION STATUS</span>
              <h3>Current Overview</h3>
            </div>

          </div>

          <div className={styles.statusList}>

            {/* PENDING */}

            <div className={styles.statusItem}>

              <div className={styles.statusLeft}>

                <span
                  className={styles.statusDotOrange}
                />

                <span>
                  Pending Assessment
                </span>

              </div>

              <strong>8</strong>

            </div>

            {/* SCHEDULED */}

            <div className={styles.statusItem}>

              <div className={styles.statusLeft}>

                <span
                  className={styles.statusDotBlue}
                />

                <span>
                  Sessions Scheduled
                </span>

              </div>

              <strong>5</strong>

            </div>

            {/* COMPLETED */}

            <div className={styles.statusItem}>

              <div className={styles.statusLeft}>

                <span
                  className={styles.statusDotGreen}
                />

                <span>
                  Completed
                </span>

              </div>

              <strong>42</strong>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          UPCOMING CLASSIFICATION SESSIONS
      ===================================================== */}

      <section className={styles.section}>

        <div className={styles.sectionHeaderRow}>

          <div>

            <span className={styles.sectionLabel}>
              UPCOMING
            </span>

            <h2>
              Recent Classification Sessions
            </h2>

          </div>

          <Link
            href="/Technical/sessionPage"
            className={styles.allButton}
          >
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>

        </div>

        <div className={styles.sessionList}>

          {recentSessions.map((session) => (

            <div
              className={styles.sessionCard}
              key={session.id}
            >

              {/* SESSION ICON */}

              <div className={styles.sessionIcon}>
                <UserCheck size={21} />
              </div>

              {/* SESSION CONTENT */}

              <div className={styles.sessionMain}>

                <div className={styles.sessionTitle}>

                  <h3>
                    {session.athlete}
                  </h3>

                  {session.status === "Scheduled" && (
                    <span
                      className={styles.sessionScheduled}
                    >
                      Scheduled
                    </span>
                  )}

                  {session.status === "Pending" && (
                    <span
                      className={styles.sessionPending}
                    >
                      Pending
                    </span>
                  )}

                </div>

                <p>
                  {session.classification}
                </p>

                <div className={styles.sessionDetails}>

                  <span>
                    <CalendarDays size={14} />
                    {session.date}
                  </span>

                  <span>
                    <Clock3 size={14} />
                    {session.time}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {session.venue}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          FOOTER INFORMATION
      ===================================================== */}

      <div className={styles.bottomNotice}>

        <div className={styles.noticeIcon}>
          <CheckCircle2 size={18} />
        </div>

        <div>

          <strong>
            Classification records
          </strong>

          <p>
            Keep athlete classification assessments,
            sessions, and completed records updated for
            accurate competition participation.
          </p>

        </div>

      </div>

    </main>
  );
}