"use client";

import {
  Building2,
  Map,
  MapPin,
  Users,
  Dumbbell,
  GraduationCap,
  Eye,
} from "lucide-react";

import styles from "./Organisation.module.css";

const organisationData = [
  {
    name: "States",
    count: 28,
    description: "Manage WABA state-level organisations.",
    icon: Map,
    route: "/National/organisations/state",
  },
  {
    name: "Districts",
    count: 78,
    description: "Manage district-level organisations.",
    icon: MapPin,
    route: "/National/organisations/district",
  },
  {
    name: "Mandals",
    count: 164,
    description: "Manage mandal-level organisations.",
    icon: Building2,
    route: "/National/organisations/mandal",
  },
  {
    name: "Clubs",
    count: 96,
    description: "Manage registered boxing clubs.",
    icon: Users,
    route: "/National/organisations/clubs",
  },
  {
    name: "Academies",
    count: 54,
    description: "Manage registered boxing academies.",
    icon: Dumbbell,
    route: "/National/organisations/academies",
  },
];

export default function Organisation() {
  return (
    <main className={styles.organisationPage}>

      {/* Page Header */}
      <div className={styles.pageHeader}>

        <div>
          <h1>Organisations</h1>

          <p>
            Manage WABA organisations across different administrative levels.
          </p>
        </div>

        <div className={styles.headerIcon}>
          <Building2 size={28} />
        </div>

      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>
          <div className={styles.cardIcon}>
            <Map size={21} />
          </div>

          <div>
            <span>States</span>
            <strong>28</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.cardIcon}>
            <MapPin size={21} />
          </div>

          <div>
            <span>Districts</span>
            <strong>78</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.cardIcon}>
            <Building2 size={21} />
          </div>

          <div>
            <span>Mandals</span>
            <strong>164</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.cardIcon}>
            <Users size={21} />
          </div>

          <div>
            <span>Clubs</span>
            <strong>96</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.cardIcon}>
            <Dumbbell size={21} />
          </div>

          <div>
            <span>Academies</span>
            <strong>54</strong>
          </div>
        </div>

      </div>

      {/* Organisation Types */}
      <section className={styles.organisationCard}>

        <div className={styles.cardHeader}>

          <div>
            <h2>Organisation Management</h2>

            <p>
              Select an organisation type to view and manage its information.
            </p>
          </div>

          <span className={styles.totalBadge}>
            420 Organisations
          </span>

        </div>

        <div className={styles.organisationGrid}>

          {organisationData.map((organisation) => {

            const Icon = organisation.icon;

            return (
              <div
                key={organisation.name}
                className={styles.organisationItem}
              >

                <div className={styles.organisationIcon}>
                  <Icon size={26} />
                </div>

                <div className={styles.organisationContent}>

                  <h3>{organisation.name}</h3>

                  <p>{organisation.description}</p>

                  <strong>
                    {organisation.count} Registered
                  </strong>

                </div>

                <button
                  type="button"
                  className={styles.viewButton}
                  title={`View ${organisation.name}`}
                >
                  <Eye size={16} />
                  View
                </button>

              </div>
            );
          })}

        </div>

      </section>

      {/* Organisation Hierarchy */}
      <section className={styles.hierarchyCard}>

        <div className={styles.cardHeader}>

          <div>
            <h2>Organisation Hierarchy</h2>

            <p>
              WABA administrative structure.
            </p>
          </div>

          <GraduationCap size={25} />

        </div>

        <div className={styles.hierarchy}>

          <div className={styles.level}>
            <span>National</span>
          </div>

          <div className={styles.arrow}>↓</div>

          <div className={styles.level}>
            <span>State</span>
          </div>

          <div className={styles.arrow}>↓</div>

          <div className={styles.level}>
            <span>District</span>
          </div>

          <div className={styles.arrow}>↓</div>

          <div className={styles.level}>
            <span>Mandal</span>
          </div>

          <div className={styles.arrow}>↓</div>

          <div className={styles.levelGroup}>

            <div className={styles.level}>
              <span>Club</span>
            </div>

            <div className={styles.level}>
              <span>Academy</span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}