# 🖥️ Active Directory Home Lab Setup

## 👋 Author
**Purushottam Lamichhane**  
🎓 *CCNA Certified | Bachelor of Information Technology Graduate*  
💼 *Level 1 IT Support | Restaurant Technology*  
📧 Email: [lcashish1@gmail.com](mailto:lcashish1@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/lcashish1/)

---

## 🧭 Project Overview
This project demonstrates a hands-on **Active Directory (AD)** environment setup for practical learning.  
It simulates a small business IT network using **Windows Server 2022** as the Domain Controller and a **Windows 11 client** joined to the domain.

The lab includes:
- Domain and DNS configuration  
- Organizational Unit (OU) structure  
- User and group management  
- Group Policy (GPO) deployment  
- File sharing with permissions  
- Backup and verification  

---

## 🧩 Lab Environment

| Component | Description |
|------------|-------------|
| **Server OS** | Windows Server 2022 (Domain Controller) |
| **Client OS** | Windows 11 Pro |
| **Domain Name** | lcashish1.local |
| **Network Type** | Internal / NAT (VirtualBox) |
| **Tools Used** | Server Manager, AD DS, DNS, Group Policy, PowerShell |

---

## ⚙️ Step 1: Server Configuration
1. Installed Windows Server 2022 and renamed the host to `LCASHISH1`.  
2. Assigned static IP `192.168.1.116` with subnet `255.255.255.0`.  
3. Configured DNS to point to its own IP.  
4. Verified connectivity with client machines.  

📸 **Screenshot:** Server Network Setup  
![Server Network Setup](Project%20Git/Server%20Network%20Setup.png)

---

## 🧱 Step 2: Active Directory Domain Services (AD DS)
1. Installed AD DS role using **Server Manager → Add Roles and Features**.  
2. Promoted the server to a Domain Controller and created a new forest: `lcashish1.local`.  
3. Restarted the server after configuration.  

📸 **Screenshot:** AD DS Installation
![AD DS Installation](Project%20Git/ad-installation.png)
---

## 🧑‍💻 Step 3: Create Organizational Units (OUs)
Created OUs to logically organize users and computers for better management.

| OU Name | Description |
|----------|-------------|
| **Staff** | Regular employees |
| **IT** | Lab or training accounts |
| **Admin** | System administrators |

📸 **Screenshot:** OU Structure in Active Directory
![OU Structure](Project%20Git/ou-structure.png)
---

## 👥 Step 4: Create Users and Groups
- Created users in their respective OUs using **Active Directory Users and Computers**.  
- Assigned users to groups such as `Staff_Group`, `IT_Group`, and `Admin_group`.  

📸 **Screenshot:** User Creation and Group Assignment
![User Creation](Project%20Git/user-creation.png)
---

## 🖥️ Step 5: Join Client Computer to Domain
1. On Windows 11 client, changed computer name and joined `lcashish1.local`.  
2. Entered domain admin credentials and restarted the system.  

**DNS Verification:**
```bash
nslookup lcashish1.local
```
✅ Output confirmed successful DNS resolution.  

📸 **Screenshots:** DNS Verification and Domain Join Success
![Domain Join](Project%20Git/domain-join-success.png)
---

## ⚙️ Step 6: Group Policy Configuration
Applied several GPOs to control user environments and enhance security.

| GPO Name | Target OU | Policy Path | Setting | Test Result |
|-----------|------------|--------------|----------|--------------|
| Set Desktop Wallpaper | Admin_group | User → Admin Templates → Desktop | Enabled (custom wallpaper) | Wallpaper applied successfully |
| Disable Control Panel | Staff_group | User → Admin Templates → Control Panel | Enabled | Control Panel blocked |
| Map Network Drive | LCASHISH1.local | User → Preferences → Drive Maps | \\LCASHISH1\SharedData | Drive Z: mapped successfully |

📸 **Screenshots:** GPO Settings and Results
![GPO Settings](Project%20Git/gpo-wallpaper.png)
---

## 🗂️ Step 7: File Sharing & Permissions
1. Created shared folder `\\LCASHISH1\SharedData`.  
2. Set NTFS and sharing permissions:  
   - **Staff → Read/Write**  
   - **Students → Read Only**  
3. Automatically mapped drives using Group Policy.  

📸 **Screenshot:** File Sharing Configuration
![File Sharing](Project%20Git/shared-folder-permissions.png)
---

## 🧰 Step 8: Backup & Maintenance
Used **Windows Server Backup** to perform regular system state and AD backups.  
Verified backups through event logs and recovery console.  


---

## 🧠 Learning Outcomes
Through this project, I gained hands-on experience with:
- Active Directory structure and domain setup  
- DNS configuration and troubleshooting  
- GPO creation, testing, and application  
- File sharing and access control  
- Windows Server management and backup  

---

## 💡 Next Steps
- Add DHCP role for automated IP address management  
- Connect a second client PC to test multi-user environments  
- Use PowerShell scripting to automate AD user creation  

---

## 📸 Screenshot Summary

| Description | Screenshot |
|--------------|-------------|
| Server Network Setup | ![Server Network Setup](Project%20Git/Server%20Network%20Setup.png) |
| AD DS Installation | ![AD DS Installation](Project%20Git/ad-installation.png) |
| OU Structure | ![OU Structure](Project%20Git/ou-structure.png) |
| User Creation | ![User Creation](Project%20Git/user-creation.png) |
| Domain Join | ![Domain Join](Project%20Git/domain-join-success.png) |
| GPO Applied | ![GPO Applied](Project%20Git/gpo-wallpaper.png) |
| File Sharing | ![File Sharing](Project%20Git/shared-folder-permissions.png) |



---

## 🧾 Credits
**Created by:** Purushottam Lamichhane  
**Goal:** To develop practical skills in Windows Server and Active Directory administration.  
**Year:** 2025  

⭐ *If you found this project helpful, don’t forget to star it on GitHub!*
