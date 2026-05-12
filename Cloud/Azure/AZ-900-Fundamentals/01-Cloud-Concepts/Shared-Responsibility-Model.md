# 🔐 Shared Responsibility Model

> Understanding how security and operational responsibilities are divided between the cloud provider and the customer.

---

## 📚 Table of Contents

- [📌 Overview](#-overview)
- [🏗️ Responsibility Model](#️-responsibility-model)
- [☁️ Responsibility by Service Type](#️-responsibility-by-service-type)
- [📊 Comparison Table](#-comparison-table)
- [🧪 Real-World Scenarios](#-real-world-scenarios)
- [🚨 Common Issues](#-common-issues)
- [✅ Best Practices](#-best-practices)
- [📖 References](#-references)

---

# 📌 Overview

The Shared Responsibility Model defines which security and operational tasks are managed by:

- The Cloud Provider
- The Customer

Responsibility varies depending on the cloud service model:

- IaaS
- PaaS
- SaaS

> [!IMPORTANT]
> Customers always retain responsibility for identity, access, and data protection.

---

# 🏗️ Responsibility Model

## Cloud Provider Responsibilities

Typical provider responsibilities include:

- Physical datacenter security
- Hardware maintenance
- Network infrastructure
- Hypervisor management
- Platform availability

Examples in Azure:

- Azure datacenters
- Physical networking
- Host infrastructure
- Managed platform services

---

## Customer Responsibilities

Typical customer responsibilities include:

- Identity management
- Access control
- Data classification
- Security configuration
- Endpoint protection
- Application security

Examples:

- RBAC assignments
- MFA enforcement
- NSG configuration
- Backup validation

---

# ☁️ Responsibility by Service Type

## IaaS

Customer manages:

- Operating System
- Applications
- Networking configuration
- Security patches

Provider manages:

- Physical infrastructure
- Hypervisor
- Core networking

---

## PaaS

Customer manages:

- Applications
- Data
- Identity controls

Provider manages:

- Runtime
- Operating System
- Infrastructure

---

## SaaS

Customer manages:

- User access
- Data governance
- Security policies

Provider manages:

- Entire application stack
- Infrastructure
- Platform maintenance

---

# 📊 Comparison Table

| Responsibility | IaaS | PaaS | SaaS |
|---|---|---|---|
| Physical Infrastructure | Provider | Provider | Provider |
| Operating System | Customer | Provider | Provider |
| Applications | Customer | Customer | Provider |
| Identity & Access | Customer | Customer | Customer |
| Data Protection | Customer | Customer | Shared |

---

# 🧪 Real-World Scenarios

| Scenario | Customer Responsibility |
|---|---|
| Azure VM compromised | OS hardening & patching |
| Data leak in SaaS app | Access control & governance |
| Misconfigured NSG | Network security configuration |
| Weak MFA enforcement | Identity protection |

---

# 🚨 Common Issues

## Misconfigured Security Controls

### Examples

- Open RDP/SSH access
- Excessive RBAC permissions
- Missing MFA
- Unencrypted storage

### Impact

- Security breaches
- Compliance violations
- Unauthorized access

---

## Shared Responsibility Misconceptions

| Misconception | Reality |
|---|---|
| Cloud provider secures everything | Customers still manage identities and data |
| SaaS eliminates all security work | Access and governance remain customer responsibilities |

> [!WARNING]
> Misunderstanding responsibility boundaries is a common cause of cloud security incidents.

---

# ✅ Best Practices

- Implement least privilege RBAC
- Enable MFA for all privileged accounts
- Monitor cloud environments continuously
- Apply security baselines
- Review permissions regularly
- Encrypt sensitive data
- Use centralized logging

---

# 📖 References

- Microsoft Learn
- Azure Security Documentation
- Microsoft Shared Responsibility Model

---

# 🧠 Final Notes

Understanding the Shared Responsibility Model is critical for designing secure, compliant, and operationally mature cloud environments.