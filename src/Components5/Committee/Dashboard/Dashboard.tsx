"use client";

import {
  FolderOpen,
  Clock3,
  CheckCircle2,
  Users,
  ArrowRight,
  Stethoscope,
  ClipboardCheck,
  Shield,
  Scale,
  AlertCircle,
  CalendarDays,
} from "lucide-react";

import styles from "./Dashboard.module.css";

const stats = [
  {
    title: "Active Cases",
    value: "18",
    change: "+4",
    icon: FolderOpen,
    type: "orange",
  },
  {
    title: "Under Review",
    value: "7",
    change: "+2",
    icon: Clock3,
    type: "blue",
  },
  {
    title: "Resolved Cases",
    value: "42",
    change: "+8",
    icon: CheckCircle2,
    type: "green",
  },
  {
    title: "Committee Members",
    value: "24",
    change: "+3",
    icon: Users,
    type: "purple",
  },
];

const recentCases = [
  {
    id: "CASE-1024",
    athlete: "Rahul Kumar",
    category: "Safeguarding",
    date: "20 Sep 2026",
    status: "Under Review",
  },
  {
    id: "CASE-1023",
    athlete: "Suresh Reddy",
    category: "Disciplinary",
    date: "18 Sep 2026",
    status: "Active",
  },
  {
    id: "CASE-1022",
    athlete: "Anil Sharma",
    category: "Medical",
    date: "16 Sep 2026",
    status: "Resolved",
  },
  {
    id: "CASE-1021",
    athlete: "Vikram Singh",
    category: "Welfare",
    date: "14 Sep 2026",
    status: "Under Review",
  },
];

const quickAccess = [
  {
    title: "Cases",
    description: "Manage and review committee cases",
    icon: FolderOpen,
    link: "/Committee/casesPage",
  },
  {
    title: "Medical",
    description: "View athlete medical information",
    icon: Stethoscope,
    link: "/Committee/medicalPage",
  },
  {
    title: "Classification",
    description: "Review athlete classifications",
    icon: ClipboardCheck,
    link: "/Committee/classificationPage",
  },
  {
    title: "Safeguarding",
    description: "Manage safeguarding matters",
    icon: Shield,
    link: "/Committee/safeguardingPage",
  },
];

export default function Dashboard() {
  return (
    <main className={styles.main}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.breadcrumb}>WABA / Committee</p>
          <h1>Committee Dashboard</h1>
          <p className={styles.subtitle}>
            Manage committee cases, athlete welfare, medical and safeguarding
            activities.
          </p>
        </div>

        <div className={styles.dateBox}>
          <CalendarDays size={18} />
          <span>September 2026</span>
        </div>
      </div>

      {/* WELCOME CARD */}
      <section className={styles.welcomeCard}>
        <div>
          <span className={styles.welcomeTag}>WABA COMMITTEE</span>

          <h2>Welcome to the Committee Dashboard</h2>

          <p>
            Monitor cases, review athlete matters, manage safeguarding
            activities and support WABA committee operations.
          </p>
        </div>

        <div className={styles.welcomeIcon}>
          <Scale size={58} />
        </div>
      </section>

      {/* STAT CARDS */}
      <section className={styles.statsGrid}>
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              className={`${styles.statCard} ${styles[item.type]}`}
              key={item.title}
            >
              <div className={styles.statTop}>
                <div className={styles.statIcon}>
                  <Icon size={22} />
                </div>

                <span className={styles.change}>
                  {item.change}
                </span>
              </div>

              <div className={styles.statValue}>{item.value}</div>

              <div className={styles.statTitle}>{item.title}</div>
            </div>
          );
        })}
      </section>

      {/* MAIN GRID */}
      <section className={styles.contentGrid}>
        {/* RECENT CASES */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h3>Recent Cases</h3>
              <p>Latest committee case activities</p>
            </div>

            <a href="/Committee/casesPage" className={styles.viewAll}>
              View All
              <ArrowRight size={16} />
            </a>
          </div>

          <div className={styles.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>Case ID</th>
                  <th>Athlete</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {recentCases.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.caseId}>{item.id}</td>

                    <td>{item.athlete}</td>

                    <td>{item.category}</td>

                    <td>{item.date}</td>

                    <td>
                      <span
                        className={`${styles.status} ${
                          item.status === "Active"
                            ? styles.active
                            : item.status === "Under Review"
                            ? styles.review
                            : styles.resolved
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CASE STATUS */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h3>Case Status</h3>
              <p>Current case overview</p>
            </div>
          </div>

          <div className={styles.statusList}>
            <div className={styles.statusItem}>
              <div className={styles.statusInfo}>
                <span className={styles.dotOrange}></span>
                <span>Active</span>
              </div>

              <strong>18</strong>
            </div>

            <div className={styles.progress}>
              <span
                className={styles.progressOrange}
                style={{ width: "43%" }}
              ></span>
            </div>

            <div className={styles.statusItem}>
              <div className={styles.statusInfo}>
                <span className={styles.dotBlue}></span>
                <span>Under Review</span>
              </div>

              <strong>7</strong>
            </div>

            <div className={styles.progress}>
              <span
                className={styles.progressBlue}
                style={{ width: "25%" }}
              ></span>
            </div>

            <div className={styles.statusItem}>
              <div className={styles.statusInfo}>
                <span className={styles.dotGreen}></span>
                <span>Resolved</span>
              </div>

              <strong>42</strong>
            </div>

            <div className={styles.progress}>
              <span
                className={styles.progressGreen}
                style={{ width: "78%" }}
              ></span>
            </div>
          </div>

          <div className={styles.notice}>
            <AlertCircle size={18} />

            <div>
              <strong>7 cases need attention</strong>
              <p>Review pending committee cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className={styles.quickSection}>
        <div className={styles.sectionTitle}>
          <div>
            <h3>Quick Access</h3>
            <p>Frequently used committee modules</p>
          </div>
        </div>

        <div className={styles.quickGrid}>
          {quickAccess.map((item) => {
            const Icon = item.icon;

            return (
              <a href={item.link} className={styles.quickCard} key={item.title}>
                <div className={styles.quickIcon}>
                  <Icon size={23} />
                </div>

                <div className={styles.quickContent}>
                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </div>

                <ArrowRight
                  size={18}
                  className={styles.quickArrow}
                />
              </a>
            );
          })}
        </div>
      </section>

      {/* BOTTOM INFORMATION */}
      <section className={styles.bottomGrid}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Users size={22} />
          </div>

          <div>
            <h4>Committee Members</h4>
            <p>24 active committee members are currently registered.</p>
          </div>

          <a href="/Committee/memberPage">
            <ArrowRight size={18} />
          </a>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Scale size={22} />
          </div>

          <div>
            <h4>Disciplinary Matters</h4>
            <p>Review and manage disciplinary committee activities.</p>
          </div>

          <a href="/Committee/disciplinaryPage">
            <ArrowRight size={18} />
          </a>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Shield size={22} />
          </div>

          <div>
            <h4>Safeguarding</h4>
            <p>Monitor athlete safety and safeguarding matters.</p>
          </div>

          <a href="/Committee/safeguardingPage">
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}