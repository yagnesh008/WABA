"use client";

import { useState } from "react";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Lock,
  ShieldCheck,
  Mail,
  Smartphone,
  Eye,
  EyeOff,
  CheckCircle2,
  Save,
} from "lucide-react";

import styles from "./Settings.module.css";

export default function Settings() {
  const [activeSection, setActiveSection] = useState("account");

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [competitionNotifications, setCompetitionNotifications] =
    useState(true);
  const [assignmentNotifications, setAssignmentNotifications] =
    useState(true);
  const [resultNotifications, setResultNotifications] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const sections = [
    {
      id: "account",
      label: "Account",
      description: "Manage your account information",
      icon: User,
    },
    {
      id: "notifications",
      label: "Notifications",
      description: "Manage notification preferences",
      icon: Bell,
    },
    {
      id: "security",
      label: "Security",
      description: "Manage password and security",
      icon: Lock,
    },
    {
      id: "privacy",
      label: "Privacy",
      description: "Manage privacy preferences",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className={styles.page}>
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <SettingsIcon size={30} />
            Settings
          </h1>

          <p>
            Manage your account, notifications, security and privacy
            preferences.
          </p>
        </div>

        <div className={styles.headerBadge}>
          <ShieldCheck size={17} />
          <span>Account Settings</span>
        </div>
      </section>

      {/* =====================================================
          SETTINGS LAYOUT
      ===================================================== */}

      <section className={styles.settingsLayout}>
        {/* ===================================================
            LEFT MENU
        =================================================== */}

        <aside className={styles.settingsSidebar}>
          <div className={styles.sidebarTitle}>
            <span>SETTINGS</span>
          </div>

          <div className={styles.settingsMenu}>
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <button
                  type="button"
                  key={section.id}
                  className={`${styles.menuItem} ${
                    activeSection === section.id
                      ? styles.menuItemActive
                      : ""
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <div className={styles.menuIcon}>
                    <Icon size={18} />
                  </div>

                  <div className={styles.menuText}>
                    <strong>{section.label}</strong>
                    <span>{section.description}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* ===================================================
            RIGHT CONTENT
        =================================================== */}

        <div className={styles.settingsContent}>
          {/* =================================================
              ACCOUNT
          ================================================= */}

          {activeSection === "account" && (
            <section className={styles.contentCard}>
              <div className={styles.contentHeader}>
                <div className={styles.contentIcon}>
                  <User size={21} />
                </div>

                <div>
                  <span>ACCOUNT SETTINGS</span>
                  <h2>Account Information</h2>
                  <p>
                    View and manage your technical official account
                    information.
                  </p>
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>

                  <input
                    type="text"
                    defaultValue="Technical Official"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Technical ID</label>

                  <input
                    type="text"
                    value="TEC001"
                    readOnly
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address</label>

                  <div className={styles.inputWithIcon}>
                    <Mail size={16} />

                    <input
                      type="email"
                      defaultValue="technical@example.com"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Phone Number</label>

                  <div className={styles.inputWithIcon}>
                    <Smartphone size={16} />

                    <input
                      type="text"
                      defaultValue="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Official Role</label>

                  <select defaultValue="Technical Official">
                    <option>Technical Official</option>
                    <option>Referee</option>
                    <option>Judge</option>
                    <option>Classifier</option>
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
              </div>

              <div className={styles.accountStatus}>
                <div className={styles.statusIcon}>
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <strong>Account Verified</strong>
                  <span>
                    Your technical official account is verified and
                    active.
                  </span>
                </div>
              </div>
            </section>
          )}

          {/* =================================================
              NOTIFICATIONS
          ================================================= */}

          {activeSection === "notifications" && (
            <section className={styles.contentCard}>
              <div className={styles.contentHeader}>
                <div className={styles.contentIcon}>
                  <Bell size={21} />
                </div>

                <div>
                  <span>NOTIFICATION SETTINGS</span>
                  <h2>Notification Preferences</h2>
                  <p>
                    Choose which notifications you want to receive.
                  </p>
                </div>
              </div>

              <div className={styles.notificationList}>
                <div className={styles.notificationItem}>
                  <div className={styles.notificationInfo}>
                    <div className={styles.notificationIcon}>
                      <Mail size={18} />
                    </div>

                    <div>
                      <strong>Email Notifications</strong>
                      <span>
                        Receive important WABA updates by email.
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`${styles.toggle} ${
                      emailNotifications
                        ? styles.toggleActive
                        : ""
                    }`}
                    onClick={() =>
                      setEmailNotifications(!emailNotifications)
                    }
                    aria-label="Toggle email notifications"
                  >
                    <span />
                  </button>
                </div>

                <div className={styles.notificationItem}>
                  <div className={styles.notificationInfo}>
                    <div className={styles.notificationIcon}>
                      <Bell size={18} />
                    </div>

                    <div>
                      <strong>Competition Notifications</strong>
                      <span>
                        Get updates about competitions and events.
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`${styles.toggle} ${
                      competitionNotifications
                        ? styles.toggleActive
                        : ""
                    }`}
                    onClick={() =>
                      setCompetitionNotifications(
                        !competitionNotifications
                      )
                    }
                    aria-label="Toggle competition notifications"
                  >
                    <span />
                  </button>
                </div>

                <div className={styles.notificationItem}>
                  <div className={styles.notificationInfo}>
                    <div className={styles.notificationIcon}>
                      <User size={18} />
                    </div>

                    <div>
                      <strong>Assignment Notifications</strong>
                      <span>
                        Receive notifications about new assignments.
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`${styles.toggle} ${
                      assignmentNotifications
                        ? styles.toggleActive
                        : ""
                    }`}
                    onClick={() =>
                      setAssignmentNotifications(
                        !assignmentNotifications
                      )
                    }
                    aria-label="Toggle assignment notifications"
                  >
                    <span />
                  </button>
                </div>

                <div className={styles.notificationItem}>
                  <div className={styles.notificationInfo}>
                    <div className={styles.notificationIcon}>
                      <CheckCircle2 size={18} />
                    </div>

                    <div>
                      <strong>Result Notifications</strong>
                      <span>
                        Receive updates when match results are
                        approved.
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`${styles.toggle} ${
                      resultNotifications
                        ? styles.toggleActive
                        : ""
                    }`}
                    onClick={() =>
                      setResultNotifications(!resultNotifications)
                    }
                    aria-label="Toggle result notifications"
                  >
                    <span />
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* =================================================
              SECURITY
          ================================================= */}

          {activeSection === "security" && (
            <section className={styles.contentCard}>
              <div className={styles.contentHeader}>
                <div className={styles.contentIcon}>
                  <Lock size={21} />
                </div>

                <div>
                  <span>SECURITY SETTINGS</span>
                  <h2>Change Password</h2>
                  <p>
                    Update your password to keep your account
                    secure.
                  </p>
                </div>
              </div>

              <div className={styles.passwordForm}>
                <div className={styles.formGroup}>
                  <label>Current Password</label>

                  <div className={styles.passwordInput}>
                    <input
                      type={
                        showCurrentPassword
                          ? "text"
                          : "password"
                      }
                      value={currentPassword}
                      onChange={(e) =>
                        setCurrentPassword(e.target.value)
                      }
                      placeholder="Enter current password"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowCurrentPassword(
                          !showCurrentPassword
                        )
                      }
                      aria-label="Show current password"
                    >
                      {showCurrentPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>New Password</label>

                  <div className={styles.passwordInput}>
                    <input
                      type={
                        showNewPassword ? "text" : "password"
                      }
                      value={newPassword}
                      onChange={(e) =>
                        setNewPassword(e.target.value)
                      }
                      placeholder="Enter new password"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowNewPassword(!showNewPassword)
                      }
                      aria-label="Show new password"
                    >
                      {showNewPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Confirm New Password</label>

                  <div className={styles.passwordInput}>
                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      placeholder="Confirm new password"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      aria-label="Show confirm password"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.securityNotice}>
                <ShieldCheck size={19} />

                <div>
                  <strong>Password Security</strong>

                  <span>
                    Use at least 8 characters with a combination
                    of letters, numbers and special characters.
                  </span>
                </div>
              </div>
            </section>
          )}

          {/* =================================================
              PRIVACY
          ================================================= */}

          {activeSection === "privacy" && (
            <section className={styles.contentCard}>
              <div className={styles.contentHeader}>
                <div className={styles.contentIcon}>
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <span>PRIVACY SETTINGS</span>
                  <h2>Privacy Preferences</h2>
                  <p>
                    Manage how your technical profile information
                    is used.
                  </p>
                </div>
              </div>

              <div className={styles.privacyList}>
                <div className={styles.privacyItem}>
                  <div>
                    <strong>Profile Visibility</strong>

                    <span>
                      Allow authorised WABA administrators to view
                      your technical profile.
                    </span>
                  </div>

                  <span className={styles.enabledBadge}>
                    Enabled
                  </span>
                </div>

                <div className={styles.privacyItem}>
                  <div>
                    <strong>Competition Assignments</strong>

                    <span>
                      Allow your technical assignment information
                      to be visible to competition administrators.
                    </span>
                  </div>

                  <span className={styles.enabledBadge}>
                    Enabled
                  </span>
                </div>

                <div className={styles.privacyItem}>
                  <div>
                    <strong>Certification Information</strong>

                    <span>
                      Allow verified certification information to
                      be displayed to authorised users.
                    </span>
                  </div>

                  <span className={styles.enabledBadge}>
                    Enabled
                  </span>
                </div>
              </div>

              <div className={styles.privacyNotice}>
                <ShieldCheck size={19} />

                <div>
                  <strong>Your information is protected</strong>

                  <span>
                    WABA uses your account information only for
                    administration, competition and technical
                    official activities.
                  </span>
                </div>
              </div>
            </section>
          )}

          {/* =================================================
              SAVE BUTTON
          ================================================= */}

          <div className={styles.saveBar}>
            {saved && (
              <div className={styles.savedMessage}>
                <CheckCircle2 size={16} />
                Settings saved successfully
              </div>
            )}

            <button
              type="button"
              className={styles.saveButton}
              onClick={handleSave}
            >
              <Save size={16} />
              Save Changes
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}