"use client";

import { useState } from "react";
import styles from "./AthletePerformance.module.css";

const athletes = [
  {
    id: "ATH001",
    name: "Arjun Kumar",
    state: "Telangana",
    category: "Senior Men",
    competitions: 8,
    matches: 18,
    wins: 16,
    losses: 2,
    points: 480,
  },
  {
    id: "ATH002",
    name: "Rahul Reddy",
    state: "Andhra Pradesh",
    category: "Senior Men",
    competitions: 7,
    matches: 17,
    wins: 15,
    losses: 2,
    points: 450,
  },
  {
    id: "ATH003",
    name: "Sanjay Kumar",
    state: "Karnataka",
    category: "Senior Men",
    competitions: 7,
    matches: 16,
    wins: 13,
    losses: 3,
    points: 410,
  },
  {
    id: "ATH004",
    name: "Priya Sharma",
    state: "Maharashtra",
    category: "Senior Women",
    competitions: 6,
    matches: 15,
    wins: 12,
    losses: 3,
    points: 390,
  },
  {
    id: "ATH005",
    name: "Kiran Singh",
    state: "Tamil Nadu",
    category: "Senior Women",
    competitions: 6,
    matches: 14,
    wins: 11,
    losses: 3,
    points: 360,
  },
];

export default function AthletePerformance() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(search.toLowerCase()) ||
      athlete.id.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" ||
      athlete.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.page}>

      {/* PAGE HEADER */}

      <div className={styles.header}>
        <div>
          <h1>Athlete Performance</h1>
          <p>
            Monitor athlete performance and competition statistics.
          </p>
        </div>
      </div>

      {/* SUMMARY CARDS */}

      <div className={styles.statsGrid}>

        <div className={styles.statCard}>
          <span>Total Athletes</span>
          <strong>1,248</strong>
          <small>Registered athletes</small>
        </div>

        <div className={styles.statCard}>
          <span>Total Matches</span>
          <strong>3,842</strong>
          <small>Completed matches</small>
        </div>

        <div className={styles.statCard}>
          <span>Average Win Rate</span>
          <strong>82.4%</strong>
          <small>Across all athletes</small>
        </div>

        <div className={styles.statCard}>
          <span>Top Performer</span>
          <strong>Arjun Kumar</strong>
          <small>480 ranking points</small>
        </div>

      </div>

      {/* FILTERS */}

      <div className={styles.filters}>

        <input
          type="text"
          placeholder="Search athlete or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option>Senior Men</option>
          <option>Senior Women</option>
        </select>

      </div>

      {/* PERFORMANCE TABLE */}

      <div className={styles.tableCard}>

        <div className={styles.tableHeader}>
          <div>
            <h2>Athlete Performance</h2>
            <p>
              Detailed performance statistics of athletes
            </p>
          </div>

          <span className={styles.count}>
            {filteredAthletes.length} Athletes
          </span>
        </div>

        <div className={styles.tableWrapper}>

          <table>

            <thead>
              <tr>
                <th>Athlete</th>
                <th>State</th>
                <th>Category</th>
                <th>Competitions</th>
                <th>Matches</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Win Rate</th>
                <th>Points</th>
                <th>Performance</th>
              </tr>
            </thead>

            <tbody>

              {filteredAthletes.map((athlete) => {

                const winRate =
                  (athlete.wins / athlete.matches) * 100;

                let performance = "Average";

                if (winRate >= 85) {
                  performance = "Excellent";
                } else if (winRate >= 75) {
                  performance = "Good";
                }

                return (
                  <tr key={athlete.id}>

                    {/* ATHLETE */}

                    <td>
                      <div className={styles.athleteInfo}>

                        <div className={styles.avatar}>
                          {athlete.name.charAt(0)}
                        </div>

                        <div>
                          <strong>{athlete.name}</strong>
                          <small>{athlete.id}</small>
                        </div>

                      </div>
                    </td>

                    {/* STATE */}

                    <td>{athlete.state}</td>

                    {/* CATEGORY */}

                    <td>
                      <span className={styles.category}>
                        {athlete.category}
                      </span>
                    </td>

                    {/* COMPETITIONS */}

                    <td>{athlete.competitions}</td>

                    {/* MATCHES */}

                    <td>{athlete.matches}</td>

                    {/* WINS */}

                    <td className={styles.win}>
                      {athlete.wins}
                    </td>

                    {/* LOSSES */}

                    <td className={styles.loss}>
                      {athlete.losses}
                    </td>

                    {/* WIN RATE */}

                    <td>

                      <div className={styles.winRate}>

                        <div className={styles.progressBackground}>
                          <div
                            className={styles.progress}
                            style={{
                              width: `${winRate}%`,
                            }}
                          />
                        </div>

                        <span>
                          {winRate.toFixed(1)}%
                        </span>

                      </div>

                    </td>

                    {/* POINTS */}

                    <td>
                      <strong>{athlete.points}</strong>
                    </td>

                    {/* PERFORMANCE */}

                    <td>

                      <span
                        className={
                          performance === "Excellent"
                            ? styles.excellent
                            : performance === "Good"
                            ? styles.good
                            : styles.average
                        }
                      >
                        {performance}
                      </span>

                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}