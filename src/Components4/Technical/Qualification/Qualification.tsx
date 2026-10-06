"use client";

import { useState } from "react";
import {
  Award,
  CheckCircle2,
  Clock3,
  FileText,
  CalendarDays,
  ShieldCheck,
  Eye,
  Download,
} from "lucide-react";
import styles from "./Qualification.module.css";

type QualificationStatus = "Verified" | "Pending" | "Expired";

interface Qualification {
  id: number;
  title: string;
  category: string;
  certificateId: string;
  issuedDate: string;
  expiryDate: string;
  status: QualificationStatus;
  description: string;
}

const qualifications: Qualification[] = [
  {
    id: 1,
    title: "WABA Technical Official Level 1",
    category: "Technical Official",
    certificateId: "WABA-TO-2021-001",
    issuedDate: "12 March 2021",
    expiryDate: "12 March 2027",
    status: "Verified",
    description:
      "Basic technical official qualification for WABA competitions and events.",
  },
  {
    id: 2,
    title: "Referee Certification",
    category: "Referee",
    certificateId: "WABA-REF-2022-014",
    issuedDate: "20 June 2022",
    expiryDate: "20 June 2027",
    status: "Verified",
    description:
      "Certification authorizing the official to perform refereeing duties.",
  },
  {
    id: 3,
    title: "Classification Certification",
    category: "Classifier",
    certificateId: "WABA-CLS-2024-009",
    issuedDate: "08 January 2024",
    expiryDate: "08 January 2027",
    status: "Verified",
    description:
      "Qualification for athlete classification and classification sessions.",
  },
  {
    id: 4,
    title: "Judging Certification",
    category: "Judge",
    certificateId: "WABA-JDG-2025-018",
    issuedDate: "15 February 2025",
    expiryDate: "15 February 2028",
    status: "Verified",
    description:
      "Certification for judging duties during WABA boxing competitions.",
  },
];

export default function Qualification() {
  const [selectedQualification, setSelectedQualification] =
    useState<Qualification | null>(null);

  const verifiedCount = qualifications.filter(
    (item) => item.status === "Verified"
  ).length;

  const pendingCount = qualifications.filter(
    (item) => item.status === "Pending"
  ).length;

  const expiredCount = qualifications.filter(
    (item) => item.status === "Expired"
  ).length;

  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.pageLabel}>TECHNICAL OFFICIAL</span>
          <h1>Qualifications</h1>
          <p>
            View and manage your WABA technical qualifications and
            certifications.
          </p>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Award size={22} />
          </div>

          <div>
            <span>Total Qualifications</span>
            <strong>{qualifications.length}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Verified</span>
            <strong>{verifiedCount}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Clock3 size={22} />
          </div>

          <div>
            <span>Pending</span>
            <strong>{pendingCount}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.red}`}>
            <ShieldCheck size={22} />
          </div>

          <div>
            <span>Expired</span>
            <strong>{expiredCount}</strong>
          </div>
        </div>
      </section>

      {/* QUALIFICATION LIST */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>My Qualifications</h2>
            <p>Your registered WABA certifications and qualifications.</p>
          </div>
        </div>

        <div className={styles.qualificationGrid}>
          {qualifications.map((qualification) => (
            <div className={styles.qualificationCard} key={qualification.id}>
              {/* CARD TOP */}
              <div className={styles.cardTop}>
                <div className={styles.qualificationIcon}>
                  <Award size={25} />
                </div>

                <span
                  className={`${styles.status} ${
                    qualification.status === "Verified"
                      ? styles.verified
                      : qualification.status === "Pending"
                      ? styles.pending
                      : styles.expired
                  }`}
                >
                  {qualification.status === "Verified" && (
                    <CheckCircle2 size={14} />
                  )}

                  {qualification.status === "Pending" && (
                    <Clock3 size={14} />
                  )}

                  {qualification.status === "Expired" && (
                    <ShieldCheck size={14} />
                  )}

                  {qualification.status}
                </span>
              </div>

              {/* TITLE */}
              <div className={styles.cardContent}>
                <span className={styles.category}>
                  {qualification.category}
                </span>

                <h3>{qualification.title}</h3>

                <p>{qualification.description}</p>
              </div>

              {/* DETAILS */}
              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <FileText size={16} />

                  <div>
                    <span>Certificate ID</span>
                    <strong>{qualification.certificateId}</strong>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <CalendarDays size={16} />

                  <div>
                    <span>Issued Date</span>
                    <strong>{qualification.issuedDate}</strong>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <CalendarDays size={16} />

                  <div>
                    <span>Expiry Date</span>
                    <strong>{qualification.expiryDate}</strong>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div className={styles.cardActions}>
                <button
                  className={styles.viewButton}
                  onClick={() => setSelectedQualification(qualification)}
                >
                  <Eye size={17} />
                  View Details
                </button>

                <button className={styles.downloadButton}>
                  <Download size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUALIFICATION VERIFICATION */}
      <section className={styles.verificationCard}>
        <div className={styles.verificationIcon}>
          <ShieldCheck size={27} />
        </div>

        <div className={styles.verificationContent}>
          <h3>Qualification Verification</h3>

          <p>
            Your technical qualifications are verified by WABA. Keep your
            certificates and official information up to date.
          </p>
        </div>

        <div className={styles.verifiedBadge}>
          <CheckCircle2 size={17} />
          Verified
        </div>
      </section>

      {/* MODAL */}
      {selectedQualification && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedQualification(null)}
        >
          <div
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.pageLabel}>QUALIFICATION</span>
                <h2>{selectedQualification.title}</h2>
              </div>

              <button
                className={styles.closeButton}
                onClick={() => setSelectedQualification(null)}
              >
                ×
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalStatus}>
                <CheckCircle2 size={18} />
                {selectedQualification.status}
              </div>

              <div className={styles.modalGrid}>
                <div>
                  <span>Category</span>
                  <strong>{selectedQualification.category}</strong>
                </div>

                <div>
                  <span>Certificate ID</span>
                  <strong>{selectedQualification.certificateId}</strong>
                </div>

                <div>
                  <span>Issued Date</span>
                  <strong>{selectedQualification.issuedDate}</strong>
                </div>

                <div>
                  <span>Expiry Date</span>
                  <strong>{selectedQualification.expiryDate}</strong>
                </div>
              </div>

              <div className={styles.modalDescription}>
                <span>Description</span>
                <p>{selectedQualification.description}</p>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.cancelButton}
                onClick={() => setSelectedQualification(null)}
              >
                Close
              </button>

              <button className={styles.modalDownload}>
                <Download size={17} />
                Download Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}