"use client";

import { useState } from "react";
import {
  Scale,
  Clock,
  CheckCircle,
  FileCheck,
  Award,
  Calendar,
  AlertCircle,
  Play,
  RotateCcw,
} from "lucide-react";
import styles from "../Dashboards.module.css";

export default function TechnicalDashboard() {
  const [redScore, setRedScore] = useState(10);
  const [blueScore, setBlueScore] = useState(9);
  const [currentRound, setCurrentRound] = useState(1);

  return (
    <main className={styles.dashboard}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Technical & Ring Officiating Console</h1>
          <p>Refereeing, Judging, Bout Scoring & Athlete Functional Classification Board</p>
        </div>
        <div className={styles.headerBadge} style={{ background: "rgba(229, 9, 20, 0.25)" }}>
          <span className={styles.pulseDot}></span>
          <span>LIVE BOUT IN PROGRESS: RING 1</span>
        </div>
      </div>

      {/* Live Bout Scoring Console */}
      <div className={styles.card} style={{ marginBottom: "24px", border: "1px solid rgba(229, 9, 20, 0.4)" }}>
        <div className={styles.cardHeader}>
          <h3>
            <Scale size={18} color="#e50914" />
            <span>Ring 1: Live 10-Point Must Bout Scoring (Bout #7 • Elite Men 60kg)</span>
          </h3>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "#9ca3af" }}>Active Round:</span>
            {[1, 2, 3].map((r) => (
              <button
                key={r}
                onClick={() => setCurrentRound(r)}
                className={currentRound === r ? styles.primaryBtn : styles.secondaryBtn}
                style={{ padding: "4px 12px", fontSize: "11px" }}
              >
                Round {r}
              </button>
            ))}
          </div>
        </div>

        {/* Scoring Arena */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "24px", alignItems: "center" }}>
          {/* Red Corner */}
          <div className={styles.cornerRed}>
            <span style={{ fontSize: "10px", fontWeight: 900, color: "#e50914" }}>RED CORNER</span>
            <h3 style={{ fontSize: "18px", fontWeight: 800, margin: "4px 0" }}>John D. (India)</h3>
            <p style={{ fontSize: "12px", color: "#9ca3af", margin: "0 0 14px 0" }}>Sport Class W2 • 59.8 kg</p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
              <button
                onClick={() => setRedScore((s) => Math.max(7, s - 1))}
                className={styles.secondaryBtn}
                style={{ width: "36px", height: "36px", justifyContent: "center", fontSize: "18px", fontWeight: 800 }}
              >
                -
              </button>
              <span style={{ fontSize: "36px", fontWeight: 900, color: "#ffffff", fontFamily: "monospace" }}>
                {redScore}
              </span>
              <button
                onClick={() => setRedScore((s) => Math.min(10, s + 1))}
                className={styles.primaryBtn}
                style={{ width: "36px", height: "36px", justifyContent: "center", fontSize: "18px", fontWeight: 800 }}
              >
                +
              </button>
            </div>
            <span style={{ fontSize: "11px", color: "#9ca3af", display: "block", marginTop: "8px" }}>Judge 1 Scorecard</span>
          </div>

          {/* Center Clock */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 900,
                color: "#f59e0b",
                fontFamily: "monospace",
                background: "#08090d",
                padding: "8px 16px",
                borderRadius: "10px",
                border: "1px solid #242634",
              }}
            >
              01:45
            </div>
            <span style={{ fontSize: "11px", color: "#9ca3af", display: "block", marginTop: "6px" }}>Round 1 Time</span>
          </div>

          {/* Blue Corner */}
          <div className={styles.cornerBlue}>
            <span style={{ fontSize: "10px", fontWeight: 900, color: "#3b82f6" }}>BLUE CORNER</span>
            <h3 style={{ fontSize: "18px", fontWeight: 800, margin: "4px 0" }}>Alex P. (Australia)</h3>
            <p style={{ fontSize: "12px", color: "#9ca3af", margin: "0 0 14px 0" }}>Sport Class W2 • 60.1 kg</p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
              <button
                onClick={() => setBlueScore((s) => Math.max(7, s - 1))}
                className={styles.secondaryBtn}
                style={{ width: "36px", height: "36px", justifyContent: "center", fontSize: "18px", fontWeight: 800 }}
              >
                -
              </button>
              <span style={{ fontSize: "36px", fontWeight: 900, color: "#ffffff", fontFamily: "monospace" }}>
                {blueScore}
              </span>
              <button
                onClick={() => setBlueScore((s) => Math.min(10, s + 1))}
                className={styles.primaryBtn}
                style={{ width: "36px", height: "36px", justifyContent: "center", fontSize: "18px", fontWeight: 800 }}
              >
                +
              </button>
            </div>
            <span style={{ fontSize: "11px", color: "#9ca3af", display: "block", marginTop: "8px" }}>Judge 1 Scorecard</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid #1c1e28" }}>
          <button className={styles.secondaryBtn}>Referee Warning / Foul (-1)</button>
          <button className={styles.primaryBtn}>Submit Round {currentRound} Scorecard</button>
        </div>
      </div>

      {/* Assignments & Classification Queue */}
      <div className={styles.layoutGrid}>
        {/* Today's Ring Assignments */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Clock size={18} />
              <span>Today's Official Assignments</span>
            </h3>
            <span>National Championship 2026</span>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Bout #</th>
                <th>Time</th>
                <th>Assigned Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Bout 7 (Ring 1)</strong></td>
                <td>10:30 AM</td>
                <td>Judge 1 (10-Point Must)</td>
                <td><span className={`${styles.badge} ${styles.badgeActive}`}>Active Now</span></td>
              </tr>
              <tr>
                <td><strong>Bout 9 (Ring 1)</strong></td>
                <td>11:45 AM</td>
                <td>Referee in Ring</td>
                <td><span className={`${styles.badge} ${styles.badgePending}`}>Upcoming</span></td>
              </tr>
              <tr>
                <td><strong>Bout 12 (Ring 2)</strong></td>
                <td>02:15 PM</td>
                <td>Technical Delegate</td>
                <td><span className={`${styles.badge} ${styles.badgePending}`}>Scheduled</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Athlete Classification Testing */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Award size={18} />
              <span>Athlete Classification Testing</span>
            </h3>
            <span>Functional Board</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Sarah L. (Delhi)</strong>
                <span className={`${styles.badge} ${styles.badgePending}`}>Pending Review</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0 6px 0" }}>Test: Bench reach, trunk rotation & seated stability</p>
              <span style={{ fontSize: "11px", color: "#e50914" }}>Scheduled: 03:00 PM (Class W1 Assessment)</span>
            </div>

            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Mike B. (Karnataka)</strong>
                <span className={`${styles.badge} ${styles.badgeActive}`}>Confirmed W2</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0 6px 0" }}>Evaluated by Dr. Sharma & Tech Delegate</p>
              <span style={{ fontSize: "11px", color: "#22c55e" }}>Certificate Issued: WABA-CLS-2026</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
