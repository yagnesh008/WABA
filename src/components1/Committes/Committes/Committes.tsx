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
  Building2,
} from "lucide-react";

import styles from "./Committes.module.css";

type CommitteeStatus = "Active" | "Pending" | "Suspended";

interface CommitteeData {
  id: string;
  name: string;
  type: string;
  chairperson: string;
  secretary: string;
  members: number;
  location: string;
  level: string;
  status: CommitteeStatus;
}

const initialCommittees: CommitteeData[] = [
  {
    id: "COM001",
    name: "National Executive Committee",
    type: "Executive Committee",
    chairperson: "Rajesh Kumar",
    secretary: "Suresh Reddy",
    members: 12,
    location: "New Delhi",
    level: "National",
    status: "Active",
  },
  {
    id: "COM002",
    name: "Technical Committee",
    type: "Technical Committee",
    chairperson: "Anil Kumar",
    secretary: "Lakshmi Devi",
    members: 10,
    location: "Hyderabad, Telangana",
    level: "National",
    status: "Active",
  },
  {
    id: "COM003",
    name: "Athlete Selection Committee",
    type: "Selection Committee",
    chairperson: "Ravi Kumar",
    secretary: "Priya Sharma",
    members: 8,
    location: "Vijayawada, Andhra Pradesh",
    level: "National",
    status: "Pending",
  },
  {
    id: "COM004",
    name: "Medical Committee",
    type: "Medical Committee",
    chairperson: "Ramesh Rao",
    secretary: "Kavya Reddy",
    members: 7,
    location: "Bengaluru, Karnataka",
    level: "National",
    status: "Active",
  },
  {
    id: "COM005",
    name: "Disciplinary Committee",
    type: "Disciplinary Committee",
    chairperson: "Vijay Sharma",
    secretary: "Meena Devi",
    members: 6,
    location: "Mumbai, Maharashtra",
    level: "National",
    status: "Active",
  },
  {
    id: "COM006",
    name: "Women Empowerment Committee",
    type: "Special Committee",
    chairperson: "Anjali Sharma",
    secretary: "Sneha Reddy",
    members: 9,
    location: "Hyderabad, Telangana",
    level: "National",
    status: "Pending",
  },
  {
    id: "COM007",
    name: "Competition Committee",
    type: "Competition Committee",
    chairperson: "Suresh Kumar",
    secretary: "Lakshmi Devi",
    members: 11,
    location: "New Delhi",
    level: "National",
    status: "Active",
  },
  {
    id: "COM008",
    name: "Classification Committee",
    type: "Classification Committee",
    chairperson: "Ravi Kumar",
    secretary: "Anjali Sharma",
    members: 8,
    location: "Bengaluru, Karnataka",
    level: "National",
    status: "Suspended",
  },
];

