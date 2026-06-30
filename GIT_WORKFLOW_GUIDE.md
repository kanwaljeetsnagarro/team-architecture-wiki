# 📚 Git Workflow Guide for Your Project

## 🎯 What Happened (Explanation)

You asked: *"Where were the repository files downloaded then made changes then uploaded (pushed) from?"*

### The Answer:

1. **First Round (Temporary Folder)**
   - I cloned GitHub repo → `C:\temp\wiki-update\`
   - Made edits there
   - Committed & pushed to GitHub
   - ❌ Your local folder had NO `.git` folder (not connected to GitHub)

2. **Now (Your Local Folder - FIXED)**
   - ✅ Initialized Git in your folder: `C:\Users\kanwaljeetsingh\OneDrive - Nagarro\...\BBCRM DEVELOPMENT\`
   - ✅ Created `.git` folder (now you have version control!)
   - ✅ Connected to GitHub remote
   - ✅ Your folder is now a proper Git repository

---

## 📁 Your New Structure

```
C:\Users\kanwaljeetsingh\OneDrive - Nagarro\02. Learning & Training\LEARNING\BBCRM DEVELOPMENT\
├── .git\                      ← Version control metadata (hidden)
├── index.html                 ← Your files
├── app.js
├── styles.css
├── bbcrm-guide.html
├── foundations.html
├── microservices-guide.html
├── system-design-guide.html
├── source-compendium.html
└── _backup\                   ← Backup of original files
    ├── index.html
    ├── app.js
    └── ...
```

---

## 🚀 The Simple 3-Step Workflow

### Edit → Commit → Push

```bash
# Step 1: Make changes in VS Code
# (Just edit files normally)

# Step 2: Save changes to Git
cd "C:\Users\kanwaljeetsingh\OneDrive - Nagarro\02. Learning & Training\LEARNING\BBCRM DEVELOPMENT"
git add .
git commit -m "Updated: [what you changed]"

# Step 3: Upload to GitHub
git push origin main
```

---

## 💡 Git Commands Reference

| Command | What It Does |
|---------|-------------|
| `git status` | See which files changed |
| `git add .` | Stage all changes (prepare them) |
| `git commit -m "message"` | Save changes with a description |
| `git push origin main` | Upload to GitHub |
| `git pull origin main` | Download latest from GitHub |
| `git log` | See history of all commits |
| `git diff` | See exact changes in files |

---

## 🎨 Using Git in VS Code (GUI)

Instead of typing commands, you can use VS Code's visual interface:

1. **Click "Source Control"** icon on the left sidebar (looks like 3 circles)
2. **See changed files** listed
3. **Click `+` button** next to each file to stage (or Ctrl+Shift+A for all)
4. **Type message** in the message box at the top
5. **Press Ctrl+Enter** to commit
6. **Click the `⬆️` Sync** button to push to GitHub

---

## 🔄 Typical Day-to-Day Workflow

### Morning:
```bash
git pull origin main    # Get latest changes from GitHub
```

### During Work:
- Edit your files in VS Code
- Test changes in browser

### Before Lunch/End of Day:
```bash
git add .
git commit -m "Updated [feature/section] with [changes]"
git push origin main
```

---

## ⚠️ Common Scenarios

### "I made changes but they don't appear on GitHub"
You need to **commit & push**:
```bash
git add .
git commit -m "My changes"
git push origin main
```

### "Someone else pushed changes, I don't have them"
Pull the latest:
```bash
git pull origin main
```

### "I want to undo my last commit"
```bash
git revert HEAD    # Creates a new commit that undoes the last one
```

### "I accidentally deleted a file"
```bash
git restore filename    # Restore from Git history
```

---

## 🌐 GitHub Pages (Automatic Deployment)

Your website is hosted at:
```
https://kanwaljeetsnagarro.github.io/team-architecture-wiki/
```

**How it works:**
1. You push code to `main` branch
2. GitHub automatically builds & deploys it
3. Website updates in ~1 minute
4. No extra steps needed! ✨

**Note:** You don't need an Enterprise license for this. GitHub Pages is free!

---

## ✅ Verification

To confirm everything is set up correctly:

```bash
cd "C:\Users\kanwaljeetsingh\OneDrive - Nagarro\02. Learning & Training\LEARNING\BBCRM DEVELOPMENT"

# Check if .git exists
ls -la | grep .git    # Should show: .git folder

# Check remote connection
git remote -v         # Should show: origin -> https://github.com/kanwaljeetsnagarro/team-architecture-wiki.git

# Check current branch
git branch            # Should show: * main

# Check recent commits
git log --oneline -3
```

---

## 📞 Need Help?

Common issues & solutions:

| Issue | Solution |
|-------|----------|
| "Permission denied" | Make sure you're authenticated with GitHub |
| "fatal: not a git repository" | Confirm you're in the right folder (with `.git`) |
| "failed to push" | Run `git pull` first, then `git push` |
| "merge conflict" | Open the file, fix conflicts, then commit |

---

**You're all set! Your local folder is now a Git repository. Start making changes and pushing to GitHub! 🎉**
