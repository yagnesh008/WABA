"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  CreditCard,
  History,
  RefreshCw,
  CheckCircle2,
  Clock3,
  ArrowRight,
  Download,
  User,
} from "lucide-react";

import styles from "./Membership.module.css";

export default function Membership() {
  return (
    <main className={styles.page}>

      {/* =========================================
          PAGE HEADER
      ========================================= */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Membership</h1>
          <p>
            Manage your WABA athlete membership, history and renewal.
          </p>
        </div>

        <div className={styles.activeBadge}>
          <span></span>
          Membership Active
        </div>
      </div>

      {/* =========================================
          CURRENT MEMBERSHIP HERO
      ========================================= */}
      <section className={styles.heroCard}>

        <div className={styles.heroLeft}>

          <div className={styles.heroIcon}>
            <ShieldCheck size={34} />
          </div>

          <div className={styles.heroInfo}>
            <span className={styles.heroLabel}>
              CURRENT MEMBERSHIP
            </span>

            <h2>WABA-MEM-2026-001</h2>

            <p>
              Athlete Membership • Arjun Kumar
            </p>
          </div>

        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroStatus}>
            <CheckCircle2 size={16} />
            Active
          </div>

          <span>
            Valid until 17 Sep 2027
          </span>
        </div>

      </section>

      {/* =========================================
          STAT CARDS
      ========================================= */}
      <section className={styles.statsGrid}>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Calendar size={21} />
          </div>

          <div>
            <span>Start Date</span>
            <strong>18 Sep 2026</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Clock3 size={21} />
          </div>

          <div>
            <span>Expiry Date</span>
            <strong>17 Sep 2027</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CreditCard size={21} />
          </div>

          <div>
            <span>Amount Paid</span>
            <strong>₹2,500</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <History size={21} />
          </div>

          <div>
            <span>Total Memberships</span>
            <strong>3</strong>
          </div>
        </div>

      </section>

      {/* =========================================
          MEMBERSHIP VALIDITY
      ========================================= */}
      <section className={styles.validityCard}>

        <div className={styles.validityHeader}>
          <div>
            <h3>Membership Validity</h3>
            <p>
              Your current membership validity period
            </p>
          </div>

          <strong>82%</strong>
        </div>

        <div className={styles.progress}>
          <div className={styles.progressFill}></div>
        </div>

        <div className={styles.progressDates}>
          <span>18 Sep 2026</span>
          <span>17 Sep 2027</span>
        </div>

      </section>

      {/* =========================================
          THREE MEMBERSHIP OPTIONS
      ========================================= */}
      <div className={styles.sectionHeader}>
        <div>
          <h2>Membership Management</h2>
          <p>
            Access your membership information and actions.
          </p>
        </div>
      </div>

      <section className={styles.managementGrid}>

        {/* =====================================
            MY MEMBERSHIP
        ===================================== */}
        <div className={styles.managementCard}>

          <div className={`${styles.managementIcon} ${styles.orange}`}>
            <User size={23} />
          </div>

          <div className={styles.cardContent}>
            <h3>My Membership</h3>

            <p>
              View your current membership details,
              validity, membership number and registered
              athlete information.
            </p>

            <div className={styles.cardInfo}>
              <span>
                <CheckCircle2 size={14} />
                Active Membership
              </span>

              <span>
                <ShieldCheck size={14} />
                Athlete Member
              </span>
            </div>

            <Link
              href="/Athlete/myMembershipPage"
              className={styles.cardButton}
            >
              View Membership
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>

        {/* =====================================
            MEMBERSHIP HISTORY
        ===================================== */}
        <div className={styles.managementCard}>

          <div className={`${styles.managementIcon} ${styles.blue}`}>
            <History size={23} />
          </div>

          <div className={styles.cardContent}>
            <h3>Membership History</h3>

            <p>
              View your previous WABA memberships,
              payment records, validity periods and
              membership status.
            </p>

            <div className={styles.cardInfo}>
              <span>
                <History size={14} />
                3 Membership Records
              </span>

              <span>
                <CreditCard size={14} />
                Payment History
              </span>
            </div>

            <Link
              href="/Athlete/membershipHistoryPage"
              className={styles.cardButton}
            >
              View History
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>

        {/* =====================================
            RENEW MEMBERSHIP
        ===================================== */}
        <div className={`${styles.managementCard} ${styles.renewCard}`}>

          <div className={`${styles.managementIcon} ${styles.green}`}>
            <RefreshCw size={23} />
          </div>

          <div className={styles.cardContent}>
            <h3>Renew Membership</h3>

            <p>
              Renew your WABA athlete membership
              and continue participating in competitions
              and activities.
            </p>

            <div className={styles.cardInfo}>
              <span>
                <Calendar size={14} />
                Current expiry: 17 Sep 2027
              </span>

              <span>
                <CreditCard size={14} />
                Online Payment Available
              </span>
            </div>

            <Link
              href="/Athlete/renewMembershipPage"
              className={`${styles.cardButton} ${styles.renewButton}`}
            >
              Renew Membership
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>

      </section>

      {/* =========================================
          MEMBERSHIP DETAILS
      ========================================= */}
      <section className={styles.detailsCard}>

        <div className={styles.detailsHeader}>
          <div>
            <h3>Current Membership Details</h3>
            <p>
              Information associated with your active membership.
            </p>
          </div>

          <ShieldCheck
            size={22}
            className={styles.detailsIcon}
          />
        </div>

        <div className={styles.detailsGrid}>

          <div>
            <span>Membership ID</span>
            <strong>WABA-MEM-2026-001</strong>
          </div>

          <div>
            <span>Athlete ID</span>
            <strong>ATH001</strong>
          </div>

          <div>
            <span>Athlete Name</span>
            <strong>Arjun Kumar</strong>
          </div>

          <div>
            <span>Membership Type</span>
            <strong>Athlete</strong>
          </div>

          <div>
            <span>Category</span>
            <strong>Senior</strong>
          </div>

          <div>
            <span>Classification</span>
            <strong>WAB-1</strong>
          </div>

          <div>
            <span>Club / Academy</span>
            <strong>WABA Hyderabad Club</strong>
          </div>

          <div>
            <span>State</span>
            <strong>Telangana</strong>
          </div>

        </div>

      </section>

      {/* =========================================
          QUICK ACTIONS
      ========================================= */}
      <section className={styles.quickCard}>

        <div className={styles.quickInfo}>
          <div className={styles.quickIcon}>
            <Download size={20} />
          </div>

          <div>
            <h3>Membership Card</h3>
            <p>
              Download your current WABA membership card.
            </p>
          </div>
        </div>

        <button className={styles.downloadButton}>
          <Download size={16} />
          Download Card
        </button>

      </section>

    </main>
  );
}