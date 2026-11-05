# 30-Task Website Quality Pass

This is the implementation and acceptance checklist for the Pawar Borewell's homepage. It records concrete changes and the checks used to validate them.

| # | Task | Result |
|---|---|---|
| 1 | Review the homepage from the first screen to the footer | Checked layout, content, products, location, FAQ and contact paths |
| 2 | Check a narrow 320 px phone viewport | No page-wide horizontal overflow |
| 3 | Check a common 390 px phone viewport | Hero, cards, navigation and form fit |
| 4 | Check a 768 px tablet viewport | Header, two-column products and hero fit |
| 5 | Check desktop layout at 1280 px | Hero and header fit without page-wide overflow |
| 6 | Keep the three public phone numbers in the requested order | Footer shows 70209 89156, 94211 07110, 77980 01919 |
| 7 | Keep WhatsApp on the established business number | WhatsApp links use 94211 07110 |
| 8 | Keep map and directions links consistent | Both use the Gad-Mudshingi destination |
| 9 | Centralize site contact and map values | Added `app/site-config.js` |
| 10 | Align the service-area description across languages | English, Marathi and Hindi now describe coverage across Maharashtra |
| 11 | Add a keyboard skip link | Visible on focus and lands on the main content |
| 12 | Label major content sections | Services, products, location and FAQ use their headings as accessible names |
| 13 | Show the active section in navigation | Desktop and mobile navigation follow the viewed section |
| 14 | Remember the selected language | Selection survives a reload |
| 15 | Match the document language to the selected language | `html` language updates for English, Marathi and Hindi |
| 16 | Translate photo and carousel control labels | Controls follow the selected language |
| 17 | Let keyboard users move service and product carousels | Arrow keys, Home and End work on a focused carousel |
| 18 | Announce the carousel's current position | Live slide counts update as cards change |
| 19 | Keep carousel controls within valid bounds | Previous and next disable at the ends |
| 20 | Add clear previous and next controls to the full photo viewer | Viewer controls are visible and labeled |
| 21 | Support photo swipes on touch screens | Horizontal swipe changes a multi-photo item |
| 22 | Return keyboard focus after closing a photo | Focus goes back to the product's photo button |
| 23 | Support Escape and focus containment in photo viewer | The dialog closes with Escape and keeps Tab inside |
| 24 | Make the enquiry dialog stable in React development mode | Opening it no longer closes it immediately during effect replay |
| 25 | Trim submitted enquiry text | Name, location and message whitespace is removed |
| 26 | Restrict the mobile field to ten numeric characters | Non-digits are removed while typing |
| 27 | Focus and explain invalid enquiry fields | Required fields get inline error text and `aria-invalid` |
| 28 | Keep the site open during the WhatsApp handoff | Enquiry opens a new tab and provides a fallback link; user reviews and sends the message |
| 29 | Improve focus, motion and mobile safe-area behavior | Visible focus rings, reduced-motion support and bottom-bar inset spacing |
| 30 | Improve search/share metadata and verify release | Canonical URL, social preview, favicon, LocalBusiness data, robots, sitemap, build and live verification |

## Verification

- Local responsive review: 320 px, 390 px, 768 px and 1280 px.
- Manual interaction review: service carousel, product viewer, language persistence, enquiry popup and invalid-field focus.
- Production build and deployed URL checked before completion.
