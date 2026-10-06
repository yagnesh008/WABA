"use client";

import {
  Trophy,
  Users,
  Building2,
  Wallet,
  ShieldCheck,
  CheckCircle,
  FileText,
  Clock,
  MapPin,
  TrendingUp,
} from "lucide-react";
import styles from "../Dashboards.module.css";

export default function NationalDashboard() {
  const stateAssociations = [
    { state: "Telangana", code: "TG", districts: 33, athletes: 428, status: "Affiliated" },
    { state: "Maharashtra", code: "MH", districts: 36, athletes: 512, status: "Affiliated" },
    { state: "Karnataka", code: "KA", districts: 31, athletes: 365, status: "Affiliated" },
    { state: "Delhi NCR", code: "DL", districts: 11, athletes: 284, status: "Affiliated" },
    { state: "Tamil Nadu", code: "TN", districts: 38, athletes: 390, status: "Affiliated" },
  ];

  return (
    <main className={styles.dashboard}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>WABA National Administration</h1>
          <p>Wheelchair Adaptive Boxing Association • Apex National Governing Body</p>
        </div>
        <div className={styles.headerBadge}>
          <span className={styles.pulseDot}></span>
          <span>Apex Secretariat</span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Users size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Total Registered Boxers</span>
            <h2>2,850</h2>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>+14% National Growth</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Building2 size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Affiliated State Bodies</span>
            <h2>24 / 36</h2>
            <p className={styles.statTrend} style={{ color: "#3b82f6" }}>8 In progress</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Trophy size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Sanctioned Championships</span>
            <h2>16</h2>
            <p className={styles.statTrend} style={{ color: "#f59e0b" }}>4 National Grand Prix</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Wallet size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Annual Revenue & Grants</span>
            <h2>₹ 2.45 Cr</h2>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>Audited Fiscal Year</p>
          </div>
        </div>
      </div>

      {/* Layout Grid */}
      <div className={styles.layoutGrid}>
        {/* Affiliated States */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Building2 size={18} />
              <span>Affiliated State Adaptive Boxing Associations</span>
            </h3>
            <span>Central Registry</span>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>State</th>
                <th>Code</th>
                <th>Districts</th>
                <th>Athletes</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {stateAssociations.map((s) => (
                <tr key={s.state}>
                  <td><strong>{s.state}</strong></td>
                  <td><span style={{ fontFamily: "monospace", color: "#9ca3af" }}>{s.code}</span></td>
                  <td>{s.districts} Districts</td>
                  <td>{s.athletes} Boxers</td>
                  <td><span className={`${styles.badge} ${styles.badgeActive}`}>{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pending Sanctioning Approvals */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Trophy size={18} />
              <span>National Sanctioning Queue</span>
            </h3>
            <span>Approvals</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <strong>All-India Adaptive Gold Cup 2026</strong>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0" }}>Host: Maharashtra Association • 240 Athletes</p>
              <button className={styles.primaryBtn} style={{ width: "100%", justifyContent: "center", padding: "6px", marginTop: "4px" }}>
                Grant National Sanction
              </button>
            </div>

            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <strong>North-East Para Boxing Open</strong>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0" }}>Host: Assam Association • 90 Athletes</p>
              <button className={styles.secondaryBtn} style={{ width: "100%", justifyContent: "center", padding: "6px", marginTop: "4px" }}>
                Review Safety Protocol
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
