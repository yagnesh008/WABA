"use client";

import {
  Search,
  Filter,
  Map,
  Eye,
  Edit,
} from "lucide-react";

import styles from "./State.module.css";

const statesData = [
  {
    id: "ST001",
    state: "Telangana",
    code: "TG",
    president: "Rajesh Kumar",
    secretary: "Suresh Reddy",
    contact: "+91 98765 43210",
    districts: 12,
    athletes: 248,
    status: "Active",
  },
  {
    id: "ST002",
    state: "Andhra Pradesh",
    code: "AP",
    president: "Ravi Kumar",
    secretary: "Lakshmi Devi",
    contact: "+91 98765 43211",
    districts: 13,
    athletes: 186,
    status: "Active",
  },
  {
    id: "ST003",
    state: "Karnataka",
    code: "KA",
    president: "Anil Kumar",
    secretary: "Priya Sharma",
    contact: "+91 98765 43212",
    districts: 31,
    athletes: 214,
    status: "Active",
  },
  {
    id: "ST004",
    state: "Tamil Nadu",
    code: "TN",
    president: "Ramesh Rao",
    secretary: "Kavya Reddy",
    contact: "+91 98765 43213",
    districts: 38,
    athletes: 165,
    status: "Pending",
  },
  {
    id: "ST005",
    state: "Maharashtra",
    code: "MH",
    president: "Vijay Sharma",
    secretary: "Meena Devi",
    contact: "+91 98765 43214",
    districts: 36,
    athletes: 294,
    status: "Active",
  },
];

export default function State() {
  return (
    <main className={styles.statePage}>

      {/* Page Header */}
      <div className={styles.pageHeader}>

        <div>
          <h1>State Organisations</h1>

          <p>
            Manage WABA state-level organisations across India.
          </p>
        </div>

        <div className={styles.headerIcon}>
          <Map size={28} />
        </div>

      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>
          <span>Total States</span>
          <strong>28</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Active States</span>
          <strong>25</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Pending</span>
          <strong>3</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Total Districts</span>
          <strong>78</strong>
        </div>

      </div>

      {/* States Card */}
      <section className={styles.statesCard}>

        {/* Card Header */}
        <div className={styles.cardHeader}>

          <div>
            <h2>All State Organisations</h2>

            <p>
              View and manage registered state organisations.
            </p>
          </div>

          <span className={styles.totalBadge}>
            28 States
          </span>

        </div>

        {/* Filters */}
        <div className={styles.filters}>

          {/* Search */}
          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search state..."
            />
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
                <th>State</th>
                <th>President</th>
                <th>Secretary</th>
                <th>Contact</th>
                <th>Districts</th>
                <th>Athletes</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {statesData.map((state) => (
                <tr key={state.id}>

                  {/* State */}
                  <td>
                    <div className={styles.stateInfo}>

                      <div className={styles.stateIcon}>
                        <Map size={18} />
                      </div>

                      <div>
                        <strong>
                          {state.state}
                        </strong>

                        <span>
                          {state.code} • {state.id}
                        </span>
                      </div>

                    </div>
                  </td>

                  {/* President */}
                  <td>
                    {state.president}
                  </td>

                  {/* Secretary */}
                  <td>
                    {state.secretary}
                  </td>

                  {/* Contact */}
                  <td>
                    {state.contact}
                  </td>

                  {/* Districts */}
                  <td>
                    <span className={styles.numberBadge}>
                      {state.districts}
                    </span>
                  </td>

                  {/* Athletes */}
                  <td>
                    <span className={styles.athleteBadge}>
                      {state.athletes}
                    </span>
                  </td>

                  {/* Status */}
                  <td>

                    <span
                      className={
                        state.status === "Active"
                          ? styles.active
                          : styles.pending
                      }
                    >
                      {state.status}
                    </span>

                  </td>

                  {/* Actions */}
                  <td>

                    <div className={styles.actions}>

                      <button
                        type="button"
                        title="View State"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        title="Edit State"
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