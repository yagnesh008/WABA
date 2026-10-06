"use client";

import { useState } from "react";
import {
  FileText,
  Upload,
  Search,
  Download,
  Eye,
  Trash2,
  FileCheck2,
  Clock3,
  X,
} from "lucide-react";

import styles from "./Document.module.css";

type DocumentItem = {
  id: number;
  name: string;
  type: string;
  category: string;
  uploadedOn: string;
  status: string;
  size: string;
};

export default function Document() {
  const [search, setSearch] = useState("");
  const [showUpload, setShowUpload] = useState(false);

  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      id: 1,
      name: "WABA Affiliation Certificate.pdf",
      type: "PDF",
      category: "Affiliation",
      uploadedOn: "10 Sep 2026",
      status: "Verified",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Organisation Registration.pdf",
      type: "PDF",
      category: "Registration",
      uploadedOn: "08 Sep 2026",
      status: "Verified",
      size: "1.8 MB",
    },
    {
      id: 3,
      name: "Academy Address Proof.pdf",
      type: "PDF",
      category: "Address Proof",
      uploadedOn: "05 Sep 2026",
      status: "Pending",
      size: "1.2 MB",
    },
    {
      id: 4,
      name: "Tax Registration Certificate.pdf",
      type: "PDF",
      category: "Registration",
      uploadedOn: "02 Sep 2026",
      status: "Verified",
      size: "980 KB",
    },
  ]);

  const [newDocument, setNewDocument] = useState({
    name: "",
    category: "Registration",
    file: "",
  });

  const filteredDocuments = documents.filter((document) =>
    `${document.name} ${document.category} ${document.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleUpload = () => {
    if (!newDocument.name) {
      return;
    }

    const documentItem: DocumentItem = {
      id: Date.now(),
      name: newDocument.name,
      type: "PDF",
      category: newDocument.category,
      uploadedOn: "19 Sep 2026",
      status: "Pending",
      size: "New",
    };

    setDocuments((current) => [
      ...current,
      documentItem,
    ]);

    setNewDocument({
      name: "",
      category: "Registration",
      file: "",
    });

    setShowUpload(false);
  };

  const handleDelete = (id: number) => {
    setDocuments((current) =>
      current.filter((document) => document.id !== id)
    );
  };

  return (
    <main className={styles.documents}>
      {/* PAGE HEADER */}

      <div className={styles.pageHeader}>
        <div className={styles.titleSection}>
          <div className={styles.titleIcon}>
            <FileText size={24} />
          </div>

          <div>
            <h1>Documents</h1>
            <p>
              Manage your organisation registration and official documents.
            </p>
          </div>
        </div>

        <button
          type="button"
          className={styles.uploadButton}
          onClick={() => setShowUpload(true)}
        >
          <Upload size={17} />
          Upload Document
        </button>
      </div>

      {/* STATS */}

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>
            <FileText size={21} />
          </div>

          <div>
            <span>Total Documents</span>
            <strong>{documents.length}</strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>
            <FileCheck2 size={21} />
          </div>

          <div>
            <span>Verified</span>
            <strong>
              {
                documents.filter(
                  (document) =>
                    document.status === "Verified"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>
            <Clock3 size={21} />
          </div>

          <div>
            <span>Pending</span>
            <strong>
              {
                documents.filter(
                  (document) =>
                    document.status === "Pending"
                ).length
              }
            </strong>
          </div>
        </div>
      </section>

      {/* DOCUMENT TABLE */}

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2>Organisation Documents</h2>
            <p>
              View, download and manage your organisation documents.
            </p>
          </div>

          <div className={styles.searchBox}>
            <Search size={17} />

            <input
              type="text"
              placeholder="Search documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Document</th>
                <th>Category</th>
                <th>Uploaded On</th>
                <th>Size</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredDocuments.map((document) => (
                <tr key={document.id}>
                  <td>
                    <div className={styles.documentName}>
                      <div className={styles.fileIcon}>
                        <FileText size={19} />
                      </div>

                      <div>
                        <strong>{document.name}</strong>
                        <span>{document.type} Document</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className={styles.categoryBadge}>
                      {document.category}
                    </span>
                  </td>

                  <td>{document.uploadedOn}</td>

                  <td>{document.size}</td>

                  <td>
                    <span
                      className={
                        document.status === "Verified"
                          ? styles.verifiedBadge
                          : styles.pendingBadge
                      }
                    >
                      <span></span>
                      {document.status}
                    </span>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        type="button"
                        title="View"
                        className={styles.viewAction}
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        title="Download"
                        className={styles.downloadAction}
                      >
                        <Download size={16} />
                      </button>

                      <button
                        type="button"
                        title="Delete"
                        className={styles.deleteAction}
                        onClick={() =>
                          handleDelete(document.id)
                        }
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredDocuments.length === 0 && (
            <div className={styles.emptyState}>
              <FileText size={32} />
              <h3>No documents found</h3>
              <p>Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* UPLOAD MODAL */}

      {showUpload && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div>
                <h2>Upload Document</h2>
                <p>
                  Add an official organisation document.
                </p>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setShowUpload(false)}
              >
                <X size={19} />
              </button>
            </div>

            <div className={styles.form}>
              <div className={styles.formGroup}>
                <label>Document Name</label>

                <input
                  type="text"
                  placeholder="Enter document name"
                  value={newDocument.name}
                  onChange={(e) =>
                    setNewDocument({
                      ...newDocument,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className={styles.formGroup}>
                <label>Category</label>

                <select
                  value={newDocument.category}
                  onChange={(e) =>
                    setNewDocument({
                      ...newDocument,
                      category: e.target.value,
                    })
                  }
                >
                  <option>Registration</option>
                  <option>Affiliation</option>
                  <option>Address Proof</option>
                  <option>Tax Document</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.formGroupFull}>
                <label>Select File</label>

                <div className={styles.fileUpload}>
                  <Upload size={22} />

                  <span>
                    Click to select a document
                  </span>

                  <small>
                    PDF, JPG or PNG files
                  </small>

                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const file =
                        e.target.files?.[0];

                      if (file) {
                        setNewDocument({
                          ...newDocument,
                          file: file.name,
                          name:
                            newDocument.name ||
                            file.name,
                        });
                      }
                    }}
                  />
                </div>

                {newDocument.file && (
                  <p className={styles.selectedFile}>
                    Selected: {newDocument.file}
                  </p>
                )}
              </div>
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => setShowUpload(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className={styles.saveButton}
                onClick={handleUpload}
              >
                <Upload size={16} />
                Upload Document
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}