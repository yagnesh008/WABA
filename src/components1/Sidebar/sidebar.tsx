"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Building2,
  Building,
  Trophy,
  UserCheck,
  Medal,
  UsersRound,
  Wallet,
  ShieldCheck,
  Gavel,
  FileText,
  ClipboardList,
  Settings,
  ChevronDown,
  User,
  LogOut,
  FolderOpen,
  Stethoscope,
  Tag,
  HeartHandshake,
  PersonStanding,
  GraduationCap,
  Scroll,
  Award,
  IdCard,
  FileCheck,
  Bell,
  Scale,
} from "lucide-react";

import styles from "./sidebar.module.css";

export type WabaRole =
  | "national"
  | "state"
  | "district"
  | "club"
  | "athlete"
  | "technical"
  | "committee";

interface SidebarProps {
  role?: WabaRole;
}

export default function Sidebar({ role }: SidebarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState<WabaRole>(role || "national");
  const pathname = usePathname();
  const router = useRouter();

  // Detect role from prop, pathname, or sessionStorage
  useEffect(() => {
    if (role) {
      setActiveRole(role);
      sessionStorage.setItem("waba-current-role", role);
      return;
    }

    if (pathname.includes("committee")) setActiveRole("committee");
    else if (pathname.includes("athlete")) setActiveRole("athlete");
    else if (pathname.includes("technical")) setActiveRole("technical");
    else if (pathname.includes("club")) setActiveRole("club");
    else if (pathname.includes("district")) setActiveRole("district");
    else if (pathname.includes("state")) setActiveRole("state");
    else {
      const saved = sessionStorage.getItem("waba-current-role") as WabaRole;
      if (saved) setActiveRole(saved);
    }
  }, [role, pathname]);

  // Restore open submenu
  useEffect(() => {
    const savedMenu = sessionStorage.getItem("waba-open-menu");
    if (savedMenu) {
      setOpenMenu(savedMenu);
    }
  }, []);

  const toggleMenu = (menu: string) => {
    const newMenu = openMenu === menu ? null : menu;
    setOpenMenu(newMenu);
    if (newMenu) {
      sessionStorage.setItem("waba-open-menu", newMenu);
    } else {
      sessionStorage.removeItem("waba-open-menu");
    }
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = e.target.value as WabaRole;
    setActiveRole(newRole);
    sessionStorage.setItem("waba-current-role", newRole);

    const routes: Record<WabaRole, string> = {
      national: "/National",
      state: "/stateDashboard",
      district: "/districtDashboard",
      club: "/clubDashboard",
      athlete: "/athleteDashboard",
      technical: "/technicalDashboard",
      committee: "/committeeDashboard",
    };
    router.push(routes[newRole]);
  };

  // Role details mapping
  const roleTitles: Record<WabaRole, { name: string; sub: string; dashboardUrl: string }> = {
    national: { name: "WABA", sub: "National Admin", dashboardUrl: "/National" },
    state: { name: "WABA", sub: "State Admin", dashboardUrl: "/stateDashboard" },
    district: { name: "WABA", sub: "District Admin", dashboardUrl: "/districtDashboard" },
    club: { name: "WABA", sub: "Club / Academy", dashboardUrl: "/clubDashboard" },
    athlete: { name: "WABA", sub: "Athlete Portal", dashboardUrl: "/athleteDashboard" },
    technical: { name: "WABA", sub: "Technical Official", dashboardUrl: "/technicalDashboard" },
    committee: { name: "WABA", sub: "Committee Portal", dashboardUrl: "/committeeDashboard" },
  };

  const currentConfig = roleTitles[activeRole];

  return (
    <aside className={styles.sidebar}>
      {/* ================= LOGO & ROLE SWITCHER ================= */}
      <div className={styles.logoSection}>
        <div className={styles.logo}>W</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{ fontSize: "16px", fontWeight: 800 }}>{currentConfig.name}</h2>
          <span style={{ fontSize: "11px", color: "#fe7a03", display: "block" }}>{currentConfig.sub}</span>
        </div>
      </div>

      {/* Quick Role Switcher Selector */}
      <div style={{ padding: "8px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
        <select
          value={activeRole}
          onChange={handleRoleChange}
          style={{
            width: "100%",
            padding: "5px 8px",
            background: "#081b30",
            border: "1px solid rgba(254,122,3,0.4)",
            borderRadius: "6px",
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: 600,
            outline: "none",
            cursor: "pointer",
          }}
        >
          <option value="national">1. National Administration</option>
          <option value="state">2. State Administration</option>
          <option value="district">3. District Administration</option>
          <option value="club">4. Club / Academy</option>
          <option value="athlete">5. Athlete</option>
          <option value="technical">6. Technical</option>
          <option value="committee">7. Committee</option>
        </select>
      </div>

      {/* ================= NAVIGATION ================= */}
      <nav className={styles.nav}>
        {/* ================= 1. NATIONAL ADMINISTRATION ================= */}
        {activeRole === "national" && (
          <>
            <Link href="/National" className={styles.navItem}>
              <LayoutDashboard size={19} />
              <span>Dashboard</span>
            </Link>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <Link href="/UserPage" className={styles.menuLink}>
                  <Users size={19} />
                  <span>Users</span>
                </Link>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("users")}>
                  <ChevronDown size={17} className={openMenu === "users" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "users" && (
                <div className={styles.subMenu}>
                  <Link href="/UserPage" className={styles.subItem}>All Users</Link>
                  <Link href="/Athletes" className={styles.subItem}>Athletes</Link>
                  <Link href="/CoachPage" className={styles.subItem}>Coaches</Link>
                  <Link href="/OfficialPage" className={styles.subItem}>Officials</Link>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <Link href="/OrganisationPage" className={styles.menuLink}>
                  <Building2 size={19} />
                  <span>Organisations</span>
                </Link>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("organisations")}>
                  <ChevronDown size={17} className={openMenu === "organisations" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "organisations" && (
                <div className={styles.subMenu}>
                  <Link href="/StatePage" className={styles.subItem}>States</Link>
                  <Link href="/DistrictPage" className={styles.subItem}>Districts</Link>
                  <Link href="/mandalPage" className={styles.subItem}>Mandals</Link>
                  <Link href="/clubPage" className={styles.subItem}>Clubs</Link>
                  <Link href="/academiesPage" className={styles.subItem}>Academies</Link>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <Link href="/competitionPage" className={styles.menuLink}>
                  <Trophy size={19} />
                  <span>Competitions</span>
                </Link>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("competitions")}>
                  <ChevronDown size={17} className={openMenu === "competitions" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "competitions" && (
                <div className={styles.subMenu}>
                  <Link href="/allcompetitionPage" className={styles.subItem}>All Competitions</Link>
                  <Link href="/createPage" className={styles.subItem}>Create Competition</Link>
                  <Link href="/approvalPage" className={styles.subItem}>Approvals</Link>
                  <Link href="/registrationPage" className={styles.subItem}>Registrations</Link>
                  <Link href="/matchPage" className={styles.subItem}>Matches</Link>
                  <Link href="/resultPage" className={styles.subItem}>Results</Link>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <Link href="/official1Page" className={styles.menuLink}>
                  <UserCheck size={19} />
                  <span>Officials</span>
                </Link>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("officials")}>
                  <ChevronDown size={17} className={openMenu === "officials" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "officials" && (
                <div className={styles.subMenu}>
                  <Link href="/official2Page" className={styles.subItem}>Officials</Link>
                  <Link href="/verificationPage" className={styles.subItem}>Verification</Link>
                  <Link href="/assignmentPage" className={styles.subItem}>Assignments</Link>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <Link href="/athletesPage" className={styles.menuLink}>
                  <Medal size={19} />
                  <span>Athletes</span>
                </Link>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("athletes")}>
                  <ChevronDown size={17} className={openMenu === "athletes" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "athletes" && (
                <div className={styles.subMenu}>
                  <Link href="/athlete1Page" className={styles.subItem}>Athletes</Link>
                  <Link href="/membershipPage" className={styles.subItem}>Memberships</Link>
                  <Link href="/classificationPage" className={styles.subItem}>Classification</Link>
                  <Link href="/medicalPage" className={styles.subItem}>Medical</Link>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <Link href="/committiesPage" className={styles.menuLink}>
                  <UsersRound size={19} />
                  <span>Committees</span>
                </Link>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("committees")}>
                  <ChevronDown size={17} className={openMenu === "committees" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "committees" && (
                <div className={styles.subMenu}>
                  <Link href="/committieePage" className={styles.subItem}>Committees</Link>
                  <Link href="/memberPage" className={styles.subItem}>Members</Link>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <Link href="/financePage" className={styles.menuLink}>
                  <Wallet size={19} />
                  <span>Finance</span>
                </Link>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("finance")}>
                  <ChevronDown size={17} className={openMenu === "finance" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "finance" && (
                <div className={styles.subMenu}>
                  <Link href="/paymentPage" className={styles.subItem}>Payments</Link>
                  <Link href="/invoicesPage" className={styles.subItem}>Invoices</Link>
                  <Link href="/revenuePage" className={styles.subItem}>Revenue</Link>
                </div>
              )}
            </div>

            <Link href="/safeguardingPage" className={styles.navItem}>
              <ShieldCheck size={19} />
              <span>Safeguarding</span>
            </Link>
            <Link href="/disciplinaryPage" className={styles.navItem}>
              <Gavel size={19} />
              <span>Disciplinary</span>
            </Link>
            <Link href="/reportPage" className={styles.navItem}>
              <FileText size={19} />
              <span>Reports</span>
            </Link>
            <Link href="/auditlogPage" className={styles.navItem}>
              <ClipboardList size={19} />
              <span>Audit Logs</span>
            </Link>
          </>
        )}

        {/* ================= 2. STATE ADMINISTRATION ================= */}
        {activeRole === "state" && (
          <>
            <Link href="/stateDashboard" className={styles.navItem}>
              <LayoutDashboard size={19} />
              <span>Dashboard</span>
            </Link>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Users size={19} /><span>Users</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("state-users")}>
                  <ChevronDown size={17} className={openMenu === "state-users" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "state-users" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Users</span>
                  <span className={styles.subItem}>Athletes</span>
                  <span className={styles.subItem}>Coaches</span>
                  <span className={styles.subItem}>Officials</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Building2 size={19} /><span>Organisations</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("state-org")}>
                  <ChevronDown size={17} className={openMenu === "state-org" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "state-org" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Districts</span>
                  <span className={styles.subItem}>Mandals</span>
                  <span className={styles.subItem}>Clubs</span>
                  <span className={styles.subItem}>Academies</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Trophy size={19} /><span>Competitions</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("state-comp")}>
                  <ChevronDown size={17} className={openMenu === "state-comp" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "state-comp" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Competitions</span>
                  <span className={styles.subItem}>Create Competition</span>
                  <span className={styles.subItem}>Approvals</span>
                  <span className={styles.subItem}>Registrations</span>
                  <span className={styles.subItem}>Matches</span>
                  <span className={styles.subItem}>Results</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><UserCheck size={19} /><span>Officials</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("state-off")}>
                  <ChevronDown size={17} className={openMenu === "state-off" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "state-off" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Officials</span>
                  <span className={styles.subItem}>Verification</span>
                  <span className={styles.subItem}>Assignments</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Medal size={19} /><span>Athletes</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("state-ath")}>
                  <ChevronDown size={17} className={openMenu === "state-ath" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "state-ath" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Athletes</span>
                  <span className={styles.subItem}>Memberships</span>
                  <span className={styles.subItem}>Classification</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><UsersRound size={19} /><span>Committees</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("state-com")}>
                  <ChevronDown size={17} className={openMenu === "state-com" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "state-com" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Members</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Wallet size={19} /><span>Finance</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("state-fin")}>
                  <ChevronDown size={17} className={openMenu === "state-fin" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "state-fin" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Payments</span>
                  <span className={styles.subItem}>Revenue</span>
                </div>
              )}
            </div>

            <Link href="/reportPage" className={styles.navItem}><FileText size={19} /><span>Reports</span></Link>
          </>
        )}

        {/* ================= 3. DISTRICT ADMINISTRATION ================= */}
        {activeRole === "district" && (
          <>
            <Link href="/districtDashboard" className={styles.navItem}>
              <LayoutDashboard size={19} />
              <span>Dashboard</span>
            </Link>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Users size={19} /><span>Users</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("dist-users")}>
                  <ChevronDown size={17} className={openMenu === "dist-users" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "dist-users" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Users</span>
                  <span className={styles.subItem}>Athletes</span>
                  <span className={styles.subItem}>Coaches</span>
                  <span className={styles.subItem}>Officials</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Building size={19} /><span>Organisations</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("dist-org")}>
                  <ChevronDown size={17} className={openMenu === "dist-org" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "dist-org" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Mandals</span>
                  <span className={styles.subItem}>Villages</span>
                  <span className={styles.subItem}>Clubs</span>
                  <span className={styles.subItem}>Academies</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Trophy size={19} /><span>Competitions</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("dist-comp")}>
                  <ChevronDown size={17} className={openMenu === "dist-comp" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "dist-comp" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Competitions</span>
                  <span className={styles.subItem}>Create Competition</span>
                  <span className={styles.subItem}>Approvals</span>
                  <span className={styles.subItem}>Registrations</span>
                  <span className={styles.subItem}>Matches</span>
                  <span className={styles.subItem}>Results</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><UserCheck size={19} /><span>Officials</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("dist-off")}>
                  <ChevronDown size={17} className={openMenu === "dist-off" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "dist-off" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Officials</span>
                  <span className={styles.subItem}>Assignments</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Medal size={19} /><span>Athletes</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("dist-ath")}>
                  <ChevronDown size={17} className={openMenu === "dist-ath" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "dist-ath" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Athletes</span>
                  <span className={styles.subItem}>Memberships</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><UsersRound size={19} /><span>Committees</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("dist-com")}>
                  <ChevronDown size={17} className={openMenu === "dist-com" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "dist-com" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Members</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Wallet size={19} /><span>Finance</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("dist-fin")}>
                  <ChevronDown size={17} className={openMenu === "dist-fin" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "dist-fin" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Payments</span>
                  <span className={styles.subItem}>Revenue</span>
                </div>
              )}
            </div>

            <Link href="/reportPage" className={styles.navItem}><FileText size={19} /><span>Reports</span></Link>
          </>
        )}

        {/* ================= 4. CLUB / ACADEMY ================= */}
        {activeRole === "club" && (
          <>
            <Link href="/clubDashboard" className={styles.navItem}>
              <LayoutDashboard size={19} />
              <span>Dashboard</span>
            </Link>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Building2 size={19} /><span>My Organisation</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("club-org")}>
                  <ChevronDown size={17} className={openMenu === "club-org" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "club-org" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Profile</span>
                  <span className={styles.subItem}>Staff</span>
                  <span className={styles.subItem}>Documents</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Medal size={19} /><span>Athletes</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("club-ath")}>
                  <ChevronDown size={17} className={openMenu === "club-ath" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "club-ath" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>All Athletes</span>
                  <span className={styles.subItem}>Active Athletes</span>
                  <span className={styles.subItem}>Memberships</span>
                  <span className={styles.subItem}>Classification</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><GraduationCap size={19} /><span>Coaching</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("club-coach")}>
                  <ChevronDown size={17} className={openMenu === "club-coach" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "club-coach" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>My Athletes</span>
                  <span className={styles.subItem}>Assistant Coaches</span>
                  <span className={styles.subItem}>Training</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Trophy size={19} /><span>Competitions</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("club-comp")}>
                  <ChevronDown size={17} className={openMenu === "club-comp" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "club-comp" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Available</span>
                  <span className={styles.subItem}>Registrations</span>
                  <span className={styles.subItem}>Upcoming</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Gavel size={19} /><span>Matches</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("club-match")}>
                  <ChevronDown size={17} className={openMenu === "club-match" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "club-match" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Upcoming</span>
                  <span className={styles.subItem}>Results</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Award size={19} /><span>Performance</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("club-perf")}>
                  <ChevronDown size={17} className={openMenu === "club-perf" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "club-perf" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Athlete Performance</span>
                  <span className={styles.subItem}>Rankings</span>
                </div>
              )}
            </div>

            <span className={styles.navItem}><Wallet size={19} /><span>Payments</span></span>
            <span className={styles.navItem}><Scroll size={19} /><span>Certificates</span></span>
          </>
        )}

        {/* ================= 5. ATHLETE ================= */}
        {activeRole === "athlete" && (
          <>
            <Link href="/athleteDashboard" className={styles.navItem}>
              <LayoutDashboard size={19} />
              <span>Dashboard</span>
            </Link>

            <span className={styles.navItem}><User size={19} /><span>My Profile</span></span>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><IdCard size={19} /><span>Membership</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("ath-mem")}>
                  <ChevronDown size={17} className={openMenu === "ath-mem" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "ath-mem" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>My Membership</span>
                  <span className={styles.subItem}>Membership History</span>
                  <span className={styles.subItem}>Renew Membership</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Trophy size={19} /><span>Competitions</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("ath-comp")}>
                  <ChevronDown size={17} className={openMenu === "ath-comp" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "ath-comp" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Available</span>
                  <span className={styles.subItem}>My Registrations</span>
                  <span className={styles.subItem}>Upcoming</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Gavel size={19} /><span>Matches</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("ath-match")}>
                  <ChevronDown size={17} className={openMenu === "ath-match" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "ath-match" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Upcoming</span>
                  <span className={styles.subItem}>Results</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Medal size={19} /><span>Achievements</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("ath-ach")}>
                  <ChevronDown size={17} className={openMenu === "ath-ach" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "ath-ach" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Medals</span>
                  <span className={styles.subItem}>Rankings</span>
                  <span className={styles.subItem}>Certificates</span>
                </div>
              )}
            </div>

            <span className={styles.navItem}><Tag size={19} /><span>Classification</span></span>
            <span className={styles.navItem}><Stethoscope size={19} /><span>Medical</span></span>
            <span className={styles.navItem}><Wallet size={19} /><span>Payments</span></span>
          </>
        )}

        {/* ================= 6. TECHNICAL ================= */}
        {activeRole === "technical" && (
          <>
            <Link href="/technicalDashboard" className={styles.navItem}>
              <LayoutDashboard size={19} />
              <span>Dashboard</span>
            </Link>

            <span className={styles.navItem}><User size={19} /><span>My Profile</span></span>
            <span className={styles.navItem}><Scroll size={19} /><span>Qualifications</span></span>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Trophy size={19} /><span>Competitions</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("tech-comp")}>
                  <ChevronDown size={17} className={openMenu === "tech-comp" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "tech-comp" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Assigned</span>
                  <span className={styles.subItem}>Upcoming</span>
                  <span className={styles.subItem}>History</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Gavel size={19} /><span>Matches</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("tech-match")}>
                  <ChevronDown size={17} className={openMenu === "tech-match" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "tech-match" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Upcoming</span>
                  <span className={styles.subItem}>Live</span>
                  <span className={styles.subItem}>Completed</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Scale size={19} /><span>Officiating</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("tech-off")}>
                  <ChevronDown size={17} className={openMenu === "tech-off" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "tech-off" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Assignments</span>
                  <span className={styles.subItem}>Refereeing</span>
                  <span className={styles.subItem}>Judging</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><FileText size={19} /><span>Results</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("tech-res")}>
                  <ChevronDown size={17} className={openMenu === "tech-res" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "tech-res" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Enter Results</span>
                  <span className={styles.subItem}>Pending</span>
                  <span className={styles.subItem}>History</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Tag size={19} /><span>Classification</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("tech-cls")}>
                  <ChevronDown size={17} className={openMenu === "tech-cls" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "tech-cls" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Pending Athletes</span>
                  <span className={styles.subItem}>Sessions</span>
                  <span className={styles.subItem}>History</span>
                </div>
              )}
            </div>

            <span className={styles.navItem}><Award size={19} /><span>Certificates</span></span>
          </>
        )}

        {/* ================= 7. COMMITTEE ================= */}
        {activeRole === "committee" && (
          <>
            <Link href="/committeeDashboard" className={styles.navItem}>
              <LayoutDashboard size={19} />
              <span>Dashboard</span>
            </Link>

            <span className={styles.navItem}><User size={19} /><span>My Profile</span></span>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Building2 size={19} /><span>My Committees</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("com-my")}>
                  <ChevronDown size={17} className={openMenu === "com-my" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "com-my" && (
                <div className={styles.subMenu}>
                  <Link href="/committieePage" className={styles.subItem}>Committees</Link>
                  <Link href="/memberPage" className={styles.subItem}>Members</Link>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><FolderOpen size={19} /><span>Cases</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("com-cases")}>
                  <ChevronDown size={17} className={openMenu === "com-cases" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "com-cases" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>All Cases</span>
                  <span className={styles.subItem}>New</span>
                  <span className={styles.subItem}>Under Review</span>
                  <span className={styles.subItem}>Resolved</span>
                  <span className={styles.subItem}>Closed</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Stethoscope size={19} /><span>Medical</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("com-med")}>
                  <ChevronDown size={17} className={openMenu === "com-med" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "com-med" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Athlete Medical</span>
                  <span className={styles.subItem}>Medical Records</span>
                </div>
              )}
            </div>

            <div className={styles.menuGroup}>
              <div className={styles.menuRow}>
                <span className={styles.menuLink}><Tag size={19} /><span>Classification</span></span>
                <button type="button" className={styles.arrowButton} onClick={() => toggleMenu("com-cls")}>
                  <ChevronDown size={17} className={openMenu === "com-cls" ? styles.rotate : ""} />
                </button>
              </div>
              {openMenu === "com-cls" && (
                <div className={styles.subMenu}>
                  <span className={styles.subItem}>Pending</span>
                  <span className={styles.subItem}>Sessions</span>
                  <span className={styles.subItem}>History</span>
                </div>
              )}
            </div>

            <Link href="/safeguardingPage" className={styles.navItem}><ShieldCheck size={19} /><span>Safeguarding</span></Link>
            <Link href="/disciplinaryPage" className={styles.navItem}><Gavel size={19} /><span>Disciplinary</span></Link>
            <span className={styles.navItem}><HeartHandshake size={19} /><span>Welfare</span></span>
            <span className={styles.navItem}><PersonStanding size={19} /><span>Women's Committee</span></span>
            <Link href="/reportPage" className={styles.navItem}><FileText size={19} /><span>Reports</span></Link>
          </>
        )}

        {/* Global Utilities */}
        <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <span className={styles.navItem}><Bell size={19} /><span>Notifications</span></span>
          <Link href="/settingsPage" className={styles.navItem}><Settings size={19} /><span>Settings</span></Link>
          <span className={styles.navItem}><User size={19} /><span>Profile</span></span>
          <Link href="/login" className={styles.navItem} style={{ color: "#ef4444" }}><LogOut size={19} /><span>Logout</span></Link>
        </div>
      </nav>
    </aside>
  );
}