# ⚡ Azure PowerShell

> PowerShell module used for managing, automating, and scripting Azure infrastructure operations.

---

## 📚 Table of Contents

- [⚡ Azure PowerShell](#-azure-powershell)
  - [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [🏗️ PowerShell Architecture](#️-powershell-architecture)
- [🔐 Core Concepts](#-core-concepts)
  - [Key Features](#key-features)
  - [Common Modules](#common-modules)
- [⚙️ Installation \& Authentication](#️-installation--authentication)
  - [Install Azure PowerShell](#install-azure-powershell)
  - [Connect to Azure](#connect-to-azure)
  - [Set Subscription Context](#set-subscription-context)
- [🧪 Common Commands](#-common-commands)
  - [List Resource Groups](#list-resource-groups)
  - [Create Storage Account](#create-storage-account)
  - [List Virtual Machines](#list-virtual-machines)
- [🚨 Common Issues](#-common-issues)
  - [Module Version Conflicts](#module-version-conflicts)
    - [Possible Causes](#possible-causes)
    - [Impact](#impact)
  - [Authentication Context Errors](#authentication-context-errors)
- [✅ Best Practices](#-best-practices)
- [📊 PowerShell vs Azure CLI](#-powershell-vs-azure-cli)
- [📖 References](#-references)
- [🧠 Final Notes](#-final-notes)

---

# 📌 Overview

Azure PowerShell is a collection of PowerShell modules used to manage Azure resources through scripting and automation.

Azure PowerShell enables:

- Infrastructure management
- Automation workflows
- Resource deployment
- Operational scripting
- Administrative tasks

> [!NOTE]
> Azure PowerShell is object-oriented and integrates deeply with Windows administration workflows.

---

# 🏗️ PowerShell Architecture

```mermaid
flowchart LR

Administrator --> PowerShell
PowerShell --> AzModules
AzModules --> AzureResourceManager
AzureResourceManager --> AzureResources
```

---

# 🔐 Core Concepts

## Key Features

| Feature | Description |
|---|---|
| Object-Oriented | Native PowerShell objects |
| Automation | Scriptable workflows |
| Resource Management | Full Azure administration |
| Pipeline Support | Command chaining |

---

## Common Modules

| Module | Purpose |
|---|---|
| Az.Compute | Virtual Machines |
| Az.Network | Networking |
| Az.Storage | Storage management |
| Az.Resources | Resource administration |

---

# ⚙️ Installation & Authentication

## Install Azure PowerShell

```powershell
Install-Module -Name Az -Scope CurrentUser
```

---

## Connect to Azure

```powershell
Connect-AzAccount
```

---

## Set Subscription Context

```powershell
Set-AzContext `
  -Subscription "Production-Subscription"
```

---

# 🧪 Common Commands

## List Resource Groups

```powershell
Get-AzResourceGroup
```

---

## Create Storage Account

```powershell
New-AzStorageAccount `
  -ResourceGroupName "RG-Storage" `
  -Name "stproduction01"
```

---

## List Virtual Machines

```powershell
Get-AzVM
```

---

# 🚨 Common Issues

## Module Version Conflicts

### Possible Causes

- Outdated Az modules
- Multiple installed versions
- PowerShell compatibility issues

### Impact

- Command execution failures
- Authentication problems
- Automation inconsistencies

---

## Authentication Context Errors

> [!WARNING]
> Incorrect Azure context selection can result in changes being applied to unintended subscriptions.

---

# ✅ Best Practices

- Keep Az modules updated
- Use service principals for automation
- Validate subscription context
- Use reusable scripts
- Secure credentials properly
- Apply logging and auditing
- Test automation in non-production environments

---

# 📊 PowerShell vs Azure CLI

| Feature | PowerShell | Azure CLI |
|---|---|---|
| Output Format | Objects | JSON |
| Windows Integration | Excellent | Good |
| Scripting Style | Object-oriented | Command-based |
| Cross-platform | Yes | Yes |

---

# 📖 References

- [Microsoft Learn - Azure PowerShell Overview](https://learn.microsoft.com/en-us/powershell/azure/overview)
- [Azure PowerShell Documentation](https://learn.microsoft.com/en-us/powershell/azure/)
- [Microsoft Learn Training Module](https://learn.microsoft.com/en-us/training/modules/automate-azure-tasks-with-powershell/)

---

# 🧠 Final Notes

Azure PowerShell remains a powerful automation and administration platform for enterprise Azure operations and infrastructure management.