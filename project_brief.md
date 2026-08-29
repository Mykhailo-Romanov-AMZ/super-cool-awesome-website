# Project Brief

## 1. Website Concept

**Website Topic:** The Ministry of Feline Affairs — a single-page satirical website where cats run a formal government.

**Why:** To practice building a professional, business-style single-page site (formal layout, tables, forms, structured copy) while having fun with cat bureaucracy humor.

**Target Audience:** Cat owners, cat fans, and cat-adjacent citizens who enjoy official-tone humor. Presented with a polished, corporate/government-friendly aesthetic.

**Visitor Outcome:** Visitors are entertained by the official tone, learn the "regulations," and file a report through the contact form.

**Three Main Sections:** Mission, Licensing & Regulations, Inspections — plus a Public Notice Board and a Contact form.

**Key Highlight:** The official fines table and the straight-faced bureaucratic copy.

---

## 2. Visual Plan

**Mood and Tone:** Straight-faced bureaucracy with a wink — formal first, funny second. Classic government-document feel so the absurd cat copy lands harder.

**Color Palette:**
- Background: warm paper cream `#F7F2E7`
- Primary Text: near-black navy ink `#1E2B3A`
- Brand Color: deep navy `#1E3A5F`
- Accent: muted seal gold `#A8871D` (used sparingly for rules, borders, hovers — restrained and formal)

**Typography:**
- Heading Font: Georgia (official serif)
- Body Font: system-ui sans-serif

**Layout Approach:** Sticky top bar (crest + navy wordmark + nav links); centered single column (max-width ~960px); section headings with a muted-gold underline rule; cards for the fines table and notice board; numbered gold-bordered steps for inspections. Hero is a light "crest hero" (cream/paper background) with a large navy serif title — a formal document cover feel — and a dark navy footer bookend.

**Images & Graphics Style:** No photos or external assets — a larger, refined inline SVG cat crest (paw-in-a-ring) as the hero centerpiece, reused in the header.

**Button & UI Style:** Flat navy buttons with muted-gold hover; gold hero CTA; subtle rounded corners and thin borders — official, not scary. Form fields with formal labels.

---

## 3. Interaction Specifications

### Interaction 1
- **Interaction Name:** Mobile navigation toggle
- **Visitor Action:** Clicks the menu button on small screens
- **Page Response:** The navigation menu expands/collapses
- **HTML Elements (provisional):** `#nav-toggle` button, `#site-nav` menu
- **JS Event:** `click`
- **Function Name:** `toggleNav`
- **CSS Class Toggled:** `.nav-open`

### Interaction 2
- **Interaction Name:** Report form submission
- **Visitor Action:** Fills in and submits the contact form
- **Page Response:** The form is hidden and an official "receipt" confirmation is shown
- **HTML Elements (provisional):** `#report-form`, `#report-confirmation`
- **JS Event:** `submit`
- **Function Name:** `submitReport`
- **CSS Class Toggled:** `.hidden`

### Interaction 3
- **Interaction Name:** Notice accordion
- **Visitor Action:** Clicks a notice heading on the Public Notice Board
- **Page Response:** The notice body expands or collapses
- **HTML Elements (provisional):** `button.notice-header`, parent `.notice` block
- **JS Event:** `click`
- **Function Name:** `toggleNotice`
- **CSS Class Toggled:** `.open`

### Interaction 4
- **Interaction Name:** Citizen fine self-audit
- **Visitor Action:** Checks off offenses (with fines) in the regulations section and clicks "Calculate Penalties"
- **Page Response:** A running fine total and an official verdict appear
- **HTML Elements (provisional):** `#audit-form` checkboxes, `#audit-total` result panel
- **JS Event:** `submit`
- **Function Name:** `calculateFines`
- **CSS Class Toggled:** `.hidden`

### Interaction 5
- **Interaction Name:** Random decree generator
- **Visitor Action:** Clicks "Issue Emergency Decree" on the Public Notice Board
- **Page Response:** A randomly chosen official proclamation is displayed in a formal decree panel
- **HTML Elements (provisional):** `#decree-button`, `#decree-output`, `#decree-text`
- **JS Event:** `click`
- **Function Name:** `issueDecree`
- **CSS Class Toggled:** `.hidden`

---

## 4. Architecture Plan

**HTML Structure Plan:**
`header` (brand, nav, toggle button) → `main` → `section.hero` → `section#mission` → `section#regulations` (fines table + self-audit form) → `section#inspections` (numbered steps) → `section#notices` (accordion + decree facility) → `section#contact` (form + confirmation) → `footer`. Semantic elements with ids/classes matching the interactions above.

**CSS Architecture Plan:**
Custom properties in `:root`, a light reset, sticky header, hero, section headings with gold rules, cards, fines table, self-audit list, accordion, decree panel, form styles, footer, then a mobile media query for the navigation.

**JavaScript Function Map:**
`toggleNav`, `submitReport`, `toggleNotice`, `calculateFines`, `issueDecree`, plus an `init` that wires each listener on load.

**Implementation Steps:**
1) Complete this brief  2) Build `index.html`  3) Style with `styles.css`  4) Add behavior with `script.js`  5) Verify it loads and behaves correctly.