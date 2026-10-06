"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  Search,
  Download,
  Filter,
} from "lucide-react";

import styles from "./Reports.module.css";

type ReportRecord = {
  id: string;
  caseTitle: string;
  category: string;
  reportedBy: string;
  date: string;
  priority: string;
  status: string;
  action: string;
};

const reportData: ReportRecord[] = [
  {
    id: "DC001",
    caseTitle: "Athlete Code of Conduct Violation",
    category: "Athlete Conduct",
    reportedBy: "WABA Telangana",
    date: "15 Sep 2026",
    priority: "High",
    status: "Under Review",
    action: "Investigation",
  },
  {
    id: "DC002",
    caseTitle: "Coach Misconduct Complaint",
    category: "Coach Conduct",
    reportedBy: "WABA Karnataka",
    date: "12 Sep 2026",
    priority: "Medium",
    status: "Open",
    action: "Pending Review",
  },
  {
    id: "DC003",
    caseTitle: "Competition Rule Violation",
    category: "Competition",
    reportedBy: "Competition Committee",
    date: "10 Sep 2026",
    priority: "Low",
    status: "Resolved",
    action: "Warning Issued",
  },
  {
    id: "DC004",
    caseTitle: "Official Conduct Complaint",
    category: "Official Conduct",
    reportedBy: "Technical Committee",
    date: "08 Sep 2026",
    priority: "High",
    status: "Under Review",
    action: "Committee Review",
  },
  {
    id: "DC005",
    caseTitle: "Membership Rule Violation",
    category: "Membership",
    reportedBy: "WABA Andhra Pradesh",
    date: "05 Sep 2026",
    priority: "Medium",
    status: "Open",
    action: "Investigation",
  },
  {
    id: "DC006",
    caseTitle: "Unsportsmanlike Behaviour",
    category: "Athlete Conduct",
    reportedBy: "WABA Maharashtra",
    date: "02 Sep 2026",
    priority: "Low",
    status: "Resolved",
    action: "Warning Issued",
  },
  {
    id: "DC007",
    caseTitle: "Coach Code Violation",
    category: "Coach Conduct",
    reportedBy: "WABA Tamil Nadu",
    date: "30 Aug 2026",
    priority: "High",
    status: "Resolved",
    action: "Suspension",
  },
  {
    id: "DC008",
    caseTitle: "Competition Behaviour Complaint",
    category: "Competition",
    reportedBy: "Competition Committee",
    date: "27 Aug 2026",
    priority: "Medium",
    status: "Under Review",
    action: "Hearing Scheduled",
  },
];

const monthlyData = [
  { month: "Apr", cases: 3 },
  { month: "May", cases: 5 },
  { month: "Jun", cases: 4 },
  { month: "Jul", cases: 7 },
  { month: "Aug", cases: 6 },
  { month: "Sep", cases: 5 },
];

const categoryData = [
  { name: "Athlete Conduct", value: 8 },
  { name: "Coach Conduct", value: 5 },
  { name: "Competition", value: 4 },
  { name: "Official Conduct", value: 4 },
  { name: "Membership", value: 3 },
];

