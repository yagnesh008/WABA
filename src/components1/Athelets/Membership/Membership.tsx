"use client";

import { useState } from "react";
import {
  Search,
  CreditCard,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Edit,
  CalendarDays,
} from "lucide-react";

import styles from "./Membership.module.css";

type MembershipStatus = "Active" | "Pending" | "Expired";

type Membership = {
  id: string;
  athleteId: string;
  athlete: string;
  email: string;
  membershipType: string;
  organisation: string;
  startDate: string;
  expiryDate: string;
  amount: string;
  status: MembershipStatus;
};

const membershipData: Membership[] = [
  {
    id: "MEM001",
    athleteId: "ATH001",
    athlete: "Rahul Kumar",
    email: "rahul@gmail.com",
    membershipType: "Annual Membership",
    organisation: "WABA Hyderabad",
    startDate: "01 Jan 2026",
    expiryDate: "31 Dec 2026",
    amount: "₹2,000",
    status: "Active",
  },
  {
    id: "MEM002",
    athleteId: "ATH002",
    athlete: "Priya Sharma",
    email: "priya@gmail.com",
    membershipType: "Annual Membership",
    organisation: "WABA Bengaluru",
    startDate: "01 Jan 2026",
    expiryDate: "31 Dec 2026",
    amount: "₹2,000",
    status: "Active",
  },
  {
    id: "MEM003",
    athleteId: "ATH003",
    athlete: "Arjun Reddy",
    email: "arjun@gmail.com",
    membershipType: "Annual Membership",
    organisation: "WABA Andhra Pradesh",
    startDate: "10 Sep 2026",
    expiryDate: "09 Sep 2027",
    amount: "₹2,000",
    status: "Pending",
  },
  {
    id: "MEM004",
    athleteId: "ATH004",
    athlete: "Sneha Reddy",
    email: "sneha@gmail.com",
    membershipType: "Annual Membership",
    organisation: "Bengaluru Adaptive Boxing Club",
    startDate: "01 Feb 2026",
    expiryDate: "31 Jan 2027",
    amount: "₹2,500",
    status: "Active",
  },
  {
    id: "MEM005",
    athleteId: "ATH005",
    athlete: "Vikram Singh",
    email: "vikram@gmail.com",
    membershipType: "Premium Membership",
    organisation: "Hyderabad Boxing Academy",
    startDate: "15 Jan 2026",
    expiryDate: "14 Jan 2027",
    amount: "₹3,000",
    status: "Active",
  },
  {
    id: "MEM006",
    athleteId: "ATH006",
    athlete: "Kavya Devi",
    email: "kavya@gmail.com",
    membershipType: "Annual Membership",
    organisation: "Bengaluru Adaptive Boxing Academy",
    startDate: "05 Sep 2026",
    expiryDate: "04 Sep 2027",
    amount: "₹2,000",
    status: "Pending",
  },
  {
    id: "MEM007",
    athleteId: "ATH007",
    athlete: "Kiran Kumar",
    email: "kiran@gmail.com",
    membershipType: "Annual Membership",
    organisation: "WABA Andhra Pradesh",
    startDate: "01 Jan 2025",
    expiryDate: "31 Dec 2025",
    amount: "₹2,000",
    status: "Expired",
  },
  {
    id: "MEM008",
    athleteId: "ATH008",
    athlete: "Lakshmi Devi",
    email: "lakshmi@gmail.com",
    membershipType: "Premium Membership",
    organisation: "WABA Telangana",
    startDate: "10 Mar 2026",
    expiryDate: "09 Mar 2027",
    amount: "₹3,000",
    status: "Active",
  },
];

