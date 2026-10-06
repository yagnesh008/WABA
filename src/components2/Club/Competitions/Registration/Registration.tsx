"use client";

import { useState } from "react";

import {
  ClipboardCheck,
  Search,
  Eye,
  X,
  CalendarDays,
  MapPin,
  Users,
  Trophy,
  CheckCircle2,
  Clock3,
  XCircle,
  User,
} from "lucide-react";

import styles from "./Registration.module.css";

type Registration = {
  id: string;
  competition: string;
  competitionId: string;
  level: "National" | "Zone" | "State" | "District";
  date: string;
  venue: string;
  athletes: number;
  submittedDate: string;
  status: "Approved" | "Pending" | "Rejected";
};

const initialRegistrations: Registration[] = [
  {
    id: "REG001",
    competition: "National Adaptive Boxing Championship",
    competitionId: "COMP001",
    level: "National",
    date: "20 - 22 Oct 2026",
    venue: "Gachibowli Indoor Stadium, Hyderabad",
    athletes: 6,
    submittedDate: "10 Sep 2026",
    status: "Approved",
  },
  {
    id: "REG002",
    competition: "South Zone Boxing Championship",
    competitionId: "COMP002",
    level: "Zone",
    date: "05 - 07 Nov 2026",
    venue: "Kanteerava Indoor Stadium, Bengaluru",
    athletes: 4,
    submittedDate: "12 Sep 2026",
    status: "Approved",
  },
  {
    id: "REG003",
    competition: "State Adaptive Boxing Championship",
    competitionId: "COMP003",
    level: "State",
    date: "18 - 20 Nov 2026",
    venue: "Port Stadium, Visakhapatnam",
    athletes: 5,
    submittedDate: "14 Sep 2026",
    status: "Pending",
  },
  {
    id: "REG004",
    competition: "Telangana Adaptive Boxing Meet",
    competitionId: "COMP004",
    level: "State",
    date: "28 - 29 Sep 2026",
    venue: "LB Stadium, Hyderabad",
    athletes: 8,
    submittedDate: "08 Sep 2026",
    status: "Pending",
  },
  {
    id: "REG005",
    competition: "South India Adaptive Boxing Open",
    competitionId: "COMP005",
    level: "Zone",
    date: "10 - 12 Dec 2026",
    venue: "Nehru Indoor Stadium, Chennai",
    athletes: 2,
    submittedDate: "15 Sep 2026",
    status: "Approved",
  },
  {
    id: "REG006",
    competition: "District Adaptive Boxing Championship",
    competitionId: "COMP006",
    level: "District",
    date: "15 - 16 Oct 2026",
    venue: "Sports Complex, Warangal",
    athletes: 6,
    submittedDate: "16 Sep 2026",
    status: "Rejected",
  },
];

