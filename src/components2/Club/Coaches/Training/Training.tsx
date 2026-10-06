"use client";

import { useState } from "react";
import {
  Dumbbell,
  Search,
  Eye,
  Pencil,
  Trash2,
  CalendarDays,
  Users,
  Clock,
  Plus,
  X,
} from "lucide-react";

import styles from "./Training.module.css";

type TrainingSession = {
  id: string;
  title: string;
  date: string;
  time: string;
  coach: string;
  athletes: number;
  type: string;
  status: "Scheduled" | "Completed" | "Cancelled";
};

const initialSessions: TrainingSession[] = [
  {
    id: "TRN001",
    title: "Morning Boxing Training",
    date: "18 Sep 2026",
    time: "07:00 AM",
    coach: "Rajesh Kumar",
    athletes: 18,
    type: "Regular",
    status: "Scheduled",
  },
  {
    id: "TRN002",
    title: "Strength & Conditioning",
    date: "18 Sep 2026",
    time: "10:00 AM",
    coach: "Priya Sharma",
    athletes: 12,
    type: "Fitness",
    status: "Scheduled",
  },
  {
    id: "TRN003",
    title: "Technical Boxing Session",
    date: "17 Sep 2026",
    time: "05:00 PM",
    coach: "Suresh Babu",
    athletes: 15,
    type: "Technical",
    status: "Completed",
  },
  {
    id: "TRN004",
    title: "Competition Preparation",
    date: "19 Sep 2026",
    time: "06:00 AM",
    coach: "Rajesh Kumar",
    athletes: 10,
    type: "Intensive",
    status: "Scheduled",
  },
  {
    id: "TRN005",
    title: "Adaptive Boxing Training",
    date: "16 Sep 2026",
    time: "04:30 PM",
    coach: "Priya Sharma",
    athletes: 14,
    type: "Adaptive",
    status: "Completed",
  },
  {
    id: "TRN006",
    title: "Fitness & Recovery",
    date: "20 Sep 2026",
    time: "07:30 AM",
    coach: "Anjali Rao",
    athletes: 8,
    type: "Fitness",
    status: "Scheduled",
  },
];

export default function Training() {
  const [sessions, setSessions] = useState(initialSessions);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filteredSessions = sessions.filter((session) => {
    const text = search.toLowerCase();

    const matchesSearch =
      session.title.toLowerCase().includes(text) ||
      session.id.toLowerCase().includes(text) ||
      session.coach.toLowerCase().includes(text);

    const matchesStatus =
      status === "All" || session.status === status;

    return matchesSearch && matchesStatus;
  });

  const scheduled = sessions.filter(
    (session) => session.status === "Scheduled"
  ).length;

  const completed = sessions.filter(
    (session) => session.status === "Completed"
  ).length;

  const totalAthletes = sessions.reduce(
    (total, session) => total + session.athletes,
    0
  );

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this training session?"
    );

    if (!confirmed) return;

    setSessions((current) =>
      current.filter((session) => session.id !== id)
    );
  };

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>
            <Dumbbell size={26} />
          </div>

          <div>
            <h1>Training</h1>
            <p>
              Schedule and manage athlete training sessions.
            </p>
          </div>
        </div>

        <button
          type="button"
          className={styles.addButton}
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} />
          Schedule Training
        </button>
      </div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.blue}`}>
          <div className={styles.statIcon}>
            <CalendarDays size={23} />
          </div>

          <div>
            <span>Total Sessions</span>
            <strong>{sessions.length}</strong>
            <small>Training sessions</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.green}`}>
          <div className={styles.statIcon}>
            <Clock size={23} />
          </div>

          <div>
            <span>Scheduled</span>
            <strong>{scheduled}</strong>
            <small>Upcoming sessions</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.orange}`}>
          <div className={styles.statIcon}>
            <Dumbbell size={23} />
          </div>

          <div>
            <span>Completed</span>
            <strong>{completed}</strong>
            <small>Finished sessions</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.purple}`}>
          <div className={styles.statIcon}>
            <Users size={23} />
          </div>

          <div>
            <span>Athlete Entries</span>
            <strong>{totalAthletes}</strong>
            <small>Total participants</small>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className={styles.tableCard}>
        <div className={styles.tableTop}>
          <div>
            <h2>Training Sessions</h2>
            <p>
              Manage upcoming and completed training sessions
            </p>
          </div>

          <div className={styles.filters}>
            <div className={styles.searchBox}>
              <Search size={17} />

              <input
                type="text"
                placeholder="Search training..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className={styles.select}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Training</th>
                <th>Date</th>
                <th>Time</th>
                <th>Coach</th>
                <th>Athletes</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredSessions.map((session) => (
                <tr key={session.id}>
                  <td>
                    <div className={styles.trainingCell}>
                      <div className={styles.trainingIcon}>
                        <Dumbbell size={17} />
                      </div>

                      <div>
                        <strong>{session.title}</strong>
                        <span>{session.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className={styles.dateText}>
                      {session.date}
                    </span>
                  </td>

                  <td>{session.time}</td>

                  <td>{session.coach}</td>

                  <td>
                    <span className={styles.numberBadge}>
                      {session.athletes}
                    </span>
                  </td>

                  <td>
                    <span className={styles.typeBadge}>
                      {session.type}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        session.status === "Scheduled"
                          ? styles.scheduledBadge
                          : session.status === "Completed"
                            ? styles.completedBadge
                            : styles.cancelledBadge
                      }
                    >
                      {session.status}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.viewButton}
                        title="View"
                      >
                        <Eye size={15} />
                      </button>

                      <button
                        type="button"
                        className={styles.editButton}
                        title="Edit"
                      >
                        <Pencil size={15} />
                      </button>

                      <button
                        type="button"
                        className={styles.deleteButton}
                        title="Delete"
                        onClick={() => handleDelete(session.id)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredSessions.length === 0 && (
                <tr>
                  <td colSpan={8}>
                    <div className={styles.empty}>
                      No training sessions found.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.tableFooter}>
          Showing <strong>{filteredSessions.length}</strong> of{" "}
          <strong>{sessions.length}</strong> training sessions
        </div>
      </div>

      {/* SCHEDULE MODAL */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <h2>Schedule Training</h2>
                <p>Create a new athlete training session.</p>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setShowModal(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className={styles.form}>
              <div className={styles.formGroup}>
                <label>Training Title</label>
                <input
                  type="text"
                  placeholder="Enter training title"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Date</label>
                  <input type="date" />
                </div>

                <div className={styles.formGroup}>
                  <label>Time</label>
                  <input type="time" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Coach</label>
                <select>
                  <option>Rajesh Kumar</option>
                  <option>Priya Sharma</option>
                  <option>Suresh Babu</option>
                  <option>Anjali Rao</option>
                </select>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Training Type</label>
                  <select>
                    <option>Regular</option>
                    <option>Technical</option>
                    <option>Fitness</option>
                    <option>Adaptive</option>
                    <option>Intensive</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Athletes</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Number"
                  />
                </div>
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className={styles.saveButton}
                  onClick={() => setShowModal(false)}
                >
                  Schedule Training
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}