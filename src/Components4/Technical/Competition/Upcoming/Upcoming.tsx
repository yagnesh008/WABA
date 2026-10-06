"use client";

import { useState } from "react";
import {
  Trophy,
  CalendarDays,
  MapPin,
  Users,
  Clock3,
  Bell,
  Eye,
  X,
} from "lucide-react";
import styles from "./Upcoming.module.css";

interface UpcomingCompetition {
  id: number;
  name: string;
  code: string;
  date: string;
  time: string;
  location: string;
  athletes: number;
  role: string;
  daysLeft: number;
  description: string;
}

const upcomingCompetitions: UpcomingCompetition[] = [
  {
    id: 1,
    name: "Telangana State Adaptive Boxing Meet",
    code: "WABA-TS-2026",
    date: "22 November 2026",
    time: "09:30 AM",
    location: "Warangal, Telangana",
    athletes: 54,
    role: "Classifier",
    daysLeft: 62,
    description:
      "State-level adaptive boxing competition with athlete classification and technical officiating.",
  },
  {
    id: 2,
    name: "WABA Andhra Pradesh Championship",
    code: "WABA-AP-2026",
    date: "12 December 2026",
    time: "10:00 AM",
    location: "Visakhapatnam, Andhra Pradesh",
    athletes: 68,
    role: "Referee",
    daysLeft: 82,
    description:
      "State championship featuring adaptive boxing athletes across multiple categories.",
  },
  {
    id: 3,
    name: "South India Adaptive Boxing Cup",
    code: "WABA-SI-2026",
    date: "18 December 2026",
    time: "09:00 AM",
    location: "Chennai, Tamil Nadu",
    athletes: 88,
    role: "Judge",
    daysLeft: 88,
    description:
      "South India regional adaptive boxing competition bringing together athletes from multiple states.",
  },
  {
    id: 4,
    name: "WABA National Open Championship 2027",
    code: "WABA-NOC-2027",
    date: "15 January 2027",
    time: "09:00 AM",
    location: "New Delhi",
    athletes: 120,
    role: "Referee",
    daysLeft: 116,
    description:
      "National open championship for wheelchair adaptive boxing athletes.",
  },
];

export default function Upcoming() {
  const [selected, setSelected] =
    useState<UpcomingCompetition | null>(null);

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.pageLabel}>
            TECHNICAL OFFICIAL
          </span>

          <h1>Upcoming Competitions</h1>

          <p>
            View upcoming WABA competitions and prepare for your
            technical assignments.
          </p>
        </div>

        <div className={styles.upcomingBadge}>
          <CalendarDays size={17} />
          {upcomingCompetitions.length} Upcoming
        </div>
      </div>

      {/* NOTICE */}
      <div className={styles.notice}>
        <div className={styles.noticeIcon}>
          <Bell size={20} />
        </div>

        <div>
          <h3>Upcoming Competition Schedule</h3>
          <p>
            Review competition dates, locations and your assigned role
            before the event.
          </p>
        </div>
      </div>

      {/* SECTION */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Upcoming Events</h2>
            <p>Competitions scheduled for the coming months.</p>
          </div>
        </div>

        <div className={styles.grid}>
          {upcomingCompetitions.map((competition) => (
            <div className={styles.card} key={competition.id}>
              {/* TOP */}
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <Trophy size={23} />
                </div>

                <span className={styles.daysBadge}>
                  {competition.daysLeft} Days
                </span>
              </div>

              {/* CONTENT */}
              <div className={styles.content}>
                <span className={styles.code}>
                  {competition.code}
                </span>

                <h3>{competition.name}</h3>

                <p>{competition.description}</p>
              </div>

              {/* DATE BOX */}
              <div className={styles.dateBox}>
                <CalendarDays size={18} />

                <div>
                  <span>Competition Date</span>
                  <strong>{competition.date}</strong>
                </div>
              </div>

              {/* DETAILS */}
              <div className={styles.details}>
                <div className={styles.detail}>
                  <Clock3 size={16} />

                  <div>
                    <span>Time</span>
                    <strong>{competition.time}</strong>
                  </div>
                </div>

                <div className={styles.detail}>
                  <MapPin size={16} />

                  <div>
                    <span>Location</span>
                    <strong>{competition.location}</strong>
                  </div>
                </div>

                <div className={styles.detail}>
                  <Users size={16} />

                  <div>
                    <span>Athletes</span>
                    <strong>{competition.athletes}</strong>
                  </div>
                </div>

                <div className={styles.detail}>
                  <Trophy size={16} />

                  <div>
                    <span>Your Role</span>
                    <strong>{competition.role}</strong>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className={styles.viewButton}
                onClick={() => setSelected(competition)}
              >
                <Eye size={17} />
                View Competition
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className={styles.overlay}
          onClick={() => setSelected(null)}
        >
          <div
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <span>{selected.code}</span>
                <h2>{selected.name}</h2>
              </div>

              <button
                className={styles.close}
                onClick={() => setSelected(null)}
              >
                <X size={19} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.daysLeft}>
                <Clock3 size={16} />
                {selected.daysLeft} days remaining
              </div>

              <p className={styles.modalDescription}>
                {selected.description}
              </p>

              <div className={styles.modalGrid}>
                <div>
                  <CalendarDays size={17} />
                  <section>
                    <span>Date</span>
                    <strong>{selected.date}</strong>
                  </section>
                </div>

                <div>
                  <Clock3 size={17} />
                  <section>
                    <span>Time</span>
                    <strong>{selected.time}</strong>
                  </section>
                </div>

                <div>
                  <MapPin size={17} />
                  <section>
                    <span>Location</span>
                    <strong>{selected.location}</strong>
                  </section>
                </div>

                <div>
                  <Users size={17} />
                  <section>
                    <span>Athletes</span>
                    <strong>{selected.athletes}</strong>
                  </section>
                </div>

                <div>
                  <Trophy size={17} />
                  <section>
                    <span>Your Role</span>
                    <strong>{selected.role}</strong>
                  </section>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.closeButton}
                onClick={() => setSelected(null)}
              >
                Close
              </button>

              <button className={styles.reminderButton}>
                <Bell size={16} />
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}