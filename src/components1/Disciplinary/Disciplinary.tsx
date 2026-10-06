"use client";

import Link from "next/link";
import {
  Scale,
  AlertTriangle,
  FileWarning,
  Clock,
  CheckCircle,
  Users,
  Gavel,
  FileText,
  Eye,
  ArrowRight,
} from "lucide-react";

import styles from "./Disciplinary.module.css";

const casesData = [
  {
    id: "DC001",
    title: "Athlete Code of Conduct Violation",
    category: "Athlete Conduct",
    reportedBy: "WABA Telangana",
    location: "Hyderabad",
    date: "15 Sep 2026",
    status: "Under Review",
    priority: "High",
  },
  {
    id: "DC002",
    title: "Coach Misconduct Complaint",
    category: "Coach Conduct",
    reportedBy: "WABA Karnataka",
    location: "Bengaluru",
    date: "12 Sep 2026",
    status: "Open",
    priority: "Medium",
  },
  {
    id: "DC003",
    title: "Competition Rule Violation",
    category: "Competition",
    reportedBy: "Competition Committee",
    location: "Vijayawada",
    date: "10 Sep 2026",
    status: "Resolved",
    priority: "Low",
  },
  {
    id: "DC004",
    title: "Official Conduct Complaint",
    category: "Official Conduct",
    reportedBy: "Technical Committee",
    location: "New Delhi",
    date: "08 Sep 2026",
    status: "Under Review",
    priority: "High",
  },
  {
    id: "DC005",
    title: "Membership Rule Violation",
    category: "Membership",
    reportedBy: "WABA Andhra Pradesh",
    location: "Guntur",
    date: "05 Sep 2026",
    status: "Open",
    priority: "Medium",
  },
];

const statistics = [
  {
    title: "Total Cases",
    value: "24",
    icon: Scale,
    type: "blue",
  },
  {
    title: "Open Cases",
    value: "8",
    icon: AlertTriangle,
    type: "orange",
  },
  {
    title: "Under Review",
    value: "6",
    icon: Clock,
    type: "purple",
  },
  {
    title: "Resolved Cases",
    value: "10",
    icon: CheckCircle,
    type: "green",
  },
];

const managementCards = [
  {
    title: "Disciplinary Cases",
    description: "View and manage disciplinary cases",
    icon: Scale,
    link: "/disciplinaryPage/cases",
  },
  {
    title: "Complaints",
    description: "Manage complaints and reported violations",
    icon: FileWarning,
    link: "/disciplinaryPage/complaints",
  },
  {
    title: "Hearings",
    description: "Schedule and manage disciplinary hearings",
    icon: Gavel,
    link: "/disciplinaryPage/hearings",
  },
  {
    title: "Decisions",
    description: "Review disciplinary decisions and actions",
    icon: FileText,
    link: "/disciplinaryPage/decisions",
  },
];

export default function Disciplinary() {
  const highPriorityCases = casesData.filter(
    (item) => item.priority === "High"
  ).length;

  return (
    <main className={styles.disciplinaryPage}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Disciplinary Management</h1>
          <p>
            Manage disciplinary cases, complaints, hearings and decisions
            across WABA.
          </p>
        </div>

        <div className={styles.headerIcon}>
          <Scale size={30} />
        </div>
      </div>

      {/* Statistics */}
      <div className={styles.summaryGrid}>
        {statistics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`${styles.summaryCard} ${styles[item.type]}`}
            >
              <div className={styles.summaryIcon}>
                <Icon size={24} />
              </div>

              <div>
                <p>{item.title}</p>
                <h2>{item.value}</h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* Overview */}
      <div className={styles.overviewGrid}>
        <div className={styles.overviewCard}>
          <div className={styles.cardTitle}>
            <div>
              <h2>Disciplinary Overview</h2>
              <p>Current disciplinary activity</p>
            </div>

            <Scale size={26} />
          </div>

          <div className={styles.overviewStats}>
            <div>
              <span>Total Cases</span>
              <strong>24</strong>
            </div>

            <div>
              <span>Open</span>
              <strong>8</strong>
            </div>

            <div>
              <span>Under Review</span>
              <strong>6</strong>
            </div>

            <div>
              <span>Resolved</span>
              <strong>10</strong>
            </div>
          </div>
        </div>

        <div className={styles.priorityCard}>
          <div className={styles.priorityIcon}>
            <AlertTriangle size={28} />
          </div>

          <div>
            <h3>High Priority Cases</h3>
            <p>
              Cases requiring immediate disciplinary attention.
            </p>

            <strong>{highPriorityCases} Active Cases</strong>
          </div>
        </div>
      </div>

      {/* Management */}
      <section className={styles.managementSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Disciplinary Management</h2>
            <p>Manage all disciplinary activities</p>
          </div>
        </div>

        <div className={styles.managementGrid}>
          {managementCards.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                href={item.link}
                key={item.title}
                className={styles.managementCard}
              >
                <div className={styles.managementIcon}>
                  <Icon size={25} />
                </div>

                <div className={styles.managementContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowRight size={20} className={styles.arrowIcon} />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recent Cases */}
      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Recent Disciplinary Cases</h2>
            <p>Latest reported disciplinary matters</p>
          </div>

          <Link
            href="/disciplinaryPage/cases"
            className={styles.viewAllButton}
          >
            View All
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.casesTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>Case ID</th>
                <th className={styles.tableHeading}>Case</th>
                <th className={styles.tableHeading}>Category</th>
                <th className={styles.tableHeading}>Reported By</th>
                <th className={styles.tableHeading}>Location</th>
                <th className={styles.tableHeading}>Date</th>
                <th className={styles.tableHeading}>Priority</th>
                <th className={styles.tableHeading}>Status</th>
                <th className={styles.tableHeading}>Action</th>
              </tr>
            </thead>

            <tbody>
              {casesData.map((item) => (
                <tr key={item.id}>
                  <td className={styles.tableCell}>
                    <strong>{item.id}</strong>
                  </td>

                  <td className={styles.tableCell}>
                    <span className={styles.caseTitle}>
                      {item.title}
                    </span>
                  </td>

                  <td className={styles.tableCell}>{item.category}</td>

                  <td className={styles.tableCell}>
                    {item.reportedBy}
                  </td>

                  <td className={styles.tableCell}>{item.location}</td>

                  <td className={styles.tableCell}>{item.date}</td>

                  <td className={styles.tableCell}>
                    <span
                      className={`${styles.priorityBadge} ${
                        styles[item.priority.toLowerCase()]
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <span
                      className={`${styles.statusBadge} ${
                        styles[item.status
                          .toLowerCase()
                          .replaceAll(" ", "")]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <Link
                      href={`/disciplinaryPage/cases?case=${item.id}`}
                      className={styles.actionButton}
                    >
                      <Eye size={17} />
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Guidelines */}
      <section className={styles.guidelinesCard}>
        <div className={styles.guidelineIcon}>
          <FileText size={27} />
        </div>

        <div>
          <h2>Disciplinary Guidelines</h2>
          <p>
            Ensure all disciplinary matters follow WABA policies,
            procedures and applicable codes of conduct.
          </p>
        </div>

        <div className={styles.guidelineItems}>
          <div>
            <CheckCircle size={17} />
            <span>Fair Investigation</span>
          </div>

          <div>
            <CheckCircle size={17} />
            <span>Documented Evidence</span>
          </div>

          <div>
            <CheckCircle size={17} />
            <span>Committee Review</span>
          </div>

          <div>
            <CheckCircle size={17} />
            <span>Recorded Decision</span>
          </div>
        </div>
      </section>
    </main>
  );
}