"use client";

import { useState } from "react";
import {
  Trophy,
  CalendarDays,
  MapPin,
  Users,
  FileText,
  Phone,
  Mail,
  Save,
  Plus,
} from "lucide-react";

import styles from "./Create.module.css";

export default function Create() {
  const [formData, setFormData] = useState({
    competitionName: "",
    competitionType: "",
    competitionLevel: "",
    state: "",
    district: "",
    venue: "",
    startDate: "",
    endDate: "",
    registrationStart: "",
    registrationEnd: "",
    maxParticipants: "",
    ageCategory: "",
    weightCategory: "",
    organizer: "",
    contactNumber: "",
    email: "",
    description: "",
    banner: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      banner: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Competition Created:", formData);

    alert("Competition created successfully!");

    setFormData({
      competitionName: "",
      competitionType: "",
      competitionLevel: "",
      state: "",
      district: "",
      venue: "",
      startDate: "",
      endDate: "",
      registrationStart: "",
      registrationEnd: "",
      maxParticipants: "",
      ageCategory: "",
      weightCategory: "",
      organizer: "",
      contactNumber: "",
      email: "",
      description: "",
      banner: null,
    });
  };

  const handleSaveDraft = () => {
    console.log("Competition Draft:", formData);
    alert("Competition saved as draft.");
  };

  return (
    <main className={styles.createCompetitionPage}>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.titleRow}>
            <div className={styles.titleIcon}>
              <Trophy size={24} />
            </div>

            <div>
              <h1>Create Competition</h1>
              <p>
                Create and configure a new WABA boxing competition.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={styles.headerButton}
          onClick={handleSaveDraft}
        >
          <Save size={17} />
          Save Draft
        </button>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        {/* COMPETITION INFORMATION */}
        <section className={styles.formCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <Trophy size={20} />
            </div>

            <div>
              <h2>Competition Information</h2>
              <p>Enter the basic information about the competition.</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>
                Competition Name <span>*</span>
              </label>

              <input
                type="text"
                name="competitionName"
                placeholder="Enter competition name"
                value={formData.competitionName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Competition Type <span>*</span>
              </label>

              <select
                name="competitionType"
                value={formData.competitionType}
                onChange={handleChange}
                required
              >
                <option value="">Select competition type</option>
                <option value="National Championship">
                  National Championship
                </option>
                <option value="State Championship">
                  State Championship
                </option>
                <option value="District Championship">
                  District Championship
                </option>
                <option value="Open Championship">
                  Open Championship
                </option>
                <option value="Invitation Tournament">
                  Invitation Tournament
                </option>
                <option value="Friendly Tournament">
                  Friendly Tournament
                </option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>
                Competition Level <span>*</span>
              </label>

              <select
                name="competitionLevel"
                value={formData.competitionLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select level</option>
                <option value="National">National</option>
                <option value="State">State</option>
                <option value="District">District</option>
                <option value="Open">Open</option>
              </select>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className={styles.formCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <MapPin size={20} />
            </div>

            <div>
              <h2>Competition Location</h2>
              <p>Specify where the competition will be conducted.</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>
                State <span>*</span>
              </label>

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Select state</option>
                <option value="Telangana">Telangana</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>
                District <span>*</span>
              </label>

              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
              >
                <option value="">Select district</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Rangareddy">Rangareddy</option>
                <option value="Vijayawada">Vijayawada</option>
                <option value="Guntur">Guntur</option>
                <option value="Bengaluru Urban">
                  Bengaluru Urban
                </option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>
                Venue <span>*</span>
              </label>

              <input
                type="text"
                name="venue"
                placeholder="Enter venue name"
                value={formData.venue}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        {/* DATES */}
        <section className={styles.formCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <CalendarDays size={20} />
            </div>

            <div>
              <h2>Competition Dates</h2>
              <p>Set the competition and registration dates.</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>
                Start Date <span>*</span>
              </label>

              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                End Date <span>*</span>
              </label>

              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Registration Start Date <span>*</span>
              </label>

              <input
                type="date"
                name="registrationStart"
                value={formData.registrationStart}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Registration End Date <span>*</span>
              </label>

              <input
                type="date"
                name="registrationEnd"
                value={formData.registrationEnd}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        {/* PARTICIPANT DETAILS */}
        <section className={styles.formCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <Users size={20} />
            </div>

            <div>
              <h2>Participant Details</h2>
              <p>Define participant and boxing category information.</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Maximum Participants</label>

              <input
                type="number"
                name="maxParticipants"
                placeholder="Enter maximum participants"
                min="1"
                value={formData.maxParticipants}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Age Category <span>*</span>
              </label>

              <select
                name="ageCategory"
                value={formData.ageCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select age category</option>
                <option value="Junior">Junior</option>
                <option value="Youth">Youth</option>
                <option value="Senior">Senior</option>
                <option value="Masters">Masters</option>
                <option value="Open">Open</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>
                Weight Category <span>*</span>
              </label>

              <select
                name="weightCategory"
                value={formData.weightCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select weight category</option>
                <option value="Up to 48 KG">Up to 48 KG</option>
                <option value="Up to 51 KG">Up to 51 KG</option>
                <option value="Up to 54 KG">Up to 54 KG</option>
                <option value="Up to 57 KG">Up to 57 KG</option>
                <option value="Up to 60 KG">Up to 60 KG</option>
                <option value="Up to 63 KG">Up to 63 KG</option>
                <option value="Up to 67 KG">Up to 67 KG</option>
                <option value="Up to 71 KG">Up to 71 KG</option>
                <option value="Up to 75 KG">Up to 75 KG</option>
              </select>
            </div>
          </div>
        </section>

        {/* ORGANIZER DETAILS */}
        <section className={styles.formCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <Phone size={20} />
            </div>

            <div>
              <h2>Organizer Details</h2>
              <p>Enter the contact details of the organizer.</p>
            </div>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>
                Organizer Name <span>*</span>
              </label>

              <input
                type="text"
                name="organizer"
                placeholder="Enter organizer name"
                value={formData.organizer}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Contact Number <span>*</span>
              </label>

              <input
                type="tel"
                name="contactNumber"
                placeholder="+91 XXXXX XXXXX"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Email Address <span>*</span>
              </label>

              <div className={styles.inputWithIcon}>
                <Mail size={17} />

                <input
                  type="email"
                  name="email"
                  placeholder="organizer@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </section>

        {/* DESCRIPTION & DOCUMENT */}
        <section className={styles.formCard}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>
              <FileText size={20} />
            </div>

            <div>
              <h2>Additional Information</h2>
              <p>Add competition description and banner.</p>
            </div>
          </div>

          <div className={styles.fullWidth}>
            <div className={styles.formGroup}>
              <label>Competition Description</label>

              <textarea
                name="description"
                placeholder="Enter competition description..."
                rows={5}
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.fullWidth}>
            <div className={styles.formGroup}>
              <label>Competition Banner / Image</label>

              <div className={styles.fileBox}>
                <Plus size={20} />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />

                <span>
                  {formData.banner
                    ? formData.banner.name
                    : "Choose competition banner"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIONS */}
        <div className={styles.formActions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={handleSaveDraft}
          >
            <Save size={17} />
            Save Draft
          </button>

          <button type="submit" className={styles.createButton}>
            <Trophy size={17} />
            Create Competition
          </button>
        </div>
      </form>
    </main>
  );
}