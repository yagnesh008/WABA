"use client";

import { useState } from "react";
import {
  Clock3,
  CalendarDays,
  MapPin,
  Trophy,
  Users,
  Eye,
  X,
  AlertCircle,
  FilePenLine,
  CheckCircle2,
} from "lucide-react";

import styles from "./Pending.module.css";

interface PendingResult {
  id: number;
  competition: string;
  code: string;
  date: string;
  time: string;
  venue: string;
  ring: string;
  athlete1: string;
  athlete2: string;
  category: string;
  round: string;
  status: "Pending Entry" | "Awaiting Approval";
}

const pendingResults: PendingResult[] = [
  {
    id: 1,
    competition: "WABA National Boxing Championship 2026",
    code: "WABA-NBC-2026",
    date: "18 October 2026",
    time: "09:00 AM",
    venue: "Hyderabad",
    ring: "Main Ring",
    athlete1: "Rahul Kumar",
    athlete2: "Arjun Reddy",
    category: "Men - Lightweight",
    round: "Semi Final",
    status: "Pending Entry",
  },
  {
    id: 2,
    competition: "South Zone Adaptive Boxing Championship",
    code: "WABA-SZ-2026",
    date: "05 November 2026",
    time: "10:00 AM",
    venue: "Bengaluru",
    ring: "Ring 2",
    athlete1: "Vijay Kumar",
    athlete2: "Suresh Babu",
    category: "Men - Welterweight",
    round: "Quarter Final",
    status: "Awaiting Approval",
  },
  {
    id: 3,
    competition: "Telangana Technical Boxing Meet",
    code: "WABA-TG-2026",
    date: "15 November 2026",
    time: "09:30 AM",
    venue: "Warangal",
    ring: "Ring 1",
    athlete1: "Kiran Reddy",
    athlete2: "Mahesh Kumar",
    category: "Men - Middleweight",
    round: "Final",
    status: "Pending Entry",
  },
  {
    id: 4,
    competition: "Andhra Pradesh Adaptive Boxing Championship",
    code: "WABA-AP-2026",
    date: "12 December 2026",
    time: "10:00 AM",
    venue: "Visakhapatnam",
    ring: "Ring 1",
    athlete1: "Ravi Teja",
    athlete2: "Naveen Kumar",
    category: "Men - Lightweight",
    round: "Quarter Final",
    status: "Awaiting Approval",
  },
];

