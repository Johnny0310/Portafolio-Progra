# ☁️ IaaS vs PaaS vs SaaS

> Understanding the primary cloud service models used in enterprise environments.

---

## 📚 Table of Contents

- [☁️ IaaS vs PaaS vs SaaS](#️-iaas-vs-paas-vs-saas)
  - [📚 Table of Contents](#-table-of-contents)
- [📌 Overview](#-overview)
- [🏗️ Service Models](#️-service-models)
  - [IaaS](#iaas)
    - [Customer Responsibilities](#customer-responsibilities)
  - [PaaS](#paas)
    - [Customer Responsibilities](#customer-responsibilities-1)
  - [SaaS](#saas)
    - [Customer Responsibilities](#customer-responsibilities-2)
- [📊 Comparison Table](#-comparison-table)
- [🧪 Real-World Examples](#-real-world-examples)
- [🚨 Common Issues](#-common-issues)
  - [IaaS Misconfiguration](#iaas-misconfiguration)
    - [Possible Problems](#possible-problems)
    - [Impact](#impact)
  - [PaaS Misunderstanding](#paas-misunderstanding)
- [✅ Best Practices](#-best-practices)
- [📖 References](#-references)
- [🧠 Final Notes](#-final-notes)

---

# 📌 Overview

Cloud service models define how responsibilities are divided between the cloud provider and the customer.

The three primary models are:

- Infrastructure as a Service (IaaS)
- Platform as a Service (PaaS)
- Software as a Service (SaaS)

---

# 🏗️ Service Models

## IaaS

Infrastructure resources such as:

- Virtual Machines
- Storage
- Networking
- Firewalls

Examples:

- Azure Virtual Machines
- AWS EC2

### Customer Responsibilities

- Operating System
- Applications
- Data
- Security Configuration

---

## PaaS

Managed runtime platforms for application deployment.

Examples:

- Azure App Services
- Azure SQL Database
- Azure Functions

### Customer Responsibilities

- Applications
- Data
- Identity Management

---

## SaaS

Fully managed software applications.

Examples:

- Microsoft 365
- Salesforce
- Google Workspace

### Customer Responsibilities

- User Access
- Data Management
- Security Policies

---

# 📊 Comparison Table

| Feature | IaaS | PaaS | SaaS |
|---|---|---|---|
| Infrastructure Managed | Partial | Mostly | Fully |
| OS Management | Customer | Provider | Provider |
| Application Management | Customer | Customer | Provider |
| Flexibility | High | Medium | Low |
| Complexity | High | Medium | Low |

---

# 🧪 Real-World Examples

| Scenario | Recommended Model |
|---|---|
| Legacy application migration | IaaS |
| Web application deployment | PaaS |
| Email collaboration | SaaS |
| Enterprise ERP hosting | IaaS |
| Serverless APIs | PaaS |

---

# 🚨 Common Issues

## IaaS Misconfiguration

### Possible Problems

- Open RDP/SSH ports
- Weak NSG rules
- Missing monitoring

### Impact

- Security exposure
- Increased attack surface
- Operational instability

---

## PaaS Misunderstanding

> [!WARNING]
> PaaS does NOT remove customer security responsibilities.

Customers still manage:

- Application security
- Data protection
- Identity controls

---

# ✅ Best Practices

- Use IaaS for maximum infrastructure control
- Use PaaS for rapid development
- Use SaaS for standardized business applications
- Apply least privilege access
- Enable monitoring and logging
- Document service ownership

---

# 📖 References

- Microsoft Learn
- Azure Fundamentals
- Azure Architecture Center

---

# 🧠 Final Notes

Understanding cloud service models is critical for designing scalable, secure, and cost-efficient cloud environments.