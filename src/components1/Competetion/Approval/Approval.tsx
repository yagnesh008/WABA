"use client";

import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Eye,
  Search,
  Trophy,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";

import styles from "./Approval.module.css";

type CompetitionStatus = "Pending" | "Approved" | "Rejected";

type Competition = {
  id: string;
  name: string;
  type: string;
  level: string;
  organizer: string;
  location: string;
  startDate: string;
  endDate: string;
  participants: number;
  submittedDate: string;
  status: CompetitionStatus;
};

const initialCompetitionData: Competition[] = [
  {
    id: "CMP001",
    name: "Telangana Adaptive Boxing Championship 2026",
    type: "State Championship",
    level: "State",
    organizer: "WABA Telangana",
    location: "Hyderabad, Telangana",
    startDate: "20 Oct 2026",
    endDate: "22 Oct 2026",
    participants: 120,
    submittedDate: "15 Sep 2026",
    status: "Pending",
  },
  {
    id: "CMP002",
    name: "Andhra Pradesh Wheelchair Boxing Championship",
    type: "State Championship",
    level: "State",
    organizer: "WABA Andhra Pradesh",
    location: "Vijayawada, Andhra Pradesh",
    startDate: "05 Nov 2026",
    endDate: "07 Nov 2026",
    participants: 90,
    submittedDate: "14 Sep 2026",
    status: "Pending",
  },
  {
    id: "CMP003",
    name: "South India Adaptive Boxing Tournament",
    type: "Open Championship",
    level: "Regional",
    organizer: "WABA Karnataka",
    location: "Bengaluru, Karnataka",
    startDate: "15 Nov 2026",
    endDate: "17 Nov 2026",
    participants: 150,
    submittedDate: "12 Sep 2026",
    status: "Pending",
  },
  {
    id: "CMP004",
    name: "Hyderabad Wheelchair Boxing Open",
    type: "Open Tournament",
    level: "District",
    organizer: "Hyderabad Boxing Academy",
    location: "Hyderabad, Telangana",
    startDate: "25 Nov 2026",
    endDate: "26 Nov 2026",
    participants: 75,
    submittedDate: "10 Sep 2026",
    status: "Pending",
  },
  {
    id: "CMP005",
    name: "Karnataka Adaptive Boxing Championship",
    type: "State Championship",
    level: "State",
    organizer: "WABA Karnataka",
    location: "Mysuru, Karnataka",
    startDate: "02 Dec 2026",
    endDate: "04 Dec 2026",
    participants: 110,
    submittedDate: "08 Sep 2026",
    status: "Approved",
  },
  {
    id: "CMP006",
    name: "National Wheelchair Boxing Open 2026",
    type: "National Championship",
    level: "National",
    organizer: "WABA National",
    location: "New Delhi",
    startDate: "15 Dec 2026",
    endDate: "18 Dec 2026",
    participants: 250,
    submittedDate: "05 Sep 2026",
    status: "Rejected",
  },
];

