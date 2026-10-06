"use client";

import { useState } from "react";
import Link from "next/link";
import {
  WalletCards,
  CreditCard,
  Receipt,
  TrendingUp,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  ArrowUpRight,
} from "lucide-react";

import styles from "./Finance.module.css";

type PaymentStatus = "Completed" | "Pending" | "Failed";

interface Payment {
  id: string;
  payer: string;
  type: string;
  amount: number;
  method: string;
  date: string;
  status: PaymentStatus;
}

const paymentsData: Payment[] = [
  {
    id: "PAY001",
    payer: "Rahul Kumar",
    type: "Membership Fee",
    amount: 2000,
    method: "UPI",
    date: "12 Sep 2026",
    status: "Completed",
  },
  {
    id: "PAY002",
    payer: "Priya Sharma",
    type: "Membership Fee",
    amount: 2000,
    method: "Card",
    date: "11 Sep 2026",
    status: "Completed",
  },
  {
    id: "PAY003",
    payer: "Arjun Reddy",
    type: "Membership Fee",
    amount: 2000,
    method: "UPI",
    date: "10 Sep 2026",
    status: "Pending",
  },
  {
    id: "PAY004",
    payer: "Hyderabad Adaptive Boxing Club",
    type: "Organisation Registration",
    amount: 5000,
    method: "Bank Transfer",
    date: "09 Sep 2026",
    status: "Completed",
  },
  {
    id: "PAY005",
    payer: "Sneha Reddy",
    type: "Competition Registration",
    amount: 1500,
    method: "UPI",
    date: "08 Sep 2026",
    status: "Completed",
  },
  {
    id: "PAY006",
    payer: "Kavya Devi",
    type: "Competition Registration",
    amount: 1500,
    method: "Card",
    date: "07 Sep 2026",
    status: "Failed",
  },
];

const revenueData = [
  {
    title: "Membership Fees",
    amount: 6000,
    percentage: 36,
  },
  {
    title: "Competition Registration",
    amount: 3000,
    percentage: 18,
  },
  {
    title: "Organisation Registration",
    amount: 5000,
    percentage: 30,
  },
  {
    title: "Certification",
    amount: 2500,
    percentage: 16,
  },
];

