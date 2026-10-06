"use client";

import { useState } from "react";
import {
  Search,
  Trophy,
  CalendarDays,
  MapPin,
  Users,
  Clock,
  Play,
  CheckCircle,
  Eye,
  Check,
} from "lucide-react";

import styles from "./Match.module.css";

type MatchStatus = "Scheduled" | "Live" | "Completed";

type MatchData = {
  id: string;
  competition: string;
  category: string;
  matchNumber: string;
  athlete1: string;
  athlete2: string;
  date: string;
  time: string;
  venue: string;
  round: string;
  status: MatchStatus;
};

const initialMatches: MatchData[] = [
  {
    id: "MAT001",
    competition: "Telangana Adaptive Boxing Championship 2026",
    category: "Senior Men",
    matchNumber: "M001",
    athlete1: "Rahul Kumar",
    athlete2: "Vikram Singh",
    date: "20 Oct 2026",
    time: "10:00 AM",
    venue: "Hyderabad Boxing Arena",
    round: "Quarter Final",
    status: "Scheduled",
  },
  {
    id: "MAT002",
    competition: "Telangana Adaptive Boxing Championship 2026",
    category: "Senior Women",
    matchNumber: "M002",
    athlete1: "Priya Sharma",
    athlete2: "Sneha Reddy",
    date: "20 Oct 2026",
    time: "11:00 AM",
    venue: "Hyderabad Boxing Arena",
    round: "Semi Final",
    status: "Scheduled",
  },
  {
    id: "MAT003",
    competition: "Andhra Pradesh Wheelchair Boxing Championship",
    category: "Junior Men",
    matchNumber: "M003",
    athlete1: "Arjun Reddy",
    athlete2: "Kiran Kumar",
    date: "05 Nov 2026",
    time: "09:30 AM",
    venue: "Vijayawada Sports Complex",
    round: "Quarter Final",
    status: "Scheduled",
  },
  {
    id: "MAT004",
    competition: "South India Adaptive Boxing Tournament",
    category: "Senior Women",
    matchNumber: "M004",
    athlete1: "Anjali Devi",
    athlete2: "Sneha Reddy",
    date: "15 Nov 2026",
    time: "02:00 PM",
    venue: "Bengaluru Boxing Stadium",
    round: "Semi Final",
    status: "Live",
  },
  {
    id: "MAT005",
    competition: "Hyderabad Wheelchair Boxing Open",
    category: "Senior Men",
    matchNumber: "M005",
    athlete1: "Vikram Singh",
    athlete2: "Ravi Kumar",
    date: "25 Nov 2026",
    time: "03:00 PM",
    venue: "Hyderabad Boxing Academy",
    round: "Final",
    status: "Completed",
  },
  {
    id: "MAT006",
    competition: "Karnataka Adaptive Boxing Championship",
    category: "Senior Women",
    matchNumber: "M006",
    athlete1: "Kavya Devi",
    athlete2: "Meena Sharma",
    date: "02 Dec 2026",
    time: "10:30 AM",
    venue: "Mysuru Sports Arena",
    round: "Quarter Final",
    status: "Scheduled",
  },
  {
    id: "MAT007",
    competition: "National Wheelchair Boxing Open 2026",
    category: "Senior Men",
    matchNumber: "M007",
    athlete1: "Suresh Kumar",
    athlete2: "Ramesh Rao",
    date: "15 Dec 2026",
    time: "11:30 AM",
    venue: "National Sports Complex",
    round: "Quarter Final",
    status: "Scheduled",
  },
  {
    id: "MAT008",
    competition: "National Wheelchair Boxing Open 2026",
    category: "Senior Women",
    matchNumber: "M008",
    athlete1: "Lakshmi Devi",
    athlete2: "Kavya Reddy",
    date: "15 Dec 2026",
    time: "01:00 PM",
    venue: "National Sports Complex",
    round: "Semi Final",
    status: "Completed",
  },
];