export default function Registration() {
  const [registrations, setRegistrations] = useState(
    initialRegistrations
  );

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");

  const [selectedRegistration, setSelectedRegistration] =
    useState<Registration | null>(null);

  const filteredRegistrations = registrations.filter(
    (registration) => {
      const searchMatch =
        registration.competition
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        registration.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        registration.competitionId
          .toLowerCase()
          .includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All" ||
        registration.status === statusFilter;

      const levelMatch =
        levelFilter === "All" ||
        registration.level === levelFilter;

      return searchMatch && statusMatch && levelMatch;
    }
  );

  const totalRegistrations = registrations.length;

  const approvedCount = registrations.filter(
    (item) => item.status === "Approved"
  ).length;

  const pendingCount = registrations.filter(
    (item) => item.status === "Pending"
  ).length;

  const rejectedCount = registrations.filter(
    (item) => item.status === "Rejected"
  ).length;

  const totalAthletes = registrations.reduce(
    (total, item) => total + item.athletes,
    0
  );

  const cancelRegistration = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this registration?"
    );

    if (!confirmed) return;

    setRegistrations((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  return (
    <main className={styles.main}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <ClipboardCheck size={25} />
          </div>

          <div>
            <h1>Competition Registrations</h1>
            <p>
              Manage athlete registrations submitted for competitions.
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <ClipboardCheck size={22} />
          </div>

          <div>
            <span>Total Registrations</span>
            <strong>{totalRegistrations}</strong>
            <small>All registrations</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Approved</span>
            <strong>{approvedCount}</strong>
            <small>Confirmed registrations</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.yellow}`}>
            <Clock3 size={22} />
          </div>

          <div>
            <span>Pending</span>
            <strong>{pendingCount}</strong>
            <small>Awaiting approval</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Users size={22} />
          </div>

          <div>
            <span>Registered Athletes</span>
            <strong>{totalAthletes}</strong>
            <small>Across competitions</small>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search competition or registration ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.select}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>

        <select
          className={styles.select}
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
        >
          <option value="All">All Levels</option>
          <option value="National">National</option>
          <option value="Zone">Zone</option>
          <option value="State">State</option>
          <option value="District">District</option>
        </select>
      </section>

      {/* TABLE */}
      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Registration List</h2>
            <p>
              {filteredRegistrations.length} registrations found
            </p>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Registration</th>
                <th>Competition</th>
                <th>Level</th>
                <th>Date</th>
                <th>Athletes</th>
                <th>Submitted</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredRegistrations.map((registration) => (
                <tr key={registration.id}>
                  <td>
                    <div className={styles.registrationCell}>
                      <div className={styles.registrationIcon}>
                        <ClipboardCheck size={17} />
                      </div>

                      <div>
                        <strong>{registration.id}</strong>
                        <span>
                          {registration.competitionId}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className={styles.competitionCell}>
                      <strong>{registration.competition}</strong>
                      <span>
                        <MapPin size={13} />
                        {registration.venue}
                      </span>
                    </div>
                  </td>

                  <td>
                    <span
                      className={`${styles.levelBadge} ${
                        registration.level === "National"
                          ? styles.national
                          : registration.level === "Zone"
                          ? styles.zone
                          : registration.level === "State"
                          ? styles.state
                          : styles.district
                      }`}
                    >
                      {registration.level}
                    </span>
                  </td>

                  <td>
                    <div className={styles.dateCell}>
                      <CalendarDays size={15} />
                      {registration.date}
                    </div>
                  </td>

                  <td>
                    <div className={styles.athleteCount}>
                      <Users size={15} />
                      {registration.athletes}
                    </div>
                  </td>

                  <td>
                    <span className={styles.submitted}>
                      {registration.submittedDate}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`${styles.statusBadge} ${
                        registration.status === "Approved"
                          ? styles.approved
                          : registration.status === "Pending"
                          ? styles.pending
                          : styles.rejected
                      }`}
                    >
                      {registration.status}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.viewButton}
                        onClick={() =>
                          setSelectedRegistration(
                            registration
                          )
                        }
                      >
                        <Eye size={15} />
                      </button>

                      {registration.status !== "Rejected" && (
                        <button
                          type="button"
                          className={styles.cancelButton}
                          onClick={() =>
                            cancelRegistration(registration.id)
                          }
                        >
                          <X size={15} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredRegistrations.length === 0 && (
            <div className={styles.emptyState}>
              <ClipboardCheck size={40} />
              <h3>No registrations found</h3>
              <p>
                Try changing your search or filter options.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* DETAILS MODAL */}
      {selectedRegistration && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <span>Registration Details</span>
                <h2>{selectedRegistration.competition}</h2>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setSelectedRegistration(null)}
              >
                <X size={19} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <span>Registration ID</span>
                  <strong>{selectedRegistration.id}</strong>
                </div>

                <div className={styles.detailItem}>
                  <span>Competition ID</span>
                  <strong>
                    {selectedRegistration.competitionId}
                  </strong>
                </div>

                <div className={styles.detailItem}>
                  <span>Competition Level</span>
                  <strong>{selectedRegistration.level}</strong>
                </div>

                <div className={styles.detailItem}>
                  <span>Registered Athletes</span>
                  <strong>
                    {selectedRegistration.athletes}
                  </strong>
                </div>

                <div className={styles.detailItem}>
                  <span>Competition Date</span>
                  <strong>{selectedRegistration.date}</strong>
                </div>

                <div className={styles.detailItem}>
                  <span>Submitted Date</span>
                  <strong>
                    {selectedRegistration.submittedDate}
                  </strong>
                </div>
              </div>

              <div className={styles.locationBox}>
                <MapPin size={18} />
                <div>
                  <span>Venue</span>
                  <strong>{selectedRegistration.venue}</strong>
                </div>
              </div>

              <div
                className={`${styles.modalStatus} ${
                  selectedRegistration.status === "Approved"
                    ? styles.modalApproved
                    : selectedRegistration.status === "Pending"
                    ? styles.modalPending
                    : styles.modalRejected
                }`}
              >
                {selectedRegistration.status === "Approved" && (
                  <CheckCircle2 size={18} />
                )}

                {selectedRegistration.status === "Pending" && (
                  <Clock3 size={18} />
                )}

                {selectedRegistration.status === "Rejected" && (
                  <XCircle size={18} />
                )}

                <strong>
                  {selectedRegistration.status}
                </strong>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.closeModalButton}
                onClick={() => setSelectedRegistration(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}