# Firestore Indexes

> Optimizing Firestore query performance using indexes.

---

# 📚 Table of Contents

- [Firestore Indexes](#firestore-indexes)
- [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [⚙️ Index Types](#️-index-types)
- [🧪 Composite Indexes](#-composite-indexes)
- [🚨 Common Issues](#-common-issues)
- [✅ Best Practices](#-best-practices)
- [📖 References](#-references)
- [🧠 Final Notes](#-final-notes)

---

# 📌 Overview

Firestore indexes improve query performance and support advanced filtering operations.

---

# ⚙️ Index Types

| Type | Description |
|---|---|
| Single Field | Default indexing |
| Composite | Multi-field queries |

---

# 🧪 Composite Indexes

Example composite index:

```json
{
  "fields": [
    { "fieldPath": "role", "order": "ASCENDING" },
    { "fieldPath": "createdAt", "order": "DESCENDING" }
  ]
}
```

---

# 🚨 Common Issues

| Issue | Cause |
|---|---|
| Missing index | Query requires composite index |
| Slow query | Poor indexing strategy |

---

# ✅ Best Practices

- Remove unused indexes
- Monitor index growth
- Optimize query patterns

---

# 📖 References

- https://firebase.google.com/docs/firestore/query-data/indexing
- https://cloud.google.com/firestore/docs/query-data/index-overview

---

# 🧠 Final Notes

Proper indexing is essential for scalable Firestore performance.