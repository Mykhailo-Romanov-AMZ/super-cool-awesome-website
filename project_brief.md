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

**Mood and Tone:** Formal, official, gently absurd — a touch of humor and a touch of formality.

**Color Palette:**
- Background: warm cream `#f7f2e7`
- Primary Text: navy ink `#1e2b3a`
- Brand Color: deep navy `#1e3a5f`
- Accent: seal gold `#c9a227`

**Typography:**
- Heading Font: Georgia (serif — official feel)
- Body Font: system-ui sans-serif

**Layout Approach:** Single centered column (max-width ~960px), sticky top navigation, gold rules under headings, card-based sections.

**Images & Graphics Style:** No photos — a simple inline SVG cat crest and clean, line-style touches.

**Button & UI Style:** Flat navy buttons with gold hover accent, rounded corners; form fields with formal labels.

---

## 3. Interaction Specifications

### Interaction 1
- **Interaction Name:** Mobile navigation toggle
- **Visitor Action:** Clicks the menu button on small screens
- **Page Response:** The navigation menu expands/collapses
- **HTML Elements:** `#nav-toggle` button, `#site-nav` menu
- **JS Event:** `click`
- **Function Name:** `toggleNav`
- **CSS Class Toggled:** `.nav-open`

### Interaction 2
- **Interaction Name:** Report form submission
- **Visitor Action:** Fills in and submits the contact form
- **Page Response:** The form is hidden and an official "receipt" confirmation is shown
- **HTML Elements:** `#report-form`, `#report-confirmation`
- **JS Event:** `submit`
- **Function Name:** `submitReport`
- **CSS Class Toggled:** `.hidden`

### Interaction 3
- **Interaction Name:** Notice accordion
- **Visitor Action:** Clicks a notice heading on the Public Notice Board
- **Page Response:** The notice body expands or collapses
- **HTML Elements:** `button.notice-header`, parent `.notice` block
- **JS Event:** `click`
- **Function Name:** `toggleNotice`
- **CSS Class Toggled:** `.open`

---

## 4. Architecture Plan

**HTML Structure Plan:**
`header` (brand, nav, toggle button) → `main` → `section.hero` → `section#mission` → `section#regulations` (fines table) → `section#inspections` (numbered steps) → `section#notices` (accordion) → `section#contact` (form + confirmation) → `footer`. Semantic elements with ids/classes matching the interactions above.

**CSS Architecture Plan:**
Custom properties in `:root`, a light reset, sticky header, hero, section headings with gold rules, cards, fines table, accordion, form styles, footer, then a mobile media query for the navigation.

**JavaScript Function Map:**
`toggleNav`, `submitReport`, `toggleNotice`, plus an `init` the wires each listener on load.

**Implementation Steps:**
1) Complete this brief  2) Build `index.html`  3) Style with `styles.css`  4) Add behavior with `script.js`  5) Verify it loads and behaves correctly.