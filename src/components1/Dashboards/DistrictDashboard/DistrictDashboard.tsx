"use client";

import {
  Building,
  Users,
  Trophy,
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  FileCheck,
} from "lucide-react";
import styles from "../Dashboards.module.css";

export default function DistrictDashboard() {
  const mandals = [
    { name: "Ameerpet Mandal", clubs: 3, athletes: 38, status: "Active" },
    { name: "Secunderabad Mandal", clubs: 2, athletes: 32, status: "Active" },
    { name: "Charminar Mandal", clubs: 2, athletes: 44, status: "Active" },
    { name: "Khairatabad Mandal", clubs: 1, athletes: 28, status: "Active" },
  ];

  return (
    <main className={styles.dashboard}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>District Administration & Grassroots Portal</h1>
          <p>Hyderabad Urban District • Overseeing Mandals, Local Gyms & Grassroots Bouts</p>
        </div>
        <div className={styles.headerBadge}>
          <span className={styles.pulseDot}></span>
          <span>Affiliated District Board</span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Building size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Mandals & Villages</span>
            <h2>16</h2>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>100% Active coverage</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Building size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Affiliated Gyms / Clubs</span>
            <h2>8</h2>
            <p className={styles.statTrend} style={{ color: "#3b82f6" }}>Wheelchair accessible</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Users size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Grassroots Boxers</span>
            <h2>142</h2>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>+24 This season</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Trophy size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Scheduled Local Bouts</span>
            <h2>28</h2>
            <p className={styles.statTrend} style={{ color: "#f59e0b" }}>District Trials</p>
          </div>
        </div>
      </div>

      {/* Layout Grid */}
      <div className={styles.layoutGrid}>
        {/* Mandal Breakdown */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <MapPin size={18} />
              <span>Mandal Participation Breakdown</span>
            </h3>
            <span>Grassroots Units</span>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Mandal / Village</th>
                <th>Affiliated Gyms</th>
                <th>Athletes</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mandals.map((m) => (
                <tr key={m.name}>
                  <td><strong>{m.name}</strong></td>
                  <td>{m.clubs} Clubs</td>
                  <td>{m.athletes} Boxers</td>
                  <td><span className={`${styles.badge} ${styles.badgeActive}`}>{m.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Local Weigh-in Schedule */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Calendar size={18} />
              <span>District Weigh-ins & Trials</span>
            </h3>
            <span>Upcoming</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <strong>Hyderabad Youth Adaptive Trials</strong>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0" }}>Kotla Vijaya Bhaskara Reddy Stadium</p>
              <span style={{ fontSize: "11px", color: "#e50914" }}>Nov 08 • 42 Boxers registered</span>
            </div>

            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <strong>Mandal Boxing Coach Clinic</strong>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0" }}>WABA Adaptive Rules & Safety Seminar</p>
              <span style={{ fontSize: "11px", color: "#22c55e" }}>Nov 15 • 18 Coaches</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
