"use client";

import { useState } from "react";
import {
  CreditCard,
  Search,
  Eye,
  RefreshCw,
  Trash2,
  X,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Users,
} from "lucide-react";

import styles from "./Membership.module.css";

type Membership = {
  id: string;
  athleteId: string;
  athlete: string;
  type: string;
  startDate: string;
  expiryDate: string;
  amount: string;
  status: string;
};

const initialMemberships: Membership[] = [
  {
    id: "MEM001",
    athleteId: "ATH001",
    athlete: "Rahul Kumar",
    type: "Annual",
    startDate: "01 Jan 2026",
    expiryDate: "31 Dec 2026",
    amount: "₹2,500",
    status: "Active",
  },
  {
    id: "MEM002",
    athleteId: "ATH002",
    athlete: "Priya Reddy",
    type: "Annual",
    startDate: "15 Feb 2026",
    expiryDate: "14 Feb 2027",
    amount: "₹2,500",
    status: "Active",
  },
  {
    id: "MEM003",
    athleteId: "ATH003",
    athlete: "Suresh Babu",
    type: "Annual",
    startDate: "10 Jan 2026",
    expiryDate: "09 Oct 2026",
    amount: "₹2,500",
    status: "Expiring Soon",
  },
  {
    id: "MEM004",
    athleteId: "ATH004",
    athlete: "Anjali Rao",
    type: "Annual",
    startDate: "01 Jan 2025",
    expiryDate: "31 Dec 2025",
    amount: "₹2,500",
    status: "Expired",
  },
  {
    id: "MEM005",
    athleteId: "ATH005",
    athlete: "Vikram Singh",
    type: "Annual",
    startDate: "20 Mar 2026",
    expiryDate: "19 Mar 2027",
    amount: "₹2,500",
    status: "Active",
  },
  {
    id: "MEM006",
    athleteId: "ATH006",
    athlete: "Sneha Reddy",
    type: "Annual",
    startDate: "01 Sep 2026",
    expiryDate: "30 Aug 2027",
    amount: "₹2,500",
    status: "Pending",
  },
];

