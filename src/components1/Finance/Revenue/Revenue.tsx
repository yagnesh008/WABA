"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  WalletCards,
  CreditCard,
  Receipt,
  Search,
  Eye,
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

import styles from "./Revenue.module.css";

type RevenueStatus = "Received" | "Pending";

interface RevenueRecord {
  id: string;
  source: string;
  description: string;
  payer: string;
  amount: number;
  date: string;
  paymentMethod: string;
  status: RevenueStatus;
}

const revenueData: RevenueRecord[] = [
  {
    id: "REV001",
    source: "Membership",
    description: "Annual Membership Fee",
    payer: "Rahul Kumar",
    amount: 2000,
    date: "12 Sep 2026",
    paymentMethod: "UPI",
    status: "Received",
  },
  {
    id: "REV002",
    source: "Membership",
    description: "Annual Membership Fee",
    payer: "Priya Sharma",
    amount: 2000,
    date: "11 Sep 2026",
    paymentMethod: "Card",
    status: "Received",
  },
  {
    id: "REV003",
    source: "Membership",
    description: "Annual Membership Fee",
    payer: "Arjun Reddy",
    amount: 2000,
    date: "10 Sep 2026",
    paymentMethod: "UPI",
    status: "Pending",
  },
  {
    id: "REV004",
    source: "Organisation",
    description: "Organisation Registration",
    payer: "Hyderabad Adaptive Boxing Club",
    amount: 5000,
    date: "09 Sep 2026",
    paymentMethod: "Bank Transfer",
    status: "Received",
  },
  {
    id: "REV005",
    source: "Competition",
    description: "Competition Registration",
    payer: "Sneha Reddy",
    amount: 1500,
    date: "08 Sep 2026",
    paymentMethod: "UPI",
    status: "Received",
  },
  {
    id: "REV006",
    source: "Competition",
    description: "Competition Registration",
    payer: "Kavya Devi",
    amount: 1500,
    date: "07 Sep 2026",
    paymentMethod: "Card",
    status: "Pending",
  },
  {
    id: "REV007",
    source: "Affiliation",
    description: "Annual Affiliation Fee",
    payer: "WABA Telangana",
    amount: 7500,
    date: "06 Sep 2026",
    paymentMethod: "Bank Transfer",
    status: "Received",
  },
  {
    id: "REV008",
    source: "Certification",
    description: "Official Certification Fee",
    payer: "Suresh Reddy",
    amount: 2500,
    date: "05 Sep 2026",
    paymentMethod: "UPI",
    status: "Received",
  },
];

const monthlyRevenue = [
  {
    month: "April",
    amount: 28000,
  },
  {
    month: "May",
    amount: 35000,
  },
  {
    month: "June",
    amount: 42000,
  },
  {
    month: "July",
    amount: 48000,
  },
  {
    month: "August",
    amount: 52000,
  },
  {
    month: "September",
    amount: 16500,
  },
];

const revenueBySource = [
  {
    source: "Membership",
    amount: 6000,
    percentage: 36,
  },
  {
    source: "Competition",
    amount: 3000,
    percentage: 18,
  },
  {
    source: "Organisation",
    amount: 5000,
    percentage: 30,
  },
  {
    source: "Affiliation",
    amount: 7500,
    percentage: 45,
  },
  {
    source: "Certification",
    amount: 2500,
    percentage: 15,
  },
];

