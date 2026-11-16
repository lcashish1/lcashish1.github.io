# Purushottam Lamichhane — IT Portfolio

**Live portfolio:** https://lcashish1.github.io/

Professional IT portfolio highlighting Level 1 support experience, networking, cybersecurity, Microsoft Azure, Windows Server, and Python automation.

## Browse the projects

All six projects are represented **inside this repository**. Employers can start with the dedicated portfolio pages or inspect the local project folders.

| Project | Portfolio page | Files / documentation |
| --- | --- | --- |
| Zero Trust Azure Security & Automated Response | [Case study](https://lcashish1.github.io/projects/zero-trust-azure.html) | [Full project folder](projects/zero-trust-azure/) |
| Microsoft Sentinel Attack Map | [Case study](https://lcashish1.github.io/projects/sentinel-attack-map.html) | [Full project folder](projects/sentinel-attack-map/) |
| Windows Server & Active Directory | [Case study](https://lcashish1.github.io/projects/active-directory.html) | [Full project folder](projects/active-directory/) |
| Office Network Design & Redundancy | [Case study](https://lcashish1.github.io/projects/office-network.html) | [Full project folder](projects/office-network/) |
| Alert Nepal — AI News Automation | [Case study](https://lcashish1.github.io/projects/alert-nepal.html) | [Documentation, project logo and diagrams](projects/alert-nepal/) |
| Interactive CCNA Quiz | [Case study](https://lcashish1.github.io/projects/ccna-quiz.html) | [Project files](CCNA%20Quiz/) · [Live quiz](https://lcashish1.github.io/CCNA%20Quiz/) |

## Repository structure

```text
lcashish1.github.io/
├── index.html                     # Professional homepage
├── assets/                        # Portfolio CSS and JavaScript
├── projects/
│   ├── active-directory/          # Migrated lab + screenshots (15 files)
│   ├── office-network/            # Migrated Cisco lab, .pkt + .xlsx (5 files)
│   ├── sentinel-attack-map/       # Migrated Sentinel project (18 files)
│   ├── zero-trust-azure/          # Migrated Azure project (18 files)
│   ├── alert-nepal/               # Docs, owner-provided logo, diagrams
│   └── *.html                     # Employer-facing portfolio case studies
├── CCNA Quiz/                     # Existing HTML/CSS/JS quiz
├── old/                           # Previously existing legacy files (unchanged)
└── .github/workflows/
    └── import-technical-projects.yml
```

### Technical projects migration

The four technical lab folders were copied from [the original repository](https://github.com/lcashish1/purushottam-lamichhane) into this website repository using a GitHub Actions workflow. The first transfer completed successfully and all **56 binary/text files matched the originals by Git blob SHA**.

The source repository was intentionally **left intact** as a rollback archive and to preserve historical links and commits. Updated documentation in this repository may contain minor wording and broken-image fixes.

### Alert Nepal limitations

The [Alert Nepal folder](projects/alert-nepal/) provides genuine architecture and operation descriptions along with the **project-owner-provided logo and illustrative SVG diagrams**. The actual private Python application, API tokens and production database are **not** included. Real Facebook photos were not imported because their source images could not be reliably accessed from the provided public Page URL.

## Local development

This is a static GitHub Pages website: open `index.html` in a browser or serve the folder with any static HTTP server. GitHub Pages publishes from the `main` branch, root folder.

## Contact

- [LinkedIn](https://www.linkedin.com/in/lcashish1/)
- [GitHub](https://github.com/lcashish1)
