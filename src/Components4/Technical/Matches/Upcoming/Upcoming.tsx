"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Eye,
  X,
  Swords,
} from "lucide-react";

import styles from "./Upcoming.module.css";

interface MatchData {
  id: number;
  matchNo: string;
  competition: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  athleteA: string;
  athleteB: string;
  role: string;
  ring: string;
}

const matches: MatchData[] = [
  {
    id: 1,
    matchNo: "M-101",
    competition: "WABA National Boxing Championship 2026",
    category: "Men - 63.5 kg",
    date: "18 October 2026",
    time: "09:30 AM",
    venue: "Main Ring - Hyderabad",
    athleteA: "Arjun Kumar",
    athleteB: "Rahul Singh",
    role: "Referee",
    ring: "Ring 1",
  },
  {
    id: 2,
    matchNo: "M-102",
    competition: "WABA National Boxing Championship 2026",
    category: "Men - 71 kg",
    date: "18 October 2026",
    time: "10:15 AM",
    venue: "Main Ring - Hyderabad",
    athleteA: "Vijay Reddy",
    athleteB: "Kiran Das",
    role: "Judge",
    ring: "Ring 1",
  },
  {
    id: 3,
    matchNo: "M-203",
    competition: "South Zone Adaptive Boxing Championship",
    category: "Women - 57 kg",
    date: "05 November 2026",
    time: "11:00 AM",
    venue: "Ring 2 - Bengaluru",
    athleteA: "Anjali Rao",
    athleteB: "Sneha Patel",
    role: "Referee",
    ring: "Ring 2",
  },
  {
    id: 4,
    matchNo: "M-304",
    competition: "Telangana Technical Boxing Meet",
    category: "Men - 80 kg",
    date: "15 November 2026",
    time: "02:00 PM",
    venue: "Classification Area - Warangal",
    athleteA: "Ramesh Babu",
    athleteB: "Suresh Kumar",
    role: "Classifier",
    ring: "Ring 1",
  },
];

export default function Upcoming() {
  const [selectedMatch, setSelectedMatch] = useState<MatchData | null>(null);

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <CalendarDays size={29} />
            Upcoming Matches
          </h1>

          <p>
            View your scheduled matches and upcoming officiating assignments.
          </p>
        </div>

        <div className={styles.totalBadge}>
          {matches.length} Upcoming
        </div>
      </div>

      {/* NOTICE */}
      <div className={styles.notice}>
        <Swords size={21} />

        <div>
          <strong>Upcoming Match Schedule</strong>
          <p>
            Please review your assigned role, match time and venue before
            attending the competition.
          </p>
        </div>
      </div>

      {/* MATCH LIST */}
      <div className={styles.list}>
        {matches.map((match) => (
          <div className={styles.card} key={match.id}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.matchNo}>{match.matchNo}</span>
                <h2>{match.competition}</h2>
                <p>{match.category}</p>
              </div>

              <span className={styles.role}>{match.role}</span>
            </div>

            <div className={styles.details}>
              <div>
                <CalendarDays size={17} />
                <span>{match.date}</span>
              </div>

              <div>
                <Clock3 size={17} />
                <span>{match.time}</span>
              </div>

              <div>
                <MapPin size={17} />
                <span>{match.venue}</span>
              </div>

              <div>
                <Users size={17} />
                <span>
                  {match.athleteA} vs {match.athleteB}
                </span>
              </div>
            </div>

            <div className={styles.footer}>
              <span className={styles.ring}>{match.ring}</span>

              <button
                className={styles.viewButton}
                onClick={() => setSelectedMatch(match)}
              >
                <Eye size={16} />
                View Match
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedMatch && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button
              className={styles.close}
              onClick={() => setSelectedMatch(null)}
            >
              <X size={20} />
            </button>

            <span className={styles.modalLabel}>MATCH DETAILS</span>

            <h2>{selectedMatch.competition}</h2>

            <div className={styles.modalMatch}>
              <span>{selectedMatch.matchNo}</span>
              <strong>{selectedMatch.category}</strong>
            </div>

            <div className={styles.modalGrid}>
              <div>
                <CalendarDays size={17} />
                <span>{selectedMatch.date}</span>
              </div>

              <div>
                <Clock3 size={17} />
                <span>{selectedMatch.time}</span>
              </div>

              <div>
                <MapPin size={17} />
                <span>{selectedMatch.venue}</span>
              </div>

              <div>
                <Users size={17} />
                <span>
                  {selectedMatch.athleteA} vs {selectedMatch.athleteB}
                </span>
              </div>
            </div>

            <div className={styles.assignment}>
              <strong>Your Assignment</strong>
              <span>{selectedMatch.role}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}