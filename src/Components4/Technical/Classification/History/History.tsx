"use client";

import { useState } from "react";
import {
  History as HistoryIcon,
  CalendarDays,
  UserCheck,
  Eye,
  X,
  CheckCircle2,
  Award,
  ClipboardCheck,
  Search,
} from "lucide-react";

import styles from "./History.module.css";

interface HistoryItem {
  id: number;
  athlete: string;
  athleteId: string;
  category: string;
  classification: string;
  classResult: string;
  date: string;
  venue: string;
  classifier: string;
  status: "Completed";
}

const historyData: HistoryItem[] = [
  {
    id: 1,
    athlete: "Amit Kumar",
    athleteId: "ATH101",
    category: "Men - Lightweight",
    classification: "Initial Classification",
    classResult: "WABA Class 1",
    date: "15 August 2026",
    venue: "Hyderabad Classification Centre",
    classifier: "Technical Official",
    status: "Completed",
  },
  {
    id: 2,
    athlete: "Rohit Singh",
    athleteId: "ATH102",
    category: "Men - Welterweight",
    classification: "Initial Classification",
    classResult: "WABA Class 2",
    date: "10 August 2026",
    venue: "Telangana Sports Complex",
    classifier: "Technical Official",
    status: "Completed",
  },
  {
    id: 3,
    athlete: "Sandeep Kumar",
    athleteId: "ATH103",
    category: "Men - Middleweight",
    classification: "Review Classification",
    classResult: "WABA Class 2",
    date: "28 July 2026",
    venue: "WABA Classification Centre",
    classifier: "Technical Official",
    status: "Completed",
  },
  {
    id: 4,
    athlete: "Manoj Reddy",
    athleteId: "ATH104",
    category: "Men - Lightweight",
    classification: "Initial Classification",
    classResult: "WABA Class 1",
    date: "18 July 2026",
    venue: "Hyderabad Classification Centre",
    classifier: "Technical Official",
    status: "Completed",
  },
  {
    id: 5,
    athlete: "Vijay Kumar",
    athleteId: "ATH105",
    category: "Men - Featherweight",
    classification: "Review Classification",
    classResult: "WABA Class 3",
    date: "05 July 2026",
    venue: "Telangana Sports Complex",
    classifier: "Technical Official",
    status: "Completed",
  },
];

