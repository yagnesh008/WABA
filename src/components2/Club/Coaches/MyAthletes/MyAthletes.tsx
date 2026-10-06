"use client";

import { useState } from "react";
import {
  Users,
  Search,
  Eye,
  Pencil,
  Dumbbell,
  Trophy,
} from "lucide-react";

import styles from "./MyAthletes.module.css";

type Athlete = {
  id: string;
  name: string;
  gender: string;
  age: number;
  category: string;
  coach: string;
  training: string;
  competitions: number;
};

const initialAthletes: Athlete[] = [
  {
    id: "ATH001",
    name: "Rahul Kumar",
    gender: "Male",
    age: 24,
    category: "Lightweight",
    coach: "Rajesh Kumar",
    training: "Regular",
    competitions: 4,
  },
  {
    id: "ATH002",
    name: "Priya Reddy",
    gender: "Female",
    age: 22,
    category: "Flyweight",
    coach: "Priya Sharma",
    training: "Regular",
    competitions: 3,
  },
  {
    id: "ATH003",
    name: "Suresh Babu",
    gender: "Male",
    age: 28,
    category: "Welterweight",
    coach: "Rajesh Kumar",
    training: "Intensive",
    competitions: 5,
  },
  {
    id: "ATH005",
    name: "Vikram Singh",
    gender: "Male",
    age: 30,
    category: "Middleweight",
    coach: "Rajesh Kumar",
    training: "Intensive",
    competitions: 6,
  },
  {
    id: "ATH006",
    name: "Sneha Reddy",
    gender: "Female",
    age: 21,
    category: "Flyweight",
    coach: "Priya Sharma",
    training: "Regular",
    competitions: 2,
  },
  {
    id: "ATH007",
    name: "Arjun Rao",
    gender: "Male",
    age: 25,
    category: "Lightweight",
    coach: "Suresh Babu",
    training: "Intensive",
    competitions: 4,
  },
  {
    id: "ATH008",
    name: "Kavya Reddy",
    gender: "Female",
    age: 23,
    category: "Welterweight",
    coach: "Priya Sharma",
    training: "Regular",
    competitions: 3,
  },
];

export default function MyAthletes() {
  const [athletes, setAthletes] = useState(initialAthletes);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [training, setTraining] = useState("All");

  const filteredAthletes = athletes.filter((athlete) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      athlete.name.toLowerCase().includes(searchText) ||
      athlete.id.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || athlete.category === category;

    const matchesTraining =
      training === "All" || athlete.training === training;

    return matchesSearch && matchesCategory && matchesTraining;
  });

  const handleRemove = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this athlete from your coaching team?"
    );

    if (!confirmed) return;

    setAthletes((current) =>
      current.filter((athlete) => athlete.id !== id)
    );
  };

  const totalCompetitions = athletes.reduce(
    (total, athlete) => total + athlete.competitions,
    0
  );

  const regularTraining = athletes.filter(
    (athlete) => athlete.training === "Regular"
  ).length;

  const intensiveTraining = athletes.filter(
    (athlete) => athlete.training === "Intensive"
  ).length;

  return (
    <main className={styles.page}>
      {/* ================= HEADER ================= */}
      <div className={styles.pageHeader}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>
            <Users size={26} />
          </div>

          <div>
            <h1>My Athletes</h1>
            <p>
              View and manage athletes assigned to your coaching team.
            </p>
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.blue}`}>
          <div className={styles.statIcon}>
            <Users size={23} />
          </div>

          <div>
            <span>Total Athletes</span>
            <strong>{athletes.length}</strong>
            <small>Currently assigned</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.green}`}>
          <div className={styles.statIcon}>
            <Dumbbell size={23} />
          </div>

          <div>
            <span>Regular Training</span>
            <strong>{regularTraining}</strong>
            <small>Athletes</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.orange}`}>
          <div className={styles.statIcon}>
            <Dumbbell size={23} />
          </div>

          <div>
            <span>Intensive Training</span>
            <strong>{intensiveTraining}</strong>
            <small>Athletes</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.purple}`}>
          <div className={styles.statIcon}>
            <Trophy size={23} />
          </div>

          <div>
            <span>Competition Entries</span>
            <strong>{totalCompetitions}</strong>
            <small>Total entries</small>
          </div>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className={styles.tableCard}>
        <div className={styles.tableTop}>
          <div>
            <h2>Assigned Athletes</h2>
            <p>
              Athletes currently assigned to your coaching team
            </p>
          </div>

          <div className={styles.filters}>
            {/* Search */}
            <div className={styles.searchBox}>
              <Search size={17} />

              <input
                type="text"
                placeholder="Search athlete or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Category */}
            <select
              className={styles.select}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Flyweight">Flyweight</option>
              <option value="Lightweight">Lightweight</option>
              <option value="Welterweight">Welterweight</option>
              <option value="Middleweight">Middleweight</option>
            </select>

            {/* Training */}
            <select
              className={styles.select}
              value={training}
              onChange={(e) => setTraining(e.target.value)}
            >
              <option value="All">All Training</option>
              <option value="Regular">Regular</option>
              <option value="Intensive">Intensive</option>
            </select>
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Athlete</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Category</th>
                <th>Coach</th>
                <th>Training</th>
                <th>Competitions</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAthletes.map((athlete) => (
                <tr key={athlete.id}>
                  <td>
                    <div className={styles.athleteCell}>
                      <div className={styles.avatar}>
                        {athlete.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{athlete.name}</strong>
                        <span>{athlete.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>{athlete.gender}</td>

                  <td>{athlete.age}</td>

                  <td>
                    <span className={styles.categoryBadge}>
                      {athlete.category}
                    </span>
                  </td>

                  <td>{athlete.coach}</td>

                  <td>
                    <span
                      className={
                        athlete.training === "Intensive"
                          ? styles.badgeOrange
                          : styles.badgeGreen
                      }
                    >
                      {athlete.training}
                    </span>
                  </td>

                  <td>
                    <span className={styles.competitionCount}>
                      {athlete.competitions}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.viewButton}
                        title="View Athlete"
                      >
                        <Eye size={15} />
                      </button>

                      <button
                        type="button"
                        className={styles.editButton}
                        title="Edit Athlete"
                      >
                        <Pencil size={15} />
                      </button>

                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => handleRemove(athlete.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredAthletes.length === 0 && (
                <tr>
                  <td colSpan={8}>
                    <div className={styles.empty}>
                      No athletes found.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ================= FOOTER ================= */}
        <div className={styles.tableFooter}>
          <span>
            Showing <strong>{filteredAthletes.length}</strong> of{" "}
            <strong>{athletes.length}</strong> athletes
          </span>

          <span className={styles.footerInfo}>
            Coaching Team
          </span>
        </div>
      </div>
    </main>
  );
}