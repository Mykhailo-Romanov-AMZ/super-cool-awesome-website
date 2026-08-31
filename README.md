# Ministry of Feline Affairs

A single-page satirical website where cats run a formal government — part bureaucratic
parody, part public-facing site. Built with plain HTML, CSS, and JavaScript. No frameworks,
no external dependencies (all images are stored locally).

Live on GitHub: https://github.com/Mykhailo-Romanov-AMZ/super-cool-awesome-website

## Sections

- **Hero** — Minister's official portrait and the Ministry's mission statement
- **Mission** — Chapter I, with registry statistics
- **Official Supporters** — a row of countries and alliances that defer to feline authority
- **Regulations** — Chapter II: the fines table plus an interactive *Citizen Self-Audit*
- **Inspections** — Chapter III: the numbered official procedure
- **Notice Board** — expandable notices plus an *Emergency Decree Facility*
- **Staff Roster** — a gallery of 100 hard-working (and hard-sleeping) cats
- **Careers** — open positions at the Ministry
- **File a Report** — contact form that issues an official receipt

## Interactions (vanilla JavaScript)

| Interaction | Trigger | Function |
|-------------|---------|----------|
| Mobile nav toggle | click | `toggleNav` |
| Report form receipt | submit | `submitReport` |
| Notice accordion | click | `toggleNotice` |
| Fine self-audit | submit | `calculateFines` |
| Random decree | click | `issueDecree` |

## Project structure

- `index.html` — semantic HTML structure
- `styles.css` — the visual design (formal navy/cream/muted-gold palette)
- `script.js` — all interactive behavior
- `project_brief.md` — the planning document (concept, visual plan, interactions, architecture)
- `images/` — cat photographs (`cat-001.jpg`–`cat-090.jpg`, staff and portrait shots) and `flags/` (country flags + UN/NATO/Asia-Pacific insignia)

## Run it locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000