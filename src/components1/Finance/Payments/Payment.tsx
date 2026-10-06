"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  CheckCircle,
  Clock,
  XCircle,
  Search,
  Eye,
  Receipt,
  WalletCards,
  ArrowLeft,
} from "lucide-react";

import styles from "./Payment.module.css";

type PaymentStatus = "Completed" | "Pending" | "Failed";

interface Payment {
  id: string;
  payer: string;
  email: string;
  paymentType: string;
  amount: number;
  method: string;
  transactionId: string;
  date: string;
  status: PaymentStatus;
}

const paymentsData: Payment[] = [
  {
    id: "PAY001",
    payer: "Rahul Kumar",
    email: "rahul@gmail.com",
    paymentType: "Membership Fee",
    amount: 2000,
    method: "UPI",
    transactionId: "TXN20260912001",
    date: "12 Sep 2026",
    status: "Completed",
  },
  {
    id: "PAY002",
    payer: "Priya Sharma",
    email: "priya@gmail.com",
    paymentType: "Membership Fee",
    amount: 2000,
    method: "Card",
    transactionId: "TXN20260911002",
    date: "11 Sep 2026",
    status: "Completed",
  },
  {
    id: "PAY003",
    payer: "Arjun Reddy",
    email: "arjun@gmail.com",
    paymentType: "Membership Fee",
    amount: 2000,
    method: "UPI",
    transactionId: "TXN20260910003",
    date: "10 Sep 2026",
    status: "Pending",
  },
  {
    id: "PAY004",
    payer: "Hyderabad Adaptive Boxing Club",
    email: "habc@gmail.com",
    paymentType: "Organisation Registration",
    amount: 5000,
    method: "Bank Transfer",
    transactionId: "TXN20260909004",
    date: "09 Sep 2026",
    status: "Completed",
  },
  {
    id: "PAY005",
    payer: "Sneha Reddy",
    email: "sneha@gmail.com",
    paymentType: "Competition Registration",
    amount: 1500,
    method: "UPI",
    transactionId: "TXN20260908005",
    date: "08 Sep 2026",
    status: "Completed",
  },
  {
    id: "PAY006",
    payer: "Kavya Devi",
    email: "kavya@gmail.com",
    paymentType: "Competition Registration",
    amount: 1500,
    method: "Card",
    transactionId: "TXN20260907006",
    date: "07 Sep 2026",
    status: "Failed",
  },
  {
    id: "PAY007",
    payer: "WABA Telangana",
    email: "telangana@waba.org",
    paymentType: "Annual Affiliation",
    amount: 7500,
    method: "Bank Transfer",
    transactionId: "TXN20260906007",
    date: "06 Sep 2026",
    status: "Completed",
  },
  {
    id: "PAY008",
    payer: "Vikram Singh",
    email: "vikram@gmail.com",
    paymentType: "Competition Registration",
    amount: 1500,
    method: "UPI",
    transactionId: "TXN20260905008",
    date: "05 Sep 2026",
    status: "Pending",
  },
];

