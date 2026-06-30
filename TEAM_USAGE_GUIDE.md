# 👥 TEAM SETUP & USAGE GUIDE

**Wildcards Wiki - Getting Your Team Started**
**Version:** 1.0
**Updated:** 2026-06-30

---

## 🎯 QUICK START (5 MINUTES)

### For End Users (Reading the Wiki)
1. Receive wiki URL from your team
2. Click the link
3. Start on **Home** page (overview of 4 learning paths)
4. Choose your path:
   - **New Joiner** → "Beginner Foundations"
   - **Product Context** → "BBCRM & SKY Guide"
   - **Architecture Skills** → "Microservices Guide"
   - **Interview Prep** → "System Design Guide"
5. Use **Search** (top bar) to find topics
6. Use **Level filter** (top bar) to hide advanced content
7. Click **Toggle Theme** to switch dark/light mode
8. Check boxes to track your progress (saved in browser)

### For Team Admins (Setting Up Wiki)
1. Choose deployment: GitHub Pages (easiest)
2. Follow "DEPLOYMENT_GUIDE.md" (20 minutes)
3. Share link with team
4. Announce in Slack/Teams

### For Content Contributors (Adding Knowledge)
1. Find topic you want to add/edit
2. Go to GitHub repo
3. Click "Edit file" (pencil icon)
4. Make changes
5. Commit (30 seconds to deploy)
6. Changes live immediately!

---

## 📚 UNDERSTANDING THE WIKI STRUCTURE

