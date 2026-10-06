"use client";

import { useState } from "react";
import {
  Trophy,
  CalendarDays,
  MapPin,
  Users,
  Clock3,
  ClipboardCheck,
  Eye,
  X,
} from "lucide-react";
import styles from "./Assigned.module.css";

interface AssignedCompetition {
  id: number;
  name: string;
  code: string;
  date: string;
  time: string;
  location: string;
  athletes: number;
  role: string;
  assignment: string;
  description: string;
}

const assignedCompetitions: AssignedCompetition[] = [
  {
    id: 1,
    name: "WABA National Boxing Championship 2026",
    code: "WABA-NBC-2026",
    date: "18 October 2026",
    time: "09:00 AM",
    location: "Hyderabad, Telangana",
    athletes: 96,
    role: "Referee",
    assignment: "Main Ring",
    description:
      "National-level wheelchair adaptive boxing championship featuring athletes from different states.",
  },
  {
    id: 2,
    name: "South Zone Adaptive Boxing Championship",
    code: "WABA-SZ-2026",
    date: "05 November 2026",
    time: "10:00 AM",
    location: "Bengaluru, Karnataka",
    athletes: 72,
    role: "Judge",
    assignment: "Ring 2",
    description:
      "Regional adaptive boxing competition for athletes from South Zone states.",
  },
  {
    id: 3,
    name: "Telangana Technical Boxing Meet",
    code: "WABA-TG-2026",
    date: "15 November 2026",
    time: "09:30 AM",
    location: "Warangal, Telangana",
    athletes: 54,
    role: "Classifier",
    assignment: "Classification Area",
    description:
      "State-level adaptive boxing event with athlete classification and technical activities.",
  },
];

export default function Assigned() {
  const [selected, setSelected] =
    useState<AssignedCompetition | null>(null);

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.pageLabel}>
            TECHNICAL OFFICIAL
          </span>

          <h1>Assigned Competitions</h1>

          <p>
            View competitions assigned to you and manage your official
            responsibilities.
          </p>
        </div>

        <div className={styles.totalBadge}>
          <ClipboardCheck size={17} />
          {assignedCompetitions.length} Assigned
        </div>
      </div>

      {/* SUMMARY */}
      <div className={styles.summaryCard}>
        <div className={styles.summaryIcon}>
          <Trophy size={25} />
        </div>

        <div>
          <span>Total Assigned Competitions</span>
          <strong>{assignedCompetitions.length}</strong>
          <p>Competitions requiring your participation</p>
        </div>
      </div>

      {/* COMPETITIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>My Assignments</h2>
            <p>Competitions currently assigned to you.</p>
          </div>
        </div>

        <div className={styles.grid}>
          {assignedCompetitions.map((competition) => (
            <div className={styles.card} key={competition.id}>
              {/* TOP */}
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <Trophy size={23} />
                </div>

                <span className={styles.assignedBadge}>
                  <ClipboardCheck size={13} />
                  Assigned
                </span>
              </div>

              {/* CONTENT */}
              <div className={styles.content}>
                <span className={styles.code}>
                  {competition.code}
                </span>

                <h3>{competition.name}</h3>

                <p>{competition.description}</p>
              </div>

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

              {/* ROLE */}
              <div className={styles.role}>
                <span>Your Role</span>
                <strong>{competition.role}</strong>
              </div>

              <div className={styles.assignment}>
                <span>Assignment</span>
                <strong>{competition.assignment}</strong>
              </div>

              {/* BUTTON */}
              <button
                className={styles.viewButton}
                onClick={() => setSelected(competition)}
              >
                <Eye size={17} />
                View Assignment
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
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <span>{selected.code}</span>
                <h2>{selected.name}</h2>
              </div>

              <button
                className={styles.close}
                onClick={() => setSelected(null)}
              >
                <X size={19} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalStatus}>
                <ClipboardCheck size={16} />
                Assigned to You
              </div>

              <p className={styles.modalDescription}>
                {selected.description}
              </p>

              <div className={styles.modalGrid}>
                <div>
                  <span>Date</span>
                  <strong>{selected.date}</strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>{selected.time}</strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>{selected.location}</strong>
                </div>

                <div>
                  <span>Athletes</span>
                  <strong>{selected.athletes}</strong>
                </div>

                <div>
                  <span>Your Role</span>
                  <strong>{selected.role}</strong>
                </div>

                <div>
                  <span>Assignment</span>
                  <strong>{selected.assignment}</strong>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.closeButton}
                onClick={() => setSelected(null)}
              >
                Close
              </button>

              <button className={styles.confirmButton}>
                <ClipboardCheck size={16} />
                Confirm Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}