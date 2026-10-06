"use client";

import { useState } from "react";
import {
  Bell,
  User,
  LogOut,
  ChevronDown,
  Search,
} from "lucide-react";

import styles from "./Header.module.css";

export default function Header() {
  const [profileOpen, setProfileOpen] =
    useState(false);

  return (
    <header className={styles.header}>

      {/* =================================================
          SEARCH
      ================================================= */}

      <div className={styles.searchBox}>

        <Search size={18} />

        <input
          type="text"
          placeholder="Search..."
        />

      </div>


      {/* =================================================
          RIGHT SIDE
      ================================================= */}

      <div className={styles.headerRight}>


        {/* =================================================
            NOTIFICATION
        ================================================= */}

        <button
          type="button"
          className={styles.notificationButton}
        >
          <Bell size={20} />

          <span className={styles.notificationBadge}>
            4
          </span>
        </button>


        {/* =================================================
            PROFILE DROPDOWN
        ================================================= */}

        <div className={styles.profileContainer}>

          <button
            type="button"
            className={styles.profileButton}
            onClick={() =>
              setProfileOpen(!profileOpen)
            }
          >

            <div className={styles.profileAvatar}>
              <User size={18} />
            </div>

            <div className={styles.profileInfo}>

              <span className={styles.profileName}>
                Club Admin
              </span>

              <span className={styles.profileRole}>
                Club / Academy
              </span>

            </div>

            <ChevronDown
              size={16}
              className={
                profileOpen
                  ? styles.profileArrowOpen
                  : styles.profileArrow
              }
            />

          </button>


          {/* =================================================
              DROPDOWN
          ================================================= */}

          {profileOpen && (
            <div className={styles.profileDropdown}>

              <a
                href="/Club/profile"
                className={styles.dropdownItem}
              >
                <User size={17} />

                <span>
                  Profile
                </span>
              </a>


              <button
                type="button"
                className={styles.dropdownItem}
              >
                <LogOut size={17} />

                <span>
                  Logout
                </span>
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}