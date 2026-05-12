# Email Password Authentication

> Implementing traditional email and password authentication using Firebase Authentication.

---

# 📚 Table of Contents

- [📌 Overview](#-overview)
- [⚙️ Configuration](#️-configuration)
- [🧪 Authentication Example](#-authentication-example)
- [🔐 Security Considerations](#-security-considerations)
- [🚨 Common Issues](#-common-issues)
- [📖 References](#-references)

---

# 📌 Overview

Email/password authentication is the most common authentication mechanism used in Firebase applications.

---

# ⚙️ Configuration

Enable Email/Password provider:

1. Open Firebase Console
2. Navigate to Authentication
3. Select Sign-in Method
4. Enable Email/Password

---

# 🧪 Authentication Example

```javascript
import { createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
```

---

# 🔐 Security Considerations

> [!WARNING]
> Weak passwords increase account compromise risks.

Best practices:

- Enforce strong passwords
- Enable MFA
- Use HTTPS
- Implement brute-force protection

---

# 🚨 Common Issues

| Issue | Cause |
|---|---|
| Invalid email | Incorrect email format |
| Weak password | Password policy violation |
| Email already exists | Existing user |

---

# 📖 References

- https://firebase.google.com/docs/auth/web/password-auth
- https://firebase.google.com/docs/auth

---

# 🧠 Final Notes

Email/password authentication remains essential for many enterprise applications.