### Home Page (index.html)
**Purpose:** Overview, learning paths, progress tracker
**For:** Everyone (entry point)
- Learning path guidance (which page to read first)
- Coverage matrix (what's in the wiki)
- Progress tracker (checkboxes)
- Governance notes
- Live Microsoft Learn recommendations

**Key Sections:**
- "How to Use This Website" (start here!)
- "Learning Progress Tracker" (mark your progress)
- "Live Microsoft Learn Companion" (external references)

---

### Beginner Foundations (foundations.html)
**Purpose:** Learn from scratch, no prerequisites
**For:** New team members, career changers, non-technical stakeholders
**Time:** 4-6 hours

**Covers:**
1. Big Picture in Plain Language
2. Internet and API Basics You Must Know
3. Security Basics Without Confusion
4. Request Lifecycle (end-to-end flow)
5. Beginner Learning Plan
6. Hands-On Lab Sequences
7. Q&A Drill-Downs
8. Live Microsoft Learn Path

**Why Start Here?**
- Removes jargon first
- Explains things in plain language
- Includes real-world analogies
- No prior knowledge assumed

---

### BBCRM & SKY Guide (bbcrm-guide.html)
**Purpose:** Platform-specific knowledge
**For:** Product managers, platform developers, support team
**Time:** 8-12 hours

**Covers:**
1. BBCRM Functional Overview (constituent management, fundraising)
2. Infinity Framework (technical core, metadata-driven)
3. SKY Translation Layer (anti-corruption, Strangler pattern)
4. Security (authentication, identity mapping, mTLS)
5. CI/CD (classic release model vs modern canary)
6. Architecture Patterns (circuit breaker, bulkhead, etc.)
7. Interview Q&A (25+ common questions)

**Glossary:** 15+ terms (toggle with details blocks)

**Key Learning:**
- How BBCRM deploys and scales
- How modern clients consume legacy BBCRM via SKY
- Security model and identity mapping
- Release process and deployment strategy

---

### Microservices Guide (microservices-guide.html)
**Purpose:** Distributed systems architecture
**For:** Backend engineers, architects, tech leads
**Time:** 12-16 hours

**Covers:**
1. What Are Microservices? (definition, 6 core principles)
2. Architecture Design (7-step discovery process)
3. Communication (sync, async, API gateways)
4. Data Patterns (database per service, consistency)
5. Resilience Patterns (circuit breaker, bulkhead, compensation)
6. Testing & Observability (integration testing, distributed tracing)
7. Interview Q&A (30+ questions)

**Special Additions:**
- Service Types Playbook (which service type for which domain)
- WhatsApp Microservices Analogy (helps beginners understand)

**Glossary:** 20+ terms

**Key Learning:**
- When and why to use microservices
- How to design service boundaries
- Resilience patterns and failure handling
- Testing in distributed systems

---

### System Design Guide (system-design-guide.html)
**Purpose:** Interview preparation & architecture thinking
**For:** Interviewees, architects, senior engineers
**Time:** 20-24 hours

**Covers:**
1. The 7-Step Framework (with timing breakdown)
2. Core Building Blocks (15 vocabulary items + CAP theorem)
3. Five Worked Design Problems:
   - Design YouTube
   - Design a Distributed Cache
   - Design Payments Platform
   - Design Rate Limiter
   - Design Notification System

**Key Learning:**
- Structured approach to system design
- Key vocabulary and trade-off analysis
- Real-world design patterns and tradeoffs
- How to communicate design decisions

---

### Source Compendium (source-compendium.html)
**Purpose:** Verbatim archive of original source documents
**For:** Auditing, archival, reference (advanced users)

**Contains:**
- Exact page-by-page transcripts from all 3 source documents
- Live Microsoft Learn extension links
- Useful for historical reference and complete audit trail

---

## 🔍 HOW TO USE SEARCH

### Basic Search
1. Type in "Search this page..." box (top of page)
2. Matching text highlights in yellow
3. Only sections with matches stay visible
4. Clear search to see all content

### Advanced Tips
- Search for patterns: "circuit" finds "circuit breaker"
- Search for domains: "payment" finds payment topics
- Search for acronyms: "CI/CD" finds release process
- Search for roles: "architect" finds architect-level content

### Example Searches
- "circuit breaker" → all resilience patterns
- "authentication" → all security sections
- "database" → all data storage options
- "interview" → all Q&A sections
- "AWS" or "Azure" → all cloud references

---

## 🎓 CHOOSING YOUR LEARNING PATH

### Path 1: Week 1 - Absolute Beginner Onboarding
**Goal:** Understand the basics, get context
**Time:** 4-6 hours
**Pages to Read:**
1. Home page (overview, 10 min)
2. Beginner Foundations (full 8 sections, 4-6 hours)
3. BBCRM & SKY Guide - Section 1 only (Functional Overview, 30 min)

**Outcomes:**
- Know what BBCRM does and why it matters
- Understand APIs, REST, HTTP basics
- Know security basics (auth, authorization, identity)
- Familiar with request flow
- Completed beginner labs

**Checkpoint:** Can you explain "What does BBCRM do?" in 3 sentences?

---

### Path 2: Weeks 2-4 - Platform Developer Track
**Goal:** Deep platform knowledge, ready to code
**Time:** 12-16 hours
**Pages to Read:**
1. All of Beginner Foundations (if not done, 4 hours)
2. All of BBCRM & SKY Guide (full 7 sections, 8-12 hours)
3. Microservices Guide - Sections 1-3 only (5 hours)

**Outcomes:**
- Understand BBCRM deployment model
- Know Infinity Framework metadata-driven design
- Understand SKY translation layer architecture
- Know security model and CI/CD process
- Know microservices communication patterns
- Ready to write production code against BBCRM/SKY

**Checkpoint:** Can you explain the SKY anti-corruption layer in 5 minutes?

---

### Path 3: Months 2-3 - Architect in Training Track
**Goal:** Full architecture knowledge, ready to design
**Time:** 30-40 hours
**Pages to Read:**
1. Beginner Foundations (if not done, 4-6 hours)
2. BBCRM & SKY Guide (full 7 sections, 8-12 hours)
3. Microservices Guide (full 7 + additions, 12-16 hours)
4. System Design Guide - Parts 1 & 2 only (8-10 hours)

**Outcomes:**
- Complete platform expertise
- Microservices design skills
- Understanding of distributed systems trade-offs
- Architecture vocabulary and thinking
- Ready to lead architecture reviews

**Checkpoint:** Can you design a simple distributed system and defend your choices?

---

### Path 4: Weeks 1-2 (Intensive) - Interview Prep
**Goal:** Pass system design interviews
**Time:** 20-24 hours
**Pages to Read:**
1. Home page (overview, 10 min)
2. System Design Guide (all 3 parts, 20-24 hours):
   - Part 1: 7-step framework
   - Part 2: Core building blocks vocabulary
   - Part 3: Five worked design problems
3. Microservices Guide (sections 1-3, quick refresher, 3 hours)

**Outcomes:**
- Master 7-step system design framework
- Fluent with architectural vocabulary
- Practiced on 5 real design problems
- Confident with trade-off communication
- Interview-ready

**Checkpoint:** Can you design a system for 1 million users in 30 minutes?

---

## 💾 PROGRESS TRACKING

### How It Works
1. Check boxes next to items you've completed
2. Status saves automatically (in your browser)
3. Refresh page - checked boxes stay checked
4. Only persists on THIS browser (not synced across devices)

### What To Track
Each page has a "Learning Progress Tracker" section:
- **Home page:** Mark after completing each major guide
- **Foundations:** Mark sections as you complete them
- **BBCRM Guide:** Mark sections after reading
- **Microservices:** Mark sections after reading
- **System Design:** Mark after doing each worked problem

### Why Track?
- See your progress at a glance
- Motivating visual feedback
- Know which sections you still need to complete
- Easy to pause and resume learning

---

## 🔗 EXTERNAL RESOURCES

### Microsoft Learn Links (Live Documentation)
Every guide includes direct links to:
- **Circuit Breaker Pattern** - fail-fast states
- **Strangler Fig Pattern** - modernization strategy
- **Compensating Transaction** - distributed transaction handling
- **gRPC on .NET** - high-performance RPC
- **API Management** - gateway policies
- **AKS Mission Critical** - Kubernetes reliability

**Why External Links?**
- Keep wiki current (no manual doc updates)
- Continuous learning (latest patterns always available)
- Deeper dives (learn from Microsoft experts)
- Implementation details (code examples, configs)

---

## ✏️ CONTRIBUTING TO THE WIKI

### For Non-Technical Contributors (Word Docs)
1. Write your knowledge in Google Docs or Word
2. Send to wiki maintainer
3. Maintainer adds to wiki and attributes you

### For Technical Contributors (Direct Edit)
1. Go to GitHub repo: https://github.com/[org]/living-wiki
2. Find the HTML file to edit
3. Click "Edit file" (pencil icon)
4. Find the section to add/update
5. Make changes following existing format
6. Commit message: "Add [topic] to [page]"
7. Click "Commit changes"
8. **Deployed in 30 seconds!**

### Content Templates

**Adding a Q&A Section:**
`html
<details>
  <summary>What is [topic]?</summary>
  <p><strong>Short answer:</strong> [1-2 sentences]</p>
  <p><strong>Detailed answer:</strong> [3-5 sentences explaining, with examples if possible]</p>
</details>
`

**Adding a New Topic:**
`html
<section data-level="beginner intermediate advanced">
  <h2>Your Topic Title</h2>
  <p>Introduction and context...</p>
  <h3>Subtopic</h3>
  <p>Details...</p>
  <table>
    <tr><th>Column 1</th><th>Column 2</th></tr>
    <tr><td>Data 1</td><td>Data 2</td></tr>
  </table>
</section>
`

**Adding an External Link:**
`html
<tr>
  <td>Pattern Name</td>
  <td><a target="_blank" rel="noopener" href="https://learn.microsoft.com/...">Microsoft Learn</a></td>
  <td>Why learner should read it.</td>
</tr>
`

---

## 📋 TEAM ROLES

### Wiki Admin (1-2 people)
**Responsibilities:**
- Maintain GitHub repo and deployments
- Review and merge contributions
- Quarterly content audits
- Keep external links current

**Weekly Time:** 2-3 hours

### Subject Matter Experts (3-4 people per domain)
**Responsibilities:**
- Update section content as designs change
- Answer questions from readers
- Suggest new topics based on learnings
- Share real-world project experiences

**Weekly Time:** 1-2 hours

### Readers (Everyone!)
**Responsibilities:**
- Use wiki as knowledge source
- Suggest improvements or corrections
- Contribute lessons learned
- Onboard new team members

**Weekly Time:** Self-paced learning

---

## 🎯 QUARTERLY REVIEW CHECKLIST

Every 3 months, review:
- [ ] All external links still working
- [ ] Service pack updates reflected in BBCRM section
- [ ] New architecture patterns added
- [ ] Recent incident post-mortems added as Q&A
- [ ] Beginner anecdotes/analogies fresh and relevant
- [ ] Interview Q&A reflects recent changes
- [ ] All 6 pages render correctly on mobile
- [ ] Light/dark mode styling consistent
- [ ] Search functionality working
- [ ] Team has contributed feedback

---

## ❓ FAQ

### Q: Can I edit the wiki on my phone?
**A:** Yes! GitHub editing works on mobile. Click edit file, make changes, commit. It's slow but doable.

### Q: What if I make a mistake in the wiki?
**A:** No problem! Edit again and commit the fix. It's versioned in Git, so no damage done.

### Q: How do I suggest changes without editing directly?
**A:** Open an issue in GitHub, or send to wiki admin with your suggestion.

### Q: Will my progress track across devices?
**A:** No, progress is stored in your browser's localStorage (local only). Use same device for consistent tracking.

### Q: Can I print the wiki?
**A:** Yes! Print from browser (Ctrl+P / Cmd+P) on any page. It's optimized for printing.

### Q: Who owns this wiki?
**A:** Owned by [Team Name / Platform Architecture Team]. Suggested rotation among senior ICs.

### Q: How do I onboard new team members?
**A:** Send them the wiki link, suggest Beginner Foundations for week 1, then your specific domain page.

### Q: Can we add this to Confluence/Notion/etc?
**A:** Yes! You can embed the wiki URL as an iframe in other tools, or export pages manually.

---

## 🚀 SUCCESS METRICS

Track these to measure wiki adoption:

- Unique users per week
- Pages viewed per week (add optional analytics)
- New contributions per quarter
- Time saved per new hire (onboarding time)
- Interview pass rates (before/after using wiki)
- Architecture review decisions made using patterns from wiki

---

## 📞 SUPPORT

### Getting Help
1. **Question about content?** Check Search bar
2. **Found broken link?** File GitHub issue
3. **Want to contribute?** See "Contributing to the Wiki"
4. **Technical issue?** Contact wiki admin

### Contact
- Wiki Admin: [name + email]
- Platform Team Slack: #platform-architecture
- Wiki GitHub: https://github.com/[org]/living-wiki

---

**Welcome to the Living Architecture Wiki!**

This knowledge base is maintained by your team, for your team. 
It grows as your knowledge grows. Start reading, start learning, start contributing.

Good luck! 🎓

---

Generated: 2026-06-30 18:46:16
