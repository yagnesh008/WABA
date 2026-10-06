"use client";

import { useState } from "react";
import {
  Search,
  Users,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  FileCheck,
  Award,
  ShieldCheck,
} from "lucide-react";

import styles from "./Verification.module.css";

type VerificationStatus =
  | "Pending"
  | "Verified"
  | "Rejected";

type DocumentStatus =
  | "Submitted"
  | "Verified"
  | "Missing";

type VerificationData = {
  id: string;
  name: string;
  email: string;
  role: string;
  organisation: string;
  experience: string;
  level: string;
  state: string;
  documents: DocumentStatus;
  licence: DocumentStatus;
  certification: DocumentStatus;
  submittedDate: string;
  status: VerificationStatus;
};

const verificationData: VerificationData[] = [
  {
    id: "VER001",
    name: "Suresh Reddy",
    email: "suresh@gmail.com",
    role: "Referee",
    organisation: "WABA Telangana",
    experience: "7 Years",
    level: "National Level",
    state: "Telangana",
    documents: "Submitted",
    licence: "Submitted",
    certification: "Submitted",
    submittedDate: "12 Sep 2026",
    status: "Pending",
  },
  {
    id: "VER002",
    name: "Lakshmi Devi",
    email: "lakshmi@gmail.com",
    role: "Judge",
    organisation: "WABA Andhra Pradesh",
    experience: "5 Years",
    level: "State Level",
    state: "Andhra Pradesh",
    documents: "Submitted",
    licence: "Submitted",
    certification: "Missing",
    submittedDate: "11 Sep 2026",
    status: "Pending",
  },
  {
    id: "VER003",
    name: "Ravi Kumar",
    email: "ravi@gmail.com",
    role: "Technical Official",
    organisation: "WABA Karnataka",
    experience: "9 Years",
    level: "National Level",
    state: "Karnataka",
    documents: "Verified",
    licence: "Verified",
    certification: "Verified",
    submittedDate: "09 Sep 2026",
    status: "Verified",
  },
  {
    id: "VER004",
    name: "Anjali Sharma",
    email: "anjali@gmail.com",
    role: "Classifier",
    organisation: "WABA Maharashtra",
    experience: "6 Years",
    level: "National Level",
    state: "Maharashtra",
    documents: "Verified",
    licence: "Verified",
    certification: "Verified",
    submittedDate: "08 Sep 2026",
    status: "Verified",
  },
  {
    id: "VER005",
    name: "Ramesh Kumar",
    email: "ramesh@gmail.com",
    role: "Coach",
    organisation: "WABA Telangana",
    experience: "8 Years",
    level: "State Level",
    state: "Telangana",
    documents: "Submitted",
    licence: "Missing",
    certification: "Submitted",
    submittedDate: "07 Sep 2026",
    status: "Pending",
  },
  {
    id: "VER006",
    name: "Priya Reddy",
    email: "priya@gmail.com",
    role: "Judge",
    organisation: "WABA Karnataka",
    experience: "4 Years",
    level: "State Level",
    state: "Karnataka",
    documents: "Submitted",
    licence: "Submitted",
    certification: "Submitted",
    submittedDate: "06 Sep 2026",
    status: "Rejected",
  },
  {
    id: "VER007",
    name: "Vijay Sharma",
    email: "vijay@gmail.com",
    role: "Referee",
    organisation: "WABA Andhra Pradesh",
    experience: "10 Years",
    level: "International Level",
    state: "Andhra Pradesh",
    documents: "Submitted",
    licence: "Submitted",
    certification: "Submitted",
    submittedDate: "05 Sep 2026",
    status: "Pending",
  },
];

