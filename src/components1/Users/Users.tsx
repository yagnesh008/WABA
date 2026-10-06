"use client";

import {
  Search,
  Filter,
  Users as UsersIcon,
  UserCheck,
  ShieldCheck,
  MoreVertical,
  Eye,
  Edit,
} from "lucide-react";

import styles from "./Users.module.css";

const usersData = [
  {
    id: "ATH001",
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    role: "Athlete",
    organisation: "WABA Hyderabad",
    location: "Hyderabad, Telangana",
    status: "Active",
    date: "12 Sep 2026",
  },
  {
    id: "ATH002",
    name: "Priya Sharma",
    email: "priya@gmail.com",
    role: "Athlete",
    organisation: "WABA Bengaluru",
    location: "Bengaluru, Karnataka",
    status: "Active",
    date: "10 Sep 2026",
  },
  {
    id: "COA001",
    name: "Ramesh Kumar",
    email: "ramesh@gmail.com",
    role: "Coach",
    organisation: "Hyderabad Boxing Academy",
    location: "Hyderabad, Telangana",
    status: "Active",
    date: "08 Sep 2026",
  },
  {
    id: "COA002",
    name: "Anil Kumar",
    email: "anil@gmail.com",
    role: "Coach",
    organisation: "Bengaluru Adaptive Boxing",
    location: "Bengaluru, Karnataka",
    status: "Pending",
    date: "05 Sep 2026",
  },
  {
    id: "OFF001",
    name: "Suresh Reddy",
    email: "suresh@gmail.com",
    role: "Official",
    organisation: "WABA Telangana",
    location: "Hyderabad, Telangana",
    status: "Active",
    date: "03 Sep 2026",
  },
  {
    id: "OFF002",
    name: "Lakshmi Devi",
    email: "lakshmi@gmail.com",
    role: "Official",
    organisation: "WABA Andhra Pradesh",
    location: "Vijayawada, Andhra Pradesh",
    status: "Pending",
    date: "01 Sep 2026",
  },
];

export default function Users() {
  return (
    <main className={styles.usersPage}>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Users</h1>
          <p>
            Manage athletes, coaches and officials registered with WABA.
          </p>
        </div>

        <div className={styles.headerIcon}>
          <UsersIcon size={28} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.blue}`}>
            <UsersIcon size={22} />
          </div>

          <div>
            <span>Total Users</span>
            <strong>1,493</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.orange}`}>
            <UserCheck size={22} />
          </div>

          <div>
            <span>Active Users</span>
            <strong>1,421</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.green}`}>
            <ShieldCheck size={22} />
          </div>

          <div>
            <span>Verified Users</span>
            <strong>1,386</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.purple}`}>
            <UserCheck size={22} />
          </div>

          <div>
            <span>Pending Users</span>
            <strong>72</strong>
          </div>
        </div>

      </div>

      {/* Users Card */}
      <section className={styles.usersCard}>

        {/* Card Header */}
        <div className={styles.cardHeader}>

          <div>
            <h2>All Users</h2>
            <p>View and manage all registered WABA users.</p>
          </div>

          <span className={styles.totalBadge}>
            {usersData.length} Users
          </span>

        </div>

        {/* Search & Filters */}
        <div className={styles.filters}>

          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search by name, email or user ID..."
            />
          </div>

          <div className={styles.selectBox}>
            <Filter size={16} />

            <select defaultValue="all">
              <option value="all">All Roles</option>
              <option value="athlete">Athlete</option>
              <option value="coach">Coach</option>
              <option value="official">Official</option>
            </select>
          </div>

          <div className={styles.selectBox}>

            <select defaultValue="all">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="suspended">Suspended</option>
            </select>

          </div>

        </div>

        {/* Users Table */}
        <div className={styles.tableWrapper}>

          <table className={styles.table}>

            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Organisation</th>
                <th>Location</th>
                <th>Status</th>
                <th>Registered</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {usersData.map((user) => (

                <tr key={user.id}>

                  {/* User */}
                  <td>
                    <div className={styles.userInfo}>

                      <div className={styles.avatar}>
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{user.name}</strong>
                        <span>{user.id}</span>
                        <small>{user.email}</small>
                      </div>

                    </div>
                  </td>

                  {/* Role */}
                  <td>
                    <span
                      className={`${styles.roleBadge} ${
                        user.role === "Athlete"
                          ? styles.athlete
                          : user.role === "Coach"
                          ? styles.coach
                          : styles.official
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* Organisation */}
                  <td>
                    <span className={styles.organisation}>
                      {user.organisation}
                    </span>
                  </td>

                  {/* Location */}
                  <td>
                    <span className={styles.location}>
                      {user.location}
                    </span>
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={`${styles.status} ${
                        user.status === "Active"
                          ? styles.active
                          : styles.pending
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* Date */}
                  <td>
                    <span className={styles.date}>
                      {user.date}
                    </span>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className={styles.actions}>

                      <button title="View User">
                        <Eye size={16} />
                      </button>

                      <button title="Edit User">
                        <Edit size={16} />
                      </button>

                      <button title="More Options">
                        <MoreVertical size={16} />
                      </button>

                    </div>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className={styles.tableFooter}>

          <span>
            Showing <strong>1</strong> to{" "}
            <strong>{usersData.length}</strong> of{" "}
            <strong>1,493</strong> users
          </span>

          <div className={styles.pagination}>
            <button disabled>Previous</button>
            <button className={styles.currentPage}>1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>

        </div>

      </section>

    </main>
  );
}