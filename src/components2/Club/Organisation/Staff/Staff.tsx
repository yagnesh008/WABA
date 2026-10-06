"use client";

import { useState } from "react";
import {
  Users,
  UserPlus,
  Search,
  Mail,
  Phone,
  ShieldCheck,
  Edit3,
  Trash2,
  X,
} from "lucide-react";

import styles from "./Staff.module.css";

type StaffMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  status: string;
};

export default function Staff() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [staffList, setStaffList] = useState<StaffMember[]>([
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Head Coach",
      email: "rajesh@wabaacademy.org",
      phone: "+91 98765 43210",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Reddy",
      role: "Assistant Coach",
      email: "priya@wabaacademy.org",
      phone: "+91 98765 12345",
      status: "Active",
    },
    {
      id: 3,
      name: "Suresh Babu",
      role: "Technical Official",
      email: "suresh@wabaacademy.org",
      phone: "+91 98654 32109",
      status: "Active",
    },
    {
      id: 4,
      name: "Anjali Rao",
      role: "Administration",
      email: "anjali@wabaacademy.org",
      phone: "+91 98567 65432",
      status: "Inactive",
    },
  ]);

  const [newStaff, setNewStaff] = useState({
    name: "",
    role: "Head Coach",
    email: "",
    phone: "",
  });

  const filteredStaff = staffList.filter((staff) =>
    `${staff.name} ${staff.role} ${staff.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleAddStaff = () => {
    if (!newStaff.name || !newStaff.email) {
      return;
    }

    const staff: StaffMember = {
      id: Date.now(),
      name: newStaff.name,
      role: newStaff.role,
      email: newStaff.email,
      phone: newStaff.phone,
      status: "Active",
    };

    setStaffList((current) => [...current, staff]);

    setNewStaff({
      name: "",
      role: "Head Coach",
      email: "",
      phone: "",
    });

    setShowModal(false);
  };

  const handleDelete = (id: number) => {
    setStaffList((current) =>
      current.filter((staff) => staff.id !== id)
    );
  };

  return (
    <main className={styles.staff}>
      {/* PAGE HEADER */}

      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <Users size={24} />
          </div>

          <div>
            <h1>Staff</h1>
            <p>
              Manage coaches, officials and staff members of your
              organisation.
            </p>
          </div>
        </div>

        <button
          type="button"
          className={styles.addButton}
          onClick={() => setShowModal(true)}
        >
          <UserPlus size={17} />
          Add Staff
        </button>
      </div>

      {/* SUMMARY CARDS */}

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Total Staff</span>
            <strong>{staffList.length}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <ShieldCheck size={21} />
          </div>

          <div>
            <span>Active Staff</span>
            <strong>
              {staffList.filter(
                (staff) => staff.status === "Active"
              ).length}
            </strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Users size={21} />
          </div>

          <div>
            <span>Coaching Staff</span>
            <strong>
              {
                staffList.filter(
                  (staff) =>
                    staff.role.includes("Coach")
                ).length
              }
            </strong>
          </div>
        </div>
      </section>

      {/* STAFF TABLE */}

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Organisation Staff</h2>
            <p>View and manage your organisation staff members.</p>
          </div>

          <div className={styles.searchBox}>
            <Search size={17} />

            <input
              type="text"
              placeholder="Search staff..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Staff Member</th>
                <th>Role</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStaff.map((staff) => (
                <tr key={staff.id}>
                  <td>
                    <div className={styles.staffMember}>
                      <div className={styles.avatar}>
                        {staff.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{staff.name}</strong>
                        <span>ID: STAFF-{staff.id}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className={styles.roleBadge}>
                      {staff.role}
                    </span>
                  </td>

                  <td>
                    <div className={styles.contact}>
                      <span>
                        <Mail size={14} />
                        {staff.email}
                      </span>

                      <span>
                        <Phone size={14} />
                        {staff.phone}
                      </span>
                    </div>
                  </td>

                  <td>
                    <span
                      className={
                        staff.status === "Active"
                          ? styles.activeBadge
                          : styles.inactiveBadge
                      }
                    >
                      <span></span>
                      {staff.status}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        type="button"
                        title="Edit"
                        className={styles.editAction}
                      >
                        <Edit3 size={16} />
                      </button>

                      <button
                        type="button"
                        title="Delete"
                        className={styles.deleteAction}
                        onClick={() => handleDelete(staff.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredStaff.length === 0 && (
            <div className={styles.emptyState}>
              <Users size={32} />
              <h3>No staff found</h3>
              <p>Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* ADD STAFF MODAL */}

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <h2>Add Staff Member</h2>
                <p>Add a new staff member to your organisation.</p>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setShowModal(false)}
              >
                <X size={19} />
              </button>
            </div>

            <div className={styles.form}>
              <div className={styles.formGroup}>
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  value={newStaff.name}
                  onChange={(e) =>
                    setNewStaff({
                      ...newStaff,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <label>Role</label>

                <select
                  value={newStaff.role}
                  onChange={(e) =>
                    setNewStaff({
                      ...newStaff,
                      role: e.target.value,
                    })
                  }
                >
                  <option>Head Coach</option>
                  <option>Assistant Coach</option>
                  <option>Technical Official</option>
                  <option>Administration</option>
                  <option>Support Staff</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter email address"
                  value={newStaff.email}
                  onChange={(e) =>
                    setNewStaff({
                      ...newStaff,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <label>Phone</label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={newStaff.phone}
                  onChange={(e) =>
                    setNewStaff({
                      ...newStaff,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className={styles.saveButton}
                onClick={handleAddStaff}
              >
                <UserPlus size={16} />
                Add Staff
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}