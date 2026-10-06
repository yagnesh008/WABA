"use client";

import { useState } from "react";
import {
  Users,
  Search,
  CalendarDays,
  MapPin,
  Eye,
  X,
  UserCheck,
  Clock3,
  ClipboardCheck,
  AlertCircle,
} from "lucide-react";

import styles from "./PendingAthletes.module.css";

interface Athlete {
  id: number;
  name: string;
  athleteId: string;
  category: string;
  classification: string;
  registeredDate: string;
  preferredDate: string;
  venue: string;
  status: "Pending" | "Scheduled";
}

const athletes: Athlete[] = [
  {
    id: 1,
    name: "Rahul Kumar",
    athleteId: "ATH001",
    category: "Men - Lightweight",
    classification: "Initial Classification",
    registeredDate: "18 September 2026",
    preferredDate: "24 September 2026",
    venue: "Hyderabad Classification Centre",
    status: "Pending",
  },
  {
    id: 2,
    name: "Vijay Reddy",
    athleteId: "ATH002",
    category: "Men - Welterweight",
    classification: "Review Classification",
    registeredDate: "19 September 2026",
    preferredDate: "26 September 2026",
    venue: "Telangana Sports Complex",
    status: "Scheduled",
  },
  {
    id: 3,
    name: "Suresh Babu",
    athleteId: "ATH003",
    category: "Men - Middleweight",
    classification: "Initial Classification",
    registeredDate: "20 September 2026",
    preferredDate: "29 September 2026",
    venue: "WABA Classification Centre",
    status: "Pending",
  },
  {
    id: 4,
    name: "Kiran Reddy",
    athleteId: "ATH004",
    category: "Men - Featherweight",
    classification: "Initial Classification",
    registeredDate: "21 September 2026",
    preferredDate: "02 October 2026",
    venue: "Hyderabad Classification Centre",
    status: "Pending",
  },
  {
    id: 5,
    name: "Arjun Kumar",
    athleteId: "ATH005",
    category: "Men - Lightweight",
    classification: "Review Classification",
    registeredDate: "21 September 2026",
    preferredDate: "04 October 2026",
    venue: "Telangana Sports Complex",
    status: "Pending",
  },
  {
    id: 6,
    name: "Mahesh Rao",
    athleteId: "ATH006",
    category: "Men - Welterweight",
    classification: "Initial Classification",
    registeredDate: "22 September 2026",
    preferredDate: "06 October 2026",
    venue: "WABA Classification Centre",
    status: "Scheduled",
  },
];

export default function PendingAthletes() {
  const [selected, setSelected] = useState<Athlete | null>(null);
  const [search, setSearch] = useState("");

  const filteredAthletes = athletes.filter(
    (athlete) =>
      athlete.name.toLowerCase().includes(search.toLowerCase()) ||
      athlete.athleteId.toLowerCase().includes(search.toLowerCase()) ||
      athlete.category.toLowerCase().includes(search.toLowerCase())
  );

  const pendingCount = athletes.filter(
    (item) => item.status === "Pending"
  ).length;

  const scheduledCount = athletes.filter(
    (item) => item.status === "Scheduled"
  ).length;

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <section className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>CLASSIFICATION</span>

          <h1>
            <Users size={30} />
            Pending Athletes
          </h1>

          <p>
            View athletes waiting for classification and manage their
            assessment requests.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <ClipboardCheck size={17} />
          {pendingCount} Pending
        </div>
      </section>

      {/* SUMMARY */}
      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Users size={21} />
          </div>

          <div>
            <strong>{athletes.length}</strong>
            <span>Total Athletes</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Clock3 size={21} />
          </div>

          <div>
            <strong>{pendingCount}</strong>
            <span>Pending Assessment</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <CalendarDays size={21} />
          </div>

          <div>
            <strong>{scheduledCount}</strong>
            <span>Scheduled</span>
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <div className={styles.notice}>
        <AlertCircle size={19} />

        <div>
          <strong>Classification requests</strong>
          <p>
            Review athlete details before scheduling or conducting a
            classification assessment.
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <section className={styles.contentSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>
              ATHLETE CLASSIFICATION
            </span>

            <h2>Classification Requests</h2>

            <p>
              Athletes currently waiting for classification assessment.
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

        {/* ATHLETE LIST */}
        <div className={styles.list}>
          {filteredAthletes.map((athlete) => (
            <div className={styles.card} key={athlete.id}>
              <div className={styles.avatar}>
                {athlete.name.charAt(0)}
              </div>

              <div className={styles.mainInfo}>
                <div className={styles.nameRow}>
                  <h3>{athlete.name}</h3>

                  <span
                    className={
                      athlete.status === "Pending"
                        ? styles.pending
                        : styles.scheduled
                    }
                  >
                    {athlete.status}
                  </span>
                </div>

                <span className={styles.athleteId}>
                  {athlete.athleteId}
                </span>

                <p>{athlete.classification}</p>

                <div className={styles.details}>
                  <span>{athlete.category}</span>

                  <span>
                    <CalendarDays size={14} />
                    {athlete.preferredDate}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {athlete.venue}
                  </span>
                </div>
              </div>

              <div className={styles.actionArea}>
                <span className={styles.registered}>
                  Registered
                  <strong>{athlete.registeredDate}</strong>
                </span>

                <button
                  className={styles.viewButton}
                  onClick={() => setSelected(athlete)}
                >
                  <Eye size={16} />
                  View Details
                </button>
              </div>
            </div>
          ))}

          {filteredAthletes.length === 0 && (
            <div className={styles.empty}>
              <Users size={30} />
              <h3>No athletes found</h3>
              <p>Try searching with a different name or athlete ID.</p>
            </div>
          )}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className={styles.overlay}
          onClick={() => setSelected(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.close}
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>

            <span className={styles.modalLabel}>
              ATHLETE CLASSIFICATION
            </span>

            <div className={styles.modalProfile}>
              <div className={styles.modalAvatar}>
                {selected.name.charAt(0)}
              </div>

              <div>
                <h2>{selected.name}</h2>
                <span>{selected.athleteId}</span>
              </div>
            </div>

            <div className={styles.modalGrid}>
              <div>
                <span>Category</span>
                <strong>{selected.category}</strong>
              </div>

              <div>
                <span>Classification Type</span>
                <strong>{selected.classification}</strong>
              </div>

              <div>
                <span>Registered Date</span>
                <strong>{selected.registeredDate}</strong>
              </div>

              <div>
                <span>Preferred Date</span>
                <strong>{selected.preferredDate}</strong>
              </div>

              <div>
                <span>Venue</span>
                <strong>{selected.venue}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selected.status}</strong>
              </div>
            </div>

            <div className={styles.modalActions}>
              <button className={styles.secondaryButton}>
                <UserCheck size={16} />
                Schedule Session
              </button>

              <button className={styles.primaryButton}>
                <ClipboardCheck size={16} />
                Start Classification
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}