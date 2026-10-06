"use client";

import Link from "next/link";
import styles from "./Medical.module.css";

const medicalRecords = [
  {
    id: "MED-2026-001",
    type: "Annual Medical Assessment",
    date: "10 Sep 2026",
    doctor: "Dr. Suresh Kumar",
    location: "Hyderabad",
    status: "Valid",
    expiry: "09 Sep 2027",
  },
  {
    id: "MED-2025-001",
    type: "Annual Medical Assessment",
    date: "12 Sep 2025",
    doctor: "Dr. Rajesh Kumar",
    location: "Hyderabad",
    status: "Expired",
    expiry: "11 Sep 2026",
  },
  {
    id: "MED-2024-001",
    type: "Medical Assessment",
    date: "15 Sep 2024",
    doctor: "Dr. Ravi Kumar",
    location: "Hyderabad",
    status: "Expired",
    expiry: "14 Sep 2025",
  },
];

export default function Medical() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <Link href="/Athlete/dashboardPage" className={styles.backLink}>
            ← Back to Dashboard
          </Link>

          <h1>Medical</h1>
          <p>
            Manage your medical assessments, certificates and health
            verification records.
          </p>
        </div>

        <div className={styles.headerBadge}>
          Medical Records
        </div>
      </div>

      {/* Medical Status */}
      <section className={styles.statusBanner}>
        <div className={styles.statusIcon}>✓</div>

        <div>
          <span className={styles.statusLabel}>Medical Status</span>
          <h2>Medically Cleared</h2>
          <p>
            Your current medical assessment is valid and you are eligible to
            participate in competitions.
          </p>
        </div>

        <div className={styles.validBox}>
          <span>Valid Until</span>
          <strong>09 Sep 2027</strong>
        </div>
      </section>

      {/* Summary Cards */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>✓</div>
          <div>
            <span>Current Status</span>
            <strong>Cleared</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>📋</div>
          <div>
            <span>Total Assessments</span>
            <strong>3</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>📅</div>
          <div>
            <span>Next Review</span>
            <strong>09 Sep 2027</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>🏥</div>
          <div>
            <span>Medical Centre</span>
            <strong>Hyderabad</strong>
          </div>
        </div>
      </section>

      {/* Current Medical Information */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Current Medical Information</h2>
            <p>Your latest verified medical assessment.</p>
          </div>

          <span className={styles.validBadge}>Valid</span>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <span>Athlete Name</span>
            <strong>Arjun Kumar</strong>
          </div>

          <div className={styles.detailItem}>
            <span>Athlete ID</span>
            <strong>ATH001</strong>
          </div>

          <div className={styles.detailItem}>
            <span>Assessment Type</span>
            <strong>Annual Medical Assessment</strong>
          </div>

          <div className={styles.detailItem}>
            <span>Assessment Date</span>
            <strong>10 Sep 2026</strong>
          </div>

          <div className={styles.detailItem}>
            <span>Valid Until</span>
            <strong>09 Sep 2027</strong>
          </div>

          <div className={styles.detailItem}>
            <span>Medical Status</span>
            <strong className={styles.greenText}>Medically Cleared</strong>
          </div>

          <div className={styles.detailItem}>
            <span>Medical Centre</span>
            <strong>WABA Medical Centre</strong>
          </div>

          <div className={styles.detailItem}>
            <span>Location</span>
            <strong>Hyderabad, Telangana</strong>
          </div>
        </div>
      </section>

      {/* Medical Certificate */}
      <section className={styles.certificateCard}>
        <div className={styles.certificateIcon}>📄</div>

        <div className={styles.certificateContent}>
          <span>Latest Medical Certificate</span>
          <h3>Medical Clearance Certificate</h3>
          <p>
            Certificate ID: <strong>MED-CERT-2026-001</strong>
          </p>
          <p>
            Issued on 10 Sep 2026 · Valid until 09 Sep 2027
          </p>
        </div>

        <button
          className={styles.downloadButton}
          onClick={() => alert("Medical certificate download started.")}
        >
          ↓ Download
        </button>
      </section>

      {/* Medical History */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Medical History</h2>
            <p>Previous medical assessments and clearance records.</p>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Record ID</th>
                <th>Assessment</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Location</th>
                <th>Expiry</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {medicalRecords.map((record) => (
                <tr key={record.id}>
                  <td>
                    <strong>{record.id}</strong>
                  </td>

                  <td>{record.type}</td>

                  <td>{record.date}</td>

                  <td>{record.doctor}</td>

                  <td>{record.location}</td>

                  <td>{record.expiry}</td>

                  <td>
                    <span
                      className={
                        record.status === "Valid"
                          ? styles.statusValid
                          : styles.statusExpired
                      }
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Important Information */}
      <section className={styles.infoBox}>
        <div className={styles.infoIcon}>ℹ</div>

        <div>
          <h3>Important Medical Information</h3>

          <ul>
            <li>
              Athletes must maintain a valid medical clearance before
              participating in competitions.
            </li>

            <li>
              Medical assessments should be renewed before the current
              certificate expires.
            </li>

            <li>
              Contact the WABA administration if your medical information
              needs to be updated.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}