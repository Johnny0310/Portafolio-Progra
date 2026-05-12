# Firebase Environment Setup

> Installing and configuring Firebase development environments for production-ready workflows.

---

# 📚 Table of Contents

- [Firebase Environment Setup](#firebase-environment-setup)
- [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [⚙️ Requirements](#️-requirements)
- [🚀 Installation](#-installation)
  - [Install Node.js](#install-nodejs)
  - [Install Firebase CLI](#install-firebase-cli)
- [🔐 Authentication Setup](#-authentication-setup)
- [🧪 Verification](#-verification)
- [🚨 Common Issues](#-common-issues)
- [📖 References](#-references)
- [🧠 Final Notes](#-final-notes)

---

# 📌 Overview

This guide explains how to configure a Firebase local development environment.

---

# ⚙️ Requirements

- Node.js
- npm
- Google account
- Firebase project

---

# 🚀 Installation

## Install Node.js

```bash
node -v
```

## Install Firebase CLI

```bash
npm install -g firebase-tools
```

---

# 🔐 Authentication Setup

Authenticate Firebase CLI:

```bash
firebase login
```

Initialize project:

```bash
firebase init
```

---

# 🧪 Verification

Check Firebase version:

```bash
firebase --version
```

List Firebase projects:

```bash
firebase projects:list
```

---

# 🚨 Common Issues

> [!WARNING]
> Version mismatches may cause deployment failures.

| Issue | Solution |
|---|---|
| Node version mismatch | Update Node.js |
| Permission denied | Verify project access |
| CLI not found | Reinstall firebase-tools |

---

# 📖 References

- https://firebase.google.com/docs/cli
- https://nodejs.org/en
- https://firebase.google.com/docs

---

# 🧠 Final Notes

A properly configured Firebase environment simplifies deployments and improves development consistency.