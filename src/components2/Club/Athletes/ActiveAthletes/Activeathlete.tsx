"use client";

import { useState } from "react";
import {
  UserCheck,
  Search,
  Eye,
  Pencil,
  Users,
  Dumbbell,
  CreditCard,
  Trophy,
} from "lucide-react";

import styles from "./Activeathlete.module.css";

type ActiveAthlete = {
  id: string;
  name: string;
  gender: string;
  age: number;
  category: string;
  coach: string;
  training: string;
  membership: string;
  competitions: number;
};

const initialAthletes: ActiveAthlete[] = [
  {
    id: "ATH001",
    name: "Rahul Kumar",
    gender: "Male",
    age: 24,
    category: "Lightweight",
    coach: "Rajesh Kumar",
    training: "Regular",
    membership: "Active",
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
    membership: "Active",
    competitions: 3,
  },
  {
    id: "ATH003",
    name: "Suresh Babu",
    gender: "Male",
    age: 28,
    category: "Welterweight",
    coach: "Rajesh Kumar",
    training: "Regular",
    membership: "Active",
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
    membership: "Active",
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
    membership: "Active",
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
    membership: "Active",
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
    membership: "Active",
    competitions: 3,
  },
];

export default function Activeathlete() {
  const [athletes] = useState<ActiveAthlete[]>(
    initialAthletes
  );

  const [search, setSearch] = useState("");

  const [categoryFilter, setCategoryFilter] =
    useState("All");

  const filteredAthletes = athletes.filter(
    (athlete) => {
      const matchesSearch =
        athlete.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        athlete.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" ||
        athlete.category === categoryFilter;

      return matchesSearch && matchesCategory;
    }
  );

  const regularTraining = athletes.filter(
    (athlete) => athlete.training === "Regular"
  ).length;

  const intensiveTraining = athletes.filter(
    (athlete) => athlete.training === "Intensive"
  ).length;

  const totalCompetitions = athletes.reduce(
    (total, athlete) =>
      total + athlete.competitions,
    0
  );

  return (
    <main className={styles.page}>
      {/* =========================
          PAGE HEADER
      ========================== */}

      <div className={styles.pageHeader}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>
            <UserCheck size={24} />
          </div>

          <div>
            <h1>Active Athletes</h1>

            <p>
              View and manage athletes who are
              currently active in your organisation.
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
            <span>Active Athletes</span>
            <strong>{athletes.length}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <Dumbbell size={21} />
          </div>

          <div>
            <span>Regular Training</span>
            <strong>{regularTraining}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Trophy size={21} />
          </div>

          <div>
            <span>Intensive Training</span>
            <strong>{intensiveTraining}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <CreditCard size={21} />
          </div>

          <div>
            <span>Competition Entries</span>
            <strong>{totalCompetitions}</strong>
          </div>
        </div>
      </div>

      {/* =========================
          ACTIVE ATHLETE TABLE
      ========================== */}

      <section className={styles.tableCard}>
        <div className={styles.tableTop}>
          <div>
            <h2>Active Athlete List</h2>

            <p>
              Athletes currently participating in
              training and competitions.
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
              value={categoryFilter}
              onChange={(e) =>
                setCategoryFilter(e.target.value)
              }
            >
              <option value="All">
                All Categories
              </option>

              <option value="Flyweight">
                Flyweight
              </option>

              <option value="Lightweight">
                Lightweight
              </option>

              <option value="Welterweight">
                Welterweight
              </option>

              <option value="Middleweight">
                Middleweight
              </option>
            </select>
          </div>
        </div>

        {/* =========================
            TABLE
        ========================== */}

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
                <th>Membership</th>
                <th>Competitions</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAthletes.map(
                (athlete) => (
                  <tr key={athlete.id}>
                    {/* Athlete */}

                    <td>
                      <div className={styles.athleteCell}>
                        <div className={styles.avatar}>
                          {athlete.name
                            .split(" ")
                            .map(
                              (word) =>
                                word[0]
                            )
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <strong>
                            {athlete.name}
                          </strong>

                          <span>
                            {athlete.id}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Gender */}

                    <td>{athlete.gender}</td>

                    {/* Age */}

                    <td>{athlete.age}</td>

                    {/* Category */}

                    <td>
                      <span className={styles.categoryBadge}>
                        {athlete.category}
                      </span>
                    </td>

                    {/* Coach */}

                    <td>{athlete.coach}</td>

                    {/* Training */}

                    <td>
                      <span
                        className={
                          athlete.training ===
                          "Intensive"
                            ? styles.badgeOrange
                            : styles.badgeGreen
                        }
                      >
                        {athlete.training}
                      </span>
                    </td>

                    {/* Membership */}

                    <td>
                      <span
                        className={styles.badgeGreen}
                      >
                        {athlete.membership}
                      </span>
                    </td>

                    {/* Competitions */}

                    <td>
                      <strong className={styles.competitionCount}>
                        {athlete.competitions}
                      </strong>
                    </td>

                    {/* Actions */}

                    <td>
                      <div className={styles.actions}>
                        <button
                          type="button"
                          title="View Athlete"
                        >
                          <Eye size={16} />
                        </button>

                        <button
                          type="button"
                          title="Edit Athlete"
                        >
                          <Pencil size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}

              {filteredAthletes.length ===
                0 && (
                <tr>
                  <td
                    colSpan={9}
                    className={styles.empty}
                  >
                    No active athletes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}

        <div className={styles.tableFooter}>
          <span>
            Showing{" "}
            <strong>
              {filteredAthletes.length}
            </strong>{" "}
            of{" "}
            <strong>
              {athletes.length}
            </strong>{" "}
            active athletes
          </span>

          <span>
            Active Memberships:{" "}
            <strong>
              {athletes.length}
            </strong>
          </span>
        </div>
      </section>
    </main>
  );
}