"use client";

import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  FileWarning,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Eye,
  ArrowRight,
} from "lucide-react";

import styles from "./Safeguarding.module.css";

type CaseStatus = "Open" | "Under Review" | "Resolved";

interface SafeguardingCase {
  id: string;
  title: string;
  category: string;
  reportedBy: string;
  location: string;
  date: string;
  status: CaseStatus;
  priority: "High" | "Medium" | "Low";
}

const casesData: SafeguardingCase[] = [
  {
    id: "SG001",
    title: "Athlete Welfare Concern",
    category: "Athlete Protection",
    reportedBy: "WABA Telangana",
    location: "Hyderabad",
    date: "15 Sep 2026",
    status: "Under Review",
    priority: "High",
  },
  {
    id: "SG002",
    title: "Coach Conduct Report",
    category: "Code of Conduct",
    reportedBy: "WABA Karnataka",
    location: "Bengaluru",
    date: "12 Sep 2026",
    status: "Open",
    priority: "Medium",
  },
  {
    id: "SG003",
    title: "Competition Safeguarding Issue",
    category: "Competition",
    reportedBy: "Competition Committee",
    location: "Vijayawada",
    date: "10 Sep 2026",
    status: "Resolved",
    priority: "Low",
  },
  {
    id: "SG004",
    title: "Minor Athlete Protection Report",
    category: "Child Safeguarding",
    reportedBy: "WABA Andhra Pradesh",
    location: "Guntur",
    date: "08 Sep 2026",
    status: "Under Review",
    priority: "High",
  },
  {
    id: "SG005",
    title: "Official Conduct Concern",
    category: "Code of Conduct",
    reportedBy: "Technical Committee",
    location: "New Delhi",
    date: "05 Sep 2026",
    status: "Open",
    priority: "Medium",
  },
];

const policyData = [
  {
    title: "Safeguarding Policy",
    description:
      "Rules and procedures for protecting athletes and participants.",
  },
  {
    title: "Child Protection Policy",
    description:
      "Guidelines for safeguarding children and young athletes.",
  },
  {
    title: "Code of Conduct",
    description:
      "Expected professional behaviour for athletes, coaches and officials.",
  },
];

