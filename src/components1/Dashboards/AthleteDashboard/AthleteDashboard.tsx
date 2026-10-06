"use client";

import {
  Medal,
  Trophy,
  Calendar,
  Clock,
  QrCode,
  ShieldCheck,
  Flame,
  CheckCircle,
  FileText,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import styles from "../Dashboards.module.css";

export default function AthleteDashboard() {
  return (
    <main className={styles.dashboard}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Athlete Fighter Center</h1>
          <p>Welcome back, Alex. Your upcoming sanctioned championship bout is in 22 days.</p>
        </div>
        <div className={styles.headerBadge}>
          <span className={styles.pulseDot}></span>
          <span>License Active: WABA-ATH-2026</span>
        </div>
      </div>

      {/* Fighter Profile Card & Digital ID Header */}
      <div className={styles.layoutGrid}>
        {/* Fighter Overview Card */}
        <div className={styles.card} style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #e50914, #7f0d14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: 900,
                boxShadow: "0 8px 24px rgba(229, 9, 20, 0.4)",
              }}
            >
              W2
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: 800, margin: 0 }}>Alex "Hammer" Reed</h2>
                <span className={`${styles.badge} ${styles.badgeActive}`}>Active Boxer</span>
              </div>
              <p style={{ color: "#9ca3af", fontSize: "13px", margin: "0 0 12px 0" }}>
                Sport Class: <strong>Class W2 (Adaptive Trunk)</strong> • Weight: <strong>Lightweight (60kg)</strong>
              </p>

              {/* Record Counters */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", background: "#0d0e12", padding: "12px", borderRadius: "10px", textAlign: "center" }}>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", textTransform: "uppercase" }}>Wins</span>
                  <p style={{ fontSize: "20px", fontWeight: 900, color: "#22c55e", margin: 0 }}>18</p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", textTransform: "uppercase" }}>Losses</span>
                  <p style={{ fontSize: "20px", fontWeight: 900, color: "#ef4444", margin: 0 }}>2</p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", textTransform: "uppercase" }}>KOs / Stops</span>
                  <p style={{ fontSize: "20px", fontWeight: 900, color: "#f59e0b", margin: 0 }}>12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital WABA ID Pass */}
        <div className={styles.digitalCard}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
            <div>
              <span style={{ fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", opacity: 0.8 }}>WABA ATHLETE LICENSE</span>
              <h3 style={{ fontSize: "16px", fontWeight: 800, margin: "2px 0 0 0" }}>WABA-2026-IND-091</h3>
            </div>
            <span style={{ background: "rgba(255, 255, 255, 0.2)", padding: "2px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: 700 }}>
              VERIFIED
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", margin: "14px 0" }}>
            <div style={{ background: "#ffffff", padding: "6px", borderRadius: "8px", color: "#000000" }}>
              <QrCode size={40} />
            </div>
            <div style={{ fontSize: "12px", lineHeight: 1.5 }}>
              <p style={{ margin: 0 }}><strong>Club:</strong> Hyderabad Adaptive Boxing</p>
              <p style={{ margin: 0, opacity: 0.85 }}><strong>Medical Clearance:</strong> Valid until Dec 2026</p>
              <p style={{ margin: 0, opacity: 0.85 }}><strong>Status:</strong> Cleared for National Bouts</p>
            </div>
          </div>

          <button className={styles.secondaryBtn} style={{ width: "100%", justifyContent: "center", background: "rgba(255,255,255,0.15)", border: "none", color: "#ffffff", fontWeight: 700 }}>
            Download Digital Card
          </button>
        </div>
      </div>

      {/* Upcoming Bout Countdown & Recent Matches */}
      <div className={styles.layoutGrid}>
        {/* Next Bout Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Flame size={18} color="#e50914" />
              <span>Upcoming Championship Fight</span>
            </h3>
            <span style={{ color: "#e50914", fontWeight: 700 }}>22 Days Remaining</span>
          </div>

          <div className={styles.boutCard}>
            <p style={{ fontSize: "12px", color: "#9ca3af", margin: "0 0 12px 0" }}>
              National Wheelchair Boxing Championship 2026 • Final Bout
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "16px", alignItems: "center", margin: "16px 0" }}>
              <div className={styles.cornerRed}>
                <span style={{ fontSize: "10px", fontWeight: 800, color: "#e50914" }}>RED CORNER</span>
                <h4 style={{ margin: "4px 0 0 0", fontSize: "16px", fontWeight: 800 }}>Alex Reed</h4>
                <p style={{ fontSize: "11px", color: "#9ca3af", margin: "2px 0 0 0" }}>India (18-2-12)</p>
              </div>

              <span style={{ fontSize: "16px", fontWeight: 900, color: "#6b7280" }}>VS</span>

              <div className={styles.cornerBlue}>
                <span style={{ fontSize: "10px", fontWeight: 800, color: "#3b82f6" }}>BLUE CORNER</span>
                <h4 style={{ margin: "4px 0 0 0", fontSize: "16px", fontWeight: 800 }}>Chen Wei</h4>
                <p style={{ fontSize: "11px", color: "#9ca3af", margin: "2px 0 0 0" }}>China (16-1-10)</p>
              </div>
            </div>

            <div style={{ background: "#1c1e28", padding: "10px", borderRadius: "8px", fontSize: "12px", color: "#9ca3af" }}>
              📍 Gachibowli Indoor Stadium, Hyderabad • Weigh-In: Nov 14, 2026 (08:00 AM)
            </div>
          </div>
        </div>

        {/* Recent Matches */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Trophy size={18} />
              <span>Recent Match History</span>
            </h3>
            <span>Last 3 Bouts</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>vs. Liam Cole (UK)</strong>
                <span className={`${styles.badge} ${styles.badgeActive}`}>WIN (KO)</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0 0 0" }}>Inclusive Boxing Open • Round 3 (01:45) • 75-72 pts</p>
            </div>

            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>vs. Mark Jansen (USA)</strong>
                <span className={`${styles.badge} ${styles.badgeActive}`}>WIN (UD)</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0 0 0" }}>World Para Boxing Qualifier • Unanimous Decision</p>
            </div>

            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>vs. Carlos Ortiz (Mexico)</strong>
                <span className={`${styles.badge} ${styles.badgeActive}`}>WIN (PTS)</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0 0 0" }}>Asian-Pacific Invitational • 30-27, 29-28</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
