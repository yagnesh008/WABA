"use client";

import { useState } from "react";
import {
  Search,
  HeartPulse,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Edit,
  CalendarDays,
  FileText,
} from "lucide-react";

import styles from "./Medical.module.css";

type MedicalStatus = "Cleared" | "Pending" | "Expired";

type MedicalData = {
  id: string;
  athleteId: string;
  athlete: string;
  email: string;
  medicalType: string;
  doctor: string;
  examinationDate: string;
  expiryDate: string;
  certificate: string;
  status: MedicalStatus;
};

const medicalData: MedicalData[] = [
  {
    id: "MED001",
    athleteId: "ATH001",
    athlete: "Rahul Kumar",
    email: "rahul@gmail.com",
    medicalType: "Annual Medical",
    doctor: "Dr. Ramesh Kumar",
    examinationDate: "05 Jan 2026",
    expiryDate: "04 Jan 2027",
    certificate: "MED-RK-001",
    status: "Cleared",
  },
  {
    id: "MED002",
    athleteId: "ATH002",
    athlete: "Priya Sharma",
    email: "priya@gmail.com",
    medicalType: "Annual Medical",
    doctor: "Dr. Anjali Sharma",
    examinationDate: "08 Jan 2026",
    expiryDate: "07 Jan 2027",
    certificate: "MED-PS-002",
    status: "Cleared",
  },
  {
    id: "MED003",
    athleteId: "ATH003",
    athlete: "Arjun Reddy",
    email: "arjun@gmail.com",
    medicalType: "Pre-Competition",
    doctor: "Dr. Ravi Kumar",
    examinationDate: "15 Sep 2026",
    expiryDate: "15 Dec 2026",
    certificate: "MED-AR-003",
    status: "Pending",
  },
  {
    id: "MED004",
    athleteId: "ATH004",
    athlete: "Sneha Reddy",
    email: "sneha@gmail.com",
    medicalType: "Annual Medical",
    doctor: "Dr. Anjali Sharma",
    examinationDate: "20 Feb 2026",
    expiryDate: "19 Feb 2027",
    certificate: "MED-SR-004",
    status: "Cleared",
  },
  {
    id: "MED005",
    athleteId: "ATH005",
    athlete: "Vikram Singh",
    email: "vikram@gmail.com",
    medicalType: "Annual Medical",
    doctor: "Dr. Ramesh Kumar",
    examinationDate: "25 Feb 2026",
    expiryDate: "24 Feb 2027",
    certificate: "MED-VS-005",
    status: "Cleared",
  },
  {
    id: "MED006",
    athleteId: "ATH006",
    athlete: "Kavya Devi",
    email: "kavya@gmail.com",
    medicalType: "Pre-Competition",
    doctor: "Dr. Ravi Kumar",
    examinationDate: "08 Sep 2026",
    expiryDate: "08 Dec 2026",
    certificate: "MED-KD-006",
    status: "Pending",
  },
  {
    id: "MED007",
    athleteId: "ATH007",
    athlete: "Kiran Kumar",
    email: "kiran@gmail.com",
    medicalType: "Annual Medical",
    doctor: "Dr. Suresh Reddy",
    examinationDate: "05 Jan 2025",
    expiryDate: "04 Jan 2026",
    certificate: "MED-KK-007",
    status: "Expired",
  },
  {
    id: "MED008",
    athleteId: "ATH008",
    athlete: "Lakshmi Devi",
    email: "lakshmi@gmail.com",
    medicalType: "Annual Medical",
    doctor: "Dr. Anjali Sharma",
    examinationDate: "12 Mar 2026",
    expiryDate: "11 Mar 2027",
    certificate: "MED-LD-008",
    status: "Cleared",
  },
];

