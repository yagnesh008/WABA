"use client";

import {
  Search,
  Filter,
  Users,
  Eye,
  Edit,
} from "lucide-react";

import styles from "./Coach.module.css";

const coachesData = [
  {
    id: "COA001",
    name: "Ramesh Kumar",
    email: "ramesh@gmail.com",
    organisation: "Hyderabad Boxing Academy",
    location: "Hyderabad, Telangana",
    experience: "8 Years",
    specialization: "Adaptive Boxing",
    status: "Active",
  },
  {
    id: "COA002",
    name: "Anil Kumar",
    email: "anil@gmail.com",
    organisation: "Bengaluru Adaptive Boxing",
    location: "Bengaluru, Karnataka",
    experience: "5 Years",
    specialization: "Boxing Training",
    status: "Pending",
  },
  {
    id: "COA003",
    name: "Suresh Rao",
    email: "sureshrao@gmail.com",
    organisation: "WABA Andhra Pradesh",
    location: "Vijayawada, Andhra Pradesh",
    experience: "10 Years",
    specialization: "Competition Training",
    status: "Active",
  },
];

export default function Coach() {
  return (
    <main className={styles.coachesPage}>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Coaches</h1>
          <p>Manage all coaches registered with WABA.</p>
        </div>

        <div className={styles.headerIcon}>
          <Users size={28} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>
          <span>Total Coaches</span>
          <strong>248</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Active Coaches</span>
          <strong>221</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Verified Coaches</span>
          <strong>207</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Pending</span>
          <strong>27</strong>
        </div>

      </div>

      {/* Coaches Table Card */}
      <section className={styles.coachesCard}>

        {/* Card Header */}
        <div className={styles.cardHeader}>
          <div>
            <h2>All Coaches</h2>
            <p>View and manage registered WABA coaches.</p>
          </div>

          <span className={styles.totalBadge}>
            {coachesData.length} Coaches
          </span>
        </div>

        {/* Filters */}
        <div className={styles.filters}>

          {/* Search */}
          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search coach..."
            />
          </div>

          {/* Specialization Filter */}
          <div className={styles.selectBox}>
            <Filter size={16} />

            <select defaultValue="all">
              <option value="all">
                All Specializations
              </option>

              <option value="adaptive">
                Adaptive Boxing
              </option>

              <option value="training">
                Boxing Training
              </option>

              <option value="competition">
                Competition Training
              </option>
            </select>
          </div>

        </div>

        {/* Table */}
        <div className={styles.tableWrapper}>

          <table className={styles.table}>

            <thead>
              <tr>
                <th>Coach</th>
                <th>Organisation</th>
                <th>Location</th>
                <th>Experience</th>
                <th>Specialization</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {coachesData.map((coach) => (
                <tr key={coach.id}>

                  {/* Coach Information */}
                  <td>
                    <div className={styles.userInfo}>

                      <div className={styles.avatar}>
                        {coach.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{coach.name}</strong>

                        <span>
                          {coach.id}
                        </span>

                        <small>
                          {coach.email}
                        </small>
                      </div>

                    </div>
                  </td>

                  {/* Organisation */}
                  <td>
                    {coach.organisation}
                  </td>

                  {/* Location */}
                  <td>
                    {coach.location}
                  </td>

                  {/* Experience */}
                  <td>
                    {coach.experience}
                  </td>

                  {/* Specialization */}
                  <td>
                    <span className={styles.specialization}>
                      {coach.specialization}
                    </span>
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={
                        coach.status === "Active"
                          ? styles.active
                          : styles.pending
                      }
                    >
                      {coach.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className={styles.actions}>

                      <button
                        type="button"
                        title="View Coach"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        title="Edit Coach"
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