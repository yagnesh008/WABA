"use client";

import { useState } from "react";
import {
  Search,
  Accessibility,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Edit,
  CalendarDays,
  UserCheck,
} from "lucide-react";

import styles from "./Classification.module.css";

type ClassificationStatus = "Classified" | "Pending" | "Review Required";

type ClassificationData = {
  id: string;
  athleteId: string;
  athlete: string;
  email: string;
  classification: string;
  classifier: string;
  classificationDate: string;
  reviewDate: string;
  status: ClassificationStatus;
};

const classificationData: ClassificationData[] = [
  {
    id: "CLS001",
    athleteId: "ATH001",
    athlete: "Rahul Kumar",
    email: "rahul@gmail.com",
    classification: "WH1",
    classifier: "Anjali Sharma",
    classificationDate: "10 Jan 2026",
    reviewDate: "10 Jan 2027",
    status: "Classified",
  },
  {
    id: "CLS002",
    athleteId: "ATH002",
    athlete: "Priya Sharma",
    email: "priya@gmail.com",
    classification: "WH2",
    classifier: "Anjali Sharma",
    classificationDate: "12 Jan 2026",
    reviewDate: "12 Jan 2027",
    status: "Classified",
  },
  {
    id: "CLS003",
    athleteId: "ATH003",
    athlete: "Arjun Reddy",
    email: "arjun@gmail.com",
    classification: "WH3",
    classifier: "Ravi Kumar",
    classificationDate: "15 Sep 2026",
    reviewDate: "15 Sep 2027",
    status: "Pending",
  },
  {
    id: "CLS004",
    athleteId: "ATH004",
    athlete: "Sneha Reddy",
    email: "sneha@gmail.com",
    classification: "WH2",
    classifier: "Anjali Sharma",
    classificationDate: "20 Feb 2026",
    reviewDate: "20 Feb 2027",
    status: "Classified",
  },
  {
    id: "CLS005",
    athleteId: "ATH005",
    athlete: "Vikram Singh",
    email: "vikram@gmail.com",
    classification: "WH1",
    classifier: "Suresh Reddy",
    classificationDate: "25 Feb 2026",
    reviewDate: "25 Feb 2027",
    status: "Classified",
  },
  {
    id: "CLS006",
    athleteId: "ATH006",
    athlete: "Kavya Devi",
    email: "kavya@gmail.com",
    classification: "WH3",
    classifier: "Ravi Kumar",
    classificationDate: "08 Sep 2026",
    reviewDate: "08 Sep 2027",
    status: "Pending",
  },
  {
    id: "CLS007",
    athleteId: "ATH007",
    athlete: "Kiran Kumar",
    email: "kiran@gmail.com",
    classification: "WH2",
    classifier: "Suresh Reddy",
    classificationDate: "05 Jan 2025",
    reviewDate: "05 Jan 2026",
    status: "Review Required",
  },
  {
    id: "CLS008",
    athleteId: "ATH008",
    athlete: "Lakshmi Devi",
    email: "lakshmi@gmail.com",
    classification: "WH1",
    classifier: "Anjali Sharma",
    classificationDate: "12 Mar 2026",
    reviewDate: "12 Mar 2027",
    status: "Classified",
  },
];

