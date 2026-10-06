"use client";

import {
  Users,
  UserCheck,
  Scale,
  Building2,
  Trophy,
  CheckCircle,
  Clock,
  XCircle,
  MapPin,
  CalendarDays,
  UserPlus,
} from "lucide-react";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <main className={styles.dashboard}>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, National Admin</p>
        </div>
      </div>

      {/* Statistics */}
      <div className={styles.statsGrid}>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Trophy size={22} />
          </div>
          <div>
            <span>Total Athletes</span>
            <h2>1,248</h2>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Users size={22} />
          </div>
          <div>
            <span>Total Coaches</span>
            <h2>156</h2>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Scale size={22} />
          </div>
          <div>
            <span>Total Officials</span>
            <h2>89</h2>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Building2 size={22} />
          </div>
          <div>
            <span>Organisations</span>
            <h2>74</h2>
          </div>
        </div>

      </div>

      {/* Overview */}
      <div className={styles.overviewGrid}>

        {/* Competition Overview */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h3>Competition Overview</h3>
              <p>Current competition status</p>
            </div>
            <Trophy size={21} />
          </div>

          <div className={styles.overviewList}>

            <div className={styles.overviewItem}>
              <span>
                <i className={`${styles.dot} ${styles.blue}`}></i>
                Upcoming
              </span>
              <strong>12</strong>
            </div>

            <div className={styles.overviewItem}>
              <span>
                <i className={`${styles.dot} ${styles.orange}`}></i>
                Ongoing
              </span>
              <strong>3</strong>
            </div>

            <div className={styles.overviewItem}>
              <span>
                <i className={`${styles.dot} ${styles.green}`}></i>
                Completed
              </span>
              <strong>45</strong>
            </div>

            <div className={styles.overviewItem}>
              <span>
                <i className={`${styles.dot} ${styles.red}`}></i>
                Cancelled
              </span>
              <strong>2</strong>
            </div>

          </div>
        </div>

        {/* Registration Overview */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h3>Registration Overview</h3>
              <p>Registration application status</p>
            </div>
            <UserCheck size={21} />
          </div>

          <div className={styles.overviewList}>

            <div className={styles.overviewItem}>
              <span>
                <CheckCircle size={17} />
                Approved
              </span>
              <strong>96</strong>
            </div>

            <div className={styles.overviewItem}>
              <span>
                <Clock size={17} />
                Pending
              </span>
              <strong>28</strong>
            </div>

            <div className={styles.overviewItem}>
              <span>
                <XCircle size={17} />
                Rejected
              </span>
              <strong>7</strong>
            </div>

          </div>
        </div>

      </div>

      {/* Recent Competitions */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <h3>Recent Competitions</h3>
            <p>Latest competition activities</p>
          </div>
          <Trophy size={21} />
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Competition</th>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>National Cup</td>
                <td>
                  <CalendarDays size={15} />
                  20 Sep 2026
                </td>
                <td>
                  <MapPin size={15} />
                  Hyderabad
                </td>
                <td>
                  <span className={`${styles.status} ${styles.upcoming}`}>
                    Upcoming
                  </span>
                </td>
              </tr>

              <tr>
                <td>State Championship</td>
                <td>
                  <CalendarDays size={15} />
                  25 Sep 2026
                </td>
                <td>
                  <MapPin size={15} />
                  Bengaluru
                </td>
                <td>
                  <span className={`${styles.status} ${styles.ongoing}`}>
                    Ongoing
                  </span>
                </td>
              </tr>

              <tr>
                <td>South India Cup</td>
                <td>
                  <CalendarDays size={15} />
                  02 Oct 2026
                </td>
                <td>
                  <MapPin size={15} />
                  Chennai
                </td>
                <td>
                  <span className={`${styles.status} ${styles.upcoming}`}>
                    Upcoming
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activities */}
      <div className={styles.activityCard}>

        <div className={styles.cardHeader}>
          <div>
            <h3>Recent Activities</h3>
            <p>Latest system activities</p>
          </div>
          <UserPlus size={21} />
        </div>

        <div className={styles.activities}>

          <div className={styles.activity}>
            <div className={styles.activityIcon}>
              <UserPlus size={17} />
            </div>
            <span>New athlete registered</span>
          </div>

          <div className={styles.activity}>
            <div className={styles.activityIcon}>
              <Scale size={17} />
            </div>
            <span>Official verified</span>
          </div>

          <div className={styles.activity}>
            <div className={styles.activityIcon}>
              <Trophy size={17} />
            </div>
            <span>Competition approval</span>
          </div>

          <div className={styles.activity}>
            <div className={styles.activityIcon}>
              <Building2 size={17} />
            </div>
            <span>Club registered</span>
          </div>

        </div>

      </div>

    </main>
  );
}