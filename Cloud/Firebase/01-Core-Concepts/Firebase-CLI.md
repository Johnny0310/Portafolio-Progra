# Firebase CLI

> Managing Firebase projects, deployments, and environments using the Firebase Command Line Interface.

---

# 📚 Table of Contents

- [📌 Overview](#-overview)
- [⚙️ Installation](#️-installation)
- [🔐 Authentication](#-authentication)
- [🚀 Common Commands](#-common-commands)
- [🧪 Deployment Examples](#-deployment-examples)
- [🚨 Common Issues](#-common-issues)
- [📖 References](#-references)

---

# 📌 Overview

Firebase CLI allows developers to manage Firebase projects from the terminal.

The CLI supports:

- Deployments
- Authentication
- Hosting
- Functions
- Firestore
- Local emulators

---

# ⚙️ Installation

## Install Node.js

```bash
node -v
```

## Install Firebase CLI

```bash
npm install -g firebase-tools
```

---

# 🔐 Authentication

Login to Firebase:

```bash
firebase login
```

List projects:

```bash
firebase projects:list
```

---

# 🚀 Common Commands

| Command | Description |
|---|---|
| firebase init | Initialize Firebase |
| firebase deploy | Deploy services |
| firebase emulators:start | Start local emulators |
| firebase login | Authenticate CLI |
| firebase logout | Logout |

---

# 🧪 Deployment Examples

Deploy hosting:

```bash
firebase deploy --only hosting
```

Deploy functions:

```bash
firebase deploy --only functions
```

---

# 🚨 Common Issues

> [!WARNING]
> Authentication problems are common during CLI setup.

## Common Problems

| Issue | Cause |
|---|---|
| Permission denied | Incorrect project access |
| Deployment failure | Invalid configuration |
| Authentication expired | Login session expired |

---

# 📖 References

- https://firebase.google.com/docs/cli
- https://firebase.google.com/docs/hosting
- https://firebase.google.com/docs/functions

---

# 🧠 Final Notes

Firebase CLI is essential for managing deployments and local Firebase development workflows.