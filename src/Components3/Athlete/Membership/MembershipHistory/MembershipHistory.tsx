"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  Download,
  FileText,
  History,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import styles from "./MembershipHistory.module.css";

const memberships = [
  {
    id: "WABA-MEM-2026-001",
    type: "Athlete",
    category: "Senior",
    start: "18 Sep 2026",
    expiry: "17 Sep 2027",
    amount: "₹2,500",
    payment: "Paid",
    status: "Active",
  },
  {
    id: "WABA-MEM-2025-001",
    type: "Athlete",
    category: "Senior",
    start: "18 Sep 2025",
    expiry: "17 Sep 2026",
    amount: "₹2,500",
    payment: "Paid",
    status: "Expired",
  },
  {
    id: "WABA-MEM-2024-001",
    type: "Athlete",
    category: "Junior",
    start: "18 Sep 2024",
    expiry: "17 Sep 2025",
    amount: "₹2,000",
    payment: "Paid",
    status: "Expired",
  },
];

export default function MembershipHistory() {
  return (
    <main className={styles.page}>
      {/* ================= HEADER ================= */}

      <div className={styles.pageHeader}>
        <div>
          <div className={styles.breadcrumb}>
            Membership <span>/</span> Membership History
          </div>

          <h1>Membership History</h1>

          <p>
            View your previous and current WABA membership records.
          </p>
        </div>

        <Link href="/Athlete/membershipPage" className={styles.backButton}>
          <ArrowLeft size={18} />
          Back to Membership
        </Link>
      </div>

      {/* ================= SUMMARY ================= */}

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.blueCard}`}>
          <div className={styles.statIcon}>
            <History size={22} />
          </div>

          <div>
            <span>Total Memberships</span>
            <strong>3</strong>
            <small>Membership records</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.greenCard}`}>
          <div className={styles.statIcon}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Active Membership</span>
            <strong>1</strong>
            <small>Currently active</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.orangeCard}`}>
          <div className={styles.statIcon}>
            <Clock3 size={22} />
          </div>

          <div>
            <span>Expired Memberships</span>
            <strong>2</strong>
            <small>Previous records</small>
          </div>
        </div>

        <div className={`${styles.statCard} ${styles.purpleCard}`}>
          <div className={styles.statIcon}>
            <CreditCard size={22} />
          </div>

          <div>
            <span>Total Paid</span>
            <strong>₹7,000</strong>
            <small>Across all memberships</small>
          </div>
        </div>
      </div>

      {/* ================= CURRENT MEMBERSHIP ================= */}

      <section className={styles.currentCard}>
        <div className={styles.currentIcon}>
          <ShieldCheck size={28} />
        </div>

        <div className={styles.currentContent}>
          <span>CURRENT MEMBERSHIP</span>
          <h2>WABA-MEM-2026-001</h2>

          <p>
            Active membership from <strong>18 Sep 2026</strong> to{" "}
            <strong>17 Sep 2027</strong>.
          </p>
        </div>

        <Link
          href="/Athlete/myMembershipPage"
          className={styles.viewButton}
        >
          View Membership
        </Link>
      </section>

      {/* ================= TABLE CARD ================= */}

      <section className={styles.historyCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Membership Records</h2>
            <p>Your complete membership history.</p>
          </div>

          <div className={styles.searchBox}>
            <Search size={17} />
            <input placeholder="Search membership..." />
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Membership ID</th>
                <th>Type</th>
                <th>Category</th>
                <th>Valid From</th>
                <th>Valid Until</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {memberships.map((membership) => (
                <tr key={membership.id}>
                  <td>
                    <div className={styles.membershipId}>
                      <div className={styles.rowIcon}>
                        <FileText size={16} />
                      </div>

                      <span>{membership.id}</span>
                    </div>
                  </td>

                  <td>{membership.type}</td>

                  <td>
                    <span className={styles.category}>
                      {membership.category}
                    </span>
                  </td>

                  <td>
                    <div className={styles.dateCell}>
                      <CalendarDays size={14} />
                      {membership.start}
                    </div>
                  </td>

                  <td>
                    <div className={styles.dateCell}>
                      <CalendarDays size={14} />
                      {membership.expiry}
                    </div>
                  </td>

                  <td className={styles.amount}>{membership.amount}</td>

                  <td>
                    <span className={styles.paymentBadge}>
                      <CheckCircle2 size={13} />
                      {membership.payment}
                    </span>
                  </td>

                  <td>
                    {membership.status === "Active" ? (
                      <span className={styles.activeBadge}>
                        <CheckCircle2 size={13} />
                        Active
                      </span>
                    ) : (
                      <span className={styles.expiredBadge}>
                        <XCircle size={13} />
                        Expired
                      </span>
                    )}
                  </td>

                  <td>
                    <button className={styles.downloadButton}>
                      <Download size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS ================= */}

        <div className={styles.mobileRecords}>
          {memberships.map((membership) => (
            <div className={styles.mobileCard} key={membership.id}>
              <div className={styles.mobileTop}>
                <div className={styles.membershipId}>
                  <div className={styles.rowIcon}>
                    <FileText size={16} />
                  </div>

                  <strong>{membership.id}</strong>
                </div>

                {membership.status === "Active" ? (
                  <span className={styles.activeBadge}>
                    <CheckCircle2 size={13} />
                    Active
                  </span>
                ) : (
                  <span className={styles.expiredBadge}>
                    <XCircle size={13} />
                    Expired
                  </span>
                )}
              </div>

              <div className={styles.mobileGrid}>
                <div>
                  <span>Category</span>
                  <strong>{membership.category}</strong>
                </div>

                <div>
                  <span>Amount</span>
                  <strong>{membership.amount}</strong>
                </div>

                <div>
                  <span>Valid From</span>
                  <strong>{membership.start}</strong>
                </div>

                <div>
                  <span>Valid Until</span>
                  <strong>{membership.expiry}</strong>
                </div>

                <div>
                  <span>Payment</span>
                  <strong className={styles.mobilePaid}>
                    {membership.payment}
                  </strong>
                </div>

                <div>
                  <span>Type</span>
                  <strong>{membership.type}</strong>
                </div>
              </div>

              <button className={styles.mobileDownload}>
                <Download size={15} />
                Download
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}