"use client";

import { useState } from "react";
import {
  Search,
  Users,
  CheckCircle,
  Clock,
  UserX,
  Eye,
  Edit,
  MapPin,
  Trophy,
} from "lucide-react";

import styles from "./Athlete1.module.css";

type AthleteStatus = "Active" | "Pending" | "Suspended";

type Athlete = {
  id: string;
  name: string;
  email: string;
  organisation: string;
  category: string;
  classification: string;
  state: string;
  competitions: number;
  status: AthleteStatus;
};

const athleteData: Athlete[] = [
  {
    id: "ATH001",
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    organisation: "WABA Hyderabad",
    category: "Senior Men",
    classification: "WH1",
    state: "Telangana",
    competitions: 6,
    status: "Active",
  },
  {
    id: "ATH002",
    name: "Priya Sharma",
    email: "priya@gmail.com",
    organisation: "WABA Bengaluru",
    category: "Senior Women",
    classification: "WH2",
    state: "Karnataka",
    competitions: 5,
    status: "Active",
  },
  {
    id: "ATH003",
    name: "Arjun Reddy",
    email: "arjun@gmail.com",
    organisation: "WABA Andhra Pradesh",
    category: "Junior Men",
    classification: "WH3",
    state: "Andhra Pradesh",
    competitions: 3,
    status: "Pending",
  },
  {
    id: "ATH004",
    name: "Sneha Reddy",
    email: "sneha@gmail.com",
    organisation: "Bengaluru Adaptive Boxing Club",
    category: "Senior Women",
    classification: "WH2",
    state: "Karnataka",
    competitions: 7,
    status: "Active",
  },
  {
    id: "ATH005",
    name: "Vikram Singh",
    email: "vikram@gmail.com",
    organisation: "Hyderabad Boxing Academy",
    category: "Senior Men",
    classification: "WH1",
    state: "Telangana",
    competitions: 8,
    status: "Active",
  },
  {
    id: "ATH006",
    name: "Kavya Devi",
    email: "kavya@gmail.com",
    organisation: "Bengaluru Adaptive Boxing Academy",
    category: "Senior Women",
    classification: "WH3",
    state: "Karnataka",
    competitions: 4,
    status: "Pending",
  },
  {
    id: "ATH007",
    name: "Kiran Kumar",
    email: "kiran@gmail.com",
    organisation: "WABA Andhra Pradesh",
    category: "Junior Men",
    classification: "WH2",
    state: "Andhra Pradesh",
    competitions: 2,
    status: "Suspended",
  },
  {
    id: "ATH008",
    name: "Lakshmi Devi",
    email: "lakshmi@gmail.com",
    organisation: "WABA Telangana",
    category: "Senior Women",
    classification: "WH1",
    state: "Telangana",
    competitions: 6,
    status: "Active",
  },
];

export default function Athlete1() {
  const [athletes, setAthletes] = useState<Athlete[]>(athleteData);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const totalAthletes = athletes.length;
  const activeAthletes = athletes.filter(
    (athlete) => athlete.status === "Active"
  ).length;

  const pendingAthletes = athletes.filter(
    (athlete) => athlete.status === "Pending"
  ).length;

  const suspendedAthletes = athletes.filter(
    (athlete) => athlete.status === "Suspended"
  ).length;

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(search.toLowerCase()) ||
      athlete.email.toLowerCase().includes(search.toLowerCase()) ||
      athlete.id.toLowerCase().includes(search.toLowerCase()) ||
      athlete.organisation.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" ||
      athlete.category === categoryFilter;

    const matchesStatus =
      statusFilter === "All" ||
      athlete.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const activateAthlete = (id: string) => {
    setAthletes((currentAthletes) =>
      currentAthletes.map((athlete) =>
        athlete.id === id
          ? { ...athlete, status: "Active" }
          : athlete
      )
    );
  };

  return (
    <main className={styles.athletePage}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <Users size={24} />
          </div>

          <div>
            <h1>Athletes</h1>
            <p>Manage registered WABA athletes</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.cardIcon}>
            <Users size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Total Athletes</span>
            <strong>{totalAthletes}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.activeIcon}`}>
            <CheckCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Active Athletes</span>
            <strong>{activeAthletes}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.pendingIcon}`}>
            <Clock size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Pending</span>
            <strong>{pendingAthletes}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.suspendedIcon}`}>
            <UserX size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Suspended</span>
            <strong>{suspendedAthletes}</strong>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search athlete, ID, email or organisation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.filterSelect}
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Senior Men">Senior Men</option>
          <option value="Senior Women">Senior Women</option>
          <option value="Junior Men">Junior Men</option>
        </select>

        <select
          className={styles.filterSelect}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Suspended">Suspended</option>
        </select>
      </div>

      {/* Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Athlete List</h2>
            <p>{filteredAthletes.length} athletes found</p>
          </div>

          <div className={styles.athleteCount}>
            <Trophy size={17} />
            Registered Athletes
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.athletesTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>Athlete</th>
                <th className={styles.tableHeading}>Organisation</th>
                <th className={styles.tableHeading}>Category</th>
                <th className={styles.tableHeading}>Classification</th>
                <th className={styles.tableHeading}>Location</th>
                <th className={styles.tableHeading}>Competitions</th>
                <th className={styles.tableHeading}>Status</th>
                <th className={styles.tableHeading}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAthletes.map((athlete) => (
                <tr key={athlete.id}>
                  <td className={styles.tableCell}>
                    <div className={styles.athleteInfo}>
                      <div className={styles.avatar}>
                        {athlete.name.charAt(0)}
                      </div>

                      <div>
                        <div className={styles.athleteName}>
                          {athlete.name}
                        </div>

                        <div className={styles.athleteEmail}>
                          {athlete.email}
                        </div>

                        <div className={styles.athleteId}>
                          {athlete.id}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <span className={styles.organisation}>
                      {athlete.organisation}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <span className={styles.category}>
                      {athlete.category}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <span className={styles.classification}>
                      {athlete.classification}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.location}>
                      <MapPin size={15} />
                      {athlete.state}
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.competitions}>
                      <Trophy size={15} />
                      {athlete.competitions}
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <span
                      className={`${styles.status} ${
                        athlete.status === "Active"
                          ? styles.active
                          : athlete.status === "Pending"
                          ? styles.pending
                          : styles.suspended
                      }`}
                    >
                      {athlete.status}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.viewButton}
                        title="View Athlete"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        className={styles.editButton}
                        title="Edit Athlete"
                      >
                        <Edit size={16} />
                      </button>

                      {athlete.status === "Suspended" && (
                        <button
                          type="button"
                          className={styles.activateButton}
                          onClick={() => activateAthlete(athlete.id)}
                        >
                          Activate
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}