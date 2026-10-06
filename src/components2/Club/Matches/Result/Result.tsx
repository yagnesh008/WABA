"use client";

import { useState } from "react";
import {
  Trophy,
  Search,
  Eye,
  CalendarDays,
  MapPin,
  Users,
  Swords,
} from "lucide-react";

import styles from "./Result.module.css";

type MatchResult = {
  id: string;
  competition: string;
  date: string;
  athlete: string;
  opponent: string;
  category: string;
  result: "Win" | "Loss" | "Draw";
  score: string;
  venue: string;
};

const resultsData: MatchResult[] = [
  {
    id: "RES001",
    competition: "State Adaptive Boxing Championship",
    date: "18 Aug 2026",
    athlete: "Rahul Kumar",
    opponent: "Ravi Kumar",
    category: "Lightweight",
    result: "Win",
    score: "3 - 1",
    venue: "Hyderabad",
  },
  {
    id: "RES002",
    competition: "State Adaptive Boxing Championship",
    date: "18 Aug 2026",
    athlete: "Priya Reddy",
    opponent: "Sneha Singh",
    category: "Flyweight",
    result: "Win",
    score: "2 - 0",
    venue: "Hyderabad",
  },
  {
    id: "RES003",
    competition: "South Zone Boxing Championship",
    date: "05 Aug 2026",
    athlete: "Suresh Babu",
    opponent: "Kiran Rao",
    category: "Welterweight",
    result: "Loss",
    score: "1 - 3",
    venue: "Bengaluru",
  },
  {
    id: "RES004",
    competition: "South Zone Boxing Championship",
    date: "05 Aug 2026",
    athlete: "Vikram Singh",
    opponent: "Arjun Patel",
    category: "Middleweight",
    result: "Win",
    score: "3 - 2",
    venue: "Bengaluru",
  },
  {
    id: "RES005",
    competition: "Club Invitational Boxing Meet",
    date: "22 Jul 2026",
    athlete: "Sneha Reddy",
    opponent: "Kavya Nair",
    category: "Flyweight",
    result: "Draw",
    score: "2 - 2",
    venue: "Hyderabad",
  },
  {
    id: "RES006",
    competition: "Telangana Adaptive Boxing Championship",
    date: "12 Jul 2026",
    athlete: "Arjun Rao",
    opponent: "Manoj Kumar",
    category: "Lightweight",
    result: "Win",
    score: "3 - 1",
    venue: "Warangal",
  },
];

