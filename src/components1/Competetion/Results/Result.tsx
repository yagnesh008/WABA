"use client";

import { useState } from "react";
import {
  Search,
  Trophy,
  CheckCircle,
  Clock,
  Medal,
  Eye,
  Edit,
  CalendarDays,
} from "lucide-react";

import styles from "./Result.module.css";

type ResultStatus = "Completed" | "Pending";

type ResultData = {
  id: string;
  matchNumber: string;
  competition: string;
  category: string;
  athlete1: string;
  athlete2: string;
  score1: number;
  score2: number;
  winner: string;
  round: string;
  resultType: string;
  date: string;
  status: ResultStatus;
};

const initialResults: ResultData[] = [
  {
    id: "RES001",
    matchNumber: "M005",
    competition: "Hyderabad Wheelchair Boxing Open",
    category: "Senior Men",
    athlete1: "Vikram Singh",
    athlete2: "Ravi Kumar",
    score1: 5,
    score2: 2,
    winner: "Vikram Singh",
    round: "Final",
    resultType: "Points",
    date: "25 Nov 2026",
    status: "Completed",
  },
  {
    id: "RES002",
    matchNumber: "M008",
    competition: "National Wheelchair Boxing Open 2026",
    category: "Senior Women",
    athlete1: "Lakshmi Devi",
    athlete2: "Kavya Reddy",
    score1: 4,
    score2: 1,
    winner: "Lakshmi Devi",
    round: "Semi Final",
    resultType: "Points",
    date: "15 Dec 2026",
    status: "Completed",
  },
  {
    id: "RES003",
    matchNumber: "M009",
    competition: "Telangana Adaptive Boxing Championship 2026",
    category: "Senior Men",
    athlete1: "Rahul Kumar",
    athlete2: "Suresh Kumar",
    score1: 3,
    score2: 2,
    winner: "Rahul Kumar",
    round: "Quarter Final",
    resultType: "Points",
    date: "20 Oct 2026",
    status: "Completed",
  },
  {
    id: "RES004",
    matchNumber: "M010",
    competition: "Andhra Pradesh Wheelchair Boxing Championship",
    category: "Junior Men",
    athlete1: "Arjun Reddy",
    athlete2: "Kiran Kumar",
    score1: 0,
    score2: 0,
    winner: "-",
    round: "Quarter Final",
    resultType: "-",
    date: "05 Nov 2026",
    status: "Pending",
  },
  {
    id: "RES005",
    matchNumber: "M011",
    competition: "South India Adaptive Boxing Tournament",
    category: "Senior Women",
    athlete1: "Anjali Devi",
    athlete2: "Sneha Reddy",
    score1: 4,
    score2: 3,
    winner: "Anjali Devi",
    round: "Semi Final",
    resultType: "Points",
    date: "15 Nov 2026",
    status: "Completed",
  },
  {
    id: "RES006",
    matchNumber: "M012",
    competition: "Karnataka Adaptive Boxing Championship",
    category: "Senior Women",
    athlete1: "Kavya Devi",
    athlete2: "Meena Sharma",
    score1: 0,
    score2: 0,
    winner: "-",
    round: "Quarter Final",
    resultType: "-",
    date: "02 Dec 2026",
    status: "Pending",
  },
];

