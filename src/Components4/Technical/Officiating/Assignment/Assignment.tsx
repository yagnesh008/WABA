"use client";

import { useState } from "react";
import {
  ClipboardList,
  CalendarDays,
  MapPin,
  Trophy,
  CheckCircle2,
  Clock3,
  Eye,
  X,
} from "lucide-react";

import styles from "./Assignment.module.css";

interface Assignment {
  id: number;
  competition: string;
  code: string;
  date: string;
  time: string;
  venue: string;
  assignment: string;
  match: string;
  status: "Confirmed" | "Pending";
}

const assignments: Assignment[] = [
  {
    id: 1,
    competition: "WABA National Boxing Championship 2026",
    code: "WABA-NBC-2026",
    date: "18 October 2026",
    time: "09:00 AM",
    venue: "Hyderabad",
    assignment: "Referee",
    match: "Main Ring",
    status: "Confirmed",
  },
  {
    id: 2,
    competition: "South Zone Adaptive Boxing Championship",
    code: "WABA-SZ-2026",
    date: "05 November 2026",
    time: "10:00 AM",
    venue: "Bengaluru",
    assignment: "Judge",
    match: "Ring 2",
    status: "Confirmed",
  },
  {
    id: 3,
    competition: "Telangana Technical Boxing Meet",
    code: "WABA-TG-2026",
    date: "15 November 2026",
    time: "09:30 AM",
    venue: "Warangal",
    assignment: "Classifier",
    match: "Classification Area",
    status: "Pending",
  },
  {
    id: 4,
    competition: "Andhra Pradesh Adaptive Boxing Championship",
    code: "WABA-AP-2026",
    date: "12 December 2026",
    time: "10:00 AM",
    venue: "Visakhapatnam",
    assignment: "Referee",
    match: "Ring 1",
    status: "Pending",
  },
];

export default function Assignment() {
  const [selected, setSelected] = useState<Assignment | null>(null);

  return (
    <main className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <ClipboardList size={29} />
            Assignments
          </h1>

          <p>
            View all competitions and matches assigned to you.
          </p>
        </div>

        <div className={styles.totalBadge}>
          {assignments.length} Assignments
        </div>
      </div>

      {/* SUMMARY */}
      <section className={styles.summary}>
        <div>
          <strong>{assignments.length}</strong>
          <span>Total Assignments</span>
        </div>

        <div>
          <strong>
            {assignments.filter((item) => item.status === "Confirmed").length}
          </strong>
          <span>Confirmed</span>
        </div>

        <div>
          <strong>
            {assignments.filter((item) => item.status === "Pending").length}
          </strong>
          <span>Pending</span>
        </div>
      </section>

      {/* ASSIGNMENTS */}
      <section className={styles.list}>
        {assignments.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.code}>{item.code}</span>

                <h2>{item.competition}</h2>

                <p>{item.assignment} • {item.match}</p>
              </div>

              <span
                className={
                  item.status === "Confirmed"
                    ? styles.confirmed
                    : styles.pending
                }
              >
                {item.status === "Confirmed" ? (
                  <CheckCircle2 size={14} />
                ) : (
                  <Clock3 size={14} />
                )}

                {item.status}
              </span>
            </div>

            <div className={styles.details}>
              <div>
                <CalendarDays size={16} />
                {item.date}
              </div>

              <div>
                <Clock3 size={16} />
                {item.time}
              </div>

              <div>
                <MapPin size={16} />
                {item.venue}
              </div>

              <div>
                <Trophy size={16} />
                {item.assignment}
              </div>
            </div>

            <div className={styles.footer}>
              <span>{item.match}</span>

              <button
                className={styles.viewButton}
                onClick={() => setSelected(item)}
              >
                <Eye size={16} />
                View Assignment
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {selected && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button
              className={styles.close}
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>

            <span className={styles.modalLabel}>ASSIGNMENT DETAILS</span>

            <h2>{selected.competition}</h2>

            <p className={styles.modalCode}>{selected.code}</p>

            <div className={styles.modalGrid}>
              <div>
                <CalendarDays size={17} />
                {selected.date}
              </div>

              <div>
                <Clock3 size={17} />
                {selected.time}
              </div>

              <div>
                <MapPin size={17} />
                {selected.venue}
              </div>

              <div>
                <Trophy size={17} />
                {selected.assignment}
              </div>
            </div>

            <div className={styles.assignmentBox}>
              <span>Assigned Area</span>
              <strong>{selected.match}</strong>
            </div>

            <div className={styles.statusBox}>
              Status: <strong>{selected.status}</strong>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}