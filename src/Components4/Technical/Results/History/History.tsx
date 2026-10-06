"use client";

import { useState } from "react";
import {
  History as HistoryIcon,
  CalendarDays,
  Clock3,
  MapPin,
  Trophy,
  CheckCircle2,
  Eye,
  X,
  Award,
  User,
  FileCheck,
} from "lucide-react";

import styles from "./History.module.css";

interface ResultHistoryItem {
  id: number;
  competition: string;
  code: string;
  date: string;
  time: string;
  venue: string;
  ring: string;
  athlete1: string;
  athlete2: string;
  score1: string;
  score2: string;
  winner: string;
  category: string;
  round: string;
  resultType: string;
  official: string;
}

const resultHistory: ResultHistoryItem[] = [
  {
    id: 1,
    competition: "WABA National Games 2025",
    code: "WABA-NG-2025",
    date: "15 December 2025",
    time: "09:00 AM",
    venue: "New Delhi",
    ring: "Main Ring",
    athlete1: "Amit Kumar",
    athlete2: "Rohit Singh",
    score1: "28",
    score2: "24",
    winner: "Amit Kumar",
    category: "Men - Lightweight",
    round: "Final",
    resultType: "Points Decision",
    official: "Technical Official",
  },
  {
    id: 2,
    competition: "Hyderabad District Boxing Championship",
    code: "WABA-HYD-2025",
    date: "08 November 2025",
    time: "10:00 AM",
    venue: "Hyderabad, Telangana",
    ring: "Ring 1",
    athlete1: "Sandeep Kumar",
    athlete2: "Manoj Reddy",
    score1: "31",
    score2: "27",
    winner: "Sandeep Kumar",
    category: "Men - Welterweight",
    round: "Semi Final",
    resultType: "Unanimous Decision",
    official: "Technical Official",
  },
  {
    id: 3,
    competition: "Telangana State Adaptive Boxing Championship",
    code: "WABA-TS-2025",
    date: "20 September 2025",
    time: "09:30 AM",
    venue: "Warangal, Telangana",
    ring: "Ring 2",
    athlete1: "Kiran Reddy",
    athlete2: "Mahesh Kumar",
    score1: "25",
    score2: "29",
    winner: "Mahesh Kumar",
    category: "Men - Middleweight",
    round: "Final",
    resultType: "Split Decision",
    official: "Technical Official",
  },
  {
    id: 4,
    competition: "South Zone Adaptive Boxing Cup",
    code: "WABA-SZ-2025",
    date: "18 August 2025",
    time: "09:00 AM",
    venue: "Bengaluru, Karnataka",
    ring: "Ring 1",
    athlete1: "Vijay Kumar",
    athlete2: "Arun Babu",
    score1: "30",
    score2: "26",
    winner: "Vijay Kumar",
    category: "Men - Lightweight",
    round: "Quarter Final",
    resultType: "Points Decision",
    official: "Technical Official",
  },
  {
    id: 5,
    competition: "Andhra Pradesh Adaptive Boxing Championship",
    code: "WABA-AP-2025",
    date: "12 July 2025",
    time: "10:00 AM",
    venue: "Visakhapatnam",
    ring: "Main Ring",
    athlete1: "Ravi Teja",
    athlete2: "Naveen Kumar",
    score1: "27",
    score2: "23",
    winner: "Ravi Teja",
    category: "Men - Featherweight",
    round: "Semi Final",
    resultType: "Technical Decision",
    official: "Technical Official",
  },
];

