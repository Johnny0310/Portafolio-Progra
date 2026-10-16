# 🖥️ 08 - Remote Desktop Protocol (RDP) Configuration

## 📌 Overview

This document describes the process of enabling Remote Desktop Protocol (RDP) access on Kali Linux using XRDP.

RDP allows remote graphical access to the Kali Linux desktop environment from another computer on the local network.

This setup is useful for:

- 🖥️ Remote administration
- 🧪 Homelab management
- ☁️ Infrastructure testing
- 🛠️ GUI-based troubleshooting
- 🔐 Remote Linux desktop access

---

# 🎯 Objectives

- 📦 Install XRDP
- 🖥️ Enable remote desktop access
- 🌐 Connect remotely from Windows
- 🔐 Configure firewall access
- ✅ Verify RDP functionality

---

# 🧰 Requirements

| Requirement | Details |
|---|---|
| 🐉 Kali Linux | Installed |
| 🌐 Network Connectivity | Required |
| 👤 Local User Account | Configured |
| 🖥️ Windows Client | Recommended |

---

# 📦 Install XRDP

Update packages:

```bash
sudo apt update
```

Install XRDP:

```bash
sudo apt install xrdp -y
```

!- xrdp-installation.png -!

---

# ⚙️ Enable XRDP Service

Enable XRDP at startup:

```bash
sudo systemctl enable xrdp
```

Start XRDP:

```bash
sudo systemctl start xrdp
```

Verify service status:

```bash
sudo systemctl status xrdp
```

!- xrdp-service-status.png -!

---

# 🔥 Configure Firewall

## 📌 Overview

By default, Kali Linux may not have UFW installed or enabled.

This section configures firewall rules to allow Remote Desktop Protocol (RDP) traffic through port 3389.

---

# ⚙️ Install UFW

Install UFW firewall:

```bash
sudo apt install ufw -y
```

Allow RDP traffic:

```bash
sudo ufw allow 3389/tcp
```

Verify firewall rules:

```bash
sudo ufw status
```

!- ufw-rdp-rule.png -!

---

# 🌐 Verify Local IP Address

Run:

```bash
hostname -I
```

Example:

```text
192.168.1.50
```

!- kali-local-ip.png -!

---

# 🖥️ Connect From Windows

Open:

```text
Remote Desktop Connection
```

Shortcut:

```text
mstsc
```

Enter the Kali Linux IP address:

```text
192.168.1.50
```

!- windows-rdp-client.png -!

---

# 🔐 Login

Use your Kali Linux credentials:

| Field | Value |
|---|---|
| Username | Kali Username |
| Password | Kali Password |

!- kali-rdp-login.png -!

---

# ✅ Verification

Successful configuration should display the Kali Linux desktop remotely.

!- kali-remote-desktop.png -!

---

# 🧰 Troubleshooting

## ❌ Black Screen After Login

Restart XRDP:

```bash
sudo systemctl restart xrdp
```

---

## ❌ Connection Refused

Verify XRDP status:

```bash
sudo systemctl status xrdp
```

---

## ❌ Firewall Blocking RDP

Verify port 3389:

```bash
sudo ufw status
```

---

## ❌ Cannot Reach Host

Verify:

- Same local network
- Correct IP address
- Network connectivity

Test with:

```bash
ping 192.168.1.50
```

---

# 📡 Useful Commands

Check listening port:

```bash
sudo ss -tulpn | grep 3389
```

Restart XRDP:

```bash
sudo systemctl restart xrdp
```

Stop XRDP:

```bash
sudo systemctl stop xrdp
```

---

# 📖 References

- https://www.xrdp.org/
- https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/