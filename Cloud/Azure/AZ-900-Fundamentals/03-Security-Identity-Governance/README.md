# 🔐 03 - Security, Identity & Governance

> Core Azure security, identity, and governance services used to secure enterprise cloud environments.

---

## 📚 Table of Contents

- [� 03 - Security, Identity \& Governance](#-03---security-identity--governance)
  - [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [🛡️ Identity \& Access Management](#️-identity--access-management)
- [🔒 Governance \& Compliance](#-governance--compliance)
- [🚨 Security Operations](#-security-operations)
- [🧪 Real-World Scenarios](#-real-world-scenarios)
- [⚠️ Common Risks](#️-common-risks)
- [✅ Best Practices](#-best-practices)
- [📖 References](#-references)
- [🧠 Final Notes](#-final-notes)

---

# 📌 Overview

Security, identity, and governance are foundational components of enterprise cloud environments.

This section covers:

- Microsoft Entra ID
- Multi-Factor Authentication (MFA)
- Role-Based Access Control (RBAC)
- Azure Policy
- Custom Roles
- Resource Locks

> [!IMPORTANT]
> Misconfigured identity and governance settings are among the most common causes of cloud security incidents.

---

# 🛡️ Identity & Access Management

Azure identity services help organizations:

- Authenticate users
- Authorize access
- Secure privileged accounts
- Implement Zero Trust principles

Core services include:

- Microsoft Entra ID
- MFA
- RBAC

---

# 🔒 Governance & Compliance

Governance services help organizations enforce:

- Security baselines
- Resource standards
- Compliance requirements
- Operational consistency

Core services include:

- Azure Policy
- Resource Locks
- Custom RBAC Roles

---

# 🚨 Security Operations

Enterprise cloud security requires:

- Continuous monitoring
- Access reviews
- Conditional access policies
- Logging and auditing
- Identity protection

> [!WARNING]
> Excessive permissions and weak identity controls significantly increase attack surface exposure.

---

# 🧪 Real-World Scenarios

| Scenario | Recommended Service |
|---|---|
| Restricting admin access | RBAC |
| Enforcing tagging standards | Azure Policy |
| Protecting critical resources | Resource Locks |
| Securing privileged accounts | MFA |
| Delegating granular permissions | Custom Roles |

---

# ⚠️ Common Risks

| Risk | Impact |
|---|---|
| Excessive RBAC permissions | Unauthorized access |
| Missing MFA | Credential compromise |
| Weak governance policies | Compliance violations |
| Unrestricted public resources | Security exposure |

---

# ✅ Best Practices

- Enable MFA for all privileged users
- Apply least privilege RBAC
- Use Conditional Access policies
- Implement governance standards
- Review permissions regularly
- Enable logging and auditing
- Protect critical resources with locks

---

# 📖 References

- [Microsoft Learn - Azure Security Documentation](https://learn.microsoft.com/en-us/azure/security/)
- [Microsoft Learn - Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/)
- [Azure Governance Documentation](https://learn.microsoft.com/en-us/azure/governance/)

---

# 🧠 Final Notes

Strong identity management and governance practices are critical for maintaining secure, compliant, and operationally mature Azure environments.