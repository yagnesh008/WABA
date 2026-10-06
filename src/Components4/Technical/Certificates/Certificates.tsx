"use client";

import { useState } from "react";
import {
  Award,
  Search,
  Eye,
  Download,
  CheckCircle2,
  CalendarDays,
  X,
  FileText,
  UserCheck,
} from "lucide-react";

import styles from "./Certificates.module.css";

interface Certificate {
  id: number;
  certificateId: string;
  title: string;
  type: string;
  issuedDate: string;
  validUntil: string;
  issuedFor: string;
  status: "Verified" | "Active" | "Expired";
}

const certificates: Certificate[] = [
  {
    id: 1,
    certificateId: "CERT-TEC-001",
    title: "WABA Technical Official Level 1",
    type: "Technical Official Certification",
    issuedDate: "12 March 2021",
    validUntil: "11 March 2027",
    issuedFor: "Technical Official",
    status: "Verified",
  },
  {
    id: 2,
    certificateId: "CERT-REF-002",
    title: "Referee Certification",
    type: "Referee Certification",
    issuedDate: "20 June 2022",
    validUntil: "19 June 2027",
    issuedFor: "Referee",
    status: "Active",
  },
  {
    id: 3,
    certificateId: "CERT-CLS-003",
    title: "Classification Certification",
    type: "Classification Certification",
    issuedDate: "08 January 2024",
    validUntil: "07 January 2028",
    issuedFor: "Classifier",
    status: "Active",
  },
  {
    id: 4,
    certificateId: "CERT-JDG-004",
    title: "WABA Judge Certification",
    type: "Judge Certification",
    issuedDate: "15 April 2024",
    validUntil: "14 April 2028",
    issuedFor: "Judge",
    status: "Verified",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [search, setSearch] = useState("");

  const filteredCertificates = certificates.filter((certificate) => {
    const value = search.toLowerCase().trim();

    return (
      certificate.title.toLowerCase().includes(value) ||
      certificate.certificateId.toLowerCase().includes(value) ||
      certificate.type.toLowerCase().includes(value) ||
      certificate.issuedFor.toLowerCase().includes(value)
    );
  });

  const verifiedCount = certificates.filter(
    (item) => item.status === "Verified"
  ).length;

  const activeCount = certificates.filter(
    (item) => item.status === "Active"
  ).length;

  return (
    <main className={styles.page}>
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <Award size={30} />
            Certificates
          </h1>

          <p>
            View and manage your technical qualifications and
            certification records.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <CheckCircle2 size={17} />
          <span>{certificates.length} Certificates</span>
        </div>
      </section>

      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Award size={21} />
          </div>

          <div>
            <strong>{certificates.length}</strong>
            <span>Total Certificates</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <strong>{verifiedCount}</strong>
            <span>Verified</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <UserCheck size={21} />
          </div>

          <div>
            <strong>{activeCount}</strong>
            <span>Active Certifications</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH / CERTIFICATES
      ===================================================== */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>
              CERTIFICATION RECORDS
            </span>

            <h2>My Certificates</h2>

            <p>
              Official certificates and qualifications associated
              with your WABA technical profile.
            </p>
          </div>

          <div className={styles.searchBox}>
            <Search size={17} />

            <input
              type="text"
              placeholder="Search certificate..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* CERTIFICATE LIST */}

        <div className={styles.certificateList}>
          {filteredCertificates.map((certificate) => (
            <div
              className={styles.certificateCard}
              key={certificate.id}
            >
              {/* ICON */}

              <div className={styles.certificateIcon}>
                <Award size={25} />
              </div>

              {/* MAIN INFORMATION */}

              <div className={styles.certificateInfo}>
                <div className={styles.titleRow}>
                  <div>
                    <span className={styles.certificateId}>
                      {certificate.certificateId}
                    </span>

                    <h3>{certificate.title}</h3>
                  </div>

                  <span
                    className={
                      certificate.status === "Verified"
                        ? styles.verified
                        : certificate.status === "Active"
                        ? styles.active
                        : styles.expired
                    }
                  >
                    <CheckCircle2 size={13} />
                    {certificate.status}
                  </span>
                </div>

                <p>{certificate.type}</p>

                <div className={styles.details}>
                  <span>
                    <CalendarDays size={14} />
                    Issued: {certificate.issuedDate}
                  </span>

                  <span>
                    <CalendarDays size={14} />
                    Valid Until: {certificate.validUntil}
                  </span>

                  <span>
                    <UserCheck size={14} />
                    {certificate.issuedFor}
                  </span>
                </div>
              </div>

              {/* ACTIONS */}

              <div className={styles.actions}>
                <button
                  type="button"
                  className={styles.viewButton}
                  onClick={() => setSelected(certificate)}
                >
                  <Eye size={16} />
                  View
                </button>

                <button
                  type="button"
                  className={styles.downloadButton}
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          ))}

          {/* EMPTY */}

          {filteredCertificates.length === 0 && (
            <div className={styles.empty}>
              <FileText size={32} />

              <h3>No certificates found</h3>

              <p>
                Try searching with another certificate name or ID.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          INFORMATION CARDS
      ===================================================== */}

      <section className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Award size={21} />
          </div>

          <div>
            <span>TECHNICAL QUALIFICATIONS</span>

            <h3>Professional Certifications</h3>

            <p>
              Your WABA technical certifications and qualification
              records are maintained in this section.
            </p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>VERIFICATION STATUS</span>

            <h3>Verified Records</h3>

            <p>
              Verified certificates can be used to confirm your
              eligibility for technical roles and assignments.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATE MODAL
      ===================================================== */}

      {selected && (
        <div
          className={styles.overlay}
          onClick={() => setSelected(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}

            <button
              type="button"
              className={styles.close}
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <span className={styles.modalLabel}>
              CERTIFICATE DETAILS
            </span>

            {/* CERTIFICATE HEADER */}

            <div className={styles.modalCertificate}>
              <div className={styles.modalIcon}>
                <Award size={30} />
              </div>

              <div>
                <span>{selected.certificateId}</span>

                <h2>{selected.title}</h2>

                <p>{selected.type}</p>
              </div>
            </div>

            {/* STATUS */}

            <div className={styles.modalStatus}>
              <CheckCircle2 size={18} />

              <div>
                <span>STATUS</span>

                <strong>{selected.status}</strong>
              </div>
            </div>

            {/* DETAILS */}

            <div className={styles.modalGrid}>
              <div>
                <span>Certificate ID</span>
                <strong>{selected.certificateId}</strong>
              </div>

              <div>
                <span>Issued For</span>
                <strong>{selected.issuedFor}</strong>
              </div>

              <div>
                <span>Issued Date</span>
                <strong>{selected.issuedDate}</strong>
              </div>

              <div>
                <span>Valid Until</span>
                <strong>{selected.validUntil}</strong>
              </div>

              <div>
                <span>Certificate Type</span>
                <strong>{selected.type}</strong>
              </div>

              <div>
                <span>Verification</span>
                <strong>WABA Verified</strong>
              </div>
            </div>

            {/* ACTIONS */}

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.secondaryButton}
              >
                <Eye size={16} />
                View Certificate
              </button>

              <button
                type="button"
                className={styles.primaryButton}
              >
                <Download size={16} />
                Download Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}