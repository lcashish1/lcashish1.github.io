# Zero Trust Azure Security — Detection and Automated Response

This lab explores Azure network segmentation, security monitoring and automated response to simulated SSH brute-force activity. It uses Microsoft Sentinel to detect suspicious authentication events and a Logic Apps playbook to apply a Network Security Group (NSG) deny rule.

## Architecture

![Network and security architecture](Project%20git/Architecture.png)

The design brings together Microsoft Entra ID, virtual network segmentation, NSGs, Microsoft Sentinel, Log Analytics and Logic Apps.

### Identity and access

Test identities include Network Admin, SOC Analyst and Test User. The lab documents Microsoft Entra ID, multi-factor authentication and Conditional Access policies.

### Network layout

| Segment | Network | Role |

| --- | --- | --- |

| Virtual network (ZT-VNet) | `10.0.0.0/16` | Lab address space |

| Public-Subnet | `10.0.1.0/24` | Windows jump VM with restricted ingress |

| App-Subnet | `10.0.2.0/24` | Linux application VM; SSH limited to the jump subnet |

| DB-Subnet | `10.0.3.0/24` | Database segment in the architecture design |

| Attacker-Subnet | `10.0.4.0/24` | Simulated traffic segment in the architecture design |

The database and attacker segments are part of the documented design rather than claimed production deployments.

![Network configuration](Project%20git/images1.png)

![Subnet configuration](Project%20git/images2.png)

## Network security

NSGs restrict inbound access and provide the network-layer response when Sentinel flags an attacker IP. Microsoft Defender for Cloud was also used to review security posture and recommendations.

![NSG settings](Project%20git/images3.png)

![Defender for Cloud](Project%20git/Defender-for-cloud.png)

## Logging and detection

The Log Analytics Workspace, `ZT-Sentinel-LAW`, centralises the logs used for detection. Microsoft Sentinel monitors the workspace, with Linux Syslog and relevant Azure security logs included in the monitoring design.

![Sentinel workspace](Project%20git/sentinel.png)

![Log Analytics](Project%20git/logs-and-workplace.png)

### Test scenario

Repeated failed SSH logins against the Linux application VM provide the test events. Example command from the jump VM:

```bash

ssh wronguser@<AppVM-private-IP>

```

### Microsoft Sentinel analytics query

```kql

Syslog
| where SyslogMessage has "Invalid user"
| extend RemoteIP = extract(@"from (\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})", 1, SyslogMessage)
| summarize Attempts = count(), SyslogMessage = take_any(SyslogMessage) by RemoteIP, HostIP, bin(TimeGenerated, 5m)
| where Attempts > 5
| project TimeGenerated, RemoteIP, HostIP, Attempts, SyslogMessage

```

The rule looks for more than five invalid-user attempts from the same remote IP within a five-minute interval. It is intended to create a Sentinel incident for investigation and response.

![Analytics rule](Project%20git/detection-rule.png)

![Detection configuration](Project%20git/detection-rule2.png)

## Automated response

The Logic Apps playbook is triggered by a Sentinel incident. The documented flow retrieves incident details, extracts IP entities and creates a deny rule in an NSG to restrict further traffic from the detected source.

![Response workflow](Project%20git/detection-rule4.png)

![Response rule](Project%20git/detection-rule5.png)

The simulated login attempts correspond to MITRE ATT&CK **T1110 (Brute Force)**. The lab focuses on this scenario, rather than a complete production SOC deployment.

## Evidence

![SOC and incident overview](Project%20git/SOC.png)

## Skills and follow-up work

This project covers Azure networking, NSGs, Entra ID, Microsoft Sentinel, KQL, Linux authentication events, Logic Apps and incident-response workflows.

Possible extensions include automatic expiry of blocking rules, IP-reputation checks, Azure Firewall integration and Teams notifications.

**Project:** Personal Azure security lab · **Author:** Purushottam Lamichhane
