"use client";

import {
  Search,
  Filter,
  Users,
  Eye,
  Edit,
} from "lucide-react";

import styles from "./Club.module.css";

const clubsData = [
  {
    id: "CLB001",
    club: "Hyderabad Adaptive Boxing Club",
    code: "HABC",
    mandal: "Serilingampally",
    district: "Rangareddy",
    state: "Telangana",
    president: "Rajesh Kumar",
    contact: "+91 98765 43210",
    athletes: 32,
    coaches: 4,
    status: "Active",
  },
  {
    id: "CLB002",
    club: "Shamshabad Boxing Club",
    code: "SBC",
    mandal: "Shamshabad",
    district: "Rangareddy",
    state: "Telangana",
    president: "Anil Kumar",
    contact: "+91 98765 43211",
    athletes: 26,
    coaches: 3,
    status: "Active",
  },
  {
    id: "CLB003",
    club: "Yerragondapalem Adaptive Boxing Club",
    code: "YABC",
    mandal: "Yerragondapalem",
    district: "Prakasam",
    state: "Andhra Pradesh",
    president: "Ravi Kumar",
    contact: "+91 98765 43212",
    athletes: 18,
    coaches: 2,
    status: "Active",
  },
  {
    id: "CLB004",
    club: "Markapur Boxing Club",
    code: "MBC",
    mandal: "Markapur",
    district: "Prakasam",
    state: "Andhra Pradesh",
    president: "Ramesh Rao",
    contact: "+91 98765 43213",
    athletes: 24,
    coaches: 3,
    status: "Pending",
  },
  {
    id: "CLB005",
    club: "Bengaluru Adaptive Boxing Club",
    code: "BABC",
    mandal: "Bengaluru North",
    district: "Bengaluru Urban",
    state: "Karnataka",
    president: "Vijay Sharma",
    contact: "+91 98765 43214",
    athletes: 41,
    coaches: 5,
    status: "Active",
  },
];

export default function Clubs() {
  return (
    <main className={styles.clubsPage}>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Clubs</h1>

          <p>
            Manage registered WABA boxing clubs across districts and mandals.
          </p>
        </div>

        <div className={styles.headerIcon}>
          <Users size={28} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>
          <span>Total Clubs</span>
          <strong>96</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Active Clubs</span>
          <strong>89</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Pending</span>
          <strong>7</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Total Athletes</span>
          <strong>1,248</strong>
        </div>

      </div>

      {/* Main Card */}
      <section className={styles.clubsCard}>

        {/* Card Header */}
        <div className={styles.cardHeader}>

          <div>
            <h2>All Clubs</h2>

            <p>
              View and manage registered WABA boxing clubs.
            </p>
          </div>

          <span className={styles.totalBadge}>
            96 Clubs
          </span>

        </div>

        {/* Filters */}
        <div className={styles.filters}>

          {/* Search */}
          <div className={styles.searchBox}>

            <Search size={18} />

            <input
              type="text"
              placeholder="Search club..."
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

                <th>Club</th>

                <th>Mandal</th>

                <th>District</th>

                <th>State</th>

                <th>President</th>

                <th>Contact</th>

                <th>Athletes</th>

                <th>Coaches</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>
            </thead>

            <tbody>

              {clubsData.map((club) => (

                <tr key={club.id}>

                  {/* Club */}
                  <td>

                    <div className={styles.clubInfo}>

                      <div className={styles.clubIcon}>
                        <Users size={18} />
                      </div>

                      <div className={styles.clubText}>

                        <strong>
                          {club.club}
                        </strong>

                        <span>
                          {club.code} • {club.id}
                        </span>

                      </div>

                    </div>

                  </td>

                  {/* Mandal */}
                  <td>
                    {club.mandal}
                  </td>

                  {/* District */}
                  <td>
                    {club.district}
                  </td>

                  {/* State */}
                  <td>
                    {club.state}
                  </td>

                  {/* President */}
                  <td>
                    {club.president}
                  </td>

                  {/* Contact */}
                  <td>
                    {club.contact}
                  </td>

                  {/* Athletes */}
                  <td>

                    <span className={styles.athleteBadge}>
                      {club.athletes}
                    </span>

                  </td>

                  {/* Coaches */}
                  <td>

                    <span className={styles.coachBadge}>
                      {club.coaches}
                    </span>

                  </td>

                  {/* Status */}
                  <td>

                    <span
                      className={
                        club.status === "Active"
                          ? styles.active
                          : styles.pending
                      }
                    >
                      {club.status}
                    </span>

                  </td>

                  {/* Actions */}
                  <td>

                    <div className={styles.actions}>

                      <button
                        type="button"
                        title="View Club"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        title="Edit Club"
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