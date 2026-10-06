"use client";

import { useState } from "react";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Globe,
  Lock,
  Save,
  Mail,
  Smartphone,
  KeyRound,
  CheckCircle,
} from "lucide-react";

import styles from "./Settings.module.css";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [systemNotifications, setSystemNotifications] = useState(true);
  const [securityNotifications, setSecurityNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("Asia/Kolkata");

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className={styles.settingsPage}>
      {/* Page Header */}

      <div className={styles.pageHeader}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>
            <SettingsIcon size={27} />
          </div>

          <div>
            <h1>Settings</h1>
            <p>
              Manage your account, notifications, security and system
              preferences.
            </p>
          </div>
        </div>

        <button className={styles.saveButton} onClick={handleSave}>
          {saved ? (
            <>
              <CheckCircle size={17} />
              Saved
            </>
          ) : (
            <>
              <Save size={17} />
              Save Changes
            </>
          )}
        </button>
      </div>

      {/* Settings Layout */}

      <div className={styles.settingsLayout}>
        {/* Sidebar */}

        <aside className={styles.settingsSidebar}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "profile" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            <User size={18} />
            <span>Profile Settings</span>
          </button>

          <button
            className={`${styles.tabButton} ${
              activeTab === "account" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("account")}
          >
            <SettingsIcon size={18} />
            <span>Account Settings</span>
          </button>

          <button
            className={`${styles.tabButton} ${
              activeTab === "notifications" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            <Bell size={18} />
            <span>Notifications</span>
          </button>

          <button
            className={`${styles.tabButton} ${
              activeTab === "security" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("security")}
          >
            <Shield size={18} />
            <span>Security</span>
          </button>

          <button
            className={`${styles.tabButton} ${
              activeTab === "preferences" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("preferences")}
          >
            <Globe size={18} />
            <span>System Preferences</span>
          </button>
        </aside>

        {/* Content */}

        <section className={styles.settingsContent}>
          {/* Profile Settings */}

          {activeTab === "profile" && (
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h2>Profile Settings</h2>
                  <p>
                    Manage your National Admin profile information.
                  </p>
                </div>

                <User size={23} />
              </div>

              <div className={styles.profileTop}>
                <div className={styles.profileAvatar}>R</div>

                <div>
                  <h3>Rajesh Kumar</h3>
                  <p>Super Admin</p>
                  <span>National Administration</span>
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    defaultValue="Rajesh Kumar"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    defaultValue="rajesh@waba.org"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Role</label>
                  <input
                    type="text"
                    value="Super Admin"
                    readOnly
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Department</label>
                  <input
                    type="text"
                    defaultValue="National Administration"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Location</label>
                  <input
                    type="text"
                    defaultValue="New Delhi, India"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Account Settings */}

          {activeTab === "account" && (
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h2>Account Settings</h2>
                  <p>
                    Manage your WABA administrator account information.
                  </p>
                </div>

                <SettingsIcon size={23} />
              </div>

              <div className={styles.settingSection}>
                <div className={styles.settingIcon}>
                  <Mail size={20} />
                </div>

                <div className={styles.settingInfo}>
                  <h3>Email Address</h3>
                  <p>rajesh@waba.org</p>
                </div>

                <button className={styles.secondaryButton}>
                  Change
                </button>
              </div>

              <div className={styles.settingSection}>
                <div className={styles.settingIcon}>
                  <Smartphone size={20} />
                </div>

                <div className={styles.settingInfo}>
                  <h3>Phone Number</h3>
                  <p>+91 98765 43210</p>
                </div>

                <button className={styles.secondaryButton}>
                  Change
                </button>
              </div>

              <div className={styles.settingSection}>
                <div className={styles.settingIcon}>
                  <KeyRound size={20} />
                </div>

                <div className={styles.settingInfo}>
                  <h3>Password</h3>
                  <p>Last changed 30 days ago</p>
                </div>

                <button className={styles.secondaryButton}>
                  Change Password
                </button>
              </div>
            </div>
          )}

          {/* Notifications */}

          {activeTab === "notifications" && (
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h2>Notification Settings</h2>
                  <p>
                    Control how you receive WABA system notifications.
                  </p>
                </div>

                <Bell size={23} />
              </div>

              <div className={styles.notificationRow}>
                <div>
                  <h3>Email Notifications</h3>
                  <p>
                    Receive important system updates through email.
                  </p>
                </div>

                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) =>
                      setEmailNotifications(e.target.checked)
                    }
                  />
                  <span></span>
                </label>
              </div>

              <div className={styles.notificationRow}>
                <div>
                  <h3>System Notifications</h3>
                  <p>
                    Receive notifications about administrative activities.
                  </p>
                </div>

                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={systemNotifications}
                    onChange={(e) =>
                      setSystemNotifications(e.target.checked)
                    }
                  />
                  <span></span>
                </label>
              </div>

              <div className={styles.notificationRow}>
                <div>
                  <h3>Security Notifications</h3>
                  <p>
                    Receive alerts about login and security activities.
                  </p>
                </div>

                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={securityNotifications}
                    onChange={(e) =>
                      setSecurityNotifications(e.target.checked)
                    }
                  />
                  <span></span>
                </label>
              </div>
            </div>
          )}

          {/* Security */}

          {activeTab === "security" && (
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h2>Security Settings</h2>
                  <p>
                    Manage account security and authentication settings.
                  </p>
                </div>

                <Shield size={23} />
              </div>

              <div className={styles.securityBanner}>
                <div className={styles.securityIcon}>
                  <Shield size={22} />
                </div>

                <div>
                  <h3>Account Security</h3>
                  <p>
                    Your account security settings are currently active.
                  </p>
                </div>
              </div>

              <div className={styles.securityItem}>
                <div>
                  <h3>Two-Factor Authentication</h3>
                  <p>
                    Add an additional layer of security to your account.
                  </p>
                </div>

                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={twoFactor}
                    onChange={(e) =>
                      setTwoFactor(e.target.checked)
                    }
                  />
                  <span></span>
                </label>
              </div>

              <div className={styles.securityItem}>
                <div>
                  <h3>Login Alerts</h3>
                  <p>
                    Get notified whenever your account is accessed.
                  </p>
                </div>

                <span className={styles.enabledBadge}>
                  Enabled
                </span>
              </div>

              <div className={styles.securityItem}>
                <div>
                  <h3>Session Management</h3>
                  <p>
                    Review active sessions connected to your account.
                  </p>
                </div>

                <button className={styles.secondaryButton}>
                  View Sessions
                </button>
              </div>
            </div>
          )}

          {/* Preferences */}

          {activeTab === "preferences" && (
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h2>System Preferences</h2>
                  <p>
                    Configure language, timezone and portal preferences.
                  </p>
                </div>

                <Globe size={23} />
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Language</label>

                  <select
                    value={language}
                    onChange={(e) =>
                      setLanguage(e.target.value)
                    }
                  >
                    <option>English</option>
                    <option>Telugu</option>
                    <option>Hindi</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Timezone</label>

                  <select
                    value={timezone}
                    onChange={(e) =>
                      setTimezone(e.target.value)
                    }
                  >
                    <option value="Asia/Kolkata">
                      India Standard Time (IST)
                    </option>

                    <option value="Asia/Dubai">
                      Gulf Standard Time
                    </option>

                    <option value="Europe/London">
                      United Kingdom
                    </option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Date Format</label>

                  <select defaultValue="DD/MM/YYYY">
                    <option>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Default Dashboard</label>

                  <select defaultValue="National Dashboard">
                    <option>National Dashboard</option>
                    <option>Users</option>
                    <option>Competition</option>
                    <option>Finance</option>
                  </select>
                </div>
              </div>

              <div className={styles.preferenceInfo}>
                <Globe size={19} />

                <div>
                  <h3>Portal Preferences</h3>
                  <p>
                    These settings control how information is displayed
                    throughout the WABA National Admin Portal.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Security Note */}

          <div className={styles.securityNote}>
            <Lock size={18} />

            <div>
              <strong>Security Notice</strong>
              <p>
                Keep your account credentials secure and never share your
                administrator password with others.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}