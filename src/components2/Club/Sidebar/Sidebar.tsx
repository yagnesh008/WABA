"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  LayoutDashboard,
  Building2,
  Trophy,
  Medal,
  Dumbbell,
  Swords,
  BarChart3,
  CreditCard,
  FileBadge,
  Settings,
  ChevronDown,
} from "lucide-react";

import styles from "./Sidebar.module.css";

type MenuKey =
  | "organisation"
  | "athletes"
  | "coaching"
  | "competitions"
  | "matches"
  | "performance"
  | null;

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mounted, setMounted] = useState(false);

  /* ==========================================
     RESTORE MENU AFTER CLIENT MOUNTS
  ========================================== */

  useEffect(() => {
    setMounted(true);

    const savedMenu =
      sessionStorage.getItem("waba-club-open-menu");

    if (
      savedMenu === "organisation" ||
      savedMenu === "athletes" ||
      savedMenu === "coaching" ||
      savedMenu === "competitions" ||
      savedMenu === "matches" ||
      savedMenu === "performance"
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
          "waba-club-open-menu",
          newMenu
        );
      } else {
        sessionStorage.removeItem(
          "waba-club-open-menu"
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
          Club / Academy
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
          href="/Club/dashboardPage"
          className={styles.menuLink}
        >
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </Link>


        {/* ========================================
            MY ORGANISATION
        ======================================== */}

        <div className={styles.navItem}>

          <div className={styles.menuRow}>

            <Link
              href="/Club/organisationPage"
              className={styles.menuLink}
            >
              <Building2 size={19} />
              <span>My Organisation</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("organisation")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "organisation"
                    ? styles.rotate
                    : ""
                }
              />
            </button>

          </div>

          {openMenu === "organisation" && (
            <div className={styles.subMenu}>

              <Link
                href="/Club/profilePage"
                className={styles.subItem}
              >
                Profile
              </Link>

              <Link
                href="/Club/staffPage"
                className={styles.subItem}
              >
                Staff
              </Link>

              <Link
                href="/Club/documentsPage"
                className={styles.subItem}
              >
                Documents
              </Link>

            </div>
          )}

        </div>


        {/* ========================================
            ATHLETES
        ======================================== */}

        <div className={styles.navItem}>

          <div className={styles.menuRow}>

            <Link
              href="/Club/athletePage"
              className={styles.menuLink}
            >
              <Medal size={19} />
              <span>Athletes</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("athletes")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "athletes"
                    ? styles.rotate
                    : ""
                }
              />
            </button>

          </div>

          {openMenu === "athletes" && (
            <div className={styles.subMenu}>

              <Link
                href="/Club/allAthletePage"
                className={styles.subItem}
              >
                All Athletes
              </Link>

              <Link
                href="/Club/activeAthletePage"
                className={styles.subItem}
              >
                Active Athletes
              </Link>

              <Link
                href="/Club/membershipPage"
                className={styles.subItem}
              >
                Memberships
              </Link>

              <Link
                href="/Club/classificationPage"
                className={styles.subItem}
              >
                Classification
              </Link>

            </div>
          )}

        </div>


        {/* ========================================
            COACHING
        ======================================== */}

        <div className={styles.navItem}>

          <div className={styles.menuRow}>

            <Link
              href="/Club/coachPage"
              className={styles.menuLink}
            >
              <Dumbbell size={19} />
              <span>Coaching</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("coaching")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "coaching"
                    ? styles.rotate
                    : ""
                }
              />
            </button>

          </div>

          {openMenu === "coaching" && (
            <div className={styles.subMenu}>

              <Link
                href="/Club/myAthletePage"
                className={styles.subItem}
              >
                My Athletes
              </Link>

              <Link
                href="/Club/assistantCoachPage"
                className={styles.subItem}
              >
                Assistant Coaches
              </Link>

              <Link
                href="/Club/trainingPage"
                className={styles.subItem}
              >
                Training
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
              href="/Club/competitionPage"
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
                href="/Club/availablePage"
                className={styles.subItem}
              >
                Available
              </Link>

              <Link
                href="/Club/registrationPage"
                className={styles.subItem}
              >
                Registrations
              </Link>

              <Link
                href="/Club/upcomingPage"
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
              href="/Club/matchPage"
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
                href="/Club/upcoming1Page"
                className={styles.subItem}
              >
                Upcoming
              </Link>

              <Link
                href="/Club/resultPage"
                className={styles.subItem}
              >
                Results
              </Link>

            </div>
          )}

        </div>


        {/* ========================================
            PERFORMANCE
        ======================================== */}

        <div className={styles.navItem}>

          <div className={styles.menuRow}>

            <Link
              href="/Club/performancePage"
              className={styles.menuLink}
            >
              <BarChart3 size={19} />
              <span>Performance</span>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() =>
                toggleMenu("performance")
              }
            >
              <ChevronDown
                size={16}
                className={
                  openMenu === "performance"
                    ? styles.rotate
                    : ""
                }
              />
            </button>

          </div>

          {openMenu === "performance" && (
            <div className={styles.subMenu}>

              <Link
                href="/Club/athletePerformancePage"
                className={styles.subItem}
              >
                Athlete Performance
              </Link>

              <Link
                href="/Club/rankingPage"
                className={styles.subItem}
              >
                Rankings
              </Link>

            </div>
          )}

        </div>


        {/* ========================================
            PAYMENTS
        ======================================== */}

        <Link
          href="/Club/paymentPage"
          className={styles.menuLink}
        >
          <CreditCard size={19} />
          <span>Payments</span>
        </Link>


        {/* ========================================
            CERTIFICATES
        ======================================== */}

        <Link
          href="/Club/certificatePage"
          className={styles.menuLink}
        >
          <FileBadge size={19} />
          <span>Certificates</span>
        </Link>


        {/* ========================================
            SETTINGS
        ======================================== */}

        <Link
          href="/Club/settingPage"
          className={styles.menuLink}
        >
          <Settings size={19} />
          <span>Settings</span>
        </Link>

      </nav>

    </aside>
  );
}