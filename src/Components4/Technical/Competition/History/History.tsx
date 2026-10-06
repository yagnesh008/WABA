"use client";

import { useState } from "react";
import {
  Trophy,
  CalendarDays,
  MapPin,
  Users,
  Clock3,
  CheckCircle2,
  Eye,
  X,
  Award,
} from "lucide-react";
import styles from "./History.module.css";

interface CompetitionHistory {
  id: number;
  name: string;
  code: string;
  date: string;
  time: string;
  location: string;
  athletes: number;
  role: string;
  matches: number;
  result: string;
  description: string;
}

const competitionHistory: CompetitionHistory[] = [
  {
    id: 1,
    name: "WABA National Games 2025",
    code: "WABA-NG-2025",
    date: "15 December 2025",
    time: "09:00 AM",
    location: "New Delhi",
    athletes: 110,
    role: "Judge",
    matches: 42,
    result: "Completed Successfully",
    description:
      "National adaptive boxing competition conducted with athletes from multiple states.",
  },
  {
    id: 2,
    name: "Hyderabad District Boxing Championship",
    code: "WABA-HYD-2025",
    date: "08 November 2025",
    time: "10:00 AM",
    location: "Hyderabad, Telangana",
    athletes: 48,
    role: "Referee",
    matches: 24,
    result: "Completed Successfully",
    description:
      "District-level adaptive boxing championship conducted in Hyderabad.",
  },
  {
    id: 3,
    name: "Telangana State Adaptive Boxing Championship",
    code: "WABA-TS-2025",
    date: "20 September 2025",
    time: "09:30 AM",
    location: "Warangal, Telangana",
    athletes: 62,
    role: "Classifier",
    matches: 28,
    result: "Completed Successfully",
    description:
      "State-level adaptive boxing championship including athlete classification sessions.",
  },
  {
    id: 4,
    name: "South Zone Adaptive Boxing Cup",
    code: "WABA-SZ-2025",
    date: "18 August 2025",
    time: "09:00 AM",
    location: "Bengaluru, Karnataka",
    athletes: 76,
    role: "Judge",
    matches: 35,
    result: "Completed Successfully",
    description:
      "Regional adaptive boxing event involving athletes from South Indian states.",
  },
];

export default function History() {
  const [selected, setSelected] =
    useState<CompetitionHistory | null>(null);

  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.pageLabel}>
            TECHNICAL OFFICIAL
          </span>

          <h1>Competition History</h1>

          <p>
            View your completed WABA competitions and previous technical
            assignments.
          </p>
        </div>

        <div className={styles.historyBadge}>
          <CheckCircle2 size={17} />
          {competitionHistory.length} Completed
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Trophy size={21} />
          </div>

          <div>
            <span>Competitions</span>
            <strong>{competitionHistory.length}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Athletes</span>
            <strong>
              {competitionHistory.reduce(
                (total, item) => total + item.athletes,
                0
              )}
            </strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <Award size={21} />
          </div>

          <div>
            <span>Matches</span>
            <strong>
              {competitionHistory.reduce(
                (total, item) => total + item.matches,
                0
              )}
            </strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Status</span>
            <strong>Completed</strong>
          </div>
        </div>
      </section>

      {/* HISTORY LIST */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Completed Competitions</h2>
            <p>
              Your previous competition assignments and participation
              history.
            </p>
          </div>
        </div>

        <div className={styles.historyList}>
          {competitionHistory.map((competition) => (
            <div className={styles.historyCard} key={competition.id}>
              {/* ICON */}
              <div className={styles.competitionIcon}>
                <Trophy size={24} />
              </div>

              {/* MAIN CONTENT */}
              <div className={styles.mainContent}>
                <div className={styles.titleRow}>
                  <div>
                    <span className={styles.code}>
                      {competition.code}
                    </span>

                    <h3>{competition.name}</h3>
                  </div>

                  <span className={styles.completedBadge}>
                    <CheckCircle2 size={13} />
                    Completed
                  </span>
                </div>

                <p className={styles.description}>
                  {competition.description}
                </p>

                {/* DETAILS */}
                <div className={styles.details}>
                  <div className={styles.detail}>
                    <CalendarDays size={16} />

                    <div>
                      <span>Date</span>
                      <strong>{competition.date}</strong>
                    </div>
                  </div>

                  <div className={styles.detail}>
                    <Clock3 size={16} />

                    <div>
                      <span>Time</span>
                      <strong>{competition.time}</strong>
                    </div>
                  </div>

                  <div className={styles.detail}>
                    <MapPin size={16} />

                    <div>
                      <span>Location</span>
                      <strong>{competition.location}</strong>
                    </div>
                  </div>

                  <div className={styles.detail}>
                    <Users size={16} />

                    <div>
                      <span>Athletes</span>
                      <strong>{competition.athletes}</strong>
                    </div>
                  </div>
                </div>

                {/* FOOTER */}
                <div className={styles.cardFooter}>
                  <div className={styles.role}>
                    <span>Your Role</span>
                    <strong>{competition.role}</strong>
                  </div>

                  <div className={styles.matches}>
                    <span>Matches</span>
                    <strong>{competition.matches}</strong>
                  </div>

                  <button
                    className={styles.viewButton}
                    onClick={() => setSelected(competition)}
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                </div>
              </div>
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
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>
                <div className={styles.modalIcon}>
                  <Trophy size={23} />
                </div>

                <div>
                  <span>{selected.code}</span>
                  <h2>{selected.name}</h2>
                </div>
              </div>

              <button
                className={styles.closeButton}
                onClick={() => setSelected(null)}
              >
                <X size={19} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalStatus}>
                <CheckCircle2 size={16} />
                Competition Completed
              </div>

              <p className={styles.modalDescription}>
                {selected.description}
              </p>

              <div className={styles.modalGrid}>
                <div>
                  <CalendarDays size={17} />
                  <section>
                    <span>Date</span>
                    <strong>{selected.date}</strong>
                  </section>
                </div>

                <div>
                  <Clock3 size={17} />
                  <section>
                    <span>Time</span>
                    <strong>{selected.time}</strong>
                  </section>
                </div>

                <div>
                  <MapPin size={17} />
                  <section>
                    <span>Location</span>
                    <strong>{selected.location}</strong>
                  </section>
                </div>

                <div>
                  <Users size={17} />
                  <section>
                    <span>Athletes</span>
                    <strong>{selected.athletes}</strong>
                  </section>
                </div>

                <div>
                  <Award size={17} />
                  <section>
                    <span>Matches</span>
                    <strong>{selected.matches}</strong>
                  </section>
                </div>

                <div>
                  <Trophy size={17} />
                  <section>
                    <span>Your Role</span>
                    <strong>{selected.role}</strong>
                  </section>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.closeModal}
                onClick={() => setSelected(null)}
              >
                Close
              </button>

              <button className={styles.certificateButton}>
                <Award size={16} />
                View Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}