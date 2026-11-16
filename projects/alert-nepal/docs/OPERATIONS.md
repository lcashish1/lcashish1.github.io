# Local operations and reliability notes

## Environment

- OS: Windows 11
- Python virtual environment: `.venv`
- Local web interface: Streamlit
- Scheduler: Windows Task Scheduler
- Data store: SQLite
- External services: RSS feeds, Gemini API and Meta Graph API

## Non-destructive checks

These are examples of commands used in the original local project, **not instructions to run inside GitHub Pages**:

```powershell
.\.venv\Scripts\python.exe scheduled_prepare.py --check
.\.venv\Scripts\python.exe auto_publish.py --check
```

### What to check

- Are RSS feeds reachable and returning current articles?
- Does the candidate filter recognise relevant political news?
- Was an image card created, reviewed or explicitly approved by configuration?
- Does the automatic publisher show a queued card?
- Is Page access configured and current?
- Is a prior posting attempt in an unresolved/reconciliation state?
- Does the scheduler run under the intended user, virtual environment and working directory?
- Have logs and publication records been checked before any retry?

### Deduplication and recovery

The publication ledger distinguishes approved/queued items, completed posts and uncertain attempts. Re-running a publisher without reconciling ambiguous prior attempts can create duplicate news posts. Prefer checking the database and live Page status before taking any corrective action.

### Demonstrated testing

A reviewed Facebook Page post was published successfully via the local API integration. Later automatic scheduling attempts sometimes failed to publish as expected, so unattended scheduling is an area for additional reliability work.

## Public repository policy

Only documentation, diagrams, appropriately licensed example images and redacted logs should be shared publicly. The actual local secrets, Page access token, approval passphrase, full database and live operation logs are deliberately excluded.
