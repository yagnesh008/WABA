"use client";

import { useState } from "react";
import {
  UserCog,
  Search,
  Eye,
  Pencil,
  Trash2,
  Users,
  Dumbbell,
  Trophy,
  Plus,
  X,
} from "lucide-react";

import styles from "./AssistantCoach.module.css";

type Coach = {
  id: string;
  name: string;
  gender: string;
  specialization: string;
  experience: string;
  athletes: number;
  sessions: number;
  status: "Active" | "Inactive";
};

const initialCoaches: Coach[] = [
  {
    id: "COA001",
    name: "Priya Sharma",
    gender: "Female",
    specialization: "Adaptive Boxing",
    experience: "6 Years",
    athletes: 18,
    sessions: 42,
    status: "Active",
  },
  {
    id: "COA002",
    name: "Suresh Babu",
    gender: "Male",
    specialization: "Strength & Conditioning",
    experience: "5 Years",
    athletes: 15,
    sessions: 36,
    status: "Active",
  },
  {
    id: "COA003",
    name: "Anjali Rao",
    gender: "Female",
    specialization: "Technical Training",
    experience: "4 Years",
    athletes: 12,
    sessions: 30,
    status: "Active",
  },
  {
    id: "COA004",
    name: "Vikram Singh",
    gender: "Male",
    specialization: "Fitness Training",
    experience: "3 Years",
    athletes: 10,
    sessions: 24,
    status: "Inactive",
  },
  {
    id: "COA005",
    name: "Kavya Reddy",
    gender: "Female",
    specialization: "Adaptive Boxing",
    experience: "4 Years",
    athletes: 17,
    sessions: 38,
    status: "Active",
  },
];

export default function AssistantCoach() {
  const [coaches, setCoaches] = useState(initialCoaches);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filteredCoaches = coaches.filter((coach) => {
    const text = search.toLowerCase();

    const matchesSearch =
      coach.name.toLowerCase().includes(text) ||
      coach.id.toLowerCase().includes(text) ||
      coach.specialization.toLowerCase().includes(text);

    const matchesStatus =
      status === "All" || coach.status === status;

    return matchesSearch && matchesStatus;
  });

  const activeCoaches = coaches.filter(
    (coach) => coach.status === "Active"
  ).length;

  const totalAthletes = coaches.reduce(
    (total, coach) => total + coach.athletes,
    0
  );

  const totalSessions = coaches.reduce(
    (total, coach) => total + coach.sessions,
    0
  );

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this assistant coach?"
    );

    if (!confirmed) return;

    setCoaches((current) =>
      current.filter((coach) => coach.id !== id)
    );
  };

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>
            <UserCog size={26} />
          </div>

          <div>
            <h1>Assistant Coaches</h1>
            <p>
              Manage assistant coaches and their assigned athletes.
            </p>
          </div>
        </div>

        <button
          type="button"
          className={styles.addButton}
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} />
          Add Coach
        </button>
      </div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.blue}`}>
          <div className={styles.statIcon}>
            <UserCog size={23} />
          </div>

          <div>
            <span>Total Coaches</span>
            <strong>{coaches.length}</strong>
            <small>Registered coaches</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.green}`}>
          <div className={styles.statIcon}>
            <Users size={23} />
          </div>

          <div>
            <span>Active Coaches</span>
            <strong>{activeCoaches}</strong>
            <small>Currently active</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.orange}`}>
          <div className={styles.statIcon}>
            <Dumbbell size={23} />
          </div>

          <div>
            <span>Assigned Athletes</span>
            <strong>{totalAthletes}</strong>
            <small>Across coaching team</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.purple}`}>
          <div className={styles.statIcon}>
            <Trophy size={23} />
          </div>

          <div>
            <span>Training Sessions</span>
            <strong>{totalSessions}</strong>
            <small>Total sessions</small>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className={styles.tableCard}>
        <div className={styles.tableTop}>
          <div>
            <h2>Coaching Team</h2>
            <p>Assistant coaches working with your organisation</p>
          </div>

          <div className={styles.filters}>
            <div className={styles.searchBox}>
              <Search size={17} />

              <input
                type="text"
                placeholder="Search coach..."
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
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Coach</th>
                <th>Gender</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Athletes</th>
                <th>Sessions</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCoaches.map((coach) => (
                <tr key={coach.id}>
                  <td>
                    <div className={styles.coachCell}>
                      <div className={styles.avatar}>
                        {coach.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{coach.name}</strong>
                        <span>{coach.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>{coach.gender}</td>

                  <td>
                    <span className={styles.specialization}>
                      {coach.specialization}
                    </span>
                  </td>

                  <td>{coach.experience}</td>

                  <td>
                    <span className={styles.numberBadge}>
                      {coach.athletes}
                    </span>
                  </td>

                  <td>
                    <span className={styles.sessionBadge}>
                      {coach.sessions}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        coach.status === "Active"
                          ? styles.activeBadge
                          : styles.inactiveBadge
                      }
                    >
                      {coach.status}
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
                        onClick={() => handleDelete(coach.id)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredCoaches.length === 0 && (
                <tr>
                  <td colSpan={8}>
                    <div className={styles.empty}>
                      No assistant coaches found.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.tableFooter}>
          Showing <strong>{filteredCoaches.length}</strong> of{" "}
          <strong>{coaches.length}</strong> coaches
        </div>
      </div>

      {/* ADD COACH MODAL */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <h2>Add Assistant Coach</h2>
                <p>Add a new coach to your organisation.</p>
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
                <label>Coach Name</label>
                <input
                  type="text"
                  placeholder="Enter coach name"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Gender</label>
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Experience</label>
                  <select>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                    <option>4 Years</option>
                    <option>5+ Years</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Specialization</label>
                <select>
                  <option>Adaptive Boxing</option>
                  <option>Technical Training</option>
                  <option>Strength & Conditioning</option>
                  <option>Fitness Training</option>
                </select>
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
                  Add Coach
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}