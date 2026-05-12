# Firestore Triggers

> Automating backend workflows using Firestore database events.

---

# 📚 Table of Contents

- [Firestore Triggers](#firestore-triggers)
- [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [⚙️ Trigger Types](#️-trigger-types)
- [🧪 Trigger Example](#-trigger-example)
- [⚠️ Common Risks](#️-common-risks)
- [📖 References](#-references)
- [🧠 Final Notes](#-final-notes)

---

# 📌 Overview

Firestore triggers automatically execute backend logic when database events occur.

---

# ⚙️ Trigger Types

| Trigger | Description |
|---|---|
| onCreate | New document |
| onUpdate | Document changes |
| onDelete | Document removal |
| onWrite | Any write operation |

---

# 🧪 Trigger Example

```javascript
exports.userCreated = functions.firestore
  .document("users/{userId}")
  .onCreate((snap, context) => {
    console.log("User created");
  });
```

---

# ⚠️ Common Risks

> [!WARNING]
> Recursive writes may create infinite execution loops.

Recommendations:

- Prevent recursive updates
- Validate payloads
- Monitor execution logs

---

# 📖 References

- https://firebase.google.com/docs/functions/firestore-events
- https://cloud.google.com/functions/docs

---

# 🧠 Final Notes

Firestore triggers enable powerful event-driven backend automation systems.