export default function Pending() {
  const [selected, setSelected] = useState<PendingResult | null>(null);

  const pendingEntry = pendingResults.filter(
    (item) => item.status === "Pending Entry"
  ).length;

  const awaitingApproval = pendingResults.filter(
    (item) => item.status === "Awaiting Approval"
  ).length;

  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>
            TECHNICAL OFFICIAL
          </span>

          <h1>
            <Clock3 size={30} />
            Pending Results
          </h1>

          <p>
            Review match results that are pending entry or approval.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <Clock3 size={17} />
          {pendingResults.length} Pending
        </div>
      </section>

      {/* SUMMARY */}
      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Clock3 size={21} />
          </div>

          <div>
            <strong>{pendingResults.length}</strong>
            <span>Total Pending</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <FilePenLine size={21} />
          </div>

          <div>
            <strong>{pendingEntry}</strong>
            <span>Pending Entry</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <strong>{awaitingApproval}</strong>
            <span>Awaiting Approval</span>
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <section className={styles.notice}>
        <div className={styles.noticeIcon}>
          <AlertCircle size={20} />
        </div>

        <div>
          <strong>Pending Result Review</strong>

          <p>
            Please complete missing result entries and review submitted
            results that are waiting for approval.
          </p>
        </div>
      </section>

      {/* RESULTS LIST */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>
              RESULT MANAGEMENT
            </span>

            <h2>Pending Results</h2>
          </div>

          <span className={styles.resultCount}>
            {pendingResults.length} Results
          </span>
        </div>

        <div className={styles.resultList}>
          {pendingResults.map((item) => (
            <div className={styles.resultCard} key={item.id}>
              {/* TOP */}
              <div className={styles.cardTop}>
                <div>
                  <span className={styles.code}>
                    {item.code}
                  </span>

                  <h3>{item.competition}</h3>

                  <p>
                    {item.category} • {item.round}
                  </p>
                </div>

                <span
                  className={
                    item.status === "Pending Entry"
                      ? styles.pendingEntry
                      : styles.awaiting
                  }
                >
                  <Clock3 size={13} />
                  {item.status}
                </span>
              </div>

              {/* DETAILS */}
              <div className={styles.details}>
                <div>
                  <CalendarDays size={16} />
                  <span>{item.date}</span>
                </div>

                <div>
                  <Clock3 size={16} />
                  <span>{item.time}</span>
                </div>

                <div>
                  <MapPin size={16} />
                  <span>{item.venue}</span>
                </div>

                <div>
                  <Trophy size={16} />
                  <span>{item.ring}</span>
                </div>
              </div>

              {/* ATHLETES */}
              <div className={styles.athletes}>
                <div className={styles.athlete}>
                  <span>RED CORNER</span>
                  <strong>{item.athlete1}</strong>
                </div>

                <div className={styles.vs}>VS</div>

                <div className={styles.athlete}>
                  <span>BLUE CORNER</span>
                  <strong>{item.athlete2}</strong>
                </div>
              </div>

              {/* FOOTER */}
              <div className={styles.cardFooter}>
                <div className={styles.athleteCount}>
                  <Users size={15} />
                  2 Athletes
                </div>

                <button
                  className={styles.viewButton}
                  onClick={() => setSelected(item)}
                >
                  <Eye size={16} />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalLabel}>
                  PENDING RESULT
                </span>

                <h2>{selected.competition}</h2>

                <p>{selected.code}</p>
              </div>

              <button
                className={styles.closeButton}
                onClick={() => setSelected(null)}
              >
                <X size={20} />
              </button>
            </div>

            {/* STATUS */}
            <div className={styles.modalStatus}>
              <Clock3 size={17} />

              <div>
                <span>Status</span>
                <strong>{selected.status}</strong>
              </div>
            </div>

            {/* INFORMATION */}
            <div className={styles.modalInfo}>
              <div>
                <CalendarDays size={16} />
                <span>{selected.date}</span>
              </div>

              <div>
                <Clock3 size={16} />
                <span>{selected.time}</span>
              </div>

              <div>
                <MapPin size={16} />
                <span>{selected.venue}</span>
              </div>

              <div>
                <Trophy size={16} />
                <span>{selected.ring}</span>
              </div>
            </div>

            {/* ATHLETES */}
            <div className={styles.modalAthletes}>
              <h3>Match Participants</h3>

              <div className={styles.modalAthleteGrid}>
                <div className={styles.modalAthlete}>
                  <span>RED CORNER</span>
                  <strong>{selected.athlete1}</strong>
                </div>

                <div className={styles.modalVs}>
                  VS
                </div>

                <div className={styles.modalAthlete}>
                  <span>BLUE CORNER</span>
                  <strong>{selected.athlete2}</strong>
                </div>
              </div>
            </div>

            {/* MATCH INFO */}
            <div className={styles.matchInfo}>
              <div>
                <span>Category</span>
                <strong>{selected.category}</strong>
              </div>

              <div>
                <span>Round</span>
                <strong>{selected.round}</strong>
              </div>

              <div>
                <span>Venue</span>
                <strong>{selected.venue}</strong>
              </div>

              <div>
                <span>Ring</span>
                <strong>{selected.ring}</strong>
              </div>
            </div>

            {/* ACTION */}
            {selected.status === "Pending Entry" ? (
              <button className={styles.actionButton}>
                <FilePenLine size={17} />
                Enter Result
              </button>
            ) : (
              <button className={styles.approvalButton}>
                <CheckCircle2 size={17} />
                Review Approval
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}