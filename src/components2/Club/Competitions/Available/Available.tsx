"use client";

import { useState } from "react";

import {
  Trophy,
  Search,
  MapPin,
  CalendarDays,
  Clock,
  Users,
  Award,
  Eye,
  UserPlus,
  X,
  CheckCircle2,
} from "lucide-react";

import styles from "./Available.module.css";

type Competition = {
  id: string;
  name: string;
  level: "National" | "Zone" | "State" | "District";
  startDate: string;
  endDate: string;
  venue: string;
  city: string;
  registrationDeadline: string;
  categories: number;
  registeredAthletes: number;
  maxAthletes: number;
  status: "Open" | "Closing Soon";
};

const initialCompetitions: Competition[] = [
  {
    id: "COMP001",
    name: "National Adaptive Boxing Championship",
    level: "National",
    startDate: "20 Oct 2026",
    endDate: "22 Oct 2026",
    venue: "Gachibowli Indoor Stadium",
    city: "Hyderabad",
    registrationDeadline: "30 Sep 2026",
    categories: 8,
    registeredAthletes: 4,
    maxAthletes: 20,
    status: "Open",
  },
  {
    id: "COMP002",
    name: "South Zone Boxing Championship",
    level: "Zone",
    startDate: "05 Nov 2026",
    endDate: "07 Nov 2026",
    venue: "Kanteerava Indoor Stadium",
    city: "Bengaluru",
    registrationDeadline: "15 Oct 2026",
    categories: 6,
    registeredAthletes: 3,
    maxAthletes: 15,
    status: "Open",
  },
  {
    id: "COMP003",
    name: "State Adaptive Boxing Championship",
    level: "State",
    startDate: "18 Nov 2026",
    endDate: "20 Nov 2026",
    venue: "Port Stadium",
    city: "Visakhapatnam",
    registrationDeadline: "28 Oct 2026",
    categories: 7,
    registeredAthletes: 5,
    maxAthletes: 18,
    status: "Open",
  },
  {
    id: "COMP004",
    name: "Telangana Adaptive Boxing Meet",
    level: "State",
    startDate: "28 Sep 2026",
    endDate: "29 Sep 2026",
    venue: "LB Stadium",
    city: "Hyderabad",
    registrationDeadline: "20 Sep 2026",
    categories: 5,
    registeredAthletes: 8,
    maxAthletes: 12,
    status: "Closing Soon",
  },
  {
    id: "COMP005",
    name: "South India Adaptive Boxing Open",
    level: "Zone",
    startDate: "10 Dec 2026",
    endDate: "12 Dec 2026",
    venue: "Nehru Indoor Stadium",
    city: "Chennai",
    registrationDeadline: "20 Nov 2026",
    categories: 9,
    registeredAthletes: 2,
    maxAthletes: 20,
    status: "Open",
  },
  {
    id: "COMP006",
    name: "District Adaptive Boxing Championship",
    level: "District",
    startDate: "15 Oct 2026",
    endDate: "16 Oct 2026",
    venue: "Sports Complex",
    city: "Warangal",
    registrationDeadline: "05 Oct 2026",
    categories: 4,
    registeredAthletes: 6,
    maxAthletes: 12,
    status: "Open",
  },
];

