"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Receipt,
  CheckCircle,
  Clock,
  AlertCircle,
  Search,
  Eye,
  Download,
  CreditCard,
  ArrowLeft,
  Plus,
} from "lucide-react";

import styles from "./Invoice.module.css";

type InvoiceStatus = "Paid" | "Pending" | "Overdue";

interface Invoice {
  id: string;
  customer: string;
  email: string;
  invoiceType: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
}

const invoicesData: Invoice[] = [
  {
    id: "INV001",
    customer: "Rahul Kumar",
    email: "rahul@gmail.com",
    invoiceType: "Membership Invoice",
    amount: 2000,
    issueDate: "12 Sep 2026",
    dueDate: "12 Sep 2026",
    status: "Paid",
  },
  {
    id: "INV002",
    customer: "Priya Sharma",
    email: "priya@gmail.com",
    invoiceType: "Membership Invoice",
    amount: 2000,
    issueDate: "11 Sep 2026",
    dueDate: "11 Sep 2026",
    status: "Paid",
  },
  {
    id: "INV003",
    customer: "Arjun Reddy",
    email: "arjun@gmail.com",
    invoiceType: "Membership Invoice",
    amount: 2000,
    issueDate: "10 Sep 2026",
    dueDate: "10 Oct 2026",
    status: "Pending",
  },
  {
    id: "INV004",
    customer: "Hyderabad Adaptive Boxing Club",
    email: "habc@gmail.com",
    invoiceType: "Organisation Registration",
    amount: 5000,
    issueDate: "09 Sep 2026",
    dueDate: "09 Oct 2026",
    status: "Paid",
  },
  {
    id: "INV005",
    customer: "Sneha Reddy",
    email: "sneha@gmail.com",
    invoiceType: "Competition Registration",
    amount: 1500,
    issueDate: "08 Sep 2026",
    dueDate: "08 Sep 2026",
    status: "Paid",
  },
  {
    id: "INV006",
    customer: "Kavya Devi",
    email: "kavya@gmail.com",
    invoiceType: "Competition Registration",
    amount: 1500,
    issueDate: "07 Sep 2026",
    dueDate: "07 Sep 2026",
    status: "Overdue",
  },
  {
    id: "INV007",
    customer: "WABA Telangana",
    email: "telangana@waba.org",
    invoiceType: "Annual Affiliation",
    amount: 7500,
    issueDate: "06 Sep 2026",
    dueDate: "06 Oct 2026",
    status: "Paid",
  },
  {
    id: "INV008",
    customer: "Vikram Singh",
    email: "vikram@gmail.com",
    invoiceType: "Competition Registration",
    amount: 1500,
    issueDate: "05 Sep 2026",
    dueDate: "05 Oct 2026",
    status: "Pending",
  },
];

