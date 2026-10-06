"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Award,
  BriefcaseBusiness,
  Pencil,
  CheckCircle2,
  Clock3,
  FileText,
  Trophy,
} from "lucide-react";

import styles from "./Profile.module.css";

export default function Profile() {
  const [editing, setEditing] = useState(false);

  return (
    <main className={styles.page}>

      {/* ==========================================
          PAGE HEADER
      ========================================== */}

      <section className={styles.pageHeader}>
        <div>
          <span className={styles.pageLabel}>
            TECHNICAL OFFICIAL
          </span>

          <h1>My Profile</h1>

          <p>
            View and manage your technical official
            profile and professional information.
          </p>
        </div>

        <button
          className={styles.editButton}
          onClick={() => setEditing(!editing)}
        >
          <Pencil size={16} />

          {editing ? "Cancel Editing" : "Edit Profile"}
        </button>
      </section>


      {/* ==========================================
          PROFILE HERO
      ========================================== */}

      <section className={styles.profileHero}>

        <div className={styles.profileMain}>

          <div className={styles.avatar}>
            T
          </div>

          <div className={styles.profileIdentity}>

            <h2>Technical Official</h2>

            <p className={styles.role}>
              WABA Technical Official
            </p>

            <div className={styles.identityMeta}>

              <span>
                <ShieldCheck size={14} />
                TEC001
              </span>

              <span>
                <MapPin size={14} />
                Telangana
              </span>

              <span>
                <CheckCircle2 size={14} />
                Verified
              </span>

            </div>

          </div>

        </div>

        <div className={styles.activeBadge}>
          <span></span>
          Active
        </div>

      </section>


      {/* ==========================================
          PROFILE STATS
      ========================================== */}

      <section className={styles.statsGrid}>

        <div className={styles.statCard}>
          <div className={styles.statIconOrange}>
            <TrophyIcon />
          </div>

          <div>
            <strong>12</strong>
            <span>Competitions</span>
          </div>
        </div>


        <div className={styles.statCard}>
          <div className={styles.statIconBlue}>
            <BriefcaseBusiness size={20} />
          </div>

          <div>
            <strong>48</strong>
            <span>Matches Officiated</span>
          </div>
        </div>


        <div className={styles.statCard}>
          <div className={styles.statIconGreen}>
            <Award size={20} />
          </div>

          <div>
            <strong>4</strong>
            <span>Qualifications</span>
          </div>
        </div>


        <div className={styles.statCard}>
          <div className={styles.statIconPurple}>
            <Clock3 size={20} />
          </div>

          <div>
            <strong>6</strong>
            <span>Years Experience</span>
          </div>
        </div>

      </section>


      {/* ==========================================
          MAIN PROFILE GRID
      ========================================== */}

      <section className={styles.contentGrid}>

        {/* ========================================
            PERSONAL INFORMATION
        ======================================== */}

        <div className={styles.card}>

          <div className={styles.cardHeader}>
            <div>
              <h2>Personal Information</h2>

              <p>
                Your basic personal details
              </p>
            </div>

            <div className={styles.headerIcon}>
              <User size={18} />
            </div>
          </div>


          <div className={styles.formGrid}>

            <div className={styles.infoField}>
              <label>Full Name</label>

              {editing ? (
                <input
                  type="text"
                  defaultValue="Technical Official"
                />
              ) : (
                <div className={styles.infoValue}>
                  Technical Official
                </div>
              )}
            </div>


            <div className={styles.infoField}>
              <label>Technical ID</label>

              <div className={styles.infoValue}>
                TEC001
              </div>
            </div>


            <div className={styles.infoField}>
              <label>Email Address</label>

              {editing ? (
                <input
                  type="email"
                  defaultValue="technical@example.com"
                />
              ) : (
                <div className={styles.infoValue}>
                  <Mail size={15} />
                  technical@example.com
                </div>
              )}
            </div>


            <div className={styles.infoField}>
              <label>Phone Number</label>

              {editing ? (
                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                />
              ) : (
                <div className={styles.infoValue}>
                  <Phone size={15} />
                  +91 98765 43210
                </div>
              )}
            </div>


            <div className={styles.infoField}>
              <label>Date of Birth</label>

              <div className={styles.infoValue}>
                <CalendarDays size={15} />
                15 June 1992
              </div>
            </div>


            <div className={styles.infoField}>
              <label>Gender</label>

              <div className={styles.infoValue}>
                Male
              </div>
            </div>


            <div className={styles.infoFieldFull}>
              <label>Address</label>

              {editing ? (
                <textarea
                  defaultValue="Hyderabad, Telangana, India"
                  rows={3}
                />
              ) : (
                <div className={styles.infoValue}>
                  <MapPin size={15} />
                  Hyderabad, Telangana, India
                </div>
              )}
            </div>

          </div>

        </div>


        {/* ========================================
            OFFICIAL INFORMATION
        ======================================== */}

        <div className={styles.card}>

          <div className={styles.cardHeader}>
            <div>
              <h2>Official Information</h2>

              <p>
                Technical role and verification
              </p>
            </div>

            <div className={styles.headerIcon}>
              <ShieldCheck size={18} />
            </div>
          </div>


          <div className={styles.detailsList}>

            <div className={styles.detailRow}>
              <span>Official Type</span>
              <strong>Technical Official</strong>
            </div>

            <div className={styles.detailRow}>
              <span>Role</span>
              <strong>Referee / Judge</strong>
            </div>

            <div className={styles.detailRow}>
              <span>Technical ID</span>
              <strong>TEC001</strong>
            </div>

            <div className={styles.detailRow}>
              <span>State</span>
              <strong>Telangana</strong>
            </div>

            <div className={styles.detailRow}>
              <span>Experience</span>
              <strong>6 Years</strong>
            </div>

            <div className={styles.detailRow}>
              <span>Status</span>

              <span className={styles.verifiedStatus}>
                <CheckCircle2 size={14} />
                Verified
              </span>
            </div>

            <div className={styles.detailRow}>
              <span>Joined WABA</span>
              <strong>18 September 2020</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          QUALIFICATIONS
      ========================================== */}

      <section className={styles.card}>

        <div className={styles.cardHeader}>

          <div>
            <h2>Qualifications & Certifications</h2>

            <p>
              Your approved technical qualifications
            </p>
          </div>

          <Award size={19} className={styles.titleIcon} />

        </div>


        <div className={styles.qualificationGrid}>

          <div className={styles.qualificationCard}>

            <div className={styles.qualificationIcon}>
              <Award size={20} />
            </div>

            <div className={styles.qualificationContent}>

              <h3>
                WABA Technical Official Level 1
              </h3>

              <p>
                WABA Technical Certification
              </p>

              <span>
                Issued: 12 March 2021
              </span>

            </div>

            <div className={styles.verified}>
              <CheckCircle2 size={14} />
              Verified
            </div>

          </div>


          <div className={styles.qualificationCard}>

            <div className={styles.qualificationIconBlue}>
              <FileText size={20} />
            </div>

            <div className={styles.qualificationContent}>

              <h3>
                Referee Certification
              </h3>

              <p>
                WABA Referee Certification
              </p>

              <span>
                Issued: 20 June 2022
              </span>

            </div>

            <div className={styles.verified}>
              <CheckCircle2 size={14} />
              Verified
            </div>

          </div>


          <div className={styles.qualificationCard}>

            <div className={styles.qualificationIconGreen}>
              <ShieldCheck size={20} />
            </div>

            <div className={styles.qualificationContent}>

              <h3>
                Classification Certification
              </h3>

              <p>
                Athlete Classification Official
              </p>

              <span>
                Issued: 08 January 2024
              </span>

            </div>

            <div className={styles.verified}>
              <CheckCircle2 size={14} />
              Verified
            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          OFFICIATING ROLES
      ========================================== */}

      <section className={styles.bottomGrid}>

        <div className={styles.card}>

          <div className={styles.cardHeader}>

            <div>
              <h2>Authorized Roles</h2>

              <p>
                Roles you are currently approved for
              </p>
            </div>

          </div>


          <div className={styles.roles}>

            <span className={styles.roleTag}>
              Referee
            </span>

            <span className={styles.roleTag}>
              Judge
            </span>

            <span className={styles.roleTag}>
              Classifier
            </span>

          </div>

        </div>


        <div className={styles.card}>

          <div className={styles.cardHeader}>

            <div>
              <h2>Account Status</h2>

              <p>
                Current account verification
              </p>
            </div>

          </div>


          <div className={styles.accountStatus}>

            <div className={styles.largeCheck}>
              <CheckCircle2 size={25} />
            </div>

            <div>
              <strong>Account Verified</strong>

              <span>
                Your technical official account is
                active and verified.
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          SAVE BUTTON
      ========================================== */}

      {editing && (
        <div className={styles.saveBar}>

          <button
            className={styles.cancelButton}
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>

          <button
            className={styles.saveButton}
            onClick={() => setEditing(false)}
          >
            <CheckCircle2 size={16} />
            Save Changes
          </button>

        </div>
      )}

    </main>
  );
}


/* ==========================================
   SMALL TROPHY ICON
========================================== */

function TrophyIcon() {
  return (
    <Trophy size={20} />
  );
}