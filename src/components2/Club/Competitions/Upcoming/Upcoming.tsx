"use client";

import { useState } from "react";

import {
  CalendarDays,
  Trophy,
  MapPin,
  Users,
  Clock3,
  Eye,
  Search,
  X,
  Award,
  CheckCircle2,
} from "lucide-react";

import styles from "./Upcoming.module.css";

type UpcomingCompetition = {
  id: string;
  name: string;
  level: "National" | "Zone" | "State" | "District";
  startDate: string;
  endDate: string;
  venue: string;
  city: string;
  athletes: number;
  categories: number;
  status: "Registered" | "Confirmed" | "Upcoming";
  daysLeft: number;
};

const competitions: UpcomingCompetition[] = [
  {
    id: "COMP001",
    name: "National Adaptive Boxing Championship",
    level: "National",
    startDate: "20 Oct 2026",
    endDate: "22 Oct 2026",
    venue: "Gachibowli Indoor Stadium",
    city: "Hyderabad",
    athletes: 6,
    categories: 8,
    status: "Registered",
    daysLeft: 32,
  },
  {
    id: "COMP002",
    name: "South Zone Boxing Championship",
    level: "Zone",
    startDate: "05 Nov 2026",
    endDate: "07 Nov 2026",
    venue: "Kanteerava Indoor Stadium",
    city: "Bengaluru",
    athletes: 4,
    categories: 6,
    status: "Confirmed",
    daysLeft: 48,
  },
  {
    id: "COMP003",
    name: "State Adaptive Boxing Championship",
    level: "State",
    startDate: "18 Nov 2026",
    endDate: "20 Nov 2026",
    venue: "Port Stadium",
    city: "Visakhapatnam",
    athletes: 5,
    categories: 7,
    status: "Registered",
    daysLeft: 61,
  },
  {
    id: "COMP005",
    name: "South India Adaptive Boxing Open",
    level: "Zone",
    startDate: "10 Dec 2026",
    endDate: "12 Dec 2026",
    venue: "Nehru Indoor Stadium",
    city: "Chennai",
    athletes: 2,
    categories: 9,
    status: "Confirmed",
    daysLeft: 83,
  },
  {
    id: "COMP007",
    name: "National Adaptive Boxing Games",
    level: "National",
    startDate: "15 Jan 2027",
    endDate: "18 Jan 2027",
    venue: "Indira Gandhi Indoor Stadium",
    city: "New Delhi",
    athletes: 3,
    categories: 10,
    status: "Upcoming",
    daysLeft: 119,
  },
];

