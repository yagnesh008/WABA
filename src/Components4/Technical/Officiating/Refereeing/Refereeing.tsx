"use client";

import { useState } from "react";
import {
  ShieldCheck,
  CalendarDays,
  MapPin,
  Clock3,
  Users,
  Eye,
  X,
  CheckCircle2,
} from "lucide-react";

import styles from "./Refereeing.module.css";

interface RefereeMatch {
  id: number;
  matchNo: string;
  competition: string;
  category: string;
  round: string;
  date: string;
  time: string;
  venue: string;
  athleteA: string;
  athleteB: string;
  status: "Assigned" | "Completed";
}

const refereeMatches: RefereeMatch[] = [
  {
    id: 1,
    matchNo: "R-101",
    competition: "WABA National Boxing Championship 2026",
    category: "Men - 63.5 kg",
    round: "Quarter Final",
    date: "18 October 2026",
    time: "09:30 AM",
    venue: "Main Ring - Hyderabad",
    athleteA: "Arjun Kumar",
    athleteB: "Vikram Singh",
    status: "Assigned",
  },
  {
    id: 2,
    matchNo: "R-102",
    competition: "WABA National Boxing Championship 2026",
    category: "Men - 71 kg",
    round: "Semi Final",
    date: "18 October 2026",
    time: "11:00 AM",
    venue: "Main Ring - Hyderabad",
    athleteA: "Vijay Reddy",
    athleteB: "Kiran Das",
    status: "Assigned",
  },
  {
    id: 3,
    matchNo: "R-067",
    competition: "Hyderabad District Boxing Championship",
    category: "Men - 80 kg",
    round: "Final",
    date: "08 November 2025",
    time: "04:00 PM",
    venue: "Hyderabad Sports Complex",
    athleteA: "Ramesh Babu",
    athleteB: "Suresh Kumar",
    status: "Completed",
  },
];

export default function Refereeing() {
  const [selected, setSelected] = useState<RefereeMatch | null>(null);

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <ShieldCheck size={29} />
            Refereeing
          </h1>

          <p>
            Manage your referee assignments and match responsibilities.
          </p>
        </div>

        <div className={styles.refereeBadge}>
          <ShieldCheck size={16} />
          Referee
        </div>
      </div>

      {/* STATS */}
      <section className={styles.stats}>
        <div>
          <strong>
            {refereeMatches.filter((m) => m.status === "Assigned").length}
          </strong>
          <span>Assigned</span>
        </div>

        <div>
          <strong>
            {refereeMatches.filter((m) => m.status === "Completed").length}
          </strong>
          <span>Completed</span>
        </div>

        <div>
          <strong>{refereeMatches.length}</strong>
          <span>Total Matches</span>
        </div>
      </section>

      {/* MATCH LIST */}
      <section className={styles.list}>
        {refereeMatches.map((match) => (
          <div className={styles.card} key={match.id}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.matchNo}>{match.matchNo}</span>

                <h2>{match.competition}</h2>

                <p>
                  {match.category} • {match.round}
                </p>
              </div>

              <span
                className={
                  match.status === "Assigned"
                    ? styles.assigned
                    : styles.completed
                }
              >
                {match.status === "Assigned" ? (
                  <ShieldCheck size={14} />
                ) : (
                  <CheckCircle2 size={14} />
                )}

                {match.status}
              </span>
            </div>

            <div className={styles.athletes}>
              <div>
                <span>Athlete A</span>
                <strong>{match.athleteA}</strong>
              </div>

              <b>VS</b>

              <div>
                <span>Athlete B</span>
                <strong>{match.athleteB}</strong>
              </div>
            </div>

            <div className={styles.details}>
              <div>
                <CalendarDays size={16} />
                {match.date}
              </div>

              <div>
                <Clock3 size={16} />
                {match.time}
              </div>

              <div>
                <MapPin size={16} />
                {match.venue}
              </div>

              <div>
                <ShieldCheck size={16} />
                Referee
              </div>
            </div>

            <div className={styles.footer}>
              <span>{match.round}</span>

              <button
                className={styles.viewButton}
                onClick={() => setSelected(match)}
              >
                <Eye size={16} />
                View Match
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

            <span className={styles.modalLabel}>REFEREE ASSIGNMENT</span>

            <h2>{selected.competition}</h2>

            <div className={styles.matchInfo}>
              <span>{selected.matchNo}</span>
              <strong>{selected.category}</strong>
            </div>

            <div className={styles.modalDetails}>
              <p>
                <CalendarDays size={16} />
                {selected.date}
              </p>

              <p>
                <Clock3 size={16} />
                {selected.time}
              </p>

              <p>
                <MapPin size={16} />
                {selected.venue}
              </p>

              <p>
                <ShieldCheck size={16} />
                Role: Referee
              </p>
            </div>

            <div className={styles.athleteBox}>
              <div>
                <span>Athlete A</span>
                <strong>{selected.athleteA}</strong>
              </div>

              <b>VS</b>

              <div>
                <span>Athlete B</span>
                <strong>{selected.athleteB}</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}