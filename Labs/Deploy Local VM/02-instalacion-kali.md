# 🐉 02 - Kali Linux Installation

## 📌 Overview

This document describes the graphical installation process of Kali Linux on dedicated homelab hardware.

The installation prepares the environment for:

- 🌐 Networking
- 🔐 Remote Administration
- 🧪 Security Labs
- ☁️ Infrastructure Practice

This guide uses the Kali Linux Graphical Installer.

---

# 🎯 Objectives

- 💻 Install Kali Linux using GUI installer
- 👤 Configure local user account
- 🌐 Enable network connectivity
- 🖥️ Prepare system for remote access
- 🔄 Update operating system packages

---

# 🧰 Requirements

| Requirement | Details |
|---|---|
| 💽 Bootable USB | Kali Linux Installer |
| 💻 Target Laptop | Physical hardware |
| 🌐 Internet Access | Recommended |
| 🔌 Power Adapter | Recommended |

---

# 🚀 Boot From USB

Insert the bootable USB device and power on the laptop.

Open the Boot Menu using the vendor shortcut key.

Common keys:

| Vendor | Key |
|---|---|
| HP | ESC / F9 |
| Dell | F12 |
| Lenovo | F12 |
| ASUS | ESC |

!- bios-boot-menu.png -!

---

# 🖥️ Start Kali Installer

From the Kali boot menu select:

```text
Graphical install
```

!- kali-graphical-install.png -!

---

# 🌎 Select Language

Choose the preferred installation language.

Example:

```text
English
```

!- kali-language-selection.png -!

---

# 🌍 Select Region

Choose the geographic region.

Example:

```text
United States
```

!- kali-region-selection.png -!

---

# ⌨️ Configure Keyboard

Select keyboard layout.

Example:

```text
American English
```

!- kali-keyboard-layout.png -!

---

# 🌐 Configure Network

Provide:

- 🖥️ Hostname
- 🌐 Domain name (optional)

Example hostname:

```text
Steven99
```

!- kali-network-config.png -!

---

# 👤 Create User Account

Configure local account credentials.

| Field | Example |
|---|---|
| Username | stv |
| Password | ******** |

!- kali-user-creation.png -!

---

# 💽 Disk Partitioning

Recommended option:
<>
```text
Guided - Use Entire Disk
```

This option automatically partitions the disk for Kali Linux.

> ⚠️ Warning:
> Existing data on the disk will be erased.

!- kali-disk-partitioning.png -!

---

# 📦 Install System

The installer will:

- Copy files
- Install packages
- Configure the operating system

This process may take several minutes.

!- kali-installation-progress.png -!

---

# 🧱 Install GRUB Bootloader

Select:

```text
Yes
```

Install GRUB to the primary disk.

Example:

```text
/dev/sda
```

!- kali-grub-install.png -!

---

# 🔄 Finish Installation

Once installation completes:

- Remove USB device
- Select Continue
- Reboot system

!- kali-installation-complete.png -!

---

# 🔐 Login To Kali Linux

Use the local credentials created during installation.

!- kali-login-screen.png -!

---

# 🔄 Update System Packages

Open Terminal and run:

```bash
sudo apt update && sudo apt upgrade -y
```

!- kali-system-update.png -!

---

# ✅ Verification

Verify operating system version:

```bash
cat /etc/os-release
```

Expected output should reference Kali Linux.

!- kali-version-check.png -!

---

# 🧰 Troubleshooting

## ❌ Black Screen After Installation

Possible causes:

- Secure Boot enabled
- GPU compatibility issues
- Incorrect UEFI settings

Possible solutions:

- Disable Secure Boot
- Reinstall using GPT/UEFI
- Boot using nomodeset

---

## ❌ USB Does Not Boot

Verify:

- Correct Rufus configuration
- USB boot enabled in BIOS
- ISO integrity

---

## ❌ No Internet Connectivity

Verify network interfaces:

```bash
ip a
```

Restart networking:

```bash
sudo systemctl restart NetworkManager
```

---

# 📖 References

- https://www.kali.org/docs/
- https://www.kali.org/get-kali/