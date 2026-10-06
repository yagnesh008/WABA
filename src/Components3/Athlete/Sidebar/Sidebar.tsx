"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  LayoutDashboard,
  User,
  IdCard,
  Trophy,
  Swords,
  Medal,
  Tag,
  Stethoscope,
  CreditCard,
  Settings,
  ChevronDown,
} from "lucide-react";

import styles from "./Sidebar.module.css";

type MenuKey =
  | "membership"
  | "competitions"
  | "matches"
  | "achievements"
  | null;

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mounted, setMounted] = useState(false);

  /* ==========================================
     RESTORE MENU AFTER CLIENT MOUNTS
  ========================================== */

  useEffect(() => {
    setMounted(true);

    const savedMenu = sessionStorage.getItem(
      "waba-athlete-open-menu"
    );

    if (
      savedMenu === "membership" ||
      savedMenu === "competitions" ||
      savedMenu === "matches" ||
      savedMenu === "achievements"
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
          "waba-athlete-open-menu",
          newMenu
        );
      } else {
        sessionStorage.removeItem(
          "waba-athlete-open-menu"
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
          Athlete
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
          href="/Athlete/dashboardPage"
          className={styles.menuLink}
        >
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </Link>

        {/* ========================================
            MY PROFILE
        ======================================== */}

        <Link
          href="/Athlete/profilePage"
          className={styles.menuLink}
        >
          <User size={19} />
          <span>My Profile</span>
        </Link>

        {/* ========================================
            MEMBERSHIP
        ======================================== */}

        <div className={styles.navItem}>
          <div className={styles.menuRow}>
            <Link
              href="/Athlete/membershipPage"
              className={styles.menuLink}
            >
              <IdCard size={19} />
              <span>Membership</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("membership")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "membership"
                    ? styles.rotate
                    : ""
                }
              />
            </button>
          </div>

          {openMenu === "membership" && (
            <div className={styles.subMenu}>
              <Link
                href="/Athlete/myMembershipPage"
                className={styles.subItem}
              >
                My Membership
              </Link>

              <Link
                href="/Athlete/membershipHistoryPage"
                className={styles.subItem}
              >
                Membership History
              </Link>

              <Link
                href="/Athlete/renewMembershipPage"
                className={styles.subItem}
              >
                Renew Membership
              </Link>
            </div>
          )}
        </div>

        {/* ========================================
            COMPETITIONS
        ======================================== */}

        <div className={styles.navItem}>
          <div className={styles.menuRow}>
            <Link
              href="/Athlete/competitionPage"
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
                href="/Athlete/availablePage"
                className={styles.subItem}
              >
                Available
              </Link>

              <Link
                href="/Athlete/allRegistrationPage"
                className={styles.subItem}
              >
                My Registrations
              </Link>

              <Link
                href="/Athlete/upcomingPage"
                className={styles.subItem}
              >
                Upcoming
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
              href="/Athlete/matchPage"
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
                href="/Athlete/upcoming1Page"
                className={styles.subItem}
              >
                Upcoming
              </Link>

              <Link
                href="/Athlete/resultPage"
                className={styles.subItem}
              >
                Results
              </Link>
            </div>
          )}
        </div>

        {/* ========================================
            ACHIEVEMENTS
        ======================================== */}

        <div className={styles.navItem}>
          <div className={styles.menuRow}>
            <Link
              href="/Athlete/achievementPage"
              className={styles.menuLink}
            >
              <Medal size={19} />
              <span>Achievements</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("achievements")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "achievements"
                    ? styles.rotate
                    : ""
                }
              />
            </button>
          </div>

          {openMenu === "achievements" && (
            <div className={styles.subMenu}>
              <Link
                href="/Athlete/medalPage"
                className={styles.subItem}
              >
                Medals
              </Link>

              <Link
                href="/Athlete/rankingPage"
                className={styles.subItem}
              >
                Rankings
              </Link>

              <Link
                href="/Athlete/certificatePage"
                className={styles.subItem}
              >
                Certificates
              </Link>
            </div>
          )}
        </div>

        {/* ========================================
            CLASSIFICATION
        ======================================== */}

        <Link
          href="/Athlete/classificationPage"
          className={styles.menuLink}
        >
          <Tag size={19} />
          <span>Classification</span>
        </Link>

        {/* ========================================
            MEDICAL
        ======================================== */}

        <Link
          href="/Athlete/medicalPage"
          className={styles.menuLink}
        >
          <Stethoscope size={19} />
          <span>Medical</span>
        </Link>

        {/* ========================================
            PAYMENTS
        ======================================== */}

        <Link
          href="/Athlete/paymentPage"
          className={styles.menuLink}
        >
          <CreditCard size={19} />
          <span>Payments</span>
        </Link>

        {/* ========================================
            SETTINGS
        ======================================== */}

        <Link
          href="/Athlete/settingPage"
          className={styles.menuLink}
        >
          <Settings size={19} />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}