export default function Payment() {
  const [payments, setPayments] = useState<Payment[]>(paymentsData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const totalPayments = payments.length;

  const completedPayments = payments.filter(
    (payment) => payment.status === "Completed"
  );

  const pendingPayments = payments.filter(
    (payment) => payment.status === "Pending"
  );

  const failedPayments = payments.filter(
    (payment) => payment.status === "Failed"
  );

  const totalRevenue = completedPayments.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  const filteredPayments = payments.filter((payment) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      payment.id.toLowerCase().includes(searchText) ||
      payment.payer.toLowerCase().includes(searchText) ||
      payment.email.toLowerCase().includes(searchText) ||
      payment.transactionId.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || payment.status === statusFilter;

    const matchesType =
      typeFilter === "All" || payment.paymentType === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const approvePayment = (id: string) => {
    setPayments((currentPayments) =>
      currentPayments.map((payment) =>
        payment.id === id
          ? { ...payment, status: "Completed" }
          : payment
      )
    );
  };

  return (
    <main className={styles.paymentsPage}>
      {/* HEADER */}

      <div className={styles.pageHeader}>
        <div>
          <div className={styles.backLinkWrapper}>
            <Link href="/financePage" className={styles.backLink}>
              <ArrowLeft size={16} />
              Back to Finance
            </Link>
          </div>

          <h1>Payments</h1>
          <p>Manage and monitor all WABA payment transactions</p>
        </div>

        <Link
          href="/financePage/invoices"
          className={styles.invoiceButton}
        >
          <Receipt size={18} />
          View Invoices
        </Link>
      </div>

      {/* SUMMARY CARDS */}

      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <WalletCards size={24} />
          </div>

          <div>
            <p>Total Payments</p>
            <h2>{totalPayments}</h2>
            <span>All transactions</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <CheckCircle size={24} />
          </div>

          <div>
            <p>Completed</p>
            <h2>{completedPayments.length}</h2>
            <span className={styles.completedText}>
              ₹{totalRevenue.toLocaleString()}
            </span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <Clock size={24} />
          </div>

          <div>
            <p>Pending</p>
            <h2>{pendingPayments.length}</h2>
            <span className={styles.pendingText}>
              Awaiting confirmation
            </span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <XCircle size={24} />
          </div>

          <div>
            <p>Failed</p>
            <h2>{failedPayments.length}</h2>
            <span className={styles.failedText}>
              Payment failed
            </span>
          </div>
        </div>
      </section>

      {/* PAYMENT INFORMATION */}

      <section className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <CreditCard size={22} />
          </div>

          <div>
            <h3>Payment Collection</h3>
            <p>
              Track membership, competition, organisation and
              affiliation payments.
            </p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Receipt size={22} />
          </div>

          <div>
            <h3>Transaction Records</h3>
            <p>
              Each payment contains transaction and payment
              method information.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER CARD */}

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Payment Transactions</h2>
            <p>View and manage payment records</p>
          </div>
        </div>

        <div className={styles.filterRow}>
          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search payment, payer or transaction..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className={styles.selectBox}
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="All">All Payment Types</option>
            <option value="Membership Fee">
              Membership Fee
            </option>
            <option value="Competition Registration">
              Competition Registration
            </option>
            <option value="Organisation Registration">
              Organisation Registration
            </option>
            <option value="Annual Affiliation">
              Annual Affiliation
            </option>
          </select>

          <select
            className={styles.selectBox}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        {/* TABLE */}

        <div className={styles.tableWrapper}>
          <table className={styles.paymentTable}>
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
                  Transaction ID
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
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className={styles.tableCell}>
                      <strong>{payment.id}</strong>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.payerInfo}>
                        <strong>{payment.payer}</strong>
                        <span>{payment.email}</span>
                      </div>
                    </td>

                    <td className={styles.tableCell}>
                      {payment.paymentType}
                    </td>

                    <td className={styles.tableCell}>
                      <strong>
                        ₹{payment.amount.toLocaleString()}
                      </strong>
                    </td>

                    <td className={styles.tableCell}>
                      <span className={styles.methodBadge}>
                        {payment.method}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <span className={styles.transactionId}>
                        {payment.transactionId}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      {payment.date}
                    </td>

                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.statusBadge} ${
                          payment.status === "Completed"
                            ? styles.completed
                            : payment.status === "Pending"
                            ? styles.pending
                            : styles.failed
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.actions}>
                        <button className={styles.viewButton}>
                          <Eye size={15} />
                          View
                        </button>

                        {payment.status === "Pending" && (
                          <button
                            className={styles.approveButton}
                            onClick={() =>
                              approvePayment(payment.id)
                            }
                          >
                            <CheckCircle size={15} />
                            Approve
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
                    No payment records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.tableFooter}>
          Showing {filteredPayments.length} of {payments.length}{" "}
          payment records
        </div>
      </section>
    </main>
  );
}