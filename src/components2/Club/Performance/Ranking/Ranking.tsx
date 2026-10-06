"use client";

import { useState } from "react";
import styles from "./Ranking.module.css";

const rankingData = [
  {
    rank: 1,
    athlete: "Arjun Kumar",
    id: "ATH001",
    state: "Telangana",
    club: "Hyderabad Boxing Academy",
    category: "Senior Men",
    matches: 18,
    wins: 16,
    losses: 2,
    points: 480,
  },
  {
    rank: 2,
    athlete: "Rahul Reddy",
    id: "ATH002",
    state: "Andhra Pradesh",
    club: "Vijayawada Boxing Club",
    category: "Senior Men",
    matches: 17,
    wins: 15,
    losses: 2,
    points: 450,
  },
  {
    rank: 3,
    athlete: "Sanjay Kumar",
    id: "ATH003",
    state: "Karnataka",
    club: "Bengaluru Adaptive Boxing",
    category: "Senior Men",
    matches: 16,
    wins: 13,
    losses: 3,
    points: 410,
  },
  {
    rank: 4,
    athlete: "Priya Sharma",
    id: "ATH004",
    state: "Maharashtra",
    club: "Mumbai WABA Club",
    category: "Senior Women",
    matches: 15,
    wins: 12,
    losses: 3,
    points: 390,
  },
  {
    rank: 5,
    athlete: "Kiran Singh",
    id: "ATH005",
    state: "Tamil Nadu",
    club: "Chennai Boxing Academy",
    category: "Senior Women",
    matches: 14,
    wins: 11,
    losses: 3,
    points: 360,
  },
];

export default function Ranking() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [state, setState] = useState("All States");

  const filteredData = rankingData.filter((item) => {
    const searchMatch =
      item.athlete.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All Categories" || item.category === category;

    const stateMatch =
      state === "All States" || item.state === state;

    return searchMatch && categoryMatch && stateMatch;
  });

  return (
    <div className={styles.page}>

      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h1>Ranking</h1>
          <p>
            National athlete ranking based on competition performance.
          </p>
        </div>

        <button className={styles.exportButton}>
          Export Ranking
        </button>
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

        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option>All States</option>
          <option>Telangana</option>
          <option>Andhra Pradesh</option>
          <option>Karnataka</option>
          <option>Maharashtra</option>
          <option>Tamil Nadu</option>
        </select>

      </div>

      {/* TABLE */}
      <div className={styles.tableCard}>

        <div className={styles.tableHeader}>
          <div>
            <h2>Athlete Ranking</h2>
            <p>Current national ranking</p>
          </div>

          <span className={styles.total}>
            {filteredData.length} Athletes
          </span>
        </div>

        <div className={styles.tableWrapper}>

          <table>

            <thead>
              <tr>
                <th>Rank</th>
                <th>Athlete</th>
                <th>State</th>
                <th>Club / Academy</th>
                <th>Category</th>
                <th>Matches</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Points</th>
              </tr>
            </thead>

            <tbody>

              {filteredData.map((item) => (
                <tr key={item.id}>

                  <td>
                    <span
                      className={`${styles.rank} ${
                        item.rank <= 3 ? styles.topRank : ""
                      }`}
                    >
                      {item.rank}
                    </span>
                  </td>

                  <td>
                    <div className={styles.athlete}>

                      <div className={styles.avatar}>
                        {item.athlete.charAt(0)}
                      </div>

                      <div>
                        <strong>{item.athlete}</strong>
                        <small>{item.id}</small>
                      </div>

                    </div>
                  </td>

                  <td>{item.state}</td>

                  <td>{item.club}</td>

                  <td>
                    <span className={styles.category}>
                      {item.category}
                    </span>
                  </td>

                  <td>{item.matches}</td>

                  <td className={styles.win}>
                    {item.wins}
                  </td>

                  <td className={styles.loss}>
                    {item.losses}
                  </td>

                  <td>
                    <strong>{item.points}</strong>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}