export default function Membership() {
  const [memberships, setMemberships] =
    useState<Membership[]>(membershipData);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const totalMemberships = memberships.length;

  const activeMemberships = memberships.filter(
    (membership) => membership.status === "Active"
  ).length;

  const pendingMemberships = memberships.filter(
    (membership) => membership.status === "Pending"
  ).length;

  const expiredMemberships = memberships.filter(
    (membership) => membership.status === "Expired"
  ).length;

  const filteredMemberships = memberships.filter((membership) => {
    const matchesSearch =
      membership.athlete
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      membership.athleteId
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      membership.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      membership.id
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      membership.organisation
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =
      typeFilter === "All" ||
      membership.membershipType === typeFilter;

    const matchesStatus =
      statusFilter === "All" ||
      membership.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const approveMembership = (id: string) => {
    setMemberships((currentMemberships) =>
      currentMemberships.map((membership) =>
        membership.id === id
          ? { ...membership, status: "Active" }
          : membership
      )
    );
  };

  return (
    <main className={styles.membershipPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <CreditCard size={24} />
          </div>

          <div>
            <h1>Memberships</h1>
            <p>Manage athlete memberships and renewals</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.cardIcon}>
            <CreditCard size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Total Memberships</span>
            <strong>{totalMemberships}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.activeIcon}`}>
            <CheckCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Active</span>
            <strong>{activeMemberships}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.pendingIcon}`}>
            <Clock size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Pending</span>
            <strong>{pendingMemberships}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.cardIcon} ${styles.expiredIcon}`}>
            <XCircle size={22} />
          </div>

          <div className={styles.cardContent}>
            <span>Expired</span>
            <strong>{expiredMemberships}</strong>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search athlete, membership ID or organisation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.filterSelect}
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="All">All Membership Types</option>
          <option value="Annual Membership">
            Annual Membership
          </option>
          <option value="Premium Membership">
            Premium Membership
          </option>
        </select>

        <select
          className={styles.filterSelect}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Expired">Expired</option>
        </select>
      </div>

      {/* Membership Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Membership List</h2>
            <p>{filteredMemberships.length} memberships found</p>
          </div>

          <div className={styles.membershipCount}>
            <CreditCard size={17} />
            Athlete Memberships
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.membershipTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Membership
                </th>

                <th className={styles.tableHeading}>
                  Athlete
                </th>

                <th className={styles.tableHeading}>
                  Membership Type
                </th>

                <th className={styles.tableHeading}>
                  Organisation
                </th>

                <th className={styles.tableHeading}>
                  Start Date
                </th>

                <th className={styles.tableHeading}>
                  Expiry Date
                </th>

                <th className={styles.tableHeading}>
                  Amount
                </th>

                <th className={styles.tableHeading}>
                  Status
                </th>

                <th className={styles.tableHeading}>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredMemberships.map((membership) => (
                <tr key={membership.id}>
                  <td className={styles.tableCell}>
                    <div className={styles.membershipInfo}>
                      <div className={styles.membershipIcon}>
                        <CreditCard size={17} />
                      </div>

                      <div>
                        <div className={styles.membershipId}>
                          {membership.id}
                        </div>

                        <div className={styles.athleteId}>
                          {membership.athleteId}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.athleteInfo}>
                      <div className={styles.avatar}>
                        {membership.athlete.charAt(0)}
                      </div>

                      <div>
                        <div className={styles.athleteName}>
                          {membership.athlete}
                        </div>

                        <div className={styles.athleteEmail}>
                          {membership.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <span className={styles.membershipType}>
                      {membership.membershipType}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <span className={styles.organisation}>
                      {membership.organisation}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.date}>
                      <CalendarDays size={15} />
                      {membership.startDate}
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.date}>
                      <CalendarDays size={15} />
                      {membership.expiryDate}
                    </div>
                  </td>

                  <td className={styles.tableCell}>
                    <strong className={styles.amount}>
                      {membership.amount}
                    </strong>
                  </td>

                  <td className={styles.tableCell}>
                    <span
                      className={`${styles.status} ${
                        membership.status === "Active"
                          ? styles.active
                          : membership.status === "Pending"
                          ? styles.pending
                          : styles.expired
                      }`}
                    >
                      {membership.status}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.viewButton}
                        title="View Membership"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        className={styles.editButton}
                        title="Edit Membership"
                      >
                        <Edit size={16} />
                      </button>

                      {membership.status === "Pending" && (
                        <button
                          type="button"
                          className={styles.approveButton}
                          onClick={() =>
                            approveMembership(membership.id)
                          }
                        >
                          Approve
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}