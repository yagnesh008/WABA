"use client";

import { useState } from "react";
import {
  Scale,
  CalendarDays,
  MapPin,
  Clock3,
  Users,
  Eye,
  X,
  CheckCircle2,
  FileText,
} from "lucide-react";

import styles from "./Judging.module.css";

interface JudgingMatch {
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
  scoreA: number;
  scoreB: number;
  status: "Pending Scorecard" | "Submitted";
}

const judgingMatches: JudgingMatch[] = [
  {
    id: 1,
    matchNo: "J-201",
    competition: "WABA National Boxing Championship 2026",
    category: "Men - 71 kg",
    round: "Quarter Final",
    date: "18 October 2026",
    time: "10:15 AM",
    venue: "Main Ring - Hyderabad",
    athleteA: "Vijay Reddy",
    athleteB: "Kiran Das",
    scoreA: 0,
    scoreB: 0,
    status: "Pending Scorecard",
  },
  {
    id: 2,
    matchNo: "J-202",
    competition: "South Zone Adaptive Boxing Championship",
    category: "Women - 57 kg",
    round: "Semi Final",
    date: "05 November 2026",
    time: "11:00 AM",
    venue: "Ring 2 - Bengaluru",
    athleteA: "Anjali Rao",
    athleteB: "Sneha Patel",
    scoreA: 0,
    scoreB: 0,
    status: "Pending Scorecard",
  },
  {
    id: 3,
    matchNo: "J-145",
    competition: "WABA National Games 2025",
    category: "Men - 63.5 kg",
    round: "Final",
    date: "15 December 2025",
    time: "04:30 PM",
    venue: "Main Ring - New Delhi",
    athleteA: "Arjun Kumar",
    athleteB: "Vikram Singh",
    scoreA: 32,
    scoreB: 28,
    status: "Submitted",
  },
];

export default function Judging() {
  const [selected, setSelected] = useState<JudgingMatch | null>(null);

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <Scale size={29} />
            Judging
          </h1>

          <p>
            Manage judging assignments, scorecards and match scoring records.
          </p>
        </div>

        <div className={styles.judgeBadge}>
          <Scale size={16} />
          Judge
        </div>
      </div>

      {/* STATS */}
      <section className={styles.stats}>
        <div>
          <strong>
            {
              judgingMatches.filter(
                (m) => m.status === "Pending Scorecard"
              ).length
            }
          </strong>
          <span>Pending Scorecards</span>
        </div>

        <div>
          <strong>
            {judgingMatches.filter((m) => m.status === "Submitted").length}
          </strong>
          <span>Submitted</span>
        </div>

        <div>
          <strong>{judgingMatches.length}</strong>
          <span>Total Judging Matches</span>
        </div>
      </section>

      {/* MATCH LIST */}
      <section className={styles.list}>
        {judgingMatches.map((match) => (
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
                  match.status === "Submitted"
                    ? styles.submitted
                    : styles.pending
                }
              >
                {match.status === "Submitted" ? (
                  <CheckCircle2 size={14} />
                ) : (
                  <FileText size={14} />
                )}

                {match.status}
              </span>
            </div>

            {/* ATHLETES */}
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

            {/* SCORE */}
            {match.status === "Submitted" && (
              <div className={styles.score}>
                <div>
                  <span>{match.athleteA}</span>
                  <strong>{match.scoreA}</strong>
                </div>

                <span>VS</span>

                <div>
                  <strong>{match.scoreB}</strong>
                  <span>{match.athleteB}</span>
                </div>
              </div>
            )}

            {/* DETAILS */}
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
                <Scale size={16} />
                Judge
              </div>
            </div>

            <div className={styles.footer}>
              <span>
                {match.status === "Submitted"
                  ? "Scorecard Submitted"
                  : "Scorecard Required"}
              </span>

              <button
                className={styles.viewButton}
                onClick={() => setSelected(match)}
              >
                <Eye size={16} />
                View Details
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

            <span className={styles.modalLabel}>JUDGING DETAILS</span>

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
                <Scale size={16} />
                Role: Judge
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

            <div className={styles.scorecardStatus}>
              {selected.status === "Submitted" ? (
                <>
                  <CheckCircle2 size={18} />
                  Scorecard submitted successfully.
                </>
              ) : (
                <>
                  <FileText size={18} />
                  Scorecard is pending.
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}