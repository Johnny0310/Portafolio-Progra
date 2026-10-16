# 🛡️ 05 - System Hardening

## 📌 Overview

This document covers basic security hardening practices for a Kali Linux homelab environment.

---

# 🎯 Objectives

- 🔥 Configure firewall
- 🔐 Improve SSH security
- 📦 Maintain updated packages
- 👤 Reduce attack surface

---

# ⚙️ Procedure

## 1️⃣ Update System

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 2️⃣ Install UFW Firewall

```bash
sudo apt install ufw -y
```

---

## 3️⃣ Allow SSH

```bash
sudo ufw allow 22/tcp
```

---

## 4️⃣ Enable Firewall

```bash
sudo ufw enable
```

---

## 5️⃣ Verify Firewall Status

```bash
sudo ufw status
```

---

# 🔐 SSH Hardening

Edit:

```bash
sudo nano /etc/ssh/sshd_config
```

Recommended:

```text
PermitRootLogin no
MaxAuthTries 3
X11Forwarding no
```

Restart SSH:

```bash
sudo systemctl restart ssh
```

---

# 👤 User Security

Avoid daily usage with root account.

Use sudo instead.

---

# ✅ Verification

Verify firewall:

```bash
sudo ufw status verbose
```

---

# 🧰 Troubleshooting

## ❌ Locked Out After Firewall

Allow SSH before enabling UFW.

---

## ❌ SSH Login Issues

Verify:

```bash
sudo journalctl -u ssh
```

---

# 📖 References

- https://ubuntu.com/server/docs/security-firewall