export default function History() {
  const [selected, setSelected] =
    useState<ResultHistoryItem | null>(null);

  const totalMatches = resultHistory.length;

  const totalAthletes = resultHistory.length * 2;

  const pointsDecisions = resultHistory.filter(
    (item) => item.resultType === "Points Decision"
  ).length;

  return (
    <main className={styles.page}>

      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <section className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>
            TECHNICAL OFFICIAL
          </span>

          <h1>
            <HistoryIcon size={30} />
            Result History
          </h1>

          <p>
            View previously entered and completed match
            results.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <CheckCircle2 size={17} />
          {totalMatches} Completed
        </div>
      </section>

      {/* =========================================
          SUMMARY
      ========================================= */}

      <section className={styles.summaryGrid}>

        {/* COMPLETED MATCHES */}

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Trophy size={21} />
          </div>

          <div>
            <strong>{totalMatches}</strong>
            <span>Completed Matches</span>
          </div>
        </div>

        {/* ATHLETES */}

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <User size={21} />
          </div>

          <div>
            <strong>{totalAthletes}</strong>
            <span>Athletes</span>
          </div>
        </div>

        {/* POINTS DECISIONS */}

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <FileCheck size={21} />
          </div>

          <div>
            <strong>{pointsDecisions}</strong>
            <span>Points Decisions</span>
          </div>
        </div>

      </section>

      {/* =========================================
          HISTORY SECTION
      ========================================= */}

      <section className={styles.section}>

        <div className={styles.sectionHeader}>

          <div>
            <span className={styles.sectionLabel}>
              RESULT MANAGEMENT
            </span>

            <h2>Completed Results</h2>
          </div>

          <span className={styles.resultCount}>
            {totalMatches} Results
          </span>

        </div>

        {/* =========================================
            RESULT LIST
        ========================================= */}

        <div className={styles.resultList}>

          {resultHistory.map((item) => (

            <div
              className={styles.resultCard}
              key={item.id}
            >

              {/* CARD TOP */}

              <div className={styles.cardTop}>

                <div>

                  <span className={styles.code}>
                    {item.code}
                  </span>

                  <h3>{item.competition}</h3>

                  <p>
                    {item.category} • {item.round}
                  </p>

                </div>

                <span className={styles.completedBadge}>
                  <CheckCircle2 size={13} />
                  Completed
                </span>

              </div>

              {/* =====================================
                  MATCH INFORMATION
              ===================================== */}

              <div className={styles.details}>

                <div>
                  <CalendarDays size={16} />
                  <span>{item.date}</span>
                </div>

                <div>
                  <Clock3 size={16} />
                  <span>{item.time}</span>
                </div>

                <div>
                  <MapPin size={16} />
                  <span>{item.venue}</span>
                </div>

                <div>
                  <Trophy size={16} />
                  <span>{item.ring}</span>
                </div>

              </div>

              {/* =====================================
                  MATCH RESULT
              ===================================== */}

              <div className={styles.matchResult}>

                {/* RED CORNER */}

                <div className={styles.athleteResult}>

                  <span className={styles.cornerLabel}>
                    RED CORNER
                  </span>

                  <strong>
                    {item.athlete1}
                  </strong>

                  <span className={styles.score}>
                    {item.score1}
                  </span>

                </div>

                {/* VS */}

                <div className={styles.resultVs}>
                  VS
                </div>

                {/* BLUE CORNER */}

                <div className={styles.athleteResult}>

                  <span className={styles.cornerLabel}>
                    BLUE CORNER
                  </span>

                  <strong>
                    {item.athlete2}
                  </strong>

                  <span className={styles.score}>
                    {item.score2}
                  </span>

                </div>

              </div>

              {/* =====================================
                  WINNER
              ===================================== */}

              <div className={styles.winnerRow}>

                <div>

                  <span>Winner</span>

                  <strong>
                    <Award size={15} />
                    {item.winner}
                  </strong>

                </div>

                <div>

                  <span>Result</span>

                  <strong>
                    {item.resultType}
                  </strong>

                </div>

              </div>

              {/* =====================================
                  CARD FOOTER
              ===================================== */}

              <div className={styles.cardFooter}>

                <span>
                  Official: {item.official}
                </span>

                <button
                  type="button"
                  className={styles.viewButton}
                  onClick={() => setSelected(item)}
                >
                  <Eye size={16} />
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =========================================
          DETAILS MODAL
      ========================================= */}

      {selected && (

        <div className={styles.overlay}>

          <div className={styles.modal}>

            {/* MODAL HEADER */}

            <div className={styles.modalHeader}>

              <div>

                <span className={styles.modalLabel}>
                  COMPLETED RESULT
                </span>

                <h2>
                  {selected.competition}
                </h2>

                <p>
                  {selected.code}
                </p>

              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

            </div>

            {/* =====================================
                STATUS
            ===================================== */}

            <div className={styles.completedStatus}>

              <CheckCircle2 size={18} />

              <div>

                <span>Status</span>

                <strong>
                  Result Completed
                </strong>

              </div>

            </div>

            {/* =====================================
                MATCH DETAILS
            ===================================== */}

            <div className={styles.modalInfo}>

              <div>
                <CalendarDays size={16} />
                <span>{selected.date}</span>
              </div>

              <div>
                <Clock3 size={16} />
                <span>{selected.time}</span>
              </div>

              <div>
                <MapPin size={16} />
                <span>{selected.venue}</span>
              </div>

              <div>
                <Trophy size={16} />
                <span>{selected.ring}</span>
              </div>

            </div>

            {/* =====================================
                MATCH RESULT
            ===================================== */}

            <div className={styles.modalSection}>

              <h3>Match Result</h3>

              <div className={styles.modalResult}>

                {/* RED */}

                <div>

                  <span className={styles.cornerLabel}>
                    RED CORNER
                  </span>

                  <strong>
                    {selected.athlete1}
                  </strong>

                  <b>
                    {selected.score1}
                  </b>

                </div>

                {/* VS */}

                <span className={styles.modalResultVs}>
                  VS
                </span>

                {/* BLUE */}

                <div>

                  <span className={styles.cornerLabel}>
                    BLUE CORNER
                  </span>

                  <strong>
                    {selected.athlete2}
                  </strong>

                  <b>
                    {selected.score2}
                  </b>

                </div>

              </div>

            </div>

            {/* =====================================
                WINNER
            ===================================== */}

            <div className={styles.modalWinner}>

              <div>

                <span>Winner</span>

                <strong>
                  <Award size={17} />
                  {selected.winner}
                </strong>

              </div>

              <div>

                <span>Result Type</span>

                <strong>
                  {selected.resultType}
                </strong>

              </div>

            </div>

            {/* =====================================
                INFORMATION
            ===================================== */}

            <div className={styles.modalGrid}>

              <div>
                <span>Category</span>
                <strong>{selected.category}</strong>
              </div>

              <div>
                <span>Round</span>
                <strong>{selected.round}</strong>
              </div>

              <div>
                <span>Venue</span>
                <strong>{selected.venue}</strong>
              </div>

              <div>
                <span>Official</span>
                <strong>{selected.official}</strong>
              </div>

            </div>

            {/* =====================================
                CERTIFICATE BUTTON
            ===================================== */}

            <button
              type="button"
              className={styles.certificateButton}
            >
              <Award size={17} />
              View Result Certificate
            </button>

          </div>

        </div>

      )}

    </main>
  );
}