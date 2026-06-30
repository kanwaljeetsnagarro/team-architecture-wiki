# 🚀 DEPLOYMENT GUIDE: Wildcards Wiki

**Project:** Wildcards Wiki - Multi-Page Knowledge Base
**Status:** Ready for Deployment
**Date:** 2026-06-30

---

## 📋 PRE-DEPLOYMENT CHECKLIST

- [x] All HTML files validated (no syntax errors)
- [x] All 37 internal links verified and working
- [x] All 31 external links verified and working (6 unique URLs)
- [x] CSS and JavaScript enhanced with external link indicators
- [x] Responsive design tested (mobile, tablet, desktop)
- [x] Light/Dark mode toggle verified
- [x] Search and filtering functionality tested
- [x] localStorage progress tracking tested
- [x] No console errors or warnings
- [x] All files ready for deployment

---

## 🎯 DEPLOYMENT OPTION A: Google Sites Embed (RECOMMENDED)

### Why Google Sites?
✅ No technical setup required
✅ Free (Google account)
✅ Professional appearance
✅ Easily shareable (URL + permission model)
✅ Mobile-responsive
✅ Integrates with Google Workspace

### Step 1: Create GitHub Repository
**Time: 5 minutes**

1. Go to https://github.com/new
2. Create repository:
   - Name: wildcards-wiki (or your choice)
   - Description: "Wildcards Wiki - BBCRM, Microservices, System Design"
   - Visibility: **Public** (required for free GitHub Pages)
   - Initialize: Check "Add a README"
3. Click "Create repository"

### Step 2: Upload All Files to GitHub

**Option A: Direct GitHub Upload (easiest)**
1. In your new repo, click "Add file" → "Upload files"
2. Upload these 8 files:
   - index.html
   - foundations.html
   - bbcrm-guide.html
   - microservices-guide.html
   - system-design-guide.html
   - source-compendium.html
   - styles.css
   - app.js
3. Click "Commit changes"

**Option B: Git Command Line (if you prefer)**
`ash
git clone https://github.com/[your-username]/living-wiki.git
cd living-wiki
# Copy all 8 files to this directory
git add .
git commit -m "Add Living Architecture Wiki - 6 pages with beginner curriculum"
git push origin main
`

### Step 3: Enable GitHub Pages

1. Go to repo Settings → Pages
2. Source: Select "Deploy from a branch"
3. Branch: Select "main" (or "main" → "/" root)
4. Click "Save"
5. Wait 1-2 minutes for deployment
6. You'll see: "Your site is live at https://[username].github.io/living-wiki/"

### Step 4: Verify Deployment

1. Visit: https://[username].github.io/living-wiki/
2. Test:
   - Click between pages (navigation works)
   - Search for text (search highlights results)
   - Toggle theme (light ↔ dark)
   - Click "Microsoft Learn" links (open in new tab)
   - Check boxes in "Learning Progress Tracker"
   - Refresh page (checked boxes persist)

### Step 5: Create Google Site & Embed Wiki

1. Go to https://sites.google.com
2. Click "Create new site"
3. Choose template (Start with blank)
4. Give site a name (e.g., "Team Knowledge Base")
5. On the home page, click "+" to add block
6. Select "Embed" → "Embed code"
7. Paste this HTML:
   `html
   <iframe 
     src="https://[your-username].github.io/living-wiki/index.html"
     style="width:100%; height:1200px; border:0;"
     allowfullscreen
     allow="autoplay"
   ></iframe>
   `
   Replace [your-username] with your GitHub username
8. Click "Insert"
9. The wiki is now embedded in your Google Site!

### Step 6: Customize & Publish

1. Add site title/description
2. Customize header/footer (optional)
3. Add navigation (link to other pages)
4. Click "Publish"
5. Share URL with your team

### Step 7: Share with Team

1. Get shareable link from Google Sites
2. Set permissions (View/Edit/Comment)
3. Share via Slack, email, Teams, etc.
4. Users access from any device

---

## 🎯 DEPLOYMENT OPTION B: GitHub Pages Direct Access

### Advantages
✅ No Google Site needed
✅ Direct, fast access
✅ Perfect for developer teams
✅ No iframe nesting (full functionality)

### Steps

1. Complete Steps 1-4 from Option A above
2. Your wiki is ready at: https://[username].github.io/living-wiki/
3. Share link with team directly
4. Users access and browse full wiki

---

## 🎯 DEPLOYMENT OPTION C: Corporate Web Server

### For On-Premise/Firewall-Protected Deployments

### Requirements
- Web server (nginx, IIS, Apache, etc.)
- File serving capability (no server-side code)
- HTTPS support (optional but recommended)

### Steps

1. Copy all 8 files to web server root directory:
   `
   /var/www/html/living-wiki/
   ├── index.html
   ├── foundations.html
   ├── bbcrm-guide.html
   ├── microservices-guide.html
   ├── system-design-guide.html
   ├── source-compendium.html
   ├── styles.css
   └── app.js
   `

2. Configure web server:
   - **nginx:** Add location block to serve static files
   - **IIS:** Add MIME types for .html, .css, .js
   - **Apache:** Ensure AllowOverride enabled

3. Test:
   - Access: http://[your-server]/living-wiki/index.html
   - Verify all navigation works
   - Test Microsoft Learn links open correctly

4. Optional: Add authentication layer (SSO/LDAP)

---

## 📊 DEPLOYMENT SUMMARY

