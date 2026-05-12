# Google Authentication

> Implementing Google OAuth authentication using Firebase Authentication.

---

# 📚 Table of Contents

- [📌 Overview](#-overview)
- [⚙️ Configuration](#️-configuration)
- [🧪 OAuth Example](#-oauth-example)
- [🔐 Security Notes](#-security-notes)
- [📖 References](#-references)

---

# 📌 Overview

Firebase supports Google OAuth authentication natively.

---

# ⚙️ Configuration

Enable Google provider in Firebase Console.

---

# 🧪 OAuth Example

```javascript
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider);
```

---

# 🔐 Security Notes

> [!IMPORTANT]
> OAuth reduces password management complexity.

Advantages:

- Secure login flow
- Trusted identity provider
- Reduced password exposure

---

# 📖 References

- https://firebase.google.com/docs/auth/web/google-signin
- https://developers.google.com/identity

---

# 🧠 Final Notes

Google OAuth is one of the most commonly used Firebase authentication providers.