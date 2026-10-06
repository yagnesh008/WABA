"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  CalendarDays,
  CreditCard,
  User,
  Award,
  MapPin,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Lock,
} from "lucide-react";

import styles from "./RenewMembership.module.css";

export default function RenewMembership() {
  const [agreed, setAgreed] = useState(false);

  const handleRenewal = () => {
    if (!agreed) {
      alert("Please accept the membership terms and conditions.");
      return;
    }

    alert("Proceeding to membership payment...");
  };

  return (
    <main className={styles.page}>
      {/* ================= PAGE HEADER ================= */}

      <div className={styles.pageHeader}>
        <div>
          <div className={styles.breadcrumb}>
            Membership <span>/</span> Renew Membership
          </div>

          <h1>Renew Membership</h1>

          <p>
            Renew your WABA athlete membership and continue your participation.
          </p>
        </div>

        <Link href="/Athlete/membershipPage" className={styles.backButton}>
          <ArrowLeft size={18} />
          Back to Membership
        </Link>
      </div>

      {/* ================= EXPIRY ALERT ================= */}

      <section className={styles.expiryBanner}>
        <div className={styles.expiryIcon}>
          <AlertCircle size={24} />
        </div>

        <div className={styles.expiryContent}>
          <strong>Your current membership is active</strong>

          <p>
            Your current membership will expire on{" "}
            <b>17 Sep 2027</b>. You can renew your membership in advance.
          </p>
        </div>

        <div className={styles.expiryDate}>
          <span>Expires On</span>
          <strong>17 Sep 2027</strong>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}

      <div className={styles.mainGrid}>
        {/* ================= LEFT SIDE ================= */}

        <div className={styles.leftColumn}>
          {/* CURRENT MEMBERSHIP */}

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h2>Current Membership</h2>
                <p>Your existing membership information.</p>
              </div>

              <span className={styles.activeBadge}>
                <CheckCircle2 size={14} />
                Active
              </span>
            </div>

            <div className={styles.membershipBox}>
              <div className={styles.membershipIcon}>
                <ShieldCheck size={26} />
              </div>

              <div className={styles.membershipInfo}>
                <span>Membership ID</span>
                <strong>WABA-MEM-2026-001</strong>
                <small>Athlete Membership</small>
              </div>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <CalendarDays size={18} />

                <div>
                  <span>Valid From</span>
                  <strong>18 Sep 2026</strong>
                </div>
              </div>

              <div className={styles.infoItem}>
                <CalendarDays size={18} />

                <div>
                  <span>Valid Until</span>
                  <strong>17 Sep 2027</strong>
                </div>
              </div>

              <div className={styles.infoItem}>
                <CreditCard size={18} />

                <div>
                  <span>Amount Paid</span>
                  <strong>₹2,500</strong>
                </div>
              </div>

              <div className={styles.infoItem}>
                <CheckCircle2 size={18} />

                <div>
                  <span>Payment Status</span>
                  <strong className={styles.paid}>Paid</strong>
                </div>
              </div>
            </div>
          </section>

          {/* ATHLETE DETAILS */}

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h2>Athlete Details</h2>
                <p>Details associated with your membership.</p>
              </div>
            </div>

            <div className={styles.athleteGrid}>
              <div className={styles.athleteItem}>
                <div className={styles.detailIcon}>
                  <User size={17} />
                </div>

                <div>
                  <span>Athlete Name</span>
                  <strong>Arjun Kumar</strong>
                </div>
              </div>

              <div className={styles.athleteItem}>
                <div className={styles.detailIcon}>
                  <User size={17} />
                </div>

                <div>
                  <span>Athlete ID</span>
                  <strong>ATH001</strong>
                </div>
              </div>

              <div className={styles.athleteItem}>
                <div className={styles.detailIcon}>
                  <Award size={17} />
                </div>

                <div>
                  <span>Category</span>
                  <strong>Senior</strong>
                </div>
              </div>

              <div className={styles.athleteItem}>
                <div className={styles.detailIcon}>
                  <ShieldCheck size={17} />
                </div>

                <div>
                  <span>Classification</span>
                  <strong>WAB-1</strong>
                </div>
              </div>

              <div className={styles.athleteItem}>
                <div className={styles.detailIcon}>
                  <MapPin size={17} />
                </div>

                <div>
                  <span>Club</span>
                  <strong>WABA Hyderabad Club</strong>
                </div>
              </div>

              <div className={styles.athleteItem}>
                <div className={styles.detailIcon}>
                  <MapPin size={17} />
                </div>

                <div>
                  <span>State</span>
                  <strong>Telangana</strong>
                </div>
              </div>
            </div>
          </section>

          {/* TERMS */}

          <section className={styles.termsCard}>
            <div className={styles.termsHeader}>
              <Lock size={19} />
              <h2>Renewal Confirmation</h2>
            </div>

            <label className={styles.checkboxRow}>
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />

              <span>
                I confirm that my athlete information is correct and I agree
                to the WABA membership terms and conditions.
              </span>
            </label>
          </section>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className={styles.rightColumn}>
          {/* RENEWAL PLAN */}

          <section className={styles.renewalCard}>
            <div className={styles.renewalTop}>
              <div className={styles.renewalIcon}>
                <RefreshCw size={24} />
              </div>

              <div>
                <span>RENEWAL PLAN</span>
                <h2>Annual Athlete Membership</h2>
              </div>
            </div>

            <div className={styles.priceBox}>
              <span>Membership Fee</span>

              <div className={styles.price}>
                ₹2,500
                <small>/ year</small>
              </div>
            </div>

            <div className={styles.planDetails}>
              <div>
                <CheckCircle2 size={16} />
                <span>12 months membership validity</span>
              </div>

              <div>
                <CheckCircle2 size={16} />
                <span>WABA athlete membership</span>
              </div>

              <div>
                <CheckCircle2 size={16} />
                <span>Competition registration eligibility</span>
              </div>

              <div>
                <CheckCircle2 size={16} />
                <span>Access to athlete services</span>
              </div>
            </div>

            <div className={styles.nextValidity}>
              <span>Renewed membership period</span>

              <strong>
                18 Sep 2027 → 17 Sep 2028
              </strong>
            </div>

            <button
              type="button"
              className={styles.renewButton}
              onClick={handleRenewal}
            >
              <CreditCard size={18} />
              Proceed to Payment
            </button>

            <p className={styles.secureText}>
              <Lock size={13} />
              Secure payment through WABA
            </p>
          </section>

          {/* PAYMENT SUMMARY */}

          <section className={styles.summaryCard}>
            <h2>Payment Summary</h2>

            <div className={styles.summaryRow}>
              <span>Membership Fee</span>
              <strong>₹2,500</strong>
            </div>

            <div className={styles.summaryRow}>
              <span>Processing Fee</span>
              <strong>₹0</strong>
            </div>

            <div className={styles.summaryDivider}></div>

            <div className={styles.totalRow}>
              <span>Total Amount</span>
              <strong>₹2,500</strong>
            </div>
          </section>

          {/* HELP */}

          <div className={styles.helpBox}>
            <div className={styles.helpIcon}>
              <ShieldCheck size={20} />
            </div>

            <div>
              <strong>Need help?</strong>
              <p>
                Contact WABA support if you have any questions about your
                membership renewal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}