export default function Result() {
  const [search, setSearch] = useState("");
  const [resultFilter, setResultFilter] = useState("All");

  const [selectedResult, setSelectedResult] =
    useState<MatchResult | null>(null);

  const filteredResults = resultsData.filter((match) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      match.id.toLowerCase().includes(searchText) ||
      match.competition.toLowerCase().includes(searchText) ||
      match.athlete.toLowerCase().includes(searchText) ||
      match.opponent.toLowerCase().includes(searchText);

    const matchesResult =
      resultFilter === "All" || match.result === resultFilter;

    return matchesSearch && matchesResult;
  });

  const total = resultsData.length;
  const wins = resultsData.filter(
    (match) => match.result === "Win"
  ).length;
  const losses = resultsData.filter(
    (match) => match.result === "Loss"
  ).length;
  const draws = resultsData.filter(
    (match) => match.result === "Draw"
  ).length;

  return (
    <main className={styles.page}>
      {/* HEADER */}

      <div className={styles.pageHeader}>
        <div className={styles.titleRow}>
          <div className={styles.titleIcon}>
            <Trophy size={25} />
          </div>

          <div>
            <h1>Match Results</h1>
            <p>
              View completed matches, scores and athlete performance.
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Swords size={21} />
          </div>

          <div>
            <span>Total Matches</span>
            <strong>{total}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <Trophy size={21} />
          </div>

          <div>
            <span>Wins</span>
            <strong>{wins}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.red}`}>
            <Swords size={21} />
          </div>

          <div>
            <span>Losses</span>
            <strong>{losses}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Draws</span>
            <strong>{draws}</strong>
          </div>
        </div>
      </div>

      {/* FILTER */}

      <section className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search match, athlete or competition..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.select}
          value={resultFilter}
          onChange={(e) => setResultFilter(e.target.value)}
        >
          <option value="All">All Results</option>
          <option value="Win">Wins</option>
          <option value="Loss">Losses</option>
          <option value="Draw">Draws</option>
        </select>
      </section>

      {/* TABLE */}

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Completed Matches</h2>
            <p>{filteredResults.length} results found</p>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Match</th>
                <th>Competition</th>
                <th>Date</th>
                <th>Athlete</th>
                <th>Opponent</th>
                <th>Category</th>
                <th>Result</th>
                <th>Score</th>
                <th>Venue</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredResults.length > 0 ? (
                filteredResults.map((match) => (
                  <tr key={match.id}>
                    <td>
                      <div className={styles.matchId}>
                        <Swords size={15} />
                        {match.id}
                      </div>
                    </td>

                    <td>
                      <div className={styles.competition}>
                        {match.competition}
                      </div>
                    </td>

                    <td>
                      <div className={styles.dateInfo}>
                        <CalendarDays size={14} />
                        {match.date}
                      </div>
                    </td>

                    <td>
                      <strong>{match.athlete}</strong>
                    </td>

                    <td>{match.opponent}</td>

                    <td>
                      <span className={styles.category}>
                        {match.category}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`${styles.resultBadge} ${
                          match.result === "Win"
                            ? styles.win
                            : match.result === "Loss"
                            ? styles.loss
                            : styles.draw
                        }`}
                      >
                        {match.result}
                      </span>
                    </td>

                    <td>
                      <strong className={styles.score}>
                        {match.score}
                      </strong>
                    </td>

                    <td>
                      <div className={styles.venue}>
                        <MapPin size={14} />
                        {match.venue}
                      </div>
                    </td>

                    <td>
                      <button
                        className={styles.viewButton}
                        title="View Result"
                        onClick={() => setSelectedResult(match)}
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10}>
                    <div className={styles.noData}>
                      No match results found.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* RESULT DETAILS MODAL */}

      {selectedResult && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedResult(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <h2>Match Result</h2>
                <p>{selectedResult.id}</p>
              </div>

              <button
                className={styles.closeButton}
                onClick={() => setSelectedResult(null)}
              >
                ×
              </button>
            </div>

            <div className={styles.resultDetails}>
              <div className={styles.detailCompetition}>
                <Trophy size={22} />
                <div>
                  <span>Competition</span>
                  <strong>{selectedResult.competition}</strong>
                </div>
              </div>

              <div className={styles.matchPlayers}>
                <div>
                  <span>Athlete</span>
                  <strong>{selectedResult.athlete}</strong>
                </div>

                <div className={styles.vs}>VS</div>

                <div>
                  <span>Opponent</span>
                  <strong>{selectedResult.opponent}</strong>
                </div>
              </div>

              <div className={styles.scoreBox}>
                <span>Final Score</span>
                <strong>{selectedResult.score}</strong>

                <div
                  className={`${styles.largeResult} ${
                    selectedResult.result === "Win"
                      ? styles.win
                      : selectedResult.result === "Loss"
                      ? styles.loss
                      : styles.draw
                  }`}
                >
                  {selectedResult.result}
                </div>
              </div>

              <div className={styles.detailsGrid}>
                <div>
                  <span>Date</span>
                  <strong>{selectedResult.date}</strong>
                </div>

                <div>
                  <span>Category</span>
                  <strong>{selectedResult.category}</strong>
                </div>

                <div>
                  <span>Venue</span>
                  <strong>{selectedResult.venue}</strong>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                onClick={() => setSelectedResult(null)}
                className={styles.closeModalButton}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}