export default function Match() {
  const [matches, setMatches] =
    useState<MatchData[]>(initialMatches);

  const [search, setSearch] = useState("");

  const [competitionFilter, setCompetitionFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const handleStartMatch = (id: string) => {
    setMatches((prev) =>
      prev.map((match) =>
        match.id === id
          ? {
              ...match,
              status: "Live",
            }
          : match
      )
    );
  };

  const handleCompleteMatch = (id: string) => {
    setMatches((prev) =>
      prev.map((match) =>
        match.id === id
          ? {
              ...match,
              status: "Completed",
            }
          : match
      )
    );
  };

  const filteredMatches = matches.filter((match) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      match.athlete1.toLowerCase().includes(searchText) ||
      match.athlete2.toLowerCase().includes(searchText) ||
      match.competition.toLowerCase().includes(searchText) ||
      match.matchNumber.toLowerCase().includes(searchText) ||
      match.venue.toLowerCase().includes(searchText);

    const matchesCompetition =
      competitionFilter === "All" ||
      match.competition === competitionFilter;

    const matchesStatus =
      statusFilter === "All" ||
      match.status === statusFilter;

    return (
      matchesSearch &&
      matchesCompetition &&
      matchesStatus
    );
  });

  const totalMatches = matches.length;

  const scheduledMatches = matches.filter(
    (match) => match.status === "Scheduled"
  ).length;

  const liveMatches = matches.filter(
    (match) => match.status === "Live"
  ).length;

  const completedMatches = matches.filter(
    (match) => match.status === "Completed"
  ).length;

  const competitions = Array.from(
    new Set(matches.map((match) => match.competition))
  );

  return (
    <main className={styles.matchPage}>

      {/* PAGE HEADER */}

      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>

          <div className={styles.titleIcon}>
            <Trophy size={25} />
          </div>

          <div>
            <h1>Competition Matches</h1>

            <p>
              Schedule, manage and monitor competition matches.
            </p>
          </div>

        </div>
      </div>


      {/* SUMMARY CARDS */}

      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>

          <div className={styles.cardIcon}>
            <Users size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Total Matches</span>
            <h2>{totalMatches}</h2>
          </div>

        </div>


        <div className={styles.summaryCard}>

          <div className={`${styles.cardIcon} ${styles.scheduledIcon}`}>
            <CalendarDays size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Scheduled</span>
            <h2>{scheduledMatches}</h2>
          </div>

        </div>


        <div className={styles.summaryCard}>

          <div className={`${styles.cardIcon} ${styles.liveIcon}`}>
            <Play size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Live</span>
            <h2>{liveMatches}</h2>
          </div>

        </div>


        <div className={styles.summaryCard}>

          <div className={`${styles.cardIcon} ${styles.completedIcon}`}>
            <CheckCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Completed</span>
            <h2>{completedMatches}</h2>
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
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >

          <option value="All">
            All Status
          </option>

          <option value="Scheduled">
            Scheduled
          </option>

          <option value="Live">
            Live
          </option>

          <option value="Completed">
            Completed
          </option>

        </select>

      </div>


      {/* TABLE CARD */}

      <div className={styles.tableCard}>

        <div className={styles.tableHeader}>

          <div>

            <h2>Match Schedule</h2>

            <p>
              Manage scheduled and ongoing competition matches.
            </p>

          </div>

          <span className={styles.matchCount}>
            {filteredMatches.length} Matches
          </span>

        </div>


        {/* TABLE */}

        <div className={styles.tableWrapper}>

          <table className={styles.matchTable}>

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
                  Date & Time
                </th>

                <th className={styles.tableHeading}>
                  Venue
                </th>

                <th className={styles.tableHeading}>
                  Round
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

              {filteredMatches.length > 0 ? (

                filteredMatches.map((match) => (

                  <tr key={match.id}>

                    {/* MATCH */}

                    <td className={styles.tableCell}>

                      <div className={styles.matchNumber}>
                        {match.matchNumber}
                      </div>

                      <div className={styles.matchId}>
                        {match.id}
                      </div>

                    </td>


                    {/* COMPETITION */}

                    <td className={styles.tableCell}>

                      <div className={styles.competitionName}>

                        <Trophy size={16} />

                        <span>
                          {match.competition}
                        </span>

                      </div>

                    </td>


                    {/* CATEGORY */}

                    <td className={styles.tableCell}>
                      {match.category}
                    </td>


                    {/* ATHLETES */}

                    <td className={styles.tableCell}>

                      <div className={styles.athletes}>

                        <div className={styles.athlete}>
                          {match.athlete1}
                        </div>

                        <div className={styles.vs}>
                          VS
                        </div>

                        <div className={styles.athlete}>
                          {match.athlete2}
                        </div>

                      </div>

                    </td>


                    {/* DATE */}

                    <td className={styles.tableCell}>

                      <div className={styles.dateTime}>

                        <div>
                          <CalendarDays size={14} />
                          {match.date}
                        </div>

                        <div>
                          <Clock size={14} />
                          {match.time}
                        </div>

                      </div>

                    </td>


                    {/* VENUE */}

                    <td className={styles.tableCell}>

                      <div className={styles.location}>

                        <MapPin size={15} />

                        {match.venue}

                      </div>

                    </td>


                    {/* ROUND */}

                    <td className={styles.tableCell}>

                      <span className={styles.round}>
                        {match.round}
                      </span>

                    </td>


                    {/* STATUS */}

                    <td className={styles.tableCell}>

                      <span
                        className={`${styles.status} ${
                          match.status === "Scheduled"
                            ? styles.scheduled
                            : match.status === "Live"
                            ? styles.live
                            : styles.completed
                        }`}
                      >
                        {match.status}
                      </span>

                    </td>


                    {/* ACTIONS */}

                    <td className={styles.tableCell}>

                      <div className={styles.actions}>

                        <button
                          type="button"
                          className={styles.viewButton}
                          title="View Match"
                        >
                          <Eye size={16} />
                        </button>


                        {match.status === "Scheduled" && (

                          <button
                            type="button"
                            className={styles.startButton}
                            title="Start Match"
                            onClick={() =>
                              handleStartMatch(match.id)
                            }
                          >
                            <Play size={16} />
                          </button>

                        )}


                        {match.status === "Live" && (

                          <button
                            type="button"
                            className={styles.completeButton}
                            title="Complete Match"
                            onClick={() =>
                              handleCompleteMatch(match.id)
                            }
                          >
                            <Check size={16} />
                          </button>

                        )}

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan={9}
                    className={styles.emptyCell}
                  >

                    <div className={styles.noData}>
                      No matches found.
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