export default function Medical() {
  const [medicalRecords, setMedicalRecords] =
    useState<MedicalData[]>(medicalData);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const totalMedical = medicalRecords.length;

  const clearedCount = medicalRecords.filter(
    (record) => record.status === "Cleared"
  ).length;

  const pendingCount = medicalRecords.filter(
    (record) => record.status === "Pending"
  ).length;

  const expiredCount = medicalRecords.filter(
    (record) => record.status === "Expired"
  ).length;

  const filteredRecords = medicalRecords.filter((record) => {
    const matchesSearch =
      record.athlete
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      record.athleteId
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      record.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      record.id
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      record.doctor
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      record.certificate
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =
      typeFilter === "All" ||
      record.medicalType === typeFilter;

    const matchesStatus =
      statusFilter === "All" ||
      record.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const approveMedical = (id: string) => {
    setMedicalRecords((current) =>
      current.map((record) =>
        record.id === id
          ? { ...record, status: "Cleared" }
          : record
      )
    );
  };

  return (
    <main className={styles.medicalPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <HeartPulse size={25} />
          </div>

          <div>
            <h1>Medical</h1>
            <p>
              Manage athlete medical records and fitness clearances
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.cardIcon}>
            <HeartPulse size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Total Medical Records</span>
            <strong>{totalMedical}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div
            className={`${styles.cardIcon} ${styles.clearedIcon}`}
          >
            <CheckCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Cleared</span>
            <strong>{clearedCount}</strong>
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
            className={`${styles.cardIcon} ${styles.expiredIcon}`}
          >
            <XCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Expired</span>
            <strong>{expiredCount}</strong>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search athlete, ID, doctor or certificate..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.filterSelect}
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="All">All Medical Types</option>
          <option value="Annual Medical">
            Annual Medical
          </option>
          <option value="Pre-Competition">
            Pre-Competition
          </option>
        </select>

        <select
          className={styles.filterSelect}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Cleared">Cleared</option>
          <option value="Pending">Pending</option>
          <option value="Expired">Expired</option>
        </select>
      </div>

      {/* Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Medical Records</h2>
            <p>{filteredRecords.length} records found</p>
          </div>

          <div className={styles.medicalCount}>
            <FileText size={17} />
            Athlete Medical Records
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.medicalTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Medical ID
                </th>

                <th className={styles.tableHeading}>
                  Athlete
                </th>

                <th className={styles.tableHeading}>
                  Medical Type
                </th>

                <th className={styles.tableHeading}>
                  Doctor
                </th>

                <th className={styles.tableHeading}>
                  Examination Date
                </th>

                <th className={styles.tableHeading}>
                  Expiry Date
                </th>

                <th className={styles.tableHeading}>
                  Certificate
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
              {filteredRecords.map((record) => (
                <tr key={record.id}>
                  {/* Medical ID */}
                  <td className={styles.tableCell}>
                    <div className={styles.medicalInfo}>
                      <div className={styles.medicalIcon}>
                        <HeartPulse size={17} />
                      </div>

                      <div>
                        <div className={styles.medicalId}>
                          {record.id}
                        </div>

                        <div className={styles.athleteId}>
                          {record.athleteId}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Athlete */}
                  <td className={styles.tableCell}>
                    <div className={styles.athleteInfo}>
                      <div className={styles.avatar}>
                        {record.athlete.charAt(0)}
                      </div>

                      <div>
                        <div className={styles.athleteName}>
                          {record.athlete}
                        </div>

                        <div className={styles.athleteEmail}>
                          {record.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Medical Type */}
                  <td className={styles.tableCell}>
                    <span className={styles.medicalType}>
                      {record.medicalType}
                    </span>
                  </td>

                  {/* Doctor */}
                  <td className={styles.tableCell}>
                    <span className={styles.doctor}>
                      {record.doctor}
                    </span>
                  </td>

                  {/* Examination Date */}
                  <td className={styles.tableCell}>
                    <div className={styles.date}>
                      <CalendarDays size={15} />
                      {record.examinationDate}
                    </div>
                  </td>

                  {/* Expiry Date */}
                  <td className={styles.tableCell}>
                    <div className={styles.date}>
                      <CalendarDays size={15} />
                      {record.expiryDate}
                    </div>
                  </td>

                  {/* Certificate */}
                  <td className={styles.tableCell}>
                    <div className={styles.certificate}>
                      <FileText size={15} />
                      {record.certificate}
                    </div>
                  </td>

                  {/* Status */}
                  <td className={styles.tableCell}>
                    <span
                      className={`${styles.status} ${
                        record.status === "Cleared"
                          ? styles.cleared
                          : record.status === "Pending"
                          ? styles.pending
                          : styles.expired
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className={styles.tableCell}>
                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.viewButton}
                        title="View Medical Record"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        className={styles.editButton}
                        title="Edit Medical Record"
                      >
                        <Edit size={16} />
                      </button>

                      {record.status === "Pending" && (
                        <button
                          type="button"
                          className={styles.clearButton}
                          onClick={() =>
                            approveMedical(record.id)
                          }
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredRecords.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    className={styles.noData}
                  >
                    No medical records found.
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