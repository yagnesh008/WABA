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
  UserPlus,
} from "lucide-react";

import styles from "./Member.module.css";

type MemberStatus = "Active" | "Pending" | "Suspended";

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  committee: string;
  experience: string;
  location: string;
  joinedDate: string;
  status: MemberStatus;
}

const initialMembers: Member[] = [
  {
    id: "MEM001",
    name: "Rajesh Kumar",
    email: "rajesh@gmail.com",
    role: "Chairperson",
    committee: "National Executive Committee",
    experience: "12 Years",
    location: "New Delhi",
    joinedDate: "10 Jan 2025",
    status: "Active",
  },
  {
    id: "MEM002",
    name: "Suresh Reddy",
    email: "suresh@gmail.com",
    role: "Secretary",
    committee: "National Executive Committee",
    experience: "10 Years",
    location: "Hyderabad, Telangana",
    joinedDate: "10 Jan 2025",
    status: "Active",
  },
  {
    id: "MEM003",
    name: "Anil Kumar",
    email: "anil@gmail.com",
    role: "Chairperson",
    committee: "Technical Committee",
    experience: "9 Years",
    location: "Hyderabad, Telangana",
    joinedDate: "15 Feb 2025",
    status: "Active",
  },
  {
    id: "MEM004",
    name: "Lakshmi Devi",
    email: "lakshmi@gmail.com",
    role: "Member",
    committee: "Technical Committee",
    experience: "7 Years",
    location: "Vijayawada, Andhra Pradesh",
    joinedDate: "15 Feb 2025",
    status: "Pending",
  },
  {
    id: "MEM005",
    name: "Ravi Kumar",
    email: "ravi@gmail.com",
    role: "Chairperson",
    committee: "Athlete Selection Committee",
    experience: "11 Years",
    location: "Vijayawada, Andhra Pradesh",
    joinedDate: "20 Mar 2025",
    status: "Active",
  },
  {
    id: "MEM006",
    name: "Priya Sharma",
    email: "priya@gmail.com",
    role: "Secretary",
    committee: "Athlete Selection Committee",
    experience: "6 Years",
    location: "Bengaluru, Karnataka",
    joinedDate: "20 Mar 2025",
    status: "Pending",
  },
  {
    id: "MEM007",
    name: "Ramesh Rao",
    email: "ramesh@gmail.com",
    role: "Chairperson",
    committee: "Medical Committee",
    experience: "15 Years",
    location: "Bengaluru, Karnataka",
    joinedDate: "05 Apr 2025",
    status: "Active",
  },
  {
    id: "MEM008",
    name: "Kavya Reddy",
    email: "kavya@gmail.com",
    role: "Member",
    committee: "Medical Committee",
    experience: "8 Years",
    location: "Hyderabad, Telangana",
    joinedDate: "05 Apr 2025",
    status: "Suspended",
  },
  {
    id: "MEM009",
    name: "Vijay Sharma",
    email: "vijay@gmail.com",
    role: "Chairperson",
    committee: "Competition Committee",
    experience: "13 Years",
    location: "Mumbai, Maharashtra",
    joinedDate: "12 Apr 2025",
    status: "Active",
  },
  {
    id: "MEM010",
    name: "Anjali Sharma",
    email: "anjali@gmail.com",
    role: "Member",
    committee: "Classification Committee",
    experience: "7 Years",
    location: "Hyderabad, Telangana",
    joinedDate: "20 Apr 2025",
    status: "Active",
  },
];

