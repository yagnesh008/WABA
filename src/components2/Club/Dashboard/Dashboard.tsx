"use client";

import {
  Users,
  UserCheck,
  UserRound,
  Trophy,
  CreditCard,
  Dumbbell,
  CalendarDays,
  ArrowUpRight,
  ClipboardCheck,
  Medal,
  Clock,
  MapPin,
} from "lucide-react";

import styles from "./Dashboard.module.css";

const stats = [
  {
    title: "Total Athletes",
    value: "86",
    change: "+8",
    icon: Users,
    className: "blue",
  },
  {
    title: "Active Athletes",
    value: "72",
    change: "+5",
    icon: UserCheck,
    className: "green",
  },
  {
    title: "Coaches",
    value: "6",
    change: "+1",
    icon: UserRound,
    className: "purple",
  },
  {
    title: "Upcoming Competitions",
    value: "8",
    change: "+2",
    icon: Trophy,
    className: "orange",
  },
  {
    title: "Active Memberships",
    value: "68",
    change: "+6",
    icon: CreditCard,
    className: "cyan",
  },
  {
    title: "Training Sessions",
    value: "24",
    change: "+4",
    icon: Dumbbell,
    className: "red",
  },
];

const registrations = [
  {
    athlete: "Rahul Kumar",
    competition: "National Adaptive Boxing Championship",
    category: "Men - 60kg",
    status: "Approved",
  },
  {
    athlete: "Priya Reddy",
    competition: "South Zone Boxing Championship",
    category: "Women - 55kg",
    status: "Pending",
  },
  {
    athlete: "Suresh Babu",
    competition: "State Adaptive Boxing Championship",
    category: "Men - 75kg",
    status: "Approved",
  },
  {
    athlete: "Anjali Rao",
    competition: "National Adaptive Boxing Championship",
    category: "Women - 65kg",
    status: "Pending",
  },
];

const competitions = [
  {
    name: "National Adaptive Boxing Championship",
    date: "20 Oct 2026",
    location: "Hyderabad",
    status: "Registration Open",
  },
  {
    name: "South Zone Boxing Championship",
    date: "05 Nov 2026",
    location: "Bengaluru",
    status: "Upcoming",
  },
  {
    name: "State Adaptive Boxing Championship",
    date: "18 Nov 2026",
    location: "Visakhapatnam",
    status: "Upcoming",
  },
];

const performance = [
  {
    name: "Rahul Kumar",
    category: "Men - 60kg",
    competitions: 8,
    wins: 6,
    points: "86",
  },
  {
    name: "Priya Reddy",
    category: "Women - 55kg",
    competitions: 6,
    wins: 4,
    points: "74",
  },
  {
    name: "Suresh Babu",
    category: "Men - 75kg",
    competitions: 7,
    wins: 5,
    points: "79",
  },
  {
    name: "Anjali Rao",
    category: "Women - 65kg",
    competitions: 5,
    wins: 3,
    points: "68",
  },
];