export default function Approval() {
  const [competitions, setCompetitions] = useState<Competition[]>(
    initialCompetitionData
  );

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleApprove = (id: string) => {
    setCompetitions((previous) =>
      previous.map((competition) =>
        competition.id === id
          ? {
              ...competition,
              status: "Approved",
            }
          : competition
      )
    );
  };

  const handleReject = (id: string) => {
    setCompetitions((previous) =>
      previous.map((competition) =>
        competition.id === id
          ? {
              ...competition,
              status: "Rejected",
            }
          : competition
      )
    );
  };

  const filteredCompetitions = competitions.filter((competition) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      competition.name.toLowerCase().includes(searchText) ||
      competition.organizer.toLowerCase().includes(searchText) ||
      competition.location.toLowerCase().includes(searchText) ||
      competition.id.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      competition.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalCount = competitions.length;

  const pendingCount = competitions.filter(
    (competition) => competition.status === "Pending"
  ).length;

  const approvedCount = competitions.filter(
    (competition) => competition.status === "Approved"
  ).length;

  const rejectedCount = competitions.filter(
    (competition) => competition.status === "Rejected"
  ).length;

  return (
    <main className={styles.approvalPage}>

      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>

          <div className={styles.titleIcon}>
            <CheckCircle size={25} />
          </div>

          <div>
            <h1>Competition Approval</h1>

            <p>
              Review and manage competition approval requests.
            </p>
          </div>

        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className={styles.summaryGrid}>

        {/* TOTAL */}
        <div className={styles.summaryCard}>

          <div className={styles.cardIcon}>
            <Trophy size={21} />
          </div>

          <div className={styles.cardContent}>
            <span>Total Requests</span>
            <h2>{totalCount}</h2>
          </div>

        </div>

        {/* PENDING */}
        <div className={styles.summaryCard}>

          <div className={styles.cardIcon}>
            <CalendarDays size={21} />
          </div>

          <div className={styles.cardContent}>
            <span>Pending</span>
            <h2>{pendingCount}</h2>
          </div>

        </div>

        {/* APPROVED */}
        <div className={styles.summaryCard}>

          <div className={styles.cardIcon}>
            <CheckCircle size={21} />
          </div>

          <div className={styles.cardContent}>
            <span>Approved</span>
            <h2>{approvedCount}</h2>
          </div>

        </div>

        {/* REJECTED */}
        <div className={styles.summaryCard}>

          <div className={styles.cardIcon}>
            <XCircle size={21} />
          </div>

          <div className={styles.cardContent}>
            <span>Rejected</span>
            <h2>{rejectedCount}</h2>
          </div>

        </div>

      </div>

      {/* SEARCH AND FILTER */}
      <div className={styles.filterCard}>

        <div className={styles.searchBox}>

          <Search size={18} />

          <input
            type="text"
            placeholder="Search competition, organizer or location..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

        </div>

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className={styles.statusFilter}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

      </div>

      {/* TABLE CARD */}
      <div className={styles.tableCard}>

        {/* TABLE HEADER */}
        <div className={styles.tableHeader}>

          <div>
            <h2>Competition Requests</h2>

            <p>
              Review submitted competition requests.
            </p>
          </div>

          <div className={styles.requestCount}>
            {filteredCompetitions.length} Requests
          </div>

        </div>

        {/* TABLE */}
        <div className={styles.tableWrapper}>

          <table className={styles.competitionTable}>

            <thead className={styles.tableHead}>

              <tr>

                <th className={styles.tableHeading}>
                  ID
                </th>

                <th className={styles.tableHeading}>
                  Competition
                </th>

                <th className={styles.tableHeading}>
                  Organizer
                </th>

                <th className={styles.tableHeading}>
                  Location
                </th>

                <th className={styles.tableHeading}>
                  Dates
                </th>

                <th className={styles.tableHeading}>
                  Participants
                </th>

                <th className={styles.tableHeading}>
                  Submitted
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

              {filteredCompetitions.length > 0 ? (

                filteredCompetitions.map((competition) => (

                  <tr key={competition.id}>

                    {/* ID */}
                    <td className={styles.tableCell}>
                      <span className={styles.competitionId}>
                        {competition.id}
                      </span>
                    </td>

                    {/* COMPETITION */}
                    <td className={styles.tableCell}>

                      <div className={styles.competitionName}>

                        <strong>
                          {competition.name}
                        </strong>

                        <span>
                          {competition.type}
                        </span>

                        <small>
                          {competition.level} Level
                        </small>

                      </div>

                    </td>

                    {/* ORGANIZER */}
                    <td className={styles.tableCell}>

                      <div className={styles.organizer}>
                        {competition.organizer}
                      </div>

                    </td>

                    {/* LOCATION */}
                    <td className={styles.tableCell}>

                      <div className={styles.location}>

                        <MapPin size={15} />

                        <span>
                          {competition.location}
                        </span>

                      </div>

                    </td>

                    {/* DATES */}
                    <td className={styles.tableCell}>

                      <div className={styles.date}>

                        <span>
                          {competition.startDate}
                        </span>

                        <small>
                          to
                        </small>

                        <span>
                          {competition.endDate}
                        </span>

                      </div>

                    </td>

                    {/* PARTICIPANTS */}
                    <td className={styles.tableCell}>

                      <div className={styles.participants}>

                        <Users size={15} />

                        <span>
                          {competition.participants}
                        </span>

                      </div>

                    </td>

                    {/* SUBMITTED */}
                    <td className={styles.tableCell}>

                      <span className={styles.submittedDate}>
                        {competition.submittedDate}
                      </span>

                    </td>

                    {/* STATUS */}
                    <td className={styles.tableCell}>

                      <span
                        className={`${styles.status} ${
                          competition.status === "Pending"
                            ? styles.pending
                            : competition.status === "Approved"
                            ? styles.approved
                            : styles.rejected
                        }`}
                      >
                        {competition.status}
                      </span>

                    </td>

                    {/* ACTIONS */}
                    <td className={styles.tableCell}>

                      <div className={styles.actions}>

                        {/* VIEW */}
                        <button
                          type="button"
                          className={styles.viewButton}
                          title="View Competition"
                        >
                          <Eye size={16} />
                        </button>

                        {/* APPROVE */}
                        {competition.status === "Pending" && (
                          <button
                            type="button"
                            className={styles.approveButton}
                            title="Approve Competition"
                            onClick={() =>
                              handleApprove(competition.id)
                            }
                          >
                            <CheckCircle size={16} />
                          </button>
                        )}

                        {/* REJECT */}
                        {competition.status === "Pending" && (
                          <button
                            type="button"
                            className={styles.rejectButton}
                            title="Reject Competition"
                            onClick={() =>
                              handleReject(competition.id)
                            }
                          >
                            <XCircle size={16} />
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

                      <Search size={30} />

                      <h3>
                        No competition requests found
                      </h3>

                      <p>
                        Try changing your search or status filter.
                      </p>

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