"use client";

import {
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Shield,
  Trophy,
  Edit,
  Award,
  Building2,
} from "lucide-react";

import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <main className={styles.page}>
      {/* =========================================
          PAGE HEADER
      ========================================= */}
      <div className={styles.pageHeader}>
        <div>
          <h1>My Profile</h1>
          <p>View and manage your athlete profile information.</p>
        </div>

        <button className={styles.editButton}>
          <Edit size={16} />
          Edit Profile
        </button>
      </div>

      {/* =========================================
          PROFILE HERO
      ========================================= */}
      <section className={styles.profileHero}>
        <div className={styles.profileLeft}>
          <div className={styles.avatar}>
            A
          </div>

          <div className={styles.profileMainInfo}>
            <h2>Arjun Kumar</h2>

            <p className={styles.athleteId}>
              Athlete ID: <strong>ATH001</strong>
            </p>

            <div className={styles.badges}>
              <span className={styles.badge}>
                <Trophy size={13} />
                Senior
              </span>

              <span className={styles.badge}>
                WAB-1
              </span>

              <span className={styles.activeBadge}>
                Active
              </span>
            </div>
          </div>
        </div>

        <div className={styles.membershipBox}>
          <span className={styles.membershipLabel}>
            Membership Status
          </span>

          <strong>Active</strong>

          <span className={styles.membershipId}>
            WABA-MEM-2026-001
          </span>
        </div>
      </section>

      {/* =========================================
          BASIC INFORMATION
      ========================================= */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <span className={styles.titleIcon}>
              <User size={18} />
            </span>

            <div>
              <h3>Basic Information</h3>
              <p>Personal details of the athlete</p>
            </div>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <InfoItem
            label="Full Name"
            value="Arjun Kumar"
          />

          <InfoItem
            label="Athlete ID"
            value="ATH001"
          />

          <InfoItem
            label="Date of Birth"
            value="15 August 2000"
            icon={<Calendar size={16} />}
          />

          <InfoItem
            label="Gender"
            value="Male"
          />

          <InfoItem
            label="Category"
            value="Senior"
          />

          <InfoItem
            label="Classification"
            value="WAB-1"
          />
        </div>
      </section>

      {/* =========================================
          CONTACT INFORMATION
      ========================================= */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <span className={styles.titleIcon}>
              <Phone size={18} />
            </span>

            <div>
              <h3>Contact Information</h3>
              <p>Registered contact details</p>
            </div>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <InfoItem
            label="Email Address"
            value="arjun.kumar@example.com"
            icon={<Mail size={16} />}
          />

          <InfoItem
            label="Mobile Number"
            value="+91 98765 43210"
            icon={<Phone size={16} />}
          />

          <InfoItem
            label="Address"
            value="Hyderabad, Telangana"
            icon={<MapPin size={16} />}
          />

          <InfoItem
            label="Country"
            value="India"
          />
        </div>
      </section>

      {/* =========================================
          ORGANISATION INFORMATION
      ========================================= */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <span className={styles.titleIcon}>
              <Building2 size={18} />
            </span>

            <div>
              <h3>Organisation Information</h3>
              <p>Club and association details</p>
            </div>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <InfoItem
            label="Club / Academy"
            value="WABA Hyderabad Club"
          />

          <InfoItem
            label="State"
            value="Telangana"
          />

          <InfoItem
            label="District"
            value="Hyderabad"
          />

          <InfoItem
            label="Coach"
            value="Rajesh Kumar"
          />
        </div>
      </section>

      {/* =========================================
          MEMBERSHIP INFORMATION
      ========================================= */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <span className={styles.titleIcon}>
              <Shield size={18} />
            </span>

            <div>
              <h3>Membership Information</h3>
              <p>Current WABA membership details</p>
            </div>
          </div>

          <span className={styles.activeBadge}>
            Active
          </span>
        </div>

        <div className={styles.membershipGrid}>
          <div className={styles.membershipItem}>
            <span>Membership Number</span>
            <strong>WABA-MEM-2026-001</strong>
          </div>

          <div className={styles.membershipItem}>
            <span>Membership Type</span>
            <strong>Athlete</strong>
          </div>

          <div className={styles.membershipItem}>
            <span>Start Date</span>
            <strong>18 Sep 2026</strong>
          </div>

          <div className={styles.membershipItem}>
            <span>Expiry Date</span>
            <strong>17 Sep 2027</strong>
          </div>
        </div>
      </section>

      {/* =========================================
          ACHIEVEMENT SUMMARY
      ========================================= */}
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <span className={styles.titleIcon}>
              <Award size={18} />
            </span>

            <div>
              <h3>Achievement Summary</h3>
              <p>Career achievements and performance</p>
            </div>
          </div>
        </div>

        <div className={styles.achievementGrid}>
          <AchievementItem
            value="8"
            label="Competitions"
          />

          <AchievementItem
            value="24"
            label="Matches"
          />

          <AchievementItem
            value="7"
            label="Medals"
          />

          <AchievementItem
            value="6"
            label="Certificates"
          />
        </div>
      </section>
    </main>
  );
}

/* =========================================
   INFO ITEM
========================================= */

function InfoItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className={styles.infoItem}>
      <span className={styles.infoLabel}>
        {icon}
        {label}
      </span>

      <strong className={styles.infoValue}>
        {value}
      </strong>
    </div>
  );
}

/* =========================================
   ACHIEVEMENT ITEM
========================================= */

function AchievementItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className={styles.achievementItem}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}