"use client";

import {
  Trophy,
  CalendarDays,
  PlayCircle,
  CheckCircle,
  Users,
  MapPin,
  ArrowRight,
  ClipboardCheck,
  UserPlus,
  Swords,
  Award,
} from "lucide-react";

import styles from "./Competition.module.css";

const competitions = [
  {
    id: "CMP001",
    name: "National Wheelchair Boxing Championship 2026",
    location: "Hyderabad, Telangana",
    date: "25 Sep 2026",
    participants: 128,
    status: "Upcoming",
  },
  {
    id: "CMP002",
    name: "South India Adaptive Boxing Championship",
    location: "Bengaluru, Karnataka",
    date: "18 Sep 2026",
    participants: 86,
    status: "Ongoing",
  },
  {
    id: "CMP003",
    name: "Telangana State Wheelchair Boxing Championship",
    location: "Warangal, Telangana",
    date: "10 Aug 2026",
    participants: 72,
    status: "Completed",
  },
  {
    id: "CMP004",
    name: "Andhra Pradesh Adaptive Boxing Championship",
    location: "Vijayawada, Andhra Pradesh",
    date: "05 Oct 2026",
    participants: 94,
    status: "Upcoming",
  },
  {
    id: "CMP005",
    name: "Karnataka Wheelchair Boxing Championship",
    location: "Mysuru, Karnataka",
    date: "28 Jul 2026",
    participants: 65,
    status: "Completed",
  },
];

const quickActions = [
  {
    title: "All Competitions",
    description: "View and manage all competitions",
    icon: Trophy,
  },
  {
    title: "Create & Approval",
    description: "Create and approve competitions",
    icon: ClipboardCheck,
  },
  {
    title: "Registration",
    description: "Manage athlete registrations",
    icon: UserPlus,
  },
  {
    title: "Matches",
    description: "Manage matches and schedules",
    icon: Swords,
  },
  {
    title: "Results",
    description: "View competition results",
    icon: Award,
  },
];

export default function Competition() {
  return (
    <main className={styles.competitionPage}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Competition Dashboard</h1>
          <p>
            Manage WABA competitions, registrations, matches and results.
          </p>
        </div>

        <button className={styles.createButton}>
          <Trophy size={18} />
          Create Competition
        </button>
      </div>

      {/* Summary Cards */}
      <section className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={`${styles.iconBox} ${styles.blue}`}>
            <Trophy size={22} />
          </div>

          <div>
            <span>Total Competitions</span>
            <h2>24</h2>
            <small>All registered competitions</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.iconBox} ${styles.orange}`}>
            <CalendarDays size={22} />
          </div>

          <div>
            <span>Upcoming</span>
            <h2>8</h2>
            <small>Scheduled competitions</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.iconBox} ${styles.green}`}>
            <PlayCircle size={22} />
          </div>

          <div>
            <span>Ongoing</span>
            <h2>3</h2>
            <small>Currently active</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.iconBox} ${styles.purple}`}>
            <CheckCircle size={22} />
          </div>

          <div>
            <span>Completed</span>
            <h2>13</h2>
            <small>Successfully completed</small>
          </div>
        </div>
      </section>

      {/* Competition Overview */}
      <section className={styles.sectionCard}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Competition Overview</h2>
            <p>Recent and active WABA competitions</p>
          </div>

          <button className={styles.viewAllButton}>
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Competition</th>
                <th>Location</th>
                <th>Date</th>
                <th>Participants</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {competitions.map((competition) => (
                <tr key={competition.id}>
                  <td>
                    <div className={styles.competitionName}>
                      <div className={styles.trophyIcon}>
                        <Trophy size={17} />
                      </div>

                      <div>
                        <strong>{competition.name}</strong>
                        <span>{competition.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className={styles.location}>
                      <MapPin size={15} />
                      {competition.location}
                    </div>
                  </td>

                  <td>
                    <div className={styles.date}>
                      <CalendarDays size={15} />
                      {competition.date}
                    </div>
                  </td>

                  <td>
                    <div className={styles.participants}>
                      <Users size={15} />
                      {competition.participants}
                    </div>
                  </td>

                  <td>
                    <span
                      className={`${styles.status} ${
                        competition.status === "Upcoming"
                          ? styles.upcoming
                          : competition.status === "Ongoing"
                          ? styles.ongoing
                          : styles.completed
                      }`}
                    >
                      {competition.status}
                    </span>
                  </td>

                  <td>
                    <button className={styles.actionButton}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Management */}
      <section className={styles.quickSection}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Quick Management</h2>
            <p>Access competition management modules</p>
          </div>
        </div>

        <div className={styles.quickGrid}>
          {quickActions.map((item) => {
            const Icon = item.icon;

            return (
              <div className={styles.quickCard} key={item.title}>
                <div className={styles.quickIcon}>
                  <Icon size={22} />
                </div>

                <div className={styles.quickContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowRight size={18} className={styles.arrow} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}