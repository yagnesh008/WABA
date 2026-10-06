"use client";

import Link from "next/link";
import {
  ShieldCheck,
  CalendarDays,
  CreditCard,
  User,
  MapPin,
  Award,
  Download,
  ArrowLeft,
  CheckCircle2,
  Clock3,
  FileText,
} from "lucide-react";

import styles from "./Mymembership.module.css";

export default function Mymembership() {
  return (
    <main className={styles.page}>
      {/* ================= HEADER ================= */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.breadcrumb}>
            Membership <span>/</span> My Membership
          </div>

          <h1>My Membership</h1>

          <p>
            View your current WABA athlete membership details and validity.
          </p>
        </div>

        <Link href="/Athlete/membershipPage" className={styles.backButton}>
          <ArrowLeft size={18} />
          Back to Membership
        </Link>
      </div>

      {/* ================= STATUS BANNER ================= */}
      <section className={styles.statusBanner}>
        <div className={styles.statusIcon}>
          <ShieldCheck size={32} />
        </div>

        <div className={styles.statusContent}>
          <span className={styles.smallLabel}>CURRENT MEMBERSHIP</span>

          <h2>WABA-MEM-2026-001</h2>

          <p>
            Your WABA athlete membership is currently active and valid.
          </p>
        </div>

        <div className={styles.activeStatus}>
          <CheckCircle2 size={18} />
          Active
        </div>
      </section>

      {/* ================= MAIN GRID ================= */}
      <div className={styles.mainGrid}>
        {/* ================= MEMBERSHIP CARD ================= */}
        <section className={styles.membershipCard}>
          <div className={styles.cardTop}>
            <div>
              <span className={styles.cardLabel}>WABA ATHLETE MEMBERSHIP</span>
              <h2>Membership Card</h2>
            </div>

            <div className={styles.cardLogo}>
              WABA
            </div>
          </div>

          <div className={styles.athleteSection}>
            <div className={styles.avatar}>
              <User size={30} />
            </div>

            <div>
              <span>Athlete Name</span>
              <h3>Arjun Kumar</h3>
              <p>ATH001</p>
            </div>
          </div>

          <div className={styles.cardDetails}>
            <div>
              <span>Membership ID</span>
              <strong>WABA-MEM-2026-001</strong>
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
          </div>

          <div className={styles.cardFooter}>
            <div>
              <span>Valid From</span>
              <strong>18 Sep 2026</strong>
            </div>

            <div>
              <span>Valid Until</span>
              <strong>17 Sep 2027</strong>
            </div>
          </div>
        </section>

        {/* ================= MEMBERSHIP SUMMARY ================= */}
        <section className={styles.summaryCard}>
          <div className={styles.sectionTitle}>
            <h2>Membership Summary</h2>
            <span className={styles.activeBadge}>Active</span>
          </div>

          <div className={styles.summaryList}>
            <div className={styles.summaryItem}>
              <div className={`${styles.summaryIcon} ${styles.blue}`}>
                <CalendarDays size={20} />
              </div>

              <div>
                <span>Start Date</span>
                <strong>18 Sep 2026</strong>
              </div>
            </div>

            <div className={styles.summaryItem}>
              <div className={`${styles.summaryIcon} ${styles.orange}`}>
                <Clock3 size={20} />
              </div>

              <div>
                <span>Expiry Date</span>
                <strong>17 Sep 2027</strong>
              </div>
            </div>

            <div className={styles.summaryItem}>
              <div className={`${styles.summaryIcon} ${styles.green}`}>
                <CreditCard size={20} />
              </div>

              <div>
                <span>Amount Paid</span>
                <strong>₹2,500</strong>
              </div>
            </div>

            <div className={styles.summaryItem}>
              <div className={`${styles.summaryIcon} ${styles.purple}`}>
                <FileText size={20} />
              </div>

              <div>
                <span>Payment Status</span>
                <strong className={styles.paid}>Paid</strong>
              </div>
            </div>
          </div>

          {/* VALIDITY */}
          <div className={styles.validityBox}>
            <div className={styles.validityHeader}>
              <span>Membership Validity</span>
              <strong>82%</strong>
            </div>

            <div className={styles.progressTrack}>
              <div className={styles.progressBar}></div>
            </div>

            <div className={styles.validityDates}>
              <span>18 Sep 2026</span>
              <span>17 Sep 2027</span>
            </div>
          </div>
        </section>
      </div>

      {/* ================= PERSONAL DETAILS ================= */}
      <section className={styles.detailsCard}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Athlete Membership Details</h2>
            <p>Information associated with your current membership.</p>
          </div>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <User size={19} />
            </div>

            <div>
              <span>Athlete Name</span>
              <strong>Arjun Kumar</strong>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <User size={19} />
            </div>

            <div>
              <span>Athlete ID</span>
              <strong>ATH001</strong>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <Award size={19} />
            </div>

            <div>
              <span>Category</span>
              <strong>Senior</strong>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <ShieldCheck size={19} />
            </div>

            <div>
              <span>Classification</span>
              <strong>WAB-1</strong>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <MapPin size={19} />
            </div>

            <div>
              <span>Club</span>
              <strong>WABA Hyderabad Club</strong>
            </div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <MapPin size={19} />
            </div>

            <div>
              <span>State</span>
              <strong>Telangana</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACTIONS ================= */}
      <section className={styles.actionCard}>
        <div>
          <h2>Membership Actions</h2>
          <p>Download your membership card or manage your membership.</p>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.downloadButton}>
            <Download size={18} />
            Download Membership Card
          </button>

          <Link
            href="/Athlete/renewMembershipPage"
            className={styles.renewButton}
          >
            Renew Membership
          </Link>
        </div>
      </section>
    </main>
  );
}