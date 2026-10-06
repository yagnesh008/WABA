"use client";

import { useState } from "react";
import {
  CheckCircle2,
  CalendarDays,
  MapPin,
  Users,
  Trophy,
  Eye,
  X,
  Swords,
} from "lucide-react";

import styles from "./Completed.module.css";

interface CompletedMatch {
  id: number;
  matchNo: string;
  competition: string;
  category: string;
  date: string;
  venue: string;
  athleteA: string;
  athleteB: string;
  scoreA: number;
  scoreB: number;
  role: string;
  winner: string;
}

const completedMatches: CompletedMatch[] = [
  {
    id: 1,
    matchNo: "M-042",
    competition: "WABA National Games 2025",
    category: "Men - 63.5 kg",
    date: "15 December 2025",
    venue: "Main Ring - New Delhi",
    athleteA: "Arjun Kumar",
    athleteB: "Vikram Singh",
    scoreA: 32,
    scoreB: 28,
    role: "Judge",
    winner: "Arjun Kumar",
  },
  {
    id: 2,
    matchNo: "M-043",
    competition: "WABA National Games 2025",
    category: "Women - 57 kg",
    date: "15 December 2025",
    venue: "Ring 2 - New Delhi",
    athleteA: "Anjali Rao",
    athleteB: "Sneha Patel",
    scoreA: 25,
    scoreB: 31,
    role: "Referee",
    winner: "Sneha Patel",
  },
  {
    id: 3,
    matchNo: "M-024",
    competition: "Hyderabad District Boxing Championship",
    category: "Men - 71 kg",
    date: "08 November 2025",
    venue: "Hyderabad Sports Complex",
    athleteA: "Ramesh Babu",
    athleteB: "Kiran Das",
    scoreA: 29,
    scoreB: 27,
    role: "Referee",
    winner: "Ramesh Babu",
  },
  {
    id: 4,
    matchNo: "M-018",
    competition: "Telangana State Adaptive Boxing Championship",
    category: "Men - 80 kg",
    date: "20 September 2025",
    venue: "Warangal Indoor Stadium",
    athleteA: "Suresh Kumar",
    athleteB: "Mahesh Rao",
    scoreA: 30,
    scoreB: 30,
    role: "Classifier",
    winner: "Draw",
  },
];

export default function Completed() {
  const [selectedMatch, setSelectedMatch] =
    useState<CompletedMatch | null>(null);

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <CheckCircle2 size={29} />
            Completed Matches
          </h1>

          <p>
            Review completed matches, results and your officiating records.
          </p>
        </div>

        <div className={styles.completedBadge}>
          <CheckCircle2 size={16} />
          {completedMatches.length} Completed
        </div>
      </div>

      {/* SUMMARY */}
      <section className={styles.summary}>
        <div className={styles.summaryCard}>
          <Trophy size={20} />
          <div>
            <strong>{completedMatches.length}</strong>
            <span>Matches Completed</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <Users size={20} />
          <div>
            <strong>{completedMatches.length * 2}</strong>
            <span>Athletes Participated</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <Swords size={20} />
          <div>
            <strong>100%</strong>
            <span>Records Submitted</span>
          </div>
        </div>
      </section>

      {/* MATCH LIST */}
      <section className={styles.list}>
        {completedMatches.map((match) => (
          <div className={styles.card} key={match.id}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.matchNo}>{match.matchNo}</span>

                <h2>{match.competition}</h2>

                <p>{match.category}</p>
              </div>

              <span className={styles.status}>
                <CheckCircle2 size={14} />
                Completed
              </span>
            </div>

            {/* SCORE */}
            <div className={styles.score}>
              <div>
                <span>{match.athleteA}</span>
                <strong>{match.scoreA}</strong>
              </div>

              <span className={styles.vs}>VS</span>

              <div>
                <strong>{match.scoreB}</strong>
                <span>{match.athleteB}</span>
              </div>
            </div>

            {/* DETAILS */}
            <div className={styles.details}>
              <div>
                <CalendarDays size={16} />
                {match.date}
              </div>

              <div>
                <MapPin size={16} />
                {match.venue}
              </div>

              <div>
                <Users size={16} />
                {match.role}
              </div>
            </div>

            <div className={styles.footer}>
              <div>
                <span className={styles.winnerLabel}>Winner</span>
                <strong>{match.winner}</strong>
              </div>

              <button
                className={styles.viewButton}
                onClick={() => setSelectedMatch(match)}
              >
                <Eye size={16} />
                View Result
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {selectedMatch && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button
              className={styles.close}
              onClick={() => setSelectedMatch(null)}
            >
              <X size={20} />
            </button>

            <span className={styles.modalLabel}>MATCH RESULT</span>

            <h2>{selectedMatch.competition}</h2>

            <div className={styles.resultScore}>
              <div>
                <span>{selectedMatch.athleteA}</span>
                <strong>{selectedMatch.scoreA}</strong>
              </div>

              <b>VS</b>

              <div>
                <strong>{selectedMatch.scoreB}</strong>
                <span>{selectedMatch.athleteB}</span>
              </div>
            </div>

            <div className={styles.resultDetails}>
              <p>
                <CalendarDays size={16} />
                {selectedMatch.date}
              </p>

              <p>
                <MapPin size={16} />
                {selectedMatch.venue}
              </p>

              <p>
                <Users size={16} />
                Role: {selectedMatch.role}
              </p>

              <p>
                <Trophy size={16} />
                Winner: {selectedMatch.winner}
              </p>
            </div>

            <div className={styles.completedMessage}>
              <CheckCircle2 size={18} />
              Match completed and result recorded successfully.
            </div>
          </div>
        </div>
      )}
    </main>
  );
}