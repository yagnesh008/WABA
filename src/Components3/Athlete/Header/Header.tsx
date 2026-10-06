"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [showProfileMenu, setShowProfileMenu] =
    useState(false);

  const handleLogout = () => {
    console.log("Logout clicked");

    // Later you can clear authentication here
    // localStorage.removeItem("token");
    // window.location.href = "/login";
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div>
          <h1>Athlete Dashboard</h1>
          <p>
            Manage your membership, competitions and
            achievements
          </p>
        </div>
      </div>

      <div className={styles.rightSection}>
        {/* =========================
            NOTIFICATION
        ========================= */}
        <button
          type="button"
          className={styles.notificationButton}
          title="Notifications"
          onClick={() => {
            console.log("Notifications clicked");
          }}
        >
          <span className={styles.bell}>🔔</span>

          <span className={styles.badge}>3</span>
        </button>

        {/* =========================
            PROFILE
        ========================= */}
        <div className={styles.profileWrapper}>
          <button
            type="button"
            className={styles.profileButton}
            onClick={() =>
              setShowProfileMenu(
                !showProfileMenu
              )
            }
          >
            <div className={styles.avatar}>
              A
            </div>

            <div className={styles.profileInfo}>
              <strong>Athlete</strong>
              <span>ATH001</span>
            </div>

            <span
              className={`${styles.profileArrow} ${
                showProfileMenu
                  ? styles.profileArrowOpen
                  : ""
              }`}
            >
              ›
            </span>
          </button>

          {/* =========================
              PROFILE DROPDOWN
          ========================= */}
          {showProfileMenu && (
            <div className={styles.dropdown}>
              <div className={styles.dropdownHeader}>
                <div className={styles.dropdownAvatar}>
                  A
                </div>

                <div>
                  <strong>Arjun Kumar</strong>
                  <span>ATH001</span>
                </div>
              </div>

              <div className={styles.dropdownDivider} />

              <button
                type="button"
                className={styles.dropdownItem}
              >
                👤 My Profile
              </button>

              <button
                type="button"
                className={styles.dropdownItem}
              >
                ⚙ Settings
              </button>

              <div className={styles.dropdownDivider} />

              <button
                type="button"
                className={`${styles.dropdownItem} ${styles.logout}`}
                onClick={handleLogout}
              >
                ↪ Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}