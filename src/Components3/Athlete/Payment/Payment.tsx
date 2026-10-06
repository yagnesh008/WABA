"use client";

import Link from "next/link";
import styles from "./Payment.module.css";

const paymentHistory = [
  {
    id: "PAY-2026-001",
    purpose: "Annual Membership",
    date: "18 Sep 2026",
    amount: "₹2,500",
    method: "UPI",
    status: "Paid",
  },
  {
    id: "PAY-2026-002",
    purpose: "Competition Registration",
    date: "17 Sep 2026",
    amount: "₹1,500",
    method: "UPI",
    status: "Paid",
  },
  {
    id: "PAY-2026-003",
    purpose: "Competition Registration",
    date: "15 Sep 2026",
    amount: "₹1,500",
    method: "Card",
    status: "Paid",
  },
  {
    id: "PAY-2025-001",
    purpose: "Annual Membership",
    date: "18 Sep 2025",
    amount: "₹2,500",
    method: "UPI",
    status: "Paid",
  },
];

export default function Payment() {
  return (
    <main className={styles.main}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <Link href="/Athlete/dashboardPage" className={styles.backLink}>
            ← Back to Dashboard
          </Link>

          <h1>Payments</h1>

          <p>
            View your payment transactions, invoices and payment history.
          </p>
        </div>

        <div className={styles.headerBadge}>
          Payment Management
        </div>
      </div>

      {/* Payment Summary */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            ₹
          </div>

          <div>
            <span>Total Paid</span>
            <strong>₹8,000</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            ✓
          </div>

          <div>
            <span>Successful Payments</span>
            <strong>4</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            📋
          </div>

          <div>
            <span>Total Transactions</span>
            <strong>4</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            📅
          </div>

          <div>
            <span>Last Payment</span>
            <strong>18 Sep 2026</strong>
          </div>
        </div>
      </section>

      {/* Current Payment Information */}
      <section className={styles.currentPayment}>
        <div className={styles.paymentIcon}>✓</div>

        <div className={styles.currentContent}>
          <span>Latest Payment</span>

          <h2>Annual Membership Payment</h2>

          <p>
            Payment ID: <strong>PAY-2026-001</strong>
          </p>

          <p>
            Paid on 18 Sep 2026 through UPI
          </p>
        </div>

        <div className={styles.amountBox}>
          <span>Amount Paid</span>
          <strong>₹2,500</strong>

          <small>Payment Successful</small>
        </div>
      </section>

      {/* Payment History */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Payment History</h2>
            <p>
              View all your previous WABA payment transactions.
            </p>
          </div>

          <button
            className={styles.exportButton}
            onClick={() => alert("Payment history export started.")}
          >
            ↓ Export
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Purpose</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
                <th>Invoice</th>
              </tr>
            </thead>

            <tbody>
              {paymentHistory.map((payment) => (
                <tr key={payment.id}>
                  <td>
                    <strong>{payment.id}</strong>
                  </td>

                  <td>{payment.purpose}</td>

                  <td>{payment.date}</td>

                  <td>
                    <strong>{payment.amount}</strong>
                  </td>

                  <td>{payment.method}</td>

                  <td>
                    <span className={styles.paidBadge}>
                      {payment.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className={styles.invoiceButton}
                      onClick={() =>
                        alert(
                          `Invoice ${payment.id} download started.`
                        )
                      }
                    >
                      View Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Payment Methods */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Payment Methods</h2>
            <p>Your recently used payment method.</p>
          </div>
        </div>

        <div className={styles.methodCard}>
          <div className={styles.methodIcon}>₹</div>

          <div className={styles.methodContent}>
            <h3>UPI</h3>
            <p>Primary payment method</p>
          </div>

          <span className={styles.defaultBadge}>
            Preferred
          </span>
        </div>
      </section>

      {/* Payment Information */}
      <section className={styles.infoBox}>
        <div className={styles.infoIcon}>ℹ</div>

        <div>
          <h3>Payment Information</h3>

          <ul>
            <li>
              All successful payments are recorded in your athlete account.
            </li>

            <li>
              Invoices are generated for completed transactions.
            </li>

            <li>
              Contact WABA administration if you have an issue with a
              payment or invoice.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}