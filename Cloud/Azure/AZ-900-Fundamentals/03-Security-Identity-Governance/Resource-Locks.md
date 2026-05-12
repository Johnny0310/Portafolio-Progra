# 🔒 Azure Resource Locks

> Governance feature used to protect critical Azure resources from accidental modification or deletion.

---

## 📚 Table of Contents

- [� Azure Resource Locks](#-azure-resource-locks)
  - [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [🏗️ Lock Architecture](#️-lock-architecture)
- [🔐 Core Concepts](#-core-concepts)
  - [Lock Types](#lock-types)
  - [Lock Scope](#lock-scope)
- [⚙️ Configuration](#️-configuration)
  - [Azure CLI](#azure-cli)
  - [List Locks](#list-locks)
- [🧪 Real-World Scenarios](#-real-world-scenarios)
- [🚨 Common Issues](#-common-issues)
  - [Deployment Failures](#deployment-failures)
    - [Possible Causes](#possible-causes)
    - [Impact](#impact)
  - [Forgotten Locks](#forgotten-locks)
- [✅ Best Practices](#-best-practices)
- [📊 Lock Types](#-lock-types)
- [📖 References](#-references)
- [🧠 Final Notes](#-final-notes)

---

# 📌 Overview

Azure Resource Locks prevent accidental changes or deletion of critical Azure resources.

Locks can be applied at different scopes:

- Subscription
- Resource Group
- Individual Resource

> [!IMPORTANT]
> Resource Locks override RBAC permissions and protect resources from accidental operations.

---

# 🏗️ Lock Architecture

```mermaid
flowchart LR

Administrator --> ResourceLock
ResourceLock --> AzureResource
AzureResource --> ProtectedOperations
```

---

# 🔐 Core Concepts

## Lock Types

| Lock Type | Description |
|---|---|
| CanNotDelete | Prevents deletion |
| ReadOnly | Prevents modification and deletion |

---

## Lock Scope

| Scope | Example |
|---|---|
| Subscription | Enterprise-wide protection |
| Resource Group | Shared infrastructure protection |
| Resource | Critical service protection |

---

# ⚙️ Configuration

## Azure CLI

```bash
az lock create \
  --name ProtectProductionRG \
  --lock-type CanNotDelete \
  --resource-group RG-Production
```

---

## List Locks

```bash
az lock list \
  --resource-group RG-Production
```

---

# 🧪 Real-World Scenarios

| Scenario | Recommended Lock |
|---|---|
| Production resource group | CanNotDelete |
| Critical networking resources | ReadOnly |
| Shared infrastructure | CanNotDelete |
| Backup vault protection | ReadOnly |

---

# 🚨 Common Issues

## Deployment Failures

### Possible Causes

- ReadOnly lock preventing updates
- Automation scripts blocked
- Infrastructure-as-Code conflicts

### Impact

- Failed deployments
- Operational interruptions
- Automation errors

---

## Forgotten Locks

> [!WARNING]
> Resource Locks can unintentionally block legitimate maintenance operations if not documented properly.

---

# ✅ Best Practices

- Apply locks to production resources
- Document lock usage
- Review locks periodically
- Use CanNotDelete for most scenarios
- Avoid excessive ReadOnly locks
- Validate automation compatibility
- Protect backup and networking resources

---

# 📊 Lock Types

| Lock Type | Blocks Modification | Blocks Deletion |
|---|---|---|
| CanNotDelete | No | Yes |
| ReadOnly | Yes | Yes |

---

# 📖 References

- [Microsoft Learn - Azure Resource Locks](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources)
- [Azure Governance Documentation](https://learn.microsoft.com/en-us/azure/governance/)
- [Microsoft Learn Training Module](https://learn.microsoft.com/en-us/training/modules/protect-against-security-threats-azure/)

---

# 🧠 Final Notes

Azure Resource Locks provide an additional governance layer for protecting critical enterprise infrastructure from accidental operational changes.