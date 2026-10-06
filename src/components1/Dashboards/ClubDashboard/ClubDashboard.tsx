"use client";

import {
  Building2,
  Users,
  Trophy,
  Calendar,
  Award,
  CheckCircle,
  Clock,
  ChevronRight,
  Plus,
} from "lucide-react";
import styles from "../Dashboards.module.css";

export default function ClubDashboard() {
  const boxers = [
    { name: "Sarah Jenkins", category: "Featherweight (WC)", class: "Class W1", status: "Active", bouts: 8 },
    { name: "Liam Evans", category: "Lightweight (WC)", class: "Class W2", status: "Active", bouts: 14 },
    { name: "Maya Patel", category: "Flyweight (WC)", class: "Class W1", status: "Pending Medical", bouts: 5 },
    { name: "Naveen Kumar", category: "Middleweight (WC)", class: "Class W2", status: "Active", bouts: 19 },
  ];

  return (
    <main className={styles.dashboard}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Club & Academy Management Center</h1>
          <p>Hyderabad Adaptive Champions Academy • Affiliated with WABA National Federation</p>
        </div>
        <div className={styles.headerBadge}>
          <span className={styles.pulseDot}></span>
          <span>WABA Certified Academy</span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Users size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Enrolled Adaptive Boxers</span>
            <h2>48</h2>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>+12 New this quarter</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Award size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Certified Head Coaches</span>
            <h2>4</h2>
            <p className={styles.statTrend} style={{ color: "#3b82f6" }}>WABA Level 2 Certified</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Trophy size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Tournament Bouts Booked</span>
            <h2>12</h2>
            <p className={styles.statTrend} style={{ color: "#f59e0b" }}>3 This weekend</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <CheckCircle size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Active Membership Rate</span>
            <h2>98%</h2>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>All licenses current</p>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className={styles.layoutGrid}>
        {/* Boxer Roster */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Users size={18} />
              <span>Academy Boxer Roster</span>
            </h3>
            <button className={styles.primaryBtn}>
              <Plus size={14} />
              <span>Enroll Boxer</span>
            </button>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Fighter Name</th>
                  <th>Weight Class</th>
                  <th>Sport Class</th>
                  <th>Total Bouts</th>
                  <th>License Status</th>
                </tr>
              </thead>
              <tbody>
                {boxers.map((b) => (
                  <tr key={b.name}>
                    <td><strong>{b.name}</strong></td>
                    <td>{b.category}</td>
                    <td><span className={`${styles.badge} ${styles.badgeBlue}`}>{b.class}</span></td>
                    <td>{b.bouts} fights</td>
                    <td>
                      <span className={`${styles.badge} ${b.status === "Active" ? styles.badgeActive : styles.badgePending}`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Training & Events Schedule */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Calendar size={18} />
              <span>Training Sessions & Schedule</span>
            </h3>
            <span>This Week</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <strong style={{ fontSize: "13px" }}>Wheelchair Sparring & Conditioning</strong>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0" }}>Mon, Wed, Fri • 04:00 PM - 06:30 PM</p>
              <span style={{ fontSize: "11px", color: "#22c55e" }}>Led by Coach Kiran R.</span>
            </div>

            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <strong style={{ fontSize: "13px" }}>Adaptive Bagwork & Punch Tracking</strong>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0" }}>Tue, Thu • 05:00 PM - 07:00 PM</p>
              <span style={{ fontSize: "11px", color: "#3b82f6" }}>Speed sensors & video analysis</span>
            </div>

            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <strong style={{ fontSize: "13px" }}>National Qualifier Weigh-In</strong>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "4px 0" }}>Saturday • 09:00 AM</p>
              <span style={{ fontSize: "11px", color: "#e50914" }}>Mandatory for all 12 fighters</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
