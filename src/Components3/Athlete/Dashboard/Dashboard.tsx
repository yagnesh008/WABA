"use client";

import Link from "next/link";
import styles from "./Dashboard.module.css";

const upcomingCompetitions = [
  {
    name: "WABA National Championship 2026",
    date: "28 Sep 2026",
    location: "Hyderabad",
    category: "Senior",
    status: "Registered",
  },
  {
    name: "South Zone Adaptive Boxing Championship",
    date: "05 Oct 2026",
    location: "Bengaluru",
    category: "Senior",
    status: "Registered",
  },
  {
    name: "State Adaptive Boxing Championship",
    date: "18 Oct 2026",
    location: "Vijayawada",
    category: "Senior",
    status: "Available",
  },
];

const upcomingMatches = [
  {
    opponent: "Rahul Reddy",
    competition: "WABA National Championship 2026",
    date: "28 Sep 2026",
    time: "10:30 AM",
    round: "Quarter Final",
  },
  {
    opponent: "Sanjay Kumar",
    competition: "South Zone Championship",
    date: "05 Oct 2026",
    time: "11:00 AM",
    round: "Semi Final",
  },
];

const recentActivity = [
  {
    title: "Membership renewed",
    description: "Your athlete membership is active until 17 Sep 2027.",
    date: "18 Sep 2026",
  },
  {
    title: "Competition registration completed",
    description:
      "You registered for WABA National Championship 2026.",
    date: "17 Sep 2026",
  },
  {
    title: "Certificate issued",
    description:
      "Competition Participation Certificate has been added.",
    date: "15 Sep 2026",
  },
];

