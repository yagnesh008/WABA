"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Search,
  Eye,
  Pencil,
  X,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Users,
} from "lucide-react";

import styles from "./Classification.module.css";

type AthleteClassification = {
  id: string;
  athleteId: string;
  athlete: string;
  gender: string;
  category: string;
  classification: string;
  classificationDate: string;
  classifier: string;
  status: string;
};

const initialClassifications: AthleteClassification[] = [
  {
    id: "CLS001",
    athleteId: "ATH001",
    athlete: "Rahul Kumar",
    gender: "Male",
    category: "Lightweight",
    classification: "C1",
    classificationDate: "12 Feb 2026",
    classifier: "Dr. Arun Kumar",
    status: "Classified",
  },
  {
    id: "CLS002",
    athleteId: "ATH002",
    athlete: "Priya Reddy",
    gender: "Female",
    category: "Flyweight",
    classification: "C2",
    classificationDate: "18 Feb 2026",
    classifier: "Dr. Meena Rao",
    status: "Classified",
  },
  {
    id: "CLS003",
    athleteId: "ATH003",
    athlete: "Suresh Babu",
    gender: "Male",
    category: "Welterweight",
    classification: "C3",
    classificationDate: "05 Mar 2026",
    classifier: "Dr. Arun Kumar",
    status: "Classified",
  },
  {
    id: "CLS004",
    athleteId: "ATH004",
    athlete: "Anjali Rao",
    gender: "Female",
    category: "Lightweight",
    classification: "Pending",
    classificationDate: "-",
    classifier: "-",
    status: "Pending",
  },
  {
    id: "CLS005",
    athleteId: "ATH005",
    athlete: "Vikram Singh",
    gender: "Male",
    category: "Middleweight",
    classification: "C2",
    classificationDate: "22 Apr 2026",
    classifier: "Dr. Meena Rao",
    status: "Classified",
  },
  {
    id: "CLS006",
    athleteId: "ATH006",
    athlete: "Sneha Reddy",
    gender: "Female",
    category: "Flyweight",
    classification: "Not Classified",
    classificationDate: "-",
    classifier: "-",
    status: "Not Classified",
  },
];

