"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  Search,
  Filter,
  Eye,
  UserPlus,
  UserCheck,
  Edit,
  Trash2,
  LogIn,
  ShieldCheck,
  FileText,
  Clock,
} from "lucide-react";

import styles from "./Audit.module.css";

type AuditLog = {
  id: string;
  date: string;
  time: string;
  user: string;
  role: string;
  action: string;
  module: string;
  description: string;
  ipAddress: string;
  status: string;
};

const auditLogs: AuditLog[] = [
  {
    id: "LOG001",
    date: "18 Sep 2026",
    time: "10:15 AM",
    user: "Rajesh Kumar",
    role: "Super Admin",
    action: "Login",
    module: "Authentication",
    description: "Admin logged into the National Admin Portal",
    ipAddress: "192.168.1.10",
    status: "Success",
  },
  {
    id: "LOG002",
    date: "18 Sep 2026",
    time: "10:05 AM",
    user: "Rajesh Kumar",
    role: "Super Admin",
    action: "Create",
    module: "Users",
    description: "Created a new athlete account",
    ipAddress: "192.168.1.10",
    status: "Success",
  },
  {
    id: "LOG003",
    date: "18 Sep 2026",
    time: "09:52 AM",
    user: "Suresh Reddy",
    role: "National Admin",
    action: "Update",
    module: "Athletes",
    description: "Updated athlete membership information",
    ipAddress: "192.168.1.15",
    status: "Success",
  },
  {
    id: "LOG004",
    date: "17 Sep 2026",
    time: "05:40 PM",
    user: "Anil Kumar",
    role: "Technical Admin",
    action: "Approve",
    module: "Officials",
    description: "Approved official verification documents",
    ipAddress: "192.168.1.22",
    status: "Success",
  },
  {
    id: "LOG005",
    date: "17 Sep 2026",
    time: "04:25 PM",
    user: "Rajesh Kumar",
    role: "Super Admin",
    action: "Update",
    module: "Organisations",
    description: "Updated State organisation information",
    ipAddress: "192.168.1.10",
    status: "Success",
  },
  {
    id: "LOG006",
    date: "17 Sep 2026",
    time: "03:15 PM",
    user: "Priya Sharma",
    role: "Committee Admin",
    action: "Create",
    module: "Committee",
    description: "Created a new committee member record",
    ipAddress: "192.168.1.30",
    status: "Success",
  },
  {
    id: "LOG007",
    date: "17 Sep 2026",
    time: "02:45 PM",
    user: "Rajesh Kumar",
    role: "Super Admin",
    action: "Delete",
    module: "Users",
    description: "Deleted an inactive user account",
    ipAddress: "192.168.1.10",
    status: "Success",
  },
  {
    id: "LOG008",
    date: "16 Sep 2026",
    time: "06:20 PM",
    user: "Vijay Sharma",
    role: "Disciplinary Admin",
    action: "Update",
    module: "Disciplinary",
    description: "Updated disciplinary case status",
    ipAddress: "192.168.1.35",
    status: "Success",
  },
  {
    id: "LOG009",
    date: "16 Sep 2026",
    time: "04:50 PM",
    user: "Suresh Reddy",
    role: "National Admin",
    action: "Create",
    module: "Competition",
    description: "Created a new competition record",
    ipAddress: "192.168.1.15",
    status: "Success",
  },
  {
    id: "LOG010",
    date: "16 Sep 2026",
    time: "03:35 PM",
    user: "Anil Kumar",
    role: "Technical Admin",
    action: "Approve",
    module: "Classification",
    description: "Approved athlete classification record",
    ipAddress: "192.168.1.22",
    status: "Success",
  },
  {
    id: "LOG011",
    date: "16 Sep 2026",
    time: "01:20 PM",
    user: "Rajesh Kumar",
    role: "Super Admin",
    action: "Login",
    module: "Authentication",
    description: "Admin logged into the National Admin Portal",
    ipAddress: "192.168.1.10",
    status: "Success",
  },
  {
    id: "LOG012",
    date: "15 Sep 2026",
    time: "11:45 AM",
    user: "Kavya Reddy",
    role: "Finance Admin",
    action: "Update",
    module: "Finance",
    description: "Updated payment transaction information",
    ipAddress: "192.168.1.40",
    status: "Success",
  },
];