export default function Upcoming() {
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("All");

  const [selectedCompetition, setSelectedCompetition] =
    useState<UpcomingCompetition | null>(null);

  const filteredCompetitions = competitions.filter(
    (competition) => {
      const searchMatch =
        competition.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        competition.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        competition.city
          .toLowerCase()
          .includes(search.toLowerCase());

      const levelMatch =
        levelFilter === "All" ||
        competition.level === levelFilter;

      return searchMatch && levelMatch;
    }
  );

  const registeredCount = competitions.filter(
    (item) => item.status === "Registered"
  ).length;

  const confirmedCount = competitions.filter(
    (item) => item.status === "Confirmed"
  ).length;

  const totalAthletes = competitions.reduce(
    (total, item) => total + item.athletes,
    0
  );

  const totalCategories = competitions.reduce(
    (total, item) => total + item.categories,
    0
  );

  return (
    <main className={styles.main}>
      {/* HEADER */}
      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <CalendarDays size={25} />
          </div>

          <div>
            <h1>Upcoming Competitions</h1>

            <p>
              View upcoming competitions, venues, schedules and registered
              athletes.
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
            <span>Upcoming Events</span>
            <strong>{competitions.length}</strong>
            <small>Scheduled competitions</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <CheckCircle2 size={22} />
          </div>

          <div>
            <span>Registered</span>
            <strong>{registeredCount}</strong>
            <small>Club registrations</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Users size={22} />
          </div>

          <div>
            <span>Athlete Entries</span>
            <strong>{totalAthletes}</strong>
            <small>Total athlete entries</small>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>
            <Award size={22} />
          </div>

          <div>
            <span>Categories</span>
            <strong>{totalCategories}</strong>
            <small>Competition categories</small>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className={styles.filterCard}>
        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Search competition or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className={styles.select}
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
        >
          <option value="All">All Levels</option>
          <option value="National">National</option>
          <option value="Zone">Zone</option>
          <option value="State">State</option>
          <option value="District">District</option>
        </select>
      </section>

      {/* UPCOMING LIST */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Upcoming Events</h2>

            <p>
              {filteredCompetitions.length} upcoming competitions
            </p>
          </div>
        </div>

        <div className={styles.timeline}>
          {filteredCompetitions.map((competition) => (
            <div
              key={competition.id}
              className={styles.eventCard}
            >
              {/* DATE */}
              <div className={styles.dateColumn}>
                <div className={styles.dateBox}>
                  <CalendarDays size={22} />

                  <strong>
                    {competition.startDate.split(" ")[0]}
                  </strong>

                  <span>
                    {competition.startDate.split(" ")[1]}
                  </span>
                </div>

                <div className={styles.timelineLine} />
              </div>

              {/* EVENT */}
              <div className={styles.eventContent}>
                <div className={styles.eventTop}>
                  <div>
                    <span className={styles.eventId}>
                      {competition.id}
                    </span>

                    <h3>{competition.name}</h3>
                  </div>

                  <span
                    className={`${styles.statusBadge} ${
                      competition.status === "Registered"
                        ? styles.registered
                        : competition.status === "Confirmed"
                        ? styles.confirmed
                        : styles.upcoming
                    }`}
                  >
                    {competition.status}
                  </span>
                </div>

                <div className={styles.levelRow}>
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

                <div className={styles.detailsGrid}>
                  <div>
                    <CalendarDays size={16} />

                    <div>
                      <span>Date</span>
                      <strong>
                        {competition.startDate} -{" "}
                        {competition.endDate}
                      </strong>
                    </div>
                  </div>

                  <div>
                    <MapPin size={16} />

                    <div>
                      <span>Venue</span>
                      <strong>
                        {competition.venue}, {competition.city}
                      </strong>
                    </div>
                  </div>

                  <div>
                    <Users size={16} />

                    <div>
                      <span>Athletes</span>
                      <strong>
                        {competition.athletes} Registered
                      </strong>
                    </div>
                  </div>

                  <div>
                    <Award size={16} />

                    <div>
                      <span>Categories</span>
                      <strong>
                        {competition.categories} Categories
                      </strong>
                    </div>
                  </div>
                </div>

                <div className={styles.eventFooter}>
                  <div className={styles.daysLeft}>
                    <Clock3 size={15} />

                    <span>
                      <strong>{competition.daysLeft}</strong>{" "}
                      days remaining
                    </span>
                  </div>

                  <button
                    type="button"
                    className={styles.viewButton}
                    onClick={() =>
                      setSelectedCompetition(competition)
                    }
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCompetitions.length === 0 && (
          <div className={styles.emptyState}>
            <CalendarDays size={42} />

            <h3>No upcoming competitions</h3>

            <p>
              Try changing your search or level filter.
            </p>
          </div>
        )}
      </section>

      {/* DETAILS MODAL */}
      {selectedCompetition && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <span>Competition Details</span>

                <h2>{selectedCompetition.name}</h2>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() =>
                  setSelectedCompetition(null)
                }
              >
                <X size={19} />
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalBanner}>
                <div className={styles.modalIcon}>
                  <Trophy size={28} />
                </div>

                <div>
                  <span>{selectedCompetition.id}</span>

                  <h3>
                    {selectedCompetition.level} Level
                  </h3>
                </div>
              </div>

              <div className={styles.modalGrid}>
                <div>
                  <CalendarDays size={17} />

                  <div>
                    <span>Competition Date</span>
                    <strong>
                      {selectedCompetition.startDate} -{" "}
                      {selectedCompetition.endDate}
                    </strong>
                  </div>
                </div>

                <div>
                  <MapPin size={17} />

                  <div>
                    <span>Venue</span>
                    <strong>
                      {selectedCompetition.venue},{" "}
                      {selectedCompetition.city}
                    </strong>
                  </div>
                </div>

                <div>
                  <Users size={17} />

                  <div>
                    <span>Athletes</span>
                    <strong>
                      {selectedCompetition.athletes} Registered
                    </strong>
                  </div>
                </div>

                <div>
                  <Award size={17} />

                  <div>
                    <span>Categories</span>
                    <strong>
                      {selectedCompetition.categories}
                    </strong>
                  </div>
                </div>
              </div>

              <div className={styles.confirmationBox}>
                <CheckCircle2 size={18} />

                <div>
                  <strong>
                    {selectedCompetition.status}
                  </strong>

                  <p>
                    Your organisation has competition
                    information available in the portal.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.closeModalButton}
                onClick={() =>
                  setSelectedCompetition(null)
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}