export default function Classification() {
  const [classifications, setClassifications] = useState(
    initialClassifications
  );

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);

  const [selectedAthlete, setSelectedAthlete] =
    useState<AthleteClassification | null>(null);

  const [selectedClass, setSelectedClass] =
    useState("C1");

  const [selectedStatus, setSelectedStatus] =
    useState("Classified");

  const filteredClassifications = classifications.filter(
    (athlete) => {
      const matchesSearch =
        athlete.athlete
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        athlete.athleteId
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        athlete.status === statusFilter;

      return matchesSearch && matchesStatus;
    }
  );

  const classifiedCount = classifications.filter(
    (athlete) => athlete.status === "Classified"
  ).length;

  const pendingCount = classifications.filter(
    (athlete) => athlete.status === "Pending"
  ).length;

  const notClassifiedCount = classifications.filter(
    (athlete) => athlete.status === "Not Classified"
  ).length;

  const openClassificationModal = (
    athlete: AthleteClassification
  ) => {
    setSelectedAthlete(athlete);

    setSelectedClass(
      athlete.classification === "Pending" ||
        athlete.classification === "Not Classified"
        ? "C1"
        : athlete.classification
    );

    setSelectedStatus(athlete.status);

    setShowModal(true);
  };

  const updateClassification = () => {
    if (!selectedAthlete) {
      return;
    }

    setClassifications((current) =>
      current.map((athlete) =>
        athlete.id === selectedAthlete.id
          ? {
              ...athlete,
              classification:
                selectedStatus === "Classified"
                  ? selectedClass
                  : selectedStatus === "Pending"
                  ? "Pending"
                  : "Not Classified",

              classificationDate:
                selectedStatus === "Classified"
                  ? "18 Sep 2026"
                  : "-",

              classifier:
                selectedStatus === "Classified"
                  ? "Club Classification Officer"
                  : "-",

              status: selectedStatus,
            }
          : athlete
      )
    );

    setShowModal(false);
    setSelectedAthlete(null);
  };

  return (
    <main className={styles.page}>
      {/* =========================
          PAGE HEADER
      ========================== */}

      <div className={styles.pageHeader}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>
            <ShieldCheck size={24} />
          </div>

          <div>
            <h1>Classification</h1>

            <p>
              Manage athlete classification and classification
              status.
            </p>
          </div>
        </div>
      </div>

      {/* =========================
          STATISTICS
      ========================== */}

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Total Athletes</span>
            <strong>{classifications.length}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Classified</span>
            <strong>{classifiedCount}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Clock3 size={21} />
          </div>

          <div>
            <span>Pending</span>
            <strong>{pendingCount}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.red}`}>
            <AlertCircle size={21} />
          </div>

          <div>
            <span>Not Classified</span>
            <strong>{notClassifiedCount}</strong>
          </div>
        </div>
      </div>

      {/* =========================
          CLASSIFICATION TABLE
      ========================== */}

      <section className={styles.tableCard}>
        <div className={styles.tableTop}>
          <div>
            <h2>Athlete Classification</h2>

            <p>
              View and update classification details of
              registered athletes.
            </p>
          </div>

          <div className={styles.filters}>
            <div className={styles.searchBox}>
              <Search size={17} />

              <input
                type="text"
                placeholder="Search athlete..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            <select
              className={styles.select}
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
            >
              <option value="All">All Status</option>
              <option value="Classified">
                Classified
              </option>
              <option value="Pending">
                Pending
              </option>
              <option value="Not Classified">
                Not Classified
              </option>
            </select>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Athlete</th>
                <th>Gender</th>
                <th>Category</th>
                <th>Classification</th>
                <th>Classification Date</th>
                <th>Classifier</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredClassifications.map(
                (athlete) => (
                  <tr key={athlete.id}>
                    <td>
                      <div className={styles.athleteCell}>
                        <div className={styles.avatar}>
                          {athlete.athlete
                            .split(" ")
                            .map(
                              (word) => word[0]
                            )
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <strong>
                            {athlete.athlete}
                          </strong>

                          <span>
                            {athlete.athleteId}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>{athlete.gender}</td>

                    <td>{athlete.category}</td>

                    <td>
                      <span
                        className={
                          athlete.classification ===
                            "Pending" ||
                          athlete.classification ===
                            "Not Classified"
                            ? styles.badgeOrange
                            : styles.classBadge
                        }
                      >
                        {athlete.classification}
                      </span>
                    </td>

                    <td>
                      {athlete.classificationDate}
                    </td>

                    <td>
                      {athlete.classifier}
                    </td>

                    <td>
                      <span
                        className={
                          athlete.status ===
                          "Classified"
                            ? styles.badgeGreen
                            : athlete.status ===
                              "Pending"
                            ? styles.badgeOrange
                            : styles.badgeRed
                        }
                      >
                        {athlete.status}
                      </span>
                    </td>

                    <td>
                      <div className={styles.actions}>
                        <button
                          type="button"
                          title="View"
                        >
                          <Eye size={16} />
                        </button>

                        <button
                          type="button"
                          title="Update Classification"
                          onClick={() =>
                            openClassificationModal(
                              athlete
                            )
                          }
                        >
                          <Pencil size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}

              {filteredClassifications.length ===
                0 && (
                <tr>
                  <td
                    colSpan={8}
                    className={styles.empty}
                  >
                    No classification records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.tableFooter}>
          <span>
            Showing{" "}
            <strong>
              {filteredClassifications.length}
            </strong>{" "}
            of{" "}
            <strong>
              {classifications.length}
            </strong>{" "}
            athletes
          </span>

          <span>
            Classified:{" "}
            <strong>{classifiedCount}</strong>
          </span>
        </div>
      </section>

      {/* =========================
          UPDATE CLASSIFICATION MODAL
      ========================== */}

      {showModal && selectedAthlete && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <h2>Update Classification</h2>

                <p>
                  Update classification for{" "}
                  <strong>
                    {selectedAthlete.athlete}
                  </strong>
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setSelectedAthlete(null);
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.modalContent}>
              {/* Athlete Information */}

              <div className={styles.athleteInfo}>
                <div className={styles.largeAvatar}>
                  {selectedAthlete.athlete
                    .split(" ")
                    .map(
                      (word) => word[0]
                    )
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <strong>
                    {selectedAthlete.athlete}
                  </strong>

                  <span>
                    {selectedAthlete.athleteId}
                  </span>

                  <small>
                    {selectedAthlete.category}
                  </small>
                </div>
              </div>

              {/* Classification */}

              <div className={styles.formGroup}>
                <label>
                  Classification Status
                </label>

                <select
                  value={selectedStatus}
                  onChange={(e) =>
                    setSelectedStatus(
                      e.target.value
                    )
                  }
                >
                  <option value="Classified">
                    Classified
                  </option>

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Not Classified">
                    Not Classified
                  </option>
                </select>
              </div>

              {/* Class */}

              {selectedStatus === "Classified" && (
                <div className={styles.formGroup}>
                  <label>
                    Athlete Classification
                  </label>

                  <select
                    value={selectedClass}
                    onChange={(e) =>
                      setSelectedClass(
                        e.target.value
                      )
                    }
                  >
                    <option value="C1">
                      C1
                    </option>

                    <option value="C2">
                      C2
                    </option>

                    <option value="C3">
                      C3
                    </option>

                    <option value="C4">
                      C4
                    </option>

                    <option value="C5">
                      C5
                    </option>
                  </select>
                </div>
              )}

              {/* Classifier */}

              {selectedStatus === "Classified" && (
                <div className={styles.formGroup}>
                  <label>
                    Classifier
                  </label>

                  <input
                    type="text"
                    defaultValue="Club Classification Officer"
                  />
                </div>
              )}

              {/* Notes */}

              <div className={styles.formGroup}>
                <label>
                  Classification Notes
                </label>

                <textarea
                  placeholder="Enter classification notes..."
                  rows={4}
                />
              </div>
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => {
                  setShowModal(false);
                  setSelectedAthlete(null);
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                className={styles.saveButton}
                onClick={updateClassification}
              >
                Update Classification
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}