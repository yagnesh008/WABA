"use client";

import { useState } from "react";
import {
  Search,
  Trophy,
  Users,
  CheckCircle,
  Clock,
  Eye,
  Check,
  X,
  CalendarDays,
  MapPin,
} from "lucide-react";

import styles from "./Registration.module.css";

type RegistrationStatus = "Pending" | "Approved" | "Rejected";

type RegistrationData = {
  id: string;
  athleteId: string;
  athleteName: string;
  competition: string;
  category: string;
  weightCategory: string;
  club: string;
  state: string;
  registrationDate: string;
  status: RegistrationStatus;
};

const initialRegistrations: RegistrationData[] = [
  {
    id: "REG001",
    athleteId: "ATH001",
    athleteName: "Rahul Kumar",
    competition: "Telangana Adaptive Boxing Championship 2026",
    category: "Senior Men",
    weightCategory: "Up to 60 Kg",
    club: "Hyderabad Adaptive Boxing Club",
    state: "Telangana",
    registrationDate: "12 Sep 2026",
    status: "Pending",
  },
  {
    id: "REG002",
    athleteId: "ATH002",
    athleteName: "Priya Sharma",
    competition: "Telangana Adaptive Boxing Championship 2026",
    category: "Senior Women",
    weightCategory: "Up to 55 Kg",
    club: "WABA Hyderabad",
    state: "Telangana",
    registrationDate: "11 Sep 2026",
    status: "Approved",
  },
  {
    id: "REG003",
    athleteId: "ATH003",
    athleteName: "Arjun Reddy",
    competition: "Andhra Pradesh Wheelchair Boxing Championship",
    category: "Junior Men",
    weightCategory: "Up to 50 Kg",
    club: "Yerragondapalem Adaptive Boxing Club",
    state: "Andhra Pradesh",
    registrationDate: "10 Sep 2026",
    status: "Pending",
  },
  {
    id: "REG004",
    athleteId: "ATH004",
    athleteName: "Sneha Reddy",
    competition: "South India Adaptive Boxing Tournament",
    category: "Senior Women",
    weightCategory: "Up to 60 Kg",
    club: "Bengaluru Adaptive Boxing Club",
    state: "Karnataka",
    registrationDate: "09 Sep 2026",
    status: "Approved",
  },
  {
    id: "REG005",
    athleteId: "ATH005",
    athleteName: "Vikram Singh",
    competition: "Hyderabad Wheelchair Boxing Open",
    category: "Senior Men",
    weightCategory: "Up to 75 Kg",
    club: "Hyderabad Boxing Academy",
    state: "Telangana",
    registrationDate: "08 Sep 2026",
    status: "Pending",
  },
  {
    id: "REG006",
    athleteId: "ATH006",
    athleteName: "Kavya Devi",
    competition: "Karnataka Adaptive Boxing Championship",
    category: "Senior Women",
    weightCategory: "Up to 65 Kg",
    club: "Bengaluru Adaptive Boxing Academy",
    state: "Karnataka",
    registrationDate: "07 Sep 2026",
    status: "Rejected",
  },
];

export default function Registration() {
  const [registrations, setRegistrations] =
    useState<RegistrationData[]>(initialRegistrations);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleApprove = (id: string) => {
    setRegistrations((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "Approved" }
          : item
      )
    );
  };

  const handleReject = (id: string) => {
    setRegistrations((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "Rejected" }
          : item
      )
    );
  };

  const filteredRegistrations = registrations.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      item.athleteName.toLowerCase().includes(searchText) ||
      item.athleteId.toLowerCase().includes(searchText) ||
      item.competition.toLowerCase().includes(searchText) ||
      item.club.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalRegistrations = registrations.length;

  const pendingRegistrations = registrations.filter(
    (item) => item.status === "Pending"
  ).length;

  const approvedRegistrations = registrations.filter(
    (item) => item.status === "Approved"
  ).length;

  const rejectedRegistrations = registrations.filter(
    (item) => item.status === "Rejected"
  ).length;

  return (
    <main className={styles.registrationPage}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <Trophy size={25} />
          </div>

          <div>
            <h1>Competition Registration</h1>
            <p>
              Manage athlete registrations for WABA competitions.
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
            <span>Total Registrations</span>
            <h2>{totalRegistrations}</h2>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.pendingIcon}`}>
            <Clock size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Pending</span>
            <h2>{pendingRegistrations}</h2>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.approvedIcon}`}>
            <CheckCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Approved</span>
            <h2>{approvedRegistrations}</h2>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.rejectedIcon}`}>
            <X size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Rejected</span>
            <h2>{rejectedRegistrations}</h2>
          </div>
        </div>
      </div>

      {/* FILTER SECTION */}
      <div className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={19} />

          <input
            type="text"
            placeholder="Search athlete, competition, club..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.statusFilter}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* TABLE */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Registration Requests</h2>
            <p>Review and manage athlete competition registrations.</p>
          </div>

          <span className={styles.requestCount}>
            {filteredRegistrations.length} Registrations
          </span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.registrationTable}>
            <thead className={styles.tableHead}>
              <tr>
                <th className={styles.tableHeading}>ID</th>
                <th className={styles.tableHeading}>Athlete</th>
                <th className={styles.tableHeading}>Competition</th>
                <th className={styles.tableHeading}>Category</th>
                <th className={styles.tableHeading}>Weight</th>
                <th className={styles.tableHeading}>Club</th>
                <th className={styles.tableHeading}>Location</th>
                <th className={styles.tableHeading}>Registered</th>
                <th className={styles.tableHeading}>Status</th>
                <th className={styles.tableHeading}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredRegistrations.length > 0 ? (
                filteredRegistrations.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.tableCell}>
                      <strong>{item.id}</strong>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.athleteName}>
                        {item.athleteName}
                      </div>

                      <div className={styles.athleteId}>
                        {item.athleteId}
                      </div>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.competitionName}>
                        <Trophy size={16} />
                        {item.competition}
                      </div>
                    </td>

                    <td className={styles.tableCell}>
                      {item.category}
                    </td>

                    <td className={styles.tableCell}>
                      {item.weightCategory}
                    </td>

                    <td className={styles.tableCell}>
                      {item.club}
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.location}>
                        <MapPin size={15} />
                        {item.state}
                      </div>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.date}>
                        <CalendarDays size={15} />
                        {item.registrationDate}
                      </div>
                    </td>

                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.status} ${
                          item.status === "Pending"
                            ? styles.pending
                            : item.status === "Approved"
                            ? styles.approved
                            : styles.rejected
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.actions}>
                        <button
                          type="button"
                          className={styles.viewButton}
                          title="View Registration"
                        >
                          <Eye size={16} />
                        </button>

                        {item.status !== "Approved" && (
                          <button
                            type="button"
                            className={styles.approveButton}
                            title="Approve Registration"
                            onClick={() => handleApprove(item.id)}
                          >
                            <Check size={16} />
                          </button>
                        )}

                        {item.status !== "Rejected" && (
                          <button
                            type="button"
                            className={styles.rejectButton}
                            title="Reject Registration"
                            onClick={() => handleReject(item.id)}
                          >
                            <X size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={10}
                    className={styles.emptyCell}
                  >
                    <div className={styles.noData}>
                      No registration records found.
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