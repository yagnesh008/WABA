"use client";

import {
  Search,
  Filter,
  ShieldCheck,
  Eye,
  Edit,
} from "lucide-react";

import styles from "./Officials.module.css";

const officialsData = [
  {
    id: "OFF001",
    name: "Suresh Reddy",
    email: "suresh@gmail.com",
    organisation: "WABA Telangana",
    location: "Hyderabad, Telangana",
    experience: "7 Years",
    role: "Referee",
    certification: "National Level",
    status: "Active",
  },
  {
    id: "OFF002",
    name: "Lakshmi Devi",
    email: "lakshmi@gmail.com",
    organisation: "WABA Andhra Pradesh",
    location: "Vijayawada, Andhra Pradesh",
    experience: "5 Years",
    role: "Judge",
    certification: "State Level",
    status: "Pending",
  },
  {
    id: "OFF003",
    name: "Ravi Kumar",
    email: "ravi@gmail.com",
    organisation: "WABA Karnataka",
    location: "Bengaluru, Karnataka",
    experience: "9 Years",
    role: "Technical Official",
    certification: "National Level",
    status: "Active",
  },
];

export default function Official() {
  return (
    <main className={styles.officialsPage}>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Officials</h1>
          <p>
            Manage all officials registered with WABA.
          </p>
        </div>

        <div className={styles.headerIcon}>
          <ShieldCheck size={28} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>
          <span>Total Officials</span>
          <strong>156</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Active Officials</span>
          <strong>139</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Verified Officials</span>
          <strong>128</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Pending</span>
          <strong>17</strong>
        </div>

      </div>

      {/* Officials Table */}
      <section className={styles.officialsCard}>

        {/* Card Header */}
        <div className={styles.cardHeader}>
          <div>
            <h2>All Officials</h2>

            <p>
              View and manage registered WABA officials.
            </p>
          </div>

          <span className={styles.totalBadge}>
            {officialsData.length} Officials
          </span>
        </div>

        {/* Filters */}
        <div className={styles.filters}>

          {/* Search */}
          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search official..."
            />
          </div>

          {/* Role Filter */}
          <div className={styles.selectBox}>
            <Filter size={16} />

            <select defaultValue="all">
              <option value="all">
                All Roles
              </option>

              <option value="referee">
                Referee
              </option>

              <option value="judge">
                Judge
              </option>

              <option value="technical">
                Technical Official
              </option>

              <option value="classifier">
                Classifier
              </option>
            </select>
          </div>

        </div>

        {/* Table */}
        <div className={styles.tableWrapper}>

          <table className={styles.table}>

            <thead>
              <tr>
                <th>Official</th>
                <th>Organisation</th>
                <th>Location</th>
                <th>Experience</th>
                <th>Role</th>
                <th>Certification</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {officialsData.map((official) => (
                <tr key={official.id}>

                  {/* Official Information */}
                  <td>
                    <div className={styles.userInfo}>

                      <div className={styles.avatar}>
                        {official.name.charAt(0)}
                      </div>

                      <div>
                        <strong>
                          {official.name}
                        </strong>

                        <span>
                          {official.id}
                        </span>

                        <small>
                          {official.email}
                        </small>
                      </div>

                    </div>
                  </td>

                  {/* Organisation */}
                  <td>
                    {official.organisation}
                  </td>

                  {/* Location */}
                  <td>
                    {official.location}
                  </td>

                  {/* Experience */}
                  <td>
                    {official.experience}
                  </td>

                  {/* Role */}
                  <td>
                    <span className={styles.role}>
                      {official.role}
                    </span>
                  </td>

                  {/* Certification */}
                  <td>
                    <span className={styles.certification}>
                      {official.certification}
                    </span>
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={
                        official.status === "Active"
                          ? styles.active
                          : styles.pending
                      }
                    >
                      {official.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className={styles.actions}>

                      <button
                        type="button"
                        title="View Official"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        title="Edit Official"
                      >
                        <Edit size={16} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>

    </main>
  );
}