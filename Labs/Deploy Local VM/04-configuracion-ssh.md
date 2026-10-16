# 🔐 04 - SSH Configuration

## 📌 Overview

This document describes how to configure SSH remote access for Kali Linux within a local network.

---

# 🎯 Objectives

- 🔐 Install OpenSSH Server
- 🌐 Enable remote access
- 🛡️ Configure secure SSH settings

---

# 🧰 Requirements

| Requirement | Details |
|---|---|
| 🖥️ Kali Linux | Installed |
| 🌐 Network Connectivity | Required |
| 👤 Local User Account | Configured |

---

# ⚙️ Procedure

## 1️⃣ Install OpenSSH Server

```bash
sudo apt install openssh-server -y
```

---

## 2️⃣ Enable SSH Service

```bash
sudo systemctl enable ssh
sudo systemctl start ssh
```

---

## 3️⃣ Verify Service Status

```bash
sudo systemctl status ssh
```

---

## 4️⃣ Verify Listening Port

```bash
sudo ss -tulpn | grep ssh
```

Expected port:

```text
22/tcp
```

---

# 🔐 Connect From Another Device

```bash
ssh username@192.168.1.50
```

---

# 🛡️ Recommended Hardening

Edit SSH configuration:

```bash
sudo nano /etc/ssh/sshd_config
```

Recommended settings:

```text
PermitRootLogin no
PasswordAuthentication yes
```

Restart SSH:

```bash
sudo systemctl restart ssh
```

---

# ✅ Verification

Successful login should display:

```text
Linux kali ...
```

---

# 🧰 Troubleshooting

## ❌ Connection Refused

Verify service:

```bash
sudo systemctl status ssh
```

---

## ❌ Timeout Error

Verify:

- Firewall rules
- Local IP address
- Network connectivity

---

# 📖 References

- https://www.openssh.com/