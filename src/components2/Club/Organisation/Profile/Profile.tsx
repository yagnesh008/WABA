"use client";

import { useState } from "react";
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  Globe,
  User,
  CalendarDays,
  Edit3,
  Save,
  X,
} from "lucide-react";

import styles from "./Profile.module.css";

export default function Profile() {
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    organisationName: "WABA Boxing Academy",
    organisationType: "Boxing Academy",
    registrationNumber: "WABA-ACA-2026-001",
    establishedYear: "2022",
    email: "info@wabaacademy.org",
    phone: "+91 98765 43210",
    website: "www.wabaacademy.org",
    address: "Plot No. 25, Jubilee Hills",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    pincode: "500033",
    contactPerson: "Rajesh Kumar",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <main className={styles.profile}>
      {/* =================================
          PAGE HEADER
      ================================= */}

      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <Building2 size={24} />
          </div>

          <div>
            <h1>Organisation Profile</h1>
            <p>
              View and manage your club or academy information.
            </p>
          </div>
        </div>

        {!editing ? (
          <button
            type="button"
            className={styles.editButton}
            onClick={() => setEditing(true)}
          >
            <Edit3 size={17} />
            Edit Profile
          </button>
        ) : (
          <div className={styles.actionButtons}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={handleCancel}
            >
              <X size={17} />
              Cancel
            </button>

            <button
              type="button"
              className={styles.saveButton}
              onClick={handleSave}
            >
              <Save size={17} />
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* =================================
          ORGANISATION SUMMARY
      ================================= */}

      <section className={styles.summaryCard}>
        <div className={styles.logoBox}>
          <Building2 size={38} />
        </div>

        <div className={styles.summaryInfo}>
          <h2>{formData.organisationName}</h2>

          <p>{formData.organisationType}</p>

          <div className={styles.summaryLocation}>
            <MapPin size={15} />
            {formData.city}, {formData.state}, {formData.country}
          </div>
        </div>

        <div className={styles.activeStatus}>
          <span></span>
          Active Organisation
        </div>
      </section>

      {/* =================================
          BASIC INFORMATION
      ================================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.headerIcon}>
            <Building2 size={19} />
          </div>

          <div>
            <h2>Basic Information</h2>
            <p>General details about your organisation.</p>
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Organisation Name</label>

            {editing ? (
              <input
                type="text"
                name="organisationName"
                value={formData.organisationName}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>
                {formData.organisationName}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Organisation Type</label>

            {editing ? (
              <select
                name="organisationType"
                value={formData.organisationType}
                onChange={handleChange}
              >
                <option>Boxing Academy</option>
                <option>Boxing Club</option>
                <option>Training Centre</option>
                <option>Sports Academy</option>
              </select>
            ) : (
              <div className={styles.value}>
                {formData.organisationType}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Registration Number</label>

            {editing ? (
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>
                {formData.registrationNumber}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Established Year</label>

            {editing ? (
              <input
                type="text"
                name="establishedYear"
                value={formData.establishedYear}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>
                <CalendarDays size={16} />
                {formData.establishedYear}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Contact Person</label>

            {editing ? (
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>
                <User size={16} />
                {formData.contactPerson}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =================================
          CONTACT INFORMATION
      ================================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.headerIcon}>
            <Mail size={19} />
          </div>

          <div>
            <h2>Contact Information</h2>
            <p>Contact details for your organisation.</p>
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>Email Address</label>

            {editing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>
                <Mail size={16} />
                {formData.email}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>

            {editing ? (
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>
                <Phone size={16} />
                {formData.phone}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Website</label>

            {editing ? (
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>
                <Globe size={16} />
                {formData.website}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =================================
          ADDRESS
      ================================= */}

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.headerIcon}>
            <MapPin size={19} />
          </div>

          <div>
            <h2>Address</h2>
            <p>Registered address of your organisation.</p>
          </div>
        </div>

        <div className={styles.formGrid}>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label>Address</label>

            {editing ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>
                <MapPin size={16} />
                {formData.address}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>City</label>

            {editing ? (
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>{formData.city}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>State</label>

            {editing ? (
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>{formData.state}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Country</label>

            {editing ? (
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>{formData.country}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>PIN Code</label>

            {editing ? (
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
            ) : (
              <div className={styles.value}>{formData.pincode}</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}