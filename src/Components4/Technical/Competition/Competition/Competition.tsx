"use client";

import { useState } from "react";
import {
  Trophy,
  CalendarDays,
  MapPin,
  Users,
  Clock3,
  CheckCircle2,
  ClipboardList,
  Eye,
  X,
} from "lucide-react";
import styles from "./Competition.module.css";

type CompetitionStatus =
  | "Assigned"
  | "Upcoming"
  | "Completed";

interface Competition {
  id: number;
  name: string;
  code: string;
  location: string;
  date: string;
  time: string;
  role: string;
  athletes: number;
  status: CompetitionStatus;
  description: string;
}

const competitions: Competition[] = [
  {
    id: 1,
    name: "WABA National Boxing Championship 2026",
    code: "WABA-NBC-2026",
    location: "Hyderabad, Telangana",
    date: "18 October 2026",
    time: "09:00 AM",
    role: "Referee",
    athletes: 96,
    status: "Assigned",
    description:
      "National-level wheelchair adaptive boxing championship featuring athletes from different states.",
  },
  {
    id: 2,
    name: "South Zone Adaptive Boxing Championship",
    code: "WABA-SZ-2026",
    location: "Bengaluru, Karnataka",
    date: "05 November 2026",
    time: "10:00 AM",
    role: "Judge",
    athletes: 72,
    status: "Assigned",
    description:
      "Regional adaptive boxing competition for athletes from South Zone states.",
  },
  {
    id: 3,
    name: "Telangana State Adaptive Boxing Meet",
    code: "WABA-TS-2026",
    location: "Warangal, Telangana",
    date: "22 November 2026",
    time: "09:30 AM",
    role: "Classifier",
    athletes: 54,
    status: "Upcoming",
    description:
      "State-level competition with athlete classification and technical officiating.",
  },
  {
    id: 4,
    name: "WABA Andhra Pradesh Championship",
    code: "WABA-AP-2026",
    location: "Visakhapatnam, Andhra Pradesh",
    date: "12 December 2026",
    time: "10:00 AM",
    role: "Referee",
    athletes: 68,
    status: "Upcoming",
    description:
      "State championship featuring adaptive boxing athletes across multiple categories.",
  },
  {
    id: 5,
    name: "WABA National Games 2025",
    code: "WABA-NG-2025",
    location: "New Delhi",
    date: "15 December 2025",
    time: "09:00 AM",
    role: "Judge",
    athletes: 110,
    status: "Completed",
    description:
      "National adaptive boxing event completed successfully with technical officials.",
  },
  {
    id: 6,
    name: "Hyderabad District Boxing Championship",
    code: "WABA-HYD-2025",
    location: "Hyderabad, Telangana",
    date: "08 November 2025",
    time: "10:00 AM",
    role: "Referee",
    athletes: 48,
    status: "Completed",
    description:
      "District-level adaptive boxing championship conducted in Hyderabad.",
  },
];

