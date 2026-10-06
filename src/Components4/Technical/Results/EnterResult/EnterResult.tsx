"use client";

import { useState } from "react";
import {
  FilePenLine,
  CalendarDays,
  Clock3,
  MapPin,
  Trophy,
  Users,
  CheckCircle2,
  X,
  Save,
  RotateCcw,
} from "lucide-react";

import styles from "./EnterResult.module.css";

interface Match {
  id: number;
  competition: string;
  code: string;
  date: string;
  time: string;
  venue: string;
  ring: string;
  athlete1: string;
  athlete2: string;
  category: string;
  round: string;
}

const matches: Match[] = [
  {
    id: 1,
    competition: "WABA National Boxing Championship 2026",
    code: "WABA-NBC-2026",
    date: "18 October 2026",
    time: "09:00 AM",
    venue: "Hyderabad",
    ring: "Main Ring",
    athlete1: "Rahul Kumar",
    athlete2: "Arjun Reddy",
    category: "Men - Lightweight",
    round: "Semi Final",
  },
  {
    id: 2,
    competition: "South Zone Adaptive Boxing Championship",
    code: "WABA-SZ-2026",
    date: "05 November 2026",
    time: "10:00 AM",
    venue: "Bengaluru",
    ring: "Ring 2",
    athlete1: "Vijay Kumar",
    athlete2: "Suresh Babu",
    category: "Men - Welterweight",
    round: "Quarter Final",
  },
  {
    id: 3,
    competition: "Telangana Technical Boxing Meet",
    code: "WABA-TG-2026",
    date: "15 November 2026",
    time: "09:30 AM",
    venue: "Warangal",
    ring: "Ring 1",
    athlete1: "Kiran Reddy",
    athlete2: "Mahesh Kumar",
    category: "Men - Middleweight",
    round: "Final",
  },
  {
    id: 4,
    competition: "Andhra Pradesh Adaptive Boxing Championship",
    code: "WABA-AP-2026",
    date: "12 December 2026",
    time: "10:00 AM",
    venue: "Visakhapatnam",
    ring: "Ring 1",
    athlete1: "Ravi Teja",
    athlete2: "Naveen Kumar",
    category: "Men - Lightweight",
    round: "Quarter Final",
  },
];

