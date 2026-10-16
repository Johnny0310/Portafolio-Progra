# 🌐 03 - Network Configuration

## 📌 Overview

This document covers the network configuration required for local SSH administration and homelab connectivity.

---

# 🎯 Objectives

- 🌐 Verify network connectivity
- 🧭 Identify local IP address
- 📡 Configure stable local networking

---

# 🧰 Requirements

| Requirement | Details |
|---|---|
| 🖥️ Kali Linux System | Installed |
| 🌐 Router Access | Optional |
| 🔌 Ethernet or Wi-Fi | Active connection |

---

# ⚙️ Procedure

## 1️⃣ Verify Network Interfaces

```bash
ip a
```

---

## 2️⃣ Verify Internet Connectivity

```bash
ping 8.8.8.8
```

---

## 3️⃣ Check Local IP Address

```bash
hostname -I
```

Example:

```text
192.168.1.50
```

---

## 4️⃣ Verify Gateway

```bash
ip route
```

---

# 📡 Recommended Configuration

For stable SSH access:

- Use DHCP reservation
- Assign static local IP
- Prefer Ethernet when possible

---

# ✅ Verification

Verify another device can reach the system:

```bash
ping 192.168.1.50
```

---

# 🧰 Troubleshooting

## ❌ No IP Address

Restart networking:

```bash
sudo systemctl restart NetworkManager
```

---

## ❌ Cannot Reach Gateway

Verify:

- Router status
- Ethernet cable
- Wi-Fi credentials

---

# 📖 References

- https://wiki.debian.org/NetworkConfiguration