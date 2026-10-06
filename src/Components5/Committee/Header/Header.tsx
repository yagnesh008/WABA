"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
  CheckCircle2,
} from "lucide-react";

import styles from "./Header.module.css";

export default function Header() {
  const [notificationOpen, setNotificationOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* =====================================================
          HEADER TITLE
      ===================================================== */}

      <div className={styles.headerTitle}>
        <span>WABA</span>
        <strong>Committee Administration</strong>
      </div>

      {/* =====================================================
          HEADER RIGHT
      ===================================================== */}

      <div className={styles.headerRight}>
        {/* ===================================================
            NOTIFICATIONS
        =================================================== */}

        <div className={styles.notificationWrapper}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={() =>
              setNotificationOpen(!notificationOpen)
            }
            aria-label="Notifications"
          >
            <Bell size={19} />

            <span className={styles.notificationBadge}>
              4
            </span>
          </button>

          {notificationOpen && (
            <div className={styles.notificationDropdown}>
              <div className={styles.dropdownHeader}>
                <div>
                  <strong>Notifications</strong>
                  <span>Recent updates</span>
                </div>

                <span className={styles.countBadge}>4</span>
              </div>

              <div className={styles.notificationItem}>
                <div className={styles.notificationIcon}>
                  <CheckCircle2 size={16} />
                </div>

                <div>
                  <strong>New case assigned</strong>
                  <p>
                    Case WABA-C-102 has been assigned to your
                    committee.
                  </p>
                  <span>10 minutes ago</span>
                </div>
              </div>

              <div className={styles.notificationItem}>
                <div className={styles.notificationIcon}>
                  <Bell size={16} />
                </div>

                <div>
                  <strong>Committee meeting</strong>
                  <p>
                    Committee meeting scheduled for tomorrow.
                  </p>
                  <span>1 hour ago</span>
                </div>
              </div>

              <div className={styles.notificationItem}>
                <div className={styles.notificationIcon}>
                  <User size={16} />
                </div>

                <div>
                  <strong>Medical record updated</strong>
                  <p>
                    Athlete medical information requires review.
                  </p>
                  <span>3 hours ago</span>
                </div>
              </div>

              <Link
                href="/Committee/notificationsPage"
                className={styles.viewAll}
              >
                View all notifications
              </Link>
            </div>
          )}
        </div>

        {/* ===================================================
            PROFILE
        =================================================== */}

        <div className={styles.profileWrapper}>
          <button
            type="button"
            className={styles.profileButton}
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <div className={styles.avatar}>C</div>

            <div className={styles.profileInfo}>
              <strong>Committee Member</strong>
              <span>Committee</span>
            </div>

            <ChevronDown
              size={16}
              className={`${styles.profileChevron} ${
                profileOpen ? styles.profileRotate : ""
              }`}
            />
          </button>

          {profileOpen && (
            <div className={styles.profileDropdown}>
              <div className={styles.profileDropdownTop}>
                <div className={styles.largeAvatar}>C</div>

                <div>
                  <strong>Committee Member</strong>
                  <span>COM001</span>
                </div>
              </div>

              <div className={styles.dropdownDivider} />

              <Link
                href="/Committee/profilePage"
                className={styles.dropdownLink}
              >
                <User size={16} />
                My Profile
              </Link>

              <Link
                href="/Committee/settingPage"
                className={styles.dropdownLink}
              >
                <Settings size={16} />
                Settings
              </Link>

              <div className={styles.dropdownDivider} />

              <button
                type="button"
                className={`${styles.dropdownLink} ${styles.logout}`}
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}