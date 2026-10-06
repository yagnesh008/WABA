"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();

  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerRight}>

        {/* =========================
            NOTIFICATION
        ========================= */}

        <div className={styles.notificationWrapper}>
          <button
            className={styles.notificationButton}
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
          >
            🔔
            <span className={styles.notificationBadge}>4</span>
          </button>

          {showNotifications && (
            <div className={styles.notificationDropdown}>
              <div className={styles.notificationHeader}>
                <h3>Notifications</h3>
                <span>4 New</span>
              </div>

              <div className={styles.notificationItem}>
                <div className={styles.notificationIcon}>
                  🏆
                </div>

                <div>
                  <strong>New Competition Assignment</strong>
                  <p>You have been assigned to a competition.</p>
                  <small>10 minutes ago</small>
                </div>
              </div>

              <div className={styles.notificationItem}>
                <div className={styles.notificationIcon}>
                  🥊
                </div>

                <div>
                  <strong>Match Assignment</strong>
                  <p>A new match has been assigned to you.</p>
                  <small>1 hour ago</small>
                </div>
              </div>

              <div className={styles.notificationItem}>
                <div className={styles.notificationIcon}>
                  📋
                </div>

                <div>
                  <strong>Result Pending</strong>
                  <p>A match result requires your attention.</p>
                  <small>2 hours ago</small>
                </div>
              </div>

              <div className={styles.notificationItem}>
                <div className={styles.notificationIcon}>
                  🏷️
                </div>

                <div>
                  <strong>Classification Session</strong>
                  <p>New classification session scheduled.</p>
                  <small>Today</small>
                </div>
              </div>

              <button
                className={styles.viewAll}
                onClick={() => {
                  setShowNotifications(false);
                  router.push("/Technical/notificationPage");
                }}
              >
                View All Notifications
              </button>
            </div>
          )}
        </div>

        {/* =========================
            PROFILE
        ========================= */}

        <div className={styles.profileWrapper}>
          <button
            className={styles.profileButton}
            onClick={() => setShowProfile(!showProfile)}
          >
            <div className={styles.avatar}>
              T
            </div>

            <div className={styles.profileInfo}>
              <strong>Technical Official</strong>
              <span>WABA Technical</span>
            </div>

            <span className={styles.arrow}>
              {showProfile ? "▲" : "▼"}
            </span>
          </button>

          {showProfile && (
            <div className={styles.profileDropdown}>

              <div className={styles.dropdownProfile}>
                <div className={styles.dropdownAvatar}>
                  T
                </div>

                <div>
                  <strong>Technical Official</strong>
                  <span>WABA Technical</span>
                </div>
              </div>

              <div className={styles.dropdownDivider}></div>

              <button
                onClick={() => {
                  setShowProfile(false);
                  router.push("/Technical/profilePage");
                }}
              >
                👤
                <span>My Profile</span>
              </button>

              <button
                onClick={() => {
                  setShowProfile(false);
                  router.push("/Technical/settingPage");
                }}
              >
                ⚙️
                <span>Settings</span>
              </button>

              <div className={styles.dropdownDivider}></div>

              <button
                className={styles.logoutButton}
                onClick={handleLogout}
              >
                🚪
                <span>Logout</span>
              </button>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}