# 👤 Entra ID Users & Groups

> Azure identity administration using Microsoft Entra ID for enterprise environments.

---

# 📚 Table of Contents

- [� Entra ID Users \& Groups](#-entra-id-users--groups)
- [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [🏗️ Core Concepts](#️-core-concepts)
- [👥 Users](#-users)
- [👨‍👩‍👧‍👦 Groups](#-groups)
- [⚙️ User Management](#️-user-management)
  - [Create User (Portal)](#create-user-portal)
  - [Assign License](#assign-license)
- [⚙️ Group Management](#️-group-management)
  - [Create Security Group](#create-security-group)
  - [Dynamic Membership Example](#dynamic-membership-example)
- [🧪 Azure CLI Examples](#-azure-cli-examples)
  - [Create User](#create-user)
  - [Create Group](#create-group)
- [🧪 PowerShell Examples](#-powershell-examples)
  - [Connect to Azure](#connect-to-azure)
  - [Create User](#create-user-1)
- [🚨 Common Issues](#-common-issues)
  - [User Cannot Sign In](#user-cannot-sign-in)
    - [Possible Causes](#possible-causes)
    - [Troubleshooting](#troubleshooting)
  - [Group Membership Not Updating](#group-membership-not-updating)
    - [Possible Causes](#possible-causes-1)
- [✅ Best Practices](#-best-practices)
- [📖 References](#-references)

---

# 📌 Overview

Microsoft Entra ID is Azure’s cloud-based identity and access management service.

Administrators use Entra ID to:

- Manage users
- Manage groups
- Assign administrative roles
- Enable authentication
- Control resource access
- Secure enterprise identities

---

# 🏗️ Core Concepts

| Component | Purpose |
|---|---|
| User Accounts | Identity for authentication |
| Groups | Simplify access management |
| Administrative Units | Delegate administration |
| Dynamic Groups | Automatic membership assignment |
| Guest Users | B2B collaboration |
| Licenses | Enable Microsoft services |

---

# 👥 Users

Common user management tasks:

- Create users
- Reset passwords
- Assign licenses
- Configure MFA
- Manage authentication methods
- Enable/disable accounts

---

# 👨‍👩‍👧‍👦 Groups

Azure supports:

| Group Type | Description |
|---|---|
| Security Groups | RBAC and permissions |
| Microsoft 365 Groups | Collaboration workloads |
| Dynamic Groups | Rule-based membership |

---

# ⚙️ User Management

## Create User (Portal)

```text
Microsoft Entra ID
→ Users
→ New User
```

## Assign License

```text
User
→ Licenses
→ Assign
```

---

# ⚙️ Group Management

## Create Security Group

```text
Entra ID
→ Groups
→ New Group
```

## Dynamic Membership Example

```text
(user.department -eq "IT")
```

> [!IMPORTANT]
> Dynamic groups require Microsoft Entra ID P1 licensing.

---

# 🧪 Azure CLI Examples

## Create User

```bash
az ad user create \
  --display-name "John Doe" \
  --user-principal-name john@contoso.com \
  --password "Azure123!"
```

## Create Group

```bash
az ad group create \
  --display-name "IT-Team" \
  --mail-nickname "ITTeam"
```

---

# 🧪 PowerShell Examples

## Connect to Azure

```powershell
Connect-AzAccount
```

## Create User

```powershell
New-AzADUser `
-DisplayName "John Doe" `
-UserPrincipalName "john@contoso.com"
```

---

# 🚨 Common Issues

## User Cannot Sign In

### Possible Causes

- Incorrect password
- MFA failure
- Conditional Access policy
- Disabled account
- License issue

### Troubleshooting

```text
Entra ID
→ Sign-in Logs
```

---

## Group Membership Not Updating

### Possible Causes

- Dynamic rule mismatch
- Sync delay
- Hybrid sync issue

---

# ✅ Best Practices

- Use security groups instead of direct assignments
- Enforce MFA for all users
- Apply least privilege principles
- Use naming conventions
- Regularly audit inactive accounts
- Separate admin accounts from user accounts

---

# 📖 References

- [Microsoft Entra ID Documentation](https://learn.microsoft.com/en-us/entra/identity/?utm_source=chatgpt.com)
- [Manage Users in Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-create-delete-users?utm_source=chatgpt.com)
- [Manage Groups in Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups?utm_source=chatgpt.com)

---