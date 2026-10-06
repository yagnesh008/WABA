"use client";

import { useState } from "react";
import styles from "./Payments.module.css";

const payments = [
  {
    id: "PAY001",
    member: "Arjun Kumar",
    memberId: "ATH001",
    paymentFor: "Athlete Membership",
    amount: 2500,
    method: "UPI",
    date: "18 Sep 2026",
    status: "Paid",
  },
  {
    id: "PAY002",
    member: "Rahul Reddy",
    memberId: "ATH002",
    paymentFor: "Competition Registration",
    amount: 1500,
    method: "Card",
    date: "17 Sep 2026",
    status: "Paid",
  },
  {
    id: "PAY003",
    member: "Priya Sharma",
    memberId: "ATH003",
    paymentFor: "Monthly Training Fee",
    amount: 2000,
    method: "UPI",
    date: "16 Sep 2026",
    status: "Pending",
  },
  {
    id: "PAY004",
    member: "Sanjay Kumar",
    memberId: "ATH004",
    paymentFor: "Athlete Membership",
    amount: 2500,
    method: "Cash",
    date: "15 Sep 2026",
    status: "Paid",
  },
  {
    id: "PAY005",
    member: "Kiran Singh",
    memberId: "ATH005",
    paymentFor: "Competition Registration",
    amount: 1500,
    method: "UPI",
    date: "14 Sep 2026",
    status: "Failed",
  },
  {
    id: "PAY006",
    member: "Vijay Kumar",
    memberId: "ATH006",
    paymentFor: "Monthly Training Fee",
    amount: 2000,
    method: "Bank Transfer",
    date: "13 Sep 2026",
    status: "Paid",
  },
];

export default function Payments() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const filteredPayments = payments.filter((payment) => {
    const searchMatch =
      payment.member.toLowerCase().includes(search.toLowerCase()) ||
      payment.memberId.toLowerCase().includes(search.toLowerCase()) ||
      payment.id.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "All Status" ||
      payment.status === statusFilter;

    const typeMatch =
      typeFilter === "All Types" ||
      payment.paymentFor === typeFilter;

    return searchMatch && statusMatch && typeMatch;
  });

  return (
    <div className={styles.page}>

      {/* ================= HEADER ================= */}

      <div className={styles.header}>
        <div>
          <h1>Payments</h1>
          <p>
            Manage club and academy payment transactions.
          </p>
        </div>

        <button className={styles.addButton}>
          + Record Payment
        </button>
      </div>

      {/* ================= SUMMARY ================= */}

      <div className={styles.statsGrid}>

        <div className={styles.statCard}>
          <div className={styles.icon}>₹</div>

          <div>
            <span>Total Revenue</span>
            <strong>₹18,500</strong>
            <small>This month</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.icon}>✓</div>

          <div>
            <span>Paid</span>
            <strong>₹15,000</strong>
            <small>Completed payments</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.icon}>◷</div>

          <div>
            <span>Pending</span>
            <strong>₹3,000</strong>
            <small>Awaiting payment</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.icon}>!</div>

          <div>
            <span>Failed</span>
            <strong>₹1,500</strong>
            <small>Failed transactions</small>
          </div>
        </div>

      </div>

      {/* ================= FILTERS ================= */}

      <div className={styles.filterCard}>

        <div className={styles.searchBox}>
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search member or payment ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option>All Types</option>
          <option>Athlete Membership</option>
          <option>Competition Registration</option>
          <option>Monthly Training Fee</option>
        </select>

      </div>

      {/* ================= PAYMENT TABLE ================= */}

      <div className={styles.tableCard}>

        <div className={styles.tableHeader}>
          <div>
            <h2>Payment Transactions</h2>
            <p>
              Payments received from your athletes and members.
            </p>
          </div>

          <span className={styles.count}>
            {filteredPayments.length} Transactions
          </span>
        </div>

        <div className={styles.tableWrapper}>

          <table>

            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Member</th>
                <th>Payment For</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (

                  <tr key={payment.id}>

                    {/* PAYMENT ID */}

                    <td>
                      <strong className={styles.paymentId}>
                        {payment.id}
                      </strong>
                    </td>

                    {/* MEMBER */}

                    <td>
                      <div className={styles.member}>

                        <div className={styles.avatar}>
                          {payment.member.charAt(0)}
                        </div>

                        <div>
                          <strong>{payment.member}</strong>
                          <small>{payment.memberId}</small>
                        </div>

                      </div>
                    </td>

                    {/* PAYMENT FOR */}

                    <td>
                      <span className={styles.paymentType}>
                        {payment.paymentFor}
                      </span>
                    </td>

                    {/* AMOUNT */}

                    <td>
                      <strong>
                        ₹{payment.amount.toLocaleString("en-IN")}
                      </strong>
                    </td>

                    {/* METHOD */}

                    <td>
                      <span className={styles.method}>
                        {payment.method}
                      </span>
                    </td>

                    {/* DATE */}

                    <td>{payment.date}</td>

                    {/* STATUS */}

                    <td>

                      <span
                        className={
                          payment.status === "Paid"
                            ? styles.paid
                            : payment.status === "Pending"
                            ? styles.pending
                            : styles.failed
                        }
                      >
                        {payment.status}
                      </span>

                    </td>

                    {/* ACTION */}

                    <td>
                      <button className={styles.viewButton}>
                        View
                      </button>
                    </td>

                  </tr>

                ))
              ) : (
                <tr>
                  <td colSpan={8} className={styles.noData}>
                    No payment transactions found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}