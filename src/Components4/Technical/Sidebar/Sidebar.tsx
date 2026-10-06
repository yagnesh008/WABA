"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  LayoutDashboard,
  User,
  GraduationCap,
  Trophy,
  Swords,
  Scale,
  ClipboardList,
  Tag,
  Award,
  Settings,
  ChevronDown,
} from "lucide-react";

import styles from "./Sidebar.module.css";

type MenuKey =
  | "competitions"
  | "matches"
  | "officiating"
  | "results"
  | "classification"
  | null;

export default function Sidebar() {
  const [openMenu, setOpenMenu] =
    useState<MenuKey>(null);

  const [mounted, setMounted] =
    useState(false);

  /* ==========================================
     RESTORE MENU AFTER CLIENT MOUNTS
  ========================================== */

  useEffect(() => {
    setMounted(true);

    const savedMenu = sessionStorage.getItem(
      "waba-technical-open-menu"
    );

    if (
      savedMenu === "competitions" ||
      savedMenu === "matches" ||
      savedMenu === "officiating" ||
      savedMenu === "results" ||
      savedMenu === "classification"
    ) {
      setOpenMenu(savedMenu);
    }
  }, []);

  /* ==========================================
     TOGGLE SUBMENU
  ========================================== */

  const toggleMenu = (
    menu: Exclude<MenuKey, null>
  ) => {
    setOpenMenu((current) => {
      const newMenu =
        current === menu ? null : menu;

      if (newMenu) {
        sessionStorage.setItem(
          "waba-technical-open-menu",
          newMenu
        );
      } else {
        sessionStorage.removeItem(
          "waba-technical-open-menu"
        );
      }

      return newMenu;
    });
  };

  return (
    <aside className={styles.sidebar}>

      {/* ==========================================
          BRAND
      ========================================== */}

      <div className={styles.brand}>
        <div className={styles.brandTitle}>
          WABA
        </div>

        <div className={styles.brandSubtitle}>
          Technical
        </div>
      </div>

      {/* ==========================================
          NAVIGATION
      ========================================== */}

      <nav className={styles.navigation}>

        {/* ========================================
            DASHBOARD
        ======================================== */}

        <Link
          href="/Technical/dashboardPage"
          className={styles.menuLink}
        >
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </Link>

        {/* ========================================
            MY PROFILE
        ======================================== */}

        <Link
          href="/Technical/profilePage"
          className={styles.menuLink}
        >
          <User size={19} />
          <span>My Profile</span>
        </Link>

        {/* ========================================
            QUALIFICATIONS
        ======================================== */}

        <Link
          href="/Technical/qualificationPage"
          className={styles.menuLink}
        >
          <GraduationCap size={19} />
          <span>Qualifications</span>
        </Link>

        {/* ========================================
            COMPETITIONS
        ======================================== */}

        <div className={styles.navItem}>

          <div className={styles.menuRow}>

            <Link
              href="/Technical/competitionPage"
              className={styles.menuLink}
            >
              <Trophy size={19} />
              <span>Competitions</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("competitions")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "competitions"
                    ? styles.rotate
                    : ""
                }
              />
            </button>

          </div>

          {openMenu === "competitions" && (
            <div className={styles.subMenu}>

              <Link
                href="/Technical/assignedPage"
                className={styles.subItem}
              >
                Assigned
              </Link>

              <Link
                href="/Technical/upcomingPage"
                className={styles.subItem}
              >
                Upcoming
              </Link>

              <Link
                href="/Technical/historyPage"
                className={styles.subItem}
              >
                History
              </Link>

            </div>
          )}

        </div>

        {/* ========================================
            MATCHES
        ======================================== */}

        <div className={styles.navItem}>

          <div className={styles.menuRow}>

            <Link
              href="/Technical/matchPage"
              className={styles.menuLink}
            >
              <Swords size={19} />
              <span>Matches</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("matches")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "matches"
                    ? styles.rotate
                    : ""
                }
              />
            </button>

          </div>

          {openMenu === "matches" && (
            <div className={styles.subMenu}>

              <Link
                href="/Technical/upcomingPage"
                className={styles.subItem}
              >
                Upcoming
              </Link>

              <Link
                href="/Technical/livePage"
                className={styles.subItem}
              >
                Live
              </Link>

              <Link
                href="/Technical/completedPage"
                className={styles.subItem}
              >
                Completed
              </Link>

            </div>
          )}

        </div>

        {/* ========================================
            OFFICIATING
        ======================================== */}

        <div className={styles.navItem}>

          <div className={styles.menuRow}>

            <Link
              href="/Technical/officiatingPage"
              className={styles.menuLink}
            >
              <Scale size={19} />
              <span>Officiating</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("officiating")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "officiating"
                    ? styles.rotate
                    : ""
                }
              />
            </button>

          </div>

          {openMenu === "officiating" && (
            <div className={styles.subMenu}>

              <Link
                href="/Technical/assignmentPage"
                className={styles.subItem}
              >
                Assignments
              </Link>

              <Link
                href="/Technical/refereePage"
                className={styles.subItem}
              >
                Refereeing
              </Link>

              <Link
                href="/Technical/judgePage"
                className={styles.subItem}
              >
                Judging
              </Link>

            </div>
          )}

        </div>

        {/* ========================================
            RESULTS
        ======================================== */}

        <div className={styles.navItem}>

          <div className={styles.menuRow}>

            <Link
              href="/Technical/resultPage"
              className={styles.menuLink}
            >
              <ClipboardList size={19} />
              <span>Results</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("results")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "results"
                    ? styles.rotate
                    : ""
                }
              />
            </button>

          </div>

          {openMenu === "results" && (
            <div className={styles.subMenu}>

              <Link
                href="/Technical/enterResultPage"
                className={styles.subItem}
              >
                Enter Results
              </Link>

              <Link
                href="/Technical/pendingPage"
                className={styles.subItem}
              >
                Pending
              </Link>

              <Link
                href="/Technical/historyPage"
                className={styles.subItem}
              >
                History
              </Link>

            </div>
          )}

        </div>

        {/* ========================================
            CLASSIFICATION
        ======================================== */}

        <div className={styles.navItem}>

          <div className={styles.menuRow}>

            <Link
              href="/Technical/classificationPage"
              className={styles.menuLink}
            >
              <Tag size={19} />
              <span>Classification</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("classification")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "classification"
                    ? styles.rotate
                    : ""
                }
              />
            </button>

          </div>

          {openMenu === "classification" && (
            <div className={styles.subMenu}>

              <Link
                href="/Technical/pendingAthletePage"
                className={styles.subItem}
              >
                Pending Athletes
              </Link>

              <Link
                href="/Technical/sessionPage"
                className={styles.subItem}
              >
                Sessions
              </Link>

              <Link
                href="/Technical/classificationHistoryPage"
                className={styles.subItem}
              >
                History
              </Link>

            </div>
          )}

        </div>

        {/* ========================================
            CERTIFICATES
        ======================================== */}

        <Link
          href="/Technical/certificatesPage"
          className={styles.menuLink}
        >
          <Award size={19} />
          <span>Certificates</span>
        </Link>

        {/* ========================================
            SETTINGS
        ======================================== */}

        <Link
          href="/Technical/settingsPage"
          className={styles.menuLink}
        >
          <Settings size={19} />
          <span>Settings</span>
        </Link>

      </nav>
    </aside>
  );
}