"use client";

import {
  Building2,
  Users,
  Trophy,
  Calendar,
  CheckCircle,
  Clock,
  Map,
  FileCheck,
  TrendingUp,
} from "lucide-react";
import styles from "../Dashboards.module.css";

export default function StateDashboard() {
  const districts = [
    { name: "Hyderabad", boxers: 142, coaches: 18, tournaments: 4, rank: "#1" },
    { name: "Warangal", boxers: 86, coaches: 9, tournaments: 2, rank: "#2" },
    { name: "Karimnagar", boxers: 64, coaches: 6, tournaments: 2, rank: "#3" },
    { name: "Nizamabad", boxers: 52, coaches: 5, tournaments: 1, rank: "#4" },
    { name: "Khammam", boxers: 44, coaches: 4, tournaments: 1, rank: "#5" },
  ];

  return (
    <main className={styles.dashboard}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>State Administration & Governance</h1>
          <p>Telangana State Adaptive Boxing Association • Affiliated with WABA Apex Body</p>
        </div>
        <div className={styles.headerBadge}>
          <span className={styles.pulseDot}></span>
          <span>Recognized State Association</span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Map size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Affiliated Districts</span>
            <h2>33 / 33</h2>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>100% District Presence</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Users size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Active State Boxers</span>
            <h2>428</h2>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>182 Female Boxers</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Trophy size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>State Sanctioned Events</span>
            <h2>6</h2>
            <p className={styles.statTrend} style={{ color: "#f59e0b" }}>2 State Gold Cups</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <CheckCircle size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>State Certified Officials</span>
            <h2>42</h2>
            <p className={styles.statTrend} style={{ color: "#3b82f6" }}>Referees & Judges</p>
          </div>
        </div>
      </div>

      {/* Layout Grid */}
      <div className={styles.layoutGrid}>
        {/* District Participation Table */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Building2 size={18} />
              <span>District Performance & Participation</span>
            </h3>
            <span>Ranking 2026</span>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>District Unit</th>
                <th>Registered Boxers</th>
                <th>Coaches</th>
                <th>Events Hosted</th>
              </tr>
            </thead>
            <tbody>
              {districts.map((d) => (
                <tr key={d.name}>
                  <td><span style={{ fontWeight: 800, color: "#e50914" }}>{d.rank}</span></td>
                  <td><strong>{d.name}</strong></td>
                  <td>{d.boxers} Boxers</td>
                  <td>{d.coaches} Coaches</td>
                  <td>{d.tournaments} Events</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* State Sanctioning Queue */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <FileCheck size={18} />
              <span>State Sanctioning Queue</span>
            </h3>
            <span>Pending</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Warangal Adaptive Open</strong>
                <span className={`${styles.badge} ${styles.badgePending}`}>Pending Review</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0" }}>Host: Warangal District Unit • 80 Boxers</p>
              <button className={styles.primaryBtn} style={{ width: "100%", justifyContent: "center", padding: "6px", marginTop: "4px" }}>
                Issue State Sanction Letter
              </button>
            </div>

            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Telangana Inter-District Cup</strong>
                <span className={`${styles.badge} ${styles.badgeActive}`}>Sanctioned</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0" }}>Nov 15-20, 2026 • Hyderabad Stadium</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
