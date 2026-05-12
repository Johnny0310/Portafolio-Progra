# Firestore Queries

> Querying Firestore collections efficiently using filters, ordering, and pagination.

---

# 📚 Table of Contents

- [Firestore Queries](#firestore-queries)
- [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [⚙️ Query Types](#️-query-types)
- [🧪 Query Examples](#-query-examples)
- [📊 Query Limitations](#-query-limitations)
- [✅ Best Practices](#-best-practices)
- [📖 References](#-references)
- [🧠 Final Notes](#-final-notes)

---

# 📌 Overview

Firestore queries retrieve documents from collections using filters and sorting operations.

---

# ⚙️ Query Types

| Query Type | Description |
|---|---|
| where() | Filtering |
| orderBy() | Sorting |
| limit() | Result limiting |
| startAfter() | Pagination |

---

# 🧪 Query Examples

```javascript
const query = db.collection("users")
  .where("role", "==", "admin");
```

---

# 📊 Query Limitations

> [!WARNING]
> Firestore queries require proper indexing.

Common limitations:

- No server-side joins
- Composite index requirements
- Query operator restrictions

---

# ✅ Best Practices

- Use indexes efficiently
- Paginate large datasets
- Avoid unnecessary reads
- Minimize listener usage

---

# 📖 References

- https://firebase.google.com/docs/firestore/query-data/queries
- https://cloud.google.com/firestore/docs/query-data/queries

---

# 🧠 Final Notes

Efficient query design directly impacts scalability and billing costs.