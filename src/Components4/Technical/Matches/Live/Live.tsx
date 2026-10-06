"use client";

import { useState } from "react";
import {
  Radio,
  Clock3,
  MapPin,
  Users,
  Eye,
  X,
  Swords,
  AlertCircle,
} from "lucide-react";

import styles from "./Live.module.css";

interface LiveMatchData {
  id: number;
  matchNo: string;
  competition: string;
  category: string;
  round: string;
  time: string;
  venue: string;
  athleteA: string;
  athleteB: string;
  scoreA: number;
  scoreB: number;
  role: string;
}

const liveMatches: LiveMatchData[] = [
  {
    id: 1,
    matchNo: "M-087",
    competition: "WABA National Boxing Championship 2026",
    category: "Men - 63.5 kg",
    round: "Quarter Final",
    time: "11:25 AM",
    venue: "Main Ring - Hyderabad",
    athleteA: "Arjun Kumar",
    athleteB: "Vikram Singh",
    scoreA: 18,
    scoreB: 16,
    role: "Referee",
  },
  {
    id: 2,
    matchNo: "M-088",
    competition: "WABA National Boxing Championship 2026",
    category: "Women - 57 kg",
    round: "Semi Final",
    time: "11:40 AM",
    venue: "Ring 2 - Hyderabad",
    athleteA: "Anjali Rao",
    athleteB: "Sneha Patel",
    scoreA: 21,
    scoreB: 20,
    role: "Judge",
  },
];

export default function Live() {
  const [selectedMatch, setSelectedMatch] =
    useState<LiveMatchData | null>(null);

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <span className={styles.eyebrow}>TECHNICAL OFFICIAL</span>

          <h1>
            <Radio size={29} />
            Live Matches
          </h1>

          <p>
            Monitor matches currently in progress and manage live
            officiating.
          </p>
        </div>

        <div className={styles.liveBadge}>
          <span className={styles.dot}></span>
          {liveMatches.length} Live
        </div>
      </div>

      {/* LIVE NOTICE */}
      <div className={styles.liveNotice}>
        <Radio size={22} />

        <div>
          <strong>Live Match Monitoring</strong>
          <p>
            These matches are currently in progress. Review the current round
            and score information.
          </p>
        </div>
      </div>

      {/* MATCHES */}
      <div className={styles.list}>
        {liveMatches.map((match) => (
          <div className={styles.card} key={match.id}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.matchLine}>
                  <span>{match.matchNo}</span>

                  <b>
                    <span className={styles.dot}></span>
                    LIVE
                  </b>
                </div>

                <h2>{match.competition}</h2>

                <p>
                  {match.category} • {match.round}
                </p>
              </div>

              <span className={styles.role}>{match.role}</span>
            </div>

            {/* SCORE */}
            <div className={styles.scoreBox}>
              <div className={styles.athlete}>
                <span>{match.athleteA}</span>
                <strong>{match.scoreA}</strong>
              </div>

              <div className={styles.vs}>VS</div>

              <div className={styles.athlete}>
                <strong>{match.scoreB}</strong>
                <span>{match.athleteB}</span>
              </div>
            </div>

            <div className={styles.details}>
              <div>
                <Clock3 size={17} />
                {match.time}
              </div>

              <div>
                <MapPin size={17} />
                {match.venue}
              </div>

              <div>
                <Users size={17} />
                {match.category}
              </div>
            </div>

            <div className={styles.footer}>
              <span className={styles.round}>{match.round}</span>

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

      {/* IMPORTANT NOTE */}
      <div className={styles.warning}>
        <AlertCircle size={18} />

        <span>
          Match scores shown here are sample frontend data and should later be
          connected to your live match system.
        </span>
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

            <span className={styles.modalLabel}>LIVE MATCH</span>

            <h2>{selectedMatch.competition}</h2>

            <div className={styles.liveScore}>
              <div>
                <span>{selectedMatch.athleteA}</span>
                <strong>{selectedMatch.scoreA}</strong>
              </div>

              <b>VS</b>

              <div>
                <strong>{selectedMatch.scoreB}</strong>
                <span>{selectedMatch.athleteB}</span>
              </div>
            </div>

            <div className={styles.modalDetails}>
              <p>
                <Swords size={16} />
                {selectedMatch.category}
              </p>

              <p>
                <Clock3 size={16} />
                {selectedMatch.time}
              </p>

              <p>
                <MapPin size={16} />
                {selectedMatch.venue}
              </p>

              <p>
                <Users size={16} />
                {selectedMatch.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}