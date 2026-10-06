"use client";

import { useState } from "react";
import {
  Search,
  Users,
  CheckCircle,
  Clock,
  CalendarDays,
  MapPin,
  Eye,
  Edit,
  UserPlus,
} from "lucide-react";

import styles from "./Assignment.module.css";

type AssignmentStatus =
  | "Assigned"
  | "Pending"
  | "Completed";

type AssignmentData = {
  id: string;
  officialId: string;
  officialName: string;
  role: string;
  competition: string;
  category: string;
  venue: string;
  date: string;
  time: string;
  state: string;
  status: AssignmentStatus;
};

const assignmentData: AssignmentData[] = [
  {
    id: "ASN001",
    officialId: "OFF001",
    officialName: "Suresh Reddy",
    role: "Referee",
    competition:
      "Telangana Adaptive Boxing Championship 2026",
    category: "Senior Men",
    venue: "Hyderabad Boxing Arena",
    date: "20 Oct 2026",
    time: "10:00 AM",
    state: "Telangana",
    status: "Assigned",
  },
  {
    id: "ASN002",
    officialId: "OFF002",
    officialName: "Lakshmi Devi",
    role: "Judge",
    competition:
      "Telangana Adaptive Boxing Championship 2026",
    category: "Senior Women",
    venue: "Hyderabad Boxing Arena",
    date: "20 Oct 2026",
    time: "11:00 AM",
    state: "Telangana",
    status: "Pending",
  },
  {
    id: "ASN003",
    officialId: "OFF003",
    officialName: "Ravi Kumar",
    role: "Technical Official",
    competition:
      "Andhra Pradesh Wheelchair Boxing Championship",
    category: "Junior Men",
    venue: "Vijayawada Sports Complex",
    date: "05 Nov 2026",
    time: "09:30 AM",
    state: "Andhra Pradesh",
    status: "Assigned",
  },
  {
    id: "ASN004",
    officialId: "OFF004",
    officialName: "Anjali Sharma",
    role: "Classifier",
    competition:
      "South India Adaptive Boxing Tournament",
    category: "Senior Women",
    venue: "Bengaluru Boxing Stadium",
    date: "15 Nov 2026",
    time: "02:00 PM",
    state: "Karnataka",
    status: "Assigned",
  },
  {
    id: "ASN005",
    officialId: "OFF005",
    officialName: "Ramesh Kumar",
    role: "Coach",
    competition:
      "Hyderabad Wheelchair Boxing Open",
    category: "Senior Men",
    venue: "Hyderabad Boxing Academy",
    date: "25 Nov 2026",
    time: "03:00 PM",
    state: "Telangana",
    status: "Pending",
  },
  {
    id: "ASN006",
    officialId: "OFF007",
    officialName: "Vijay Sharma",
    role: "Referee",
    competition:
      "Karnataka Adaptive Boxing Championship",
    category: "Senior Women",
    venue: "Mysuru Sports Arena",
    date: "02 Dec 2026",
    time: "10:30 AM",
    state: "Karnataka",
    status: "Completed",
  },
  {
    id: "ASN007",
    officialId: "OFF003",
    officialName: "Ravi Kumar",
    role: "Technical Official",
    competition:
      "National Wheelchair Boxing Open 2026",
    category: "Senior Men",
    venue: "National Sports Complex",
    date: "15 Dec 2026",
    time: "11:30 AM",
    state: "Delhi",
    status: "Assigned",
  },
  {
    id: "ASN008",
    officialId: "OFF001",
    officialName: "Suresh Reddy",
    role: "Referee",
    competition:
      "National Wheelchair Boxing Open 2026",
    category: "Senior Women",
    venue: "National Sports Complex",
    date: "15 Dec 2026",
    time: "01:00 PM",
    state: "Delhi",
    status: "Pending",
  },
];

