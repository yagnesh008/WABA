"use client";

import {
  Search,
  Filter,
  GraduationCap,
  Eye,
  Edit,
} from "lucide-react";

import styles from "./Acadamic.module.css";

const academiesData = [
  {
    id: "ACA001",
    academy: "Hyderabad Adaptive Boxing Academy",
    code: "HABA",
    mandal: "Serilingampally",
    district: "Rangareddy",
    state: "Telangana",
    director: "Rajesh Kumar",
    contact: "+91 98765 43210",
    athletes: 48,
    coaches: 6,
    status: "Active",
  },
  {
    id: "ACA002",
    academy: "Telangana Wheelchair Boxing Academy",
    code: "TWBA",
    mandal: "Shamshabad",
    district: "Rangareddy",
    state: "Telangana",
    director: "Anil Kumar",
    contact: "+91 98765 43211",
    athletes: 36,
    coaches: 5,
    status: "Active",
  },
  {
    id: "ACA003",
    academy: "Andhra Adaptive Boxing Academy",
    code: "AABA",
    mandal: "Yerragondapalem",
    district: "Prakasam",
    state: "Andhra Pradesh",
    director: "Ravi Kumar",
    contact: "+91 98765 43212",
    athletes: 29,
    coaches: 4,
    status: "Active",
  },
  {
    id: "ACA004",
    academy: "Markapur Boxing Academy",
    code: "MBA",
    mandal: "Markapur",
    district: "Prakasam",
    state: "Andhra Pradesh",
    director: "Ramesh Rao",
    contact: "+91 98765 43213",
    athletes: 22,
    coaches: 3,
    status: "Pending",
  },
  {
    id: "ACA005",
    academy: "Bengaluru Adaptive Boxing Academy",
    code: "BABA",
    mandal: "Bengaluru North",
    district: "Bengaluru Urban",
    state: "Karnataka",
    director: "Vijay Sharma",
    contact: "+91 98765 43214",
    athletes: 55,
    coaches: 7,
    status: "Active",
  },
];

export default function Academies() {
  return (
    <main className={styles.academiesPage}>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Academies</h1>

          <p>
            Manage registered WABA boxing academies across different
            districts and states.
          </p>
        </div>

        <div className={styles.headerIcon}>
          <GraduationCap size={28} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>
          <span>Total Academies</span>
          <strong>54</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Active Academies</span>
          <strong>49</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Pending</span>
          <strong>5</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Total Athletes</span>
          <strong>1,248</strong>
        </div>

      </div>

      {/* Main Card */}
      <section className={styles.academiesCard}>

        {/* Card Header */}
        <div className={styles.cardHeader}>

          <div>
            <h2>All Academies</h2>

            <p>
              View and manage registered WABA boxing academies.
            </p>
          </div>

          <span className={styles.totalBadge}>
            54 Academies
          </span>

        </div>

        {/* Filters */}
        <div className={styles.filters}>

          {/* Search */}
          <div className={styles.searchBox}>

            <Search size={18} />

            <input
              type="text"
              placeholder="Search academy..."
            />

          </div>

          {/* State Filter */}
          <div className={styles.selectBox}>

            <Filter size={16} />

            <select defaultValue="all">

              <option value="all">
                All States
              </option>

              <option value="telangana">
                Telangana
              </option>

              <option value="andhra">
                Andhra Pradesh
              </option>

              <option value="karnataka">
                Karnataka
              </option>

            </select>

          </div>

          {/* Status Filter */}
          <div className={styles.selectBox}>

            <Filter size={16} />

            <select defaultValue="all">

              <option value="all">
                All Status
              </option>

              <option value="active">
                Active
              </option>

              <option value="pending">
                Pending
              </option>

            </select>

          </div>

        </div>

        {/* Table */}
        <div className={styles.tableWrapper}>

          <table className={styles.table}>

            <thead>
              <tr>

                <th>Academy</th>

                <th>Mandal</th>

                <th>District</th>

                <th>State</th>

                <th>Director</th>

                <th>Contact</th>

                <th>Athletes</th>

                <th>Coaches</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>
            </thead>

            <tbody>

              {academiesData.map((academy) => (

                <tr key={academy.id}>

                  {/* Academy */}
                  <td>

                    <div className={styles.academyInfo}>

                      <div className={styles.academyIcon}>
                        <GraduationCap size={18} />
                      </div>

                      <div className={styles.academyText}>

                        <strong>
                          {academy.academy}
                        </strong>

                        <span>
                          {academy.code} • {academy.id}
                        </span>

                      </div>

                    </div>

                  </td>

                  {/* Mandal */}
                  <td>
                    {academy.mandal}
                  </td>

                  {/* District */}
                  <td>
                    {academy.district}
                  </td>

                  {/* State */}
                  <td>
                    {academy.state}
                  </td>

                  {/* Director */}
                  <td>
                    {academy.director}
                  </td>

                  {/* Contact */}
                  <td>
                    {academy.contact}
                  </td>

                  {/* Athletes */}
                  <td>

                    <span className={styles.athleteBadge}>
                      {academy.athletes}
                    </span>

                  </td>

                  {/* Coaches */}
                  <td>

                    <span className={styles.coachBadge}>
                      {academy.coaches}
                    </span>

                  </td>

                  {/* Status */}
                  <td>

                    <span
                      className={
                        academy.status === "Active"
                          ? styles.active
                          : styles.pending
                      }
                    >
                      {academy.status}
                    </span>

                  </td>

                  {/* Actions */}
                  <td>

                    <div className={styles.actions}>

                      <button
                        type="button"
                        title="View Academy"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        title="Edit Academy"
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