export default function Reports() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredReports = useMemo(() => {
    return reportData.filter((item) => {
      const searchMatch =
        item.id.toLowerCase().includes(search.toLowerCase()) ||
        item.caseTitle.toLowerCase().includes(search.toLowerCase()) ||
        item.reportedBy.toLowerCase().includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All" || item.status === statusFilter;

      const priorityMatch =
        priorityFilter === "All" || item.priority === priorityFilter;

      const categoryMatch =
        categoryFilter === "All" || item.category === categoryFilter;

      return (
        searchMatch &&
        statusMatch &&
        priorityMatch &&
        categoryMatch
      );
    });
  }, [search, statusFilter, priorityFilter, categoryFilter]);

  const totalCases = 24;
  const resolvedCases = 10;
  const openCases = 8;
  const reviewCases = 6;

  const maxMonthlyCases = Math.max(
    ...monthlyData.map((item) => item.cases)
  );

  return (
    <main className={styles.reportsPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Disciplinary Reports</h1>
          <p>
            Review disciplinary statistics, case trends and detailed reports.
          </p>
        </div>

        <button className={styles.exportButton}>
          <Download size={17} />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.blueIcon}`}>
            <FileText size={24} />
          </div>

          <div>
            <span>Total Cases</span>
            <h2>{totalCases}</h2>
            <small>All reported cases</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.orangeIcon}`}>
            <AlertTriangle size={24} />
          </div>

          <div>
            <span>Open Cases</span>
            <h2>{openCases}</h2>
            <small>Currently open</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.purpleIcon}`}>
            <Clock size={24} />
          </div>

          <div>
            <span>Under Review</span>
            <h2>{reviewCases}</h2>
            <small>Being investigated</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.greenIcon}`}>
            <CheckCircle size={24} />
          </div>

          <div>
            <span>Resolved</span>
            <h2>{resolvedCases}</h2>
            <small>Successfully closed</small>
          </div>
        </div>
      </div>

      {/* Report Overview */}
      <div className={styles.reportGrid}>
        {/* Monthly Cases */}
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2>Monthly Case Report</h2>
              <p>Number of disciplinary cases reported each month</p>
            </div>

            <BarChart3 size={23} />
          </div>

          <div className={styles.chartArea}>
            {monthlyData.map((item) => (
              <div className={styles.chartColumn} key={item.month}>
                <div className={styles.barContainer}>
                  <div
                    className={styles.bar}
                    style={{
                      height: `${(item.cases / maxMonthlyCases) * 100}%`,
                    }}
                  >
                    <span>{item.cases}</span>
                  </div>
                </div>

                <small>{item.month}</small>
              </div>
            ))}
          </div>
        </section>

        {/* Category Report */}
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2>Cases by Category</h2>
              <p>Distribution of disciplinary cases</p>
            </div>

            <FileText size={23} />
          </div>

          <div className={styles.categoryList}>
            {categoryData.map((item) => (
              <div className={styles.categoryItem} key={item.name}>
                <div className={styles.categoryTop}>
                  <span>{item.name}</span>
                  <strong>{item.value}</strong>
                </div>

                <div className={styles.progressBackground}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: `${(item.value / 8) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Status / Priority */}
      <div className={styles.statusGrid}>
        <div className={styles.miniCard}>
          <h3>Cases by Status</h3>

          <div className={styles.statusRows}>
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

        <div className={styles.miniCard}>
          <h3>Cases by Priority</h3>

          <div className={styles.statusRows}>
            <div>
              <span>High Priority</span>
              <strong className={styles.highText}>7</strong>
            </div>

            <div>
              <span>Medium Priority</span>
              <strong className={styles.mediumText}>11</strong>
            </div>

            <div>
              <span>Low Priority</span>
              <strong className={styles.lowText}>6</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Detailed Disciplinary Reports</h2>
            <p>Search and filter disciplinary case records</p>
          </div>
        </div>

        <div className={styles.filterArea}>
          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search case ID, case title or reported by..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.filterBox}>
            <Filter size={16} />

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Athlete Conduct">
                Athlete Conduct
              </option>
              <option value="Coach Conduct">Coach Conduct</option>
              <option value="Competition">Competition</option>
              <option value="Official Conduct">
                Official Conduct
              </option>
              <option value="Membership">Membership</option>
            </select>
          </div>

          <select
            className={styles.selectFilter}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Open">Open</option>
            <option value="Under Review">Under Review</option>
            <option value="Resolved">Resolved</option>
          </select>

          <select
            className={styles.selectFilter}
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="All">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.reportTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>Case ID</th>
                <th className={styles.tableHeading}>Case</th>
                <th className={styles.tableHeading}>Category</th>
                <th className={styles.tableHeading}>Reported By</th>
                <th className={styles.tableHeading}>Date</th>
                <th className={styles.tableHeading}>Priority</th>
                <th className={styles.tableHeading}>Status</th>
                <th className={styles.tableHeading}>Action Taken</th>
              </tr>
            </thead>

            <tbody>
              {filteredReports.length > 0 ? (
                filteredReports.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.tableCell}>
                      <strong>{item.id}</strong>
                    </td>

                    <td className={styles.tableCell}>
                      <span className={styles.caseTitle}>
                        {item.caseTitle}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      {item.category}
                    </td>

                    <td className={styles.tableCell}>
                      {item.reportedBy}
                    </td>

                    <td className={styles.tableCell}>
                      {item.date}
                    </td>

                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.badge} ${
                          styles[item.priority.toLowerCase()]
                        }`}
                      >
                        {item.priority}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.badge} ${
                          styles[
                            item.status
                              .toLowerCase()
                              .replaceAll(" ", "")
                          ]
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      {item.action}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className={styles.noResults}
                  >
                    No disciplinary reports found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.resultCount}>
          Showing <strong>{filteredReports.length}</strong> of{" "}
          <strong>{reportData.length}</strong> report records
        </div>
      </section>
    </main>
  );
}