export default function Invoice() {
  const [invoices, setInvoices] =
    useState<Invoice[]>(invoicesData);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const totalInvoices = invoices.length;

  const paidInvoices = invoices.filter(
    (invoice) => invoice.status === "Paid"
  );

  const pendingInvoices = invoices.filter(
    (invoice) => invoice.status === "Pending"
  );

  const overdueInvoices = invoices.filter(
    (invoice) => invoice.status === "Overdue"
  );

  const totalInvoiceAmount = invoices.reduce(
    (total, invoice) => total + invoice.amount,
    0
  );

  const paidAmount = paidInvoices.reduce(
    (total, invoice) => total + invoice.amount,
    0
  );

  const pendingAmount = pendingInvoices.reduce(
    (total, invoice) => total + invoice.amount,
    0
  );

  const overdueAmount = overdueInvoices.reduce(
    (total, invoice) => total + invoice.amount,
    0
  );

  const filteredInvoices = invoices.filter((invoice) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      invoice.id.toLowerCase().includes(searchText) ||
      invoice.customer.toLowerCase().includes(searchText) ||
      invoice.email.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      invoice.status === statusFilter;

    const matchesType =
      typeFilter === "All" ||
      invoice.invoiceType === typeFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesType
    );
  });

  const markAsPaid = (id: string) => {
    setInvoices((currentInvoices) =>
      currentInvoices.map((invoice) =>
        invoice.id === id
          ? {
              ...invoice,
              status: "Paid",
            }
          : invoice
      )
    );
  };

  return (
    <main className={styles.invoicesPage}>
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

          <h1>Invoices</h1>

          <p>
            Create, manage and track WABA financial invoices
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

          <button className={styles.createButton}>
            <Plus size={18} />
            Create Invoice
          </button>
        </div>
      </div>

      {/* SUMMARY CARDS */}

      <section className={styles.summaryGrid}>
        {/* TOTAL */}

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <Receipt size={24} />
          </div>

          <div>
            <p>Total Invoices</p>

            <h2>{totalInvoices}</h2>

            <span>
              ₹{totalInvoiceAmount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* PAID */}

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <CheckCircle size={24} />
          </div>

          <div>
            <p>Paid Invoices</p>

            <h2>{paidInvoices.length}</h2>

            <span className={styles.paidText}>
              ₹{paidAmount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* PENDING */}

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <Clock size={24} />
          </div>

          <div>
            <p>Pending Invoices</p>

            <h2>{pendingInvoices.length}</h2>

            <span className={styles.pendingText}>
              ₹{pendingAmount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* OVERDUE */}

        <div className={styles.summaryCard}>
          <div className={styles.iconBox}>
            <AlertCircle size={24} />
          </div>

          <div>
            <p>Overdue Invoices</p>

            <h2>{overdueInvoices.length}</h2>

            <span className={styles.overdueText}>
              ₹{overdueAmount.toLocaleString()}
            </span>
          </div>
        </div>
      </section>

      {/* INVOICE INFORMATION */}

      <section className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Receipt size={22} />
          </div>

          <div>
            <h3>Invoice Management</h3>

            <p>
              Manage membership, competition,
              organisation and affiliation invoices.
            </p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <CreditCard size={22} />
          </div>

          <div>
            <h3>Payment Tracking</h3>

            <p>
              Track paid, pending and overdue
              invoice payments.
            </p>
          </div>
        </div>
      </section>

      {/* TABLE */}

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Invoice Records</h2>

            <p>
              View and manage all invoice records
            </p>
          </div>
        </div>

        {/* FILTERS */}

        <div className={styles.filterRow}>
          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search invoice or customer..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <select
            className={styles.selectBox}
            value={typeFilter}
            onChange={(e) =>
              setTypeFilter(e.target.value)
            }
          >
            <option value="All">
              All Invoice Types
            </option>

            <option value="Membership Invoice">
              Membership Invoice
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
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">
              All Status
            </option>

            <option value="Paid">Paid</option>

            <option value="Pending">
              Pending
            </option>

            <option value="Overdue">
              Overdue
            </option>
          </select>
        </div>

        {/* TABLE */}

        <div className={styles.tableWrapper}>
          <table className={styles.invoiceTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>
                  Invoice ID
                </th>

                <th className={styles.tableHeading}>
                  Customer
                </th>

                <th className={styles.tableHeading}>
                  Invoice Type
                </th>

                <th className={styles.tableHeading}>
                  Amount
                </th>

                <th className={styles.tableHeading}>
                  Issue Date
                </th>

                <th className={styles.tableHeading}>
                  Due Date
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
              {filteredInvoices.length > 0 ? (
                filteredInvoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className={styles.tableCell}>
                      <strong>{invoice.id}</strong>
                    </td>

                    <td className={styles.tableCell}>
                      <div className={styles.customerInfo}>
                        <strong>
                          {invoice.customer}
                        </strong>

                        <span>
                          {invoice.email}
                        </span>
                      </div>
                    </td>

                    <td className={styles.tableCell}>
                      {invoice.invoiceType}
                    </td>

                    <td className={styles.tableCell}>
                      <strong>
                        ₹
                        {invoice.amount.toLocaleString()}
                      </strong>
                    </td>

                    <td className={styles.tableCell}>
                      {invoice.issueDate}
                    </td>

                    <td className={styles.tableCell}>
                      {invoice.dueDate}
                    </td>

                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.statusBadge} ${
                          invoice.status === "Paid"
                            ? styles.paid
                            : invoice.status ===
                              "Pending"
                            ? styles.pending
                            : styles.overdue
                        }`}
                      >
                        {invoice.status}
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

                        <button
                          className={styles.downloadButton}
                        >
                          <Download size={15} />
                          PDF
                        </button>

                        {invoice.status !==
                          "Paid" && (
                          <button
                            className={
                              styles.markPaidButton
                            }
                            onClick={() =>
                              markAsPaid(
                                invoice.id
                              )
                            }
                          >
                            <CheckCircle
                              size={15}
                            />
                            Mark Paid
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className={styles.noData}
                  >
                    No invoice records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}

        <div className={styles.tableFooter}>
          Showing {filteredInvoices.length} of{" "}
          {invoices.length} invoice records
        </div>
      </section>
    </main>
  );
}