"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";

import styles from "./Header.module.css";

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className={styles.header}>

      {/* Search */}
      <div className={styles.searchBox}>
        <Search size={19} />
        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      {/* Right Side */}
      <div className={styles.headerRight}>

        {/* Notification */}
        <button className={styles.notification}>
          <Bell size={21} />
          <span className={styles.notificationBadge}>3</span>
        </button>

        {/* Profile */}
        <div className={styles.profileContainer}>

          <button
            className={styles.profileButton}
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <div className={styles.profileIcon}>
              <User size={19} />
            </div>

            <div className={styles.profileInfo}>
              <span className={styles.profileName}>
                National Admin
              </span>

              <span className={styles.profileRole}>
                Super Admin
              </span>
            </div>

            <ChevronDown
              size={17}
              className={`${styles.profileArrow} ${
                profileOpen ? styles.arrowOpen : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {profileOpen && (
            <div className={styles.dropdown}>

              <div className={styles.dropdownProfile}>
                <div className={styles.dropdownIcon}>
                  <User size={20} />
                </div>

                <div>
                  <strong>National Admin</strong>
                  <span>Super Admin</span>
                </div>
              </div>

              <div className={styles.dropdownDivider}></div>

              <button className={styles.logoutButton}>
                <LogOut size={18} />
                <span>Logout</span>
              </button>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}