export default function Classification() {
  const [classifications, setClassifications] =
    useState<ClassificationData[]>(classificationData);

  const [search, setSearch] = useState("");
  const [classificationFilter, setClassificationFilter] =
    useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const totalClassifications = classifications.length;

  const classifiedCount = classifications.filter(
    (item) => item.status === "Classified"
  ).length;

  const pendingCount = classifications.filter(
    (item) => item.status === "Pending"
  ).length;

  const reviewRequiredCount = classifications.filter(
    (item) => item.status === "Review Required"
  ).length;

  const filteredClassifications = classifications.filter((item) => {
    const matchesSearch =
      item.athlete.toLowerCase().includes(search.toLowerCase()) ||
      item.athleteId.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.classifier.toLowerCase().includes(search.toLowerCase());

    const matchesClassification =
      classificationFilter === "All" ||
      item.classification === classificationFilter;

    const matchesStatus =
      statusFilter === "All" ||
      item.status === statusFilter;

    return (
      matchesSearch &&
      matchesClassification &&
      matchesStatus
    );
  });

  const approveClassification = (id: string) => {
    setClassifications((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, status: "Classified" }
          : item
      )
    );
  };

  const markForReview = (id: string) => {
    setClassifications((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, status: "Review Required" }
          : item
      )
    );
  };

  return (
    <main className={styles.classificationPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <Accessibility size={25} />
          </div>

          <div>
            <h1>Classification</h1>
            <p>
              Manage athlete classification and classification reviews
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.cardIcon}>
            <Accessibility size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Total Classifications</span>
            <strong>{totalClassifications}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div
            className={`${styles.cardIcon} ${styles.classifiedIcon}`}
          >
            <CheckCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Classified</span>
            <strong>{classifiedCount}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div
            className={`${styles.cardIcon} ${styles.pendingIcon}`}
          >
            <Clock size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Pending</span>
            <strong>{pendingCount}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div
            className={`${styles.cardIcon} ${styles.reviewIcon}`}
          >
            <XCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Review Required</span>
            <strong>{reviewRequiredCount}</strong>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search athlete, ID, email or classifier..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.filterSelect}
          value={classificationFilter}
          onChange={(e) =>
            setClassificationFilter(e.target.value)
          }
        >
          <option value="All">All Classifications</option>
          <option value="WH1">WH1</option>
          <option value="WH2">WH2</option>
          <option value="WH3">WH3</option>
        </select>

        <select
          className={styles.filterSelect}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Classified">Classified</option>
          <option value="Pending">Pending</option>
          <option value="Review Required">
            Review Required
          </option>
        </select>
      </div>

      {/* Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Classification List</h2>
            <p>
              {filteredClassifications.length} records found
            </p>
          </div>

          <div className={styles.classificationCount}>
            <UserCheck size={17} />
            Athlete Classification
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.classificationTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Classification
                </th>

                <th className={styles.tableHeading}>
                  Athlete
                </th>

                <th className={styles.tableHeading}>
                  Class
                </th>

                <th className={styles.tableHeading}>
                  Classifier
                </th>

                <th className={styles.tableHeading}>
                  Classification Date
                </th>

                <th className={styles.tableHeading}>
                  Review Date
                </th>

                <th className={styles.tableHeading}>
                  Status
                </th>

                <th className={styles.tableHeading}>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredClassifications.map((item) => (
                <tr key={item.id}>
                  <td className={styles.tableCell}>
                    <div className={styles.classificationInfo}>
                      <div className={styles.classificationIcon}>
                        <Accessibility size={17} />
                      </div>

                      <div>
                        <div className={styles.classificationId}>
                          {item.id}
                        </div>

                        <div className={styles.athleteId}>
                          {item.athleteId}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.athleteInfo}>
                      <div className={styles.avatar}>
                        {item.athlete.charAt(0)}
                      </div>

                      <div>
                        <div className={styles.athleteName}>
                          {item.athlete}
                        </div>

                        <div className={styles.athleteEmail}>
                          {item.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <span className={styles.classificationBadge}>
                      {item.classification}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.classifier}>
                      <UserCheck size={15} />
                      {item.classifier}
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.date}>
                      <CalendarDays size={15} />
                      {item.classificationDate}
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.date}>
                      <CalendarDays size={15} />
                      {item.reviewDate}
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <span
                      className={`${styles.status} ${
                        item.status === "Classified"
                          ? styles.classified
                          : item.status === "Pending"
                          ? styles.pending
                          : styles.reviewRequired
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.viewButton}
                        title="View Classification"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        className={styles.editButton}
                        title="Edit Classification"
                      >
                        <Edit size={16} />
                      </button>

                      {item.status === "Pending" && (
                        <button
                          type="button"
                          className={styles.approveButton}
                          onClick={() =>
                            approveClassification(item.id)
                          }
                        >
                          Approve
                        </button>
                      )}

                      {item.status === "Classified" && (
                        <button
                          type="button"
                          className={styles.reviewButton}
                          onClick={() =>
                            markForReview(item.id)
                          }
                        >
                          Review
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredClassifications.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className={styles.noData}
                  >
                    No classification records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}