export default function History() {
  const [selected, setSelected] = useState<HistoryItem | null>(null);
  const [search, setSearch] = useState("");

  const filteredHistory = historyData.filter((item) => {
    const searchValue = search.toLowerCase().trim();

    return (
      item.athlete.toLowerCase().includes(searchValue) ||
      item.athleteId.toLowerCase().includes(searchValue) ||
      item.classResult.toLowerCase().includes(searchValue) ||
      item.classification.toLowerCase().includes(searchValue)
    );
  });

  const totalAthletes = historyData.length;

  const classOne = historyData.filter(
    (item) => item.classResult === "WABA Class 1"
  ).length;

  const classTwo = historyData.filter(
    (item) => item.classResult === "WABA Class 2"
  ).length;

  return (
    <main className={styles.page}>
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <section className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>CLASSIFICATION</span>

          <h1>
            <HistoryIcon size={30} />
            Classification History
          </h1>

          <p>
            View completed athlete classification assessments and
            classification records.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <CheckCircle2 size={17} />
          <span>Completed Records</span>
        </div>
      </section>

      {/* =====================================================
          SUMMARY
      ===================================================== */}
      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <HistoryIcon size={21} />
          </div>

          <div>
            <strong>{totalAthletes}</strong>
            <span>Completed Assessments</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Award size={21} />
          </div>

          <div>
            <strong>{classOne}</strong>
            <span>WABA Class 1</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <ClipboardCheck size={21} />
          </div>

          <div>
            <strong>{classTwo}</strong>
            <span>WABA Class 2</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLASSIFICATION RECORDS
      ===================================================== */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>
              COMPLETED CLASSIFICATIONS
            </span>

            <h2>Classification Records</h2>

            <p>
              Previously completed athlete classification assessments.
            </p>
          </div>

          <div className={styles.searchBox}>
            <Search size={17} />

            <input
              type="text"
              placeholder="Search athlete..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* TABLE HEADER */}
        <div className={styles.tableHeader}>
          <span>Athlete</span>
          <span>Classification</span>
          <span>Result</span>
          <span>Date</span>
          <span>Status</span>
          <span></span>
        </div>

        {/* RECORDS */}
        <div className={styles.recordList}>
          {filteredHistory.map((item) => (
            <div className={styles.record} key={item.id}>
              {/* Athlete */}
              <div className={styles.athleteCell}>
                <div className={styles.avatar}>
                  {item.athlete.charAt(0)}
                </div>

                <div>
                  <strong>{item.athlete}</strong>
                  <span>{item.athleteId}</span>
                </div>
              </div>

              {/* Classification */}
              <div className={styles.classificationCell}>
                <strong>{item.classification}</strong>
                <span>{item.category}</span>
              </div>

              {/* Result */}
              <div className={styles.resultCell}>
                <Award size={15} />
                <strong>{item.classResult}</strong>
              </div>

              {/* Date */}
              <div className={styles.dateCell}>
                <CalendarDays size={14} />
                <span>{item.date}</span>
              </div>

              {/* Status */}
              <div>
                <span className={styles.completed}>
                  <CheckCircle2 size={13} />
                  Completed
                </span>
              </div>

              {/* View */}
              <button
                type="button"
                className={styles.viewButton}
                onClick={() => setSelected(item)}
                aria-label={`View ${item.athlete} classification`}
              >
                <Eye size={16} />
              </button>
            </div>
          ))}

          {/* EMPTY STATE */}
          {filteredHistory.length === 0 && (
            <div className={styles.empty}>
              <HistoryIcon size={30} />

              <h3>No records found</h3>

              <p>
                Try searching with another athlete name, ID,
                classification, or result.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          INFORMATION CARDS
      ===================================================== */}
      <section className={styles.bottomGrid}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <ClipboardCheck size={21} />
          </div>

          <div>
            <span>CLASSIFICATION RECORDS</span>

            <h3>Assessment History</h3>

            <p>
              Completed classification assessments are maintained
              for athlete participation and competition records.
            </p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <UserCheck size={21} />
          </div>

          <div>
            <span>TECHNICAL OFFICIAL</span>

            <h3>Verified Assessments</h3>

            <p>
              Each completed assessment contains the classification
              result and responsible technical official.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILS MODAL
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
              CLASSIFICATION RECORD
            </span>

            {/* PROFILE */}
            <div className={styles.modalProfile}>
              <div className={styles.modalAvatar}>
                {selected.athlete.charAt(0)}
              </div>

              <div>
                <h2>{selected.athlete}</h2>
                <span>{selected.athleteId}</span>
              </div>
            </div>

            {/* RESULT */}
            <div className={styles.resultBox}>
              <Award size={23} />

              <div>
                <span>CLASSIFICATION RESULT</span>
                <strong>{selected.classResult}</strong>
              </div>

              <CheckCircle2 size={20} />
            </div>

            {/* DETAILS */}
            <div className={styles.modalGrid}>
              <div>
                <span>Classification Type</span>
                <strong>{selected.classification}</strong>
              </div>

              <div>
                <span>Category</span>
                <strong>{selected.category}</strong>
              </div>

              <div>
                <span>Assessment Date</span>
                <strong>{selected.date}</strong>
              </div>

              <div>
                <span>Venue</span>
                <strong>{selected.venue}</strong>
              </div>

              <div>
                <span>Classifier</span>
                <strong>{selected.classifier}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selected.status}</strong>
              </div>
            </div>

            {/* ACTIONS */}
            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.secondaryButton}
              >
                <Award size={16} />
                View Certificate
              </button>

              <button
                type="button"
                className={styles.primaryButton}
              >
                <ClipboardCheck size={16} />
                View Full Record
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}