export default function Committes() {
  const [committees, setCommittees] =
    useState<CommitteeData[]>(initialCommittees);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const activeCount = committees.filter(
    (item) => item.status === "Active"
  ).length;

  const pendingCount = committees.filter(
    (item) => item.status === "Pending"
  ).length;

  const suspendedCount = committees.filter(
    (item) => item.status === "Suspended"
  ).length;

  const totalMembers = committees.reduce(
    (total, item) => total + item.members,
    0
  );

  const filteredCommittees = committees.filter((committee) => {
    const searchMatch =
      committee.name.toLowerCase().includes(search.toLowerCase()) ||
      committee.id.toLowerCase().includes(search.toLowerCase()) ||
      committee.chairperson.toLowerCase().includes(search.toLowerCase()) ||
      committee.secretary.toLowerCase().includes(search.toLowerCase());

    const typeMatch =
      typeFilter === "All" || committee.type === typeFilter;

    const statusMatch =
      statusFilter === "All" || committee.status === statusFilter;

    return searchMatch && typeMatch && statusMatch;
  });

  const activateCommittee = (id: string) => {
    setCommittees((current) =>
      current.map((committee) =>
        committee.id === id
          ? { ...committee, status: "Active" }
          : committee
      )
    );
  };

  return (
    <main className={styles.committeePage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Committee Management</h1>
          <p>
            Manage national committees and committee activities.
          </p>
        </div>

        <button className={styles.addButton}>
          + Add Committee
        </button>
      </div>

      {/* Summary Cards */}

      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <Users size={22} />
          </div>

          <div>
            <p>Total Committees</p>
            <h2>{committees.length}</h2>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <CheckCircle size={22} />
          </div>

          <div>
            <p>Active Committees</p>
            <h2>{activeCount}</h2>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <Clock size={22} />
          </div>

          <div>
            <p>Pending</p>
            <h2>{pendingCount}</h2>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <UserX size={22} />
          </div>

          <div>
            <p>Suspended</p>
            <h2>{suspendedCount}</h2>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <Building2 size={22} />
          </div>

          <div>
            <p>Total Members</p>
            <h2>{totalMembers}</h2>
          </div>
        </div>
      </section>

      {/* Filters */}

      <section className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search committee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className={styles.selectBox}
        >
          <option value="All">All Types</option>
          <option value="Executive Committee">
            Executive Committee
          </option>
          <option value="Technical Committee">
            Technical Committee
          </option>
          <option value="Selection Committee">
            Selection Committee
          </option>
          <option value="Medical Committee">
            Medical Committee
          </option>
          <option value="Disciplinary Committee">
            Disciplinary Committee
          </option>
          <option value="Special Committee">
            Special Committee
          </option>
          <option value="Competition Committee">
            Competition Committee
          </option>
          <option value="Classification Committee">
            Classification Committee
          </option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className={styles.selectBox}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Suspended">Suspended</option>
        </select>
      </section>

      {/* Table */}

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Committees</h2>
            <p>
              View and manage all national committees.
            </p>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.committeeTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>Committee</th>
                <th className={styles.tableHeading}>Type</th>
                <th className={styles.tableHeading}>
                  Chairperson
                </th>
                <th className={styles.tableHeading}>Secretary</th>
                <th className={styles.tableHeading}>Members</th>
                <th className={styles.tableHeading}>Location</th>
                <th className={styles.tableHeading}>Level</th>
                <th className={styles.tableHeading}>Status</th>
                <th className={styles.tableHeading}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCommittees.length > 0 ? (
                filteredCommittees.map((committee) => (
                  <tr key={committee.id}>
                    <td className={styles.tableCell}>
                      <div className={styles.committeeInfo}>
                        <div className={styles.committeeIcon}>
                          <Users size={18} />
                        </div>

                        <div>
                          <strong>{committee.name}</strong>
                          <span>{committee.id}</span>
                        </div>
                      </div>
                    </td>

                    <td className={styles.tableCell}>
                      {committee.type}
                    </td>

                    <td className={styles.tableCell}>
                      {committee.chairperson}
                    </td>

                    <td className={styles.tableCell}>
                      {committee.secretary}
                    </td>

                    <td className={styles.tableCell}>
                      {committee.members}
                    </td>

                    <td className={styles.tableCell}>
                      {committee.location}
                    </td>

                    <td className={styles.tableCell}>
                      <span className={styles.levelBadge}>
                        {committee.level}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.statusBadge} ${
                          committee.status === "Active"
                            ? styles.active
                            : committee.status === "Pending"
                            ? styles.pending
                            : styles.suspended
                        }`}
                      >
                        {committee.status}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.actions}>
                        <button
                          className={styles.viewButton}
                          title="View"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          className={styles.editButton}
                          title="Edit"
                        >
                          <Edit size={17} />
                        </button>

                        {committee.status === "Suspended" && (
                          <button
                            className={styles.activateButton}
                            onClick={() =>
                              activateCommittee(committee.id)
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
                    colSpan={9}
                    className={styles.noData}
                  >
                    No committees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}