export default function Assignment() {
  const [assignments, setAssignments] =
    useState<AssignmentData[]>(assignmentData);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredAssignments = assignments.filter(
    (assignment) => {
      const searchMatch =
        assignment.officialName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        assignment.officialId
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        assignment.competition
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        assignment.category
          .toLowerCase()
          .includes(search.toLowerCase());

      const roleMatch =
        roleFilter === "All" ||
        assignment.role === roleFilter;

      const statusMatch =
        statusFilter === "All" ||
        assignment.status === statusFilter;

      return searchMatch && roleMatch && statusMatch;
    }
  );

  const totalAssignments = assignments.length;

  const assignedAssignments = assignments.filter(
    (assignment) => assignment.status === "Assigned"
  ).length;

  const pendingAssignments = assignments.filter(
    (assignment) => assignment.status === "Pending"
  ).length;

  const completedAssignments = assignments.filter(
    (assignment) => assignment.status === "Completed"
  ).length;

  const handleAssign = (id: string) => {
    setAssignments((currentAssignments) =>
      currentAssignments.map((assignment) =>
        assignment.id === id
          ? {
              ...assignment,
              status: "Assigned",
            }
          : assignment
      )
    );
  };

  const handleComplete = (id: string) => {
    setAssignments((currentAssignments) =>
      currentAssignments.map((assignment) =>
        assignment.id === id
          ? {
              ...assignment,
              status: "Completed",
            }
          : assignment
      )
    );
  };

  return (
    <main className={styles.assignmentsPage}>
      {/* Page Header */}

      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <UserPlus size={28} />
          </div>

          <div>
            <h1>Official Assignments</h1>

            <p>
              Assign and manage officials for WABA
              competitions
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
            <span>Total Assignments</span>
            <strong>{totalAssignments}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div
            className={`${styles.cardIcon} ${styles.assignedIcon}`}
          >
            <CheckCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Assigned</span>
            <strong>{assignedAssignments}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div
            className={`${styles.cardIcon} ${styles.pendingIcon}`}
          >
            <Clock size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Pending</span>
            <strong>{pendingAssignments}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div
            className={`${styles.cardIcon} ${styles.completedIcon}`}
          >
            <CalendarDays size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Completed</span>
            <strong>{completedAssignments}</strong>
          </div>
        </div>
      </div>

      {/* Filters */}

      <div className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={19} />

          <input
            type="text"
            placeholder="Search official or competition..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.filterSelect}
          value={roleFilter}
          onChange={(e) =>
            setRoleFilter(e.target.value)
          }
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
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="All">All Status</option>
          <option value="Assigned">Assigned</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Assignment Table */}

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Official Assignments</h2>

            <p>
              Manage officials assigned to competitions
            </p>
          </div>

          <span className={styles.assignmentCount}>
            {filteredAssignments.length} Assignments
          </span>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.assignmentsTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Official
                </th>

                <th className={styles.tableHeading}>
                  Role
                </th>

                <th className={styles.tableHeading}>
                  Competition
                </th>

                <th className={styles.tableHeading}>
                  Category
                </th>

                <th className={styles.tableHeading}>
                  Date & Time
                </th>

                <th className={styles.tableHeading}>
                  Venue
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
              {filteredAssignments.length > 0 ? (
                filteredAssignments.map(
                  (assignment) => (
                    <tr key={assignment.id}>
                      {/* Official */}

                      <td className={styles.tableCell}>
                        <div
                          className={
                            styles.officialInfo
                          }
                        >
                          <div
                            className={styles.avatar}
                          >
                            {assignment.officialName.charAt(
                              0
                            )}
                          </div>

                          <div>
                            <div
                              className={
                                styles.officialName
                              }
                            >
                              {
                                assignment.officialName
                              }
                            </div>

                            <div
                              className={
                                styles.officialId
                              }
                            >
                              {assignment.officialId}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Role */}

                      <td className={styles.tableCell}>
                        <span className={styles.role}>
                          {assignment.role}
                        </span>
                      </td>

                      {/* Competition */}

                      <td className={styles.tableCell}>
                        <div
                          className={
                            styles.competition
                          }
                        >
                          {assignment.competition}
                        </div>
                      </td>

                      {/* Category */}

                      <td className={styles.tableCell}>
                        <span
                          className={styles.category}
                        >
                          {assignment.category}
                        </span>
                      </td>

                      {/* Date */}

                      <td className={styles.tableCell}>
                        <div
                          className={styles.dateTime}
                        >
                          <CalendarDays size={15} />

                          <div>
                            <span>
                              {assignment.date}
                            </span>

                            <small>
                              {assignment.time}
                            </small>
                          </div>
                        </div>
                      </td>

                      {/* Venue */}

                      <td className={styles.tableCell}>
                        <span className={styles.venue}>
                          {assignment.venue}
                        </span>
                      </td>

                      {/* Location */}

                      <td className={styles.tableCell}>
                        <div
                          className={styles.location}
                        >
                          <MapPin size={15} />

                          {assignment.state}
                        </div>
                      </td>

                      {/* Status */}

                      <td className={styles.tableCell}>
                        <span
                          className={`${styles.status} ${
                            assignment.status ===
                            "Assigned"
                              ? styles.assigned
                              : assignment.status ===
                                "Pending"
                              ? styles.pending
                              : styles.completed
                          }`}
                        >
                          {assignment.status}
                        </span>
                      </td>

                      {/* Actions */}

                      <td className={styles.tableCell}>
                        <div className={styles.actions}>
                          <button
                            className={
                              styles.viewButton
                            }
                            title="View Assignment"
                          >
                            <Eye size={16} />
                          </button>

                          <button
                            className={
                              styles.editButton
                            }
                            title="Edit Assignment"
                          >
                            <Edit size={16} />
                          </button>

                          {assignment.status ===
                            "Pending" && (
                            <button
                              className={
                                styles.assignButton
                              }
                              onClick={() =>
                                handleAssign(
                                  assignment.id
                                )
                              }
                            >
                              Assign
                            </button>
                          )}

                          {assignment.status ===
                            "Assigned" && (
                            <button
                              className={
                                styles.completeButton
                              }
                              onClick={() =>
                                handleComplete(
                                  assignment.id
                                )
                              }
                            >
                              Complete
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className={styles.emptyCell}
                  >
                    <div className={styles.noData}>
                      No assignments found
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