export default function Dashboard() {
  return (
    <main className={styles.page}>
      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <div className={styles.pageHeader}>
        <div>
          <h1>Athlete Dashboard</h1>
          <p>
            Welcome back, Arjun. Here is your WABA
            athlete overview.
          </p>
        </div>

        <div className={styles.athleteBadge}>
          <div className={styles.avatar}>A</div>

          <div>
            <strong>Arjun Kumar</strong>
            <span>ATH001</span>
          </div>
        </div>
      </div>

      {/* =========================================
          PROFILE / MEMBERSHIP
      ========================================= */}

      <section className={styles.topGrid}>
        {/* PROFILE CARD */}

        <div className={styles.profileCard}>
          <div className={styles.profileTop}>
            <div className={styles.largeAvatar}>
              A
            </div>

            <div>
              <h2>Arjun Kumar</h2>
              <p>Athlete ID: ATH001</p>
            </div>
          </div>

          <div className={styles.profileDetails}>
            <div>
              <span>Category</span>
              <strong>Senior</strong>
            </div>

            <div>
              <span>Classification</span>
              <strong>WAB-1</strong>
            </div>

            <div>
              <span>Club</span>
              <strong>WABA Hyderabad Club</strong>
            </div>

            <div>
              <span>State</span>
              <strong>Telangana</strong>
            </div>
          </div>

          <Link
            href="/Athlete/profilePage"
            className={styles.outlineButton}
          >
            View Profile
          </Link>
        </div>

        {/* MEMBERSHIP CARD */}

        <div className={styles.membershipCard}>
          <div className={styles.cardHeader}>
            <div>
              <span className={styles.cardLabel}>
                MEMBERSHIP
              </span>

              <h2>Active</h2>
            </div>

            <div className={styles.membershipIcon}>
              ✓
            </div>
          </div>

          <div className={styles.membershipInfo}>
            <div>
              <span>Membership ID</span>
              <strong>WABA-MEM-2026-001</strong>
            </div>

            <div>
              <span>Valid From</span>
              <strong>18 Sep 2026</strong>
            </div>

            <div>
              <span>Valid Until</span>
              <strong>17 Sep 2027</strong>
            </div>
          </div>

          <Link
            href="/Athlete/myMembershipPage"
            className={styles.primaryButton}
          >
            View Membership
          </Link>
        </div>
      </section>

      {/* =========================================
          SUMMARY CARDS
      ========================================= */}

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🏆</div>

          <div>
            <span>Competitions</span>
            <h2>8</h2>
            <small>Total participated</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🥊</div>

          <div>
            <span>Matches</span>
            <h2>24</h2>
            <small>Total matches</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🏅</div>

          <div>
            <span>Medals</span>
            <h2>7</h2>
            <small>3 Gold · 2 Silver · 2 Bronze</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>📜</div>

          <div>
            <span>Certificates</span>
            <h2>6</h2>
            <small>Certificates earned</small>
          </div>
        </div>
      </section>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <section className={styles.contentGrid}>
        {/* UPCOMING COMPETITIONS */}

        <div className={styles.card}>
          <div className={styles.sectionHeader}>
            <div>
              <h3>Upcoming Competitions</h3>
              <p>Your registered and available competitions.</p>
            </div>

            <Link
              href="/Athlete/competitionPage"
              className={styles.viewAll}
            >
              View All
            </Link>
          </div>

          <div className={styles.competitionList}>
            {upcomingCompetitions.map(
              (competition) => (
                <div
                  className={styles.competitionItem}
                  key={competition.name}
                >
                  <div className={styles.dateBox}>
                    <strong>
                      {competition.date.split(" ")[0]}
                    </strong>
                    <span>
                      {competition.date.split(" ")[1]}
                    </span>
                  </div>

                  <div className={styles.itemContent}>
                    <h4>{competition.name}</h4>

                    <p>
                      📍 {competition.location}{" "}
                      &nbsp; • &nbsp;
                      {competition.category}
                    </p>
                  </div>

                  <span
                    className={`${styles.status} ${
                      competition.status ===
                      "Registered"
                        ? styles.registered
                        : styles.available
                    }`}
                  >
                    {competition.status}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* PERFORMANCE */}

        <div className={styles.card}>
          <div className={styles.sectionHeader}>
            <div>
              <h3>Performance</h3>
              <p>Your current competition performance.</p>
            </div>

            <Link
              href="/Athlete/rankingPage"
              className={styles.viewAll}
            >
              Ranking
            </Link>
          </div>

          <div className={styles.performanceMain}>
            <div className={styles.performanceCircle}>
              <strong>78%</strong>
              <span>Win Rate</span>
            </div>

            <div className={styles.performanceDetails}>
              <div>
                <span>Wins</span>
                <strong>19</strong>
              </div>

              <div>
                <span>Losses</span>
                <strong>5</strong>
              </div>

              <div>
                <span>Points</span>
                <strong>1,245</strong>
              </div>

              <div>
                <span>Rank</span>
                <strong>#12</strong>
              </div>
            </div>
          </div>

          <div className={styles.progressSection}>
            <div className={styles.progressHeader}>
              <span>Season Progress</span>
              <strong>78%</strong>
            </div>

            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: "78%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          MATCHES + ACTIVITY
      ========================================= */}

      <section className={styles.bottomGrid}>
        {/* UPCOMING MATCHES */}

        <div className={styles.card}>
          <div className={styles.sectionHeader}>
            <div>
              <h3>Upcoming Matches</h3>
              <p>Your scheduled matches.</p>
            </div>

            <Link
              href="/Athlete/upcomingMatchPage"
              className={styles.viewAll}
            >
              View All
            </Link>
          </div>

          <div className={styles.matchList}>
            {upcomingMatches.map((match) => (
              <div
                className={styles.matchItem}
                key={`${match.opponent}-${match.date}`}
              >
                <div className={styles.matchIcon}>
                  🥊
                </div>

                <div className={styles.matchContent}>
                  <span>{match.round}</span>

                  <h4>
                    Arjun Kumar
                    <b> VS </b>
                    {match.opponent}
                  </h4>

                  <p>
                    {match.competition}
                  </p>

                  <small>
                    {match.date} · {match.time}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT ACTIVITY */}

        <div className={styles.card}>
          <div className={styles.sectionHeader}>
            <div>
              <h3>Recent Activity</h3>
              <p>Your latest account activities.</p>
            </div>
          </div>

          <div className={styles.activityList}>
            {recentActivity.map((activity) => (
              <div
                className={styles.activityItem}
                key={activity.title}
              >
                <div className={styles.activityDot} />

                <div>
                  <h4>{activity.title}</h4>

                  <p>{activity.description}</p>

                  <span>{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}