export default function Result() {
  const [results, setResults] =
    useState<ResultData[]>(initialResults);

  const [search, setSearch] = useState("");

  const [competitionFilter, setCompetitionFilter] =
    useState("All");

  const [categoryFilter, setCategoryFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const filteredResults = results.filter((result) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      result.id.toLowerCase().includes(searchText) ||
      result.matchNumber.toLowerCase().includes(searchText) ||
      result.athlete1.toLowerCase().includes(searchText) ||
      result.athlete2.toLowerCase().includes(searchText) ||
      result.competition.toLowerCase().includes(searchText);

    const matchesCompetition =
      competitionFilter === "All" ||
      result.competition === competitionFilter;

    const matchesCategory =
      categoryFilter === "All" ||
      result.category === categoryFilter;

    const matchesStatus =
      statusFilter === "All" ||
      result.status === statusFilter;

    return (
      matchesSearch &&
      matchesCompetition &&
      matchesCategory &&
      matchesStatus
    );
  });

  const totalResults = results.length;

  const completedResults = results.filter(
    (result) => result.status === "Completed"
  ).length;

  const pendingResults = results.filter(
    (result) => result.status === "Pending"
  ).length;

  const winnerCount = results.filter(
    (result) => result.winner !== "-"
  ).length;

  const competitions = Array.from(
    new Set(results.map((result) => result.competition))
  );

  const categories = Array.from(
    new Set(results.map((result) => result.category))
  );

  const handleCompleteResult = (id: string) => {
    setResults((prev) =>
      prev.map((result) =>
        result.id === id
          ? {
              ...result,
              winner: result.athlete1,
              score1: 3,
              score2: 1,
              resultType: "Points",
              status: "Completed",
            }
          : result
      )
    );
  };

  return (
    <main className={styles.resultsPage}>

      {/* PAGE HEADER */}

      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>

          <div className={styles.titleIcon}>
            <Trophy size={25} />
          </div>

          <div>
            <h1>Competition Results</h1>

            <p>
              Manage match results, winners and competition outcomes.
            </p>
          </div>

        </div>
      </div>


      {/* SUMMARY CARDS */}

      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>

          <div className={styles.cardIcon}>
            <Trophy size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Total Results</span>
            <h2>{totalResults}</h2>
          </div>

        </div>


        <div className={styles.summaryCard}>

          <div
            className={`${styles.cardIcon} ${styles.completedIcon}`}
          >
            <CheckCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Completed</span>
            <h2>{completedResults}</h2>
          </div>

        </div>


        <div className={styles.summaryCard}>

          <div
            className={`${styles.cardIcon} ${styles.winnerIcon}`}
          >
            <Medal size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Winners Declared</span>
            <h2>{winnerCount}</h2>
          </div>

        </div>


        <div className={styles.summaryCard}>

          <div
            className={`${styles.cardIcon} ${styles.pendingIcon}`}
          >
            <Clock size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Pending Results</span>
            <h2>{pendingResults}</h2>
          </div>

        </div>

      </div>


      {/* FILTER SECTION */}

      <div className={styles.filterCard}>

        <div className={styles.searchBox}>

          <Search size={19} />

          <input
            type="text"
            placeholder="Search athlete, competition, match..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <select
          className={styles.filterSelect}
          value={competitionFilter}
          onChange={(e) =>
            setCompetitionFilter(e.target.value)
          }
        >

          <option value="All">
            All Competitions
          </option>

          {competitions.map((competition) => (
            <option
              key={competition}
              value={competition}
            >
              {competition}
            </option>
          ))}

        </select>


        <select
          className={styles.filterSelect}
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(e.target.value)
          }
        >

          <option value="All">
            All Categories
          </option>

          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}

        </select>


        <select
          className={styles.filterSelect}
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >

          <option value="All">
            All Status
          </option>

          <option value="Completed">
            Completed
          </option>

          <option value="Pending">
            Pending
          </option>

        </select>

      </div>


      {/* TABLE */}

      <div className={styles.tableCard}>

        <div className={styles.tableHeader}>

          <div>

            <h2>Match Results</h2>

            <p>
              View and manage results of completed competition matches.
            </p>

          </div>

          <span className={styles.resultCount}>
            {filteredResults.length} Results
          </span>

        </div>


        <div className={styles.tableWrapper}>

          <table className={styles.resultsTable}>

            <thead className={styles.tableHead}>

              <tr>

                <th className={styles.tableHeading}>
                  Match
                </th>

                <th className={styles.tableHeading}>
                  Competition
                </th>

                <th className={styles.tableHeading}>
                  Category
                </th>

                <th className={styles.tableHeading}>
                  Athletes
                </th>

                <th className={styles.tableHeading}>
                  Score
                </th>

                <th className={styles.tableHeading}>
                  Winner
                </th>

                <th className={styles.tableHeading}>
                  Round
                </th>

                <th className={styles.tableHeading}>
                  Result
                </th>

                <th className={styles.tableHeading}>
                  Date
                </th>

                <th className={styles.tableHeading}>
                  Status
                </th>

                <th className={styles.tableHeading}>
                  Actions
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredResults.length > 0 ? (

                filteredResults.map((result) => (

                  <tr key={result.id}>

                    {/* MATCH */}

                    <td className={styles.tableCell}>

                      <div className={styles.matchNumber}>
                        {result.matchNumber}
                      </div>

                      <div className={styles.resultId}>
                        {result.id}
                      </div>

                    </td>


                    {/* COMPETITION */}

                    <td className={styles.tableCell}>

                      <div className={styles.competitionName}>

                        <Trophy size={16} />

                        <span>
                          {result.competition}
                        </span>

                      </div>

                    </td>


                    {/* CATEGORY */}

                    <td className={styles.tableCell}>
                      {result.category}
                    </td>


                    {/* ATHLETES */}

                    <td className={styles.tableCell}>

                      <div className={styles.athletes}>

                        <div
                          className={
                            result.winner === result.athlete1
                              ? styles.winnerAthlete
                              : styles.athlete
                          }
                        >
                          {result.athlete1}
                        </div>

                        <div className={styles.vs}>
                          VS
                        </div>

                        <div
                          className={
                            result.winner === result.athlete2
                              ? styles.winnerAthlete
                              : styles.athlete
                          }
                        >
                          {result.athlete2}
                        </div>

                      </div>

                    </td>


                    {/* SCORE */}

                    <td className={styles.tableCell}>

                      {result.status === "Completed" ? (

                        <div className={styles.score}>

                          <span>
                            {result.score1}
                          </span>

                          <strong>-</strong>

                          <span>
                            {result.score2}
                          </span>

                        </div>

                      ) : (
                        <span className={styles.notAvailable}>
                          —
                        </span>
                      )}

                    </td>


                    {/* WINNER */}

                    <td className={styles.tableCell}>

                      {result.winner !== "-" ? (

                        <div className={styles.winner}>

                          <Medal size={16} />

                          <span>
                            {result.winner}
                          </span>

                        </div>

                      ) : (

                        <span className={styles.notAvailable}>
                          Not Declared
                        </span>

                      )}

                    </td>


                    {/* ROUND */}

                    <td className={styles.tableCell}>

                      <span className={styles.round}>
                        {result.round}
                      </span>

                    </td>


                    {/* RESULT TYPE */}

                    <td className={styles.tableCell}>
                      {result.resultType}
                    </td>


                    {/* DATE */}

                    <td className={styles.tableCell}>

                      <div className={styles.date}>

                        <CalendarDays size={15} />

                        {result.date}

                      </div>

                    </td>


                    {/* STATUS */}

                    <td className={styles.tableCell}>

                      <span
                        className={`${styles.status} ${
                          result.status === "Completed"
                            ? styles.completed
                            : styles.pending
                        }`}
                      >
                        {result.status}
                      </span>

                    </td>


                    {/* ACTIONS */}

                    <td className={styles.tableCell}>

                      <div className={styles.actions}>

                        <button
                          type="button"
                          className={styles.viewButton}
                          title="View Result"
                        >
                          <Eye size={16} />
                        </button>


                        {result.status === "Pending" && (

                          <button
                            type="button"
                            className={styles.completeButton}
                            title="Enter Result"
                            onClick={() =>
                              handleCompleteResult(result.id)
                            }
                          >
                            <CheckCircle size={16} />
                          </button>

                        )}


                        {result.status === "Completed" && (

                          <button
                            type="button"
                            className={styles.editButton}
                            title="Edit Result"
                          >
                            <Edit size={16} />
                          </button>

                        )}

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan={11}
                    className={styles.emptyCell}
                  >

                    <div className={styles.noData}>
                      No results found.
                    </div>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}