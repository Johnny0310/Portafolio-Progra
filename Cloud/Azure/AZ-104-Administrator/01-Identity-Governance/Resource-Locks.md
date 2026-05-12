# 🔒 Resource Locks

> Protect Azure resources from accidental modification or deletion.

---

# 📚 Table of Contents

- [� Resource Locks](#-resource-locks)
- [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [🏗️ Lock Types](#️-lock-types)
- [🔑 Core Concepts](#-core-concepts)
- [⚙️ Resource Lock Administration](#️-resource-lock-administration)
  - [Apply Lock](#apply-lock)
  - [Common Use Cases](#common-use-cases)
- [🧪 Azure CLI Examples](#-azure-cli-examples)
  - [Create Delete Lock](#create-delete-lock)
  - [List Locks](#list-locks)
- [🧪 PowerShell Examples](#-powershell-examples)
  - [Create ReadOnly Lock](#create-readonly-lock)
- [🚨 Common Issues](#-common-issues)
  - [Unable to Delete Resource](#unable-to-delete-resource)
    - [Possible Causes](#possible-causes)
    - [Troubleshooting](#troubleshooting)
  - [Deployment Failures](#deployment-failures)
    - [Common Causes](#common-causes)
- [✅ Best Practices](#-best-practices)
- [📖 References](#-references)

---

# 📌 Overview

Azure Resource Locks prevent accidental deletion or modification of critical resources.

Locks are commonly applied to:

- Production resources
- Networking components
- Shared infrastructure
- Backup resources

---

# 🏗️ Lock Types

| Lock Type | Description |
|---|---|
| ReadOnly | Prevents modifications |
| CanNotDelete | Prevents deletion |

---

# 🔑 Core Concepts

| Component | Description |
|---|---|
| Scope | Subscription, RG, Resource |
| Inheritance | Child resources inherit locks |
| Protection | Administrative safeguard |

---

# ⚙️ Resource Lock Administration

## Apply Lock

```text
Resource
→ Locks
→ Add
```

## Common Use Cases

- Protect VNets
- Protect Recovery Services Vaults
- Protect production storage accounts
- Prevent accidental VM deletion

---

# 🧪 Azure CLI Examples

## Create Delete Lock

```bash
az lock create \
  --name "DeleteLock" \
  --lock-type CanNotDelete \
  --resource-group Production-RG
```

## List Locks

```bash
az lock list
```

---

# 🧪 PowerShell Examples

## Create ReadOnly Lock

```powershell
New-AzResourceLock `
-LockName "ReadOnlyLock" `
-LockLevel ReadOnly `
-ResourceGroupName "Production-RG"
```

---

# 🚨 Common Issues

## Unable to Delete Resource

### Possible Causes

- Existing CanNotDelete lock
- Inherited lock
- Resource dependency

### Troubleshooting

```text
Resource
→ Locks
```

---

## Deployment Failures

### Common Causes

- ReadOnly lock blocking updates
- Automation conflicts
- CI/CD modification attempts

---

# ✅ Best Practices

- Protect critical production resources
- Use CanNotDelete for shared infrastructure
- Document applied locks
- Review inherited locks regularly
- Avoid unnecessary ReadOnly locks

---

# 📖 References

- [Azure Resource Locks Documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources?utm_source=chatgpt.com)
- [Azure Resource Manager Documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview?utm_source=chatgpt.com)

---