export default function Membership() {
  const [memberships, setMemberships] =
    useState<Membership[]>(initialMemberships);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showRenewModal, setShowRenewModal] = useState(false);
  const [selectedMembership, setSelectedMembership] =
    useState<Membership | null>(null);

  const filteredMemberships = memberships.filter((membership) => {
    const matchesSearch =
      membership.athlete
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      membership.athleteId
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      membership.id
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      membership.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const openRenewModal = (membership: Membership) => {
    setSelectedMembership(membership);
    setShowRenewModal(true);
  };

  const renewMembership = () => {
    if (!selectedMembership) return;

    setMemberships((current) =>
      current.map((membership) =>
        membership.id === selectedMembership.id
          ? {
              ...membership,
              status: "Active",
              startDate: "01 Oct 2026",
              expiryDate: "30 Sep 2027",
            }
          : membership
      )
    );

    setShowRenewModal(false);
    setSelectedMembership(null);
  };

  const deleteMembership = (id: string) => {
    setMemberships((current) =>
      current.filter((membership) => membership.id !== id)
    );
  };

  const activeCount = memberships.filter(
    (membership) => membership.status === "Active"
  ).length;

  const expiringCount = memberships.filter(
    (membership) => membership.status === "Expiring Soon"
  ).length;

  const expiredCount = memberships.filter(
    (membership) => membership.status === "Expired"
  ).length;

  const pendingCount = memberships.filter(
    (membership) => membership.status === "Pending"
  ).length;

  return (
    <main className={styles.page}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>
            <CreditCard size={24} />
          </div>

          <div>
            <h1>Memberships</h1>
            <p>
              Manage athlete memberships, renewals and membership status.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Total Memberships</span>
            <strong>{memberships.length}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Active</span>
            <strong>{activeCount}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Clock3 size={21} />
          </div>

          <div>
            <span>Expiring Soon</span>
            <strong>{expiringCount}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.red}`}>
            <AlertCircle size={21} />
          </div>

          <div>
            <span>Expired</span>
            <strong>{expiredCount}</strong>
          </div>
        </div>
      </div>

      {/* Membership Table */}
      <section className={styles.tableCard}>
        <div className={styles.tableTop}>
          <div>
            <h2>Membership List</h2>
            <p>
              View and manage membership records of your athletes.
            </p>
          </div>

          <div className={styles.filters}>
            <div className={styles.searchBox}>
              <Search size={17} />

              <input
                type="text"
                placeholder="Search athlete or membership..."
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
              <option value="Active">Active</option>
              <option value="Expiring Soon">
                Expiring Soon
              </option>
              <option value="Expired">Expired</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Athlete</th>
                <th>Membership ID</th>
                <th>Type</th>
                <th>Start Date</th>
                <th>Expiry Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredMemberships.map((membership) => (
                <tr key={membership.id}>
                  <td>
                    <div className={styles.athleteCell}>
                      <div className={styles.avatar}>
                        {membership.athlete
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>
                        <strong>{membership.athlete}</strong>
                        <span>{membership.athleteId}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className={styles.membershipId}>
                      {membership.id}
                    </span>
                  </td>

                  <td>{membership.type}</td>

                  <td>{membership.startDate}</td>

                  <td>{membership.expiryDate}</td>

                  <td>
                    <strong className={styles.amount}>
                      {membership.amount}
                    </strong>
                  </td>

                  <td>
                    <span
                      className={
                        membership.status === "Active"
                          ? styles.badgeGreen
                          : membership.status === "Expiring Soon"
                          ? styles.badgeOrange
                          : membership.status === "Expired"
                          ? styles.badgeRed
                          : styles.badgeBlue
                      }
                    >
                      {membership.status}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        title="View"
                        type="button"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        title="Renew Membership"
                        type="button"
                        onClick={() =>
                          openRenewModal(membership)
                        }
                      >
                        <RefreshCw size={16} />
                      </button>

                      <button
                        title="Delete"
                        type="button"
                        className={styles.deleteButton}
                        onClick={() =>
                          deleteMembership(membership.id)
                        }
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredMemberships.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className={styles.empty}
                  >
                    No memberships found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className={styles.tableFooter}>
          <span>
            Showing{" "}
            <strong>{filteredMemberships.length}</strong>{" "}
            of <strong>{memberships.length}</strong>{" "}
            memberships
          </span>

          <span>
            Pending: <strong>{pendingCount}</strong>
          </span>
        </div>
      </section>

      {/* Renew Modal */}
      {showRenewModal && selectedMembership && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <h2>Renew Membership</h2>

                <p>
                  Renew membership for{" "}
                  <strong>
                    {selectedMembership.athlete}
                  </strong>
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowRenewModal(false);
                  setSelectedMembership(null);
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.renewContent}>
              <div className={styles.renewCard}>
                <div>
                  <span>Athlete</span>
                  <strong>
                    {selectedMembership.athlete}
                  </strong>
                </div>

                <div>
                  <span>Membership ID</span>
                  <strong>
                    {selectedMembership.id}
                  </strong>
                </div>

                <div>
                  <span>Current Status</span>

                  <span className={styles.badgeOrange}>
                    {selectedMembership.status}
                  </span>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Membership Type</label>

                <select defaultValue="Annual">
                  <option>Annual</option>
                  <option>Six Months</option>
                  <option>Three Months</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Renewal Amount</label>

                <input
                  type="text"
                  defaultValue="₹2,500"
                />
              </div>

              <div className={styles.formGroup}>
                <label>Payment Status</label>

                <select defaultValue="Paid">
                  <option>Paid</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => {
                  setShowRenewModal(false);
                  setSelectedMembership(null);
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                className={styles.renewButton}
                onClick={renewMembership}
              >
                <RefreshCw size={16} />
                Renew Membership
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}