export default function Available() {
  const [competitions, setCompetitions] =
    useState<Competition[]>(initialCompetitions);

  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [selectedCompetition, setSelectedCompetition] =
    useState<Competition | null>(null);

  const filteredCompetitions = competitions.filter((competition) => {
    const searchMatch =
      competition.name.toLowerCase().includes(search.toLowerCase()) ||
      competition.id.toLowerCase().includes(search.toLowerCase()) ||
      competition.city.toLowerCase().includes(search.toLowerCase());

    const levelMatch =
      levelFilter === "All" || competition.level === levelFilter;

    const statusMatch =
      statusFilter === "All" || competition.status === statusFilter;

    return searchMatch && levelMatch && statusMatch;
  });

  const openRegistration = (competition: Competition) => {
    setSelectedCompetition(competition);
  };

  const closeRegistration = () => {
    setSelectedCompetition(null);
  };

  const confirmRegistration = () => {
    if (!selectedCompetition) return;

    setCompetitions((current) =>
      current.map((competition) =>
        competition.id === selectedCompetition.id
          ? {
              ...competition,
              registeredAthletes: competition.registeredAthletes + 1,
            }
          : competition
      )
    );

    setSelectedCompetition(null);

    alert(
      `Registration request submitted for ${selectedCompetition.name}.`
    );
  };

  const totalAvailable = competitions.length;

  const openCount = competitions.filter(
    (competition) => competition.status === "Open"
  ).length;

  const closingSoonCount = competitions.filter(
    (competition) => competition.status === "Closing Soon"
  ).length;

  const totalCategories = competitions.reduce(
    (total, competition) => total + competition.categories,
    0
  );

  return (
    <main className={styles.main}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <Trophy size={25} />
          </div>

          <div>
            <h1>Available Competitions</h1>
            <p>
              View competitions currently open for registration and register
              your athletes.
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Trophy size={22} />
          </div>

          <div>
            <span>Total Available</span>
            <strong>{totalAvailable}</strong>
            <small>Competitions</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Registration Open</span>
            <strong>{openCount}</strong>
            <small>Open competitions</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.red}`}>
            <Clock size={22} />
          </div>

          <div>
            <span>Closing Soon</span>
            <strong>{closingSoonCount}</strong>
            <small>Register soon</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Award size={22} />
          </div>

          <div>
            <span>Total Categories</span>
            <strong>{totalCategories}</strong>
            <small>Across competitions</small>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search competition, ID or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
          className={styles.select}
        >
          <option value="All">All Levels</option>
          <option value="National">National</option>
          <option value="Zone">Zone</option>
          <option value="State">State</option>
          <option value="District">District</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className={styles.select}
        >
          <option value="All">All Status</option>
          <option value="Open">Open</option>
          <option value="Closing Soon">Closing Soon</option>
        </select>
      </section>

      {/* COMPETITION LIST */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Competitions</h2>
            <p>
              {filteredCompetitions.length} competitions available for
              registration.
            </p>
          </div>
        </div>

        {filteredCompetitions.length === 0 ? (
          <div className={styles.emptyState}>
            <Trophy size={42} />
            <h3>No competitions found</h3>
            <p>
              Try changing your search or filter options.
            </p>
          </div>
        ) : (
          <div className={styles.competitionGrid}>
            {filteredCompetitions.map((competition) => (
              <div
                key={competition.id}
                className={styles.competitionCard}
              >
                {/* CARD TOP */}
                <div className={styles.cardTop}>
                  <div className={styles.competitionIcon}>
                    <Trophy size={24} />
                  </div>

                  <span
                    className={
                      competition.status === "Open"
                        ? styles.openBadge
                        : styles.closingBadge
                    }
                  >
                    {competition.status}
                  </span>
                </div>

                {/* TITLE */}
                <div className={styles.cardTitle}>
                  <span className={styles.competitionId}>
                    {competition.id}
                  </span>

                  <h3>{competition.name}</h3>

                  <span
                    className={`${styles.levelBadge} ${
                      competition.level === "National"
                        ? styles.national
                        : competition.level === "Zone"
                        ? styles.zone
                        : competition.level === "State"
                        ? styles.state
                        : styles.district
                    }`}
                  >
                    {competition.level} Level
                  </span>
                </div>

                {/* DETAILS */}
                <div className={styles.detailsList}>
                  <div>
                    <CalendarDays size={16} />
                    <span>
                      {competition.startDate} - {competition.endDate}
                    </span>
                  </div>

                  <div>
                    <MapPin size={16} />
                    <span>
                      {competition.venue}, {competition.city}
                    </span>
                  </div>

                  <div>
                    <Clock size={16} />
                    <span>
                      Registration closes:{" "}
                      <strong>{competition.registrationDeadline}</strong>
                    </span>
                  </div>

                  <div>
                    <Users size={16} />
                    <span>
                      {competition.registeredAthletes}/
                      {competition.maxAthletes} athletes registered
                    </span>
                  </div>
                </div>

                {/* PROGRESS */}
                <div className={styles.progressSection}>
                  <div className={styles.progressHeader}>
                    <span>Registration Capacity</span>

                    <strong>
                      {Math.round(
                        (competition.registeredAthletes /
                          competition.maxAthletes) *
                          100
                      )}
                      %
                    </strong>
                  </div>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressBar}
                      style={{
                        width: `${
                          (competition.registeredAthletes /
                            competition.maxAthletes) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className={styles.cardFooter}>
                  <div className={styles.categoryInfo}>
                    <Award size={16} />
                    <span>
                      {competition.categories} Categories
                    </span>
                  </div>

                  <div className={styles.actionButtons}>
                    <button
                      type="button"
                      className={styles.viewButton}
                      onClick={() =>
                        alert(
                          `Competition: ${competition.name}\nVenue: ${competition.venue}, ${competition.city}\nDates: ${competition.startDate} - ${competition.endDate}`
                        )
                      }
                    >
                      <Eye size={16} />
                      View
                    </button>

                    <button
                      type="button"
                      className={styles.registerButton}
                      onClick={() =>
                        openRegistration(competition)
                      }
                    >
                      <UserPlus size={16} />
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* REGISTRATION MODAL */}
      {selectedCompetition && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <span>Competition Registration</span>
                <h2>{selectedCompetition.name}</h2>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={closeRegistration}
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalInfo}>
                <div>
                  <CalendarDays size={18} />
                  <span>
                    {selectedCompetition.startDate} -{" "}
                    {selectedCompetition.endDate}
                  </span>
                </div>

                <div>
                  <MapPin size={18} />
                  <span>
                    {selectedCompetition.venue},{" "}
                    {selectedCompetition.city}
                  </span>
                </div>

                <div>
                  <Users size={18} />
                  <span>
                    {selectedCompetition.registeredAthletes} athletes
                    already registered
                  </span>
                </div>
              </div>

              <div className={styles.warningBox}>
                <strong>Registration Notice</strong>

                <p>
                  You are requesting registration for your organisation.
                  Athlete selection and final registration details can be
                  completed from the Registrations section.
                </p>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={closeRegistration}
              >
                Cancel
              </button>

              <button
                type="button"
                className={styles.confirmButton}
                onClick={confirmRegistration}
              >
                <CheckCircle2 size={17} />
                Confirm Registration
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}