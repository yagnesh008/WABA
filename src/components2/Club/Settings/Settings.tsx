"use client";

import { useState } from "react";
import styles from "./Settings.module.css";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("General");

  const [clubName, setClubName] = useState("WABA Boxing Academy");
  const [email, setEmail] = useState("academy@waba.org");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [address, setAddress] = useState(
    "Hyderabad, Telangana, India"
  );

  const [notifications, setNotifications] = useState({
    email: true,
    competition: true,
    payment: true,
    certificate: false,
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    loginAlert: true,
  });

  const tabs = [
    "General",
    "Notifications",
    "Security",
  ];

  const handleNotificationChange = (
    key: keyof typeof notifications
  ) => {
    setNotifications((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const handleSecurityChange = (
    key: keyof typeof security
  ) => {
    setSecurity((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <main className={styles.page}>
      {/* =========================
          PAGE HEADER
      ========================= */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Settings</h1>
          <p>
            Manage your club or academy settings and preferences.
          </p>
        </div>
      </div>

      {/* =========================
          SETTINGS CONTAINER
      ========================= */}
      <div className={styles.settingsCard}>
        {/* LEFT TABS */}
        <div className={styles.sidebar}>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`${styles.tabButton} ${
                activeTab === tab
                  ? styles.activeTab
                  : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <span>
                {tab === "General" && "⚙"}
                {tab === "Notifications" && "🔔"}
                {tab === "Security" && "🔒"}
              </span>

              {tab}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          {/* =========================
              GENERAL SETTINGS
          ========================= */}
          {activeTab === "General" && (
            <section>
              <div className={styles.sectionHeader}>
                <h2>General Settings</h2>
                <p>
                  Update your club or academy information.
                </p>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Club / Academy Name</label>

                  <input
                    type="text"
                    value={clubName}
                    onChange={(e) =>
                      setClubName(e.target.value)
                    }
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address</label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Phone Number</label>

                  <input
                    type="text"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Country</label>

                  <select defaultValue="India">
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>State</label>

                  <select defaultValue="Telangana">
                    <option>Telangana</option>
                    <option>Andhra Pradesh</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>City</label>

                  <input
                    type="text"
                    defaultValue="Hyderabad"
                  />
                </div>

                <div
                  className={`${styles.formGroup} ${styles.fullWidth}`}
                >
                  <label>Address</label>

                  <textarea
                    rows={4}
                    value={address}
                    onChange={(e) =>
                      setAddress(e.target.value)
                    }
                  />
                </div>
              </div>

              <div className={styles.saveArea}>
                <button
                  type="button"
                  className={styles.saveButton}
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </div>
            </section>
          )}

          {/* =========================
              NOTIFICATIONS
          ========================= */}
          {activeTab === "Notifications" && (
            <section>
              <div className={styles.sectionHeader}>
                <h2>Notification Settings</h2>
                <p>
                  Choose which notifications you want to
                  receive.
                </p>
              </div>

              <div className={styles.optionList}>
                <div className={styles.option}>
                  <div>
                    <h3>Email Notifications</h3>
                    <p>
                      Receive important club updates through
                      email.
                    </p>
                  </div>

                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={notifications.email}
                      onChange={() =>
                        handleNotificationChange("email")
                      }
                    />
                    <span></span>
                  </label>
                </div>

                <div className={styles.option}>
                  <div>
                    <h3>Competition Updates</h3>
                    <p>
                      Get notifications about competitions,
                      registrations and matches.
                    </p>
                  </div>

                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={notifications.competition}
                      onChange={() =>
                        handleNotificationChange(
                          "competition"
                        )
                      }
                    />
                    <span></span>
                  </label>
                </div>

                <div className={styles.option}>
                  <div>
                    <h3>Payment Notifications</h3>
                    <p>
                      Receive alerts for successful and
                      pending payments.
                    </p>
                  </div>

                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={notifications.payment}
                      onChange={() =>
                        handleNotificationChange("payment")
                      }
                    />
                    <span></span>
                  </label>
                </div>

                <div className={styles.option}>
                  <div>
                    <h3>Certificate Notifications</h3>
                    <p>
                      Get alerts when certificates are issued
                      or updated.
                    </p>
                  </div>

                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={notifications.certificate}
                      onChange={() =>
                        handleNotificationChange(
                          "certificate"
                        )
                      }
                    />
                    <span></span>
                  </label>
                </div>
              </div>

              <div className={styles.saveArea}>
                <button
                  type="button"
                  className={styles.saveButton}
                  onClick={handleSave}
                >
                  Save Preferences
                </button>
              </div>
            </section>
          )}

          {/* =========================
              SECURITY
          ========================= */}
          {activeTab === "Security" && (
            <section>
              <div className={styles.sectionHeader}>
                <h2>Security Settings</h2>
                <p>
                  Manage account security and login
                  preferences.
                </p>
              </div>

              <div className={styles.optionList}>
                <div className={styles.option}>
                  <div>
                    <h3>Two-Factor Authentication</h3>
                    <p>
                      Add an extra layer of security to your
                      account.
                    </p>
                  </div>

                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={security.twoFactor}
                      onChange={() =>
                        handleSecurityChange("twoFactor")
                      }
                    />
                    <span></span>
                  </label>
                </div>

                <div className={styles.option}>
                  <div>
                    <h3>Login Alerts</h3>
                    <p>
                      Receive an alert whenever your account
                      is accessed.
                    </p>
                  </div>

                  <label className={styles.switch}>
                    <input
                      type="checkbox"
                      checked={security.loginAlert}
                      onChange={() =>
                        handleSecurityChange("loginAlert")
                      }
                    />
                    <span></span>
                  </label>
                </div>
              </div>

              {/* Password */}
              <div className={styles.passwordSection}>
                <h3>Change Password</h3>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Current Password</label>

                    <input
                      type="password"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>New Password</label>

                    <input
                      type="password"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Confirm Password</label>

                    <input
                      type="password"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.saveArea}>
                <button
                  type="button"
                  className={styles.saveButton}
                  onClick={handleSave}
                >
                  Save Security Settings
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}