export default function Competition() {
  const [activeTab, setActiveTab] = useState<CompetitionStatus>("Assigned");
  const [selectedCompetition, setSelectedCompetition] =
    useState<Competition | null>(null);

  const filteredCompetitions = competitions.filter(
    (competition) => competition.status === activeTab
  );

  const assignedCount = competitions.filter(
    (item) => item.status === "Assigned"
  ).length;

  const upcomingCount = competitions.filter(
    (item) => item.status === "Upcoming"
  ).length;

  const historyCount = competitions.filter(
    (item) => item.status === "Completed"
  ).length;

  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.pageLabel}>TECHNICAL OFFICIAL</span>

          <h1>Competitions</h1>

          <p>
            Manage your assigned competitions, upcoming events and competition
            history.
          </p>
        </div>
      </div>

      {/* SUMMARY */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <ClipboardList size={22} />
          </div>

          <div>
            <span>Assigned</span>
            <strong>{assignedCount}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <CalendarDays size={22} />
          </div>

          <div>
            <span>Upcoming</span>
            <strong>{upcomingCount}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Completed</span>
            <strong>{historyCount}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <Trophy size={22} />
          </div>

          <div>
            <span>Total Events</span>
            <strong>{competitions.length}</strong>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className={styles.competitionSection}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Assigned" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Assigned")}
          >
            <ClipboardList size={17} />
            Assigned
            <span>{assignedCount}</span>
          </button>

          <button
            className={`${styles.tabButton} ${
              activeTab === "Upcoming" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Upcoming")}
          >
            <CalendarDays size={17} />
            Upcoming
            <span>{upcomingCount}</span>
          </button>

          <button
            className={`${styles.tabButton} ${
              activeTab === "Completed" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Completed")}
          >
            <CheckCircle2 size={17} />
            History
            <span>{historyCount}</span>
          </button>
        </div>

        {/* SECTION HEADER */}
        <div className={styles.sectionHeader}>
          <div>
            <h2>
              {activeTab === "Assigned"
                ? "Assigned Competitions"
                : activeTab === "Upcoming"
                ? "Upcoming Competitions"
                : "Competition History"}
            </h2>

            <p>
              {activeTab === "Assigned"
                ? "Competitions currently assigned to you."
                : activeTab === "Upcoming"
                ? "Your upcoming WABA competition events."
                : "Previously completed WABA competitions."}
            </p>
          </div>

          <div className={styles.eventCount}>
            {filteredCompetitions.length} Events
          </div>
        </div>

        {/* COMPETITION CARDS */}
        {filteredCompetitions.length > 0 ? (
          <div className={styles.competitionGrid}>
            {filteredCompetitions.map((competition) => (
              <div className={styles.competitionCard} key={competition.id}>
                {/* TOP */}
                <div className={styles.cardTop}>
                  <div className={styles.trophyIcon}>
                    <Trophy size={23} />
                  </div>

                  <span
                    className={`${styles.statusBadge} ${
                      competition.status === "Assigned"
                        ? styles.assigned
                        : competition.status === "Upcoming"
                        ? styles.upcoming
                        : styles.completed
                    }`}
                  >
                    {competition.status === "Completed" && (
                      <CheckCircle2 size={13} />
                    )}

                    {competition.status === "Upcoming" && (
                      <Clock3 size={13} />
                    )}

                    {competition.status === "Assigned" && (
                      <ClipboardList size={13} />
                    )}

                    {competition.status}
                  </span>
                </div>

                {/* CONTENT */}
                <div className={styles.cardContent}>
                  <span className={styles.competitionCode}>
                    {competition.code}
                  </span>

                  <h3>{competition.name}</h3>

                  <p>{competition.description}</p>
                </div>

                {/* DETAILS */}
                <div className={styles.details}>
                  <div className={styles.detailRow}>
                    <CalendarDays size={16} />

                    <div>
                      <span>Date</span>
                      <strong>{competition.date}</strong>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <Clock3 size={16} />

                    <div>
                      <span>Time</span>
                      <strong>{competition.time}</strong>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <MapPin size={16} />

                    <div>
                      <span>Location</span>
                      <strong>{competition.location}</strong>
                    </div>
                  </div>

                  <div className={styles.detailRow}>
                    <Users size={16} />

                    <div>
                      <span>Athletes</span>
                      <strong>{competition.athletes}</strong>
                    </div>
                  </div>
                </div>

                {/* ROLE */}
                <div className={styles.roleSection}>
                  <span>Your Role</span>

                  <strong>{competition.role}</strong>
                </div>

                {/* ACTION */}
                <button
                  className={styles.viewButton}
                  onClick={() => setSelectedCompetition(competition)}
                >
                  <Eye size={17} />
                  View Competition
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <Trophy size={28} />
            </div>

            <h3>No Competitions Found</h3>

            <p>
              There are no competitions available in this section right now.
            </p>
          </div>
        )}
      </section>

      {/* MODAL */}
      {selectedCompetition && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedCompetition(null)}
        >
          <div
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>
                <div className={styles.modalIcon}>
                  <Trophy size={23} />
                </div>

                <div>
                  <span>{selectedCompetition.code}</span>
                  <h2>{selectedCompetition.name}</h2>
                </div>
              </div>

              <button
                className={styles.closeButton}
                onClick={() => setSelectedCompetition(null)}
              >
                <X size={20} />
              </button>
            </div>

            {/* MODAL BODY */}
            <div className={styles.modalBody}>
              <div className={styles.modalStatus}>
                {selectedCompetition.status === "Completed" ? (
                  <CheckCircle2 size={16} />
                ) : selectedCompetition.status === "Upcoming" ? (
                  <Clock3 size={16} />
                ) : (
                  <ClipboardList size={16} />
                )}

                {selectedCompetition.status}
              </div>

              <p className={styles.modalDescription}>
                {selectedCompetition.description}
              </p>

              <div className={styles.modalGrid}>
                <div className={styles.modalItem}>
                  <CalendarDays size={18} />
                  <div>
                    <span>Date</span>
                    <strong>{selectedCompetition.date}</strong>
                  </div>
                </div>

                <div className={styles.modalItem}>
                  <Clock3 size={18} />
                  <div>
                    <span>Time</span>
                    <strong>{selectedCompetition.time}</strong>
                  </div>
                </div>

                <div className={styles.modalItem}>
                  <MapPin size={18} />
                  <div>
                    <span>Location</span>
                    <strong>{selectedCompetition.location}</strong>
                  </div>
                </div>

                <div className={styles.modalItem}>
                  <Users size={18} />
                  <div>
                    <span>Athletes</span>
                    <strong>{selectedCompetition.athletes}</strong>
                  </div>
                </div>

                <div className={styles.modalItem}>
                  <ClipboardList size={18} />
                  <div>
                    <span>Your Role</span>
                    <strong>{selectedCompetition.role}</strong>
                  </div>
                </div>

                <div className={styles.modalItem}>
                  <Trophy size={18} />
                  <div>
                    <span>Competition Code</span>
                    <strong>{selectedCompetition.code}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className={styles.modalFooter}>
              <button
                className={styles.cancelButton}
                onClick={() => setSelectedCompetition(null)}
              >
                Close
              </button>

              {selectedCompetition.status === "Assigned" && (
                <button className={styles.primaryButton}>
                  <CheckCircle2 size={17} />
                  Confirm Assignment
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}