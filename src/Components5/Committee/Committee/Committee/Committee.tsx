"use client";

import {
  Users,
  UserCheck,
  Building2,
  CalendarDays,
  ArrowRight,
  ShieldCheck,
  ClipboardList,
  UserPlus,
} from "lucide-react";

import styles from "./Committee.module.css";

const committees = [
  {
    id: "COM-001",
    name: "WABA National Committee",
    type: "National Committee",
    chairperson: "Rajesh Kumar",
    members: 12,
    location: "Hyderabad, Telangana",
    status: "Active",
  },
  {
    id: "COM-002",
    name: "Athlete Welfare Committee",
    type: "Welfare Committee",
    chairperson: "Suresh Reddy",
    members: 8,
    location: "Hyderabad, Telangana",
    status: "Active",
  },
  {
    id: "COM-003",
    name: "Safeguarding Committee",
    type: "Safeguarding Committee",
    chairperson: "Anita Sharma",
    members: 7,
    location: "Bengaluru, Karnataka",
    status: "Active",
  },
  {
    id: "COM-004",
    name: "Medical & Classification Committee",
    type: "Technical Committee",
    chairperson: "Dr. Prakash Rao",
    members: 9,
    location: "Visakhapatnam, Andhra Pradesh",
    status: "Active",
  },
];

export default function Committee() {
  return (
    <main className={styles.main}>

      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.breadcrumb}>
            WABA / Committee
          </p>

          <h1>Committee</h1>

          <p className={styles.subtitle}>
            Manage committees, committee members and committee activities.
          </p>
        </div>

        <button className={styles.addButton}>
          <UserPlus size={17} />
          Add Committee
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <section className={styles.statsGrid}>

        <div className={styles.statCard}>
          <div className={styles.iconOrange}>
            <Building2 size={22} />
          </div>

          <div>
            <span>Total Committees</span>
            <strong>4</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconBlue}>
            <Users size={22} />
          </div>

          <div>
            <span>Total Members</span>
            <strong>36</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconGreen}>
            <UserCheck size={22} />
          </div>

          <div>
            <span>Active Committees</span>
            <strong>4</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconPurple}>
            <CalendarDays size={22} />
          </div>

          <div>
            <span>Meetings This Month</span>
            <strong>8</strong>
          </div>
        </div>

      </section>

      {/* COMMITTEE / MEMBER NAVIGATION */}
      <section className={styles.moduleGrid}>

        <a
          href="/Committee/committeePage"
          className={styles.moduleCard}
        >
          <div className={styles.moduleIcon}>
            <Building2 size={25} />
          </div>

          <div className={styles.moduleContent}>
            <h3>My Committee</h3>

            <p>
              View and manage committees assigned to you.
            </p>
          </div>

          <ArrowRight
            size={19}
            className={styles.moduleArrow}
          />
        </a>

        <a
          href="/Committee/memberPage"
          className={styles.moduleCard}
        >
          <div className={styles.moduleIcon}>
            <Users size={25} />
          </div>

          <div className={styles.moduleContent}>
            <h3>Members</h3>

            <p>
              View committee members, roles and member details.
            </p>
          </div>

          <ArrowRight
            size={19}
            className={styles.moduleArrow}
          />
        </a>

      </section>

      {/* COMMITTEE LIST */}
      <section className={styles.card}>

        <div className={styles.cardHeader}>
          <div>
            <h2>Committee Overview</h2>

            <p>
              Current committees registered with WABA
            </p>
          </div>

          <span className={styles.activeLabel}>
            <span></span>
            Active
          </span>
        </div>

        <div className={styles.tableWrapper}>
          <table>

            <thead>
              <tr>
                <th>Committee</th>
                <th>Type</th>
                <th>Chairperson</th>
                <th>Members</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {committees.map((committee) => (
                <tr key={committee.id}>

                  <td>
                    <div className={styles.committeeName}>
                      <div className={styles.smallIcon}>
                        <Building2 size={17} />
                      </div>

                      <div>
                        <strong>{committee.name}</strong>
                        <span>{committee.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    {committee.type}
                  </td>

                  <td>
                    {committee.chairperson}
                  </td>

                  <td>
                    <span className={styles.memberCount}>
                      <Users size={14} />
                      {committee.members}
                    </span>
                  </td>

                  <td>
                    {committee.location}
                  </td>

                  <td>
                    <span className={styles.status}>
                      {committee.status}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </section>

      {/* BOTTOM INFORMATION */}
      <section className={styles.infoGrid}>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <ShieldCheck size={21} />
          </div>

          <div>
            <h3>Committee Responsibilities</h3>

            <p>
              Review committee cases, athlete welfare,
              safeguarding and disciplinary matters.
            </p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <ClipboardList size={21} />
          </div>

          <div>
            <h3>Committee Activities</h3>

            <p>
              Monitor meetings, decisions, assignments
              and committee activities.
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}