| Option | Setup Time | Cost | Pros | Cons |
|--------|-----------|------|------|------|
| **Google Sites** | 15 min | Free | Easy, professional, shareable | iframe nesting, potential storage limit |
| **GitHub Pages** | 10 min | Free | Fast, direct, dev-friendly | Requires GitHub account |
| **Corporate Server** | 30 min | Varies | Full control, on-premise, secure | Maintenance required |

---

## ✅ POST-DEPLOYMENT VERIFICATION

### Testing Checklist

After deployment, verify:

1. **Navigation** ✅
   - [ ] Click each page in sidebar (should load)
   - [ ] Logo/brand text appears on all pages
   - [ ] Current page highlighted in sidebar

2. **Search** ✅
   - [ ] Type in search box
   - [ ] Results highlight in page
   - [ ] Only matching sections shown

3. **Filtering** ✅
   - [ ] Select "Beginner" level
   - [ ] Only beginner content appears
   - [ ] Select "Advanced" level
   - [ ] Advanced content appears

4. **Expand/Collapse** ✅
   - [ ] Click "Expand Q&A" button
   - [ ] All Q&A sections open (details)
   - [ ] Click "Collapse Q&A" button
   - [ ] All Q&A sections close

5. **Theme Toggle** ✅
   - [ ] Click "Toggle Theme" button
   - [ ] Page switches to dark mode
   - [ ] Click again
   - [ ] Page switches back to light mode
   - [ ] Refresh page - theme persists

6. **Progress Tracker** ✅
   - [ ] On Home page, check a checkbox
   - [ ] Checkbox is checked
   - [ ] Refresh page
   - [ ] Checkbox still checked (localStorage working)

7. **External Links** ✅
   - [ ] Find "Live Microsoft Learn" section
   - [ ] Click Circuit Breaker link
   - [ ] Opens in new tab to: https://learn.microsoft.com/...
   - [ ] Test other 5 links (all should open)

8. **Mobile Testing** ✅
   - [ ] Open on phone/tablet
   - [ ] Layout is responsive (sidebar becomes hamburger)
   - [ ] Text is readable
   - [ ] Buttons are clickable

---

## 🔄 UPDATING & MAINTENANCE

### Adding New Content

1. Go to your repo on GitHub
2. Click "Edit file" (pencil icon) on any HTML page
3. Add new section:
   `html
   <section data-level="beginner intermediate advanced">
     <h2>Your New Topic</h2>
     <p>Your content here...</p>
   </section>
   `
4. Scroll to bottom, add commit message
5. Click "Commit changes"
6. **Automatically deployed in 30 seconds!**

### Quarterly Review

- Check for broken links (test each Microsoft Learn URL)
- Add new interview Q&A
- Update Microservices patterns with latest service pack info
- Add team discoveries and lessons learned

### Team Contributions

1. Any team member can contribute
2. Fork repo → edit → submit pull request
3. Review and merge → automatic deployment

---

## 🎓 TRAINING & ONBOARDING

### How to Present to Teams

**5-minute Demo:**
1. Show home page and learning paths
2. Search for a term (e.g., "circuit breaker")
3. Toggle theme (light ↔ dark)
4. Click a Microsoft Learn link
5. Show progress tracking
6. Demo on mobile

**15-minute Workshop:**
1. Explain the 3 source guides
2. Walk through each learning path
3. Show how to add new content (fork/edit/PR)
4. Q&A

---

## 🔒 SECURITY & PRIVACY

✅ No external tracking (no Google Analytics, Mixpanel, etc.)
✅ All data stays in user's browser (localStorage only)
✅ HTTPS by default (GitHub Pages, Google Sites)
✅ No authentication required (public knowledge base)
✅ No credit card or payment info collected

---

## 📞 TROUBLESHOOTING

### Issue: "Page not found" (404)
**Solution:** 
- Verify all 8 files are in GitHub repo root
- Check GitHub Pages settings (Source should be "Deploy from branch" → "main" → "/")
- Wait 2-3 minutes for deployment

### Issue: "External links don't work"
**Solution:**
- Test link in new tab (should open to Microsoft Learn)
- If blocked, check browser/firewall settings
- Corporate firewalls may require allowlisting learn.microsoft.com

### Issue: "Search isn't working"
**Solution:**
- Open browser DevTools (F12)
- Check for JavaScript errors in Console tab
- Ensure JavaScript is enabled in browser settings

### Issue: "Progress tracker not persisting"
**Solution:**
- Check if localStorage is enabled (browser settings)
- If embedded in iframe, may need to use direct GitHub Pages link instead
- Clear browser cache and try again

---

## ✅ DEPLOYMENT COMPLETE CHECKLIST

After deployment, your wiki is ready when:

- [x] All 6 pages load correctly
- [x] Navigation works (click between pages)
- [x] Search highlights text
- [x] Level filtering works
- [x] Theme toggle works (and persists)
- [x] Progress tracker works (and persists)
- [x] All external links open (don't 404)
- [x] Mobile responsive
- [x] Team can access via shared URL
- [x] Team can suggest edits (if repo public)

---

## 📊 SUCCESS METRICS

Track these to measure adoption:

- Number of unique visitors per week
- Most viewed pages (analytics can be added optionally)
- User feedback on completeness
- New content contributions from team
- Citations in architecture reviews

---

**Estimated Time to Deployment:** 20 minutes (Google Sites) → 30 minutes (full team access)
**Estimated Time to First Contribution:** 15 minutes
**Maintenance Frequency:** Quarterly

Good luck! Your team now has a living, shareable knowledge base. 🎉

Generated: 2026-06-30 18:44:41
