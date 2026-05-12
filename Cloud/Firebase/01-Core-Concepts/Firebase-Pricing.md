# Firebase Pricing

> Understanding Firebase pricing models, billing structure, and cost optimization strategies.

---

# 📚 Table of Contents

- [📌 Overview](#-overview)
- [💰 Firebase Plans](#-firebase-plans)
- [📊 Billable Services](#-billable-services)
- [⚠️ Cost Risks](#️-cost-risks)
- [✅ Cost Optimization](#-cost-optimization)
- [📖 References](#-references)

---

# 📌 Overview

Firebase pricing depends on service usage, bandwidth, storage, and database operations.

---

# 💰 Firebase Plans

| Plan | Description |
|---|---|
| Spark | Free tier |
| Blaze | Pay-as-you-go |

---

# 📊 Billable Services

| Service | Billing Metric |
|---|---|
| Firestore | Reads/Writes |
| Storage | GB stored |
| Functions | Invocations |
| Hosting | Bandwidth |

---

# ⚠️ Cost Risks

> [!WARNING]
> Poor query optimization can generate high Firestore costs.

Common cost issues:

- Excessive reads
- Large file storage
- Infinite listeners
- Poor indexing

---

# ✅ Cost Optimization

> [!TIP]
> Always monitor Firestore reads and bandwidth usage.

Best practices:

- Optimize queries
- Use pagination
- Remove unused listeners
- Compress files
- Enable monitoring alerts

---

# 📖 References

- https://firebase.google.com/pricing
- https://firebase.google.com/docs/firestore/pricing
- https://cloud.google.com/pricing

---

# 🧠 Final Notes

Understanding Firebase pricing early helps avoid unexpected production costs.