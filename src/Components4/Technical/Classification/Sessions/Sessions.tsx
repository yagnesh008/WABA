"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Eye,
  X,
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import styles from "./Sessions.module.css";

interface Session {
  id: number;
  sessionId: string;
  athlete: string;
  athleteId: string;
  classification: string;
  date: string;
  time: string;
  venue: string;
  classifier: string;
  status: "Scheduled" | "Pending" | "Completed";
}

const sessions: Session[] = [
  {
    id: 1,
    sessionId: "CLS-001",
    athlete: "Rahul Kumar",
    athleteId: "ATH001",
    classification: "Initial Classification",
    date: "24 September 2026",
    time: "10:00 AM",
    venue: "Hyderabad Classification Centre",
    classifier: "Technical Official",
    status: "Scheduled",
  },
  {
    id: 2,
    sessionId: "CLS-002",
    athlete: "Vijay Reddy",
    athleteId: "ATH002",
    classification: "Review Classification",
    date: "26 September 2026",
    time: "11:30 AM",
    venue: "Telangana Sports Complex",
    classifier: "Technical Official",
    status: "Scheduled",
  },
  {
    id: 3,
    sessionId: "CLS-003",
    athlete: "Suresh Babu",
    athleteId: "ATH003",
    classification: "Initial Classification",
    date: "29 September 2026",
    time: "09:30 AM",
    venue: "WABA Classification Centre",
    classifier: "Technical Official",
    status: "Pending",
  },
  {
    id: 4,
    sessionId: "CLS-004",
    athlete: "Kiran Reddy",
    athleteId: "ATH004",
    classification: "Initial Classification",
    date: "02 October 2026",
    time: "10:30 AM",
    venue: "Hyderabad Classification Centre",
    classifier: "Technical Official",
    status: "Scheduled",
  },
  {
    id: 5,
    sessionId: "CLS-005",
    athlete: "Mahesh Rao",
    athleteId: "ATH006",
    classification: "Review Classification",
    date: "06 October 2026",
    time: "11:00 AM",
    venue: "Telangana Sports Complex",
    classifier: "Technical Official",
    status: "Scheduled",
  },
];

export default function Sessions() {
  const [selected, setSelected] = useState<Session | null>(null);

  const scheduled = sessions.filter(
    (item) => item.status === "Scheduled"
  ).length;

  const pending = sessions.filter(
    (item) => item.status === "Pending"
  ).length;

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <section className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>CLASSIFICATION</span>

          <h1>
            <CalendarDays size={30} />
            Classification Sessions
          </h1>

          <p>
            View and manage scheduled athlete classification
            assessment sessions.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <CalendarDays size={17} />
          {scheduled} Scheduled
        </div>
      </section>

      {/* SUMMARY */}
      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <CalendarDays size={21} />
          </div>

          <div>
            <strong>{sessions.length}</strong>
            <span>Total Sessions</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <strong>{scheduled}</strong>
            <span>Scheduled</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Clock3 size={21} />
          </div>

          <div>
            <strong>{pending}</strong>
            <span>Pending</span>
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <div className={styles.notice}>
        <AlertCircle size={19} />

        <div>
          <strong>Upcoming classification sessions</strong>
          <p>
            Verify the athlete, date, venue, and classification type
            before conducting the assessment.
          </p>
        </div>
      </div>

      {/* SESSION LIST */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>
              SCHEDULED ASSESSMENTS
            </span>

            <h2>Classification Sessions</h2>

            <p>
              Upcoming sessions assigned to the technical official.
            </p>
          </div>
        </div>

        <div className={styles.sessionList}>
          {sessions.map((session) => (
            <div className={styles.card} key={session.id}>
              <div className={styles.dateBox}>
                <CalendarDays size={20} />
                <strong>
                  {session.date.split(" ")[0]}
                </strong>
                <span>
                  {session.date.split(" ")[1]}
                </span>
              </div>

              <div className={styles.sessionInfo}>
                <div className={styles.titleRow}>
                  <div>
                    <span className={styles.sessionId}>
                      {session.sessionId}
                    </span>

                    <h3>{session.athlete}</h3>
                  </div>

                  <span
                    className={
                      session.status === "Scheduled"
                        ? styles.scheduled
                        : session.status === "Pending"
                        ? styles.pending
                        : styles.completed
                    }
                  >
                    {session.status}
                  </span>
                </div>

                <p>{session.classification}</p>

                <div className={styles.details}>
                  <span>
                    <Users size={14} />
                    {session.athleteId}
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

              <button
                className={styles.viewButton}
                onClick={() => setSelected(session)}
              >
                <Eye size={16} />
                View Session
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className={styles.overlay}
          onClick={() => setSelected(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.close}
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>

            <span className={styles.modalLabel}>
              CLASSIFICATION SESSION
            </span>

            <h2>{selected.athlete}</h2>

            <p className={styles.modalId}>
              {selected.sessionId} • {selected.athleteId}
            </p>

            <div className={styles.modalStatus}>
              <CheckCircle2 size={16} />
              {selected.status}
            </div>

            <div className={styles.modalGrid}>
              <div>
                <span>Classification</span>
                <strong>{selected.classification}</strong>
              </div>

              <div>
                <span>Date</span>
                <strong>{selected.date}</strong>
              </div>

              <div>
                <span>Time</span>
                <strong>{selected.time}</strong>
              </div>

              <div>
                <span>Venue</span>
                <strong>{selected.venue}</strong>
              </div>

              <div>
                <span>Classifier</span>
                <strong>{selected.classifier}</strong>
              </div>

              <div>
                <span>Athlete ID</span>
                <strong>{selected.athleteId}</strong>
              </div>
            </div>

            <div className={styles.modalActions}>
              <button className={styles.secondaryButton}>
                Reschedule
              </button>

              <button className={styles.primaryButton}>
                <ClipboardCheck size={16} />
                Start Session
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}