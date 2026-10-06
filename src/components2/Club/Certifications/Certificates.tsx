"use client";

import { useState } from "react";
import styles from "./Certificates.module.css";

type Certificate = {
  id: string;
  athlete: string;
  athleteId: string;
  certificate: string;
  category: string;
  issuedDate: string;
  validUntil: string;
  status: "Active" | "Expired";
};

const certificates: Certificate[] = [
  {
    id: "CERT001",
    athlete: "Arjun Kumar",
    athleteId: "ATH001",
    certificate: "Athlete Membership Certificate",
    category: "Membership",
    issuedDate: "18 Sep 2026",
    validUntil: "17 Sep 2027",
    status: "Active",
  },
  {
    id: "CERT002",
    athlete: "Rahul Reddy",
    athleteId: "ATH002",
    certificate: "Competition Participation Certificate",
    category: "Competition",
    issuedDate: "17 Sep 2026",
    validUntil: "—",
    status: "Active",
  },
  {
    id: "CERT003",
    athlete: "Priya Sharma",
    athleteId: "ATH003",
    certificate: "Training Completion Certificate",
    category: "Training",
    issuedDate: "15 Sep 2026",
    validUntil: "—",
    status: "Active",
  },
  {
    id: "CERT004",
    athlete: "Sanjay Kumar",
    athleteId: "ATH004",
    certificate: "Athlete Membership Certificate",
    category: "Membership",
    issuedDate: "10 Sep 2026",
    validUntil: "09 Sep 2027",
    status: "Active",
  },
  {
    id: "CERT005",
    athlete: "Kiran Singh",
    athleteId: "ATH005",
    certificate: "Competition Achievement Certificate",
    category: "Achievement",
    issuedDate: "05 Sep 2026",
    validUntil: "—",
    status: "Active",
  },
  {
    id: "CERT006",
    athlete: "Vijay Kumar",
    athleteId: "ATH006",
    certificate: "Training Completion Certificate",
    category: "Training",
    issuedDate: "01 Sep 2026",
    validUntil: "—",
    status: "Expired",
  },
];

export default function Certificates() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] =
    useState("All Categories");
  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const filteredCertificates = certificates.filter((certificate) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      certificate.athlete.toLowerCase().includes(searchValue) ||
      certificate.athleteId.toLowerCase().includes(searchValue) ||
      certificate.id.toLowerCase().includes(searchValue);

    const matchesCategory =
      categoryFilter === "All Categories" ||
      certificate.category === categoryFilter;

    const matchesStatus =
      statusFilter === "All Status" ||
      certificate.status === statusFilter;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus
    );
  });

  const totalCertificates = certificates.length;

  const activeCertificates = certificates.filter(
    (certificate) => certificate.status === "Active"
  ).length;

  const expiredCertificates = certificates.filter(
    (certificate) => certificate.status === "Expired"
  ).length;

  return (
    <main className={styles.page}>
      {/* =========================
          PAGE HEADER
      ========================= */}
      <div className={styles.header}>
        <div>
          <h1>Certificates</h1>
          <p>
            Manage athlete certificates and certification records.
          </p>
        </div>

        <button
          type="button"
          className={styles.addButton}
        >
          + Issue Certificate
        </button>
      </div>

      {/* =========================
          SUMMARY CARDS
      ========================= */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.icon}>📜</div>

          <div>
            <span>Total Certificates</span>
            <h2>{totalCertificates}</h2>
            <small>All issued certificates</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.icon}>✓</div>

          <div>
            <span>Active</span>
            <h2>{activeCertificates}</h2>
            <small>Currently valid</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.icon}>⏳</div>

          <div>
            <span>Expiring Soon</span>
            <h2>0</h2>
            <small>Within 30 days</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.icon}>!</div>

          <div>
            <span>Expired</span>
            <h2>{expiredCertificates}</h2>
            <small>Need renewal</small>
          </div>
        </div>
      </div>

      {/* =========================
          FILTERS
      ========================= */}
      <div className={styles.filterCard}>
        <div className={styles.searchBox}>
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search athlete or certificate ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(e.target.value)
          }
        >
          <option>All Categories</option>
          <option>Membership</option>
          <option>Competition</option>
          <option>Training</option>
          <option>Achievement</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Expired</option>
        </select>
      </div>

      {/* =========================
          CERTIFICATE TABLE
      ========================= */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h3>Certificate Records</h3>

            <p>
              Showing {filteredCertificates.length}{" "}
              certificate
              {filteredCertificates.length !== 1
                ? "s"
                : ""}
            </p>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Certificate ID</th>
                <th>Athlete</th>
                <th>Certificate</th>
                <th>Category</th>
                <th>Issued Date</th>
                <th>Valid Until</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredCertificates.length > 0 ? (
                filteredCertificates.map(
                  (certificate) => (
                    <tr key={certificate.id}>
                      {/* Certificate ID */}
                      <td>
                        <strong>
                          {certificate.id}
                        </strong>
                      </td>

                      {/* Athlete */}
                      <td>
                        <div className={styles.athlete}>
                          <div className={styles.avatar}>
                            {certificate.athlete.charAt(0)}
                          </div>

                          <div>
                            <strong>
                              {certificate.athlete}
                            </strong>

                            <span>
                              {certificate.athleteId}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Certificate */}
                      <td>
                        {certificate.certificate}
                      </td>

                      {/* Category */}
                      <td>
                        <span
                          className={styles.category}
                        >
                          {certificate.category}
                        </span>
                      </td>

                      {/* Issued Date */}
                      <td>
                        {certificate.issuedDate}
                      </td>

                      {/* Valid Until */}
                      <td>
                        {certificate.validUntil}
                      </td>

                      {/* Status */}
                      <td>
                        <span
                          className={`${styles.status} ${
                            certificate.status ===
                            "Active"
                              ? styles.active
                              : styles.expired
                          }`}
                        >
                          {certificate.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td>
                        <div className={styles.actions}>
                          <button
                            type="button"
                            title="View certificate"
                          >
                            View
                          </button>

                          <button
                            type="button"
                            title="Download certificate"
                          >
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className={styles.noData}
                  >
                    No certificates found
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