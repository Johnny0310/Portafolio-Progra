# GitHub Authentication

> Integrating GitHub OAuth authentication into Firebase applications.

---

# 📚 Table of Contents

- [📌 Overview](#-overview)
- [⚙️ GitHub OAuth Setup](#️-github-oauth-setup)
- [🧪 Authentication Example](#-authentication-example)
- [🚨 Common Issues](#-common-issues)
- [📖 References](#-references)

---

# 📌 Overview

GitHub Authentication allows users to sign in using GitHub accounts.

---

# ⚙️ GitHub OAuth Setup

1. Create GitHub OAuth App
2. Configure redirect URLs
3. Add Client ID and Secret to Firebase

---

# 🧪 Authentication Example

```javascript
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GithubAuthProvider();

signInWithPopup(auth, provider);
```

---

# 🚨 Common Issues

| Issue | Cause |
|---|---|
| OAuth redirect mismatch | Incorrect callback URL |
| Unauthorized domain | Missing domain configuration |

---

# 📖 References

- https://firebase.google.com/docs/auth/web/github-auth
- https://docs.github.com/en/apps/oauth-apps

---

# 🧠 Final Notes

GitHub Authentication is widely used in developer-focused platforms and SaaS systems.