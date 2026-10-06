"use client";

import { useState } from "react";
import {
  Swords,
  Search,
  Eye,
  Pencil,
  Trash2,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Plus,
  X,
} from "lucide-react";

import styles from "./Upcoming.module.css";

type Match = {
  id: string;
  competition: string;
  date: string;
  time: string;
  athlete: string;
  opponent: string;
  category: string;
  venue: string;
  status: "Scheduled" | "Confirmed";
};

const initialMatches: Match[] = [
  {
    id: "MAT001",
    competition: "National Adaptive Boxing Championship",
    date: "20 Oct 2026",
    time: "10:00 AM",
    athlete: "Rahul Kumar",
    opponent: "Amit Verma",
    category: "Lightweight",
    venue: "Hyderabad",
    status: "Confirmed",
  },
  {
    id: "MAT002",
    competition: "National Adaptive Boxing Championship",
    date: "20 Oct 2026",
    time: "11:30 AM",
    athlete: "Priya Reddy",
    opponent: "Neha Sharma",
    category: "Flyweight",
    venue: "Hyderabad",
    status: "Confirmed",
  },
  {
    id: "MAT003",
    competition: "South Zone Boxing Championship",
    date: "05 Nov 2026",
    time: "09:30 AM",
    athlete: "Suresh Babu",
    opponent: "Kiran Rao",
    category: "Welterweight",
    venue: "Bengaluru",
    status: "Scheduled",
  },
  {
    id: "MAT004",
    competition: "South Zone Boxing Championship",
    date: "05 Nov 2026",
    time: "11:00 AM",
    athlete: "Vikram Singh",
    opponent: "Arjun Patel",
    category: "Middleweight",
    venue: "Bengaluru",
    status: "Scheduled",
  },
  {
    id: "MAT005",
    competition: "State Adaptive Boxing Championship",
    date: "18 Nov 2026",
    time: "10:00 AM",
    athlete: "Sneha Reddy",
    opponent: "Kavya Nair",
    category: "Flyweight",
    venue: "Visakhapatnam",
    status: "Scheduled",
  },
];

