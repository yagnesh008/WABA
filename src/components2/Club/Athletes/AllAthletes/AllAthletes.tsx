"use client";

import { useState } from "react";
import {
  Users,
  Search,
  UserPlus,
  Eye,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

import styles from "./AllAthletes.module.css";

type Athlete = {
  id: string;
  name: string;
  gender: string;
  age: number;
  category: string;
  membership: string;
  classification: string;
  status: string;
};

const initialAthletes: Athlete[] = [
  {
    id: "ATH001",
    name: "Rahul Kumar",
    gender: "Male",
    age: 24,
    category: "Lightweight",
    membership: "Active",
    classification: "C1",
    status: "Active",
  },
  {
    id: "ATH002",
    name: "Priya Reddy",
    gender: "Female",
    age: 22,
    category: "Flyweight",
    membership: "Active",
    classification: "C2",
    status: "Active",
  },
  {
    id: "ATH003",
    name: "Suresh Babu",
    gender: "Male",
    age: 28,
    category: "Welterweight",
    membership: "Active",
    classification: "C3",
    status: "Active",
  },
  {
    id: "ATH004",
    name: "Anjali Rao",
    gender: "Female",
    age: 26,
    category: "Lightweight",
    membership: "Expired",
    classification: "Pending",
    status: "Inactive",
  },
  {
    id: "ATH005",
    name: "Vikram Singh",
    gender: "Male",
    age: 30,
    category: "Middleweight",
    membership: "Active",
    classification: "C2",
    status: "Active",
  },
  {
    id: "ATH006",
    name: "Sneha Reddy",
    gender: "Female",
    age: 21,
    category: "Flyweight",
    membership: "Pending",
    classification: "Pending",
    status: "Active",
  },
];

export default function AllAthletes() {
  const [athletes, setAthletes] = useState(initialAthletes);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(search.toLowerCase()) ||
      athlete.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || athlete.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const deleteAthlete = (id: string) => {
    setAthletes((current) =>
      current.filter((athlete) => athlete.id !== id)
    );
  };

  return (
    <main className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>
            <Users size={24} />
          </div>

          <div>
            <h1>All Athletes</h1>
            <p>View and manage all athletes registered with your organisation.</p>
          </div>
        </div>

        <button
          className={styles.addButton}
          onClick={() => setShowModal(true)}
        >
          <UserPlus size={17} />
          Add Athlete
        </button>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Total Athletes</span>
            <strong>{athletes.length}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Active</span>
            <strong>
              {athletes.filter((a) => a.status === "Active").length}
            </strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Male</span>
            <strong>
              {athletes.filter((a) => a.gender === "Male").length}
            </strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Female</span>
            <strong>
              {athletes.filter((a) => a.gender === "Female").length}
            </strong>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <section className={styles.tableCard}>
        <div className={styles.tableTop}>
          <div>
            <h2>Athlete List</h2>
            <p>All athletes registered under your club or academy.</p>
          </div>

          <div className={styles.filters}>
            <div className={styles.searchBox}>
              <Search size={17} />
              <input
                type="text"
                placeholder="Search athlete..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={styles.select}
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
                <th>Athlete</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Category</th>
                <th>Membership</th>
                <th>Classification</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAthletes.map((athlete) => (
                <tr key={athlete.id}>
                  <td>
                    <div className={styles.athleteCell}>
                      <div className={styles.avatar}>
                        {athlete.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>
                        <strong>{athlete.name}</strong>
                        <span>{athlete.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>{athlete.gender}</td>

                  <td>{athlete.age}</td>

                  <td>{athlete.category}</td>

                  <td>
                    <span
                      className={
                        athlete.membership === "Active"
                          ? styles.badgeGreen
                          : athlete.membership === "Pending"
                          ? styles.badgeOrange
                          : styles.badgeRed
                      }
                    >
                      {athlete.membership}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        athlete.classification === "Pending"
                          ? styles.badgeOrange
                          : styles.badgeBlue
                      }
                    >
                      {athlete.classification}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        athlete.status === "Active"
                          ? styles.badgeGreen
                          : styles.badgeRed
                      }
                    >
                      {athlete.status}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <button title="View">
                        <Eye size={16} />
                      </button>

                      <button title="Edit">
                        <Pencil size={16} />
                      </button>

                      <button
                        title="Delete"
                        onClick={() => deleteAthlete(athlete.id)}
                        className={styles.deleteButton}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredAthletes.length === 0 && (
                <tr>
                  <td colSpan={8} className={styles.empty}>
                    No athletes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add Athlete Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <h2>Add Athlete</h2>
                <p>Add a new athlete to your organisation.</p>
              </div>

              <button onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                <input placeholder="Enter full name" />
              </div>

              <div className={styles.formGroup}>
                <label>Gender</label>
                <select>
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Date of Birth</label>
                <input type="date" />
              </div>

              <div className={styles.formGroup}>
                <label>Weight Category</label>
                <select>
                  <option>Select Category</option>
                  <option>Flyweight</option>
                  <option>Lightweight</option>
                  <option>Welterweight</option>
                  <option>Middleweight</option>
                </select>
              </div>
            </div>

            <div className={styles.modalActions}>
              <button
                className={styles.cancelButton}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className={styles.saveButton}
                onClick={() => setShowModal(false)}
              >
                Add Athlete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}