export default function Dashboard() {
  return (
    <main className={styles.dashboard}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.titleRow}>
            <div className={styles.titleIcon}>
              <Trophy size={24} />
            </div>

            <div>
              <h1>Club / Academy Dashboard</h1>
              <p>
                Manage your organisation, athletes, coaching and competitions
              </p>
            </div>
          </div>
        </div>

        <div className={styles.dateBox}>
          <CalendarDays size={18} />
          <span>September 2026</span>
        </div>
      </div>

      {/* Organisation Info */}
      <section className={styles.organisationCard}>
        <div className={styles.organisationIcon}>
          <Medal size={28} />
        </div>

        <div className={styles.organisationInfo}>
          <h2>WABA Hyderabad Boxing Academy</h2>
          <p>
            Registered Club / Academy • Hyderabad, Telangana
          </p>
        </div>

        <button className={styles.viewOrganisation}>
          View Organisation
          <ArrowUpRight size={17} />
        </button>
      </section>

      {/* Statistics */}
      <section className={styles.statsGrid}>
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              className={`${styles.statCard} ${
                styles[item.className as keyof typeof styles]
              }`}
              key={item.title}
            >
              <div className={styles.statTop}>
                <div className={styles.statIcon}>
                  <Icon size={22} />
                </div>

                <span className={styles.statChange}>
                  {item.change}
                </span>
              </div>

              <div className={styles.statValue}>{item.value}</div>

              <div className={styles.statTitle}>{item.title}</div>
            </div>
          );
        })}
      </section>

      {/* Main Grid */}
      <section className={styles.mainGrid}>
        {/* Recent Registrations */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2>Recent Registrations</h2>
              <p>Latest athlete competition registrations</p>
            </div>

            <button className={styles.viewAll}>
              View All
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Athlete</th>
                  <th>Competition</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {registrations.map((item) => (
                  <tr key={item.athlete}>
                    <td>
                      <div className={styles.athleteName}>
                        <div className={styles.avatar}>
                          {item.athlete.charAt(0)}
                        </div>

                        <span>{item.athlete}</span>
                      </div>
                    </td>

                    <td>{item.competition}</td>
                    <td>{item.category}</td>

                    <td>
                      <span
                        className={`${styles.status} ${
                          item.status === "Approved"
                            ? styles.approved
                            : styles.pending
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

        {/* Upcoming Competitions */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2>Upcoming Competitions</h2>
              <p>Competitions available for your athletes</p>
            </div>

            <Trophy className={styles.headerIcon} size={22} />
          </div>

          <div className={styles.competitionList}>
            {competitions.map((competition) => (
              <div
                className={styles.competitionItem}
                key={competition.name}
              >
                <div className={styles.competitionIcon}>
                  <Trophy size={19} />
                </div>

                <div className={styles.competitionDetails}>
                  <h3>{competition.name}</h3>

                  <div className={styles.competitionMeta}>
                    <span>
                      <CalendarDays size={14} />
                      {competition.date}
                    </span>

                    <span>
                      <MapPin size={14} />
                      {competition.location}
                    </span>
                  </div>
                </div>

                <span className={styles.competitionStatus}>
                  {competition.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Grid */}
      <section className={styles.bottomGrid}>
        {/* Athlete Performance */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2>Athlete Performance</h2>
              <p>Recent performance of your athletes</p>
            </div>

            <button className={styles.viewAll}>
              View Rankings
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className={styles.performanceList}>
            {performance.map((athlete, index) => (
              <div
                className={styles.performanceItem}
                key={athlete.name}
              >
                <div className={styles.rank}>
                  #{index + 1}
                </div>

                <div className={styles.performanceAvatar}>
                  {athlete.name.charAt(0)}
                </div>

                <div className={styles.performanceInfo}>
                  <h3>{athlete.name}</h3>
                  <span>{athlete.category}</span>
                </div>

                <div className={styles.performanceStats}>
                  <div>
                    <strong>{athlete.competitions}</strong>
                    <span>Competitions</span>
                  </div>

                  <div>
                    <strong>{athlete.wins}</strong>
                    <span>Wins</span>
                  </div>

                  <div className={styles.points}>
                    <strong>{athlete.points}</strong>
                    <span>Points</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2>Quick Actions</h2>
              <p>Frequently used club activities</p>
            </div>
          </div>

          <div className={styles.quickActions}>
            <button className={styles.actionButton}>
              <div className={`${styles.actionIcon} ${styles.blueBg}`}>
                <Users size={21} />
              </div>

              <div>
                <strong>Add Athlete</strong>
                <span>Register a new athlete</span>
              </div>

              <ArrowUpRight size={17} />
            </button>

            <button className={styles.actionButton}>
              <div className={`${styles.actionIcon} ${styles.orangeBg}`}>
                <Trophy size={21} />
              </div>

              <div>
                <strong>Competition Registration</strong>
                <span>Register athletes</span>
              </div>

              <ArrowUpRight size={17} />
            </button>

            <button className={styles.actionButton}>
              <div className={`${styles.actionIcon} ${styles.greenBg}`}>
                <Dumbbell size={21} />
              </div>

              <div>
                <strong>Training</strong>
                <span>Manage training sessions</span>
              </div>

              <ArrowUpRight size={17} />
            </button>

            <button className={styles.actionButton}>
              <div className={`${styles.actionIcon} ${styles.purpleBg}`}>
                <ClipboardCheck size={21} />
              </div>

              <div>
                <strong>Memberships</strong>
                <span>Manage memberships</span>
              </div>

              <ArrowUpRight size={17} />
            </button>
          </div>

          <div className={styles.trainingBox}>
            <div className={styles.trainingIcon}>
              <Clock size={20} />
            </div>

            <div>
              <strong>Today's Training</strong>
              <span>6:00 PM - 8:00 PM</span>
            </div>

            <span className={styles.trainingCount}>
              18 Athletes
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}