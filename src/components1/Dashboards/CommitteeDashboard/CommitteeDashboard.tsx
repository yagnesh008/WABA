"use client";

import { useState } from "react";
import {
  FolderOpen,
  Stethoscope,
  Tag,
  ShieldCheck,
  Scale,
  HeartHandshake,
  UsersRound,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  Search,
} from "lucide-react";
import styles from "../Dashboards.module.css";

type CaseStatus = "All" | "New" | "Under Review" | "Resolved" | "Closed";

export default function CommitteeDashboard() {
  const [filter, setFilter] = useState<CaseStatus>("All");

  const casesData = [
    {
      id: "C-1234",
      subject: "Alex Reid",
      category: "Medical Fitness",
      priority: "HIGH",
      committee: "Medical Committee",
      date: "Oct 24, 2026",
      status: "Under Review",
    },
    {
      id: "C-1233",
      subject: "Chloe Lee",
      category: "Classification Appeal",
      priority: "URGENT",
      committee: "Classification Board",
      date: "Oct 23, 2026",
      status: "New",
    },
    {
      id: "C-1232",
      subject: "Jordan Smith",
      category: "Disciplinary Bout Code",
      priority: "MEDIUM",
      committee: "Disciplinary Body",
      date: "Oct 21, 2026",
      status: "Under Review",
    },
    {
      id: "C-1231",
      subject: "Priya Sharma",
      category: "Safeguarding Protocol",
      priority: "HIGH",
      committee: "Safeguarding Team",
      date: "Oct 19, 2026",
      status: "Resolved",
    },
  ];

  const filteredCases = filter === "All"
    ? casesData
    : casesData.filter((c) => c.status === filter);

  return (
    <main className={styles.dashboard}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Committee Administration & Governance</h1>
          <p>Disciplinary, Medical Fitness Clearances, Adaptive Classification & Safeguarding Oversight</p>
        </div>
        <div className={styles.headerBadge}>
          <span className={styles.pulseDot}></span>
          <span>Active Session: Q4 Governance</span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FolderOpen size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Total Active Cases</span>
            <h2>124</h2>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>+5% from last month</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Stethoscope size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Pending Medical Clearances</span>
            <h2>18</h2>
            <p className={`${styles.statTrend} ${styles.trendAlert}`}>4 Urgent approvals</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Tag size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Classification Requests</span>
            <h2>9</h2>
            <p className={styles.statTrend} style={{ color: "#a855f7" }}>2 Ready for panel</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <ShieldCheck size={24} />
          </div>
          <div className={styles.statInfo}>
            <span>Safeguarding Reports</span>
            <h2>11</h2>
            <p className={styles.statTrend} style={{ color: "#3b82f6" }}>All assigned</p>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className={styles.layoutGrid}>
        {/* Cases Triage Table */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <FolderOpen size={18} />
              <span>Active Cases Triage Board</span>
            </h3>
            <div style={{ display: "flex", gap: "6px" }}>
              {(["All", "New", "Under Review", "Resolved"] as CaseStatus[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={filter === tab ? styles.primaryBtn : styles.secondaryBtn}
                  style={{ padding: "4px 10px", fontSize: "11px" }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Case ID</th>
                  <th>Athlete / Subject</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Assigned Body</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span style={{ fontFamily: "monospace", color: "#e50914", fontWeight: 700 }}>
                        {item.id}
                      </span>
                    </td>
                    <td>
                      <strong>{item.subject}</strong>
                    </td>
                    <td>{item.category}</td>
                    <td>
                      <span
                        className={`${styles.badge} ${
                          item.priority === "HIGH" || item.priority === "URGENT"
                            ? styles.badgeUrgent
                            : styles.badgePending
                        }`}
                      >
                        {item.priority}
                      </span>
                    </td>
                    <td style={{ color: "#9ca3af" }}>{item.committee}</td>
                    <td>
                      <button className={styles.secondaryBtn} style={{ padding: "4px 8px" }}>
                        <Eye size={12} />
                        <span>Review</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Medical & Classification Queue */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              <Stethoscope size={18} />
              <span>Medical & Classification Queue</span>
            </h3>
            <span>Triage</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <strong>Ben Carter</strong>
                <span className={`${styles.badge} ${styles.badgeUrgent}`}>ECG Pending</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 8px 0" }}>WABA ID: #24098 • Level 3 Review</p>
              <button className={styles.primaryBtn} style={{ width: "100%", justifyContent: "center", padding: "6px" }}>
                Clear Medical Record
              </button>
            </div>

            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <strong>Maya Patel</strong>
                <span className={`${styles.badge} ${styles.badgePending}`}>Class W1</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 8px 0" }}>Physical & Functional Class Evaluation</p>
              <button className={styles.secondaryBtn} style={{ width: "100%", justifyContent: "center", padding: "6px" }}>
                Assign Panel Evaluator
              </button>
            </div>

            <div style={{ padding: "12px", background: "#181920", borderRadius: "10px", border: "1px solid #242632" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <strong>Liam Davies</strong>
                <span className={`${styles.badge} ${styles.badgeActive}`}>Doctor Signed</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 8px 0" }}>Annual Neurological Clearance</p>
              <button className={styles.primaryBtn} style={{ width: "100%", justifyContent: "center", padding: "6px" }}>
                Authorize License
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Committees Portal Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.card} style={{ padding: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Scale size={24} color="#e50914" />
            <div>
              <h4 style={{ margin: 0, fontSize: "14px" }}>Disciplinary Committee</h4>
              <span style={{ fontSize: "11px", color: "#9ca3af" }}>5 Open Inquiries</span>
            </div>
          </div>
        </div>

        <div className={styles.card} style={{ padding: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ShieldCheck size={24} color="#3b82f6" />
            <div>
              <h4 style={{ margin: 0, fontSize: "14px" }}>Safeguarding Committee</h4>
              <span style={{ fontSize: "11px", color: "#9ca3af" }}>2 Anonymous Reports</span>
            </div>
          </div>
        </div>

        <div className={styles.card} style={{ padding: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <HeartHandshake size={24} color="#22c55e" />
            <div>
              <h4 style={{ margin: 0, fontSize: "14px" }}>Welfare Committee</h4>
              <span style={{ fontSize: "11px", color: "#9ca3af" }}>Equipment Grants: ₹ 4.5L</span>
            </div>
          </div>
        </div>

        <div className={styles.card} style={{ padding: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <UsersRound size={24} color="#ec4899" />
            <div>
              <h4 style={{ margin: 0, fontSize: "14px" }}>Women's Committee</h4>
              <span style={{ fontSize: "11px", color: "#9ca3af" }}>182 Female Boxers Active</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
