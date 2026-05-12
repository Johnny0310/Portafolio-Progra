# 💻 Azure CLI

> Cross-platform command-line tool used for managing and automating Azure resources.

---

## 📚 Table of Contents

- [� Azure CLI](#-azure-cli)
  - [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [🏗️ CLI Architecture](#️-cli-architecture)
- [🔐 Core Concepts](#-core-concepts)
  - [Key Features](#key-features)
  - [Authentication Methods](#authentication-methods)
- [⚙️ Installation \& Authentication](#️-installation--authentication)
  - [Install Azure CLI](#install-azure-cli)
  - [Login to Azure](#login-to-azure)
  - [Set Subscription](#set-subscription)
- [🧪 Common Commands](#-common-commands)
  - [List Resource Groups](#list-resource-groups)
  - [Create Virtual Machine](#create-virtual-machine)
  - [List Storage Accounts](#list-storage-accounts)
- [🚨 Common Issues](#-common-issues)
  - [Authentication Failures](#authentication-failures)
    - [Possible Causes](#possible-causes)
    - [Impact](#impact)
  - [Incorrect Resource Scope](#incorrect-resource-scope)
- [✅ Best Practices](#-best-practices)
- [📊 CLI vs PowerShell](#-cli-vs-powershell)
- [📖 References](#-references)
- [🧠 Final Notes](#-final-notes)

---

# 📌 Overview

Azure CLI is Microsoft's cross-platform command-line interface used to manage Azure resources and automate cloud operations.

Azure CLI supports:

- Infrastructure automation
- Resource deployment
- Operational management
- Scripting
- CI/CD integration

> [!IMPORTANT]
> Azure CLI is heavily used in DevOps, automation, and Infrastructure as Code workflows.

---

# 🏗️ CLI Architecture

```mermaid
flowchart LR

Administrator --> AzureCLI
AzureCLI --> AzureResourceManager
AzureResourceManager --> AzureResources
```

---

# 🔐 Core Concepts

## Key Features

| Feature | Description |
|---|---|
| Cross-platform | Windows, Linux, macOS |
| Automation | Scriptable management |
| Resource Management | Full Azure administration |
| JSON Output | Structured command results |

---

## Authentication Methods

| Method | Use Case |
|---|---|
| Interactive Login | Administrative access |
| Service Principal | Automation |
| Managed Identity | Azure-native authentication |

---

# ⚙️ Installation & Authentication

## Install Azure CLI

```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

---

## Login to Azure

```bash
az login
```

---

## Set Subscription

```bash
az account set \
  --subscription "Production-Subscription"
```

---

# 🧪 Common Commands

## List Resource Groups

```bash
az group list --output table
```

---

## Create Virtual Machine

```bash
az vm create \
  --resource-group RG-Production \
  --name VM-Web-01 \
  --image Ubuntu2204
```

---

## List Storage Accounts

```bash
az storage account list
```

---

# 🚨 Common Issues

## Authentication Failures

### Possible Causes

- Expired tokens
- Incorrect subscription context
- Missing permissions

### Impact

- Deployment failures
- Resource access denial
- Automation interruptions

---

## Incorrect Resource Scope

> [!WARNING]
> Running commands against the wrong subscription can create or modify unintended resources.

---

# ✅ Best Practices

- Use service principals for automation
- Validate subscription context before changes
- Use scripting for consistency
- Store secrets securely
- Use tagging standards
- Enable logging for automation
- Test scripts in non-production environments

---

# 📊 CLI vs PowerShell

| Feature | Azure CLI | PowerShell |
|---|---|---|
| Primary Format | Bash-style | Object-oriented |
| Cross-platform | Yes | Yes |
| Automation | Excellent | Excellent |
| JSON Handling | Native | Strong |

---

# 📖 References

- [Microsoft Learn - Azure CLI Overview](https://learn.microsoft.com/en-us/cli/azure/what-is-azure-cli)
- [Azure CLI Documentation](https://learn.microsoft.com/en-us/cli/azure/)
- [Microsoft Learn Training Module](https://learn.microsoft.com/en-us/training/modules/control-azure-services-with-cli/)

---

# 🧠 Final Notes

Azure CLI is a foundational automation and operational tool used extensively in enterprise Azure environments and DevOps workflows.