"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Home,
  User,
  Building2,
  FolderOpen,
  Stethoscope,
  Tag,
  Shield,
  Scale,
  Handshake,
  Venus,
  BarChart3,
  ChevronDown,
  Settings,
} from "lucide-react";

import styles from "./Sidebar.module.css";

type MenuKey =
  | "committees"
  | "cases"
  | "medical"
  | "classification";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);

  useEffect(() => {
    const savedMenu = sessionStorage.getItem(
      "waba-committee-open-menu"
    ) as MenuKey | null;

    if (savedMenu) {
      setOpenMenu(savedMenu);
    }
  }, []);

  const toggleMenu = (menu: MenuKey) => {
    const newMenu = openMenu === menu ? null : menu;

    setOpenMenu(newMenu);

    if (newMenu) {
      sessionStorage.setItem(
        "waba-committee-open-menu",
        newMenu
      );
    } else {
      sessionStorage.removeItem(
        "waba-committee-open-menu"
      );
    }
  };

  return (
    <aside className={styles.sidebar}>
      {/* =====================================================
          BRAND
      ===================================================== */}

      <div className={styles.brand}>
        <div className={styles.logo}>W</div>

        <div>
          <h2>WABA</h2>
          <span>Committee</span>
        </div>
      </div>

      <div className={styles.divider} />

      {/* =====================================================
          MENU
      ===================================================== */}

      <nav className={styles.nav}>
        {/* Dashboard */}

        <Link
          href="/Committee/dashboardPage"
          className={styles.menuLink}
        >
          <div className={styles.menuLeft}>
            <Home size={19} />
            <span>Dashboard</span>
          </div>
        </Link>

        {/* My Profile */}

        <Link
          href="/Committee/profilePage"
          className={styles.menuLink}
        >
          <div className={styles.menuLeft}>
            <User size={19} />
            <span>My Profile</span>
          </div>
        </Link>

        {/* =================================================
            MY COMMITTEES
        ================================================= */}

        <div className={styles.menuGroup}>
          <div className={styles.menuRow}>
            <Link
              href="/Committee/committeePage"
              className={styles.menuLink}
            >
              <div className={styles.menuLeft}>
                <Building2 size={19} />
                <span>My Committees</span>
              </div>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => toggleMenu("committees")}
              aria-label="Toggle My Committees"
            >
              <ChevronDown
                size={17}
                className={`${styles.chevron} ${
                  openMenu === "committees"
                    ? styles.rotate
                    : ""
                }`}
              />
            </button>
          </div>

          {openMenu === "committees" && (
            <div className={styles.subMenu}>
              <Link
                href="/Committee/committeePage"
                className={styles.subMenuLink}
              >
                Committees
              </Link>

              <Link
                href="/Committee/memberPage"
                className={styles.subMenuLink}
              >
                Members
              </Link>
            </div>
          )}
        </div>

        {/* =================================================
            CASES
        ================================================= */}

        <div className={styles.menuGroup}>
          <div className={styles.menuRow}>
            <Link
              href="/Committee/casesPage"
              className={styles.menuLink}
            >
              <div className={styles.menuLeft}>
                <FolderOpen size={19} />
                <span>Cases</span>
              </div>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => toggleMenu("cases")}
              aria-label="Toggle Cases"
            >
              <ChevronDown
                size={17}
                className={`${styles.chevron} ${
                  openMenu === "cases"
                    ? styles.rotate
                    : ""
                }`}
              />
            </button>
          </div>

          {openMenu === "cases" && (
            <div className={styles.subMenu}>
              <Link
                href="/Committee/allCasesPage"
                className={styles.subMenuLink}
              >
                All Cases
              </Link>

              <Link
                href="/Committee/newCasePage"
                className={styles.subMenuLink}
              >
                New
              </Link>

              <Link
                href="/Committee/underReviewPage"
                className={styles.subMenuLink}
              >
                Under Review
              </Link>

              <Link
                href="/Committee/resolvedPage"
                className={styles.subMenuLink}
              >
                Resolved
              </Link>

              <Link
                href="/Committee/closedPage"
                className={styles.subMenuLink}
              >
                Closed
              </Link>
            </div>
          )}
        </div>

        {/* =================================================
            MEDICAL
        ================================================= */}

        <div className={styles.menuGroup}>
          <div className={styles.menuRow}>
            <Link
              href="/Committee/medicalPage"
              className={styles.menuLink}
            >
              <div className={styles.menuLeft}>
                <Stethoscope size={19} />
                <span>Medical</span>
              </div>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => toggleMenu("medical")}
              aria-label="Toggle Medical"
            >
              <ChevronDown
                size={17}
                className={`${styles.chevron} ${
                  openMenu === "medical"
                    ? styles.rotate
                    : ""
                }`}
              />
            </button>
          </div>

          {openMenu === "medical" && (
            <div className={styles.subMenu}>
              <Link
                href="/Committee/athleteMedicalPage"
                className={styles.subMenuLink}
              >
                Athlete Medical
              </Link>

              <Link
                href="/Committee/medicalRecordsPage"
                className={styles.subMenuLink}
              >
                Medical Records
              </Link>
            </div>
          )}
        </div>

        {/* =================================================
            CLASSIFICATION
        ================================================= */}

        <div className={styles.menuGroup}>
          <div className={styles.menuRow}>
            <Link
              href="/Committee/classificationPage"
              className={styles.menuLink}
            >
              <div className={styles.menuLeft}>
                <Tag size={19} />
                <span>Classification</span>
              </div>
            </Link>

            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => toggleMenu("classification")}
              aria-label="Toggle Classification"
            >
              <ChevronDown
                size={17}
                className={`${styles.chevron} ${
                  openMenu === "classification"
                    ? styles.rotate
                    : ""
                }`}
              />
            </button>
          </div>

          {openMenu === "classification" && (
            <div className={styles.subMenu}>
              <Link
                href="/Committee/pendingPage"
                className={styles.subMenuLink}
              >
                Pending
              </Link>

              <Link
                href="/Committee/sessionPage"
                className={styles.subMenuLink}
              >
                Sessions
              </Link>

              <Link
                href="/Committee/historyPage"
                className={styles.subMenuLink}
              >
                History
              </Link>
            </div>
          )}
        </div>

        {/* Safeguarding */}

        <Link
          href="/Committee/safeguardingPage"
          className={styles.menuLink}
        >
          <div className={styles.menuLeft}>
            <Shield size={19} />
            <span>Safeguarding</span>
          </div>
        </Link>

        {/* Disciplinary */}

        <Link
          href="/Committee/disciplinaryPage"
          className={styles.menuLink}
        >
          <div className={styles.menuLeft}>
            <Scale size={19} />
            <span>Disciplinary</span>
          </div>
        </Link>

        {/* Welfare */}

        <Link
          href="/Committee/welfarePage"
          className={styles.menuLink}
        >
          <div className={styles.menuLeft}>
            <Handshake size={19} />
            <span>Welfare</span>
          </div>
        </Link>

        {/* Women's Committee */}

        <Link
          href="/Committee/womensCommitteePage"
          className={styles.menuLink}
        >
          <div className={styles.menuLeft}>
            <Venus size={19} />
            <span>Women's Committee</span>
          </div>
        </Link>

        {/* Reports */}

        <Link
          href="/Committee/reportsPage"
          className={styles.menuLink}
        >
          <div className={styles.menuLeft}>
            <BarChart3 size={19} />
            <span>Reports</span>
          </div>
        </Link>

        {/* Settings */}

        <Link
          href="/Committee/settingPage"
          className={styles.menuLink}
        >
          <div className={styles.menuLeft}>
            <Settings size={19} />
            <span>Settings</span>
          </div>
        </Link>
      </nav>
    </aside>
  );
}