export default function Member() {
  const [members, setMembers] =
    useState<Member[]>(initialMembers);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [committeeFilter, setCommitteeFilter] = useState("All");

  const activeCount = members.filter(
    (member) => member.status === "Active"
  ).length;

  const pendingCount = members.filter(
    (member) => member.status === "Pending"
  ).length;

  const suspendedCount = members.filter(
    (member) => member.status === "Suspended"
  ).length;

  const filteredMembers = members.filter((member) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      member.id.toLowerCase().includes(searchValue) ||
      member.name.toLowerCase().includes(searchValue) ||
      member.email.toLowerCase().includes(searchValue) ||
      member.committee.toLowerCase().includes(searchValue);

    const matchesRole =
      roleFilter === "All" ||
      member.role === roleFilter;

    const matchesStatus =
      statusFilter === "All" ||
      member.status === statusFilter;

    const matchesCommittee =
      committeeFilter === "All" ||
      member.committee === committeeFilter;

    return (
      matchesSearch &&
      matchesRole &&
      matchesStatus &&
      matchesCommittee
    );
  });

  const activateMember = (id: string) => {
    setMembers((current) =>
      current.map((member) =>
        member.id === id
          ? { ...member, status: "Active" }
          : member
      )
    );
  };

  return (
    <main className={styles.membersPage}>
      {/* Page Header */}

      <div className={styles.pageHeader}>
        <div>
          <h1>Committee Members</h1>
          <p>
            Manage members assigned to WABA committees.
          </p>
        </div>

        <button
          type="button"
          className={styles.addButton}
        >
          <UserPlus size={17} />
          Add Member
        </button>
      </div>

      {/* Summary Cards */}

      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <Users size={22} />
          </div>

          <div>
            <p>Total Members</p>
            <h2>{members.length}</h2>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <CheckCircle size={22} />
          </div>

          <div>
            <p>Active Members</p>
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
      </section>

      {/* Filters */}

      <section className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search member..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.selectBox}
          value={committeeFilter}
          onChange={(e) =>
            setCommitteeFilter(e.target.value)
          }
        >
          <option value="All">All Committees</option>
          <option value="National Executive Committee">
            National Executive
          </option>
          <option value="Technical Committee">
            Technical Committee
          </option>
          <option value="Athlete Selection Committee">
            Athlete Selection
          </option>
          <option value="Medical Committee">
            Medical Committee
          </option>
          <option value="Competition Committee">
            Competition Committee
          </option>
          <option value="Classification Committee">
            Classification Committee
          </option>
        </select>

        <select
          className={styles.selectBox}
          value={roleFilter}
          onChange={(e) =>
            setRoleFilter(e.target.value)
          }
        >
          <option value="All">All Roles</option>
          <option value="Chairperson">Chairperson</option>
          <option value="Secretary">Secretary</option>
          <option value="Member">Member</option>
        </select>

        <select
          className={styles.selectBox}
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
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
            <h2>Members List</h2>
            <p>
              View and manage all committee members.
            </p>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.membersTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Member
                </th>

                <th className={styles.tableHeading}>
                  Role
                </th>

                <th className={styles.tableHeading}>
                  Committee
                </th>

                <th className={styles.tableHeading}>
                  Experience
                </th>

                <th className={styles.tableHeading}>
                  Location
                </th>

                <th className={styles.tableHeading}>
                  Joined Date
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
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <tr key={member.id}>
                    <td className={styles.tableCell}>
                      <div className={styles.memberInfo}>
                        <div className={styles.memberIcon}>
                          <Users size={18} />
                        </div>

                        <div>
                          <strong>
                            {member.name}
                          </strong>

                          <span>
                            {member.id}
                          </span>

                          <small>
                            {member.email}
                          </small>
                        </div>
                      </div>
                    </td>

                    <td className={styles.tableCell}>
                      <span className={styles.roleBadge}>
                        {member.role}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      {member.committee}
                    </td>

                    <td className={styles.tableCell}>
                      {member.experience}
                    </td>

                    <td className={styles.tableCell}>
                      {member.location}
                    </td>

                    <td className={styles.tableCell}>
                      {member.joinedDate}
                    </td>

                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.statusBadge} ${
                          member.status === "Active"
                            ? styles.active
                            : member.status === "Pending"
                            ? styles.pending
                            : styles.suspended
                        }`}
                      >
                        {member.status}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.actions}>
                        <button
                          type="button"
                          className={styles.viewButton}
                          title="View Member"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          type="button"
                          className={styles.editButton}
                          title="Edit Member"
                        >
                          <Edit size={17} />
                        </button>

                        {member.status === "Suspended" && (
                          <button
                            type="button"
                            className={styles.activateButton}
                            onClick={() =>
                              activateMember(member.id)
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
                    className={styles.noData}
                  >
                    No members found.
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