export default function Verification() {
  const [records, setRecords] =
    useState<VerificationData[]>(verificationData);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredRecords = records.filter((record) => {
    const searchMatch =
      record.name.toLowerCase().includes(search.toLowerCase()) ||
      record.email.toLowerCase().includes(search.toLowerCase()) ||
      record.id.toLowerCase().includes(search.toLowerCase()) ||
      record.organisation
        .toLowerCase()
        .includes(search.toLowerCase());

    const roleMatch =
      roleFilter === "All" ||
      record.role === roleFilter;

    const statusMatch =
      statusFilter === "All" ||
      record.status === statusFilter;

    return searchMatch && roleMatch && statusMatch;
  });

  const totalRecords = records.length;

  const pendingRecords = records.filter(
    (record) => record.status === "Pending"
  ).length;

  const verifiedRecords = records.filter(
    (record) => record.status === "Verified"
  ).length;

  const rejectedRecords = records.filter(
    (record) => record.status === "Rejected"
  ).length;

  const handleApprove = (id: string) => {
    setRecords((currentRecords) =>
      currentRecords.map((record) =>
        record.id === id
          ? {
              ...record,
              status: "Verified",
              documents: "Verified",
              licence: "Verified",
              certification: "Verified",
            }
          : record
      )
    );
  };

  const handleReject = (id: string) => {
    setRecords((currentRecords) =>
      currentRecords.map((record) =>
        record.id === id
          ? {
              ...record,
              status: "Rejected",
            }
          : record
      )
    );
  };

  return (
    <main className={styles.verificationPage}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <ShieldCheck size={28} />
          </div>

          <div>
            <h1>Officials Verification</h1>
            <p>
              Verify official documents, licences and
              certifications
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.cardIcon}>
            <Users size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Total Requests</span>
            <strong>{totalRecords}</strong>
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
            <strong>{pendingRecords}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div
            className={`${styles.cardIcon} ${styles.verifiedIcon}`}
          >
            <CheckCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Verified</span>
            <strong>{verifiedRecords}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div
            className={`${styles.cardIcon} ${styles.rejectedIcon}`}
          >
            <XCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Rejected</span>
            <strong>{rejectedRecords}</strong>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={19} />

          <input
            type="text"
            placeholder="Search officials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.filterSelect}
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="All">All Roles</option>
          <option value="Referee">Referee</option>
          <option value="Judge">Judge</option>
          <option value="Technical Official">
            Technical Official
          </option>
          <option value="Classifier">Classifier</option>
          <option value="Coach">Coach</option>
        </select>

        <select
          className={styles.filterSelect}
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Verified">Verified</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Verification Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Verification Requests</h2>
            <p>
              Review and verify official credentials
            </p>
          </div>

          <span className={styles.recordCount}>
            {filteredRecords.length} Records
          </span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.verificationTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Official
                </th>

                <th className={styles.tableHeading}>
                  Role
                </th>

                <th className={styles.tableHeading}>
                  Organisation
                </th>

                <th className={styles.tableHeading}>
                  Experience
                </th>

                <th className={styles.tableHeading}>
                  Documents
                </th>

                <th className={styles.tableHeading}>
                  Licence
                </th>

                <th className={styles.tableHeading}>
                  Certification
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
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <tr key={record.id}>
                    {/* Official */}
                    <td className={styles.tableCell}>
                      <div className={styles.officialInfo}>
                        <div className={styles.avatar}>
                          {record.name.charAt(0)}
                        </div>

                        <div>
                          <div className={styles.officialName}>
                            {record.name}
                          </div>

                          <div className={styles.officialEmail}>
                            {record.email}
                          </div>

                          <div className={styles.officialId}>
                            {record.id}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className={styles.tableCell}>
                      <span className={styles.role}>
                        {record.role}
                      </span>
                    </td>

                    {/* Organisation */}
                    <td className={styles.tableCell}>
                      <span className={styles.organisation}>
                        {record.organisation}
                      </span>
                    </td>

                    {/* Experience */}
                    <td className={styles.tableCell}>
                      <span className={styles.experience}>
                        {record.experience}
                      </span>
                    </td>

                    {/* Documents */}
                    <td className={styles.tableCell}>
                      <DocumentBadge
                        status={record.documents}
                      />
                    </td>

                    {/* Licence */}
                    <td className={styles.tableCell}>
                      <DocumentBadge
                        status={record.licence}
                      />
                    </td>

                    {/* Certification */}
                    <td className={styles.tableCell}>
                      <DocumentBadge
                        status={record.certification}
                      />
                    </td>

                    {/* Status */}
                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.status} ${
                          record.status === "Pending"
                            ? styles.pending
                            : record.status ===
                              "Verified"
                            ? styles.verified
                            : styles.rejected
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className={styles.tableCell}>
                      <div className={styles.actions}>
                        <button
                          className={styles.viewButton}
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>

                        {record.status === "Pending" && (
                          <>
                            <button
                              className={
                                styles.approveButton
                              }
                              onClick={() =>
                                handleApprove(record.id)
                              }
                            >
                              <CheckCircle size={15} />
                              Approve
                            </button>

                            <button
                              className={
                                styles.rejectButton
                              }
                              onClick={() =>
                                handleReject(record.id)
                              }
                            >
                              <XCircle size={15} />
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className={styles.emptyCell}
                  >
                    <div className={styles.noData}>
                      No verification records found
                    </div>
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

/* Document Badge */

function DocumentBadge({
  status,
}: {
  status: DocumentStatus;
}) {
  return (
    <span
      className={`${styles.documentBadge} ${
        status === "Verified"
          ? styles.documentVerified
          : status === "Submitted"
          ? styles.documentSubmitted
          : styles.documentMissing
      }`}
    >
      {status === "Verified" && (
        <CheckCircle size={14} />
      )}

      {status === "Submitted" && (
        <FileCheck size={14} />
      )}

      {status === "Missing" && (
        <Award size={14} />
      )}

      {status}
    </span>
  );
}