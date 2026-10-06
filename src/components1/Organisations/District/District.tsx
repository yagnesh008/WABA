"use client";

import {
  Search,
  Filter,
  MapPin,
  Eye,
  Edit,
} from "lucide-react";

import styles from "./District.module.css";

const districtsData = [
  {
    id: "DIS001",
    district: "Hyderabad",
    code: "HYD",
    state: "Telangana",
    president: "Rajesh Kumar",
    secretary: "Suresh Reddy",
    contact: "+91 98765 43210",
    mandals: 5,
    athletes: 86,
    status: "Active",
  },
  {
    id: "DIS002",
    district: "Rangareddy",
    code: "RRD",
    state: "Telangana",
    president: "Anil Kumar",
    secretary: "Lakshmi Devi",
    contact: "+91 98765 43211",
    mandals: 10,
    athletes: 72,
    status: "Active",
  },
  {
    id: "DIS003",
    district: "Vijayawada",
    code: "VJA",
    state: "Andhra Pradesh",
    president: "Ravi Kumar",
    secretary: "Priya Sharma",
    contact: "+91 98765 43212",
    mandals: 8,
    athletes: 64,
    status: "Active",
  },
  {
    id: "DIS004",
    district: "Guntur",
    code: "GNT",
    state: "Andhra Pradesh",
    president: "Ramesh Rao",
    secretary: "Kavya Reddy",
    contact: "+91 98765 43213",
    mandals: 9,
    athletes: 58,
    status: "Pending",
  },
  {
    id: "DIS005",
    district: "Bengaluru Urban",
    code: "BLR",
    state: "Karnataka",
    president: "Vijay Sharma",
    secretary: "Meena Devi",
    contact: "+91 98765 43214",
    mandals: 6,
    athletes: 91,
    status: "Active",
  },
];

export default function District() {
  return (
    <main className={styles.districtPage}>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1>District Organisations</h1>
          <p>
            Manage WABA district-level organisations across different states.
          </p>
        </div>

        <div className={styles.headerIcon}>
          <MapPin size={28} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>

        <div className={styles.summaryCard}>
          <span>Total Districts</span>
          <strong>78</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Active Districts</span>
          <strong>72</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Pending</span>
          <strong>6</strong>
        </div>

        <div className={styles.summaryCard}>
          <span>Total Mandals</span>
          <strong>164</strong>
        </div>

      </div>

      {/* District Table */}
      <section className={styles.districtCard}>

        <div className={styles.cardHeader}>
          <div>
            <h2>All District Organisations</h2>
            <p>
              View and manage registered WABA district organisations.
            </p>
          </div>

          <span className={styles.totalBadge}>
            78 Districts
          </span>
        </div>

        {/* Filters */}
        <div className={styles.filters}>

          <div className={styles.searchBox}>
            <Search size={18} />

            <input
              type="text"
              placeholder="Search district..."
            />
          </div>

          <div className={styles.selectBox}>
            <Filter size={16} />

            <select defaultValue="all">
              <option value="all">All States</option>
              <option value="telangana">Telangana</option>
              <option value="andhra">Andhra Pradesh</option>
              <option value="karnataka">Karnataka</option>
            </select>
          </div>

          <div className={styles.selectBox}>
            <Filter size={16} />

            <select defaultValue="all">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
            </select>
          </div>

        </div>

        {/* Table */}
        <div className={styles.tableWrapper}>

          <table className={styles.table}>

            <thead>
              <tr>
                <th>District</th>
                <th>State</th>
                <th>President</th>
                <th>Secretary</th>
                <th>Contact</th>
                <th>Mandals</th>
                <th>Athletes</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {districtsData.map((district) => (

                <tr key={district.id}>

                  {/* District */}
                  <td>
                    <div className={styles.districtInfo}>

                      <div className={styles.districtIcon}>
                        <MapPin size={18} />
                      </div>

                      <div>
                        <strong>{district.district}</strong>

                        <span>
                          {district.code} • {district.id}
                        </span>
                      </div>

                    </div>
                  </td>

                  {/* State */}
                  <td>
                    {district.state}
                  </td>

                  {/* President */}
                  <td>
                    {district.president}
                  </td>

                  {/* Secretary */}
                  <td>
                    {district.secretary}
                  </td>

                  {/* Contact */}
                  <td>
                    {district.contact}
                  </td>

                  {/* Mandals */}
                  <td>
                    <span className={styles.numberBadge}>
                      {district.mandals}
                    </span>
                  </td>

                  {/* Athletes */}
                  <td>
                    <span className={styles.athleteBadge}>
                      {district.athletes}
                    </span>
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={
                        district.status === "Active"
                          ? styles.active
                          : styles.pending
                      }
                    >
                      {district.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td>

                    <div className={styles.actions}>

                      <button
                        type="button"
                        title="View District"
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        title="Edit District"
                      >
                        <Edit size={16} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

    </main>
  );
}