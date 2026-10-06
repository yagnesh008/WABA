"use client";

import {
  Search,
  Filter,
  Users,
  Eye,
  Edit,
} from "lucide-react";

import styles from "./Athlete.module.css";

const athletesData = [
  {
    id: "ATH001",
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    organisation: "WABA Hyderabad",
    location: "Hyderabad, Telangana",
    classification: "WH1",
    status: "Active",
  },
  {
    id: "ATH002",
    name: "Priya Sharma",
    email: "priya@gmail.com",
    organisation: "WABA Bengaluru",
    location: "Bengaluru, Karnataka",
    classification: "WH2",
    status: "Active",
  },
  {
    id: "ATH003",
    name: "Arjun Reddy",
    email: "arjun@gmail.com",
    organisation: "WABA Andhra Pradesh",
    location: "Vijayawada, Andhra Pradesh",
    classification: "WH3",
    status: "Pending",
  },
];

export default function Athletes() {
  return (
    <main className={styles.athletesPage}>
      <div className={styles.pageHeader}>
        <div>
          <h1>Athletes</h1>
          <p>
            Manage all athletes registered with WABA.
          </p>
        </div>

        <div className={styles.headerIcon}>
          <Users size={28} />
        </div>
      </div>

      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <span>Total Athletes</span>
          <strong>1,025</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Active Athletes</span>
          <strong>972</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Verified Athletes</span>
          <strong>941</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Pending</span>
          <strong>53</strong>
        </div>
      </div>

      <section className={styles.athletesCard}>
        <div className={styles.cardHeader}>
          <div>
            <h2>All Athletes</h2>
            <p>
              View and manage registered WABA athletes.
            </p>
          </div>

          <span className={styles.totalBadge}>
            {athletesData.length} Athletes
          </span>
        </div>

        <div className={styles.filters}>
          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search athlete..."
            />
          </div>

          <div className={styles.selectBox}>
            <Filter size={16} />

            <select defaultValue="all">
              <option value="all">
                All Classification
              </option>
              <option value="WH1">WH1</option>
              <option value="WH2">WH2</option>
              <option value="WH3">WH3</option>
            </select>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Athlete</th>
                <th>Organisation</th>
                <th>Location</th>
                <th>Classification</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {athletesData.map((athlete) => (
                <tr key={athlete.id}>
                  <td>
                    <div className={styles.userInfo}>
                      <div className={styles.avatar}>
                        {athlete.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{athlete.name}</strong>
                        <span>{athlete.id}</span>
                        <small>{athlete.email}</small>
                      </div>
                    </div>
                  </td>

                  <td>
                    {athlete.organisation}
                  </td>

                  <td>
                    {athlete.location}
                  </td>

                  <td>
                    <span className={styles.classification}>
                      {athlete.classification}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        athlete.status === "Active"
                          ? styles.active
                          : styles.pending
                      }
                    >
                      {athlete.status}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <button title="View Athlete">
                        <Eye size={16} />
                      </button>

                      <button title="Edit Athlete">
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