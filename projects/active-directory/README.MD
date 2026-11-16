# Windows Server 2022 — Active Directory Lab

**Author:** Purushottam Lamichhane  
**Project:** Windows infrastructure and identity administration lab (2025)

## Overview

I set up a small domain environment in VirtualBox using Windows Server 2022 and a Windows 11 client. The aim was to practise domain configuration, user administration, Group Policy, file sharing and basic maintenance.

## Environment

| Component | Configuration |
| --- | --- |
| Domain controller | Windows Server 2022 |
| Client | Windows 11 Pro |
| Lab domain | `lcashish1.local` |
| Network | VirtualBox internal / NAT |
| Administration | Server Manager, AD DS, DNS, GPO and PowerShell |

## Implementation

### 1. Server and DNS

Installed Windows Server 2022, renamed the server to `LCASHISH1`, assigned a static IP (`192.168.1.116/24`) and configured DNS to point to the server.

![Server network configuration](Project%20Git/Server%20Network%20Setup.png)

### 2. Domain controller

Installed Active Directory Domain Services and promoted the server to a domain controller for the new `lcashish1.local` forest.

![AD DS installation](Project%20Git/ad-installation.png)

### 3. Users, groups and organisational units

Created Staff, IT and Admin organisational units and set up test accounts and groups for managing access.

![Organisational units](Project%20Git/ou-structure.png)

![User management](Project%20Git/user-creation.png)

### 4. Windows client domain join

Joined the Windows 11 client to the lab domain and checked DNS resolution with:

```powershell
nslookup lcashish1.local
```

![Domain join result](Project%20Git/domain-join-success.png)

### 5. Group Policy

Tested policies to set the desktop wallpaper, restrict Control Panel access and map a network drive.

| Policy | Test |
| --- | --- |
| Desktop wallpaper | Custom wallpaper applied |
| Control Panel restriction | Access blocked for the target group |
| Drive mapping | Shared folder mapped as drive Z: |

![Group Policy result](Project%20Git/gpo-wallpaper.png)

### 6. Shared storage and permissions

Created the `\\LCASHISH1\SharedData` share and tested permissions for user groups. Drive mapping was applied through Group Policy.

![File-share permissions](Project%20Git/shared-folder-permissions.png)

### 7. Backup and maintenance

Used Windows Server Backup for system-state and Active Directory backups and reviewed event logs as part of the lab checks.

## What I learned

- Configuring a Windows domain and DNS.
- Managing accounts, groups and organisational units.
- Creating and testing Group Policy settings.
- Controlling access to shared folders.
- Joining and troubleshooting Windows clients.

## Future improvements

Add DHCP services, test additional domain-joined clients and automate user provisioning with PowerShell.

**Portfolio:** [Active Directory case study](https://lcashish1.github.io/projects/active-directory.html)
