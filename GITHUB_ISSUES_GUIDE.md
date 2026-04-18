# GitHub Issues Guide for AI Dev Agents

**Purpose:** Keep work tracked in GitHub Issues and Milestones. Follow this guide in every session so progress stays visible and aligned with goals.

---

## 1. When You Start a New Chat / Session

1. **Check open issues** in the repo (e.g. list open issues for the project).
2. **Check active milestone(s)** and their due dates / progress.
3. **Before doing any non-trivial work**, decide:
   - Is there already an issue for this? → Work in that issue’s context and update it.
   - Is this new work? → Create an issue (and attach to a milestone if one exists), then do the work and keep the issue updated.

---

## 2. Execution (During Work)

- **Branching:** Specific branches should be created for the issue.
  - *Naming Convention:* `feat/issue-ID-short-description` or `fix/issue-ID-short-description`.
- **Commits:** All commit messages must reference the issue ID.
  - *Format:* `[#ISSUE_ID] Commit message` (e.g. `[#12] Add responsive styles to header`).

---

## 3. When to Create an Issue

Create a **new issue** when:

- Starting a **new feature**, refactor, or chunk of work that isn’t covered by an existing issue.
- You’re about to implement something that would take more than a few minutes.
- The user asks for something that maps to a discrete deliverable or task.

**Issue content should include:**

- **Title:** Short, action-oriented (e.g. “Add contact form validation”, “Fix mobile nav overflow”).
- **Description:** What needs to be done, why (if relevant), and acceptance criteria or “done” conditions.
- **Labels:** Use exactly one or more of the repo labels below. Pick the best fit for the issue type.
- **Milestone:** Assign to the current or relevant milestone when one exists.
- **Link to related issues** (e.g. “Blocked by #12”, “Part of #5”) when applicable.

---

## 3.1 Available Labels (use these when creating/updating issues)

| Label | When to use |
|-------|--------------|
| `bug` | Something isn't working |
| `documentation` | Improvements or additions to documentation |
| `duplicate` | This issue or pull request already exists |
| `enhancement` | New feature or request |
| `good first issue` | Good for newcomers |
| `help wanted` | Extra attention is needed |
| `invalid` | This doesn't seem right |
| `question` | Further information is requested |
| `wontfix` | This will not be worked on |

---

## 4. When to Update an Issue

Update an issue when:

- **Starting work** on it: add a short comment that work has started (e.g. “Working on this now.”).
- **Progress** is made: add a comment summarizing what was done and what’s left.
- **Work is done:** add a comment that the task is complete and **close the issue** (or move to “Done” if you use project boards).
- **Blockers or scope changes:** comment with the new information and adjust description/labels if needed.

Prefer **one issue per logical task**; keep updates in that issue’s thread so history is clear.

---

## 5. Milestones

- **Before starting work**, check if the repo has milestones and which one is active.
- **New issues** that represent planned work should be assigned to the appropriate milestone when possible.
- When a **milestone’s scope or due date** is discussed, update the milestone in GitHub (description, due date) via the API if the agent has permission, or remind the user to update it.

---

## 6. Instructions for the AI Agent (Summary)

| Situation | Action |
|-----------|--------|
| New chat / session start | List open issues (and optionally milestones) for the repo to get context. |
| User asks for a feature or fix | Check for an existing issue; if none, create one (with milestone if applicable), then implement and update the issue. |
| Implementing an existing issue | Comment “Working on this,” do the work, then comment progress and close when done. |
| Finishing a task | Comment on the issue with what was done and close the issue. |
| Multiple related tasks | Create a parent issue or use labels/links so the work is traceable to a milestone. |

---

## 7. Quick Checklist per Session

- [ ] Fetched current open issues (and active milestone) at session start.
- [ ] Every non-trivial task is tied to an issue (existing or newly created).
- [ ] Issues are assigned to milestones where applicable.
- [ ] Progress and completion are reflected in issue comments and by closing done issues.
- [ ] No “invisible” work: if it was done, an issue was created or updated.

---

## 8. Example Flow

1. User: “Add a FAQ section to the landing page.”
2. Agent: Lists open issues, sees no FAQ issue → creates issue “Add FAQ section to landing page” with description and milestone.
3. Agent: Implements the FAQ section.
4. Agent: Comments on the issue: “Implemented FAQ with expandable items. Ready for review.” and closes the issue.

---

*Use this guide at the start of each new chat and whenever planning or doing work so GitHub Issues and Milestones stay accurate and useful.*