export default function Finance() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const totalRevenue = 16500;

  const completedPayments = paymentsData.filter(
    (payment) => payment.status === "Completed"
  );

  const pendingPayments = paymentsData.filter(
    (payment) => payment.status === "Pending"
  );

  const filteredPayments = paymentsData.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(search.toLowerCase()) ||
      payment.payer.toLowerCase().includes(search.toLowerCase()) ||
      payment.type.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || payment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className={styles.financePage}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Finance</h1>
          <p>Manage payments, invoices and revenue</p>
        </div>

        <div className={styles.headerActions}>
          <Link
            href="/financePage/payments"
            className={styles.primaryButton}
          >
            <CreditCard size={18} />
            Payments
          </Link>

          <Link
            href="/financePage/invoices"
            className={styles.secondaryButton}
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
            <h2>₹16,500</h2>
            <span className={styles.successText}>
              <ArrowUpRight size={14} />
              12.5% this month
            </span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <CreditCard size={24} />
          </div>

          <div>
            <p>Total Payments</p>
            <h2>{paymentsData.length}</h2>
            <span className={styles.successText}>
              {completedPayments.length} completed
            </span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <Clock size={24} />
          </div>

          <div>
            <p>Pending Payments</p>
            <h2>{pendingPayments.length}</h2>
            <span className={styles.warningText}>
              Awaiting confirmation
            </span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <Receipt size={24} />
          </div>

          <div>
            <p>Total Invoices</p>
            <h2>6</h2>
            <span className={styles.successText}>
              4 paid
            </span>
          </div>
        </div>
      </section>

      {/* QUICK MODULES */}
      <section className={styles.moduleGrid}>
        <Link
          href="/financePage/payments"
          className={styles.moduleCard}
        >
          <div className={styles.moduleIcon}>
            <CreditCard size={24} />
          </div>

          <div className={styles.moduleContent}>
            <h3>Payments</h3>
            <p>Manage all payment transactions</p>
          </div>

          <ArrowUpRight size={20} />
        </Link>

        <Link
          href="/financePage/invoices"
          className={styles.moduleCard}
        >
          <div className={styles.moduleIcon}>
            <Receipt size={24} />
          </div>

          <div className={styles.moduleContent}>
            <h3>Invoices</h3>
            <p>Create and manage invoices</p>
          </div>

          <ArrowUpRight size={20} />
        </Link>

        <Link
          href="/financePage/revenue"
          className={styles.moduleCard}
        >
          <div className={styles.moduleIcon}>
            <TrendingUp size={24} />
          </div>

          <div className={styles.moduleContent}>
            <h3>Revenue</h3>
            <p>Track revenue and financial reports</p>
          </div>

          <ArrowUpRight size={20} />
        </Link>
      </section>

      {/* MAIN CONTENT */}
      <div className={styles.contentGrid}>
        {/* REVENUE OVERVIEW */}
        <section className={styles.revenueCard}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Revenue Overview</h2>
              <p>Revenue generated by category</p>
            </div>

            <Link
              href="/financePage/revenue"
              className={styles.viewLink}
            >
              View Revenue
            </Link>
          </div>

          <div className={styles.revenueTotal}>
            <span>Total Revenue</span>
            <strong>₹16,500</strong>
          </div>

          <div className={styles.revenueList}>
            {revenueData.map((item) => (
              <div
                className={styles.revenueItem}
                key={item.title}
              >
                <div className={styles.revenueInfo}>
                  <span>{item.title}</span>
                  <strong>₹{item.amount.toLocaleString()}</strong>
                </div>

                <div className={styles.progressBackground}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>

                <span className={styles.percentage}>
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* PAYMENT STATUS */}
        <section className={styles.statusCard}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Payment Status</h2>
              <p>Current payment summary</p>
            </div>
          </div>

          <div className={styles.statusList}>
            <div className={styles.statusItem}>
              <div className={styles.statusLeft}>
                <CheckCircle size={22} />
                <span>Completed</span>
              </div>

              <strong>4</strong>
            </div>

            <div className={styles.statusItem}>
              <div className={styles.statusLeft}>
                <Clock size={22} />
                <span>Pending</span>
              </div>

              <strong>1</strong>
            </div>

            <div className={styles.statusItem}>
              <div className={styles.statusLeft}>
                <XCircle size={22} />
                <span>Failed</span>
              </div>

              <strong>1</strong>
            </div>
          </div>

          <Link
            href="/financePage/payments"
            className={styles.fullButton}
          >
            View All Payments
          </Link>
        </section>
      </div>

      {/* RECENT PAYMENTS */}
      <section className={styles.tableCard}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Recent Payments</h2>
            <p>Latest financial transactions</p>
          </div>

          <Link
            href="/financePage/payments"
            className={styles.viewLink}
          >
            View All
          </Link>
        </div>

        {/* FILTERS */}
        <div className={styles.filterRow}>
          <input
            type="text"
            placeholder="Search payment, payer or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={styles.selectInput}
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        {/* TABLE */}
        <div className={styles.tableWrapper}>
          <table className={styles.financeTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Payment ID
                </th>

                <th className={styles.tableHeading}>
                  Payer
                </th>

                <th className={styles.tableHeading}>
                  Payment Type
                </th>

                <th className={styles.tableHeading}>
                  Amount
                </th>

                <th className={styles.tableHeading}>
                  Method
                </th>

                <th className={styles.tableHeading}>
                  Date
                </th>

                <th className={styles.tableHeading}>
                  Status
                </th>

                <th className={styles.tableHeading}>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className={styles.tableCell}>
                      <strong>{payment.id}</strong>
                    </td>

                    <td className={styles.tableCell}>
                      {payment.payer}
                    </td>

                    <td className={styles.tableCell}>
                      {payment.type}
                    </td>

                    <td className={styles.tableCell}>
                      <strong>
                        ₹{payment.amount.toLocaleString()}
                      </strong>
                    </td>

                    <td className={styles.tableCell}>
                      {payment.method}
                    </td>

                    <td className={styles.tableCell}>
                      {payment.date}
                    </td>

                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.statusBadge} ${
                          styles[payment.status.toLowerCase()]
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <button className={styles.viewButton}>
                        <Eye size={16} />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className={styles.noData}
                  >
                    No payments found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}