export default function Revenue() {
  const [revenueRecords, setRevenueRecords] =
    useState<RevenueRecord[]>(revenueData);

  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const receivedRecords = revenueRecords.filter(
    (record) => record.status === "Received"
  );

  const pendingRecords = revenueRecords.filter(
    (record) => record.status === "Pending"
  );

  const totalRevenue = receivedRecords.reduce(
    (total, record) => total + record.amount,
    0
  );

  const pendingRevenue = pendingRecords.reduce(
    (total, record) => total + record.amount,
    0
  );

  const totalTransactions = revenueRecords.length;

  const averageRevenue =
    receivedRecords.length > 0
      ? Math.round(totalRevenue / receivedRecords.length)
      : 0;

  const filteredRevenue = revenueRecords.filter((record) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      record.id.toLowerCase().includes(searchText) ||
      record.source.toLowerCase().includes(searchText) ||
      record.description.toLowerCase().includes(searchText) ||
      record.payer.toLowerCase().includes(searchText);

    const matchesSource =
      sourceFilter === "All" ||
      record.source === sourceFilter;

    const matchesStatus =
      statusFilter === "All" ||
      record.status === statusFilter;

    return (
      matchesSearch &&
      matchesSource &&
      matchesStatus
    );
  });

  const markAsReceived = (id: string) => {
    setRevenueRecords((currentRecords) =>
      currentRecords.map((record) =>
        record.id === id
          ? {
              ...record,
              status: "Received",
            }
          : record
      )
    );
  };

  return (
    <main className={styles.revenuePage}>
      {/* PAGE HEADER */}

      <div className={styles.pageHeader}>
        <div>
          <div className={styles.backLinkWrapper}>
            <Link
              href="/financePage"
              className={styles.backLink}
            >
              <ArrowLeft size={16} />
              Back to Finance
            </Link>
          </div>

          <h1>Revenue</h1>

          <p>
            Track and analyse WABA revenue and financial
            performance
          </p>
        </div>

        <div className={styles.headerActions}>
          <Link
            href="/financePage/payments"
            className={styles.paymentButton}
          >
            <CreditCard size={18} />
            Payments
          </Link>

          <Link
            href="/financePage/invoices"
            className={styles.invoiceButton}
          >
            <Receipt size={18} />
            Invoices
          </Link>
        </div>
      </div>

      {/* SUMMARY CARDS */}

      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <WalletCards size={24} />
          </div>

          <div>
            <p>Total Revenue</p>
            <h2>₹{totalRevenue.toLocaleString()}</h2>

            <span className={styles.successText}>
              <ArrowUpRight size={14} />
              Revenue received
            </span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <TrendingUp size={24} />
          </div>

          <div>
            <p>Transactions</p>
            <h2>{totalTransactions}</h2>

            <span>
              All revenue transactions
            </span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <CalendarDays size={24} />
          </div>

          <div>
            <p>Pending Revenue</p>
            <h2>
              ₹{pendingRevenue.toLocaleString()}
            </h2>

            <span className={styles.pendingText}>
              Awaiting payment
            </span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <CreditCard size={24} />
          </div>

          <div>
            <p>Average Transaction</p>
            <h2>
              ₹{averageRevenue.toLocaleString()}
            </h2>

            <span>
              Per received transaction
            </span>
          </div>
        </div>
      </section>

      {/* REVENUE OVERVIEW */}

      <section className={styles.overviewGrid}>
        {/* MONTHLY REVENUE */}

        <div className={styles.chartCard}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Monthly Revenue</h2>
              <p>Revenue generated over recent months</p>
            </div>

            <span className={styles.currentYear}>
              2026
            </span>
          </div>

          <div className={styles.monthlyList}>
            {monthlyRevenue.map((item) => {
              const maxAmount = Math.max(
                ...monthlyRevenue.map(
                  (month) => month.amount
                )
              );

              const width =
                (item.amount / maxAmount) * 100;

              return (
                <div
                  className={styles.monthItem}
                  key={item.month}
                >
                  <div className={styles.monthInfo}>
                    <span>{item.month}</span>

                    <strong>
                      ₹{item.amount.toLocaleString()}
                    </strong>
                  </div>

                  <div
                    className={
                      styles.monthProgressBackground
                    }
                  >
                    <div
                      className={styles.monthProgress}
                      style={{
                        width: `${width}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* REVENUE BY SOURCE */}

        <div className={styles.sourceCard}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Revenue by Source</h2>
              <p>Revenue categories</p>
            </div>
          </div>

          <div className={styles.sourceList}>
            {revenueBySource.map((item) => (
              <div
                className={styles.sourceItem}
                key={item.source}
              >
                <div className={styles.sourceInfo}>
                  <span>{item.source}</span>

                  <strong>
                    ₹{item.amount.toLocaleString()}
                  </strong>
                </div>

                <div
                  className={
                    styles.sourceProgressBackground
                  }
                >
                  <div
                    className={styles.sourceProgress}
                    style={{
                      width: `${Math.min(
                        item.percentage,
                        100
                      )}%`,
                    }}
                  />
                </div>

                <span className={styles.sourcePercentage}>
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVENUE RECORDS */}

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Revenue Records</h2>

            <p>
              View all revenue transactions and sources
            </p>
          </div>
        </div>

        {/* FILTERS */}

        <div className={styles.filterRow}>
          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search revenue, payer or transaction..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <select
            className={styles.selectBox}
            value={sourceFilter}
            onChange={(e) =>
              setSourceFilter(e.target.value)
            }
          >
            <option value="All">
              All Revenue Sources
            </option>

            <option value="Membership">
              Membership
            </option>

            <option value="Competition">
              Competition
            </option>

            <option value="Organisation">
              Organisation
            </option>

            <option value="Affiliation">
              Affiliation
            </option>

            <option value="Certification">
              Certification
            </option>
          </select>

          <select
            className={styles.selectBox}
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">
              All Status
            </option>

            <option value="Received">
              Received
            </option>

            <option value="Pending">
              Pending
            </option>
          </select>
        </div>

        {/* TABLE */}

        <div className={styles.tableWrapper}>
          <table className={styles.revenueTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Revenue ID
                </th>

                <th className={styles.tableHeading}>
                  Source
                </th>

                <th className={styles.tableHeading}>
                  Description
                </th>

                <th className={styles.tableHeading}>
                  Payer
                </th>

                <th className={styles.tableHeading}>
                  Amount
                </th>

                <th className={styles.tableHeading}>
                  Payment Method
                </th>

                <th className={styles.tableHeading}>
                  Date
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
              {filteredRevenue.length > 0 ? (
                filteredRevenue.map((record) => (
                  <tr key={record.id}>
                    <td className={styles.tableCell}>
                      <strong>{record.id}</strong>
                    </td>

                    <td className={styles.tableCell}>
                      <span className={styles.sourceBadge}>
                        {record.source}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      {record.description}
                    </td>

                    <td className={styles.tableCell}>
                      {record.payer}
                    </td>

                    <td className={styles.tableCell}>
                      <strong>
                        ₹{record.amount.toLocaleString()}
                      </strong>
                    </td>

                    <td className={styles.tableCell}>
                      {record.paymentMethod}
                    </td>

                    <td className={styles.tableCell}>
                      {record.date}
                    </td>

                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.statusBadge} ${
                          record.status ===
                          "Received"
                            ? styles.received
                            : styles.pending
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.actions}>
                        <button
                          className={styles.viewButton}
                        >
                          <Eye size={15} />
                          View
                        </button>

                        {record.status ===
                          "Pending" && (
                          <button
                            className={
                              styles.receiveButton
                            }
                            onClick={() =>
                              markAsReceived(
                                record.id
                              )
                            }
                          >
                            Mark Received
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className={styles.noData}
                  >
                    No revenue records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.tableFooter}>
          Showing {filteredRevenue.length} of{" "}
          {revenueRecords.length} revenue records
        </div>
      </section>
    </main>
  );
}