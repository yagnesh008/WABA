"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ShieldCheck,
  Edit3,
  Save,
  X,
  Briefcase,
  Award,
  Users,
} from "lucide-react";

import styles from "./Profile.module.css";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Rajesh",
    lastName: "Kumar",
    email: "rajesh.kumar@waba.org",
    phone: "+91 98765 43210",
    designation: "Committee Member",
    committee: "WABA National Committee",
    location: "Hyderabad, Telangana, India",
    joiningDate: "15 January 2025",
    memberId: "COM-001",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <main className={styles.main}>

      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.breadcrumb}>
            WABA / Committee / Profile
          </p>

          <h1>My Profile</h1>

          <p className={styles.subtitle}>
            View and manage your committee profile information.
          </p>
        </div>

        {!isEditing ? (
          <button
            className={styles.editButton}
            onClick={() => setIsEditing(true)}
          >
            <Edit3 size={17} />
            Edit Profile
          </button>
        ) : (
          <div className={styles.actionButtons}>
            <button
              className={styles.cancelButton}
              onClick={() => setIsEditing(false)}
            >
              <X size={17} />
              Cancel
            </button>

            <button
              className={styles.saveButton}
              onClick={handleSave}
            >
              <Save size={17} />
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* PROFILE HERO */}
      <section className={styles.profileHero}>
        <div className={styles.avatar}>
          <span>
            {profile.firstName.charAt(0)}
            {profile.lastName.charAt(0)}
          </span>
        </div>

        <div className={styles.profileMainInfo}>
          <h2>
            {profile.firstName} {profile.lastName}
          </h2>

          <p>{profile.designation}</p>

          <div className={styles.heroDetails}>
            <span>
              <Mail size={15} />
              {profile.email}
            </span>

            <span>
              <MapPin size={15} />
              {profile.location}
            </span>
          </div>
        </div>

        <div className={styles.statusBadge}>
          <span></span>
          Active Member
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section className={styles.summaryGrid}>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <ShieldCheck size={22} />
          </div>

          <div>
            <span>Member ID</span>
            <strong>{profile.memberId}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Users size={22} />
          </div>

          <div>
            <span>Committee</span>
            <strong>National Committee</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <CalendarDays size={22} />
          </div>

          <div>
            <span>Joined WABA</span>
            <strong>{profile.joiningDate}</strong>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <Award size={22} />
          </div>

          <div>
            <span>Role</span>
            <strong>Committee Member</strong>
          </div>
        </div>

      </section>

      {/* MAIN PROFILE CONTENT */}
      <section className={styles.contentGrid}>

        {/* PERSONAL INFORMATION */}
        <div className={styles.card}>

          <div className={styles.cardHeader}>
            <div>
              <h3>Personal Information</h3>
              <p>Your basic personal details</p>
            </div>

            <User size={21} />
          </div>

          <div className={styles.formGrid}>

            <div className={styles.formGroup}>
              <label>First Name</label>

              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                />
              ) : (
                <div className={styles.valueBox}>
                  {profile.firstName}
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label>Last Name</label>

              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                />
              ) : (
                <div className={styles.valueBox}>
                  {profile.lastName}
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label>Email Address</label>

              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <div className={styles.valueBox}>
                  {profile.email}
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label>Phone Number</label>

              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              ) : (
                <div className={styles.valueBox}>
                  {profile.phone}
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label>Location</label>

              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                />
              ) : (
                <div className={styles.valueBox}>
                  {profile.location}
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label>Designation</label>

              {isEditing ? (
                <input
                  type="text"
                  name="designation"
                  value={profile.designation}
                  onChange={handleChange}
                />
              ) : (
                <div className={styles.valueBox}>
                  {profile.designation}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* COMMITTEE INFORMATION */}
        <div className={styles.card}>

          <div className={styles.cardHeader}>
            <div>
              <h3>Committee Information</h3>
              <p>Your WABA committee details</p>
            </div>

            <Briefcase size={21} />
          </div>

          <div className={styles.infoList}>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <Users size={18} />
              </div>

              <div>
                <span>Committee</span>
                <strong>
                  {profile.committee}
                </strong>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <Award size={18} />
              </div>

              <div>
                <span>Position</span>
                <strong>
                  {profile.designation}
                </strong>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <ShieldCheck size={18} />
              </div>

              <div>
                <span>Member ID</span>
                <strong>
                  {profile.memberId}
                </strong>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <CalendarDays size={18} />
              </div>

              <div>
                <span>Joining Date</span>
                <strong>
                  {profile.joiningDate}
                </strong>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* CONTACT INFORMATION */}
      <section className={styles.contactCard}>

        <div className={styles.contactHeader}>
          <div>
            <h3>Contact Information</h3>
            <p>Registered contact details</p>
          </div>

          <Phone size={22} />
        </div>

        <div className={styles.contactGrid}>

          <div className={styles.contactItem}>
            <Mail size={20} />

            <div>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </div>
          </div>

          <div className={styles.contactItem}>
            <Phone size={20} />

            <div>
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </div>
          </div>

          <div className={styles.contactItem}>
            <MapPin size={20} />

            <div>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}