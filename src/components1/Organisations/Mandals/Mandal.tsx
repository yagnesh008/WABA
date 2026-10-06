"use client";

import {
  Search,
  Filter,
  MapPin,
  Eye,
  Edit,
} from "lucide-react";

import styles from "./Mandal.module.css";

const mandalsData = [
  {
    id: "MAN001",
    mandal: "Serilingampally",
    code: "SLP",
    district: "Rangareddy",
    state: "Telangana",
    president: "Rajesh Kumar",
    secretary: "Suresh Reddy",
    contact: "+91 98765 43210",
    clubs: 4,
    athletes: 32,
    status: "Active",
  },
  {
    id: "MAN002",
    mandal: "Shamshabad",
    code: "SHM",
    district: "Rangareddy",
    state: "Telangana",
    president: "Anil Kumar",
    secretary: "Lakshmi Devi",
    contact: "+91 98765 43211",
    clubs: 3,
    athletes: 26,
    status: "Active",
  },
  {
    id: "MAN003",
    mandal: "Yerragondapalem",
    code: "YGP",
    district: "Prakasam",
    state: "Andhra Pradesh",
    president: "Ravi Kumar",
    secretary: "Priya Sharma",
    contact: "+91 98765 43212",
    clubs: 2,
    athletes: 18,
    status: "Active",
  },
  {
    id: "MAN004",
    mandal: "Markapur",
    code: "MKP",
    district: "Prakasam",
    state: "Andhra Pradesh",
    president: "Ramesh Rao",
    secretary: "Kavya Reddy",
    contact: "+91 98765 43213",
    clubs: 3,
    athletes: 24,
    status: "Pending",
  },
  {
    id: "MAN005",
    mandal: "Bengaluru North",
    code: "BNR",
    district: "Bengaluru Urban",
    state: "Karnataka",
    president: "Vijay Sharma",
    secretary: "Meena Devi",
    contact: "+91 98765 43214",
    clubs: 5,
    athletes: 41,
    status: "Active",
  },
];

export default function Mandal() {
  return (
    <main className={styles.mandalPage}>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Mandal Organisations</h1>

          <p>
            Manage WABA mandal-level organisations under district
            administrations.
          </p>
        </div>

        <div className={styles.headerIcon}>
          <MapPin size={28} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>
          <span>Total Mandals</span>
          <strong>164</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Active Mandals</span>
          <strong>151</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Pending</span>
          <strong>13</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Total Clubs</span>
          <strong>96</strong>
        </div>

      </div>

      {/* Main Card */}
      <section className={styles.mandalCard}>

        {/* Card Header */}
        <div className={styles.cardHeader}>

          <div>
            <h2>All Mandal Organisations</h2>

            <p>
              View and manage registered WABA mandal organisations.
            </p>
          </div>

          <span className={styles.totalBadge}>
            164 Mandals
          </span>

        </div>

        {/* Filters */}
        <div className={styles.filters}>

          {/* Search */}
          <div className={styles.searchBox}>

            <Search size={18} />

            <input
              type="text"
              placeholder="Search mandal..."
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

                <th>Mandal</th>

                <th>District</th>

                <th>State</th>

                <th>President</th>

                <th>Secretary</th>

                <th>Contact</th>

                <th>Clubs</th>

                <th>Athletes</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>
            </thead>

            <tbody>

              {mandalsData.map((mandal) => (

                <tr key={mandal.id}>

                  {/* Mandal */}
                  <td>

                    <div className={styles.mandalInfo}>

                      <div className={styles.mandalIcon}>
                        <MapPin size={18} />
                      </div>

                      <div className={styles.mandalText}>

                        <strong>
                          {mandal.mandal}
                        </strong>

                        <span>
                          {mandal.code} • {mandal.id}
                        </span>

                      </div>

                    </div>

                  </td>

                  {/* District */}
                  <td>
                    {mandal.district}
                  </td>

                  {/* State */}
                  <td>
                    {mandal.state}
                  </td>

                  {/* President */}
                  <td>
                    {mandal.president}
                  </td>

                  {/* Secretary */}
                  <td>
                    {mandal.secretary}
                  </td>

                  {/* Contact */}
                  <td>
                    {mandal.contact}
                  </td>

                  {/* Clubs */}
                  <td>

                    <span className={styles.numberBadge}>
                      {mandal.clubs}
                    </span>

                  </td>

                  {/* Athletes */}
                  <td>

                    <span className={styles.athleteBadge}>
                      {mandal.athletes}
                    </span>

                  </td>

                  {/* Status */}
                  <td>

                    <span
                      className={
                        mandal.status === "Active"
                          ? styles.active
                          : styles.pending
                      }
                    >
                      {mandal.status}
                    </span>

                  </td>

                  {/* Actions */}
                  <td>

                    <div className={styles.actions}>

                      <button
                        type="button"
                        title="View Mandal"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        title="Edit Mandal"
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