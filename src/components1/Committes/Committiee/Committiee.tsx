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

import styles from "./Committiee.module.css";

type CommitteeStatus = "Active" | "Pending" | "Suspended";

interface Committee {
  id: string;
  name: string;
  type: string;
  chairperson: string;
  secretary: string;
  members: number;
  level: string;
  location: string;
  status: CommitteeStatus;
}

const initialCommittees: Committee[] = [
  {
    id: "COM001",
    name: "National Executive Committee",
    type: "Executive",
    chairperson: "Rajesh Kumar",
    secretary: "Suresh Reddy",
    members: 12,
    level: "National",
    location: "New Delhi",
    status: "Active",
  },
  {
    id: "COM002",
    name: "Technical Committee",
    type: "Technical",
    chairperson: "Anil Kumar",
    secretary: "Lakshmi Devi",
    members: 10,
    level: "National",
    location: "Hyderabad, Telangana",
    status: "Active",
  },
  {
    id: "COM003",
    name: "Athlete Selection Committee",
    type: "Selection",
    chairperson: "Ravi Kumar",
    secretary: "Priya Sharma",
    members: 8,
    level: "National",
    location: "Vijayawada, Andhra Pradesh",
    status: "Pending",
  },
  {
    id: "COM004",
    name: "Medical Committee",
    type: "Medical",
    chairperson: "Ramesh Rao",
    secretary: "Kavya Reddy",
    members: 7,
    level: "National",
    location: "Bengaluru, Karnataka",
    status: "Active",
  },
  {
    id: "COM005",
    name: "Competition Committee",
    type: "Competition",
    chairperson: "Vijay Sharma",
    secretary: "Meena Devi",
    members: 11,
    level: "National",
    location: "New Delhi",
    status: "Active",
  },
  {
    id: "COM006",
    name: "Classification Committee",
    type: "Classification",
    chairperson: "Anjali Sharma",
    secretary: "Sneha Reddy",
    members: 8,
    level: "National",
    location: "Hyderabad, Telangana",
    status: "Pending",
  },
  {
    id: "COM007",
    name: "Disciplinary Committee",
    type: "Disciplinary",
    chairperson: "Suresh Kumar",
    secretary: "Kavya Devi",
    members: 6,
    level: "National",
    location: "Mumbai, Maharashtra",
    status: "Active",
  },
  {
    id: "COM008",
    name: "Women Empowerment Committee",
    type: "Special",
    chairperson: "Priya Reddy",
    secretary: "Anjali Sharma",
    members: 9,
    level: "National",
    location: "Bengaluru, Karnataka",
    status: "Suspended",
  },
];

export default function Committiee() {
  const [committees, setCommittees] =
    useState<Committee[]>(initialCommittees);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const activeCount = committees.filter(
    (committee) => committee.status === "Active"
  ).length;

  const pendingCount = committees.filter(
    (committee) => committee.status === "Pending"
  ).length;

  const suspendedCount = committees.filter(
    (committee) => committee.status === "Suspended"
  ).length;

  const totalMembers = committees.reduce(
    (total, committee) => total + committee.members,
    0
  );

  const filteredCommittees = committees.filter((committee) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      committee.id.toLowerCase().includes(searchValue) ||
      committee.name.toLowerCase().includes(searchValue) ||
      committee.chairperson.toLowerCase().includes(searchValue) ||
      committee.secretary.toLowerCase().includes(searchValue);

    const matchesType =
      typeFilter === "All" ||
      committee.type === typeFilter;

    const matchesStatus =
      statusFilter === "All" ||
      committee.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
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
    <main className={styles.committeeListPage}>
      {/* Page Header */}

      <div className={styles.pageHeader}>
        <div>
          <h1>Committees</h1>
          <p>
            Manage and monitor all WABA national committees.
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
            <p>Active</p>
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
          className={styles.selectBox}
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Executive">Executive</option>
          <option value="Technical">Technical</option>
          <option value="Selection">Selection</option>
          <option value="Medical">Medical</option>
          <option value="Competition">Competition</option>
          <option value="Classification">Classification</option>
          <option value="Disciplinary">Disciplinary</option>
          <option value="Special">Special</option>
        </select>

        <select
          className={styles.selectBox}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Suspended">Suspended</option>
        </select>
      </section>

      {/* Committee Table */}

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Committee List</h2>
            <p>
              View committee details and manage committee status.
            </p>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.committeeTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Committee
                </th>

                <th className={styles.tableHeading}>
                  Type
                </th>

                <th className={styles.tableHeading}>
                  Chairperson
                </th>

                <th className={styles.tableHeading}>
                  Secretary
                </th>

                <th className={styles.tableHeading}>
                  Members
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
              {filteredCommittees.length > 0 ? (
                filteredCommittees.map((committee) => (
                  <tr key={committee.id}>
                    <td className={styles.tableCell}>
                      <div className={styles.committeeInfo}>
                        <div className={styles.committeeIcon}>
                          <Users size={18} />
                        </div>

                        <div>
                          <strong>
                            {committee.name}
                          </strong>

                          <span>
                            {committee.id}
                          </span>
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
                      <span className={styles.levelBadge}>
                        {committee.level}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      {committee.location}
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
                          title="View Committee"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          className={styles.editButton}
                          title="Edit Committee"
                        >
                          <Edit size={17} />
                        </button>

                        {committee.status === "Suspended" && (
                          <button
                            className={styles.activateButton}
                            onClick={() =>
                              activateCommittee(
                                committee.id
                              )
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