export default function Upcoming() {
  const [matches, setMatches] = useState<Match[]>(initialMatches);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);

  const [newMatch, setNewMatch] = useState({
    competition: "",
    date: "",
    time: "",
    athlete: "",
    opponent: "",
    category: "",
    venue: "",
  });

  const filteredMatches = matches.filter((match) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      match.id.toLowerCase().includes(searchText) ||
      match.competition.toLowerCase().includes(searchText) ||
      match.athlete.toLowerCase().includes(searchText) ||
      match.opponent.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || match.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: string) => {
    setMatches((current) =>
      current.filter((match) => match.id !== id)
    );
  };

  const handleAddMatch = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !newMatch.competition ||
      !newMatch.date ||
      !newMatch.time ||
      !newMatch.athlete ||
      !newMatch.opponent ||
      !newMatch.category ||
      !newMatch.venue
    ) {
      return;
    }

    const match: Match = {
      id: `MAT${String(matches.length + 1).padStart(3, "0")}`,
      competition: newMatch.competition,
      date: newMatch.date,
      time: newMatch.time,
      athlete: newMatch.athlete,
      opponent: newMatch.opponent,
      category: newMatch.category,
      venue: newMatch.venue,
      status: "Scheduled",
    };

    setMatches((current) => [...current, match]);

    setNewMatch({
      competition: "",
      date: "",
      time: "",
      athlete: "",
      opponent: "",
      category: "",
      venue: "",
    });

    setShowModal(false);
  };

  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.titleRow}>
            <div className={styles.titleIcon}>
              <Swords size={25} />
            </div>

            <div>
              <h1>Upcoming Matches</h1>
              <p>
                Manage upcoming matches, athletes and competition schedules.
              </p>
            </div>
          </div>
        </div>

        <button
          className={styles.addButton}
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} />
          Schedule Match
        </button>
      </div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Swords size={21} />
          </div>
          <div>
            <span>Total Upcoming</span>
            <strong>{matches.length}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <CalendarDays size={21} />
          </div>
          <div>
            <span>This Month</span>
            <strong>2</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <Clock size={21} />
          </div>
          <div>
            <span>Confirmed</span>
            <strong>
              {matches.filter((m) => m.status === "Confirmed").length}
            </strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <Users size={21} />
          </div>
          <div>
            <span>Athletes</span>
            <strong>{matches.length}</strong>
          </div>
        </div>
      </div>

      {/* FILTER SECTION */}
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
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className={styles.select}
        >
          <option value="All">All Status</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Confirmed">Confirmed</option>
        </select>
      </section>

      {/* TABLE */}
      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Upcoming Matches</h2>
            <p>{filteredMatches.length} matches found</p>
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
                <th>Venue</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredMatches.length > 0 ? (
                filteredMatches.map((match) => (
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
                        <strong>{match.date}</strong>
                        <span>{match.time}</span>
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
                      <div className={styles.venue}>
                        <MapPin size={14} />
                        {match.venue}
                      </div>
                    </td>

                    <td>
                      <span
                        className={`${styles.status} ${
                          match.status === "Confirmed"
                            ? styles.confirmed
                            : styles.scheduled
                        }`}
                      >
                        {match.status}
                      </span>
                    </td>

                    <td>
                      <div className={styles.actions}>
                        <button
                          className={styles.viewButton}
                          title="View"
                        >
                          <Eye size={16} />
                        </button>

                        <button
                          className={styles.editButton}
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          className={styles.deleteButton}
                          title="Delete"
                          onClick={() => handleDelete(match.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9}>
                    <div className={styles.noData}>
                      No upcoming matches found.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowModal(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <h2>Schedule Match</h2>
                <p>Add a new upcoming match.</p>
              </div>

              <button
                className={styles.closeButton}
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddMatch}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Competition</label>
                  <input
                    type="text"
                    value={newMatch.competition}
                    onChange={(e) =>
                      setNewMatch({
                        ...newMatch,
                        competition: e.target.value,
                      })
                    }
                    placeholder="Competition name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Date</label>
                  <input
                    type="text"
                    value={newMatch.date}
                    onChange={(e) =>
                      setNewMatch({
                        ...newMatch,
                        date: e.target.value,
                      })
                    }
                    placeholder="20 Oct 2026"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Time</label>
                  <input
                    type="text"
                    value={newMatch.time}
                    onChange={(e) =>
                      setNewMatch({
                        ...newMatch,
                        time: e.target.value,
                      })
                    }
                    placeholder="10:00 AM"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Category</label>
                  <input
                    type="text"
                    value={newMatch.category}
                    onChange={(e) =>
                      setNewMatch({
                        ...newMatch,
                        category: e.target.value,
                      })
                    }
                    placeholder="Lightweight"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Athlete</label>
                  <input
                    type="text"
                    value={newMatch.athlete}
                    onChange={(e) =>
                      setNewMatch({
                        ...newMatch,
                        athlete: e.target.value,
                      })
                    }
                    placeholder="Athlete name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Opponent</label>
                  <input
                    type="text"
                    value={newMatch.opponent}
                    onChange={(e) =>
                      setNewMatch({
                        ...newMatch,
                        opponent: e.target.value,
                      })
                    }
                    placeholder="Opponent name"
                  />
                </div>

                <div className={styles.formGroupFull}>
                  <label>Venue</label>
                  <input
                    type="text"
                    value={newMatch.venue}
                    onChange={(e) =>
                      setNewMatch({
                        ...newMatch,
                        venue: e.target.value,
                      })
                    }
                    placeholder="Venue / City"
                  />
                </div>
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
                  type="submit"
                  className={styles.saveButton}
                >
                  Schedule Match
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}