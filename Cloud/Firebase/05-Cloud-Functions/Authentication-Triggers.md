# Authentication Triggers

> Automating backend processes based on Firebase Authentication events.

---

# 📚 Table of Contents

- [Authentication Triggers](#authentication-triggers)
- [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [⚙️ Trigger Events](#️-trigger-events)
- [🧪 Example](#-example)
- [✅ Common Use Cases](#-common-use-cases)
- [📖 References](#-references)
- [🧠 Final Notes](#-final-notes)

---

# 📌 Overview

Authentication triggers respond automatically to identity-related events.

---

# ⚙️ Trigger Events

| Event | Description |
|---|---|
| onCreate | User account creation |
| onDelete | User deletion |

---

# 🧪 Example

```javascript
exports.newUser = functions.auth.user().onCreate((user) => {
  console.log(user.email);
});
```

---

# ✅ Common Use Cases

- Welcome emails
- User provisioning
- Audit logging
- Role assignment

---

# 📖 References

- https://firebase.google.com/docs/functions/auth-events
- https://firebase.google.com/docs/auth

---

# 🧠 Final Notes

Authentication triggers help automate identity lifecycle management workflows.