export default function EnterResult() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");

  const [winner, setWinner] = useState("");
  const [resultType, setResultType] = useState("Points Decision");

  const [remarks, setRemarks] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const openMatch = (match: Match) => {
    setSelectedMatch(match);
    setScore1("");
    setScore2("");
    setWinner("");
    setResultType("Points Decision");
    setRemarks("");
    setSubmitted(false);
  };

  const closeMatch = () => {
    setSelectedMatch(null);
    setSubmitted(false);
  };

  const resetForm = () => {
    setScore1("");
    setScore2("");
    setWinner("");
    setResultType("Points Decision");
    setRemarks("");
    setSubmitted(false);
  };

  const submitResult = () => {
    if (!score1 || !score2 || !winner) {
      alert("Please enter both scores and select the winner.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <FilePenLine size={30} />
            Enter Results
          </h1>

          <p>
            Enter and submit results for completed matches.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <Trophy size={17} />
          {matches.length} Matches Ready
        </div>
      </section>

      {/* SUMMARY */}
      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <FilePenLine size={21} />
          </div>

          <div>
            <strong>{matches.length}</strong>
            <span>Matches Ready</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Users size={21} />
          </div>

          <div>
            <strong>{matches.length * 2}</strong>
            <span>Athletes</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <strong>0</strong>
            <span>Submitted Today</span>
          </div>
        </div>
      </section>

      {/* MATCH LIST */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>
              RESULT ENTRY
            </span>

            <h2>Matches Ready for Results</h2>
          </div>

          <span className={styles.matchCount}>
            {matches.length} Matches
          </span>
        </div>

        <div className={styles.matchList}>
          {matches.map((match) => (
            <div className={styles.matchCard} key={match.id}>
              {/* TOP */}
              <div className={styles.matchTop}>
                <div>
                  <span className={styles.code}>
                    {match.code}
                  </span>

                  <h3>{match.competition}</h3>

                  <p>
                    {match.category} • {match.round}
                  </p>
                </div>

                <span className={styles.readyBadge}>
                  <CheckCircle2 size={14} />
                  Ready
                </span>
              </div>

              {/* DETAILS */}
              <div className={styles.details}>
                <div>
                  <CalendarDays size={16} />
                  <span>{match.date}</span>
                </div>

                <div>
                  <Clock3 size={16} />
                  <span>{match.time}</span>
                </div>

                <div>
                  <MapPin size={16} />
                  <span>{match.venue}</span>
                </div>

                <div>
                  <Trophy size={16} />
                  <span>{match.ring}</span>
                </div>
              </div>

              {/* ATHLETES */}
              <div className={styles.athletes}>
                <div className={styles.athlete}>
                  <span className={styles.corner}>RED</span>
                  <strong>{match.athlete1}</strong>
                </div>

                <span className={styles.vs}>VS</span>

                <div className={styles.athlete}>
                  <span className={styles.corner}>BLUE</span>
                  <strong>{match.athlete2}</strong>
                </div>
              </div>

              {/* FOOTER */}
              <div className={styles.cardFooter}>
                <span>
                  {match.round}
                </span>

                <button
                  className={styles.enterButton}
                  onClick={() => openMatch(match)}
                >
                  <FilePenLine size={16} />
                  Enter Result
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESULT MODAL */}
      {selectedMatch && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            {/* MODAL HEADER */}
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalLabel}>
                  RESULT ENTRY
                </span>

                <h2>{selectedMatch.competition}</h2>

                <p>{selectedMatch.code}</p>
              </div>

              <button
                className={styles.closeButton}
                onClick={closeMatch}
              >
                <X size={20} />
              </button>
            </div>

            {/* MATCH INFO */}
            <div className={styles.modalInfo}>
              <div>
                <CalendarDays size={16} />
                {selectedMatch.date}
              </div>

              <div>
                <Clock3 size={16} />
                {selectedMatch.time}
              </div>

              <div>
                <MapPin size={16} />
                {selectedMatch.venue}
              </div>

              <div>
                <Trophy size={16} />
                {selectedMatch.ring}
              </div>
            </div>

            {/* ATHLETES */}
            <div className={styles.resultSection}>
              <h3>Match Result</h3>

              <div className={styles.scoreGrid}>
                {/* ATHLETE 1 */}
                <div className={styles.scoreCard}>
                  <span className={styles.redLabel}>
                    RED CORNER
                  </span>

                  <h4>{selectedMatch.athlete1}</h4>

                  <label>Score</label>

                  <input
                    type="number"
                    min="0"
                    placeholder="Enter score"
                    value={score1}
                    onChange={(e) =>
                      setScore1(e.target.value)
                    }
                  />

                  <label>Winner</label>

                  <button
                    type="button"
                    className={
                      winner === selectedMatch.athlete1
                        ? styles.selectedWinner
                        : styles.winnerButton
                    }
                    onClick={() =>
                      setWinner(selectedMatch.athlete1)
                    }
                  >
                    {winner === selectedMatch.athlete1 && (
                      <CheckCircle2 size={16} />
                    )}

                    {winner === selectedMatch.athlete1
                      ? "Winner Selected"
                      : "Select Winner"}
                  </button>
                </div>

                {/* VS */}
                <div className={styles.modalVs}>
                  VS
                </div>

                {/* ATHLETE 2 */}
                <div className={styles.scoreCard}>
                  <span className={styles.blueLabel}>
                    BLUE CORNER
                  </span>

                  <h4>{selectedMatch.athlete2}</h4>

                  <label>Score</label>

                  <input
                    type="number"
                    min="0"
                    placeholder="Enter score"
                    value={score2}
                    onChange={(e) =>
                      setScore2(e.target.value)
                    }
                  />

                  <label>Winner</label>

                  <button
                    type="button"
                    className={
                      winner === selectedMatch.athlete2
                        ? styles.selectedWinner
                        : styles.winnerButton
                    }
                    onClick={() =>
                      setWinner(selectedMatch.athlete2)
                    }
                  >
                    {winner === selectedMatch.athlete2 && (
                      <CheckCircle2 size={16} />
                    )}

                    {winner === selectedMatch.athlete2
                      ? "Winner Selected"
                      : "Select Winner"}
                  </button>
                </div>
              </div>
            </div>

            {/* RESULT TYPE */}
            <div className={styles.formGroup}>
              <label>Result Type</label>

              <select
                value={resultType}
                onChange={(e) =>
                  setResultType(e.target.value)
                }
              >
                <option>Points Decision</option>
                <option>Unanimous Decision</option>
                <option>Split Decision</option>
                <option>Technical Decision</option>
                <option>Referee Stoppage</option>
                <option>Technical Knockout</option>
                <option>Knockout</option>
                <option>Walkover</option>
              </select>
            </div>

            {/* REMARKS */}
            <div className={styles.formGroup}>
              <label>Remarks</label>

              <textarea
                placeholder="Enter any match remarks..."
                value={remarks}
                onChange={(e) =>
                  setRemarks(e.target.value)
                }
                rows={4}
              />
            </div>

            {/* SUCCESS */}
            {submitted && (
              <div className={styles.successMessage}>
                <CheckCircle2 size={19} />

                <div>
                  <strong>Result Submitted Successfully</strong>
                  <span>
                    The match result has been recorded.
                  </span>
                </div>
              </div>
            )}

            {/* ACTIONS */}
            <div className={styles.modalActions}>
              <button
                className={styles.resetButton}
                onClick={resetForm}
              >
                <RotateCcw size={16} />
                Reset
              </button>

              <button
                className={styles.submitButton}
                onClick={submitResult}
              >
                <Save size={16} />
                Submit Result
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}