export default function Safeguarding() {
  const totalCases = casesData.length;

  const openCases = casesData.filter(
    (item) => item.status === "Open"
  ).length;

  const underReviewCases = casesData.filter(
    (item) => item.status === "Under Review"
  ).length;

  const resolvedCases = casesData.filter(
    (item) => item.status === "Resolved"
  ).length;

  const highPriorityCases = casesData.filter(
    (item) => item.priority === "High"
  ).length;

  return (
    <main className={styles.safeguardingPage}>
      {/* PAGE HEADER */}

      <div className={styles.pageHeader}>
        <div>
          <h1>Safeguarding</h1>

          <p>
            Protect athletes, participants and members
            through effective safeguarding management
          </p>
        </div>

        <Link
          href="/safeguardingPage/cases"
          className={styles.viewCasesButton}
        >
          <FileWarning size={18} />
          Manage Cases
        </Link>
      </div>

      {/* SUMMARY CARDS */}

      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <ShieldCheck size={24} />
          </div>

          <div>
            <p>Total Cases</p>
            <h2>{totalCases}</h2>
            <span>All safeguarding cases</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <AlertTriangle size={24} />
          </div>

          <div>
            <p>Open Cases</p>
            <h2>{openCases}</h2>
            <span className={styles.openText}>
              Requires attention
            </span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <Clock size={24} />
          </div>

          <div>
            <p>Under Review</p>
            <h2>{underReviewCases}</h2>
            <span className={styles.reviewText}>
              Currently being reviewed
            </span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <CheckCircle size={24} />
          </div>

          <div>
            <p>Resolved Cases</p>
            <h2>{resolvedCases}</h2>
            <span className={styles.resolvedText}>
              Successfully resolved
            </span>
          </div>
        </div>
      </section>

      {/* SAFETY OVERVIEW */}

      <section className={styles.overviewGrid}>
        <div className={styles.overviewCard}>
          <div className={styles.overviewIcon}>
            <ShieldCheck size={25} />
          </div>

          <div className={styles.overviewContent}>
            <h3>Safeguarding & Athlete Protection</h3>

            <p>
              WABA safeguarding management helps maintain
              a safe, respectful and inclusive environment
              for athletes, coaches, officials and other
              participants.
            </p>

            <Link
              href="/safeguardingPage/policies"
              className={styles.learnLink}
            >
              View Safeguarding Policies
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className={styles.priorityCard}>
          <div className={styles.priorityIcon}>
            <AlertTriangle size={25} />
          </div>

          <div>
            <p>High Priority Cases</p>

            <h2>{highPriorityCases}</h2>

            <span>
              Cases requiring immediate attention
            </span>
          </div>
        </div>
      </section>

      {/* QUICK MANAGEMENT */}

      <section className={styles.managementSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Safeguarding Management</h2>

            <p>
              Manage safeguarding activities and
              documentation
            </p>
          </div>
        </div>

        <div className={styles.managementGrid}>
          <Link
            href="/safeguardingPage/cases"
            className={styles.managementCard}
          >
            <div className={styles.managementIcon}>
              <FileWarning size={24} />
            </div>

            <div>
              <h3>Safeguarding Cases</h3>

              <p>
                Review and manage reported safeguarding
                cases.
              </p>
            </div>

            <ArrowRight
              size={18}
              className={styles.cardArrow}
            />
          </Link>

          <Link
            href="/safeguardingPage/reports"
            className={styles.managementCard}
          >
            <div className={styles.managementIcon}>
              <FileText size={24} />
            </div>

            <div>
              <h3>Safeguarding Reports</h3>

              <p>
                View reports and safeguarding statistics.
              </p>
            </div>

            <ArrowRight
              size={18}
              className={styles.cardArrow}
            />
          </Link>

          <Link
            href="/safeguardingPage/policies"
            className={styles.managementCard}
          >
            <div className={styles.managementIcon}>
              <ShieldCheck size={24} />
            </div>

            <div>
              <h3>Policies & Guidelines</h3>

              <p>
                Manage safeguarding policies and
                guidelines.
              </p>
            </div>

            <ArrowRight
              size={18}
              className={styles.cardArrow}
            />
          </Link>
        </div>
      </section>

      {/* RECENT CASES */}

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Recent Safeguarding Cases</h2>

            <p>
              Latest safeguarding cases reported to WABA
            </p>
          </div>

          <Link
            href="/safeguardingPage/cases"
            className={styles.viewAllLink}
          >
            View All
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.casesTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Case ID
                </th>

                <th className={styles.tableHeading}>
                  Case
                </th>

                <th className={styles.tableHeading}>
                  Category
                </th>

                <th className={styles.tableHeading}>
                  Reported By
                </th>

                <th className={styles.tableHeading}>
                  Location
                </th>

                <th className={styles.tableHeading}>
                  Date
                </th>

                <th className={styles.tableHeading}>
                  Priority
                </th>

                <th className={styles.tableHeading}>
                  Status
                </th>

                <th className={styles.tableHeading}>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {casesData.map((item) => (
                <tr key={item.id}>
                  <td className={styles.tableCell}>
                    <strong>{item.id}</strong>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.caseInfo}>
                      <strong>{item.title}</strong>
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    {item.category}
                  </td>

                  <td className={styles.tableCell}>
                    {item.reportedBy}
                  </td>

                  <td className={styles.tableCell}>
                    {item.location}
                  </td>

                  <td className={styles.tableCell}>
                    {item.date}
                  </td>

                  <td className={styles.tableCell}>
                    <span
                      className={`${styles.priorityBadge} ${
                        item.priority === "High"
                          ? styles.high
                          : item.priority === "Medium"
                          ? styles.medium
                          : styles.low
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <span
                      className={`${styles.statusBadge} ${
                        item.status === "Open"
                          ? styles.open
                          : item.status ===
                            "Under Review"
                          ? styles.underReview
                          : styles.resolved
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <Link
                      href={`/safeguardingPage/cases/${item.id}`}
                      className={styles.viewButton}
                    >
                      <Eye size={15} />
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* POLICIES */}

      <section className={styles.policySection}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Safeguarding Policies</h2>

            <p>
              Important policies and guidelines
            </p>
          </div>
        </div>

        <div className={styles.policyGrid}>
          {policyData.map((policy) => (
            <div
              className={styles.policyCard}
              key={policy.title}
            >
              <div className={styles.policyIcon}>
                <FileText size={21} />
              </div>

              <div>
                <h3>{policy.title}</h3>

                <p>{policy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}