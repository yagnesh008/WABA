"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Settings.module.css";

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [competitionNotifications, setCompetitionNotifications] =
    useState(true);
  const [paymentNotifications, setPaymentNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(true);

  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("Asia/Kolkata");

  const handleSave = () => {
    alert("Settings saved successfully.");
  };

  return (
    <main className={styles.main}>
      {/* =====================================
          PAGE HEADER
      ===================================== */}

      <div className={styles.pageHeader}>
        <div>
          <Link href="/Athlete/dashboardPage" className={styles.backLink}>
            ← Back to Dashboard
          </Link>

          <h1>Settings</h1>

          <p>
            Manage your account preferences, notifications and privacy
            settings.
          </p>
        </div>

        <div className={styles.headerBadge}>Account Settings</div>
      </div>

      {/* =====================================
          ACCOUNT SETTINGS
      ===================================== */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Account Settings</h2>
            <p>Manage your basic athlete account preferences.</p>
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Account Name</label>
            <input
              type="text"
              value="Arjun Kumar"
              readOnly
            />
          </div>

          <div className={styles.formGroup}>
            <label>Athlete ID</label>
            <input
              type="text"
              value="ATH001"
              readOnly
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input
              type="email"
              value="arjun.kumar@example.com"
              readOnly
            />
          </div>

          <div className={styles.formGroup}>
            <label>Mobile Number</label>
            <input
              type="text"
              value="+91 98765 43210"
              readOnly
            />
          </div>
        </div>
      </section>

      {/* =====================================
          LANGUAGE & REGION
      ===================================== */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Language & Region</h2>
            <p>Choose your preferred language and timezone.</p>
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Language</label>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Timezone</label>

            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option value="Asia/Kolkata">
                India Standard Time (IST)
              </option>

              <option value="Asia/Dubai">
                Gulf Standard Time
              </option>

              <option value="UTC">
                Coordinated Universal Time (UTC)
              </option>
            </select>
          </div>
        </div>
      </section>

      {/* =====================================
          NOTIFICATIONS
      ===================================== */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Notifications</h2>
            <p>Choose which notifications you want to receive.</p>
          </div>
        </div>

        <div className={styles.settingsList}>
          {/* Email */}
          <div className={styles.settingRow}>
            <div className={styles.settingIcon}>✉</div>

            <div className={styles.settingContent}>
              <h3>Email Notifications</h3>
              <p>
                Receive important account and WABA updates through email.
              </p>
            </div>

            <button
              type="button"
              className={`${styles.toggle} ${
                emailNotifications ? styles.active : ""
              }`}
              onClick={() =>
                setEmailNotifications(!emailNotifications)
              }
              aria-label="Toggle email notifications"
            >
              <span></span>
            </button>
          </div>

          {/* Competition */}
          <div className={styles.settingRow}>
            <div className={styles.settingIcon}>🏆</div>

            <div className={styles.settingContent}>
              <h3>Competition Notifications</h3>
              <p>
                Get notifications about competitions, registrations and
                matches.
              </p>
            </div>

            <button
              type="button"
              className={`${styles.toggle} ${
                competitionNotifications ? styles.active : ""
              }`}
              onClick={() =>
                setCompetitionNotifications(
                  !competitionNotifications
                )
              }
              aria-label="Toggle competition notifications"
            >
              <span></span>
            </button>
          </div>

          {/* Payment */}
          <div className={styles.settingRow}>
            <div className={styles.settingIcon}>₹</div>

            <div className={styles.settingContent}>
              <h3>Payment Notifications</h3>
              <p>
                Receive updates about payments, invoices and transactions.
              </p>
            </div>

            <button
              type="button"
              className={`${styles.toggle} ${
                paymentNotifications ? styles.active : ""
              }`}
              onClick={() =>
                setPaymentNotifications(!paymentNotifications)
              }
              aria-label="Toggle payment notifications"
            >
              <span></span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================
          PRIVACY
      ===================================== */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Privacy</h2>
            <p>Control how your athlete profile is displayed.</p>
          </div>
        </div>

        <div className={styles.settingsList}>
          <div className={styles.settingRow}>
            <div className={styles.settingIcon}>🔒</div>

            <div className={styles.settingContent}>
              <h3>Profile Visibility</h3>

              <p>
                Allow your basic athlete profile to be visible to authorized
                WABA officials.
              </p>
            </div>

            <button
              type="button"
              className={`${styles.toggle} ${
                profileVisibility ? styles.active : ""
              }`}
              onClick={() =>
                setProfileVisibility(!profileVisibility)
              }
              aria-label="Toggle profile visibility"
            >
              <span></span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================
          SECURITY
      ===================================== */}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Security</h2>
            <p>Manage your account security options.</p>
          </div>
        </div>

        <div className={styles.securityGrid}>
          <div className={styles.securityCard}>
            <div className={styles.securityIcon}>🔑</div>

            <div>
              <h3>Password</h3>

              <p>
                Keep your account secure by regularly updating your
                password.
              </p>

              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() =>
                  alert("Password change option opened.")
                }
              >
                Change Password
              </button>
            </div>
          </div>

          <div className={styles.securityCard}>
            <div className={styles.securityIcon}>🛡</div>

            <div>
              <h3>Two-Factor Authentication</h3>

              <p>
                Add an extra layer of security to your WABA account.
              </p>

              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() =>
                  alert("Two-factor authentication setup opened.")
                }
              >
                Setup 2FA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SAVE BUTTON
      ===================================== */}

      <div className={styles.actionBar}>
        <button
          type="button"
          className={styles.saveButton}
          onClick={handleSave}
        >
          Save Changes
        </button>

        <button
          type="button"
          className={styles.cancelButton}
          onClick={() => window.location.reload()}
        >
          Cancel
        </button>
      </div>
    </main>
  );
}