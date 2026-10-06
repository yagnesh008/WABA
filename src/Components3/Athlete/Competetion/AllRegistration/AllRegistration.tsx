"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trophy,
  CalendarDays,
  MapPin,
  Search,
  ArrowLeft,
  Eye,
  CheckCircle2,
  Clock3,
  XCircle,
  FileText,
} from "lucide-react";

import styles from "./AllRegistration.module.css";

const registrations = [
  {
    id: "REG-2026-001",
    competition: "WABA National Championship 2026",
    date: "28 Sep 2026",
    location: "Hyderabad, Telangana",
    category: "Senior",
    classification: "WAB-1",
    registeredOn: "17 Sep 2026",
    status: "Approved",
  },
  {
    id: "REG-2026-002",
    competition: "South Zone Adaptive Boxing Championship",
    date: "05 Oct 2026",
    location: "Bengaluru, Karnataka",
    category: "Senior",
    classification: "WAB-1",
    registeredOn: "15 Sep 2026",
    status: "Approved",
  },
  {
    id: "REG-2026-003",
    competition: "State Adaptive Boxing Championship",
    date: "18 Oct 2026",
    location: "Vijayawada, Andhra Pradesh",
    category: "Senior",
    classification: "WAB-1",
    registeredOn: "19 Sep 2026",
    status: "Pending",
  },
  {
    id: "REG-2026-004",
    competition: "Telangana Adaptive Boxing Championship",
    date: "02 Nov 2026",
    location: "Hyderabad, Telangana",
    category: "Senior",
    classification: "WAB-1",
    registeredOn: "20 Sep 2026",
    status: "Rejected",
  },
];

export default function AllRegistration() {
  const [search, setSearch] = useState("");

  const filteredRegistrations = registrations.filter((item) =>
    `${item.competition} ${item.location} ${item.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className={styles.main}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.breadcrumb}>
            Athlete / Competitions / <span>My Registrations</span>
          </div>

          <h1>My Registrations</h1>

          <p>
            View and track all your competition registrations.
          </p>
        </div>

        <Link
          href="/Athlete/competitionPage"
          className={styles.backButton}
        >
          <ArrowLeft size={17} />
          Back to Competitions
        </Link>
      </div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <FileText size={22} />
          </div>

          <div>
            <span>Total Registrations</span>
            <strong>4</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Approved</span>
            <strong>2</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Clock3 size={22} />
          </div>

          <div>
            <span>Pending</span>
            <strong>1</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.red}`}>
            <XCircle size={22} />
          </div>

          <div>
            <span>Rejected</span>
            <strong>1</strong>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search registrations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <span className={styles.resultCount}>
          {filteredRegistrations.length} registrations found
        </span>
      </div>

      {/* TABLE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Registration History</h2>
            <p>
              Track your competition registration status and details.
            </p>
          </div>
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>Registration ID</th>
                  <th>Competition</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Category</th>
                  <th>Registered On</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredRegistrations.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <strong className={styles.registrationId}>
                        {item.id}
                      </strong>
                    </td>

                    <td>
                      <div className={styles.competitionName}>
                        <div className={styles.smallIcon}>
                          <Trophy size={16} />
                        </div>

                        <div>
                          <strong>{item.competition}</strong>
                          <span>{item.classification}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className={styles.infoCell}>
                        <CalendarDays size={15} />
                        {item.date}
                      </div>
                    </td>

                    <td>
                      <div className={styles.infoCell}>
                        <MapPin size={15} />
                        {item.location}
                      </div>
                    </td>

                    <td>{item.category}</td>

                    <td>{item.registeredOn}</td>

                    <td>
                      <span
                        className={`${styles.status} ${
                          item.status === "Approved"
                            ? styles.approved
                            : item.status === "Pending"
                            ? styles.pending
                            : styles.rejected
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <button className={styles.viewButton}>
                        <Eye size={15} />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE CARDS */}
        <div className={styles.mobileList}>
          {filteredRegistrations.map((item) => (
            <div className={styles.mobileCard} key={item.id}>
              <div className={styles.mobileTop}>
                <div className={styles.smallIcon}>
                  <Trophy size={17} />
                </div>

                <span
                  className={`${styles.status} ${
                    item.status === "Approved"
                      ? styles.approved
                      : item.status === "Pending"
                      ? styles.pending
                      : styles.rejected
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h3>{item.competition}</h3>

              <p>{item.id}</p>

              <div className={styles.mobileInfo}>
                <span>
                  <CalendarDays size={15} />
                  {item.date}
                </span>

                <span>
                  <MapPin size={15} />
                  {item.location}
                </span>
              </div>

              <button className={styles.mobileViewButton}>
                <Eye size={15} />
                View Registration
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}