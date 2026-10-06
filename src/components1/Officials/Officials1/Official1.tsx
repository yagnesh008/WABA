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
  Award,
  MapPin,
} from "lucide-react";

import styles from "./Official1.module.css";

type OfficialStatus = "Active" | "Pending" | "Suspended";

type OfficialData = {
  id: string;
  name: string;
  email: string;
  organisation: string;
  role: string;
  experience: string;
  level: string;
  state: string;
  status: OfficialStatus;
};

const officialsData: OfficialData[] = [
  {
    id: "OFF001",
    name: "Suresh Reddy",
    email: "suresh@gmail.com",
    organisation: "WABA Telangana",
    role: "Referee",
    experience: "7 Years",
    level: "National Level",
    state: "Telangana",
    status: "Active",
  },
  {
    id: "OFF002",
    name: "Lakshmi Devi",
    email: "lakshmi@gmail.com",
    organisation: "WABA Andhra Pradesh",
    role: "Judge",
    experience: "5 Years",
    level: "State Level",
    state: "Andhra Pradesh",
    status: "Pending",
  },
  {
    id: "OFF003",
    name: "Ravi Kumar",
    email: "ravi@gmail.com",
    organisation: "WABA Karnataka",
    role: "Technical Official",
    experience: "9 Years",
    level: "National Level",
    state: "Karnataka",
    status: "Active",
  },
  {
    id: "OFF004",
    name: "Anjali Sharma",
    email: "anjali@gmail.com",
    organisation: "WABA Maharashtra",
    role: "Classifier",
    experience: "6 Years",
    level: "National Level",
    state: "Maharashtra",
    status: "Active",
  },
  {
    id: "OFF005",
    name: "Ramesh Kumar",
    email: "ramesh@gmail.com",
    organisation: "WABA Telangana",
    role: "Coach",
    experience: "8 Years",
    level: "State Level",
    state: "Telangana",
    status: "Pending",
  },
  {
    id: "OFF006",
    name: "Priya Reddy",
    email: "priya@gmail.com",
    organisation: "WABA Karnataka",
    role: "Judge",
    experience: "4 Years",
    level: "State Level",
    state: "Karnataka",
    status: "Suspended",
  },
  {
    id: "OFF007",
    name: "Vijay Sharma",
    email: "vijay@gmail.com",
    organisation: "WABA Andhra Pradesh",
    role: "Referee",
    experience: "10 Years",
    level: "International Level",
    state: "Andhra Pradesh",
    status: "Active",
  },
];

export default function Official1() {
  const [officials, setOfficials] =
    useState<OfficialData[]>(officialsData);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredOfficials = officials.filter((official) => {
    const searchMatch =
      official.name.toLowerCase().includes(search.toLowerCase()) ||
      official.email.toLowerCase().includes(search.toLowerCase()) ||
      official.id.toLowerCase().includes(search.toLowerCase()) ||
      official.organisation.toLowerCase().includes(search.toLowerCase());

    const roleMatch =
      roleFilter === "All" || official.role === roleFilter;

    const statusMatch =
      statusFilter === "All" ||
      official.status === statusFilter;

    return searchMatch && roleMatch && statusMatch;
  });

  const totalOfficials = officials.length;

  const activeOfficials = officials.filter(
    (official) => official.status === "Active"
  ).length;

  const pendingOfficials = officials.filter(
    (official) => official.status === "Pending"
  ).length;

  const suspendedOfficials = officials.filter(
    (official) => official.status === "Suspended"
  ).length;

  const handleActivate = (id: string) => {
    setOfficials((currentOfficials) =>
      currentOfficials.map((official) =>
        official.id === id
          ? { ...official, status: "Active" }
          : official
      )
    );
  };

  return (
    <main className={styles.officialsPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <Award size={28} />
          </div>

          <div>
            <h1>Officials</h1>
            <p>
              Manage WABA officials, roles and official information
            </p>
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
            <span>Total Officials</span>
            <strong>{totalOfficials}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.activeIcon}`}>
            <CheckCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Active Officials</span>
            <strong>{activeOfficials}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.pendingIcon}`}>
            <Clock size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Pending Verification</span>
            <strong>{pendingOfficials}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.suspendedIcon}`}>
            <UserX size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Suspended</span>
            <strong>{suspendedOfficials}</strong>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={19} />

          <input
            type="text"
            placeholder="Search officials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.filterSelect}
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="All">All Roles</option>
          <option value="Referee">Referee</option>
          <option value="Judge">Judge</option>
          <option value="Technical Official">
            Technical Official
          </option>
          <option value="Classifier">Classifier</option>
          <option value="Coach">Coach</option>
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
            <h2>Officials List</h2>
            <p>Manage registered WABA officials</p>
          </div>

          <span className={styles.officialCount}>
            {filteredOfficials.length} Officials
          </span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.officialsTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Official
                </th>

                <th className={styles.tableHeading}>
                  Organisation
                </th>

                <th className={styles.tableHeading}>
                  Role
                </th>

                <th className={styles.tableHeading}>
                  Experience
                </th>

                <th className={styles.tableHeading}>
                  Level
                </th>

                <th className={styles.tableHeading}>
                  Location
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
              {filteredOfficials.length > 0 ? (
                filteredOfficials.map((official) => (
                  <tr key={official.id}>
                    <td className={styles.tableCell}>
                      <div className={styles.officialInfo}>
                        <div className={styles.avatar}>
                          {official.name.charAt(0)}
                        </div>

                        <div>
                          <div className={styles.officialName}>
                            {official.name}
                          </div>

                          <div className={styles.officialEmail}>
                            {official.email}
                          </div>

                          <div className={styles.officialId}>
                            {official.id}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className={styles.tableCell}>
                      <span className={styles.organisation}>
                        {official.organisation}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <span className={styles.role}>
                        {official.role}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <span className={styles.experience}>
                        {official.experience}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <span className={styles.level}>
                        {official.level}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.location}>
                        <MapPin size={15} />
                        {official.state}
                      </div>
                    </td>

                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.status} ${
                          official.status === "Active"
                            ? styles.active
                            : official.status === "Pending"
                            ? styles.pending
                            : styles.suspended
                        }`}
                      >
                        {official.status}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
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
                          <Edit size={16} />
                        </button>

                        {official.status === "Suspended" && (
                          <button
                            className={styles.activateButton}
                            onClick={() =>
                              handleActivate(official.id)
                            }
                          >
                            Activate
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className={styles.emptyCell}
                  >
                    <div className={styles.noData}>
                      No officials found
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