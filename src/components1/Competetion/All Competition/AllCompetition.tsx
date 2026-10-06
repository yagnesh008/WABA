"use client";

import { useMemo, useState } from "react";
import {
  Trophy,
  CalendarDays,
  PlayCircle,
  CheckCircle,
  Search,
  MapPin,
  Users,
  Eye,
  Pencil,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";

import styles from "./AllCompetition.module.css";

type CompetitionStatus = "Upcoming" | "Ongoing" | "Completed" | "Pending";

type Competition = {
  id: string;
  name: string;
  type: string;
  level: string;
  state: string;
  location: string;
  startDate: string;
  endDate: string;
  participants: number;
  status: CompetitionStatus;
};

const competitionsData: Competition[] = [
  {
    id: "CMP001",
    name: "National Wheelchair Boxing Championship 2026",
    type: "Championship",
    level: "National",
    state: "All India",
    location: "Hyderabad, Telangana",
    startDate: "25 Sep 2026",
    endDate: "28 Sep 2026",
    participants: 128,
    status: "Upcoming",
  },
  {
    id: "CMP002",
    name: "South India Adaptive Boxing Championship",
    type: "Championship",
    level: "Regional",
    state: "Karnataka",
    location: "Bengaluru, Karnataka",
    startDate: "18 Sep 2026",
    endDate: "20 Sep 2026",
    participants: 86,
    status: "Ongoing",
  },
  {
    id: "CMP003",
    name: "Telangana State Wheelchair Boxing Championship",
    type: "Championship",
    level: "State",
    state: "Telangana",
    location: "Warangal, Telangana",
    startDate: "10 Aug 2026",
    endDate: "12 Aug 2026",
    participants: 72,
    status: "Completed",
  },
  {
    id: "CMP004",
    name: "Andhra Pradesh Adaptive Boxing Championship",
    type: "Championship",
    level: "State",
    state: "Andhra Pradesh",
    location: "Vijayawada, Andhra Pradesh",
    startDate: "05 Oct 2026",
    endDate: "07 Oct 2026",
    participants: 94,
    status: "Upcoming",
  },
  {
    id: "CMP005",
    name: "Karnataka Wheelchair Boxing Championship",
    type: "Championship",
    level: "State",
    state: "Karnataka",
    location: "Mysuru, Karnataka",
    startDate: "28 Jul 2026",
    endDate: "30 Jul 2026",
    participants: 65,
    status: "Completed",
  },
  {
    id: "CMP006",
    name: "Hyderabad District Adaptive Boxing Meet",
    type: "District Meet",
    level: "District",
    state: "Telangana",
    location: "Hyderabad, Telangana",
    startDate: "02 Oct 2026",
    endDate: "03 Oct 2026",
    participants: 48,
    status: "Upcoming",
  },
  {
    id: "CMP007",
    name: "Guntur District Wheelchair Boxing Meet",
    type: "District Meet",
    level: "District",
    state: "Andhra Pradesh",
    location: "Guntur, Andhra Pradesh",
    startDate: "15 Aug 2026",
    endDate: "16 Aug 2026",
    participants: 41,
    status: "Completed",
  },
  {
    id: "CMP008",
    name: "Telangana Adaptive Boxing Open",
    type: "Open Tournament",
    level: "State",
    state: "Telangana",
    location: "Karimnagar, Telangana",
    startDate: "22 Sep 2026",
    endDate: "24 Sep 2026",
    participants: 58,
    status: "Upcoming",
  },
  {
    id: "CMP009",
    name: "Bengaluru Adaptive Boxing Open",
    type: "Open Tournament",
    level: "District",
    state: "Karnataka",
    location: "Bengaluru, Karnataka",
    startDate: "12 Sep 2026",
    endDate: "14 Sep 2026",
    participants: 52,
    status: "Ongoing",
  },
  {
    id: "CMP010",
    name: "National Adaptive Boxing Open 2026",
    type: "Open Tournament",
    level: "National",
    state: "All India",
    location: "New Delhi, Delhi",
    startDate: "10 Nov 2026",
    endDate: "13 Nov 2026",
    participants: 156,
    status: "Pending",
  },
];

const ITEMS_PER_PAGE = 6;

export default function AllCompetition() {
  const [searchTerm, setSearchTerm] = useState("");
  const [stateFilter, setStateFilter] = useState("All States");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCompetitions = useMemo(() => {
    return competitionsData.filter((competition) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        competition.name.toLowerCase().includes(search) ||
        competition.id.toLowerCase().includes(search) ||
        competition.location.toLowerCase().includes(search);

      const matchesState =
        stateFilter === "All States" ||
        competition.state === stateFilter;

      const matchesStatus =
        statusFilter === "All Status" ||
        competition.status === statusFilter;

      const matchesType =
        typeFilter === "All Types" ||
        competition.type === typeFilter;

      return (
        matchesSearch &&
        matchesState &&
        matchesStatus &&
        matchesType
      );
    });
  }, [searchTerm, stateFilter, statusFilter, typeFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCompetitions.length / ITEMS_PER_PAGE)
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentCompetitions = filteredCompetitions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalCompetitions = competitionsData.length;

  const upcomingCompetitions = competitionsData.filter(
    (item) => item.status === "Upcoming"
  ).length;

  const ongoingCompetitions = competitionsData.filter(
    (item) => item.status === "Ongoing"
  ).length;

  const completedCompetitions = competitionsData.filter(
    (item) => item.status === "Completed"
  ).length;

  const handleFilterChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => {
    setter(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStateFilter("All States");
    setStatusFilter("All Status");
    setTypeFilter("All Types");
    setCurrentPage(1);
  };

  return (
    <main className={styles.allCompetitionsPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>All Competitions</h1>
          <p>
            View and manage all WABA competitions across different levels.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <Trophy size={18} />
          <span>{totalCompetitions} Competitions</span>
        </div>
      </div>

      {/* Summary Cards */}
      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={`${styles.iconBox} ${styles.blue}`}>
            <Trophy size={22} />
          </div>

          <div>
            <span>Total Competitions</span>
            <h2>{totalCompetitions}</h2>
            <small>All competitions</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.iconBox} ${styles.orange}`}>
            <CalendarDays size={22} />
          </div>

          <div>
            <span>Upcoming</span>
            <h2>{upcomingCompetitions}</h2>
            <small>Scheduled competitions</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.iconBox} ${styles.green}`}>
            <PlayCircle size={22} />
          </div>

          <div>
            <span>Ongoing</span>
            <h2>{ongoingCompetitions}</h2>
            <small>Currently active</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.iconBox} ${styles.purple}`}>
            <CheckCircle size={22} />
          </div>

          <div>
            <span>Completed</span>
            <h2>{completedCompetitions}</h2>
            <small>Finished competitions</small>
          </div>
        </div>
      </section>

      {/* Main Table Card */}
      <section className={styles.tableCard}>
        {/* Table Header */}
        <div className={styles.tableHeader}>
          <div>
            <h2>Competition List</h2>
            <p>Manage all registered WABA competitions</p>
          </div>
        </div>

        {/* Filters */}
        <div className={styles.filterSection}>
          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search competition..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className={styles.filterBox}>
            <Filter size={16} />

            <select
              value={stateFilter}
              onChange={(e) =>
                handleFilterChange(setStateFilter, e.target.value)
              }
            >
              <option>All States</option>
              <option>All India</option>
              <option>Telangana</option>
              <option>Andhra Pradesh</option>
              <option>Karnataka</option>
            </select>
          </div>

          <div className={styles.filterBox}>
            <select
              value={statusFilter}
              onChange={(e) =>
                handleFilterChange(setStatusFilter, e.target.value)
              }
            >
              <option>All Status</option>
              <option>Upcoming</option>
              <option>Ongoing</option>
              <option>Completed</option>
              <option>Pending</option>
            </select>
          </div>

          <div className={styles.filterBox}>
            <select
              value={typeFilter}
              onChange={(e) =>
                handleFilterChange(setTypeFilter, e.target.value)
              }
            >
              <option>All Types</option>
              <option>Championship</option>
              <option>District Meet</option>
              <option>Open Tournament</option>
            </select>
          </div>

          <button
            type="button"
            className={styles.clearButton}
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>

        {/* Table */}
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Competition</th>
                <th>Type</th>
                <th>Level</th>
                <th>Location</th>
                <th>Date</th>
                <th>Participants</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentCompetitions.length > 0 ? (
                currentCompetitions.map((competition) => (
                  <tr key={competition.id}>
                    <td>
                      <div className={styles.competitionCell}>
                        <div className={styles.trophyIcon}>
                          <Trophy size={17} />
                        </div>

                        <div>
                          <strong>{competition.name}</strong>
                          <span>{competition.id}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className={styles.typeText}>
                        {competition.type}
                      </span>
                    </td>

                    <td>
                      <span className={styles.levelBadge}>
                        {competition.level}
                      </span>
                    </td>

                    <td>
                      <div className={styles.locationCell}>
                        <MapPin size={15} />
                        <span>{competition.location}</span>
                      </div>
                    </td>

                    <td>
                      <div className={styles.dateCell}>
                        <CalendarDays size={15} />
                        <span>
                          {competition.startDate}
                          <br />
                          <small>to {competition.endDate}</small>
                        </span>
                      </div>
                    </td>

                    <td>
                      <div className={styles.participantCell}>
                        <Users size={15} />
                        <span>{competition.participants}</span>
                      </div>
                    </td>

                    <td>
                      <span
                        className={`${styles.status} ${
                          competition.status === "Upcoming"
                            ? styles.upcoming
                            : competition.status === "Ongoing"
                            ? styles.ongoing
                            : competition.status === "Completed"
                            ? styles.completed
                            : styles.pending
                        }`}
                      >
                        {competition.status}
                      </span>
                    </td>

                    <td>
                      <div className={styles.actionButtons}>
                        <button
                          type="button"
                          className={styles.viewButton}
                          title="View Competition"
                        >
                          <Eye size={16} />
                        </button>

                        <button
                          type="button"
                          className={styles.editButton}
                          title="Edit Competition"
                        >
                          <Pencil size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>
                    <div className={styles.noResults}>
                      <Trophy size={32} />
                      <h3>No competitions found</h3>
                      <p>
                        Try changing your search or filter options.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className={styles.pagination}>
          <span>
            Showing{" "}
            <strong>
              {filteredCompetitions.length === 0 ? 0 : startIndex + 1}
            </strong>{" "}
            to{" "}
            <strong>
              {Math.min(
                startIndex + ITEMS_PER_PAGE,
                filteredCompetitions.length
              )}
            </strong>{" "}
            of <strong>{filteredCompetitions.length}</strong> competitions
          </span>

          <div className={styles.paginationButtons}>
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((page) => Math.max(1, page - 1))
              }
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                type="button"
                key={index + 1}
                className={
                  currentPage === index + 1
                    ? styles.activePage
                    : ""
                }
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(totalPages, page + 1)
                )
              }
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}