const actionIcons: Record<string, React.ElementType> = {
  Login: LogIn,
  Create: UserPlus,
  Update: Edit,
  Delete: Trash2,
  Approve: UserCheck,
};

export default function AuditLogs() {
  const [search, setSearch] = useState("");
  const [actionFilter, setActionFilter] = useState("All");
  const [moduleFilter, setModuleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredLogs = useMemo(() => {
    return auditLogs.filter((log) => {
      const searchMatch =
        log.id.toLowerCase().includes(search.toLowerCase()) ||
        log.user.toLowerCase().includes(search.toLowerCase()) ||
        log.description.toLowerCase().includes(search.toLowerCase()) ||
        log.module.toLowerCase().includes(search.toLowerCase());

      const actionMatch =
        actionFilter === "All" || log.action === actionFilter;

      const moduleMatch =
        moduleFilter === "All" || log.module === moduleFilter;

      const statusMatch =
        statusFilter === "All" || log.status === statusFilter;

      return searchMatch && actionMatch && moduleMatch && statusMatch;
    });
  }, [search, actionFilter, moduleFilter, statusFilter]);

  const totalLogs = auditLogs.length;

  const successfulLogs = auditLogs.filter(
    (log) => log.status === "Success"
  ).length;

  const todayLogs = auditLogs.filter(
    (log) => log.date === "18 Sep 2026"
  ).length;

  const adminActions = auditLogs.filter(
    (log) => log.action !== "Login"
  ).length;

  return (
    <main className={styles.auditPage}>
      {/* Page Header */}

      <div className={styles.pageHeader}>
        <div>
          <div className={styles.titleRow}>
            <div className={styles.titleIcon}>
              <Activity size={27} />
            </div>

            <div>
              <h1>Audit Logs</h1>
              <p>
                Monitor and track administrative activities across the WABA
                National Admin Portal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}

      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.blue}`}>
            <Activity size={23} />
          </div>

          <div>
            <span>Total Logs</span>
            <h2>{totalLogs}</h2>
            <small>Recorded activities</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.green}`}>
            <ShieldCheck size={23} />
          </div>

          <div>
            <span>Successful Actions</span>
            <h2>{successfulLogs}</h2>
            <small>Completed successfully</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.orange}`}>
            <Clock size={23} />
          </div>

          <div>
            <span>Today's Activity</span>
            <h2>{todayLogs}</h2>
            <small>Activities today</small>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={`${styles.summaryIcon} ${styles.purple}`}>
            <FileText size={23} />
          </div>

          <div>
            <span>Admin Actions</span>
            <h2>{adminActions}</h2>
            <small>Non-login activities</small>
          </div>
        </div>
      </div>

      {/* Activity Overview */}

      <section className={styles.overviewCard}>
        <div className={styles.overviewHeader}>
          <div>
            <h2>Activity Overview</h2>
            <p>Recent administrative activity across system modules.</p>
          </div>

          <Activity size={24} />
        </div>

        <div className={styles.overviewItems}>
          <div className={styles.overviewItem}>
            <span>Users</span>
            <strong>3</strong>
          </div>

          <div className={styles.overviewItem}>
            <span>Athletes</span>
            <strong>1</strong>
          </div>

          <div className={styles.overviewItem}>
            <span>Officials</span>
            <strong>1</strong>
          </div>

          <div className={styles.overviewItem}>
            <span>Competition</span>
            <strong>1</strong>
          </div>

          <div className={styles.overviewItem}>
            <span>Finance</span>
            <strong>1</strong>
          </div>

          <div className={styles.overviewItem}>
            <span>Other Modules</span>
            <strong>5</strong>
          </div>
        </div>
      </section>

      {/* Logs Table */}

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>System Activity Logs</h2>
            <p>
              Complete record of administrative actions and system activity.
            </p>
          </div>
        </div>

        {/* Filters */}

        <div className={styles.filterArea}>
          <div className={styles.searchBox}>
            <Search size={17} />

            <input
              type="text"
              placeholder="Search user, log ID, module..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.filterBox}>
            <Filter size={16} />

            <select
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
            >
              <option value="All">All Actions</option>
              <option value="Login">Login</option>
              <option value="Create">Create</option>
              <option value="Update">Update</option>
              <option value="Delete">Delete</option>
              <option value="Approve">Approve</option>
            </select>
          </div>

          <select
            className={styles.selectFilter}
            value={moduleFilter}
            onChange={(e) => setModuleFilter(e.target.value)}
          >
            <option value="All">All Modules</option>
            <option value="Authentication">Authentication</option>
            <option value="Users">Users</option>
            <option value="Athletes">Athletes</option>
            <option value="Officials">Officials</option>
            <option value="Organisations">Organisations</option>
            <option value="Committee">Committee</option>
            <option value="Disciplinary">Disciplinary</option>
            <option value="Competition">Competition</option>
            <option value="Classification">Classification</option>
            <option value="Finance">Finance</option>
          </select>

          <select
            className={styles.selectFilter}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Success">Success</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        {/* Table */}

        <div className={styles.tableWrapper}>
          <table className={styles.logsTable}>
            <thead>
              <tr>
                <th className={styles.tableHeading}>Log ID</th>
                <th className={styles.tableHeading}>Date & Time</th>
                <th className={styles.tableHeading}>User</th>
                <th className={styles.tableHeading}>Role</th>
                <th className={styles.tableHeading}>Action</th>
                <th className={styles.tableHeading}>Module</th>
                <th className={styles.tableHeading}>Description</th>
                <th className={styles.tableHeading}>IP Address</th>
                <th className={styles.tableHeading}>Status</th>
                <th className={styles.tableHeading}>View</th>
              </tr>
            </thead>

            <tbody>
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => {
                  const ActionIcon =
                    actionIcons[log.action] || Activity;

                  return (
                    <tr key={log.id}>
                      <td className={styles.tableCell}>
                        <strong>{log.id}</strong>
                      </td>

                      <td className={styles.tableCell}>
                        <div className={styles.dateTime}>
                          <span>{log.date}</span>
                          <small>{log.time}</small>
                        </div>
                      </td>

                      <td className={styles.tableCell}>
                        <div className={styles.userInfo}>
                          <div className={styles.avatar}>
                            {log.user.charAt(0)}
                          </div>

                          <span>{log.user}</span>
                        </div>
                      </td>

                      <td className={styles.tableCell}>
                        {log.role}
                      </td>

                      <td className={styles.tableCell}>
                        <span
                          className={`${styles.actionBadge} ${
                            styles[
                              log.action.toLowerCase()
                            ]
                          }`}
                        >
                          <ActionIcon size={13} />
                          {log.action}
                        </span>
                      </td>

                      <td className={styles.tableCell}>
                        <span className={styles.moduleBadge}>
                          {log.module}
                        </span>
                      </td>

                      <td className={styles.tableCell}>
                        <span className={styles.description}>
                          {log.description}
                        </span>
                      </td>

                      <td className={styles.tableCell}>
                        <span className={styles.ipAddress}>
                          {log.ipAddress}
                        </span>
                      </td>

                      <td className={styles.tableCell}>
                        <span className={styles.successBadge}>
                          {log.status}
                        </span>
                      </td>

                      <td className={styles.tableCell}>
                        <button
                          className={styles.viewButton}
                          title="View log details"
                        >
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={10}
                    className={styles.noResults}
                  >
                    No audit logs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.resultCount}>
          Showing{" "}
          <strong>{filteredLogs.length}</strong> of{" "}
          <strong>{auditLogs.length}</strong> audit logs
        </div>
      </section>
    </main>
  );
}